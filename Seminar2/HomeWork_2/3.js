"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

alert("----------- Задание № 3 -----------");
const dayNumber = +prompt("Введите целое число в интервале [1, 32)", "1");
if (dayNumber < 1 || dayNumber > 31) {
  alert("Неверное значение");
} else if (dayNumber < 11) {
  const decade = 1;
  alert(`Число ${dayNumber} попадает в ${decade} декаду месяца.`);
} else if (dayNumber > 20) {
  const decade = 3;
  alert(`Число ${dayNumber} попадает в ${decade} декаду месяца.`);
} else {
  const decade = 2;
  alert(`Число ${dayNumber} попадает в ${decade} декаду месяца.`);
}
