"use strict";

// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.

// const object = {
//     day1: "monday",
//     day2: "tuesday",
//     day3: "Wednesday",
//     day4: "Thursday",
//     day5: "friday",
//     day6: "Saturday",
//     day7: "Sunday",
// }
// const key = 'day5';
// console.log(object.day1);
// console.log(object['day1']);
// console.log(object[key]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.

// const user = {
//   name: "Дмитрий",
//   surname: "Гундоров",
//   age: 37,
//   middlename: prompt("Введи свое отчество"),
// };
// console.log(
//   `${user.surname} ${user.name} ${user.middlename} "Возраст: " ${user.age} 'лет'`
// );

// 4. Удалите свойство surname.

// console.log(user);
// delete user.surname;
// console.log(user);

// Тайминг: 20 минут.

// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`

// const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const weekNum = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.

// const weekNumLog = {};
// for (let i = 0; i < week.length; i++) {
//   const value = week[i];
//   const key = weekNum[i];
//   weekNumLog[key] = value;
// }
// console.log(weekNumLog);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// const testObj = { x: 1, y: 2, z: 3 };
// for (const key in testObj) {
//   testObj[key] **= 2;
// }
// console.log(testObj);

// Тайминг: 25 минут.

// Задание 3:
// Найдите сумму всех чисел, приведенного объекта.
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// let summ = 0;
// // console.log(obj.key1, obj.key2, obj.key3);
// for (const key in obj) {
//   const innerObj = obj[key];
//   for (const key in innerObj) {
//     summ += innerObj[key];
//   }
//   console.log(innerObj);
// }
// console.log(`Сумма: ${summ}`);
// console.log(obj.key1.key1);

// Тайминг: 20 минут.

// Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

// Тайминг: 25 минут.

// Решение Евгения:

// const riddle = {
//   question: "Зимой и летом одним цветом?",
//   answer: "Елка",
//   askQuestion() {
//     const userAnswer = prompt(this.question);
//     if (userAnswer !== this.answer) {
//       const userAnswer = prompt("Она зеленая");
//       if (userAnswer !== this.answer) {
//         const userAnswer = prompt("Она зеленая и на новый год");
//         if (userAnswer !== this.answer) {
//           alert("вы проиграли");
//         } else {
//           console.log("Поздравляем, верный ответ!");
//         }
//       } else {
//         console.log("Поздравляем, верный ответ!");
//       }
//     } else {
//       console.log("Поздравляем, верный ответ!");
//     }
//   },
// };

// riddle.askQuestion();

// Решение преподавателя:

// const riddle = {
//     question: "Зимой и летом одним цветом?",
//     answer: "Елка",
//     hints: ["Она зеленая", "Она зеленая и на новый год"],
//     askQuestion() {
//         const texts = [this.question, ...this.hints];
//         let i = 0;
//         let userAnswer = null;
//         do {
//             userAnswer = prompt(texts[i]);
//             if (userAnswer === this.answer) {
//                 alert("Поздравляем, верный ответ!");
//                 return;
//             }
//             i++;
//         } while(i < texts.length);

//         alert("вы проиграли");
//     },
// };

// riddle.askQuestion();
