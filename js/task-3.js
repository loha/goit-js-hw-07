// Знаходимо необхідні елементи
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо обробник події input
nameInput.addEventListener("input", () => {
  // Отримуємо значення з інпуту і обрізаємо пробіли
  const trimmedValue = nameInput.value.trim();

  // Якщо trimmedValue не порожнє, підставляємо його у span
  nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
