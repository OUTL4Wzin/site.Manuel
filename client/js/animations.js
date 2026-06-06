const helpButton = document.getElementById("helpButton");
const helpModal = document.getElementById("helpModal");
const closeHelp = document.getElementById("closeHelp");

helpButton.addEventListener("click", () => {
    helpModal.classList.add("active");
});

closeHelp.addEventListener("click", () => {
    helpModal.classList.remove("active");
});

helpModal.addEventListener("click", (e) => {
    if (e.target === helpModal) {
        helpModal.classList.remove("active");
    }
});
