const newuser = document.getElementById("l1");
newuser.addEventListener("click", function () {
    window.location.href = "register.html";
})
let log = document.getElementById("log")
let users = JSON.parse(localStorage.getItem("alluser"))||[];
let now = "";

log.addEventListener("click", function () {
    let na = document.getElementById("un").value;
    let pa = document.getElementById("up").value;
    let found=users.find(user => pa === user.pass && na === user.name)
    if (na != "" && pa != "" && found!== undefined) {
        localStorage.setItem("now", JSON.stringify(found));
        window.location.href = "enter.html";
    }
    else
        alert("שם המשתמש או הסיסמה שגויים")
})
