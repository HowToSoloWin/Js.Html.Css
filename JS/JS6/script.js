 let timerID = 0;

function search(value) {
    clearInterval(timerID);
    timerID = setTimeout(() =>{
        sendToServer(value);
    }, 1000);
}

function sendToServer(value) {
    console.log("send to server: ", value);
}

//////////////////////////
console.log(2 == "2"); // true
console.log(3 === 3); // true
console.log(2 === "2"); // false

///////////////// !==

const jsonObj = `{
    "name": "Vasya",
    "age": 25,
    "isMale": true,
    "marks": [1, 2, 5, 7],
    "passport": {
        "number": "1234",
        "reg_date": "20/11/2017"
    }
}`;

let jsObj = {
    name: "Vasya",
    age: 25,
    isMale: true
};

// сериализация JSON.
let str = JSON.stringify(jsObj);
console.log(str);
// десереализация из JSON.
let s = JSON.parse(jsonObj);
s.marks.push(10);
console.log(s);

// АСИНХРОННЫЕ ЗАПРОСЫ
// пример
let div = $("#myID")[0]; // document.getElementById("myID");
div.innerText = "Hello";
$.ajax({
    method: "GET", // GET по умолчанию, если свойство method не указано
    url: "https://www.nbrb.by/api/exrates/rates/292",
    // data: {} - тело запроса (POST, PUT, PATCH)
    // success - сработает автоматически, если запрос
    // прошёл успешно
    success(data) {
        // data - данные, которые прислал сервер
        console.log(data.Cur_Name);
    },
    // error - вызывается автоматически, если
    // запрос завершился ошибкой
    error(x, text) {
        console.log(text);
    }
});

// 298 - RUB
// 145 - USD
// 292 - EUR

function getRate(currencyID) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://www.nbrb.by/api/exrates/rates/${currencyID}`,
            success(data) {
                resolve(data);
            },
            error(x, text) {
                reject(text);
            }
        });
    });
}

let rateManager = {
    showRate(currencyID, htmlID) {
        getRate(currencyID).then(
            (data) => {
                $("#" + htmlID)[0].innerText = data.Cur_OfficialRate * data.Cur_Scale;
            },
            (err) => {
                console.log(err);
            },
        )
    }
};

// USD
/*  getRate(145).then(
    (data) => {
        $("#usd")[0].innerText = data.Cur_OfficialRate * data.Cur_Scale;        
    }, // resolve
    (err) => {
        console.log(err);
    }, // reject
);
// EUR
getRate(292).then(
    (data) => {
        $("#eur")[0].innerText = data.Cur_OfficialRate * data.Cur_Scale;        
    }, // resolve
    (err) => {
        console.log(err);
    }, // reject
);
// RUB
getRate(298).then(
    (data) => {
        $("#rub")[0].innerText = data.Cur_OfficialRate * data.Cur_Scale;        
    }, // resolve
    (err) => {
        console.log(err);
    }, // reject
);
 */

 rateManager.showRate(145, "usd");
 rateManager.showRate(292, "eur");
 rateManager.showRate(298, "rub");
 // получаем список всех валют.

 $.ajax({
    url: "https://www.nbrb.by/api/exrates/currencies",
    success(data) {
        let select = $("#currencies")[0];
        let now = new Date(); // now - текущая дата
        for (let currency of data) {
            let endDate = new Date(currency.Cur_DateEnd);
            if (endDate.getTime() < now.getTime()){
                // игнорируем
                continue;
            }
            let option = document.createElement("option");
            option.innerText = currency.Cur_Name;
            option.value = currency.Cur_ID;
            select.appendChild(option);
        }
    },
    error(x, text) {
        console.log(text);
    }
 }); 