// ─── STATE ────────────────────────────────────────────────────────────────────
let currentModule  = [];
let currentIndex   = 0;
let currentActiveID = "";
let xp = parseInt(localStorage.getItem('pathXP')) || 0;

// Tracking vars for scoring
let totalQuestionsCount = 0;
let correctFirstTryCount = 0;
let hasAttemptedCurrentQuestion = false;
let missedConcepts = [];

// All modules are unlocked by default.
// To restore saved-progress mode, replace this line with:
let unlockedModules = JSON.parse(localStorage.getItem('pathUnlocked')) || ['0.1'];
// let unlockedModules = Object.keys(moduleContent);

document.getElementById('xp-count').innerText = xp;


// ─── UTILITIES ────────────────────────────────────────────────────────────────

// Used to shuffle the *display order* of options within sort, order, and match
// question types — not to reorder questions themselves.
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Converts markdown-lite syntax to HTML.
function formatText(rawText) {
    if (!rawText || typeof rawText !== 'string') return rawText || "";
    return rawText
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/_{3,}/g, '[[LINE]]')
        .replace(/_(.*?)_/g, '<i>$1</i>')
        .replace(/\[\[LINE\]\]/g, '____________')
        .replace(/\n/g, '<br>');
}


// ─── MAP ──────────────────────────────────────────────────────────────────────

function applyWindingPath() {
    document.querySelectorAll('.path-node').forEach((node, index) => {
        node.style.transform = `translateX(${Math.sin(index * 0.8) * 70}px)`;
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
    applyWindingPath();
}
updateMapUI();

function showPreview(id) {
    if (!unlockedModules.includes(id)) return;
    const module = moduleContent[id];
    if (!module) return;

    document.getElementById('modal-title').innerText = module.title;
    document.getElementById('modal-objectives').innerHTML =
        module.objectives.map(obj => `<li>${obj}</li>`).join('');
    document.getElementById('start-lesson-btn').onclick = () => {
        document.getElementById('lesson-modal').classList.add('hidden');
        startModule(id);
    };
    document.getElementById('lesson-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('lesson-modal').classList.add('hidden');
}


// ─── LESSON FLOW ──────────────────────────────────────────────────────────────

function startModule(id) {
    currentActiveID = id;
    const module = moduleContent[id];
    if (!module) return;

    // Deep-copy so mutations (e.g. isReview, alreadyAddedToMistakes) don't
    // affect the source data across runs.
    currentModule = JSON.parse(JSON.stringify(module.data));
    currentIndex  = 0;

    // Reset scoring tracking
    correctFirstTryCount = 0;
    // Count how many questions are non-info items
    totalQuestionsCount = currentModule.filter(item => item.type !== 'concept' && item.type !== 'flashcard').length;
    hasAttemptedCurrentQuestion = false;
    missedConcepts = [];

    document.getElementById('map-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');
    renderScreen();
}

function advanceStep() {
    xp += 5;
    updateXP();
    currentIndex++;
    if (currentIndex < currentModule.length) renderScreen();
    else finishModule();
}

document.getElementById('next-btn').onclick = () => {
    const bar = document.getElementById('feedback-bar');
    bar.classList.remove('show');
    currentIndex++;
    if (currentIndex < currentModule.length) {
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
    const isReviewNode = data && (data.isReviewNode || currentActiveID.includes('review'));

    // ─── CASE A: THIS IS A REVIEW NODE (Show Stars & Gating Rules) ───
    if (isReviewNode) {
        let scorePercent = totalQuestionsCount > 0 ? Math.round((correctFirstTryCount / totalQuestionsCount) * 100) : 100;

        // Determine Tiering Layout & Stars (ONLY for the Review Node)
        let starsHtml = '';
        let feedbackTierTitle = '';
        let feedbackTierText = '';
        let titleColor = 'var(--text)';

        if (scorePercent >= 90) { // Tier 1: Attending
            starsHtml = `
                <i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i>
                <i class="fas fa-star" style="font-size:2.5rem;color:#ffce00;margin:0 10px;"></i>
                <i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i>`;
            feedbackTierTitle = "Board Certified!";
            feedbackTierText = "Incredible job. You seamlessly connected the cell's structure, signaling, and environment. You are more than ready to tackle Cell Injury and Disease!";
            titleColor = "var(--success-green)";
        } else if (scorePercent >= 70) { // Tier 2: Resident
            starsHtml = `
                <i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i>
                <i class="fas fa-star" style="font-size:2.5rem;color:#ffce00;margin:0 10px;"></i>
                <i class="far fa-star" style="font-size:2rem;color:#ccc"></i>`;
            feedbackTierTitle = "Great Clinical Reasoning!";
            feedbackTierText = "You have a solid grasp of the normal cell, but a few connections got crossed. Let’s review your missed concepts so you are 100% ready for the pathology chapters.";
            titleColor = "var(--orange)";
        } else { // Tier 3: Intern
            starsHtml = `
                <i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i>
                <i class="far fa-star" style="font-size:2.5rem;color:#ccc;margin:0 10px;"></i>
                <i class="far fa-star" style="font-size:2rem;color:#ccc"></i>`;
            feedbackTierTitle = "Good Effort!";
            feedbackTierText = "The human cell is a highly complex machine, and integrating all these parts takes practice. Let's do a quick focused review on your weak spots before moving forward. You've got this!";
            titleColor = "var(--error-red)";
        }

        // Evaluate progression gating condition (80% rule)
        let canProgress = (scorePercent >= 80);

        // Build Diagnostic Remediation Cards
        let diagnosticHtml = '';
        if (missedConcepts.length > 0) {
            diagnosticHtml += `
                <div style="text-align:left; margin-top:25px; border-top:1px solid #ddd; padding-top:15px; max-width:400px; margin-left:auto; margin-right:auto;">
                    <h3 style="font-size:1.1rem; margin-bottom:10px; color:var(--text); font-weight:bold;">🩺 Unit Topics to Review:</h3>
                    <ul style="padding-left:20px; margin:0; color:#555; font-size:0.95rem; line-height:1.6;">
                        ${missedConcepts.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>`;
        }

        if (canProgress) {
            // Unlock next module
            let nextID = (data && data.next) ? data.next : (() => {
                const parts = currentActiveID.split('.');
                parts[parts.length - 1] = parseInt(parts[parts.length - 1]) + 1;
                return parts.join('.');
            })();

            if (moduleContent[nextID] && !unlockedModules.includes(nextID)) {
                unlockedModules.push(nextID);
                localStorage.setItem('pathUnlocked', JSON.stringify(unlockedModules));
                updateMapUI();
            }

            document.getElementById('stage').innerHTML = `
                <div style="margin-top:30px; padding: 0 15px;">
                    <div style="margin-bottom:15px;">${starsHtml}</div>
                    <h1 style="color:${titleColor}; margin-bottom:5px;">${feedbackTierTitle}</h1>
                    <p style="font-size:1rem; color:#555; margin-bottom:15px; max-width:400px; margin-left:auto; margin-right:auto;">${feedbackTierText}</p>
                    <div style="background:#eef9ec; padding:10px; border-radius:12px; display:inline-block; margin-bottom:20px;">
                        <span style="font-size:1.3rem; font-weight:bold; color:var(--success-green);">${correctFirstTryCount} / ${totalQuestionsCount} Correct</span>
                        <span style="font-size:1rem; color:#666;">(${scorePercent}%)</span>
                    </div>
                    ${diagnosticHtml}
                    <div style="margin-top:25px; display:flex; gap:10px; justify-content:center;">
                        <button class="primary-btn" style="margin:0; flex:1;" onclick="startModule(currentActiveID)">Practice Again</button>
                        <button class="option-btn" style="margin:0; flex:1;" onclick="exitLesson()">Back to Map</button>
                    </div>
                </div>`;
        } else {
            // Blocked layout (Scored under 80%)
            document.getElementById('stage').innerHTML = `
                <div style="margin-top:30px; padding: 0 15px;">
                    <div style="margin-bottom:15px;">${starsHtml}</div>
                    <h1 style="color:var(--error-red); margin-bottom:5px;">Review Unsuccessful</h1>
                    <p style="font-size:1rem; color:#555; margin-bottom:15px; max-width:400px; margin-left:auto; margin-right:auto;">${feedbackTierText}</p>
                    <div style="background:#fff3f3; padding:12px; border-radius:12px; border:1px solid #ffe3e3; margin-bottom:20px;">
                        <div style="font-size:1.2rem; font-weight:bold; color:var(--error-red);">${correctFirstTryCount} / ${totalQuestionsCount} (${scorePercent}%)</div>
                        <div style="font-size:0.85rem; color:#777; margin-top:4px;">Minimum score of <b>80%</b> on first attempts required to unlock Chapter 2.</div>
                    </div>
                    ${diagnosticHtml}
                    <div style="margin-top:25px; display:flex; gap:10px; justify-content:center;">
                        <button class="primary-btn" style="margin:0; flex:1;" onclick="startModule(currentActiveID)">Try Again</button>
                        <button class="option-btn" style="margin:0; flex:1;" onclick="exitLesson()">Back to Map</button>
                    </div>
                </div>`;
        }

    // ─── CASE B: THIS IS A REGULAR LESSON NODE (Standard No-Stars Layout) ───
    } else {
        // Automatically unlock next linear module index (e.g. 0.1 -> 0.2)
        let nextID;
        if (data && data.next) {
            nextID = data.next;
        } else {
            const parts = currentActiveID.split('.');
            parts[parts.length - 1] = parseInt(parts[parts.length - 1]) + 1;
            nextID = parts.join('.');
        }

        if (moduleContent[nextID] && !unlockedModules.includes(nextID)) {
            unlockedModules.push(nextID);
            localStorage.setItem('pathUnlocked', JSON.stringify(unlockedModules));
            updateMapUI();
        }

        // Standard layout matching button layout of Case A, but without stars/diagnostics
        document.getElementById('stage').innerHTML = `
            <div style="margin-top:50px; padding: 0 15px;">
                <div style="font-size:4rem; margin-bottom:20px;">🎉</div>
                <h1 style="color:var(--success-green); margin-bottom:5px;">Lesson Completed!</h1>
                <p style="font-size:1.1rem; color:#666; margin-bottom:30px;">Great job working through this lesson.</p>
                <div style="margin-top:25px; display:flex; gap:10px; justify-content:center;">
                    <button class="primary-btn" style="margin:0; flex:1;" onclick="startModule(currentActiveID)">Practice Again</button>
                    <button class="option-btn" style="margin:0; flex:1;" onclick="exitLesson()">Back to Map</button>
                </div>
            </div>`;
    }
}

function exitLesson() {
    document.getElementById('map-view').classList.remove('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
}

function resetApp() {
    if (confirm("Reset Progress?")) { localStorage.clear(); location.reload(); }
}


// ─── RENDER ───────────────────────────────────────────────────────────────────

function renderScreen() {
    const stage = document.getElementById('stage');
    stage.scrollTop = 0;
    const data = currentModule[currentIndex];
    if (!data) return;

    // Reset flag for the new item
    hasAttemptedCurrentQuestion = false;

    stage.innerHTML = '';
    document.getElementById('feedback-bar').classList.remove('show');
    document.getElementById('progress-bar').style.width =
        (currentIndex / currentModule.length * 100) + "%";

    const reviewHeader = data.isReview
        ? `<div class="review-text">⚠️ Reviewing Mistake</div>`
        : '';

    if (data.type === "concept") {
        // Initialize an empty string for our images layout HTML
        let imagesHtml = '';

        // Check if the 'images' array exists and has items
        if (data.images && Array.isArray(data.images)) {
            imagesHtml = `
                <div class="concept-images-gallery" style="margin: 20px 0; display: flex; flex-direction: column; gap: 20px;">
                    ${data.images.map(img => `
                        <div class="single-image-wrapper" style="text-align: center;">
                            <img src="${img.url}" alt="${img.title || 'Concept illustration'}" style="max-width: 100%; max-height: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: block; margin: 0 auto;">
                            
                            ${img.title ? `<div class="image-title" style="font-size: 0.85rem; color: #666; font-style: italic; margin-top: 8px; line-height: 1.3;">${formatText(img.title)}</div>` : ''}
                            
                            ${img.reference ? `<div class="image-reference" style="font-size: 0.75rem; color: #999; margin-top: 4px; line-height: 1.2;">${img.reference}</div>` : ''}
                        </div>
                    `).join('')}
                </div>`;
        } 
        // Backward compatibility: Handle single data.image format if you still have old cards
        else if (data.image) {
            imagesHtml = `
                <div class="concept-image-container" style="text-align: center; margin: 20px 0;">
                    <img src="${data.image}" alt="Concept illustration" style="max-width: 100%; max-height: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                </div>`;
        }

        // Render the screen with the images element placed AFTER the subtext/extra information card
        stage.innerHTML = `
            <h2 style="color:var(--blue)">${formatText(data.title)}</h2>
            <div style="font-size:1.1rem;text-align:left;line-height:1.6;margin-bottom:20px;">${formatText(data.text)}</div>
            
            ${data.subtext ? `<div class="concept-card" style="border-left:5px solid var(--blue);padding:15px;background:#f0f8ff;border-radius:15px;text-align:left;margin-bottom:20px;">${formatText(data.subtext)}</div>` : ''}
            
            ${imagesHtml} 
            
            <button class="primary-btn" onclick="advanceStep()">${data.buttonText || 'Continue'}</button>`;

    } else if (data.type === "flashcard") {
        stage.innerHTML = `
            <div class="flashcard-scene" onclick="flipCard()">
                <div class="flashcard" id="card-inner">
                    <div class="flashcard-face flashcard-front">
                        ${data.front}
                        <div style="font-size:0.8rem;color:#ccc;margin-top:20px;">Tap to flip</div>
                    </div>
                    <div class="flashcard-face flashcard-back">
                        <div style="font-weight:bold;color:var(--blue);">Definition:</div>
                        ${formatText(data.back)}
                        <div class="flashcard-extra">${formatText(data.extra)}</div>
                    </div>
                </div>
            </div>
            <button id="flash-btn" class="primary-btn" style="display:none;" onclick="advanceStep()">${data.buttonText || 'Continue'}</button>`;

    } else if (data.type === "fill") {
        const ansLen = Array.isArray(data.answer) ? data.answer.length : 1;
        window.userSelections = new Array(ansLen).fill(null);
        let blankCount = 0;
        const qText = formatText(data.question).replace(/_{3,}/g, () =>
            `<span id="blank-${blankCount++}" class="fill-blank clickable-blank" onclick="clearBlank(${blankCount - 1})">&nbsp;</span>`
        );
        // Map each string option to its original data index, then safely randomize the presentation order
        const mappedFillOptions = data.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
        const shuffledFillOptions = shuffleArray([...mappedFillOptions]);

        stage.innerHTML = `
            ${reviewHeader}
            <div class="fill-instruction">Tap to fill, tap blank to clear</div>
            <h3 style="text-align:left;">${qText}</h3>
            <div id="options" class="word-bank">
                ${shuffledFillOptions.map((opt) =>
                    `<button class="option-btn fill-option" id="option-${opt.originalIndex}"
                        onclick="checkFill(${opt.originalIndex}, this, '${opt.text.replace(/'/g, "\\'")}')">${formatText(opt.text)}</button>`
                ).join('')}
            </div>
            <button id="verify-fill-btn" class="primary-btn" style="display:none;margin-top:20px;" onclick="verifyFill()">CHECK ANSWER</button>`;

    } else if (data.type === "sort") {
        window.selectedChip = null;
        stage.innerHTML = `
            ${reviewHeader}
            <h3>${formatText(data.question)}</h3>
            <div class="fill-instruction">Tap a card, then tap a box to move it</div>
            <div id="sort-pool" class="sort-pool" onclick="placeInPool(this)">
                ${shuffleArray([...data.items]).map((item, i) =>
                    `<div class="draggable-chip" id="chip-${i}"
                        onclick="selectChip(this, event)"
                        data-correct="${item.bucket}">${item.text}</div>`
                ).join('')}
            </div>
            <div class="bucket-container">
                ${data.buckets.map((b, i) =>
                    `<div class="sort-bucket" onclick="placeInBucket(this)" data-id="${i}">
                        <span class="unit-tag" style="position:static;font-size:0.6rem;margin-bottom:5px;display:block;">${b}</span>
                    </div>`
                ).join('')}
            </div>
            <button id="verify-sort-btn" class="primary-btn" style="display:none;margin-top:20px;" onclick="verifySort()">CHECK ANSWER</button>`;

    } else if (data.type === "order") {
        window.userOrder = [];
        stage.innerHTML = `
            ${reviewHeader}
            <h3>${formatText(data.question)}</h3>
            <div class="order-slots">
                ${data.items.map((_, i) => `<div class="order-slot" id="slot-${i}">?</div>`).join('')}
            </div>
            <div class="sort-pool">
                ${shuffleArray([...data.items]).map((item, i) =>
                    `<button class="draggable-chip" id="chip-${i}"
                        onclick="handleOrderTap('${item.replace(/'/g, "\\'")}', ${i})">${item}</button>`
                ).join('')}
            </div>`;

    } else if (data.type === "match") {
        window.userPairs = [];
        window.activeSelection = { left: null, right: null };
        const leftCol  = shuffleArray(data.pairs.map((p, i) => ({ text: p.left,  id: i })));
        const rightCol = shuffleArray(data.pairs.map((p, i) => ({ text: p.right, id: i })));
        stage.innerHTML = `
            ${reviewHeader}
            <h3>${formatText(data.question)}</h3>
            <div class="fill-instruction">Tap an item on the left, then find its match on the right</div>
            <div class="match-container">
                <div class="match-column">
                    ${leftCol.map(item =>
                        `<button class="option-btn match-btn" id="left-${item.id}"
                            onclick="handleMatchTap('left', ${item.id})">${item.text}</button>`
                    ).join('')}
                </div>
                <div class="match-column">
                    ${rightCol.map(item =>
                        `<button class="option-btn match-btn" id="right-${item.id}"
                            onclick="handleMatchTap('right', ${item.id})">${item.text}</button>`
                    ).join('')}
                </div>
            </div>
            <button id="verify-match-btn" class="primary-btn" style="display:none;margin-top:20px;" onclick="verifyMatch()">CHECK ANSWER</button>`;
    
        } else {
        const header = data.type === "clinical" ? `<div style="color:var(--blue);font-weight:bold;margin-bottom:10px;">🩺 CLINICAL CASE</div>` : '';
        
        // Map original answer text to its original index, then shuffle the structural positions
        const mappedOptions = data.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
        const shuffledOptions = shuffleArray([...mappedOptions]);

        stage.innerHTML = `
            ${reviewHeader}${header}
            <h3>${formatText(data.question)}</h3>
            <div id="options">
                ${shuffledOptions.map((opt) =>
                    `<button class="option-btn" onclick="checkMCQ(${opt.originalIndex}, this)">${formatText(opt.text)}</button>`
                ).join('')}
            </div>`;
    }
}


// ─── QUESTION HANDLERS ────────────────────────────────────────────────────────

function flipCard() {
    const card = document.getElementById('card-inner');
    if (card) {
        card.classList.toggle('is-flipped');
        const btn = document.getElementById('flash-btn');
        if (btn) btn.style.display = "block";
    }
}

function checkMCQ(idx, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
    const data = currentModule[currentIndex];
    if (idx === data.answer) {
        if (!hasAttemptedCurrentQuestion && !data.isReview) correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
        btn.style.borderColor = "var(--success-green)";
    } else {
        addToMistakes(data);
        showFeedback(false, "❌ Not Quite", data.explanation);
        btn.style.borderColor = "var(--error-red)";
    }
    hasAttemptedCurrentQuestion = true;
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
    const correct = Array.isArray(data.answer)
        ? JSON.stringify(window.userSelections) === JSON.stringify(data.answer)
        : window.userSelections[0] === data.answer;
        
    if (correct) {
        if (!hasAttemptedCurrentQuestion && !data.isReview) correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
    } else { 
        addToMistakes(data); 
        showFeedback(false, "❌ Not Quite", data.explanation); 
    }
    hasAttemptedCurrentQuestion = true;
}

function selectChip(el, event) {
    if (event) event.stopPropagation();
    if (window.selectedChip === el) {
        el.style.borderColor = "var(--gray-light)";
        el.style.transform = "scale(1)";
        window.selectedChip = null;
        return;
    }
    document.querySelectorAll('.draggable-chip').forEach(c => {
        c.style.borderColor = "var(--gray-light)";
        c.style.transform = "scale(1)";
    });
    el.style.borderColor = "var(--blue)";
    el.style.transform = "scale(1.05)";
    window.selectedChip = el;
}

function placeInBucket(bucketEl) {
    if (!window.selectedChip) return;
    bucketEl.appendChild(window.selectedChip);
    window.selectedChip.style.borderColor = "var(--gray-light)";
    window.selectedChip.style.transform = "scale(1)";
    window.selectedChip = null;
    checkSortCompletion();
}

function placeInPool(poolEl) {
    if (!window.selectedChip) return;
    if (window.selectedChip.parentElement === poolEl) return;
    poolEl.appendChild(window.selectedChip);
    window.selectedChip.style.borderColor = "var(--gray-light)";
    window.selectedChip.style.transform = "scale(1)";
    window.selectedChip = null;
    checkSortCompletion();
}

function checkSortCompletion() {
    const pool = document.getElementById('sort-pool');
    const btn  = document.getElementById('verify-sort-btn');
    if (btn) btn.style.display = (pool.children.length === 0) ? "block" : "none";
}

function verifySort() {
    const data = currentModule[currentIndex];
    const buckets = document.querySelectorAll('.sort-bucket');
    let correct = true, placed = 0;
    buckets.forEach(b => {
        const bId = b.getAttribute('data-id');
        b.querySelectorAll('.draggable-chip').forEach(c => {
            placed++;
            if (c.getAttribute('data-correct') !== bId) correct = false;
        });
    });
    if (placed < data.items.length) return alert("Sort all items!");
    if (correct) {
        if (!hasAttemptedCurrentQuestion && !data.isReview) correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
    } else { 
        addToMistakes(data); 
        showFeedback(false, "❌ Not Quite", data.explanation); 
    }
    hasAttemptedCurrentQuestion = true;
}

function handleOrderTap(val, idx) {
    const data    = currentModule[currentIndex];
    const slotIdx = window.userOrder.length;
    if (val === data.items[slotIdx]) {
        window.userOrder.push(val);
        document.getElementById(`slot-${slotIdx}`).innerText = `${slotIdx + 1}. ${val}`;
        document.getElementById(`chip-${idx}`).style.visibility = "hidden";
        if (window.userOrder.length === data.items.length) {
            if (!hasAttemptedCurrentQuestion && !data.isReview) correctFirstTryCount++;
            showFeedback(true, "Perfect!", data.explanation);
        }
    } else {
        document.querySelectorAll('.draggable-chip').forEach(b => b.style.pointerEvents = 'none');
        addToMistakes(data);
        showFeedback(false, "Wrong Order", `Next: ${data.items[slotIdx]}`);
        hasAttemptedCurrentQuestion = true;
    }
}

function handleMatchTap(side, id) {
    const btn = document.getElementById(`${side}-${id}`);
    if (btn.classList.contains('matched')) {
        const idx  = window.userPairs.findIndex(p => p[side[0]] === id);
        const pair = window.userPairs[idx];
        document.getElementById(`left-${pair.l}`).classList.remove('matched');
        document.getElementById(`right-${pair.r}`).classList.remove('matched');
        window.userPairs.splice(idx, 1);
    } else {
        document.querySelectorAll(`.match-column:nth-child(${side === 'left' ? 1 : 2}) .match-btn`)
            .forEach(b => b.classList.remove('selected-match'));
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
    document.getElementById('verify-match-btn').style.display =
        window.userPairs.length === currentModule[currentIndex].pairs.length ? "block" : "none";
}

function verifyMatch() {
    const data = currentModule[currentIndex];
    if (window.userPairs.every(p => p.l === p.r)) {
        if (!hasAttemptedCurrentQuestion && !data.isReview) correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
    } else { 
        addToMistakes(data); 
        showFeedback(false, "❌ Not Quite", data.explanation); 
    }
    hasAttemptedCurrentQuestion = true;
}


// ─── FEEDBACK & XP ────────────────────────────────────────────────────────────

function showFeedback(corr, title, msg) {
    const bar = document.getElementById('feedback-bar');
    bar.className = "show " + (corr ? "correct" : "incorrect");
    document.getElementById('feedback-title').innerHTML = title;
    document.getElementById('feedback-msg').innerHTML = formatText(msg);
    if (corr) { xp += 10; updateXP(); }
}

function updateXP() {
    document.getElementById('xp-count').innerText = xp;
    localStorage.setItem('pathXP', xp);
}

function addToMistakes(d) {
    if (d.alreadyAddedToMistakes) return;

    if (d.topic && !missedConcepts.includes(d.topic)) {
        missedConcepts.push(d.topic);
    }

    const review = JSON.parse(JSON.stringify(d));
    review.isReview = true;
    d.alreadyAddedToMistakes = true;
    review.alreadyAddedToMistakes = false;
    currentModule.push(review);
}