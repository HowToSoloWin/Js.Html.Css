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

let userIndex = -1;
let name = document.getElementById("name");
let age = document.getElementById("age");
let avatar = document.getElementById("avatar");
let table = document.createElement("table");
let addBtn = document.getElementById("addBtn");
let update = document.getElementById("update");

function showData (data) {
    // удаляем предыдущую таблицу
    if (document.body.lastChild == table){
    document.body.removeChild(table);
    }
    table.innerHTML = "";    
    table.border = 1;
    // создаём thead
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th2.innerText = "Name";
    let th3 = document.createElement("th");
    th3.innerText = "Age";
    let th4 = document.createElement("th");
    th4.innerText = "Action";    
    tr.append(th1, th2, th3, th4);
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
        // remove button
        let revomeBtn = document.createElement("button");
        revomeBtn.onclick = () => {
            let i = data.indexOf(user);
            if (i != -1){
                data.splice(i , 1);
                showData(data);
            }
        }
        revomeBtn.innerText = "Remove";
        // update button
        let updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.onclick = () => {
            showUpdateForm(user);
        }
        let tdAction = document.createElement("td");
        tdAction.append(revomeBtn, updateBtn);
        tr.append(tdImage, tdName, tdAge, tdAction);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function addUser() {
    let user = {
        name: name.value,
        age: age.value,
        avatar: avatar.value
    }

    data.push(user);
    showData(data);

    // очищаем поля
   clearForm();
}

function showUpdateForm(user) {
    userIndex = data.indexOf(user);
    name.value = user.name;
    age.value = user.age;
    avatar.value = user.avatar;
    // скрываем кнопку "Add"
    addBtn.style.display = "none";
    // показываем кнопки "OK" и "Cancel"
    update.style.display = "inline-block";
}
function updateUser() {
    data[userIndex] = {
        name: name.value,
        age: age.value,
        avatar: avatar.value
    };
    showData(data);

    // вызываем cancel, чтобы очистить поля формы 
    // и показать кнопку "Add"
    cancel();
}
function cancel() {
    clearForm();
    addBtn.style.display = 'inline-block';
    update.style.display = 'none';
}
function clearForm() {
    name.value = "";
    age.value = "null";
    avatar.value = '';
}
// showData(data);

//////////////////////////////////
function showColorBlocks () {
    for (let i = 0; i < 20; i++) {
        let block = document.createElement("div");
        block.className = "block";
        block.style.width = rand(50, 150) + "px";
        block.style.height = rand(50, 100) + "px";
        let r = rand(0, 255);
        let g = rand(0, 255);
        let b = rand(0, 255); 
        block.style.background = `rgb(${r}, ${g}, ${b})`;
        block.style.left = rand(0, 80) + '%';
        block.style.top = rand(0, 80) + '%';

        block.onclick = function () {
            this.innerText = "Hello";
        }

        document.body.appendChild(block);
    }
}

function rand(start, end) {
    return Math.round((end - start) * Math.random() + start);
}

function search(value) {
    console.log(value);
}