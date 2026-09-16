const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "sruthi@gmail.com" && password === "2404") {
        alert("Login Successful!");

        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password!");
    }
});