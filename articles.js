const translations1 = {
    ru: {
        nav_main: "Главная",
        nav_ber: "Беременность",
        nav_uhod: "Уход",
        nav_raz: "Развитие",
        nav_pit: "Питание",
        nav_art: "Статьи",
        go_chat: "Перейти в CHATBOT",

        art_title: "Статьи",
        art_sub: "Полезные статьи и советы для молодых родителей по беременности, уходу, развитию и питанию детей.",
        popular_articles: "Популярные статьи",

        art1_title: "Как наладить режим сна малыша",
        art1_desc: "Советы по созданию правильного режима сна для младенцев и маленьких детей.",

        art2_title: "Прикорм: когда и как вводить",
        art2_desc: "Рекомендации по безопасному введению прикорма и правильному питанию ребёнка.",

        art3_title: "Развитие речи у детей",
        art3_desc: "Как помочь ребёнку начать говорить и развивать словарный запас с раннего возраста.",

        art_read: "Читать далее",

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

        art_title: "Мақалалар",
        art_sub: "Жас ата-аналарға арналған пайдалы кеңестер мен мақалалар.",
        popular_articles: "Танымал мақалалар",

        art1_title: "Бала ұйқысының режимін қалыптастыру",
        art1_desc: "Сәбидің дұрыс ұйқы режимін құруға арналған кеңестер.",

        art2_title: "Қосымша тамақ: қашан және қалай енгізу",
        art2_desc: "Қосымша тамақты қауіпсіз енгізу бойынша ұсыныстар.",

        art3_title: "Балаларда сөйлеуді дамыту",
        art3_desc: "Баланың алғашқы сөздерін дамытуға көмектесетін кеңестер.",

        art_read: "Толық оқу",

        footer_warn: "Маңызды! Ассистент педиатр кеңесін алмастырмайды. Қажет болса, дәрігерге жүгініңіз.",
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

        art_title: "Articles",
        art_sub: "Useful articles and tips for young parents about pregnancy, care, development and nutrition.",
        popular_articles: "Popular articles",

        art1_title: "How to establish a baby's sleep routine",
        art1_desc: "Tips to create a healthy sleep schedule for infants and young children.",

        art2_title: "Solid foods: when and how to introduce",
        art2_desc: "Recommendations for safely starting complementary feeding.",

        art3_title: "Speech development in children",
        art3_desc: "How to help your child start speaking and expand vocabulary early.",

        art_read: "Read more",

        footer_warn: "Disclaimer: This assistant does not replace consultation with a pediatrician.",
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
