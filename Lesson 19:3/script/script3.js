// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”
// const button = document.getElementById("myButton");

// button.addEventListener("click", () => {
//     console.log("Hello world");-
// });

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно.
// const counterElement = document.getElementById("counter");
// const incrementButton = document.getElementById("myButton");

// let counterValue = 0;

// incrementButton.addEventListener("click", () => {
//     counterValue++;
//     counterElement.textContent = counterValue;
// });

// Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет , а при покидании поменять обратно на белый (все шаги  сделать с помощью JS).

// const squareDiv = document.getElementById("squareDiv");

// squareDiv.style.width = "200px";
// squareDiv.style.height = "200px";
// squareDiv.style.border = "2px solid black";

// squareDiv.addEventListener("mouseenter", () => {
//   const userColor = prompt(
//     "Введите цвет ('red'):"
//   );
//   squareDiv.style.backgroundColor = userColor;
// });

// squareDiv.addEventListener("mouseleave", () => {
//     squareDiv.style.backgroundColor = "white";
// })

// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.
// Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.
// Задание3: Попробовать так же изменить значение параграфа

const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue--;
  counterElement.textContent = counterValue;
  console.log("Minus");
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  counterElement.textContent = counterValue;
  console.log("Plus");
});
