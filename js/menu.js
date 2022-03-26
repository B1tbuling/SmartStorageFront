let menuBtn = document.querySelector(".navbar_menu_btn")
menuBtn.addEventListener("click", event=>{
    event.preventDefault()
    let menu_background = document.querySelector(".menu_background")
    let menu = document.querySelector(".menu")
    let menuElement = document.querySelector(".navbar_menu_btn_element")
    if (menuElement.classList.contains("active")){
        menuElement.classList.remove("active")
        menu_background.style.display = "none"
        menu.style.animationName="menu_animation_back"
        setTimeout(() => {menu.style.display = "none"},600)
    } else {
        menu_background.style.animationName="menu_background_animation"
        menu.style.animationName="menu_animation"
        menuElement.classList.add("active")
        menu_background.style.display = "block"
        menu.style.display = "block"
    }
})


// let menuBtn = document.querySelector(".navbar_menu_btn")
// menuBtn.addEventListener("click", event=>{
//     event.preventDefault()
//     let menu = document.querySelector(".menu")
//     let menuElement = document.querySelector(".navbar_menu_btn_element")
//     if (menuElement.classList.contains("active")){
//         menuElement.classList.remove("active")
//         menu.style.animationName="menu_animation_back"
//         setTimeout(() => {menu.style.display = "none"},600) 
//     } else {
//         menu.style.animationName="menu_animation"
//         menuElement.classList.add("active")
//         menu.style.display = "block"
//     }
// })

