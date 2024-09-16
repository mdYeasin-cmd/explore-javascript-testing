export function renderTitle() {
    const titleContainer = document.getElementById("title") || document.createElement("div");
    const titleElement = document.createElement("p");
    titleElement.textContent = "Testing The DOM with Vitest";
    titleContainer.appendChild(titleElement);
};

renderTitle();