const button = document.querySelector(".btn");
const content = document.querySelector(".content");

function revealContent () {
    if(content.classList.contains("reveal-content")) {
        content.classList.remove("reveal-content");
        button.innerText = "Reveal content..."
    } else {
        content.classList.add("reveal-content");
        button.innerText = "hide content";
    }
};

button.addEventListener("click", revealContent);