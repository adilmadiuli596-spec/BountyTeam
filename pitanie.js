const translations1 = {
    ru: {
        page_title: "Питание - AI-ассистент",
        home: "Главная",
        pregnancy: "Беременность",
        care: "Уход",
        development: "Развитие",
        nutrition: "Питание",
        articles: "Статьи",
        chatbot: "Перейти в CHATBOT",
        header_title: "Питание младенцев",
        header_subtitle: "Советы по грудному вскармливанию, прикорму и питанию детей до 2 лет.",
        breastfeeding_title: "Грудное вскармливание (0-6 месяцев)",
        breastfeeding_text: "Грудное молоко — лучший источник питания для малыша. Кормите по требованию, соблюдайте правильное положение и режим.",
        complementary_title: "Прикорм (6-12 месяцев)",
        complementary_text: "Вводите прикорм постепенно: овощи, фрукты, каши. Следите за аллергическими реакциями и текстурой пищи.",
        after_year_title: "Питание после года (12-24 месяца)",
        after_year_text: "Дети начинают есть как взрослые, но пища должна быть безопасной, разнообразной и богатой полезными веществами.",
        disclaimer: "Дисклеймер: Важно! Ассистент не заменяет консультацию врача-педиатра. В экстренных случаях обращайтесь за медицинской помощью.",
        creators_title: "Создатели-Студенты Колледжа информационных технологий",
        creator1: "Дильмагамбетов Нурсултан-БКЕ-224",
        creator2: "МадиҰлы Әділ-БКЕ-224",
        creator3: "Кабыкен Жанибек-ПО-234"
    },
    en: {
        page_title: "Nutrition - AI Assistant",
        home: "Home",
        pregnancy: "Pregnancy",
        care: "Care",
        development: "Development",
        nutrition: "Nutrition",
        articles: "Articles",
        chatbot: "Go to CHATBOT",
        header_title: "Infant Nutrition",
        header_subtitle: "Tips on breastfeeding, complementary feeding, and nutrition for children up to 2 years.",
        breastfeeding_title: "Breastfeeding (0-6 months)",
        breastfeeding_text: "Breast milk is the best source of nutrition for the baby. Feed on demand, follow proper positioning and schedule.",
        complementary_title: "Complementary Feeding (6-12 months)",
        complementary_text: "Introduce complementary foods gradually: vegetables, fruits, cereals. Monitor for allergies and texture.",
        after_year_title: "Nutrition After 1 Year (12-24 months)",
        after_year_text: "Children start eating like adults, but food should be safe, varied and rich in nutrients.",
        disclaimer: "Disclaimer: AI assistant does not replace a pediatrician consultation. Seek medical help in emergencies.",
        creators_title: "Creators - Students of College of Information Technologies",
        creator1: "Dilmagambetov Nursultan-BKE-224",
        creator2: "Madiuly Adil-BKE-224",
        creator3: "Kabyken Zhanibek-PO-234"
    },
    kaz: {
        page_title: "Тамақтану - AI көмекші",
        home: "Басты бет",
        pregnancy: "Жүктілік",
        care: "Күтім",
        development: "Даму",
        nutrition: "Тамақтану",
        articles: "Мақалалар",
        chatbot: "CHATBOT-қа өту",
        header_title: "Сәбилерді тамақтандыру",
        header_subtitle: "Емшек сүтімен тамақтандыру, қосымша тамақ және 2 жасқа дейінгі балалардың тамақтануы туралы кеңестер.",
        breastfeeding_title: "Емшек сүтімен тамақтандыру (0-6 ай)",
        breastfeeding_text: "Емшек сүті — нәресте үшін ең жақсы тамақ көзі. Сұраныс бойынша тамақтандыру, дұрыс қалып және режимді сақтау.",
        complementary_title: "Қосымша тамақ (6-12 ай)",
        complementary_text: "Қосымша тамақты біртіндеп енгізіңіз: көкөністер, жемістер, ботқалар. Аллергиялық реакциялар мен текстураға назар аударыңыз.",
        after_year_title: "1 жастан кейінгі тамақтану (12-24 ай)",
        after_year_text: "Балалар ересектер сияқты тамақтана бастайды, бірақ тамақ қауіпсіз, әртүрлі және пайдалы заттарға бай болуы керек.",
        disclaimer: "Ескерту: AI көмекші педиатр дәрігердің кеңесін алмастыра алмайды. Төтенше жағдайда медициналық көмекке жүгініңіз.",
        creators_title: "Жасалғандар - Ақпараттық технологиялар колледжінің студенттері",
        creator1: "Дильмагамбетов Нурсултан-БКЕ-224",
        creator2: "МадиҰлы Әділ-БКЕ-224",
        creator3: "Қабыкен Жанибек-ПО-234"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations1[lang] && translations1[lang][key] !== undefined) {
            el.textContent = translations1[lang][key];
        }
    });
    if (translations1[lang] && translations1[lang]["page_title"]) {
        document.title = translations1[lang]["page_title"];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ruBtn = document.getElementById("ru");
    const enBtn = document.getElementById("en");
    const kazBtn = document.getElementById("kaz");

    if (!ruBtn || !enBtn || !kazBtn) {
        console.error("Кнопки переключения языка не найдены!");
        return;
    }

    ruBtn.addEventListener("click", () => setLanguage("ru"));
    enBtn.addEventListener("click", () => setLanguage("en"));
    kazBtn.addEventListener("click", () => setLanguage("kaz"));
});
console.log(ru)