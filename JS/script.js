console.log("hello from script.js");

/* ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ */
// const, let, var - создания переменных
var a = 10,
    b = 12;
a = 12;
console.log(a,b);
// var - создаёт переменную с глобальной областью видимости
// Типы даных в js:
a = 12.45; // number
var s = "text"; // string
var b = true; // boolean
console.log(a, s ,b);
s = 34; // переинициализируем переменную s
console.log(s);
// const
const pi = 3.14;
console.log(pi);

// +, -, *, /, +=, -=, *=, /=, %, %=, ++, --, - основные математические операторы
console.log(12 / 8 * (5 + 46));

// массивы
var arr = [12, 23, 78, true, "asdas"];
console.log(arr, arr.length);
console.log(arr[2]);
arr.push(45, "hello"); // добавляем новые элементы в конец массива
arr.splice(1,1); // удаляет часть элементов из массива
console.log(arr);

// map (ключ-значение) 
// в map в качестве ключа всегда используется тип string
var m = {"Vasya": 12345, "Petya": false, "Vasya": 788 };
console.log(m);
console.log(m["Petya"]);
m["Kolya"] = 123; // добавление нового значения
console.log(m);
delete(m["Petya"]); // удаление значения из map
console.log(m);

// условные операторы
if (a > b) {
    // тело if
    // if (a == b || b == A && a >= 78 && a != 5) {} 
} else {
    // иначе
}

switch (a) {
    case 1:
        console.log("a = 1");
        break;
        default:
            console.log("default");
}

// тернарный оператор 
var t = a > b ? "success" : [1, 2, 3];
console.log(t);

// циклы
var i = 0;
while(i < 5) {
    i++;
    console.log(i);
}
do {
    console.log("do-while");
} while (i > 5);

for (var i = 0; i < 2; i++) {
    console.log(i);
}

for (var e of arr) {
    // в e хранятся значения элементов массива
    console.log(e);
}

for (var k in arr) {
    // в k хранится индекст элемента массива
    console.log(k);
}
console.clear(); // очищает консоль

// let 
for (var i = 0; i < 10; i++) {}
console.log(i);
let j;
for (j = 0; j < 10; j++) {}
console.log(j);
let w = 90; // область видимости - текущий файл
// функции
// область видимости любой функции - глоабльный scope
function sum(a, b, c) {
    return a + b + c;
}
let ss = sum(1, 20, 3);
console.log(ss);

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 */
function diff(a, b ,c) {
    if (c == undefined && b == undefined) {
        return a;
    }
    if (c == undefined) {
        return a - b;
    }
    return a - b - c;
}
// если какой-то из аргументов в функции не задан при её вызове,
// то ему будет присвоено значение undefined
console.log(diff(1, 9, 67));

function check(sum, tips = 0.15) {
    return sum * (1 + tips);
}

console.log(Math.round(check(100)));

console.log(check(200, 0.30));

// преобразование типов 
let n = parseInt("1258");
let n2 = parseFloat("5656.7878");
console.log(n, n2);
console.log(" " + 56756);