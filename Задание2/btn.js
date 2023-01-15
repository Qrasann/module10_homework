const button = document.querySelector("button");
const width = window.screen.width;
const height = window.screen.height;

button.addEventListener("click", () => {
  alert(`Ширина Вашего экрана:${width}px. Высота Вашего экрана: ${height}px`);
});
