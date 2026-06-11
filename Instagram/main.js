const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("msg");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const passwordValue = document.getElementById("password").value;
    const emailValue = document.getElementById("email").value;

    if (passwordValue === "7777" && emailValue === "guli@gmail.com") {
        msg.textContent = "Siz ro'yxatdan o'tdingiz";
        msg.style.color = "green";
    } else {
        msg.textContent = "Siz noto'g'ri kiritdingiz";
        msg.style.color = "red";
    }
});