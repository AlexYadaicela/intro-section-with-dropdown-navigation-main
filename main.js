function mobileNavToggle(){
    const primaryNav = document.querySelector("nav");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const overlay = document.querySelector(".overlay"); 
    navToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");
        
        if(visibility === "false"){
            overlay.style.display = "block"; 
            primaryNav.setAttribute("data-visible", true); 
            navToggle.setAttribute("aria-expanded", true);
        }else if(visibility ==="true"){
            primaryNav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
            overlay.style.display = "none"; 
        }
    });    
}


function dropdownToggle(){
    const dropDownToggle = document.querySelectorAll(".btn-drowdown")
    const dropdownMenu = document.querySelectorAll(".dropdown-menu");

    for(let index = 0; index < dropDownToggle.length; index++){
        
        dropDownToggle[index].addEventListener("click", () =>{
            const visibility = dropdownMenu[index].getAttribute("data-visible"); 
            if(visibility === "false"){
                dropdownMenu[index].setAttribute("data-visible", true); 
                dropDownToggle[index].setAttribute("aria-expanded", true);
            }else if(visibility ==="true"){
                dropdownMenu[index].setAttribute("data-visible", false); 
                dropDownToggle[index].setAttribute("aria-expanded", false);
            }

        });
    }
}



mobileNavToggle(); 
dropdownToggle(); 