let registerbutton = document.getElementById("registerbutton");
let leftbox = document.getElementById("leftbox");
let login = document.getElementById("loginbuttonreg");
let middlebox = document.getElementById("middlebox");

registerbutton.addEventListener("click", ()=>{
  leftbox.style.display="none";
  middlebox.style.display="flex";
});



login.addEventListener("click", ()=>{
  middlebox.style.display="none";
  leftbox.style.display="flex";
});