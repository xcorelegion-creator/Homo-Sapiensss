function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "admin" && password === "12345") {
        localStorage.setItem("login", "true");
        window.location.href = "home.html";
    } else {
        message.style.color = "red";
        message.textContent = "Username atau password salah.";
    }
}

function cekLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
