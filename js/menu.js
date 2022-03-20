let menuBtn = document.querySelector(".navbar_menu_btn")
menuBtn.addEventListener("click", event=>{
    event.preventDefault()
    let menu = document.querySelector(".menu")
    let menuElement = document.querySelector(".navbar_menu_btn_element")
    if (menuElement.classList.contains("active")){
        menuElement.classList.remove("active")
        menu.style.animationName="menu_animation_back"
        setTimeout(() => {menu.style.display = "none"},600) 
    } else {
        menu.style.animationName="menu_animation"
        menuElement.classList.add("active")
        menu.style.display = "block"
    }
})




