// Auto redirect if not logged in
if(window.location.pathname.includes("dashboard.html")){
    if(localStorage.getItem("loggedIn") !== "true"){
        window.location.href = "index.html";
    }
}

function login(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Wrong Username or Password!";
    }
}

function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

function toggleWiFi(){
    let status = document.getElementById("wifiStatus");
    let btn = document.getElementById("wifiBtn");

    if(status.innerText === "ON"){
        status.innerText = "OFF";
        status.style.color = "red";
        btn.innerText = "Turn ON";
    } else {
        status.innerText = "ON";
        status.style.color = "green";
        btn.innerText = "Turn OFF";
    }
}
