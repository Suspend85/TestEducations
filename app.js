// console.log(2020, 1.5);
// console.log(20 * 'asdsad');
// console.log(1 / 0);
// console.log('hello', "hello2", );
// console.log(true, false);
// console.log(null);
// console.log(undefined);
// console.log(Symbol());

// console.log({ name: 'dima', age: 34 });
// console.log( [1, 2, 3, 4, 5]);
// var let, const

// var name = 'dima';
// console.log(name);
// name = 'Dmt';
// console.log(name);

// var age;
// console.log(age);
// age = 30;
// console.log(age);

// var $name = 'Ivan';
// var _name = 'Maks';
// // var 1name = '';

// var userAge = 30;
// var user_age = 20;
// var UserAge = 40;
// var userage = 10;

// var car;
// condole.log(car);
// var car = 'bmw';
// // var car = 'audi';
// condole.log(car);

// console.log(nickname);
// let nickname = 'dmgame';
// nickname  ='dm';
// console.log(nickname);

// const firstName = 'Tom';
// // firstName = 'john';
// // const lastName;
// console.log(firstName);

// const user = {
//     name: 'dima',
//     age: 30
// };

// user.age = 25;
// console.log(user);
// let value;

// number to string

// value = String(10);
// value = String(10+40);
// value = String(10+40);
// value = (40).toString();

// // boolean to string
// value = String([1,5,6]);

// //object to string
// value = String({ name: 'Dima'});
// value = 30 + '' + 30;
// value = 30 * '5';
// value = false + undefined

// // string to number
// value = Number('23')
// value = Number(false);
// value = Number(null);
// value = Number('false');
// value = Number([1,2,3]);

// value = parseInt('200px');
// value = parseFloat('234.2435px');

// // Boolean
// value = Boolean('hello');
// value = Boolean(0);
// value = Boolean(undefined);
// value = Boolean(null);
// value = Boolean([]);
// value = Boolean({});

// console.log(value);
// console.log(typeof value);

//numbers   +  -  *  /  %
// const num1 = 10;
// const num2 = 20;
// let value;

// value = num1 + num2;
// value = value + 100;
// value += 100;
// // value = 5 % 2;
// value ++;
// value --;
// ++value;
// --value;

// value = 0.6 + 0.7;
// value = +value.toFixed(1);
// value = (0.6*10+0.7*10)/10;

//math
// value = Math.PI;
// value = Math.random();
// value = Math.round(2.4);
// value = Math.ceil(2.1);
// value = Math.floor(2.9);
// value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

// value = Math.floor(Math.random() *10 + 1);

// const arr = ['black', 'red', 'yello', 'pink', 'greem',
// 'orange'];
// value = Math.floor(Math.random() * arr.length);
// arr[value]

// 1. console.log(Math.PI.toFixed(2));
// console.log(Math.PI.toFixed(2));

// 2. max mix
// console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51) + ',', Math.max(15, 11, 16, 12, 51, 12, 13, 51));

// const minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// const maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
// console.log(minNum, maxNum);

// 3.a Math.random
//  value = Math.random();
//  console.log(value.toFixed(2));

// 3.b. Math.random INTEGER
// const X = 20;
// const randomX = Math.random() *20;
// console.log(randomX.toFixed(0));

// 4. 0.6 + 0.7
// value = 0.6 + 0.7;
// console.log(+value.toFixed(1));

// 5. Object to INT
// console.log(parseInt('100$'));

// console.log(typeof value);

// const firstName = 'Dima';
// const lastName = 'Krop';
// const age = 30;
// const str = 'Hello my name is Dima';

// let value;
// value = firstName + lastName;
// value = firstName + ' ' + lastName;
// value = value + 'I am' + age;
// value +=' I am ' + age;
// value = firstName.length;
// value = firstName[2];
// value = lastName[lastName.length - 1];
// value = firstName.toUpperCase();
// value = firstName.concat(' ', lastName);
// value = str.indexOf('n', 10);
// value = str.indexOf('!');
// value = str.includes('DIMA');
// value = str.slice(0,5);
// value = str.slice(0, -3);
// value = str.replace('Dima', 'Dmitrii');
// console.log(value);

//* ---------------- ДЗ №2. СТРОКИ ---------------
//* 1.
// let string = "Bsome test string1234hj";
// value = string.length - 1;
// console.log(string[0], string.slice(value));

//* 2.
// let string = "some test string";

// вариант Преподавателя:
//  const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
// console.log(firstLastUpper);
// Мой вариант
// console.log(string[0].toUpperCase() + string.slice(1,-1) + string.slice(-1).toUpperCase());

//* 3.
// let string = "some test string";
// console.log(string.indexOf('string'));

//* 4.
// let string = "some test string";
// value = string.indexOf(' ');
// console.log(string.indexOf(' ', value+1));

//* 5.
// let string = "some test string";

// Мой вариант
// value = string.slice(5);
// console.log(value.slice(0,4));
// Вариант преподавателя
// const substr = string.substr(5, 4);
// console.log(substr);

//* 6.
// let string = "some test string";
// console.log(string.slice(5,10));

//* 7.
// let string = "some test string";
// console.log(string.slice(0,-6));

//* 8.
// a = 20;
// b = 16;
// console.log(String(a) + String(b));

//! Видео №10. Шаблонные строки

// const firstName = "dima";
// const lastName = "Kropachev";
// const age = 30;

// let str;
// str = "hello my name is " + firstName + " " + lastName;

// str =
//   "<ul>" +
//   "<li>First name: " +
//   firstName +
//   "</li>" +
//   "<li>Last name: " +
//   lastName +
//   "</li>" +
//   "<li>Age: " +
//   age +
//   "</li>" +
//   "</ul>";
// // console.log(str);
// // ES6
// str = `
//   <ul>
//     <li>First name: ${firstName}</li>
//     <li>Last name: ${lastName}</li>
//     <li>Age: ${age}</li>
//     <li>Math.random: ${ Math.random() }</li>
//     <li>5 + 5: ${ 5 + 5 }</li>
//   </ul>
//   `;
// document.body.innerHTML = str;

//! Видео №11. ВВЕДЕНИЕ В ОБЪЕКТЫ

// const user = {
//   firstName: 'dima',
//   age: 10,
//   isAdmin: true,
//   email: 'test@test.com',
//   'user-address': {
//     city: 'Krsk'
//   },
//   skills: ['html', 'scc', 'js']

// };
// let value;
// let prop = 'skills';

// value = user.firstName;
// value = user['isAdmin'];
// value = user['user-address'];
// value = user['user-address'].city;
// value = user["user-address"]['city'];
// value = user[prop][0];

// user.firstName = 'Dmitrii';
// value = user.firstName;
// user.info = 'some info';
// value = user.info;
// user['user-address'].city = 'Kraaaaasss'
// user["user-address"].country = "Russia";

// console.log(user.plan);
// user.plan = {}
// user.plan.basik = 'basic';

// console.log(value);
// console.log(user);

//*  ДОМАШНЕЕ ЗАДАНИЕ
// const obj = {'details': {},}
// obj.product = 'iphone';
// obj.price = '1000';
// obj.currency = 'dollar';
// obj['details'].model = 'x10';
// obj["details"].color = "white";
// console.log(obj);

// ! ---------------------ВИДЕО №12. ЛОГИЧЕСИЕ ОПЕРАТОРЫ. IF -------------
// let value;
// value = 1 > 2;
// value = 2 <= 2;
// value = 1 == 1;
// value = 1 == "1";
// value = 1 == true;
// value = 1 === "1";
// value = 1 != "1";
// value = 1 !== "1";
// value = "a" >= "a";
// value = "aa" >= "ab";
// value = "A".charCodeAt();
// console.log(value);

// if (условие) {
//   // actions
// } else {
//   // else actions
// }

// value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

// || && !
// value = null;
// if (!value) {
//   console.log(value);
// }

// value = [1];

// if (value.length) {
//   console.log(value);
// } else {
//   console.log('Array is empty');
// }
// value = null;

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log("Array is empty");
// }

// let user = {
//   name: null
// };
// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// && - ЗАПИНАЕТСЯ НА ЛЖИ. ПЫТАЕТСЯ ПРЕОБРАЗОВАТЬ К FALSE
// || - запинается на ПРАВДЕ. ПЫТАЕТСЯ ПРЕОБРАЗОВАТЬ К TRUE

// value = 0 || 0 || null;

// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some act');
// } else {
//   console.log('else');
// }

// let serverNickname = ''
// let nickname = serverNickname || 'default nickname';
// console.log(nickname);

// value = 1 && 2 && 3;
// productPrice = 10;

// if (productPrice >= 5 && productPrice < 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

// value = 10;

// if (value < 10) {
//   console.log("value < 10)", value);
// } else if (value >= 10) {
//   console.log("value >= 10)", value);
// } else {
//   console.log('else');
// }

//* -------------ДОМАШКА (ЗАДАНИЕ №4)-------------------------------------
//------------------------------------- 1.
// let a = 0 || "string";   // string. 0(False) || 'String'(True) = 'String'(True)
// let a = 1 && "string";   // string. 1(True) && 'String'(True) = 'String'(True)
// let a = null || 25;      // 25.   null(False) || 25(True) = 25(True)
// let a = null && 25;      // null. null(False) && 25(True) = null(False)
// let a = null || 0 || 35; // 35. null(False) || 0(False) || 35(True) = 35(True)
// let a = null && 0 && 35; // null. null(False)&& 0(False)&& 35(True)=null(False)

// ------------------------------------- 2.
// let a = 12 + 14 + "12";   // = 2612. Конкатенация строк
// let a = 3 + 2 - "1";      // = 4. Арифметические операции
// let a = "3" + 2 - 1;      // = 31. Конкатенация строк
// let a = true + 2          // 3.     true при числовом преобразовании становится 1
// let a = + "10" + 1;       // 11. . унарный плюс превращает строку в число и происходит сложение чисел
// let a = undefined + 2;    // NaN. при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
// let a = null + 5;          // 5. null преобразуется к нулю
// let a = true + undefined;   // NaN. 1 + undefined = NaN

// -------------------------------------3.
// let a = 'hidden';
// if (a === 'hidden') {
//   console.log('a =', a = 'visible');
// } else {
//   console.log('a =', a = 'hidden');
// }

// ------------------------------------- 4.
// let a = 1;
// if (a === 0) {
//   console.log('a =', a = 1);
// } else if (a < 0) {
//   console.log("a =", a ='less then zero');
// } else {
//   console.log("a * 10 =", a *= 10);
// }

//------------------------------------- 5.
// let car = { name: 'Lexus', age: 6, create: 2008, needRepair: false }
// if (car.age > 5) {
//   car.needRepair = true;
//   console.log("need repair");
// } else if (car.age <= 5 && car.age >= 0) {
//   car.needRepair = false;
//   console.log("don't need repair");
// }

//------------------------------------- 6. МОЙ ВАРИАНТ
// let item = { name: 'Intel core i7', price: '100$', discount: '15%'}
// if (item.discount && item.price && !isNaN(parseInt(item.dviscount)) && !isNaN(parseInt(item.price))) {
//   item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount) / 100);
//   console.log("priceWithDiscount:", + item.priceWithDiscount + '$');
// } else if (!item.discount && item.price) {
//   console.log('item price', item.price);
// } else {
//   console.log('Укажите цену в поле Price')
// }

// ------------------------------------- 6. ВАРИАНТ ПРЕПОДАВАТЕЛЯ
// let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
// // мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
// const price = parseFloat(item.price);
// const discount = parseFloat(item.discount);
// // проверяем что цена и скинда не являются NaN так как это важно при расчетах
// if (!isNaN(price) && !isNaN(discount)) {
//   const priceWithDiscount = price - (price * (discount / 100));
//   console.log(priceWithDiscount)
// } else {
//   console.log(price);
// }

// -------------------------------------7.
// let product = { name: 'Яблоко', price: '21$' };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
//   console.log(product.name);
// } else {
//   console.log('товаров не найдено');
// }

// !---------ВИДЕО №13. Тернарный оператор.Конструкция switch case -----
// let a = 1
// let b = 0
// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

//  выражение ? если true : если False;
// b = a > 0 ? a : b + 1;

//  выражение ? если true : выражение ? если true : если False;
// b = a > 0 ? 2 : a < 0 ? 3 : 0;

// console.log(`b: ${b}`);

// let color = 'yellow'
// switch (color) {
//   case 'yellow':
//   case 'red':
//     console.log('color is red || yellow');
//     break
//   default:
//     console.log('Default');
// }

//! ---------ВИДЕО №14. ЦИКЛЫ. ----------------------------
// while, do while, for, for of, for in

// i = 10;
// while(i--) {
//   console.log(i);
// }

// do {
//   console.log('action');
// } while (i > 0);

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;        // прерывает работу ЦИКЛА
//     continue;  // пропустить/прекратить ОПЕРАЦИЮ
//   }
//   console.log(i);
// }

// let str = 'hello';
// let res = '';
// for (let i = 0; i < str.length; i++) {
//   // console.log(str[i]+ '!');
//   res += str[i] + '*';
// }
// console.log(res);

// let colors = ['white', 'black', 'yello', 'orange'];
// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);

// const users = [
//   {
//     name: 'Dima',
//     age: 30
//   },
//   {
//     name: 'OLeg',
//     age: 20
//   },
//   {
//     name: 'vasya',
//     age: 10
//   },
//   {
//     name: 'olga',
//     age: 2
//   },
// ];

// const usersObj = {};
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].age)
//   usersObj[users[i].name] = users[i];
// }
// // console.log(usersObj['Dima']);

// const user = {
//   name: 'Dima', age: 30
// };
// FOR IN -------------------------
// for (let key in usersObj) {
//   console.log(key);
//   console.log(usersObj[key]);
// }

// FOR OF -------------------------
// for (let value of users) {
//   console.log(value);
// }

//*-------------ДОМАШКА (Задание 6: Домашнее задание по циклам.)---------
//* 1. ПЕРВЫЕ БУКВЫ В СЛОВЕ В ВЕРХНЕМ РЕГИСТЕ --------------------------
// let str = 'i am in the easycode';
// let res = '';
// res += str[0].toUpperCase();
// for (let i = 1; i < str.length; i++) {
//    if (str[i - 1] === ' ') {
//       res = res + str[i].toUpperCase();
//    } else {
//       res = res + str[i];
//    }
// }
// console.log(res);

//* 2. СТРОКА ПЕРЕВЕРТЫШ --------------------------------------------
// let str = 'tseb eht ma i';
// let res = '';
// for (let i = str.length; i--;) res += str[i];
// console.log(res);

//* 3. ФАКТОРИАЛ --------------------------------------------
// var a = 10;
// var b = 1;
// for (let i = a; i--;) b = b * (a - i);
// console.log(b)

//* 4. УДАЛЕНИЕ ПРОБЕЛОВ + ЗАГЛАВНЫЕ ------------------------
// let str = 'JavaScript is a pretty good language';
// let res = '';
// res += str[0].toUpperCase();
// for (let i = 1; i < str.length; i++) {
//   if (str[i - 1] === ' ') {
//     res = res + str[i].toUpperCase();
//   } else {
//     res = res + str[i];
//   }
//   res = res.replace(' ', '');
// } console.log(res);

//* 5. ЧЕТНЫЕ И НЕЧЕТНЫЕ В МАССИВЕ (FOR OF) --------------------------
// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for (let b of a) {
//   if (b % 2 == 1) console.log('нечетные', b);
//   else console.log('четные', b);
// }

//* 6. ЕСЛИ СТРОКА ТО В ВЕРХНИЙ РЕГИСТР (FOR IN) --------------------------
// let list = { name: 'dima', work: 'easycode', age: 34 };
// for (let b in list) {
//   if (typeof list[b] === 'string') {
//     list[b] = list[b].toUpperCase();
//   }
// }
// console.log("string:", list);

// !-----------------ВИДЕО №15. ВВЕДЕНИЕ В ФУНКЦИИ------------------
// function sayHello(firstName = 'Default', lastName = 'Default') {
//   // if (!firstName) return console.error('error');
//   console.log(firstName, lastName);
//   console.log('Hello world');
//   return `Hello ${firstName} ${lastName}`;
// }
// let res = sayHello('dima', 'krop');
// let res2 = sayHello('dima', 'let') + '!';
// let res3 = sayHello();
// console.log(res3)

// let x = 10;
// function foo(x) {
//   x = 20;
//   console.log(x);
// }
// foo();
// console.log(x);

// const user = { name: 'Dima', age: 30 }  //DECLARATION
// function getObj(obj) {
//   console.log(obj);
//   obj.name = 'Dmitrii';
// }
// getObj(user);

// const square = function (x) {   //EXPRESSION
//   return x * x;
// };

// (function (msg) {      // САМОВЫЗЫВАЮЩАЯСЯ
//   console.log(msg);
// })('Hello World');

//*------------- ДОМАШКА(Домашнее задание по функциям)---------
//* 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение.
// function mult(...args) {
//   let sum = 1;
//   if (args.length === 0) {
//       sum = 0;
//   } else {
//       for (let arg of args)
//       sum *= (arg);
//     }
//   return sum;
// }
// console.log(mult(1, 2, 3)); 
// console.log(mult());

//* 2. функции. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// function reverseString(str) {
//   let rvrs = String(str);
//   let res = '';
//   for (let i = rvrs.length; i--;) {
//     res += rvrs[i];
//   } console.log(res);
//   return (res); 
// }
//   reverseString('test');
//   reverseString('');
//   reverseString(null);
//   reverseString(undefined);
//   reverseString();

//* 3. функции. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// function getCodeStringFromText(str) {
//   let str2 = String(str);
//   let value = '';
//   for (let i = 0; i < str2.length; i++) {
//     value += str2.charCodeAt(i) + ' ';
//   } console.log(value);
//   return value.trimRight();
// }
// getCodeStringFromText('hello'); 

//* 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

// function guessTheNumber(num) {
//   let a = parseInt(0 + Math.random() * (11 - 1));
//   if ( num < 0 || num > 10 ) return new Error('Please provide number in range 0-10');
//     else if (!Number.isInteger(num)) return new Error('Please provide a valid number');
//       else if (num == a) {
//       console.log("You Win!");
//       return(a);
//       } else { 
//         console.log(`You are lose, your nubmer is ${num}, the random number is ${a}` );
//         return(a);
//         }
// } 
// console.log(guessTheNumber(3));

// !-----------------ВИДЕО №17. МЕТОДЫ МАССИВОВ------------------
// const numArr = [2, 32, 1234, 54, 323];
// let value;

// value = numArr.length;
// // numArr.length = 0;
// // numArr.length = 100;

// value = Array.isArray(numArr);
// value = numArr[2];
// numArr[2] = 12;
// value = numArr.indexOf(32);

// value = numArr.push(100);
// value = numArr.pop();
// value = numArr.unshift(111);
// value = numArr.shift();
// value = numArr.slice(0, 2);
// value = numArr.splice(1, 0, "one", "two");
// value = numArr.reverse();
// value = numArr.concat(1, 2);
// value = numArr.join(" ");
// value = "hello world".split(" ");
// console.log(value, numArr);

//*------------- ДОМАШКА( МЕТОДЫ МАССИВОВ )---------
//* 1. Создать функцию которая принимает число n и возвращает массив заполненный числами от 1 до n.
// function getArray(num) {
//   num1 = Number(num);
//   let arr = Array();
//   for (let i = 1; i <= num1; i++) { 
//     arr.push(i);
//   } 
//   return arr;
// }
// console.log('gerArray =',getArray(10));

//* 2. Создать функцию которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
// function doubleArray(arr) {
//   return arr.concat(arr);
// }
// console.log(doubleArray([1,2,3])) // [1,2,3,1,2,3]

//* 3. Создать функцию которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

// function changeCollection() {
//   let newArray = [];

//   for (let i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       const arg = arguments[i].slice();
//       arg.shift();
//       newArray.push(arg);
//     }
//   }
//   return console.log(newArray);
// }
// changeCollection([1, 2, 3], ['a', 'b', 'c']);
// ([1,2,3], ['a','b','c']) => [[2,3], [b,c]]

//* 4. Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки return new Error ('Error message'). Возвращать новый массив с пользователями соответствующие указанным параметрам.
// const users = [
//   {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 39,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ]
// function filterUsers(arr, key, value) {
//   if (!Array.isArray(arr)) return new Error('1');
//   if (typeof(key) !== 'string' || key === '') return new Error('2');
//   if ( value === undefined || value === null) return new Error('3');

//   const filtered = [];
//   for (let i = 0; i < users.length; i++) {
//     if (arr[i][key] === value) {
//       filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }
// console.log(filterUsers(users, "gender", "male"));

//! ДОП ЗАДАЧКИ ДЛЯ  ПОНИМАНИЯ.
//* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». То есть дефисы удаляются, а все слова после них получают заглавную букву.
// function camelize(str) {
//   let res = ''
//   for (let i = 0; i < str.length; i++) { 
//     if (str[i - 1] == '-') {
//       res = res + str[i].toUpperCase();

//     } else {
//       res = res + str[i];
//      }
//      res = res.replace('-', '');
//   }
//   return console.log(res);
// }
// camelize("background-color") // 'backgroundColor';
// camelize("list-style-image") // 'listStyleImage';
// camelize("-webkit-transition") //'WebkitTransition';

//* Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов. Функция должна возвращать новый массив и не изменять исходный.
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }
// console.log(filtered); // 3,1 (совпадающие значения)
// console.log(arr); // 5,3,8,1 (без изменений)

// * Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.То есть, проверка имеет вид a ≤ arr[i]≤ b.Функция должна изменять принимаемый массив и ничего не возвращать
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {  // удалить если за пределами интервала
//       arr.splice(i, 1);
//       i--;
//     }
//    }
// }
// let arr = [5, 3, 8, 1, 2, 4, 5, 6, 9];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

//* Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => b-a);
// // arr.reverse();
// console.log(arr); // 8, 5, 2, 1, -10

//* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted() {
//   return arr.slice().sort();
// }  
// let sorted = copySorted(arr) ;
// console.log('sort',sorted); // CSS, HTML, JavaScript
// console.log('arr',arr); // HTML, JavaScript, CSS (без изменений)

//* Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора. Задание состоит из двух частей:

//* Во - первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.Метод должен понимать плюс + и минус -.

//! РАЗОБРАТЬ
// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }
// console.log(calculate("3 + 7")); // 10

//* У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = console.log(arrOfNames());// Вася, Петя, Маша
// function arrOfNames() {
//   let res = [];
//   for (i = 0; i < users.length; i++) {
//     res.push(users[i].name);    
//   }
//   return res;
// }
//* ИЛИ ТАК
// let names = users.map(item => item.name);
// console.log(names);


//! CODEWARS ==============================================================
//* Удаление повторяющихся подряд символов и вывод результата в массив символов.
// let uniqueInOrder = function (iterable) {
//   res = [];
//   for (let i = 0; i < iterable.length; i++) { 
//     if (iterable[i] !== iterable[i-1]) {
//       res.push(iterable[i]);
//     } 
//   }
//   return res;
// }

// uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3])   // == [1,2,3]

//* Крокет-клуб Western Suburbs имеет две категории членства: старшее и открытое. Им нужна ваша помощь с формой заявки, которая сообщит потенциальным участникам, в какую категорию они будут помещены. Чтобы быть старшим, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокет-клубе гандикап варьируется от -2 до +26; Чем лучше игрок, тем ниже гандикап. вход
//* Вход будет состоять из списка списков, содержащих по два элемента каждый. Каждый список содержит информацию для одного потенциального члена. Информация состоит из целого числа для возраста человека и целого числа для человека с ограниченными возможностями. Примечание для F #: ввод будет (int list list), который представляет собой List <List>
// function openOrSenior(data){
  // let arr = [];
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i][0] >= 55 && data[i][1] > 7) {
  //     arr[i] = "Senior";
  //   } else {
  //   arr[i] = "Open";
  //   }
  // }
  // return console.log(arr);
// }
// openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]); //["Open", "Open", "Senior", "Open", "Open", "Senior"]
// openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]); // ['Open', 'Senior', 'Open', 'Senior']
// openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]);  //['Open', 'Open', 'Open', 'Open']
// openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]); // ['Senior', 'Open', 'Open', 'Open'])
//* Другой вариант решения.
// function openOrSenior(data) {
//   return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
// }

//* Tribonacci
//! не решено
// function tribonacci(signature,n){
//   let res = [];
//   // let res1 = signature;
//   // res.length = n;
//   for (let i = 0; i < signature.length; i++) {
//     // console.log('res1 =', res);
//     // res.push (signature[i - 2] + signature[i - 1] + signature[i]);
//     // res.push(signature[i - 2] + signature[i - 1] + signature[i]);
//   }
//   res.shift (0,3);
//   console.log('res =', res);
//   // return (console.log(signature, n));
// }
// tribonacci([1, 1, 1], 10); // [1,1,1,3,5,9,17,31,57,105]
// tribonacci([0, 0, 1], 10); // [0,0,1,1,2,4,7,13,24,44]
// tribonacci([0, 1, 1], 10); // [0,1,1,2,4,7,13,24,44,81]
// tribonacci([1, 0, 0], 10); // [1,0,0,1,1,2,4,7,13,24]
// tribonacci([0, 0, 0], 10); // [0,0,0,0,0,0,0,0,0,0]
// tribonacci([1, 2, 3], 10); // [1,2,3,6,11,20,37,68,125,230]
// tribonacci([3, 2, 1], 10); // [3,2,1,6,9,16,31,56,103,190]
// tribonacci([1, 1, 1], 1);  // [1] 
// tribonacci([300, 200, 100], 0) // []
// tribonacci([0.5, 0.5, 0.5], 30);  // [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]

//* ФИЛЬТР ЧИСЕЛ ИЗ МАССИВА.
// function filter_list(l) {
//   let res = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof(l[i]) != "string") {
//       res.push(l[i]);
//     } 
//   }
//   console.log(res);
//   return res;
// }
// filter_list([1, 2, 'a', 'b']);  // ==> [1,2]
// filter_list([1, 'a', 'b', 0, 15]); // ==> [1,0,15]
// filter_list([1, 2, 'aasf', '1', '123', 123]); // ==> [1,2,123]
//* Альтернативное решение через стрелочные ф.
// function filter_list(l) { return l.filter(n => Number.isInteger(n));}
//* Альтернативное решение через стрелочные ф.
// function filter_list(l) { return l.filter(x => x + 0 == x) }
//* Альтернативное решение через стрелочные ф.
// const filter_list = l => l.filter(n => n === +n)

//* Рисование треугольника символом #
// for (var line = "#"; line.length <= 8; line += "#")
//   console.log(line);

//* Каждое слово с большой буквы.
//!Разобрать позже, когда пройду прототипы.
// String.prototype.toJadenCase = function (str) {
  // let res = '';
  // // str = this.toLowerCase().split(' ');
  // res += str[0].toUpperCase();
  // for (let i = 1; i < str.length; i++) {
  //   if (str[i - 1] === ' ') {
  //     res = res + str[i].toUpperCase();
  //   } else {
  //     res = res + str[i];
  //   }
  // }
  // console.log(res);
  // res.toJadenCase();
// }
// console.log(String.prototype.toJadenCase('adfsdf fdghdf sdf')) // "How Can Mirrors Be Real If Our Eyes Aren't Real");


//* Маскирование элементов.
// function maskify(cc) {
//   cc = String(cc);
//   let res = '';
//   for (let i = 0; i < cc.length-4; i++) {
//     if (cc.length >= 4) {
//       res = res + '#';
//     } else {
//       res.concat(cc);
//     }
//   }
//   res = res.concat(cc.slice(-4));
//   return res;
// }
// console.log(maskify("4556364607935616"))  // == "############5616"
// console.log(maskify(     "64607935616"))  // ==      "#######5616"
// console.log(maskify(               "1"))  // ==                "1"
// console.log(maskify(                ""))  // ==                 ""
//* Другое решение
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
// console.log(maskify('1234567890'));
//* Другое решение
// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, '#');
// }
// console.log(maskify('1234567890'));

//*  Рекурсивная функция возведения в степень
// function power(base, exponent) {
//   if (exponent == 0) return 1;
//   else { return base * power(base, exponent - 1); }
// }
// console.log(power(2, 3));

//* РЕКУРСИЯ. Нахождение последовательности сложений и умножений, для получения заданного числа.
// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`);
//     }
//   }
//   return find(1, "1");
// }
// console.log(findSolution(24));

//* Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
/* #Examples:
n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.
nb_dig(25, 1):
the numbers of interest are
1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
so there are 11 digits `1` for the squares of numbers between 0 and 25.
*/
// function nbDig(n, d) {
//   let res = [];
//   let count = Number();
//   let str = '';
//   for (let i = 0; i <= n; i++) {
//     res.push(i * i);
//   }
//   str = String(res);
//   for (i = 0; i < str.length; i++)
//     if (str[i] == d) {
//       count += 1;
//     }
//   return count; 
// }
// nbDig(11549, 1) // 4700;
//*альтернативное решение
// function nbDig(n, d) {
//   var res=0;
//       for (var g=0;g<=n;g++){
//         var square=(g*g+"").split("");
//         square.forEach((s) => s==d?res++:null)
//       }return res;
// }

//* Перевод массива чисел в десятичное число
// const binaryArrayToNumber = arr => {
//   let value = '';
//   for (let i = 0; i < arr.length; i++) {
//     value += arr[i];
//   }    
//   value = parseInt(value, 2);
//   return value;
// }
// console.log(binaryArrayToNumber([0, 1, 1, 0]))
//* Альтернативное решение
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

//* Использования функции и шаблонных строк. 
// const tag = (strings, ...values) => {
//   console.log(strings);
//   console.log(values);
  
//   return strings;
// };
// const f = x => tag`hello ${x}`;
// console.log(f(1) === f(2))


//! ========================================

//! ВИДЕО №19. ФУНКЦИИ ВЫСШЕГО ПОРЯДКА.
// function foo() { 
//   console.log('hello world')
// }
// foo();
// foo.field = 'denis';
// console.log(foo.field);

// const arr = ['Dima', 'Vanya', 'Olya', 'Vasya'];
// [4,5,4,5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

// const names = ['Dima', 'Vanya', 'Olya', 'Vasya'];
// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLength(el) {
//   // console.log(el);
//   return el;
// }

// function nameToUpperCase(el) {
//   return el.toUpperCase();
// }

// const result = mapArray(names, nameLength);
// const result2 = mapArray(names, nameToUpperCase);
// // console.log(result2);

// function greeting(firstName) {
//   return function (lastName) {
//     return `Hello, ${firstName} ${lastName}`;
//   };
// }

// const testGreetings = greeting('Dima');
// const fullName = testGreetings('Krop');
// const fullName = greeting('Dima')('Krop1');
// console.log(fullName);

// function question(job) {
//   const jobDictionary = {
//     developer: 'что такое javaScript',
//     teacher: 'какой предмет вы ведете',
//   };
  
//   return function (name) {
//     return `${name}, ${jobDictionary[job]}?`; 
//   }


//   // if (job === 'developer') {
//   //   return function (name) {
//   //     return `${name}, что такое javaScript?`;
//   //   }
//   // } else if (job === 'teacher') {
//   //   return function (name) {
//   //     return `${name}, какой предмет вы ведете?`;
//   //   };
//   // }
// }
// const developerQuestion = question('developer');
// console.log(developerQuestion('Dima'));
// const teacherQuestion = question('teacher');
// console.log(teacherQuestion('Dima'));

//* ДЗ ПО ФУНКЦИЯМ ВЫСШЕГО ПОРЯДКА

// function highFunction( func ) {
//   func();
// }
// highFunction(function () { console.log(123) }) // 123

// function anotherHighFunction() {
//   console.log('321');
//   return function () { return console.log('123'); }
// }
// anotherHighFunction()();

// function processString(string, handler) {
//   let newString = '';
//   for (let i = 0; i < string.length; i++) {
//       newString += handler(string[i]);
//   }
//   return console.log(newString);
// }
// processString('Hello, easycode!',
//   function (symbol) {
//       return symbol.toUpperCase();
//   });
// processString('Hello, easycode!',
//   function (symbol) {
//       return symbol + '_';
//   });
// processString('Hello, easycode!',
//   function (symbol) {
//       return symbol.charCodeAt() + ' ';
//   });


//* 1 Создать две функции и дать им осмысленные названия:
/* - первая функция принимает массив и колбэк (одна для всех вызовов)
   - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback).
Первая функция возвращает строку “New value: ” и результат обработки:
firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки */

// function firstFunc(arr, fn) {
//   let res = 'New value: ';
//   for (let i = 0; i < arr.length; i++) {
//     res += fn(arr[i])
//   }
//   return res;
// }

// function handler1(el) {
//   return el[0].toUpperCase() + el.slice(1);
// }
// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1)); // MyNameIsTrinity

// function handler2(el) {
//   return Number(el) * 10 + ', ';
// }
// console.log(firstFunc([10, 20, 30], handler2)); // 100, 200, 300,

// function handler3(el) {
//   return `${el.name} is ${el.age}, `
// }
// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3)); // Jhon is 45, Aaron is 20

// function handler4(el) {
//   let res = '';
//   for (let i = el.length; i--;) {
//       res += el[i];
//     } 
//   return res + ', ';
//   // return el.split('').reverse().join('') + ', ';
// }
// console.log(firstFunc(['abs', '123'], handler4)); //cba, 321,

//* 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция) функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

// function every(arr, fn) {
//   if (!Array.isArray(arr)) return new Error('must be Array');
//   if (!fn || typeof fn != 'function') return new Error('must be function');
//   for (let i = 0; i < arr.length; i++) {
//     if (!fn(arr[i], i, arr)) {
//       return false;
//     }
//   }
//   return  true;
// }
// console.log(every([7, 6], function (el) {
//   return (typeof el === 'number' && el > 5); // проверка массива на число  и на el > 5
// }))

//* проверяем, являются ли все элементы массива числами, больше 10.
// function isBigEnough(element, index, array) { 
//   return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough);   // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true
// //[12, 5, 8, 130, 44].every(elem => elem >= 10);   // false
// //[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
