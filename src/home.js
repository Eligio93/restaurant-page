const createHome=function(){
    let content=document.getElementById("content");
    let homePage=document.createElement("div");
   homePage.id="home-page";
    let homeText=document.createElement("h2");
    homeText.textContent="Welcome to Truth Mixology and Kitchen, where every sip and bite tells a story.Discover the perfect blend of handcrafted cocktails and delectable dishes that tantalize your taste buds. Join us on a journey of flavors, where authenticity and creativity meet in perfect harmony."
    homePage.appendChild(homeText);
    content.appendChild(homePage);
}

export default createHome;