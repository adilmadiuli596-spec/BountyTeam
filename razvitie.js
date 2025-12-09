const translations1 = {
    ru: {
        nav_main: "Главная",
        nav_ber: "Беременность",
        nav_uhod: "Уход",
        nav_raz: "Развитие",
        nav_pit: "Питание",
        nav_art: "Статьи",
        go_chat: "Перейти в CHATBOT",

        dev_title: "Развитие ребёнка",
        dev_sub: "Все ключевые этапы развития малыша с 0 до 2 лет: двигательные навыки, речь, социальные умения и игры для стимуляции.",

        block1_title: "0–6 месяцев",
        block1_text: "Ребёнок учится держать голову, реагирует на звуки и лица, улыбается. Важно много общаться и создавать безопасную среду.",

        block2_title: "6–12 месяцев",
        block2_text: "Начало ползания, первые слова, изучение предметов руками и ртом. Игры для развития моторики и речи очень полезны.",

        block3_title: "12–24 месяца",
        block3_text: "Ребёнок ходит, говорит простые фразы, начинает проявлять самостоятельность. Важно поддерживать обучение через игры, книги и общение.",

        footer_warn: "Дисклеймер: Важно! Ассистент не заменяет консультацию врача-педиатра. В экстренных случаях обращайтесь за медицинской помощью.",
        footer_team: "Создатели — студенты Колледжа информационных технологий"
    },

    kaz: {
        nav_main: "Басты бет",
        nav_ber: "Жүктілік",
        nav_uhod: "Күтім",
        nav_raz: "Даму",
        nav_pit: "Тамақтану",
        nav_art: "Мақалалар",
        go_chat: "CHATBOT-қа өту",

        dev_title: "Бала дамуы",
        dev_sub: "0-ден 2 жасқа дейінгі баланың негізгі даму кезеңдері: моторика, сөйлеу, әлеуметтік дағдылар және ойындар.",

        block1_title: "0–6 ай",
        block1_text: "Бала басын ұстауды үйренеді, дыбыстар мен беттерге реакция береді, күледі. Қауіпсіз орта мен қарым-қатынас маңызды.",

        block2_title: "6–12 ай",
        block2_text: "Жорғалау басталады, алғашқы сөздер айтылады, заттарды қолмен зерттейді. Моторика мен сөйлеуді дамыту ойындары пайдалы.",

        block3_title: "12–24 ай",
        block3_text: "Бала жүре бастайды, қарапайым сөз тіркестерін айтады, тәуелсіздік танытады. Ойындар мен кітаптар арқылы оқыту маңызды.",

        footer_warn: "Маңызды! Ассистент педиатр кеңесін алмастырмайды. Дәрігерге жүгінуді ұмытпаңыз.",
        footer_team: "Жобаны жасаған — Ақпараттық технологиялар колледжінің студенттері"
    },

    en: {
        nav_main: "Home",
        nav_ber: "Pregnancy",
        nav_uhod: "Care",
        nav_raz: "Development",
        nav_pit: "Nutrition",
        nav_art: "Articles",
        go_chat: "Go to CHATBOT",

        dev_title: "Child Development",
        dev_sub: "All key developmental stages from 0 to 2 years: motor skills, speech, social abilities, and stimulating games.",

        block1_title: "0–6 months",
        block1_text: "The baby learns to hold their head, reacts to sounds and faces, and smiles. Communication and safety are essential.",

        block2_title: "6–12 months",
        block2_text: "Crawling begins, first words appear, and objects are explored by hands and mouth. Motor and speech games help a lot.",

        block3_title: "12–24 months",
        block3_text: "The child walks, says simple phrases, and becomes more independent. Learning through games and communication is important.",

        footer_warn: "Disclaimer: Important! This assistant does not replace a pediatric consultation. In emergencies, contact a doctor.",
        footer_team: "Created by students of the College of Information Technologies"
    }
};



let currentLang = localStorage.getItem("lang") || "ru";

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
        const key = el.getAttribute("data-key");

        if (translations1[lang][key]) {
            el.textContent = translations1[lang][key];
        }
    });
}

document.getElementById("ru").addEventListener("click", () => updateLanguage("ru"));
document.getElementById("kaz").addEventListener("click", () => updateLanguage("kaz"));
document.getElementById("en").addEventListener("click", () => updateLanguage("en"));

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);
});
