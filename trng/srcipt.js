// асинхронный запрос
function getDates() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "GET", // по умолчанию get
            url: "https://www.dnd5eapi.co/api/classes/",
           // data: "", -данные для отправки (POST, PATCH, PUT)
           success(data) {
               resolve(data);
           },
           error(err) { 
               reject(err);
           } 
        });
     });
}
getDates().then(
    (data) => {
        console.log(data);
        // let div = document.creatElement("div"); - создаёт тег div
        // document.body.appendChild(<element>); - добавляем созданный элемент в тег body
        // $("div > a + p") = document.jquerySelectorAll("div > a + p")
        // div.className = "myCLass myClass2"
    },
    (err) => {
        console.log(err);
    }
);
function showOverlay(){
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.remove("hidden");
}
function hideOverlay(){
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.add("hidden");
}
let users = [
    {
      "id": 1,
      "name": "Vasya"  
    },
    {
        "id": 2,
        "name": "Kolya"
    }
];
for(let user of users){
    let div = document.createElement("div");
    div.innerText = user.id + " " + user.name;
    div.onclick = () => {
        let username = document.getElementById("username");
        username.innerText = user.name;
        showOverlay();
    }
    document.body.appendChild(div);
}

// <video controls="">
//  <source src="link_to_video" />
//</video>
let video = document.createElement("video");
video.controls = true;
let source = document.createElement("source");
source.src = "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
video.appendChild(source);
document.body.appendChild(video);