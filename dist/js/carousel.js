class Carousel{constructor(){this.prevButton=document.querySelector(".slide-controls__previous"),this.pauseButton=document.querySelector(".slide-controls__pause"),this.nextButton=document.querySelector(".slide-controls__next"),this.setup()}setup=()=>{this.slideIn(),this.prevButton.addEventListener("click",this.returnSlide),this.nextButton.addEventListener("click",this.advanceSlide),this.pauseButton.addEventListener("click",this.pause)};slideIn=()=>{document.querySelectorAll(".hero__slide").forEach((e=>{if(!e.classList.contains("hidden")){e.querySelector(".hero__heading");let t=e.querySelector(".hero__line");e.querySelector(".hero__link");console.log(t),gsap.from(t,{left:"0%",duration:.2,ease:"elastic.inOut"})}}))}}new Carousel;
//# sourceMappingURL=carousel.js.map