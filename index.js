let burger = document.querySelector('.burger');
let burger__menu = document.querySelector('.burger__menu');
let body = document.querySelector('.body');
let bot_btn =  document.querySelector('.bot-btn');
burger.addEventListener('click',()=>{
    burger__menu.classList.add('active');
    body.classList.add('active');
});
bot_btn.addEventListener('click',()=>{
    bot_btn.classList.toggle('active');
});

document.addEventListener('click', (e)=>{
    console.log(e.target);
    if(!e.target.closest(".burger")){
        burger__menu.classList.remove('active');
        body.classList.remove('active');
    }
    if(!e.target.closest(".bot-btn")){
        bot_btn.classList.remove('active');
    }
    
    if(e.target.closest(".burger__close")){
        burger__menu.classList.remove('active');
        body.classList.remove('active');
    }
})