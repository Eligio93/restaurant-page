import createHome from "./home";
import createMenu from "./menu";
import createContacts from "./contacts";

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
});
contactsButton.addEventListener("click",function(){
    homeButton.className="inactive";
    menuButton.className="inactive";
    contactsButton.className="active";
    content.innerHTML="";
    createContacts();

})

