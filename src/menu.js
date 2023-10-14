const menu=[{
    id:"Entree",
    dish:["Charcuterie Board","Mini Tapas Selection","Mixed Entree"]
},{
    id:"Mains",
    dish:["Pork Ribs","300gr Angus Steak","Chicken Club Sandwich","Wagyu Burger","Margherita Pizza"]
},{
    id:"Desserts",
    dish:["Brownies","Tiramisu","Cheesecake"]
},{
    id:"Sides",
    dish:["Fries","Roasted Potatoes","Sweet Potatoes"]
},{
    id:"Cocktails",
    dish:["Negroni","Old Fashioned","Mojito","Mocktail"]
}]

const createMenu=function(){
    let content=document.getElementById("content");
    let menuPage=document.createElement("div");
    menuPage.id="menu-page";
    for (let i=0;i<menu.length;i++){
        let menuHeader=document.createElement("div");
        menuHeader.className="menu-header";
        let title=document.createElement("h3");
        title.textContent=menu[i].id;
        menuHeader.appendChild(title);
        menuPage.appendChild(menuHeader);
        console.log(menu[i]);
        let unList=document.createElement("ul");
        for(let j=0;j<menu[i].dish.length;j++){
            console.log(menu[i].dish[j]);
            let li=document.createElement("li");
            li.textContent=menu[i].dish[j];
            unList.appendChild(li);
            menuPage.appendChild(unList);
            console.log(menu[i].dish[j]);
        }

    }
    content.appendChild(menuPage)

}
export default createMenu;


