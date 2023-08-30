// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// Високосный год.
// Год, номер которого кратен 400, — високосный;
// Остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// Остальные годы, номер которых кратен 4, — високосные [5].
// Все остальные годы — невисокосные.
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true; // Високосный год
//   } else {
//     return false; // Невисокосный год
//   }
// }

// const yearToCheck = 2024;
// const isLeap = isLeapYear(yearToCheck);

// if (isLeap) {
//   console.log(yearToCheck + " - високосный год");
// } else {
//   console.log(yearToCheck + " - невисокосный год");
// }

// Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

// const numbers = [1, 2, 3, 4, 5];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
// let array = [1, "", 2, 3, "", 5];

// let filteredArray = array.filter((item) => item !== "");

// console.log(filteredArray);

// Дан массив. Удалите из него каждый пятый элемент.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = array.length - 1; i >= 0; i--) {
//   if ((i + 1) % 5 === 0) {
//     array.splice(i, 1);
//   }
// }

// console.log(array);

// Дан следующий объект:
// let obj = {
// 1: {
//     1: 11,
//     2: 12,
//     3: 13,
// },
// 2: {
//     1: 21,
//     2: 22,
//     3: 23,
// },
// 3: {
//     1: 24,
//     2: 25,
//     3: 26,
// },
// }
// Найдите сумму элементов этого объекта.

// let sum = 0;

// for (let key in obj) {
//   for (let innerKey in obj[key]) {
//     sum += obj[key][innerKey];
//   }
// }

// console.log("Сумма элементов объекта:", sum);

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// let numbers = [10, 7, 20, 28, -33, 35, 40, 92, 77];
// let filteredNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 5 === 0) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// function secondsToDays(seconds) {
//   let secondsInDay = 24 * 60 * 60;
//   let days = Math.floor(seconds / secondsInDay);
//   return days;
// }

// let totalSeconds = 172800;
// let days = secondsToDays(totalSeconds);
// console.log("Количество суток:", days);

// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр

// function sumOfDigits(number) {
//   let sum = 0;
//   let digits = String(number).split("");

//   for (let digit of digits) {
//     sum += parseInt(digit);
//   }

//   return sum;
// }

// let num = 12345;
// let result = sumOfDigits(num);
// console.log("Сумма цифр:", result);

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const num = 17;
// if (isPrime(num)) {
//   console.log(num + " - простое число");
// } else {
//   console.log(num + " - не простое число");
// }

// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

// let numberParagraph = document.getElementById('number');
// let squareButton = document.getElementById('squareButton');

// squareButton.addEventListener('click', function() {
//   let number = parseInt(numberParagraph.textContent);
//   let squaredNumber = number * number;
//   numberParagraph.textContent = squaredNumber;
// });

// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

// let numberParagraphs = document.querySelectorAll(".number");
// let sumParagraph = document.getElementById("sum");
// let calculateSumButton = document.getElementById("calculateSumButton");

// calculateSumButton.addEventListener("click", function () {
//   let sum = 0;
//   numberParagraphs.forEach((paragraph) => {
//     let number = parseInt(paragraph.textContent);
//     sum += number;
//   });
//   sumParagraph.textContent = "" + sum;
// });

// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

// let sumParagraph = document.getElementById('sum');
// let calculateSumButton = document.getElementById('calculateSumButton');

// calculateSumButton.addEventListener('click', function() {
//   let sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     sum += i;
//   }
//   sumParagraph.textContent = ' ' + sum;
// });

// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

// let countParagraphsButton = document.getElementById('countParagraphsButton');
// let paragraphCountSpan = document.getElementById('paragraphCount');
// let paragraphs = document.querySelectorAll('p');

// countParagraphsButton.addEventListener('click', function() {
//   paragraphCountSpan.textContent = paragraphs.length;
// });

// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

// let fillParagraphsButton = document.getElementById('fillParagraphsButton');
// let paragraphs = document.querySelectorAll('p');

// fillParagraphsButton.addEventListener('click', function() {
//   paragraphs.forEach((paragraph, index) => {
//     paragraph.textContent = index + 1;
//   });
// });

// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

// let getHrefsButton = document.getElementById("getHrefsButton");
// let links = document.querySelectorAll("a");

// getHrefsButton.addEventListener("click", function () {
//   let hrefs = Array.from(links).map((link) => link.getAttribute("href"));
//   console.log(hrefs);
// });

// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

// let link = document.getElementById("link");
// let paragraph = document.getElementById("paragraph");
// let writeHrefButton = document.getElementById("writeHrefButton");

// writeHrefButton.addEventListener("click", function () {
//   paragraph.textContent = link.getAttribute("href");
// });

// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

// let box = document.getElementById("box");
// let increaseSizeButton = document.getElementById("increaseSizeButton");

// increaseSizeButton.addEventListener("click", function () {
//   let currentWidth = parseFloat(getComputedStyle(box).width);
//   let currentHeight = parseFloat(getComputedStyle(box).height);

//   box.style.width = currentWidth * 2 + "px";
//   box.style.height = currentHeight * 2 + "px";
// });

// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.

// let links = document.querySelectorAll("a");

// links.forEach((link) => {
//   link.addEventListener("mouseover", function () {
//     let hrefValue = link.getAttribute("href");
//     link.textContent = hrefValue;
//   });

//   link.addEventListener("mouseout", function () {
//     let originalText = link.textContent;
//     link.textContent = originalText.slice(0, 7);
//   });
// });
