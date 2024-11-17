// Функція для генерації випадкового HEX-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо потрібні елементи
const body = document.body;
const colorDisplay = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

// Обробник події для кнопки зміни кольору
changeColorButton.addEventListener("click", () => {
  // Генеруємо випадковий колір
  const newColor = getRandomHexColor();

  // Змінюємо колір фону body
  body.style.backgroundColor = newColor;

  // Відображаємо значення кольору у span.color
  colorDisplay.textContent = newColor;
});
