const createHome=function(){
    let homeButton=document.getElementById("home");
    homeButton.style.borderTop="2px solid var(--secondary-color)";
    homeButton.style.borderBottom="2px solid var(--secondary-color)";
    let content=document.getElementById("content");
    let homeBackground=document.createElement("div");
    homeBackground.id="home-background";
    let homeText=document.createElement("h2");
    homeText.textContent="Welcome to Truth Mixology and Kitchen, where every sip and bite tells a story.Discover the perfect blend of handcrafted cocktails and delectable dishes that tantalize your taste buds. Join us on a journey of flavors, where authenticity and creativity meet in perfect harmony."
    homeBackground.appendChild(homeText);
    content.appendChild(homeBackground);
}

export default createHome;