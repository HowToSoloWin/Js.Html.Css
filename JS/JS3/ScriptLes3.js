// ОСНОВНЫЕ МЕТОДЫ РАБОТЫ С МАССИВАМИ.
let arr = [
    {
        name: "Vasya",
        age: 15
    },
    {
        name: "Kolya",
        age: 25
    },
    {
        name: "Petya",
        age: 45
    }
];
// добавление в конец массива.
arr.push(1, "hello");
console.log(arr);
// добавление в начало массива.
arr.unshift("world", 12);
console.log(arr);
// удаление с начала массива.
let p = arr.shift(); // извелекает 1-й элемент массива
console.log(arr, p);
// удаление с конца массива.
p = arr.pop(); // извлекает последний элемент массива
console.log(arr, p);
// удаление элементов по индексу.
arr.splice(1, 3); // с 1-го индекса, 3 количество элементов
console.log(arr);
// выборка элементов из массива.
arr = [
    {
        name: "Vasya",
        age: 15
    },
    {
        name: "Kolya",
        age: 25
    },
    {
        name: "Petya",
        age: 45
    }
];
p = arr.slice(1,3);
console.log(p); // c 1-го по 2-й элемент по индексу
console.log(arr);
// итерирование по элементам массива.
arr.forEach((elem, index) => {
    console.log(elem, index);
});
// опеределение индекса элемета по значению элемента массива.
let o = arr[0];
let i = arr.indexOf(o); // ищет индекс элемента, начиная с начала массива
// если элемент не найден, то indexOf вернёт значение -1
if (i != -1) {
   // arr.splice(i, 1);
} 
console.log(arr);
i = arr.lastIndexOf(o); // ищет индекс элемента, начиная с конца массива.

// фильтрация массива
let arr2 = arr.filter((elem, index) => elem.age > 18);
console.log(arr2);
// маппинг массивов.
let arr3 = arr.map((elem) => elem.name);
console.log(arr3);

let arr4 = arr.map((elem) => {
    return {
        Username: elem.name,
        adult: elem.age >= 18
    }
});
console.log(arr4);

// reduce
let res = arr.reduce((prev,current) => prev + current.age, 0);
console.log(res);
// arr.reduceRight(); // тоже самое, что и reduce ,
// только проход по массиву начинается с конца

/* ФИЧИ ECMASCTIPT 6 */
// оператор ...
function sum(...a) {
    return a.reduce((prev, current) => prev + current, 0);
}
let s = sum(1, 0, -7, 8, -89, 16);
console.log(s);

function min(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    if (b < c) {
        return b;
    }
    return c;
}
let numbers = [1, 4, -5, 7]; // [1,4, -5, 7] => (1, 4, -5, 7);
let m = min (...numbers);
console.log(m);

// расширенные литералы объектов 
function createCar(name, model, color) {
    return {
        name, // name: name;
        model, // model: model;
        CarColor: color,
                // вычисляемые свойства
        ["color_" + color]: color,

        drive() {
            console.log("drive");
        }
    }
}
let car = createCar("BMV", "x5", "red");
console.log(car);
car.drive();
// способы задания числа
let dec = 1231; // 10-чная форма записи
let hex = 0x15f; // 16-чная форма записи
let oct = 0o445; // 8-чная форма записи
let bin = 0b101010; // 2-чная форма записи
console.log(dec, hex, oct, bin);

// деструктуризация массивов и объектов 
function test() {
    return [1, "hello", 20];
}
// деструктуризация массива
let [t1, t2, t3] = test();
console.log(t1, t2, t3);
// деструктуризация объекта
function test2() {
    return {
        age: 10,
        name: "Vasya",
        email: "vasya@mail.ru"
    };
}

let {name: x, age: y, email: z} = test2();
console.log(x, y, z);

// форматирование строк
let s1 = "hello";
let s2 = 'hello';
let s3 = `Hello ${x}, ${y}!`;
console.log(s3);

// Promise
let pr = new Promise((accept, reject) => {
    if (true) {
        accept({
            msg: "Success",
            status: 200
        });
    }else{
        reject("Error");
    }
});

pr.then(
    // вызовется, если сработал accept
    (msg, status) => {
        console.log(msg, status);
    },
    // вызовется, если сработал reject
    (err) => {
        console.error(err);
    }
);