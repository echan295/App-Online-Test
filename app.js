const MIXED_LIMIT = 6;
const CLINICAL_LIMIT = 2;

let currentModule = [];
let currentIndex = 0;
let xp = parseInt(localStorage.getItem('pathXP')) || 0;
let currentActiveID = "";
let unlockedModules = JSON.parse(localStorage.getItem('pathUnlocked')) || ['0.1'];
// let unlockedModules = Object.keys(moduleContent); 

document.getElementById('xp-count').innerText = xp;

function shuffleArray(arr) { return arr.sort(() => Math.random() - 0.5); }

function formatText(rawText) {
    if (!rawText || typeof rawText !== 'string') return rawText || "";
    return rawText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') 
                  .replace(/_{3,}/g, '[[LINE]]')           
                  .replace(/_(.*?)_/g, '<i>$1</i>')       
                  .replace(/\[\[LINE\]\]/g, '____________') 
                  .replace(/\n/g, '<br>');                
}

function applyWindingPath() {
    const nodes = document.querySelectorAll('.path-node');
    nodes.forEach((node, index) => {
        // --- THE MATH ---
        // index * 0.9: Controls how fast the wave turns (frequency)
        // 80: Controls how far left/right the nodes go (amplitude)
        const xOffset = Math.sin(index * 0.8) * 70; 
        node.style.transform = `translateX(${xOffset}px)`;
    });
}

function updateMapUI() {
    unlockedModules.forEach(id => {
        const node = document.getElementById(`node-${id}`);
        if (node) { 
            node.classList.remove('locked'); 
            node.classList.add('unlocked'); 
        }
    });
    // Call the winding path logic
    applyWindingPath();
}
updateMapUI();

function showPreview(id) {
    if (!unlockedModules.includes(id)) return;
    const modal = document.getElementById('lesson-modal');
    const module = moduleContent[id];
    if (!module) return;
    document.getElementById('modal-title').innerText = module.title;
    const list = document.getElementById('modal-objectives');
    list.innerHTML = module.objectives.map(obj => `<li>${obj}</li>`).join('');
    document.getElementById('start-lesson-btn').onclick = () => { modal.classList.add('hidden'); startModule(id); };
    modal.classList.remove('hidden');
}

function closeModal() { document.getElementById('lesson-modal').classList.add('hidden'); }

function startModule(id) {
    currentActiveID = id;
    let module = moduleContent[id];
    if (!module) return;
    let raw = JSON.parse(JSON.stringify(module.data));

    // Shuffle Options
    raw.forEach(q => {
        if (q.options && Array.isArray(q.options) && q.options.length > 1) {
            if (typeof q.answer === 'number') {
                const correctText = q.options[q.answer]; 
                q.options = shuffleArray(q.options);    
                q.answer = q.options.indexOf(correctText); 
            } else if (Array.isArray(q.answer)) {
                const correctTexts = q.answer.map(idx => q.options[idx]);
                q.options = shuffleArray(q.options); 
                q.answer = correctTexts.map(text => q.options.indexOf(text));
            }
        }
    });

    if (["0.", "1."].some(prefix => id.startsWith(prefix))) {
        currentModule = raw;
    } else {
        let concepts = raw.filter(i => i.type === "concept");
        let mixed = raw.filter(i => i.type !== "concept");
        currentModule = [...concepts, ...shuffleArray(mixed).slice(0, 8)];
    }
    
    currentIndex = 0;
    document.getElementById('map-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');
    renderScreen();
}

function renderScreen() {
    const data = currentModule[currentIndex];
    const stage = document.getElementById('stage');
    if (!data) return;
    stage.innerHTML = ''; 
    document.getElementById('feedback-bar').classList.remove('show');
    document.getElementById('progress-bar').style.width = (currentIndex / currentModule.length * 100) + "%";

    const reviewHeader = data.isReview ? `<div class="review-text">⚠️ Reviewing Mistake</div>` : '';

    if (data.type === "concept") {
        stage.innerHTML = `
            <h2 style="color:var(--blue)">${formatText(data.title)}</h2>
            <div style="font-size: 1.1rem; text-align:left; line-height:1.6; margin-bottom:20px;">${formatText(data.text)}</div>
            ${data.subtext ? `<div class="concept-card" style="border-left:5px solid var(--blue); padding:15px; background:#f0f8ff; border-radius:15px; text-align:left; margin-bottom:20px;">${formatText(data.subtext)}</div>` : ''}
            <button class="primary-btn" onclick="advanceStep()">${data.buttonText || 'Continue'}</button>
        `;
    }
    else if (data.type === "flashcard") {
        stage.innerHTML = `
            <div class="flashcard-scene" onclick="flipCard()">
                <div class="flashcard" id="card-inner">
                    <div class="flashcard-face flashcard-front">${data.front}<div style="font-size:0.8rem; color:#ccc; margin-top:20px;">Tap to flip</div></div>
                    <div class="flashcard-face flashcard-back"><div style="font-weight:bold; color:var(--blue);">Definition:</div>${formatText(data.back)}<div class="flashcard-extra" style="margin-top:15px; font-style:italic; font-size:0.8rem; border-top:1px solid #eee; padding-top:10px;">${formatText(data.extra)}</div></div>
                </div>
            </div>
            <button id="flash-btn" class="primary-btn" style="display:none;" onclick="advanceStep()">${data.buttonText || 'Continue'}</button>
        `;
    }
    else if (data.type === "fill") {
        const ansLen = Array.isArray(data.answer) ? data.answer.length : 1;
        window.userSelections = new Array(ansLen).fill(null);
        let blankCount = 0;
        const qText = formatText(data.question).replace(/_{3,}/g, () => `<span id="blank-${blankCount++}" class="fill-blank clickable-blank" onclick="clearBlank(${blankCount-1})">&nbsp;</span>`);
        stage.innerHTML = `${reviewHeader}<div class="fill-instruction">Tap to fill, tap blank to clear</div><h3 style="text-align:left;">${qText}</h3>
            <div id="options" class="word-bank">${data.options.map((opt, i) => `<button class="option-btn fill-option" id="option-${i}" onclick="checkFill(${i}, this, '${opt.replace(/'/g, "\\'")}')">${formatText(opt)}</button>`).join('')}</div>
            <button id="verify-fill-btn" class="primary-btn" style="display:none; margin-top:20px;" onclick="verifyFill()">CHECK ANSWER</button>`;
    }
    else if (data.type === "sort") {
        window.selectedChip = null;
        stage.innerHTML = `
            ${reviewHeader}<h3>${formatText(data.question)}</h3>
            <div id="sort-pool" class="sort-pool">
                ${shuffleArray([...data.items]).map((item, i) => `
                    <div class="draggable-chip" id="chip-${i}" onclick="selectChip(this)" data-correct="${item.bucket}">${item.text}</div>
                `).join('')}
            </div>
            <div class="bucket-container">
                ${data.buckets.map((b, i) => `
                    <div class="sort-bucket" onclick="placeInBucket(this)" data-id="${i}">
                        <span class="unit-tag" style="position:static; font-size:0.6rem;">${b}</span>
                    </div>
                `).join('')}
            </div>
            <button id="verify-sort-btn" class="primary-btn" style="display:none;" onclick="verifySort()">CHECK ANSWER</button>`;
    }
    else if (data.type === "order") {
        window.userOrder = [];
        stage.innerHTML = `${reviewHeader}<h3>${formatText(data.question)}</h3>
            <div class="order-slots">${data.items.map((_, i) => `<div class="order-slot" id="slot-${i}">?</div>`).join('')}</div>
            <div class="sort-pool">${shuffleArray([...data.items]).map((item, i) => `<button class="draggable-chip" id="chip-${i}" onclick="handleOrderTap('${item.replace(/'/g, "\\'")}', ${i})">${item}</button>`).join('')}</div>`;
    }
    else if (data.type === "match") {
        window.userPairs = []; window.activeSelection = { left: null, right: null };
        const leftCol = shuffleArray(data.pairs.map((p, i) => ({ text: p.left, id: i })));
        const rightCol = shuffleArray(data.pairs.map((p, i) => ({ text: p.right, id: i })));
        stage.innerHTML = `${reviewHeader}<h3>${formatText(data.question)}</h3><div class="match-container">
            <div class="match-column">${leftCol.map(item => `<button class="option-btn match-btn" id="left-${item.id}" onclick="handleMatchTap('left', ${item.id})">${item.text}</button>`).join('')}</div>
            <div class="match-column">${rightCol.map(item => `<button class="option-btn match-btn" id="right-${item.id}" onclick="handleMatchTap('right', ${item.id})">${item.text}</button>`).join('')}</div>
        </div><button id="verify-match-btn" class="primary-btn" style="display:none; margin-top:20px;" onclick="verifyMatch()">CHECK ANSWER</button>`;
    }
    else {
        const header = data.type === "clinical" ? `<div style="color:var(--blue);font-weight:bold;margin-bottom:10px;">🩺 CLINICAL CASE</div>` : '';
        stage.innerHTML = `${reviewHeader}${header}<h3>${formatText(data.question)}</h3><div id="options">${data.options.map((opt, i) => `<button class="option-btn" onclick="checkMCQ(${i}, this)">${formatText(opt)}</button>`).join('')}</div>`;
    }
}

// HANDLERS
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function allowDrop(ev) { ev.preventDefault(); }
function drop(ev) {
    ev.preventDefault();
    let target = ev.target.closest('.sort-bucket, .sort-pool');
    if (target) target.appendChild(document.getElementById(ev.dataTransfer.getData("text")));
}

function verifySort() {
    const data = currentModule[currentIndex];
    const buckets = document.querySelectorAll('.sort-bucket');
    let correct = true, placed = 0;
    buckets.forEach(b => {
        const bId = b.getAttribute('data-id');
        b.querySelectorAll('.draggable-chip').forEach(c => { placed++; if(c.getAttribute('data-correct') !== bId) correct = false; });
    });
    if (placed < data.items.length) return alert("Sort all items!");
    if (correct) showFeedback(true, "✨ Correct!", data.explanation);
    else { addToMistakes(data); showFeedback(false, "❌ Not Quite", data.explanation); }
}

function selectChip(el) {
    document.querySelectorAll('.draggable-chip').forEach(c => c.style.borderColor = "var(--gray-light)");
    el.style.borderColor = "var(--blue)";
    window.selectedChip = el;
}

function placeInBucket(bucketEl) {
    if (!window.selectedChip) return;
    bucketEl.appendChild(window.selectedChip);
    window.selectedChip.style.borderColor = "var(--gray-light)";
    window.selectedChip = null;
    
    // Show check button if pool is empty
    const pool = document.getElementById('sort-pool');
    if (pool.children.length === 0) {
        document.getElementById('verify-sort-btn').style.display = "block";
    }
}

function handleOrderTap(val, idx) {
    const data = currentModule[currentIndex];
    const slotIdx = window.userOrder.length;
    if (val === data.items[slotIdx]) {
        window.userOrder.push(val);
        document.getElementById(`slot-${slotIdx}`).innerText = `${slotIdx+1}. ${val}`;
        document.getElementById(`chip-${idx}`).style.visibility = "hidden";
        if (window.userOrder.length === data.items.length) showFeedback(true, "Perfect!", data.explanation);
    } else 
    {
        // Disable chips so they can't spam wrong answers
        document.querySelectorAll('.draggable-chip').forEach(b => b.style.pointerEvents = 'none');
        
        addToMistakes(data);
        showFeedback(false, "Wrong Order", `Next: ${data.items[slotIdx]}`);
    }
}

function flipCard() {
    const card = document.getElementById('card-inner');
    if (card) { card.classList.toggle('is-flipped'); const btn = document.getElementById('flash-btn'); if (btn) btn.style.display = "block"; }
}

function checkFill(idx, btn, val) {
    const emptyIdx = window.userSelections.indexOf(null);
    if (emptyIdx !== -1) {
        document.getElementById(`blank-${emptyIdx}`).innerText = val;
        btn.classList.add('used-option');
        window.userSelections[emptyIdx] = idx;
        const isComplete = !window.userSelections.includes(null);
        document.getElementById('verify-fill-btn').style.display = isComplete ? "block" : "none";
    }
}

function clearBlank(id) {
    const optIdx = window.userSelections[id];
    if (optIdx === null) return;
    document.getElementById(`blank-${id}`).innerHTML = "&nbsp;";
    document.getElementById(`option-${optIdx}`).classList.remove('used-option');
    window.userSelections[id] = null;
    document.getElementById('verify-fill-btn').style.display = "none";
}

function verifyFill() {
    const data = currentModule[currentIndex];
    const correct = Array.isArray(data.answer) ? JSON.stringify(window.userSelections) === JSON.stringify(data.answer) : window.userSelections[0] === data.answer;
    if (correct) showFeedback(true, "✨ Correct!", data.explanation);
    else { addToMistakes(data); showFeedback(false, "❌ Not Quite", data.explanation); }
}

function handleMatchTap(side, id) {
    const btn = document.getElementById(`${side}-${id}`);
    if (btn.classList.contains('matched')) {
        const idx = window.userPairs.findIndex(p => p[side[0]] === id);
        const pair = window.userPairs[idx];
        document.getElementById(`left-${pair.l}`).classList.remove('matched');
        document.getElementById(`right-${pair.r}`).classList.remove('matched');
        window.userPairs.splice(idx, 1);
    } else {
        document.querySelectorAll(`.match-column:nth-child(${side==='left'?1:2}) .match-btn`).forEach(b => b.classList.remove('selected-match'));
        btn.classList.add('selected-match');
        window.activeSelection[side] = id;
        if (window.activeSelection.left !== null && window.activeSelection.right !== null) {
            window.userPairs.push({ l: window.activeSelection.left, r: window.activeSelection.right });
            document.getElementById(`left-${window.activeSelection.left}`).classList.add('matched');
            document.getElementById(`right-${window.activeSelection.right}`).classList.add('matched');
            window.activeSelection = { left: null, right: null };
            document.querySelectorAll('.match-btn').forEach(b => b.classList.remove('selected-match'));
        }
    }
    document.getElementById('verify-match-btn').style.display = window.userPairs.length === currentModule[currentIndex].pairs.length ? "block" : "none";
}

function verifyMatch() {
    const data = currentModule[currentIndex];
    if (window.userPairs.every(p => p.l === p.r)) showFeedback(true, "✨ Correct!", data.explanation);
    else { addToMistakes(data); showFeedback(false, "❌ Not Quite", data.explanation); }
}

function checkMCQ(idx, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
    const data = currentModule[currentIndex];
    if (idx === data.answer) { showFeedback(true, "✨ Correct!", data.explanation); btn.style.borderColor = "var(--success-green)"; }
    else { addToMistakes(data); showFeedback(false, "❌ Not Quite", data.explanation); btn.style.borderColor = "var(--error-red)"; }
}

function addToMistakes(d) {
    // If this specific instance has already been flagged as wrong, don't add it again
    if (d.alreadyAddedToMistakes) return;

    let r = JSON.parse(JSON.stringify(d));
    r.isReview = true;
    
    // Mark the current object so we don't push it again if the user clicks wrong twice
    d.alreadyAddedToMistakes = true; 
    
    currentModule.push(r);
}
function advanceStep() { xp += 5; updateXP(); currentIndex++; if (currentIndex < currentModule.length) renderScreen(); else finishModule(); }
function updateXP() { document.getElementById('xp-count').innerText = xp; localStorage.setItem('pathXP', xp); }
function showFeedback(corr, title, msg) {
    const bar = document.getElementById('feedback-bar');
    bar.className = "show " + (corr ? "correct" : "incorrect");
    document.getElementById('feedback-title').innerHTML = title;
    document.getElementById('feedback-msg').innerHTML = formatText(msg);
    if (corr) { xp += 10; updateXP(); }
}

document.getElementById('next-btn').onclick = () => {
    // 1. Instantly hide the feedback bar so it doesn't "ghost" onto the next slide
    const bar = document.getElementById('feedback-bar');
    bar.classList.remove('show');
    
    // 2. Small delay or instant clear to ensure the UI resets
    currentIndex++; 
    if (currentIndex < currentModule.length) {
        // 3. Reset scroll position to top for the next question
        document.getElementById('stage').scrollTop = 0;
        renderScreen(); 
    } else {
        finishModule(); 
    }
};

function finishModule() {
    document.getElementById('feedback-bar').classList.remove('show');
    document.getElementById('progress-bar').style.width = "100%";
    const data = moduleContent[currentActiveID];
    let nextID;
    if (data && data.next) nextID = data.next;
    else { const parts = currentActiveID.split('.'); parts[parts.length - 1] = parseInt(parts[parts.length - 1]) + 1; nextID = parts.join('.'); }
    if (moduleContent[nextID] && !unlockedModules.includes(nextID)) { unlockedModules.push(nextID); localStorage.setItem('pathUnlocked', JSON.stringify(unlockedModules)); updateMapUI(); }
    document.getElementById('stage').innerHTML = `<div style="margin-top:50px"><i class="fas fa-trophy" style="font-size:5rem;color:#ffce00"></i><h1>Mastered!</h1><button class="primary-btn" onclick="startModule(currentActiveID)">Practice Again</button><button class="option-btn" onclick="exitLesson()">Back to Map</button></div>`;
}

function exitLesson() { document.getElementById('map-view').classList.remove('hidden'); document.getElementById('lesson-view').classList.add('hidden'); }
function resetApp() { if(confirm("Reset Progress?")) { localStorage.clear(); location.reload(); } }