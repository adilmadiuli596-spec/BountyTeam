const translations2 = {
    ru: {
        page_title: "Уход за ребёнком - AI-ассистент",
        home: "Главная",
        pregnancy: "Беременность",
        care: "Уход",
        development: "Развитие",
        nutrition: "Питание",
        articles: "Статьи",
        chatbot: "Перейти в CHATBOT",
        header_title: "Уход за ребёнком",
        header_subtitle: "Полезные советы и рекомендации для заботы о малыше: сон, кормление, гигиена и безопасность.",
        sleep_title: "Сон",
        sleep_text: "Создайте спокойную атмосферу: тёмная комната, тихие звуки, комфортная температура. Составьте режим сна для малыша, чтобы он засыпал и просыпался регулярно.",
        feeding_title: "Кормление",
        feeding_text: "Грудное вскармливание или смесь — главное регулярность и комфорт малыша. Следите за правильным положением и соблюдением интервалов между кормлениями.",
        hygiene_title: "Гигиена",
        hygiene_text: "Регулярная смена подгузников, купание, уход за пупком и полостью рта. Используйте мягкие и безопасные средства для малышей.",
        safety_title: "Безопасность",
        safety_text: "Следите за безопасностью дома: убрать мелкие предметы, использовать защитные накладки, держать лекарства и химические средства вне доступа детей.",
        disclaimer: "Дисклеймер: Важно! Ассистент не заменяет консультацию врача-педиатра. В экстренных случаях обращайтесь за медицинской помощью.",
        creators_title: "Создатели-Студенты Колледжа информационных технологий",
        creator1: "Дильмагамбетов Нурсултан-БКЕ-224",
        creator2: "МадиҰлы Әділ-БКЕ-224",
        creator3: "Кабыкен Жанибек-ПО-234"
    },
    en: {
        page_title: "Child Care - AI Assistant",
        home: "Home",
        pregnancy: "Pregnancy",
        care: "Care",
        development: "Development",
        nutrition: "Nutrition",
        articles: "Articles",
        chatbot: "Go to CHATBOT",
        header_title: "Child Care",
        header_subtitle: "Useful tips and recommendations for taking care of your baby: sleep, feeding, hygiene, and safety.",
        sleep_title: "Sleep",
        sleep_text: "Create a calm environment: dark room, quiet sounds, comfortable temperature. Set a sleep schedule for your baby to sleep and wake regularly.",
        feeding_title: "Feeding",
        feeding_text: "Breastfeeding or formula — the main thing is regularity and baby's comfort. Watch for proper positioning and feeding intervals.",
        hygiene_title: "Hygiene",
        hygiene_text: "Regular diaper changes, bathing, care of the belly button and oral cavity. Use soft and safe products for babies.",
        safety_title: "Safety",
        safety_text: "Ensure home safety: remove small objects, use protective covers, keep medicines and chemicals out of reach of children.",
        disclaimer: "Disclaimer: AI assistant does not replace a pediatrician consultation. Seek medical help in emergencies.",
        creators_title: "Creators - Students of College of Information Technologies",
        creator1: "Dilmagambetov Nursultan-BKE-224",
        creator2: "Madiuly Adil-BKE-224",
        creator3: "Kabyken Zhanibek-PO-234"
    },
    kaz: {
        page_title: "Бала күтімі - AI көмекші",
        home: "Басты бет",
        pregnancy: "Жүктілік",
        care: "Күтім",
        development: "Даму",
        nutrition: "Тамақтану",
        articles: "Мақалалар",
        chatbot: "CHATBOT-қа өту",
        header_title: "Бала күтімі",
        header_subtitle: "Балаға күтім жасау үшін пайдалы кеңестер: ұйқы, тамақтандыру, гигиена және қауіпсіздік.",
        sleep_title: "Ұйқы",
        sleep_text: "Тыныш орта жасаңыз: қараңғы бөлме, тыныш дыбыстар, ыңғайлы температура. Балаңыздың ұйқы кестесін құрыңыз.",
        feeding_title: "Тамақтандыру",
        feeding_text: "Сүт немесе қоспа — бастысы балаңыздың ыңғайлығы мен тұрақтылығы. Дұрыс қалып пен тамақтандыру аралығын қадағалаңыз.",
        hygiene_title: "Гигиена",
        hygiene_text: "Подгузник ауыстыру, шомылдыру, пупок пен ауыз күтімі. Балаға арналған жұмсақ және қауіпсіз құралдарды пайдаланыңыз.",
        safety_title: "Қауіпсіздік",
        safety_text: "Үйде қауіпсіздікке назар аударыңыз: кішкентай заттарды алыңыз, қорғаныс жабдықтарын пайдаланыңыз, дәрі-дәрмектерді балалардың қол жетімінен алыста ұстаңыз.",
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
        if (translations2[lang] && translations2[lang][key] !== undefined) {
            el.textContent = translations2[lang][key];
        }
    });
    document.title = translations2[lang]["page_title"];
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ru").addEventListener("click", () => setLanguage("ru"));
    document.getElementById("en").addEventListener("click", () => setLanguage("en"));
    document.getElementById("kaz").addEventListener("click", () => setLanguage("kaz"));
});
