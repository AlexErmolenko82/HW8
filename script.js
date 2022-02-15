"use strict"
//1. Создайте объект Date для даты своего рождения(например 20 февраля 1995 года). Используя методы даты сформировать строку следующего вида - “20.02.1995”

function transformDate (defaultValue) {
const date = new Date(defaultValue);
let result;
let birthDD = date.getDate();
let birthMM = date.getMonth()+1;
let birthYYYY = date.getFullYear();
birthDD < 10 ? birthDD = `0${birthDD}` : true;
birthMM < 10 ? birthMM = `0${birthMM}` : true;
return result = `${birthDD}.${birthMM}.${birthYYYY}`;
}

console.log(transformDate("1995-10-05"));
console.log(transformDate("1982-10-20"));
console.log(transformDate("1982-01-01"));
console.log(transformDate("1982-09-20"));


//2. Напишите функции getDiffDays , которая будет принимать 2 даты (дата начала и дата окончания) и возвращать кол-во дней которое прошло между этими датами.
//Если пользователь передал невалидную дату - вывести ошибку в консоль и остановить выполнение функции
//Если пользователь ввел дату начала, которая будет позже чем дата окончания - то вывести ошибку то дата позже чем дата окончания
//Решение верно, но можно улучшить
//Проверку на валидность можно упростить до простого преобразования new Date - если оно вернуло Invalid date - значит дата действительно не валидна. Parse метод все равно используется "под капотом" при вызове new Date
//86400000 - давай вынесем в константу и красиво назовем, чтобы было понятно что это за значение хранится :)

// function getDiffDays(dateStart, dateEnd) {
//     const MILLISECONDS_IN_DAY = 86400000;
//     let start = new Date(dateStart);
//     let end = new Date(dateEnd);
//     if (start == "Invalid Date" || end == "Invalid Date") {
//         console.error(`Error: invalid date`);
//     }
//     else {
//         if (start < end) {
//                 return (end-start)/MILLISECONDS_IN_DAY;    
//             }
//             else {
//                 console.error(`Error: your start date is later than end`);
//             }
//     }      
// }

// console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
// console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
// console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
// console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end


//3. Создать функцию isWeekend которая будет проверять - выходной ли день (суббота или воскресенье) в переданной дате и возвращать true/false. Пример вызова
//Решение верно, но не оптимально. Тут все таки в 2 строки лучше
//new Date(date).getDay() - так как вот такой код у тебя вызывается дважды - что не оптимально. Сохрани результат ее выполнения в переменную и уже затем проверяй

// const isWeekend = (date) => {
//     let dayOfWeek = new Date(date).getDay();
//     return (dayOfWeek === 0 || dayOfWeek === 6);
// }
// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false


//4. Используя методы для работы с форматом JSON необходимо сделать следующие действия с данным объектом:
//Преобразовать его к формату JSON строки
//Преобразовать обратно в формат JS объекта
//Используя “деструктуризацию” создать переменные с каждым свойством из данного объекта (fullName, street, city, house)

// const person = {
//    fullName: 'Sherlock Holmes',
//    address: {
//      street: "Baker Street",
// 		 city: "London",
//      house: "221b"
//    }
// }

// let json = JSON.stringify(person);
// let personFromJson = JSON.parse(json);
// let {fullName, address: {street, city, house}} = person;

// console.log(person);
// console.log(json);
// console.log(personFromJson);
// console.log(fullName);
// console.log(street);
// console.log(city);
// console.log(house);
