(function(){
    const sliderContainer = document.querySelector(".slider-wrapper"),
    slides = document.querySelectorAll(".slider .text"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");
    let sliderIndex = 0;
    let slidewidth = sliderContainer.offsetwidth;
    slides.forEach(slide=>{
        slide.style.width = slidewidth + "px";
    })
    sliderContainer.style.width = slides.length * slidewidth + "px";
    next.addEventListener("click",()=>{
        sliderIndex == sliderContainer.length - 1 ? sliderIndex = 0 : sliderIndex++ ;
        sliderContainer.style.marginRight = - (sliderIndex * slidewidth) + "px";
    })

    prev.addEventListener("click",()=>{
        sliderIndex == 0 ? sliderIndex = slides.length - 1 : sliderIndex-- ;
        sliderContainer.style.marginRight = - (sliderIndex * slidewidth) + "px";
    })
})();