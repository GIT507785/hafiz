burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navlist=document.querySelector('.nav-list')

burger.addEventlistener('click', ()=>{
rightNav.classList.toggle('v-class-resp');
navList.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

});