sticky_navbar=document.querySelector(".sticky_navbar")
bodyScroll=document.querySelector("html , body")
window.addEventListener("scroll",function(){
    if(bodyScroll.scrollTop >=100){
        sticky_navbar.style.visibility="visible"
        sticky_navbar.classList.remove("animate__animated","animate__slideOutUp")
        sticky_navbar.classList.add("animate__animated","animate__slideInDown")
    }
    else{
        // my_new_nav.style.display="none"
        sticky_navbar.classList.remove("animate__animated","animate__slideInDown")
        sticky_navbar.classList.add("animate__animated","animate__slideOutUp")
    
    }
})









close_icon=document.querySelector(".close_icon")
menu_icon=document.querySelector(".menu_icon")
side_navbar=document.querySelector(".side_navbar")
menu_icon.addEventListener("click",function(){
    menu_icon.style.display="none"
    close_icon.style.display="block"
    side_navbar.style.display="block"
    side_navbar.classList.remove("animate__animated","animate__slideOutUp")
    side_navbar.classList.add("animate__animated","animate__slideInLeft")
})
close_icon.addEventListener("click",function(){
    menu_icon.style.display="block"
    close_icon.style.display="none"
    side_navbar.style.display="none"
    side_navbar.classList.remove("animate__animated","animate__slideInLeft")
    side_navbar.classList.add("animate__animated","animate__slideOutUp")
})

























