// Данные с цитатами
const quotes = [
    { text: "Жизнь - это то, что с тобой происходит, пока ты строишь другие планы.", author: "Джон Леннон", category: "жизнь" },
    { text: "Единственный способ делать великие дела - любить то, что ты делаешь.", author: "Стив Джобс", category: "успех" },
    { text: "Будьте изменением, которое вы хотите видеть в мире.", author: "Махатма Ганди", category: "мудрость" },
    { text: "Любовь - это не то, что вы найдете. Любовь - это то, что находит вас.", author: "Лорейн Хант", category: "любовь" },
    { text: "Успех - это не окончательный, неудача - не фатальна: значение имеет лишь мужество продолжать.", author: "Уинстон Черчилль", category: "успех" },
    { text: "Единственная настоящая ошибка - это ошибка, из которой мы ничему не учимся.", author: "Генри Форд", category: "мудрость" },
    { text: "Ваше время ограничено, не тратьте его, живя чужой жизнью.", author: "Стив Джобс", category: "мотивация" },
    { text: "Любовь состоит из одной души, населяющей два тела.", author: "Аристотель", category: "любовь" },
    { text: "Будущее принадлежит тем, кто верит в красоту своей мечты.", author: "Элеонора Рузвельт", category: "мотивация" },
    { text: "Жизнь — это путешествие, которое нужно пройти, как бы ни были плохи дороги и жильё.", author: "Оливер Голдсмит", category: "жизнь" },
    { text: "Любовь - это цветок, которому нужно позволить расти.", author: "Джон Леннон", category: "любовь" },
    { text: "Успех обычно приходит к тем, кто слишком занят, чтобы его искать.", author: "Генри Дэвид Торо", category: "успех" },
    { text: "Мудрость начинается с удивления.", author: "Сократ", category: "мудрость" },
    { text: "Единственный предел нашей реализации завтрашнего дня - это наши сомнения сегодня.", author: "Франклин Рузвельт", category: "мотивация" },
    { text: "Жизнь - это то, что происходит, когда вы заняты составлением других планов.", author: "Аллен Сондерс", category: "жизнь" },
    { text: "Любовь - это вечность, видящая себя в зеркале.", author: "Халиль Джебран", category: "любовь" },
    { text: "Успех - это идти от неудачи к неудаче без потери энтузиазма.", author: "Уинстон Черчилль", category: "успех" },
    { text: "Знание говорит, мудрость слушает.", author: "Джими Хендрикс", category: "мудрость" },
    { text: "Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать.", author: "Джим Рюн", category: "мотивация" },
    { text: "Жизнь - это не проблема, которую нужно решить, а реальность, которую нужно испытать.", author: "Сёрен Кьеркегор", category: "жизнь" },
    { text: "Любовь - это дружба, пойманная огнем.", author: "Бенджамин Франклин", category: "любовь" },
    { text: "Успех не в том, что у тебя есть, а в том, кто ты есть.", author: "Бo Беннет", category: "успех" },
    { text: "Мудрость - это дочь опыта.", author: "Леонардо да Винчи", category: "мудрость" },
    { text: "Единственный способ сделать великую работу - любить то, что ты делаешь.", author: "Стив Джобс", category: "мотивация" },
    { text: "Жизнь действительно проста, но мы настаиваем на том, чтобы усложнять ее.", author: "Конфуций", category: "жизнь" },
    { text: "Любовь - это активная сила в человеке.", author: "Эрих Фромм", category: "любовь" },
    { text: "Успех - это сумма небольших усилий, повторяемых изо дня в день.", author: "Роберт Кольер", category: "успех" },
    { text: "Мудрость приходит с годами, но иногда годы приходят одни.", author: "Народная мудрость", category: "мудрость" },
    { text: "Мотивация - это искусство заставлять людей делать то, что вы хотите, чтобы они делали, потому что они хотят это делать.", author: "Дуайт Эйзенхауэр", category: "мотивация" },
    { text: "Жизнь - это 10% того, что происходит со мной, и 90% того, как я на это реагирую.", author: "Чарльз Свиндолл", category: "жизнь" },
    { text: "Любовь - это не то, что мы чувствуем, а то, что мы делаем.", author: "М. Скотт Пек", category: "любовь" },
    { text: "Успех - это не ключ к счастью. Счастье - это ключ к успеху.", author: "Альберт Швейцер", category: "успех" },
    { text: "Мудрый человек учится на ошибках других, а глупый - на своих.", author: "Народная мудрость", category: "мудрость" },
    { text: "Мотивация - это топливо для достижения целей.", author: "Зиг Зиглар", category: "мотивация" },
    { text: "Жизнь - это то, что мы делаем из нее.", author: "Элеонора Рузвельт", category: "жизнь" },
    { text: "Любовь - это единственная сила, способная превратить врага в друга.", author: "Мартин Лютер Кинг", category: "любовь" },
    { text: "Успех - это лестница, на которую не взобраться, держа руки в карманах.", author: "Зиг Зиглар", category: "успех" },
    { text: "Мудрость - это знать, что делать; умение - знать, как это сделать; добродетель - делать это.", author: "Дэвид Стар Джордан", category: "мудрость" },
    { text: "Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать.", author: "Джим Рюн", category: "мотивация" },
    { text: "Жизнь - это не ожидание, что буря утихнет, а обучение танцу под дождем.", author: "Вивиан Грин", category: "жизнь" },
    { text: "Любовь - это вечный символ того, что человек не должен быть одинок.", author: "Пол Тиллич", category: "любовь" },
    { text: "Успех - это не окончательный, неудача - не фатальна: значение имеет лишь мужество продолжать.", author: "Уинстон Черчилль", category: "успех" },
    { text: "Мудрость - это дочь опыта.", author: "Леонардо да Винчи", category: "мудрость" },
    { text: "Мотивация приходит от работы над вещами, которые нам важны.", author: "Шерил Сэндберг", category: "мотивация" },
    { text: "Жизнь - это то, что происходит, когда вы заняты составлением других планов.", author: "Джон Леннон", category: "жизнь" },
    { text: "Любовь - это не то, что вы найдете. Любовь - это то, что находит вас.", author: "Лорейн Хант", category: "любовь" },
    { text: "Успех - это идти от неудачи к неудаче без потери энтузиазма.", author: "Уинстон Черчилль", category: "успех" },
    { text: "Мудрость начинается в удивления.", author: "Сократ", category: "мудрость" },
    { text: "Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать.", author: "Джим Рюн", category: "мотивация" },
    { text: "Жизнь — это путешествие, которое нужно совершить, независимо от того, насколько плохи дороги и условия проживания.", author: "Оливер Голдсмит", category: "жизнь" }
];

// Отображение цитат
function displayQuotes(category) {
    const container = document.getElementById('quotes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredQuotes = category === 'all' 
        ? quotes 
        : quotes.filter(quote => quote.category === category);
    
    filteredQuotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote-card';
        quoteElement.innerHTML = `
            <div class="quote-text">"${quote.text}"</div>
            <div class="quote-author">— ${quote.author}</div>
            <span class="quote-category">${quote.category}</span>
        `;
        container.appendChild(quoteElement);
    });
}

// Фильтрация цитат по категориям
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (categoryButtons.length === 0) return;
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убрать активный класс у всех кнопок
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Добавить активный класс к текущей кнопке
            button.classList.add('active');
            
            // Отфильтровать цитаты
            const category = button.getAttribute('data-category');
            displayQuotes(category);
        });
    });
}

// Обработка формы
function setupQuoteForm() {
    const form = document.getElementById('quote-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const quoteText = document.getElementById('quote-text').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        
        // Добавление новой цитаты
        quotes.push({
            text: quoteText,
            author: author,
            category: category
        });
        
        // Очистка формы
        form.reset();
        
        // Показать сообщение об успехе
        alert('Спасибо! Ваша цитата была отправлена на модерацию.');
        
        // Обновить статистику
        updateStats();
        
        // Сохранить в localStorage
        saveQuotesToLocalStorage();
    });
}

// Обновление статистики
function updateStats() {
    const totalQuotesElement = document.getElementById('total-quotes');
    const totalCategoriesElement = document.getElementById('total-categories');
    
    if (totalQuotesElement) {
        totalQuotesElement.textContent = quotes.length;
    }
    
    if (totalCategoriesElement) {
        // Подсчет уникальных категорий
        const categories = new Set(quotes.map(quote => quote.category));
        totalCategoriesElement.textContent = categories.size;
    }
}

// Сохранение цитат в localStorage
function saveQuotesToLocalStorage() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Загрузка цитат из localStorage
function loadQuotesFromLocalStorage() {
    const savedQuotes = localStorage.getItem('quotes');
    if (savedQuotes) {
        const parsedQuotes = JSON.parse(savedQuotes);
        quotes.length = 0; // Очищаем текущий массив
        quotes.push(...parsedQuotes); // Добавляем загруженные цитаты
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Загружаем цитаты из localStorage
    loadQuotesFromLocalStorage();
    
    // Настройка для страницы с цитатами
    if (document.getElementById('quotes-container')) {
        displayQuotes('all');
        setupCategoryFilters();
    }
    
    // Настройка для формы
    setupQuoteForm();
    
    // Обновление статистики
    updateStats();
});
