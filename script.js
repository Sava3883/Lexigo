// ============================================================
//  LEXIGO — Game Logic
// ============================================================

// ===== СЛОВАРИ =====
const WORDS_EASY = [
    // 3 буквы
    "бег","бок","бык","вал","век","вес","вол","вор","газ","ген",
    "год","гол","дар","дед","дно","дом","дуб","дым","ель","жар",
    "жир","жук","зал","зуб","имя","кит","кол","кот","куб","лак",
    "лев","лед","лен","лес","лис","лоб","лом","лук","мак","мед",
    "мел","мех","мир","мох","муж","мяч","нож","нос","оса","пар",
    "пес","пир","пух","пыл","раб","рай","рак","рис","ров","рог",
    "рот","ряд","сад","сок","сом","сон","суд","суп","сыр","таз",
    "тир","ток","тон","тыл","уха","ухо","фея","фон","хор","цех",
    "чай","час","чек","шар","шея","шов","шум","шут","щит","эра",
    "эхо","юла","яма",
    // 4 буквы
    "арка","арфа","база","бант","баня","бинт","блин","бокс","борщ","брат",
    "бусы","ваза","вата","весы","вкус","внук","вода","воин","волк","воск",
    "враг","глаз","гнев","гном","гора","горе","град","гриб","гриф","гром",
    "груз","гусь","дама","дача","дело","день","диск","дичь","долг","доля",
    "дочь","друг","дуга","духи","душа","дыня","ежик","жаба","жара","жена",
    "заря","звук","зима","змея","зонт","игла","игра","идея","икра","иней",
    "ирис","йога","кадр","кафе","каша","квас","кедр","кино","клад","клей",
    "клен","клуб","ключ","ковш","кожа","коза","конь","кора","корм","коса",
    "краб","край","кран","крик","крот","круг","куст","куча","лавр","лапа",
    "лень","лето","липа","лиса","лист","литр","лифт","ложь","лось","лужа",
    "луна","лупа","лыжи","мама","март","матч","мать","маяк","мель","мера",
    "мина","мода","мозг","моль","море","морж","мост","мрак","мука","мыло",
    "мышь","небо","нерв","нить","ниша","ноль","нора","нота","ночь","нрав",
    "овес","овца","окно","орда","орел","орех","осел","отец","очки","парк",
    "пена","перо","печь","пиво","пион","плащ","плед","плот","пляж","поза",
    "поле","пони","пора","порт","пост","приз","пруд","пуля","путь","пыль",
    "рама","рана","раса","рейс","река","репа","речь","риск","роза","ромб",
    "роса","рука","рыба","рысь","сало","сани","сбор","свет","свод","сено",
    "сеть","сила","сито","слон","слух","смех","снег","сноп","сова","соль",
    "срок","стая","стол","стон","стул","стыд","суша","счет","танк","тело",
    "тема","тень","тигр","тина","торт","трон","труд","трюк","туча","тушь",
    "тьма","тяга","угол","удав","удар","ужас","узел","узор","укол","улей",
    "упор","уран","урок","утес","утка","утро","утюг","фара","флаг","фонд",
    "фото","фрак","фунт","хлам","хлеб","холм","храм","хрен","царь","цвет",
    "цель","цена","цепь","цикл","цирк","часы","чаша","чудо","шаль","шарф",
    "шелк","шило","шина","шкаф","шлем","шнур","шрам","шуба","щека","щука",
    "эпос","этаж","этап","этюд","юбка","юнга","юрта","ядро","язва","язык",
    "яхта","ящик"
];

const WORDS_MEDIUM = [
    // 5 букв
    "абзац","агент","адрес","актер","акула","аллея","алмаз","ангел","арбуз","арена",
    "багаж","банан","баран","барон","башня","бегун","белка","берег","билет","бланк",
    "блюдо","бобер","богач","бокал","бочка","брови","буква","булка","вагон","вальс",
    "ванна","вафля","ведро","венец","веник","верба","весна","ветер","вечер","взрыв",
    "вилка","вираж","вишня","волна","волос","ворон","ворот","время","вывод","выдра",
    "выход","галка","гамак","гараж","герой","голос","гонка","горка","город","горох",
    "гость","гроза","грудь","груша","гусар","дверь","девиз","декор","диван","диета",
    "длина","добро","дождь","доска","дочка","драма","дробь","дрова","дрозд","дудка",
    "дымка","жизнь","жираф","забор","завод","заказ","закат","замок","запад","запах",
    "заряд","звено","зверь","зебра","зелье","земля","зерно","игрок","идеал","икона",
    "индюк","искра","кабан","кадка","калач","камин","камыш","канал","канат","капля",
    "карта","касса","катер","кепка","кефир","кивок","кисть","клоун","книга","ковер",
    "колос","конус","копия","корка","корма","кость","кофта","кошка","кража","кровь",
    "крупа","крыло","крыша","кубик","кубок","кукла","кулак","купол","кусок","кухня",
    "лавка","лазер","лайка","лампа","лапша","лента","лимон","линия","лодка","ложка",
    "лоток","магия","майка","майор","маска","масло","масса","масть","мачта","медик",
    "место","метка","метро","мечта","мидия","мираж","миска","мишка","молот","монах",
    "мопед","мороз","мотив","мотор","мошка","музей","мусор","мысль","набор","навык",
    "наряд","насос","нация","нитка","ножик","ножка","номер","норма","носок","обзор",
    "обида","обман","обувь","овощи","огонь","озеро","океан","округ","окунь","олень",
    "омлет","опора","опрос","осада","осень","осина","отдых","отзыв","отряд","падеж",
    "пакет","палец","палка","панда","парад","парта","пасть","пауза","пенал","пепел",
    "перец","песня","песок","петля","петух","пират","пицца","пламя","плеер","плечо",
    "плита","побег","повар","повод","поезд","пожар","полет","полка","порог","порок",
    "посол","поток","почва","почта","поэма","прием","проза","пряжа","птица","пульс",
    "пункт","пушка","пчела","пятно","радар","радио","разум","район","рамка","ранец",
    "рация","ребро","редис","режим","рельс","рента","рифма","робот","родня","рубеж",
    "рубль","ручей","ручка","рынок","сабля","садик","салат","салон","самец","санки",
    "сапог","сарай","сахар","свеча","сдача","север","седло","семья","скала","сквер",
    "склад","скука","слава","слеза","слива","слово","смена","смесь","смола","совет",
    "сокол","сосед","сосна","сосуд","спина","спорт","спрос","ссора","стадо","старт",
    "стена","стиль","столб","страх","судак","сумка","сумма","сушка","сфера","сцена",
    "сюжет","табак","тайга","тайна","талия","танец","тачка","театр","текст","тесто",
    "тетка","титул","ткань","толпа","топор","тоска","точка","трава","треск","тропа",
    "труба","тулуп","туман","туфля","тыква","уголь","улица","умник","успех","устье",
    "факел","фасад","фауна","ферма","фикус","финиш","фирма","фляга","фокус","форма",
    "фраза","фрукт","халва","хвост","химия","хмель","хобби","холод","хомяк","хорек",
    "хутор","цапля","цветы","центр","цифра","чайка","чашка","чехол","чижик","чудак",
    "чулан","чулок","шайба","шалаш","шалун","шапка","шарик","шахта","шашка","ширма",
    "шишка","школа","шланг","шорты","шоссе","шофер","шпага","штаны","штора","штраф",
    "штурм","шуруп","шутка","щегол","щенок","щетка","экран","элита","эмаль","эпоха",
    "юноша","ягода","якорь",
    // 6 букв
    "альбом","ананас","аптека","артист","балкон","барсук","береза","болото","борода","брызги",
    "бублик","бумага","бутыль","вампир","взгляд","воздух","вопрос","ворона","вулкан","высота",
    "гавань","газета","гвоздь","глобус","гнездо","голубь","гречка","деньги","дерево","десерт",
    "джинсы","долина","дорога","дракон","дружба","жасмин","жемчуг","журнал","забава","засуха",
    "звезда","здание","зонтик","зрение","имбирь","кактус","калина","камень","кассир","кисель",
    "клапан","клетка","климат","книжка","кнопка","колесо","кольцо","компас","компот","корона",
    "костюм","краски","кредит","кролик","кружка","курица","лагерь","ладонь","лебедь","листва",
    "логика","ломтик","лопата","лыжник","львица","любовь","магнит","малина","мамонт","мастер",
    "матрас","машина","медаль","медуза","метель","минута","молния","молоко","момент","монета",
    "мудрец","музыка","неделя","ночник","облако","огонек","огород","огурец","одежда","окошко",
    "ошибка","пальма","пальто","панама","паркет","пастух","педаль","пекарь","пенсия","перрон",
    "пещера","пикник","письмо","пловец","погода","подвал","польза","поляна","почерк","правда",
    "пробка","пряник","птенец","птичка","пудинг","пузырь","работа","радуга","ракета","ремень",
    "ремонт","ресурс","рецепт","родник","рыцарь","рюкзак","сапоги","свиток","секрет","сердце",
    "сестра","сигнал","силуэт","синица","сирень","сказка","скамья","сливки","снимок","собака",
    "солдат","солнце","солома","спички","статья","стежок","сторож","страус","студия","ступня",
    "сугроб","сумрак","сундук","супруг","танцор","телега","тополь","тормоз","трасса","тренер",
    "тряпка","тундра","турист","тюлень","тюрьма","уборка","убыток","угроза","удочка","улитка",
    "улыбка","ураган","урожай","утенок","фасоль","феникс","фермер","фиалка","фигура","флейта",
    "фольга","фонарь","фонтан","форель","фрукты","футбол","хижина","хлопок","хозяин","хоккей",
    "цветок","цемент","чайник","челнок","чердак","чеснок","шаблон","шашлык","шелест","шерсть",
    "шлюпка","штопор","щавель","эскимо","юбилей","яблоко","яблоня","язычок","январь"
];

const WORDS_HARD = [
    // 7 букв
    "абрикос","автобус","алфавит","антенна","аппетит","аптечка","бабочка","бабушка","барабан","бассейн",
    "батарея","бегемот","берлога","бинокль","блокнот","ботинки","булочка","бульвар","бусинка","бутылка",
    "варенье","вариант","василек","ведерко","верблюд","веревка","вершина","ветеран","ветчина","вешалка",
    "витрина","водопад","галерея","галстук","горошек","горчица","девочка","дедушка","декабрь","дельфин",
    "детство","диктант","дирижер","дневник","домовой","дорожка","дыхание","единица","ежевика","желание",
    "завтрак","загадка","закуска","зарядка","зеленый","зеркало","игрушка","изумруд","инженер","интерес",
    "история","кабинет","калитка","капитан","капуста","картина","кенгуру","клавиша","колбаса","колодец",
    "колонка","коляска","команда","комната","конверт","конкурс","конфета","корабль","корзина","коридор",
    "котенок","кошелек","кровать","кузница","кукушка","лавочка","леденец","лексика","лесенка","лимонад",
    "лисенок","лошадка","лужайка","лягушка","магазин","марафон","медведь","миллион","мозаика","молоток",
    "морковь","мотылек","мышонок","надежда","нарцисс","новости","ножницы","носорог","овсянка","оркестр",
    "палатка","парашют","паровоз","паспорт","пианино","пингвин","пирожок","планета","пластик","пломбир",
    "площадь","подарок","подкова","подушка","полянка","портрет","посылка","природа","простор","пустыня",
    "пустырь","пшеница","пылесос","пятница","радость","ракетка","ракушка","ребенок","редиска","ресница",
    "рисунок","розетка","ромашка","рубашка","рыбалка","самовар","самолет","сапожок","сарафан","свадьба",
    "свисток","свобода","серебро","скворец","скрипка","слесарь","снегирь","событие","совенок","соловей",
    "сосиска","столбик","студент","суббота","сумерки","счастье","сюрприз","таблица","таксист","тарелка",
    "тележка","телефон","тетрадь","трактор","трамвай","тюльпан","уборщик","удачный","участок","учебник",
    "ученица","учитель","фабрика","фонарик","хоровод","часовой","чемодан","черешня","черника","чернила",
    "шампунь","шахматы","шоколад","экзамен","эмблема","эстрада","явление","ягненок","ягодный","яичница",
    "ящерица",
    // 8 букв
    "аквариум","апельсин","аэродром","аэропорт","биология","ватрушка","вертолет","виноград","волейбол","выставка",
    "выходной","гардероб","гвоздика","гирлянда","гитарист","горизонт","гороскоп","гостиная","гусеница","животное",
    "заплатка","зарплата","каникулы","карамель","карандаш","карусель","кастрюля","квартира","кладовка","клубника",
    "козленок","кофейник","красивый","крокодил","кузнечик","кукуруза","лампочка","ласточка","лестница","луковица",
    "мандарин","мармелад","маскарад","матрешка","медицина","мельница","микрофон","младенец","музыкант","наклейка",
    "осьминог","отвертка","открытка","парусник","пельмень","перчатка","петрушка","пистолет","плавание","пожарный",
    "помощник","праздник","проблема","прогулка","пропасть","пуговица","разговор","растения","расческа","режиссер",
    "ржавчина","родители","рукавица","садовник","салфетка","сентябрь","скакалка","скатерть","скорость","слабость",
    "слоненок","снеговик","снежинка","солнышко","сосулька","спагетти","страница","стрекоза","таблетка","телескоп",
    "тигренок","тропинка","тумбочка","угощение","фантазия","фотограф","футболка","характер","художник","цыпленок",
    "черепаха","чудовище","шиповник","шкатулка","электрик"
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
    "кубик","мячик","кукла","пазл","дрон","робот","компьютер",
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
let activeChallengeWord = null;
let currentRow = 0;
let currentCol = 0;
let gameOver = false;
let entered = [];

// DOM
const gridEl = document.getElementById("grid");
const diffLabel = document.getElementById("diffLabel");
const gameTitle = document.getElementById("gameTitle");

// ===== INIT =====
function init(challengeWord = null) {
    const T = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : TRANSLATIONS["ru"];
    const selectedChallengeWord = challengeWord || activeChallengeWord;
    if (selectedChallengeWord) {
        secret_word = selectedChallengeWord;
        wordLength = selectedChallengeWord.length;
        difficulty = wordLength <= 4 ? "easy" : wordLength <= 6 ? "medium" : "hard";
    } else if (difficulty === "easy") {
        const len = Math.random() < 0.5 ? 3 : 4;
        const pool = (activePool || {easy: WORDS_EASY}).easy.filter(w => w.length === len);
        secret_word = pool.length ? pool[rand(pool.length)] : WORDS_EASY.filter(w=>w.length===len)[rand(WORDS_EASY.filter(w=>w.length===len).length)];
        wordLength = secret_word.length;
    } else if (difficulty === "medium") {
        const len = Math.random() < 0.5 ? 5 : 6;
        const pool = (activePool || {medium: WORDS_MEDIUM}).medium.filter(w => w.length === len);
        secret_word = pool.length ? pool[rand(pool.length)] : WORDS_MEDIUM.filter(w=>w.length===len)[rand(WORDS_MEDIUM.filter(w=>w.length===len).length)];
        wordLength = secret_word.length;
    } else {
        const pool = (activePool || {hard: WORDS_HARD}).hard.filter(w => w.length >= 7);
        secret_word = pool.length ? pool[rand(pool.length)] : WORDS_HARD.filter(w=>w.length>=7)[rand(WORDS_HARD.filter(w=>w.length>=7).length)];
        wordLength = secret_word.length;
    }

    if (difficulty === "easy") {
        diffLabel.textContent = T.diffEasy || "Лёгкий";
        diffLabel.style.color = "#4caf50";
    } else if (difficulty === "medium") {
        diffLabel.textContent = T.diffMedium || "Средний";
        diffLabel.style.color = "#f9a825";
    } else {
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
    if (titleEl) {
        titleEl.setAttribute('data-i18n', minLen);
        if (T[minLen]) titleEl.textContent = T[minLen];
    }

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

// ===== FRIEND CHALLENGE =====
const GITHUB_PAGES_GAME_URL = "https://sava3883.github.io/Lexigo/play.html";

function getChallengePageUrl() {
    const localHosts = ["localhost", "127.0.0.1", "::1"];
    const isLocalPreview = window.location.protocol === "file:"
        || localHosts.includes(window.location.hostname);
    return new URL(isLocalPreview ? GITHUB_PAGES_GAME_URL : window.location.href);
}

function readChallengeFromUrl() {
    const params = new URLSearchParams(window.location.hash.slice(1));
    if (!params.has("challenge")) return { present: false };

    const encodedValues = params.getAll("challenge");
    const langValues = params.getAll("lang");
    if (encodedValues.length !== 1 || langValues.length > 1) {
        return { present: true, invalid: true };
    }

    const lang = langValues[0] || null;
    if (langValues.length === 1 && lang !== "ru" && lang !== "ro") {
        return { present: true, invalid: true };
    }

    try {
        const encoded = encodedValues[0];
        if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(encoded)) {
            return { present: true, invalid: true, lang };
        }
        const word = decodeURIComponent(atob(encoded)).trim().toLowerCase();
        if (!word || word.length < 3) return { present: true, invalid: true, lang };
        return { present: true, word, lang };
    } catch {
        return { present: true, invalid: true, lang };
    }
}

document.getElementById("challengeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("challengeWord");
    const word = input.value.trim().toLowerCase();
    const T = TRANSLATIONS[currentLang] || TRANSLATIONS.ru;
    const sharePanel = document.getElementById("challengeShare");
    sharePanel.hidden = true;
    document.getElementById("challengeLink").value = "";

    if (word.length < 3 || !isValidWord(word)) {
        showMessage(T.challengeInvalid, "warn");
        return;
    }

    const url = getChallengePageUrl();
    const params = new URLSearchParams();
    params.set("challenge", btoa(encodeURIComponent(word)));
    params.set("lang", currentLang);
    url.hash = params.toString();

    document.getElementById("challengeLink").value = url.href;
    document.getElementById("challengeShare").hidden = false;
    showMessage(T.challengeCreated, "success");
});

document.getElementById("copyChallengeBtn").addEventListener("click", async () => {
    const T = TRANSLATIONS[currentLang] || TRANSLATIONS.ru;
    const link = document.getElementById("challengeLink").value;
    try {
        await navigator.clipboard.writeText(link);
        showMessage(T.challengeCopied, "success");
    } catch {
        showMessage(T.challengeCopyError, "warn");
    }
});

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
async function startInitialGame() {
    if (window._lexigoReady) return;
    window._lexigoReady = true;
    const challenge = readChallengeFromUrl();
    const lang = challenge.lang || localStorage.getItem('lexigo_lang') || 'ru';
    if (challenge.lang && challenge.lang !== currentLang) applyLang(challenge.lang, false);
    const dictLoading = switchWordPool(lang);
    buildKeyboard(lang);
    // Слово из ссылки друга может быть только в большом словаре — ждём его (но не дольше 5 с)
    if (challenge.present && !challenge.invalid) {
        await Promise.race([dictLoading, new Promise(r => setTimeout(r, 5000))]);
    }
    const validChallenge = challenge.present && !challenge.invalid && isValidWord(challenge.word);
    activeChallengeWord = validChallenge ? challenge.word : null;
    init(validChallenge ? challenge.word : null);
    if (validChallenge) {
        document.getElementById("friendInvite").hidden = false;
        document.body.classList.add("challenge-mode");
    }
    if (challenge.present && !validChallenge) {
        const T = TRANSLATIONS[currentLang] || TRANSLATIONS.ru;
        showMessage(T.challengeInvalid, "warn");
    }
}
document.addEventListener('lexigo-ready', startInitialGame);
// Fallback: if i18n.js never fires the event (e.g. not on game page), init after 100ms
setTimeout(startInitialGame, 80);

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
    const loading = loadBigDictionary(lang);
    if (lang === 'ro') {
        activePool = { easy: WORDS_RO_EASY, medium: WORDS_RO_MEDIUM, hard: WORDS_RO_HARD };
        activeValid = VALID_WORDS_RO;
    } else {
        activePool = { easy: WORDS_EASY, medium: WORDS_MEDIUM, hard: WORDS_HARD };
        activeValid = VALID_WORDS;
    }
    return loading;
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
const _bigPromise = {};

// Подключаем words/<lang>.js как обычный <script> — так работает и с file://, и на GitHub Pages.
// Возвращает Promise, который ВСЕГДА завершается (даже если файла нет), чтобы можно было
// дождаться словаря перед проверкой слова (например, из ссылки-вызова друга).
function loadBigDictionary(lang) {
    if (_bigPromise[lang]) return _bigPromise[lang];
    _bigLoaded[lang] = true;

    _bigPromise[lang] = new Promise((resolve) => {
        const addWords = () => {
            const list = (window.LEXIGO_WORDS || {})[lang];
            if (list) {
                const target = lang === 'ro' ? VALID_WORDS_RO : VALID_WORDS;
                for (const w of list) target.add(w);
                console.log(`Словарь ${lang}: +${list.length} слов`);
            }
            resolve();
        };

        const el = document.createElement('script');
        el.src = `words/${lang}.js`;
        el.onload = addWords;
        el.onerror = () => {
            _bigLoaded[lang] = false;
            delete _bigPromise[lang];
            console.warn(`Не найден words/${lang}.js`);
            resolve();
        };
        document.head.appendChild(el);
    });
    return _bigPromise[lang];
}
