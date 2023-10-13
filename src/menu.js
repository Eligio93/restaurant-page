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
}
]
const createMenu=function(){
    let menuButton=document.getElementById("menu");
    menuButton.style.borderTop="2px solid var(--secondary-color)";
    menuButton.style.borderBottom="2px solid var(--secondary-color)";
    let content=document.getElementById("content");
    let menuPage=document.createElement("div");
    menuPage.id="menu-page";
    
}
