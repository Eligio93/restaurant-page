const createContacts=function(){
    let content=document.getElementById("content");
    let contactsPage=document.createElement("div");
    contactsPage.id="contacts-page";
    let phoneHeader=document.createElement("h3");
    phoneHeader.className="contact-header";
    phoneHeader.textContent="Phone";
    contactsPage.appendChild(phoneHeader);
    let phoneNumber=document.createElement("p");
    phoneNumber.textContent="Tel. +39 080 698 3621";
    contactsPage.appendChild(phoneNumber);
    let hoursHeader=document.createElement("h3");
    hoursHeader.className="contact-header";
    hoursHeader.textContent="Hours";
    contactsPage.appendChild(hoursHeader);
    let hours=document.createElement("p");
    hours.innerHTML="Wed-Mon: 18:00 - 2:00<br>Tue: Closed"
    contactsPage.appendChild(hours);
    let whereHeader=document.createElement("h3");
    whereHeader.className="contact-header";
    whereHeader.textContent="Where to find Us";
    contactsPage.appendChild(whereHeader);
    let map=document.createElement("img")
    map.src="/src/Location.png";
    contactsPage.appendChild(map);
    let address=document.createElement("p");
    address.textContent="Via S. Giacomo, 34, 70014 Conversano BA, Italy";
    contactsPage.appendChild(address);
    content.appendChild(contactsPage);

}
export default createContacts;