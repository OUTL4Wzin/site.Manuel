document.addEventListener("DOMContentLoaded", () => {

    const selector = document.getElementById("language-selector");

    function setLanguage(lang) {

        localStorage.setItem("language", lang);

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (translations[lang]?.[key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    const savedLanguage =
        localStorage.getItem("language") ||
        (navigator.language.startsWith("pt") ? "pt" : "en");

    selector.value = savedLanguage;

    setLanguage(savedLanguage);

    selector.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });
});