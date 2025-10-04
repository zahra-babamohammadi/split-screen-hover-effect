const splitLeft=document.querySelector('.left');
const splitRight=document.querySelector('.right');
const container=document.querySelector('.container');

splitLeft.addEventListener('mouseenter' , ()=>{
    container.classList.add('hover__left');
});

splitLeft.addEventListener('mouseleave' , ()=>{
    container.classList.remove('hover__left');
});

splitRight.addEventListener('mouseenter' , ()=>{
    container.classList.add('hover__right');
});

splitRight.addEventListener('mouseleave' , ()=>{
    container.classList.remove('hover__right');
});