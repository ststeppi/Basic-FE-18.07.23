// Написать скрипт, который находит параграфы, которые находятся внутри div-ов и первым 2 параграфам текст меняет на указанные пользователем значения.

// const divs = document.querySelectorAll('div');

// for (let div of divs) {
//   const paragraphs = div.querySelectorAll('p');
//   if (paragraphs.length >= 2) {
//     paragraphs[0].textContent = 'Новый текст для первого параграфа';
//     paragraphs[1].textContent = 'Новый текст для второго параграфа';
//   }
// }

// Написать скрипт, который находит параграфы с классом 'p1' и выводит (console) общее содержимое параграфов.

// const p1Paragraphs = document.querySelectorAll(".p1");
// let totalContent = "";

// for (let p of p1Paragraphs) {
//   totalContent += p.textContent + " ";
// }

// console.log('Общее содержимое параграфов с классом "p1":', totalContent);

// Написать скрипт, который находит параграфы и последним 2 четным параграфам меняет текст на указанные пользователем значения.

// const paragraphs = document.querySelectorAll('p');
// const evenParagraphs = [];

// for (let i = 0; i < paragraphs.length; i++) {
//   if (i % 2 === 0) {
//     evenParagraphs.push(paragraphs[i]);
//   }
// }

// if (evenParagraphs.length >= 2) {
//   evenParagraphs[evenParagraphs.length - 1].textContent = 'Новый текст для предпоследнего четного параграфа';
//   evenParagraphs[evenParagraphs.length - 2].textContent = 'Новый текст для последнего четного параграфа';
// }

// Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6.

// const paragraphs = document.querySelectorAll('p');

// for (let i = 2; i <= 5; i++) {
//   console.log(paragraphs[i].textContent);
// }
