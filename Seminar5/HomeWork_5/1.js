"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};


console.log("----------- Задание № 1 -----------");
const obj = {};
for (const key in numbers) {
  if (numbers[key] >= 3) {
    obj[key] = numbers[key];
  }
}
console.log("Исходный объект:");
console.log(numbers);
console.log("Преобразованный объект:");
console.log(obj);