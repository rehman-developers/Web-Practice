$('.owl-carousel').owlCarousel({
    // loop:false,
    margin:10,
    nav:false,
    dots:false,
    navText:["<i class='fa-solid fa-less-than'></i>","<i class='fa-solid fa-greater-than'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

document.addEventListener("DOMContentLoaded",function(){

    var dropdown = document.getElementById("dropdown-btn");
    var dropdowncontent = dropdown.nextElementSibling;

    dropdown.addEventListener("click",function()
    {
        dropdowncontent.classList.toggle("show");
    });
});
