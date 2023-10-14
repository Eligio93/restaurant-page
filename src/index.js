import createHome from "./home";
import createMenu from "./menu";
let homeButton=document.getElementById("home");
let menuButton=document.getElementById("menu");
let contactsButton=document.getElementById("contacts");
let content=document.getElementById("content");
createHome();
homeButton.addEventListener("click",function(){
    
    content.innerHTML="";
    createHome();
});
menuButton.addEventListener("click",function(){
   
    content.innerHTML="";
   createMenu();
})

