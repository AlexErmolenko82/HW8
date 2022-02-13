"use strict"
//1. Создайте объект Date для даты своего рождения(например 20 февраля 1995 года). Используя методы даты сформировать строку следующего вида - “20.02.1995”

// const date = new Date('1982-10-20');
// let birthDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
// console.log(birthDate);

//2. Напишите функции getDiffDays , которая будет принимать 2 даты (дата начала и дата окончания) и возвращать кол-во дней которое прошло между этими датами.
//Если пользователь передал невалидную дату - вывести ошибку в консоль и остановить выполнение функции
//Если пользователь ввел дату начала, которая будет позже чем дата окончания - то вывести ошибку то дата позже чем дата окончания

// function getDiffDays(dateStart, dateEnd) {
//     if (isNaN(Date.parse(dateStart)) || isNaN(Date.parse(dateEnd))) {
//       console.error(`Error: invalid date`);
//     }
//     else {
//       let start = new Date(dateStart);
//       let end = new Date(dateEnd);
//       if (end < start) {
//               console.error(`Error: your start date is later than end`);
//           }
//           else {
//             return (end-start)/86400000;
//           }
//       }
// }

// console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
// console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
// console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
// console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end


//3. Создать функцию isWeekend которая будет проверять - выходной ли день (суббота или воскресенье) в переданной дате и возвращать true/false. Пример вызова

// const isWeekend = (date) => (new Date(date).getDay() === 0 || new Date(date).getDay() === 6)
// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false


//4. Используя методы для работы с форматом JSON необходимо сделать следующие действия с данным объектом:
//Преобразовать его к формату JSON строки
//Преобразовать обратно в формат JS объекта
//Используя “деструктуризацию” создать переменные с каждым свойством из данного объекта (fullName, street, city, house)

const person = {
   fullName: 'Sherlock Holmes',
   address: {
     street: "Baker Street",
		 city: "London",
     house: "221b"
   }
}

let json = JSON.stringify(person);
let copy_person = JSON.parse(json);
let {fullName, address: {street, city, house}} = person;

console.log(person);
console.log(json);
console.log(copy_person);
console.log(fullName);
console.log(street);
console.log(city);
console.log(house);
