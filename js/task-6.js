// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Знаходимо елементи інтерфейсу
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Функція для створення колекції div елементів
function createBoxes(amount) {
  // Очищаємо попередні елементи
  boxesContainer.innerHTML = "";
  // Початковий розмір для першого елемента
  let size = 30;

  // Масив для зберігання нових div елементів
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10; // Збільшення розміру для наступного елемента
    elements.push(box); // Додаємо елемент до масиву
  }

  // Додаємо всі елементи в DOM за одну операцію
  boxesContainer.append(...elements);
}

// Функція для очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Обробник події для кнопки Create
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  // Перевірка значення на коректність (від 1 до 100)
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100");
  }

  // Очищуємо значення інпуту після створення колекції
  input.value = "";
});

// Обробник події для кнопки Destroy
destroyButton.addEventListener("click", destroyBoxes);
