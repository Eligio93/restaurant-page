import createHome from "./home";
import createMenu from "./menu";
let homeButton=document.getElementById("home");
let menuButton=document.getElementById("menu");
let contactsButton=document.getElementById("contacts");
let content=document.getElementById("content");
createHome();
homeButton.className="active";
homeButton.addEventListener("click",function(){
    homeButton.className="active";
    menuButton.className="inactive";
    contactsButton.className="inactive"
    content.innerHTML="";
    createHome();
});
menuButton.addEventListener("click",function(){
    homeButton.className="inactive";
    menuButton.className="active";
    contactsButton.className="inactive"
   
    content.innerHTML="";
   createMenu();
})

