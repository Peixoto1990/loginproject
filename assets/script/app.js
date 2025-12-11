import data from "../../data.json" with { type: "json" };

const formLogin = document.getElementById("loginForm");
const divErrorEmail = document.getElementById("errorEmail");
const divErrorPassword = document.getElementById("errorPassword");
const resetButton = document.getElementById("resetButton");

formLogin.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log(ev);
    clearErrorMessages();
    const user = {
        email: ev.currentTarget.elements.email.value,
        password: ev.currentTarget.elements.password.value
    } 
    const userData = data.users;
    if (isUser(user, userData)) {
        const validPassword = isCorrectPassword(user, userData);
        if (validPassword) {
            loginUser(user);
        } else {
            divErrorPassword.classList.add("inputContainerErrorMessage");
            console.log("Senha inválida.");
            return;
        }
    } else {
        divErrorEmail.classList.add("inputContainerErrorMessage");
        console.log("Usuário inválido.");
        return;
    }
})

function isCorrectPassword(user, userData) {
    return userData.find((User) => User.email === user.email && User.password === user.password) ? true : false;
}

function isUser(user, userData) {
    return userData.find((User) => User.email === user.email) ? true : false;
}

function loginUser(user) {
    console.log(user);
    if (isMobileScreen()) {
        formLogin.classList.add("loginFormMobileLoading");
    } else {
        const capaForm = document.querySelector("#capaForm > div");
        capaForm.classList.add("capaFormLoading");
    }

    setTimeout(function(){window.open("https://www.github.com/Peixoto1990", "_self")}, 2000);
}

resetButton.addEventListener("click", clearErrorMessages);

function clearErrorMessages() {
    if (divErrorEmail.classList.contains("inputContainerErrorMessage")) {
        divErrorEmail.classList.remove("inputContainerErrorMessage");
    }

    if (divErrorPassword.classList.contains("inputContainerErrorMessage")) {
        divErrorPassword.classList.remove("inputContainerErrorMessage");
    }
}

function isMobileScreen() {
    return window.innerWidth < 768;
}