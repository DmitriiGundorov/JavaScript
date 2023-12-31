"use strict";
 
// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// const name = prompt("Введите свое имя");
// const age = +prompt("Введите свой возраст");

// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”
// console.log(`Добро пожаловать ${name}. Ваше количество оборотов вокруг солнца - ${age}`);

// Тайминг: 15 минут.
 
 
// Задание 2:
 
// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// const a = 13;
// const b = 5;
// console.log(a % b);
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a);
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3);
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);
// alert(-1 / 0);
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3');
// ```
 
// Тайминг: 20 минут.

 
// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.
//  const a = 13;
//  const b = 5;
//  const c = null;
//  c=a % b;
// console.log(c);

// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// const a = '2';
// const b = '3';
// console.log(a + b);

// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:
 // Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.
 
// const a = +prompt("Введите число 1");
// const b = +prompt("Введите число 2");
// console.log(`Сумма чисел равна  ${a + b}`);
// console.log("Разность чисел равна " + (a - b));
// console.log("Произведение чисел равно " + (a * b));
// console.log("Частное чисел равно " + (a / b));
// console.log("Остаток от деления чисел равен " + (a % b));
// Тайминг: 20 минут.
 
// Задание 4:
// 1. Не запуская код, определите, что выводится в консоль:
 
// ```
// console.log(String(true));
// console.log('a' + true);
// console.log(Number(true));
// console.log(true + 1);
// console.log(true + true);
// console.log(true - true);
// console.log(String(true) + Number(true));
// ```
//console.log("true" + 1);
// Тайминг: 20 минут.

// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// const a = +prompt("Введите число");
// if (a > 5) {
//   console.log("Число больше 5");
// } else if (a === 5) {
//   console.log("Число равно 5");
// } else if (a < 5) {
//   console.log("Число меньше 5");
// } else {
//   console.log("Число неверное");
// }

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// Вариант 1: Тернарный оператор
//  const test1 = +prompt("Введите число 1");
// const test2 = +prompt("Введите число 2");
// test1 === test2 ? alert("равны") : alert("не равны");

// Вариант 2: Условие
// const test1 = +prompt("Введите число 1");
// const test2 = +prompt("Введите число 2");
// if (test1 === test2) {
//   console.log("равны");
// } else {
//   console.log("не равны");
// }

// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// const test1 = +prompt("Введите число 1");
// const test2 = +prompt("Введите число 2");
// if (test1 < test2) {
//   console.log(test1 + "test1 мин ");
// } else if (test2 < test1) {
//   console.log(test2 + "test2 мин");
// } else {
//   console.log("равны");
// }

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”
// Вариант 1: И
// const a = +prompt("ввести число, которое будет больше нуля и меньше 15");
// if (a > 0 && a < 15) {
//     console.log("Спасибо за число " + a);
// } else {
//     console.log("А вы, я смотрю, хулиганите! " + a);
// }

// Вариант 2. ИЛИ
// const a = +prompt("ввести число, которое будет больше нуля и меньше 15");
// if (a < 0 || a > 15) {
//     console.log("А вы, я смотрю, хулиганите! " + a);
// } else {
//     console.log("Спасибо за число " + a);
// }
 
// Тайминг: 25 минут.

// Доп. задание: Способы вывода цифры из числа
// const d = 23230;
// console.log(d);
// console.log(d % 10);
// console.log(Math.trunc(d / 10) % 10);
// console.log(Math.trunc(d / 100) % 10);