/* DOM (Document Object Model) */

// получение элемента по значению атрибута id.
let obj = document.getElementById("myid");
console.log(obj);
obj.id = "myid2";
// изменение значения любого свойства объекта 
// влечёт за собой немедленное изменение DOM(Html).
console.log(obj.innerText);
console.log(obj.innerHTML);
// obj.innerText = "I love JS";
// не меняйте структуру документа через innerHtml!!!
obj.innerHTML += '<img src="Титульник.jpg">';
// className = значение атрибута class 
console.log(obj.className);

obj.classList.add("js");
obj.classList.remove("hello");
// изменение стилей через объект.
console.log(obj.style);
obj.style.color = "red";
obj.style.width = "100px";
obj.style.fontSize = "70px";

// получение элементов по названию тега.
let img = document.getElementsByTagName(`img`)[0];
img.width = "200";
img.height = "200";
console.log(img);

// получение элементов по названию класса 
let elems = document.getElementsByClassName("js");
for (let e of elems) {
    e.style.background = "blue";
}
// получение элементов по селектору
document.querySelector("div>p"); // возвращает первый элемент который 
// подходит под заданный селектор
 
elems = document.querySelectorAll("div>span"); // возвращает все элементы которые подходят
// под заданный селектор
elems[0].innerText = "Itstep";
console.log(elems);

// добавление элемента в DOM.
let a = document.createElement("a");
a.innerText = "Go to google";
a.href = "https://www.google.com";
a.target = "_blank";

// 1 способ (когда есть ссылка на родителя).
let p = document.getElementsByTagName("p")[0];
p.appendChild(a); // добавление в html 

// 2 способ ( дабавляем элемент в родителя, когда есть ссылка на потомка)
let child = document.getElementById("mid");
child.parentNode.appendChild(a);

let copy = {...a}; // weal

// 3 способо (добавляем элемент в потомка, когда есть ссылка на родителя)

child.children[0].appendChild(a); // children - массив дочерних элементов

document.body.appendChild(a);

// удаление элемента.
// document.body - родительский элемент.
document.body.removeChild(a); // a - дочерний элемент

// пример 
let data = [
    {
        name: "Vasya",
        age: 25,
        avatar: "Титульник.jpg"
    },
    {
        name: "Andrey",
        age: 27,
        avatar: "Титульник.jpg"
    },
    {
        name: "Kolya",
        age: 30,
        avatar: "Титульник.jpg"
    }
];
/**
 * <table>
 *  <thead>
 *      <tr>
 *          <th></th>
 *          <th>Name</th>
 *          <th>Age</th>
 *      </tr>
 *  </thead>
 *  <tbody>
 *      ...
 *      <tr>
 *          <td>
 *              <img src = user.avatar />
 *          </td>
 *          <td>user.name</td>
 *          <td>user.age</td> *          
 *      </tr>
 *      ...
 * 
 *  </tbody>
 * </table>
 */

function showData (data) {
    let table = document.createElement("table");
    table.border = 1;
    // создаём thead
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th2.innerText = "Name";
    let th3 = document.createElement("th");
    th3.innerText = "Age";
    tr.append(th1,th2,th3);
    thead.appendChild(tr);
    table.appendChild(thead);
    // создаём tbody
    let tbody = document.createElement("tbody");
    for (let user of data) {
        // image
        let tr = document.createElement("tr");
        let tdImage = document.createElement("tdImage");
        let img = document.createElement("img");
        img.src = user.avatar;
        img.className = "avatar";
        tdImage.appendChild(img);
        // name
        let tdName = document.createElement("td");
        tdName.innerText = user.name;
        // age 
        let tdAge = document.createElement("td");
        tdAge.innerText = user.age;
        tr.append(tdImage,tdName,tdAge);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}
showData(data);
