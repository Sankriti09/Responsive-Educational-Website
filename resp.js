burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})

function openpage(){
    let file = confirm("Do you want to continue?");
    if(file==true){
        location("Thanks for your concern");
    }else{
        alert("Try again later");
    }
}