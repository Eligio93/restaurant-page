(()=>{"use strict";const e=function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="home-page";let n=document.createElement("h2");n.textContent="Welcome to Truth Mixology and Kitchen, where every sip and bite tells a story.Discover the perfect blend of handcrafted cocktails and delectable dishes that tantalize your taste buds. Join us on a journey of flavors, where authenticity and creativity meet in perfect harmony.",t.appendChild(n),e.appendChild(t)},t=[{id:"Entree",dish:["Charcuterie Board","Mini Tapas Selection","Mixed Entree"]},{id:"Mains",dish:["Pork Ribs","300gr Angus Steak","Chicken Club Sandwich","Wagyu Burger","Margherita Pizza"]},{id:"Desserts",dish:["Brownies","Tiramisu","Cheesecake"]},{id:"Sides",dish:["Fries","Roasted Potatoes","Sweet Potatoes"]},{id:"Cocktails",dish:["Negroni","Old Fashioned","Mojito","Mocktail"]}];let n=[{header:"Phone",info:["Tel. +39 080 698 3621"]},{header:"Hours",info:["Wed-Mon: 18:00 - 2:00","Tue: Closed"]},{header:"Where to find us",info:["Via S. Giacomo, 34, 70014 Conversano BA, Italy"]}];let a=document.getElementById("home"),i=document.getElementById("menu"),d=document.getElementById("contacts"),c=document.getElementById("content");e(),a.className="active",a.addEventListener("click",(function(){a.className="active",i.className="inactive",d.className="inactive",c.innerHTML="",e()})),i.addEventListener("click",(function(){a.className="inactive",i.className="active",d.className="inactive",c.innerHTML="",function(){let e=document.getElementById("content"),n=document.createElement("div");n.id="menu-page";for(let e=0;e<t.length;e++){let a=document.createElement("h3");a.className="menu-header",a.textContent=t[e].id,n.appendChild(a);let i=document.createElement("ul");for(let a=0;a<t[e].dish.length;a++){let d=document.createElement("li");d.textContent=t[e].dish[a],i.appendChild(d),n.appendChild(i)}}e.appendChild(n)}()})),d.addEventListener("click",(function(){a.className="inactive",i.className="inactive",d.className="active",c.innerHTML="",function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="contacts-page";for(let e=0;e<n.length;e++){let a=document.createElement("h3");if(a.className="contact-header",a.textContent=n[e].header,t.appendChild(a),"Where to find us"==n[e].header){let e=document.createElement("img");e.src="/src/Location.png",t.appendChild(e)}for(let a=0;a<n[e].info.length;a++){let i=document.createElement("p");i.textContent=n[e].info[a],t.appendChild(i)}}e.appendChild(t)}()}))})();