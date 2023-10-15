import mapImg from "./Location.png";

let contacts=[{
    header:"Phone",
    info:["Tel. +39 080 698 3621"]
},{
    header:"Hours",
    info:["Wed-Mon: 18:00 - 2:00","Tue: Closed"]
},{
    header:"Where to find us",
    info:["Via S. Giacomo, 34, 70014 Conversano BA, Italy"]
}]

const createContacts=function(){
    let content=document.getElementById("content");
    let contactsPage=document.createElement("div");
    contactsPage.id="contacts-page";
    for(let i=0;i<contacts.length;i++){
        let contactHeader=document.createElement("h3");
        contactHeader.className="contact-header";
        contactHeader.textContent=contacts[i].header;
        contactsPage.appendChild(contactHeader);
        if(contacts[i].header=="Where to find us"){
            let map=document.createElement("img");
            map.src=mapImg;
            contactsPage.appendChild(map);
        }
        for(let j=0;j<contacts[i].info.length;j++){
            let contactInfo=document.createElement("p");
            contactInfo.textContent=contacts[i].info[j];
            contactsPage.appendChild(contactInfo);
        }
       
    }
    content.appendChild(contactsPage);
}
export default createContacts;