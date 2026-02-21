// Login system with saved password
if(!localStorage.getItem("adminPass")){
localStorage.setItem("adminPass","1234");
}

// Redirect protection
if(window.location.pathname.includes("dashboard.html")){
if(localStorage.getItem("loggedIn")!=="true"){
window.location.href="index.html";
}
}

// Login
function login(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass===localStorage.getItem("adminPass")){
localStorage.setItem("loggedIn","true");
window.location.href="dashboard.html";
}else{
document.getElementById("error").innerText="Wrong Login!";
}
}

// Logout
function logout(){
localStorage.removeItem("loggedIn");
window.location.href="index.html";
}

// WiFi Toggle
function toggleWiFi(){
let status=document.getElementById("wifiStatus");
let btn=document.getElementById("wifiBtn");

if(status.innerText==="ON"){
status.innerText="OFF";
status.style.color="red";
btn.innerText="Turn ON";
}else{
status.innerText="ON";
status.style.color="green";
btn.innerText="Turn OFF";
}
}

// Dark Mode
function toggleTheme(){
document.body.classList.toggle("dark");
}

// Change Password
function changePassword(){
let newPass=document.getElementById("newPass").value;
if(newPass.length>=4){
localStorage.setItem("adminPass",newPass);
alert("Password Changed!");
}else{
alert("Password must be 4+ characters");
}
}

// Real Public IP Auto Detect
fetch("https://api.ipify.org?format=json")
.then(res=>res.json())
.then(data=>{
if(document.getElementById("ipAddress")){
document.getElementById("ipAddress").innerText=data.ip;
}
});

// Connected Devices Simulation
let devices=["Samsung A34","Realme C55","HP Laptop","iPhone 13","Smart TV"];
if(document.getElementById("deviceList")){
devices.forEach(d=>{
let li=document.createElement("li");
li.innerText=d;
document.getElementById("deviceList").appendChild(li);
});
}

// Internet Speed Fake Monitor Animation
if(document.getElementById("speed")){
setInterval(()=>{
let randomSpeed=(Math.random()*100).toFixed(2);
document.getElementById("speed").innerText=randomSpeed+" Mbps";
},2000);
}
// Section Switcher
function showSection(sectionId){
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display="none");
    document.getElementById(sectionId).style.display="block";
}

// Add Random Device
function addDevice(){
    let randomDevices = ["Oppo A17","Dell Laptop","Vivo Y21","Xiaomi Note","iPad"];
    let device = randomDevices[Math.floor(Math.random()*randomDevices.length)];
    
    let li = document.createElement("li");
    li.innerText = device;
    document.getElementById("deviceList").appendChild(li);
}
