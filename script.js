// ============================================================
//  LEXIGO — Game Logic
// ============================================================

// ===== СЛОВАРИ =====
const WORDS_EASY = [
    // 3 буквы
    "кот","дом","лес","рот","нос","пол","сок","лук","мак","рак",
    "бок","вол","дуб","еж","жук","зуб","кол","лоб","мел","пар",
    "рог","сад","ток","ум","ус","шар","яд","бег","вес","гол",
    // 4 буквы
    "волк","тигр","слон","конь","гусь","утка","рыба","кошка","мышь","крот",
    "дочь","сын","мать","отец","брат","друг","враг","море","лист","куст",
    "стол","стул","окно","дверь","пол","лампа","книга","ложка","вилка","чашка",
    "роза","клён","ива","ель","дуб","гора","река","поле","луг","бор",
    "зима","лето","осень","весна","ночь","день","утро","дождь","снег","лёд"
];

const WORDS_MEDIUM = [
    // 5 букв
    "акула","берег","билет","бочка","весна","вечер","вишня","волна",
    "груша","диван","дочка","жираф","завод","замок","зверь","шишка",
    "ковер","кость","крыло","лапша","медик","метка","мечта","обида",
    "пакет","пламя","порог","почта","пушка","салат","сосна","слово",
    "пицца","озеро","арбуз","банан","ветер","вилка","город","дождь",
    "земля","игрок","химия","книга","кошка","крыша","лампа","масло",
    "ножик","огонь","океан","палка","песня","птица","ручка","сапог",
    "силач","скала","стена","сумка","трава","туман","уголь","улица",
    "цветы","чайка","школа","шапка","шарик","щенок","свеча","борьб",
    // 6 букв
    "лексик","дракон","балкон","берёза","погода","фонарь","дорога",
    "январь","камень","письмо","радуга","сердце","сирень","телега",
    "яблоко","бабочка","варенье","галстук","горошек","дельфин","жасмин",
    "зеркал","ракета","учитель","фиалка","цветок","черника","апельс",
    "колесо","лестниц","ладонь","болото","загадка","кактус","медаль",
    "мороженое","нарцисс","облако","пазлы","ромашка","совет","таблиц"
];

const WORDS_HARD = [
    // 7 букв
    "автобус","алфавит","аптечка","архивар","банкнот","бассейн","библиот",
    "велосипед","виноград","воздушн","галерея","гармонья","горизонт","декабрь",
    "диктант","дирижёр","закрытый","зеленый","зеркала","инженер","история",
    "каникулы","капитан","карандаш","климат","колонка","команда","компас",
    "конфета","корзина","красивый","лягушка","магазин","маскарад","медицина",
    "молоток","монастыр","музыкант","написать","начальник","облачно","огурец",
    "олимпиад","осьминог","открытка","паровоз","пистолет","планета","плавание",
    "победитель","поколение","полянка","помощник","портрет","праздник","природа",
    "проблема","прогулка","простор","путешеств","радость","ракушка","растения",
    "рецепт","рисунок","родители","рюкзак","свобода","секрет","серебро",
    "скорость","слабость","снежинка","событие","сокровищ","солнышко","сообщение",
    "сочинение","спортсмен","стадион","столица","стратегия","студент","сюрприз",
    "таблетка","тетрадь","тренировка","туристы","угощение","удачный","ученица",
    "учитель","фантазия","фестиваль","фотограф","характер","художник","цирк",
    "чемодан","чернила","шоколад","электрик","юбилей","явление","ягодный"
];

// Полный список допустимых слов для проверки (словарь)
// Включаем все слова из всех уровней + дополнительные
const VALID_WORDS = new Set([
    ...WORDS_EASY, ...WORDS_MEDIUM, ...WORDS_HARD,
    // дополнительные слова которые пользователь может ввести
    "кот","дом","лес","рот","нос","пол","сок","лук","мак","рак",
    "бок","вол","дуб","жук","зуб","кол","лоб","мел","пар","рог",
    "сад","ток","шар","бег","вес","гол","кот","ток","рот","пот",
    "волк","тигр","слон","конь","гусь","утка","рыба","мышь","крот",
    "дочь","сын","мать","отец","брат","друг","враг","море","лист","куст",
    "стол","стул","окно","роза","клён","гора","река","поле","луг",
    "зима","лето","ночь","день","утро","снег","лёд","кино","метр",
    "нога","рука","ухо","глаз","лицо","тело","зуб","язык","лоб",
    "парк","банк","рынок","завод","пляж","лагерь","замок","мост",
    "танк","кран","насос","клапан","экран","провод","батон","торт",
    "хлеб","суп","каша","блин","пирог","квас","чай","кофе","сыр",
    "мясо","рыба","сало","яйцо","лимон","апельсин","слива","груша",
    "персик","манго","кокос","клубника","малина","смородина","крыжовник",
    "помидор","огурец","перец","лук","чеснок","морковь","картофель",
    "свёкла","капуста","кабачок","тыква","баклажан","горох","фасоль",
    "спорт","гимнастика","футбол","хоккей","теннис","шахматы","шашки",
    "кубик","мячик","кукла","пазл","лего","дрон","робот","компьютер",
    "телефон","планшет","камера","антенна","батарея","зарядка","кабель",
    "ноутбук","монитор","клавиатура","мышка","колонка","наушники","микрофон",
    "учебник","тетрадь","дневник","карандаш","ластик","линейка","циркуль",
    "учитель","ученик","директор","библиотека","столовая","спортзал",
    "врач","медсестра","аптека","больница","таблетка","градусник","пластырь",
    "пожарник","полицейский","военный","космонавт","пилот","капитан","матрос",
    "строитель","архитектор","инженер","механик","электрик","сантехник",
    "художник","скульптор","фотограф","музыкант","певец","танцор","актёр",
    "лётчик","водитель","машинист","кондуктор","курьер","почтальон",
]);

// Проверка что слово есть в словаре
function isValidWord(word) {
    return VALID_WORDS.has(word.toLowerCase());
}

// ===== СОСТОЯНИЕ =====
let difficulty = sessionStorage.getItem("lexigo_difficulty") || "medium";
let wordLength = 5;
let maxAttempts = 6;
let secret_word = "";
let currentRow = 0;
let currentCol = 0;
let gameOver = false;
let entered = [];

// DOM
const gridEl = document.getElementById("grid");
const diffLabel = document.getElementById("diffLabel");
const gameTitle = document.getElementById("gameTitle");

// ===== INIT =====
function init() {
    const T = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : TRANSLATIONS["ru"];
    if (difficulty === "easy") {
        const len = Math.random() < 0.5 ? 3 : 4;
        const pool = (activePool || {easy: WORDS_EASY}).easy.filter(w => w.length === len);
        secret_word = pool.length ? pool[rand(pool.length)] : WORDS_EASY.filter(w=>w.length===len)[rand(WORDS_EASY.filter(w=>w.length===len).length)];
        wordLength = secret_word.length;
        diffLabel.textContent = T.diffEasy || "Лёгкий";
        diffLabel.style.color = "#4caf50";
    } else if (difficulty === "medium") {
        const len = Math.random() < 0.5 ? 5 : 6;
        const pool = (activePool || {medium: WORDS_MEDIUM}).medium.filter(w => w.length === len);
        secret_word = pool.length ? pool[rand(pool.length)] : WORDS_MEDIUM.filter(w=>w.length===len)[rand(WORDS_MEDIUM.filter(w=>w.length===len).length)];
        wordLength = secret_word.length;
        diffLabel.textContent = T.diffMedium || "Средний";
        diffLabel.style.color = "#f9a825";
    } else {
        const pool = (activePool || {hard: WORDS_HARD}).hard.filter(w => w.length >= 7);
        secret_word = pool.length ? pool[rand(pool.length)] : WORDS_HARD.filter(w=>w.length>=7)[rand(WORDS_HARD.filter(w=>w.length>=7).length)];
        wordLength = secret_word.length;
        diffLabel.textContent = T.diffHard || "Сложный";
        diffLabel.style.color = "#e53935";
    }

    // на клавиатуре нет «ё» — иначе слово вроде «клён» невозможно угадать
    secret_word = secret_word.replace(/ё/g, "е");
    wordLength = secret_word.length;

    maxAttempts = 6;
    currentRow = 0;
    currentCol = 0;
    gameOver = false;
    entered = [];

    const minLen = difficulty === "easy" ? "gameTitle3" : difficulty === "medium" ? "gameTitle5" : "gameTitle7";
    const titleEl = document.getElementById("gameTitle");
    if (titleEl) titleEl.setAttribute('data-i18n', minLen);

    console.log("Secret:", secret_word);
    buildGrid();
    resetKeyboard();
    clearMessage();
    startTimer();
}

function rand(max) { return Math.floor(Math.random() * max); }

// ===== GRID =====
function buildGrid() {
    gridEl.innerHTML = "";
    for (let r = 0; r < maxAttempts; r++) {
        const rowEl = document.createElement("div");
        rowEl.classList.add("row");
        rowEl.id = `row-${r}`;
        for (let c = 0; c < wordLength; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `cell-${r}-${c}`;
            rowEl.appendChild(cell);
        }
        gridEl.appendChild(rowEl);
    }
}

// ===== INPUT =====
document.addEventListener("keydown", (e) => {
    if (gameOver) return;
    const key = e.key.toLowerCase();
    if (key === "backspace") { deleteLetter(); return; }
    if (key === "enter") { submitGuess(); return; }
    if (/^[а-яёa-zăâîșț]$/i.test(key)) addLetter(key);
});

document.getElementById("keyboard").addEventListener("click", (e) => {
    if (gameOver) return;
    const key = e.target.closest(".kb-key");
    if (!key) return;
    const letter = key.dataset.letter;
    if (!letter) return;
    if (letter === "backspace") { deleteLetter(); return; }
    if (letter === "shift") return;
    addLetter(letter);
});

function addLetter(letter) {
    if (currentCol >= wordLength) return;
    const cell = getCell(currentRow, currentCol);
    cell.textContent = letter.toUpperCase();
    cell.classList.add("filled");
    entered[currentCol] = letter;
    currentCol++;
    clearMessage();
}

function deleteLetter() {
    if (currentCol <= 0) return;
    currentCol--;
    const cell = getCell(currentRow, currentCol);
    cell.textContent = "";
    cell.classList.remove("filled");
    entered[currentCol] = "";
    clearMessage();
}

function getCell(r, c) { return document.getElementById(`cell-${r}-${c}`); }

// ===== SUBMIT =====
function submitGuess() {
    if (currentCol < wordLength) {
        const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang].msgFillAll : "Введите все буквы!";
        showMessage(t, "warn");
        shakeRow(currentRow);
        return;
    }

    const guess = entered.slice(0, wordLength).join("");

    // ПРОВЕРКА СЛОВАРЯ
    if (!isValidWord(guess)) {
        const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang].msgNotWord : "Такого слова нет в словаре!";
        showMessage(t, "warn");
        shakeRow(currentRow);
        return;
    }

    clearMessage();
    const result = checkWord(guess);

    for (let i = 0; i < wordLength; i++) {
        const cell = getCell(currentRow, i);
        setTimeout(() => { cell.classList.add(result[i]); }, i * 120);
    }
    setTimeout(() => { updateKeyboard(guess, result); }, wordLength * 120);

    const won = result.every(r => r === "green");

    setTimeout(() => {
        if (won) {
            gameOver = true;
            showResult(true, currentRow + 1);
        } else if (currentRow + 1 >= maxAttempts) {
            gameOver = true;
            showResult(false);
        } else {
            currentRow++;
            currentCol = 0;
            entered = [];
        }
    }, wordLength * 120 + 300);
}

function checkWord(guess) {
    const result = new Array(wordLength).fill("");
    const secretArr = secret_word.split("");
    for (let i = 0; i < wordLength; i++) {
        if (guess[i] === secretArr[i]) { result[i] = "green"; secretArr[i] = null; }
    }
    for (let i = 0; i < wordLength; i++) {
        if (result[i] === "green") continue;
        const idx = secretArr.indexOf(guess[i]);
        if (idx !== -1) { result[i] = "yellow"; secretArr[idx] = null; }
        else { result[i] = "gray"; }
    }
    return result;
}

function shakeRow(rowIdx) {
    const rowEl = document.getElementById(`row-${rowIdx}`);
    rowEl.classList.add("shake");
    rowEl.addEventListener("animationend", () => rowEl.classList.remove("shake"), { once: true });
}

// ===== СООБЩЕНИЯ =====
function showMessage(text, type) {
    let el = document.getElementById("gameMessage");
    if (!el) {
        el = document.createElement("div");
        el.id = "gameMessage";
        gridEl.parentNode.insertBefore(el, gridEl);
    }
    el.textContent = text;
    el.className = "game-message " + (type || "");
    el.style.display = "block";
}

function clearMessage() {
    const el = document.getElementById("gameMessage");
    if (el) el.style.display = "none";
}

// ===== KEYBOARD =====
function updateKeyboard(guess, result) {
    const priority = { green: 3, yellow: 2, gray: 1 };
    for (let i = 0; i < wordLength; i++) {
        const letter = guess[i];
        const keyEl = document.querySelector(`.kb-key[data-letter="${letter}"]`);
        if (!keyEl) continue;
        const current = keyEl.classList.contains("green") ? "green"
            : keyEl.classList.contains("yellow") ? "yellow"
            : keyEl.classList.contains("gray") ? "gray" : null;
        if (!current || priority[result[i]] > priority[current]) {
            keyEl.classList.remove("green", "yellow", "gray");
            keyEl.classList.add(result[i]);
        }
    }
}

function resetKeyboard() {
    document.querySelectorAll(".kb-key").forEach(k => k.classList.remove("green", "yellow", "gray"));
}

// ===== GAME TIMER =====
let gameTimerInterval = null;
let gameSeconds = 0;
let winStreak = 0;

function startTimer() {
    gameSeconds = 0;
    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(() => gameSeconds++, 1000);
}

function stopTimer() {
    clearInterval(gameTimerInterval);
}

function formatTime(s) {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
}

// ===== CONFETTI =====
function launchConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ["#6c47ff","#4caf50","#f9a825","#e53935","#2196f3","#ff9800"];
    const pieces = Array.from({length: 80}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: 6 + Math.random() * 8,
        h: 10 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * 360,
        vy: 2 + Math.random() * 4,
        vx: (Math.random() - 0.5) * 3,
        vr: (Math.random() - 0.5) * 6,
    }));

    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
            ctx.restore();
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vr;
        });
        frame++;
        if (frame < 120) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
}

// ===== RESULT MODAL =====
function showResult(won, attempts) {
    stopTimer();
    const modal = document.getElementById("resultModal");

    const T = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : TRANSLATIONS["ru"];
    // Trophy
    document.getElementById("resultTrophy").textContent = won ? "🏆" : "😔";
    // Title & subtitle
    document.getElementById("resultTitle").textContent = won ? T.resultWinTitle : T.resultLoseTitle;
    document.getElementById("resultSubtitle").textContent = won ? T.resultWinSub : T.resultLoseSub;

    // Word tiles
    const wordEl = document.getElementById("resultWord");
    wordEl.innerHTML = "";
    const colors = won
        ? ["green","green","gray","gray","yellow","gray"].slice(0, secret_word.length)
        : new Array(secret_word.length).fill("dark");
    secret_word.toUpperCase().split("").forEach((ch, i) => {
        const tile = document.createElement("div");
        tile.className = "result-tile " + (colors[i] || "dark");
        tile.textContent = ch;
        wordEl.appendChild(tile);
    });

    // Time
    document.getElementById("resultTime").textContent = formatTime(gameSeconds);
    const timeBadge = document.getElementById("timeBadge");
    timeBadge.textContent = gameSeconds < 60 ? T.resultRecord : gameSeconds < 120 ? T.resultNew : "";
    timeBadge.style.display = timeBadge.textContent ? "inline-block" : "none";

    // Attempts
    const att = attempts || maxAttempts;
    document.getElementById("resultAttempts").textContent = `${att}/${maxAttempts}`;
    const attBadge = document.getElementById("attemptsBadge");
    attBadge.textContent = att <= 2 ? T.resultSniper : att <= 4 ? T.resultExcellent : att <= 5 ? T.resultGood : "";
    attBadge.style.display = attBadge.textContent ? "inline-block" : "none";

    // Streak
    if (won) winStreak++; else winStreak = 0;
    document.getElementById("streakCount").textContent = winStreak;
    const dotsEl = document.getElementById("streakDots");
    dotsEl.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        const d = document.createElement("div");
        d.className = "streak-dot" + (i < winStreak ? " active" : "");
        dotsEl.appendChild(d);
    }

    // Streak section only if won
    document.getElementById("resultStreak").style.display = won ? "flex" : "none";
    document.getElementById("resultTip").style.display = won ? "block" : "none";

    if (!won) {
        document.getElementById("resultTip").style.display = "block";
        document.getElementById("resultTip").textContent = T.tipLose;
    }

    modal.classList.add("active");
    if (won) setTimeout(launchConfetti, 200);
}

document.getElementById("closeResult").addEventListener("click", () => {
    document.getElementById("resultModal").classList.remove("active");
});
document.getElementById("closeResultBtn").addEventListener("click", () => {
    document.getElementById("resultModal").classList.remove("active");
});
document.getElementById("newGameBtn").addEventListener("click", () => {
    document.getElementById("resultModal").classList.remove("active");
    init();
});
document.getElementById("nextLevelBtn").addEventListener("click", () => {
    document.getElementById("resultModal").classList.remove("active");
    const options = ["easy", "medium", "hard"];
    const idx = options.indexOf(difficulty);
    difficulty = options[Math.min(idx + 1, options.length - 1)];
    init();
});

// ===== HOW TO =====
document.getElementById("howToBtn").addEventListener("click", () => {
    document.getElementById("howToModal").classList.add("active");
});
document.getElementById("helpBtn").addEventListener("click", () => {
    document.getElementById("howToModal").classList.add("active");
});
document.getElementById("closeHowTo").addEventListener("click", () => {
    document.getElementById("howToModal").classList.remove("active");
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.classList.remove("active");
    });
});

// ===== SURRENDER =====
document.getElementById("surrenderBtn").addEventListener("click", () => {
    if (gameOver) return;
    gameOver = true;
    showResult(false);
});

// ===== CLEAR =====
document.getElementById("clearBtn").addEventListener("click", () => {
    if (gameOver) return;
    for (let c = 0; c < wordLength; c++) {
        const cell = getCell(currentRow, c);
        cell.textContent = "";
        cell.classList.remove("filled");
    }
    currentCol = 0;
    entered = [];
    clearMessage();
});

// Difficulty is set from index.html via sessionStorage

// ===== INFINITE =====
document.getElementById("infiniteBtn").addEventListener("click", () => { init(); });

// ===== DAILY TIMER =====
function updateTimer() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const diff = tomorrow - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    const el = document.getElementById("dailyTimer");
    if (el) el.textContent = `${h}:${m}:${s}`;
}
setInterval(updateTimer, 1000);
updateTimer();

// ===== START =====
// Wait for i18n.js to apply saved language/theme before first init,
// so the correct word pool and keyboard are active from the start.
window._lexigoReady = false;
document.addEventListener('lexigo-ready', () => {
    if (!window._lexigoReady) {
        window._lexigoReady = true;
        const lang = localStorage.getItem('lexigo_lang') || 'ru';
        switchWordPool(lang);
        buildKeyboard(lang);
        init();
    }
});
// Fallback: if i18n.js never fires the event (e.g. not on game page), init after 100ms
setTimeout(() => {
    if (!window._lexigoReady) {
        window._lexigoReady = true;
        const lang = localStorage.getItem('lexigo_lang') || 'ru';
        switchWordPool(lang);
        buildKeyboard(lang);
        init();
    }
}, 80);

// ============================================================
//  РУМЫНСКИЙ ЯЗЫК — клавиатура и словари
// ============================================================

// Румынская клавиатура (QWERTY + специальные буквы)
const KEYBOARD_RO = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['shift','z','x','c','v','b','n','m','backspace'],
    // Специальные румынские буквы — отдельный ряд
    ['ă','â','î','ș','ț']
];

const KEYBOARD_RU = [
    ['й','ц','у','к','е','н','г','ш','щ','з','х'],
    ['ф','ы','в','а','п','р','о','л','д','ж','э'],
    ['shift','я','ч','с','м','и','т','ь','б','ю','backspace']
];

function buildKeyboard(lang) {
    const kb = document.getElementById('keyboard');
    if (!kb) return;
    kb.innerHTML = '';

    const layout = lang === 'ro' ? KEYBOARD_RO : KEYBOARD_RU;
    layout.forEach((row, ri) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'kb-row';
        // Extra styling for the Romanian special-chars row
        if (lang === 'ro' && ri === 3) {
            rowEl.style.marginTop = '4px';
        }
        row.forEach(letter => {
            const key = document.createElement('div');
            key.className = 'kb-key';
            key.setAttribute('data-letter', letter);
            if (letter === 'shift')     { key.className += ' kb-shift'; key.textContent = '⬆'; }
            else if (letter === 'backspace') { key.className += ' kb-back'; key.textContent = '⌫'; }
            else { key.textContent = letter.toUpperCase(); }
            rowEl.appendChild(key);
        });
        kb.appendChild(rowEl);
    });
    // Restore color state from keyboardColors map
    if (window._kbColors) {
        Object.entries(window._kbColors).forEach(([letter, cls]) => {
            const k = kb.querySelector(`[data-letter="${letter}"]`);
            if (k) { k.classList.remove('green','yellow','gray'); k.classList.add(cls); }
        });
    }
}

// Track keyboard colors so we can restore them on lang switch
window._kbColors = {};

// Patch updateKeyboard to also store colors
const _origUpdateKb = updateKeyboard;
function updateKeyboard(guess, result) {
    const priority = { green: 3, yellow: 2, gray: 1 };
    for (let i = 0; i < wordLength; i++) {
        const letter = guess[i];
        const keyEl = document.querySelector(`.kb-key[data-letter="${letter}"]`);
        if (!keyEl) continue;
        const current = window._kbColors[letter] || null;
        if (!current || priority[result[i]] > priority[current]) {
            window._kbColors[letter] = result[i];
            keyEl.classList.remove('green','yellow','gray');
            keyEl.classList.add(result[i]);
        }
    }
}

// Patch resetKeyboard
const _origResetKb = resetKeyboard;
function resetKeyboard() {
    window._kbColors = {};
    document.querySelectorAll('.kb-key').forEach(k => k.classList.remove('green','yellow','gray'));
}

// Hook i18n lang switch to rebuild keyboard
if (typeof window !== 'undefined') {
    document.addEventListener('lexigo-lang-change', (e) => {
        buildKeyboard(e.detail.lang);
        // Also switch word pool
        switchWordPool(e.detail.lang);
        init();
    });
}

// ============================================================
//  РУМЫНСКИЕ СЛОВА
// ============================================================
const WORDS_RO_EASY = [
    // 3 буквы
    "cas","pom","cer","lac","foc","cap","nas","urs","cal","gat",
    "vin","lup","rac","par","sat","vis","val","ram","nor","pas",
    // 4 буквы
    "casa","masa","brad","lume","drum","pumn","tigru","vita","glas",
    "munte","mare","sare","pâine","carte","frate","soare","noapte",
    "rece","cald","bine","rosu","alb","nou","mic","mare",
    "ochi","mana","corp","dinte","limba","frunte","umăr",
    "mama","tata","frate","sora","copil","bunic"
];

const WORDS_RO_MEDIUM = [
    // 5 букв
    "carte","stele","verde","pâine","munte","soare","florea","noapte",
    "vreme","proba","curea","forma","noroc","poama","arbor","barca",
    "catif","ceata","codru","conac","cruce","culme","cumva","curte",
    "doina","drept","fagur","fiare","fulger","garda","hrana","iarna",
    "lacul","lanul","larma","lemne","linul","liric","lupii","magul",
    "malul","marul","masca","meste","metru","mielu","mirul","modul",
    "morta","motiv","munca","muzeu","narau","negru","norul","notei",
    "numai","numar","oapsa","omida","omule","oprit","ordol","orice",
    "ornat","ornic","ostas","otava","pagub","palma","palor","panul",
    "patru","pelec","penal","peren","perit","piata","picta","pilaf",
    "pilar","pilot","pirat","plata","plumb","podea","polar","pomul",
    "popas","popor","porta","portb","poste","potir","povara","pranz",
    "primu","probe","prova","rabil","rafal","rapid","rares","ratan",
    "ratie","razbi","razme","recit","regul","repet","rezum","robul",
    // 6 букв
    "arbore","baraca","biroul","brandul","calcar","camera","cantar",
    "capata","capete","caruia","castel","ceicei","cheiea","ciocan",
    "codrul","copaci","covata","culege","dalac","dansat","dascal",
    "datina","decat","declin","demult","descul","deveni","dicteu",
    "discul","doctor","domnia","dorinta","doua","dreptu","dudele",
    "editor","eroism","faclia","falnic","familie","ferice","festin",
    "fiinta","filtre","finala","floare","fluier","fortel","fracta",
    "frumos","galben","gandac","gandul","gloata","gradina","gratie",
    "groapa","grupul","halcin","harnic","herghel","hoinar","iepure",
    "iesire","imagine","impuls","insula","intrare","invata","izolat",
    "jertfa","jocuri","judeta","junime","lamura","largar","latime",
    "lavita","lazaret","leagan","lectur","lemnul","lentil","liniste",
    "litere","lucrul","lumina","lungul","luptat","magazin","maldar",
    "mancat","mantos","matura","merele","metoda","miezul","minune",
    "mirare","miscare","mister","moarte","morava","motorul","murdar",
    "muschi","muzica","natura","negura","ninsori","nivelul","noblet",
    "nordul","notari","nuanta","numere","oameni","obicei","obosit",
    "ocolit","ocupat","odeala","ofrant","onoare","optica","orasul",
    "ordine","origine","osteni","padure","pagina","paleta","palton",
    "pamant","pasare","patura","padurea","peltic","permit","petala",
    "pictur","pieton","pipigu","planul","plimba","ploton","plopul",
    "poduri","politie","portul","poteca","primara","priveliste","proiect",
    "racela","radacin","recolt","regiune","repaus","reteta","revisat",
    "rezolva","riviera","robinet","roscat","rotund","rulment","salcie",
    "salcii","sarare","satean","satura","savant","seceta","semnat",
    "seninat","senin","setare","sincer","sistem","situati","slavit",
    "soarta","soiuri","soldat","somnat","sosire","spatiu","spirala",
    "sprint","stapan","stejar","stradal","strada","strica","student",
    "suflet","suport","sursa","sustine","talent","taraba","tarcul",
    "tarile","tatuca","temelie","templu","tinere","tipar","traitor",
    "tranda","trecut","tribun","trista","tuburi","tuiciu","tulpin",
    "turist","tustun","ulcior","ulcica","umblat","umbrit","uncrop",
    "unelte","ungher","uniune","urcare","urmarit","ursit","valuri",
    "vatraf","vazut","vechin","vedera","vegetal","veghe","venire",
    "verset","vestea","viata","viitor","virtuos","visare","viteaz",
    "vitreg","vopsel","zambet","zborul","zodiac","zorile"
];

const WORDS_RO_HARD = [
    "adaptare","adevarat","admiratie","afacere","agrement","ajutorul",
    "alphabet","ambitios","amintire","analiza","animale","anotimp",
    "apreciere","armonios","asezare","atentie","atmosfera","atitudine",
    "aventura","batranete","beneficiu","biblioteca","bucurie","calitati",
    "calatorie","campanie","caracter","castigat","categorii","celebrat",
    "certitudine","cineva","claritate","colegiu","competent","comunitate",
    "conceptul","conducere","confuzie","constiinta","contabil","contrast",
    "cooperare","creativitate","credinta","cunoastere","curajul","datorita",
    "descoperit","devotament","diferenta","dificultate","disciplina",
    "distanta","dorinta","dreptate","educatie","eficienta","egalitate",
    "eleganta","eliberare","emoțional","energie","entuziasmul","evolutie",
    "excelenta","exercitiu","existenta","experienta","explicatie","expresie",
    "facilitat","fantezist","farmecul","fericire","filozofie","finalitat",
    "formulare","frumusete","functionare","generozit","gestionare","gradatie",
    "gratitudine","hotarare","ideologie","iluzie","imaginatia","importanta",
    "impreuna","incredere","informatii","inițiativa","inovatia","inspiratie",
    "inteligent","interesant","invatamant","inventivit","jertfire","judecata",
    "libertatea","loialitate","magistrat","manifestare","mentalitate",
    "meritocratie","misticismul","mobilitate","moralitate","motivatia",
    "naturalete","necesitate","normalitate","obiectiv","obstacol","ocupatie",
    "optimismul","organizare","orientare","originalitate","paradigma",
    "participare","pasionate","patriotism","performanta","perseverenta",
    "planificare","pluralism","posibilitati","practica","pragmatism",
    "principiile","prioritate","problema","productivitate","profesional",
    "profilul","prosperitate","protectia","prudenta","realitate","receptivit",
    "recunoastere","reflexie","relatii","relaxare","renuntare","rezilienta",
    "romantism","sacrificiu","sanatatea","satisfactie","semnificatie",
    "sensibilitate","seriozitate","sinceritate","situatia","solidaritate",
    "solutionare","spiritualitate","stabilitate","strategie","sustinere",
    "toleranta","transparenta","umanitate","unicitate","urmarire","valorile",
    "varietate","virtutea","viziunea","voluntariat","vulnerabil","determinare"
];

const VALID_WORDS_RO = new Set([
    ...WORDS_RO_EASY, ...WORDS_RO_MEDIUM, ...WORDS_RO_HARD,
    // extra common romanian words
    "alb","alt","ani","arc","ars","asa","azi","bal","ban","bat","bau","bea",
    "bes","bot","bun","cai","cam","cap","cas","cat","caz","cer","cit","cod",
    "cor","cos","cot","cuc","cup","cut","dar","dat","dau","dea","dec","des",
    "dor","dos","duc","dup","dur","era","est","fac","fag","fap","far","fas",
    "fat","fiu","foc","fop","for","fot","fug","ful","fum","fun","fur","gal",
    "gat","gaz","ger","gol","gon","gur","hai","ham","has","hat","haz","hei",
    "hol","hop","hor","hot","iau","ice","ied","ier","ies","imi","imp","ind",
    "ins","int","ira","iti","jar","joc","jos","jur","lac","lai","lan","lat",
    "lau","laz","lea","lei","les","let","lia","lie","lip","lis","lit","loc",
    "log","lop","lor","lot","luc","lud","lui","lun","lup","lut","mag","mai",
    "mal","mam","mar","mas","mat","mau","maz","mel","men","mer","met","meu",
    "mic","mil","mir","mit","moa","mod","mol","mor","mos","mot","muc","mud",
    "mug","mun","mur","mus","mut","nai","nas","nat","nea","nec","nef","neg",
    "nei","ner","net","noi","nor","not","nuc","nud","nun","nur","nut","oac",
    "oar","oat","obs","och","oda","olt","omu","opt","orc","ori","orm","ort",
    "osp","oul","pac","pai","par","pas","pat","pau","paz","pec","pei","pen",
    "per","pih","pil","pit","pix","pla","plm","poa","poc","poi","pol","pom",
    "pop","por","pot","pre","pri","pro","puf","pui","pun","pur","pus","put",
    "rab","rac","rad","rag","rai","ram","ran","rap","rar","ras","rat","rau",
    "raz","rec","ref","reg","rei","ren","rep","res","ret","reu","rev","ric",
    "rig","rin","rit","rob","rod","rom","ros","rot","roz","ruc","rug","rul",
    "rus","rut","sad","sai","sal","san","sar","sat","sau","saz","sec","sel",
    "sem","sen","sep","ser","ses","set","sfe","sin","sir","sis","sit","soc",
    "sol","som","son","sor","sot","spa","spi","spl","spr","sta","ste","sti",
    "sto","str","stu","sub","suc","sum","sup","sur","sus","sut","tac","tai",
    "tal","tam","tar","tat","tau","taz","tel","tem","ter","tes","tic","tin",
    "tir","tit","toc","tot","tra","tre","tri","tro","tru","tub","tug","tun",
    "tur","unc","und","uni","uns","ura","uri","urs","use","uti","vad","val",
    "van","var","vas","vat","vaz","vea","vel","ven","ver","ves","via","vic",
    "vid","vig","vil","vin","vis","vit","viu","voi","vom","vor","vos","vul",
    "zar","zau","zec","zel","zeu","zia","zip","zis","zit","zob","zor","zup"
]);

// Current word pool pointers
let activePool = { easy: WORDS_EASY, medium: WORDS_MEDIUM, hard: WORDS_HARD };
let activeValid = VALID_WORDS;

function switchWordPool(lang) {
    loadBigDictionary(lang);
    if (lang === 'ro') {
        activePool = { easy: WORDS_RO_EASY, medium: WORDS_RO_MEDIUM, hard: WORDS_RO_HARD };
        activeValid = VALID_WORDS_RO;
    } else {
        activePool = { easy: WORDS_EASY, medium: WORDS_MEDIUM, hard: WORDS_HARD };
        activeValid = VALID_WORDS;
    }
}

// Override isValidWord to use activeValid
function isValidWord(word) {
    return activeValid.has(word.toLowerCase());
}


// ============================================================
//  БОЛЬШИЕ СЛОВАРИ (words/ru.json, words/ro.json)
//  Используются ТОЛЬКО для проверки введённых слов.
//  Загаданные слова по-прежнему берутся из списков выше.
// ============================================================
const _bigLoaded = {};

// Подключаем words/<lang>.js как обычный <script> — так работает и с file://, и на GitHub Pages
function loadBigDictionary(lang) {
    if (_bigLoaded[lang]) return;
    _bigLoaded[lang] = true;

    const addWords = () => {
        const list = (window.LEXIGO_WORDS || {})[lang];
        if (!list) return;
        const target = lang === 'ro' ? VALID_WORDS_RO : VALID_WORDS;
        for (const w of list) target.add(w);
        console.log(`Словарь ${lang}: +${list.length} слов`);
    };

    const el = document.createElement('script');
    el.src = `words/${lang}.js`;
    el.onload = addWords;
    el.onerror = () => {
        _bigLoaded[lang] = false;
        console.warn(`Не найден words/${lang}.js`);
    };
    document.head.appendChild(el);
}
