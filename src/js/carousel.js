class Carousel{
  
    constructor(){
        this.slides = document.querySelectorAll('.hero__slide')
  
        this.setup()
    }
  
    setup() {
        let prevButton = document.querySelector('.slide-controls__previous')
        let nextButton = document.querySelector('.slide-controls__next')
        let pauseButton = document.querySelector('.slide-controls__pause')

        this.autoAdvance()  
        prevButton.addEventListener(`click`, this.returnSlide)
        nextButton.addEventListener(`click`, this.advanceSlide)
        pauseButton.addEventListener(`click`, this.pauseSlideshow)
    }

    autoAdvance = () => {
        
    }
  
    returnSlide = () => {
        
    }

    advanceSlide = () => {
        for(let i=0;i<this.slides.length;i++){
            if(!this.slides[i].classList.contains('hidden')){
                if(i===this.slides.length-1){
                    gsap.to(this.slides[i],{
                        x:'-100%',
                        duration: 1.6,
                        ease: "sine.inOut"
                    })
                    this.slides[1].classList.toggle('hidden')
                    gsap.from(this.slides[0],{
                        x:"100%",
                        duration: 1.6,
                        ease: "sine.inOut"
                    })
                    gsap.to(this.slides[0],{
                        height: "45rem",
                        duration: 0.01,
                    })
                    setTimeout(() => {  this.slides[i].classList.toggle('hidden') }, 1600)
                }
                else{
                    gsap.to(this.slides[i],{
                        x:'-100%',
                        duration: 1.6,
                        ease: "sine.inOut"
                    })
                    this.slides[i+1].classList.toggle('hidden')
                    gsap.from(this.slides[i+1],{
                        x:"100%",
                        duration: 1.6,
                        ease: "sine.inOut"
                    })
                    gsap.to(this.slides[i+1],{
                        height: "45rem",
                        duration: 0.01,
                    })
                    setTimeout(() => {  this.slides[i].classList.toggle('hidden') }, 1600)
                }
            }
        }
    }

    pauseSlideShow = () => {

    }
}

new Carousel