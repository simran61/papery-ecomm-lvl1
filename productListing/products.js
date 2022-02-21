// slider component from COMPONENT LIBRARY
const slider= document.querySelector('.rangeSlider');
const value= document.querySelector('.value');

value.innerText= slider.value;

slider.oninput = function(){
    value.innerText=this.value
}

// rating component from COMPONENT LIBRARY
var star1= document.querySelector('.star1');
var star2= document.querySelector('.star2');
var star3= document.querySelector('.star3');
var star4= document.querySelector('.star4');
var star5= document.querySelector('.star5');
var rating_desc= document.querySelector('.rating_desc')

star1.addEventListener('click',()=>{
    star1.style.color='#72A499';
    star2.style.color='grey';
    star3.style.color='grey';
    star4.style.color='grey';
    star5.style.color='grey';
    rating_desc.innerText='Products with 1 star';
})

star2.addEventListener('click',()=>{
    star1.style.color='#72A499';
    star2.style.color='#72A499';
    star3.style.color='grey';
    star4.style.color='grey';
    star5.style.color='grey';
    rating_desc.innerText='Products with and below 2 stars';
})

star3.addEventListener('click',()=>{
    star1.style.color='#72A499';
    star2.style.color='#72A499';
    star3.style.color='#72A499';
    star4.style.color='grey';
    star5.style.color='grey';
    rating_desc.innerText='Products with and below 3 stars';
})

star4.addEventListener('click',()=>{
    star1.style.color='#72A499';
    star2.style.color='#72A499';
    star3.style.color='#72A499';
    star4.style.color='#72A499';
    star5.style.color='grey';
    rating_desc.innerText='Products with and below 4 stars';
})

star5.addEventListener('click',()=>{
    star1.style.color='#72A499';
    star2.style.color='#72A499';
    star3.style.color='#72A499';
    star4.style.color='#72A499';
    star5.style.color='#72A499';
    rating_desc.innerText='Products with and below 5 stars';
})
