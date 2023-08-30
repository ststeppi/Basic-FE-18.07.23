// Допишите функцию таким образом, чтобы генерируемое значение находилось в диапазоне от 40 до 80:

// изменяет размер объекта
// function changeobjectsize() {
//   const size = 40 + Math.random() * 80;
//   object.style.width = ${size}px;
// }

function changeobjectsize() {
  let size = 40 + Math.random() * (80 - 40);
  object.style.width = size + "px";
}
