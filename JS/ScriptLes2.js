/* Стандартные диалоговые окна */
// alert("Hello"); // выводит сообщения
/* let answer = confirm("Do u want to learn JS?"); // выводит сообщение, и имеет 2 кнопки (Yes/No)
console.log(answer); */
// promt всегда возвращает введённое значение в виде строки
// let name = prompt("What is your name", "Vasya"); // сслужит для ввода пользователем данных
// console.log(name);

/* ООП */
let car = {
    color: "red",
    brand: "BMW",
    distance: 100,

    drive: function(m) {
        this.distance += m;
    }
};

let car2 = {
    color: "red",
    owner: "Vasya",

    pip: function() {
        console.log("pip-pip-pip");
    }
};

console.log(car);
console.log(car2);

car.drive(50);
console.log(car.distance);
car2.pip();

// в JS вместо наследования используется прототипирование 
car2.__proto__ = car;
car2.drive(80);
console.log(car2);

// переопределение методов 
car2.drive = function(a, b) {
    this.__proto__.drive(a);
    console.log(a,b);
}
car2.drive(12,50);
console.log(car2);

// создание объектов на основе функции
function User(name) {
    // если при обращении через ключевое слово this 
    // к методу или свойству, которого нет у текущей функции
    // он будет создан автоматическиб.
    this.name = name;
    this.age = 0;

    this.setAge = function(age) {
        if (age >= 0 && age <= 100) {
            this.age = age;
        } else {
            console.log("Incorrect age value");
        }
    }
}

let user = new User("Vasya");
console.log(user.name);
user.setAge(15);
console.log(user);

// каждую секунду (1000)
setInterval(function(){
    console.log("time");
},1000);

// 1 раз через 3s
setTimeout(function(){
    console.log("3s")
}, 3000);

// стрелочные функции
let sum = (a, b) => {
    return a + b;
};

console.log(sum(10, 20));

sum = (a, b) => a + b;

console.log(sum(10, 20));

// любая стрелочная функция может быть замкенена на обычную,
// но не наоборот.
console.clear();
let testObj = {
    count: 5,

    withFunction: function() {
        setInterval(function() {
            this.count++;
            console.log(this.count);
            console.log(this);
        }, 2000);
    },

    withLambda: function() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 2000)
    }
};
/* testObj.withFunction();
testObj.withLambda(); */

/* ООП в ECMASCRIPT 6 */
class Animal {
    color;

    constructor(color) {
        this.color = color;
    }
    say() {
        console.log("???");
    }
}

class Dog extends Animal {
    age;

    constructor(color, age) {
        super(color); // вызов конструктора класса Animal
        this.age = age;
    }
    
    // переопределение метода say из класса Animal
    say() {
        console.log("haw-haw");
    }
}

let dog = new Dog("black", 14);
console.log(dog);
dog.say();

// typeof
let a = 67;
let b = true;
let c = "hello";
let d = [1, 3, "test"];
let e = {"Vasya": "Petya"};
let f = () => {};
let g = {
    color: "red"
};
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof Dog);