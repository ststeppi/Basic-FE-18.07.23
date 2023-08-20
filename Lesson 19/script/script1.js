// Задача Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.

// function checkEvenOrOdd() {
//     let inputValue = prompt("Введите число:");
//     let number = parseInt(inputValue);

//     if (!isNaN(number)) {
//       if (number % 2 === 0) {
//         console.log("Да");
//       } else {
//         console.log("Нет");
//       }
//     }
//   }

//   checkEvenOrOdd();

// Задача. Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

// function findMaxNumber(num1, num2) {
//     if (num1 > num2) {
//       console.log("Наибольшее число: " + num1);
//     } else if (num2 > num1) {
//       console.log("Наибольшее число: " + num2);
//     }
//   }

//   const number1 = 10;
//   const number2 = 25;

//   findMaxNumber(number1, number2);

// Задача Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае

// function isEven(number) {
//     return number % 2 === 0;
//   }

//   const inputNumber = 12;
//   const result = isEven(inputNumber);

//   console.log("Число четное: " + result);

// Задача Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

// function createNumberArray(n) {
//     const numberArray = [];
//     for (let i = 0; i <= n; i++) {
//       numberArray.push(i);
//     }
//     return numberArray;
//   }

//   const inputNumber = 10;
//   const resultArray = createNumberArray(inputNumber);

//   console.log(resultArray);

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

// function createRangeArray(start, end) {
//     const rangeArray = [];

//     for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
//       rangeArray.push(i);
//     }

//     return rangeArray;
//   }

//   const num1 = 5;
//   const num2 = 10;
//   const resultArray = createRangeArray(num1, num2);

//   console.log(resultArray);

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

// function createReverseRangeArray(start, end) {
//     const rangeArray = [];

//     for (let i = Math.max(start, end); i >= Math.min(start, end); i--) {
//       rangeArray.push(i);
//     }

//     return rangeArray;
//   }

//   const num1 = 10;
//   const num2 = 5;
//   const resultArray = createReverseRangeArray(num1, num2);

//   console.log(resultArray);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

// const list = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < list.length; i++) {
//   sum += list[i];
// }

// console.log("Сумма чисел: " + sum);

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

// const list = [10, -20, 30, -40, 50, -60];
// let positiveSum = 0;

// for (let i = 0; i < list.length; i++) {
//   if (list[i] > 0) {
//     positiveSum += list[i];
//   }
// }

// console.log("Сумма положительных чисел: " + positiveSum);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

// const list = [10, 15, 20, 25, 30, 35];
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 2 === 0) {
//     evenSum += list[i];
//   } else {
//     oddSum += list[i];
//   }
// }

// console.log("Сумма четных чисел :" + evenSum);
// console.log("Сумма нечетных чисел :" + oddSum);

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

// function analyzeArray(arr) {
//     if (arr.length === 0) {
//       return null;
//     }

//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;

//     return {
//       min: min,
//       max: max,
//       avg: avg
//     };
//   }

//   const numbersArray = [12, 5, 8, 20, 3];
//   const analysisResult = analyzeArray(numbersArray);

//   console.log("Минимум:", analysisResult.min);
//   console.log("Максимум:", analysisResult.max);
//   console.log("Среднее:", analysisResult.avg);

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

// let sum = 0;

// for (let i = 0; i <= 50; i += 5) {
//   sum += i;
// }

// console.log("Сумма чисел кратных 5: " + sum);

// В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль

// const list = [10, 20, 30, true, 40, 50];
// let sum = 0;

// for (let i = 0; i < list.length; i++) {
//   if (typeof list[i] === "number") {
//     sum += list[i];
//   } else if (typeof list[i] === "boolean") {
//     break;
//   }
// }

// console.log("Сумма значений до первого булевого значения: " + sum);

// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар.
// Пример массива
// let arr = [
//             {
//             id: 1,
//             title: "bicycle",
//             price: 45000,
//             discount: 10
//             },
//             {
//             id: 2,
//             title: "roller-skates",
//             price: 15000,
//             discount: 5
//             },
//             {
//             id: 3,
//             title: "Kick scooter",
//             price: 10000,
//             discount: 30
//             },
//             {
//             id: 4,
//             title: "skis",
//             price: 25000,
//             discount: 20
//             },
//             {
//             id: 5,
//             title: "skate",
//             price: 10000,
//             discount: 0
//         }
//     ]

// Написать цикл, который выводит только названия товаров.
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].title);
//   }
// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i].title} (${arr[i].price})`);
//   }
// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
// for (let i = 0; i < arr.length; i++) {
//     const discountedPrice = arr[i].price * (1 - arr[i].discount / 100);
//     console.log(`${arr[i].title} (${discountedPrice})`);
//   }
// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).
// function findMostExpensiveProduct(products) {
//     let mostExpensiveProduct = products[0];

//     for (let i = 1; i < products.length; i++) {
//       if (products[i].price > mostExpensiveProduct.price) {
//         mostExpensiveProduct = products[i];
//       }
//     }

//     return mostExpensiveProduct;
//   }

//   const mostExpensive = findMostExpensiveProduct(arr);
//   console.log("Самый дорогой товар:", mostExpensive);

// Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "my menu"
// };

// for (let key in menu) {
//   if (typeof menu[key] === "number") {
//     menu[key] *= 2;
//   }
// }

// console.log(menu);

// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//       return 1;
//     } else if (num1 < num2) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }

//   const number1 = 10;
//   const number2 = 5;

//   const comparisonResult = compareNumbers(number1, number2);
//   console.log("Результат сравнения:", comparisonResult);

// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function customCalculation(num1, num2) {
//   if (num1 % 2 === 0 && num2 % 2 === 0) {
//     return num1 * num2;
//   } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//     return num1 + num2;
//   } else {
//     return num1 % 2 !== 0 ? num1 : num2;
//   }
// }

// const number1 = 4;
// const number2 = 7;

// const result = customCalculation(number1, number2);
// console.log("Результат:", result);
