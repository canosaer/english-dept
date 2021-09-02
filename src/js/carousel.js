class Carousel{
  
    constructor(){
        this.slides = document.querySelectorAll('.hero__slide')
        this.playShow = true
        this.ready = true
        this.pauseButton = document.querySelector('.slide-controls__pause')
  
        this.setup()
    }
  
    setup() {
        let prevButton = document.querySelector('.slide-controls__previous')
        let nextButton = document.querySelector('.slide-controls__next')
        
        this.autoAdvance()
        prevButton.addEventListener(`click`, this.returnSlide)
        nextButton.addEventListener(`click`, this.advanceSlide)
        this.pauseButton.addEventListener(`click`, this.pauseSlideShow)
    }

    findActiveSlide = () => {
        for(let i=0;i<this.slides.length;i++){
            if(!this.slides[i].classList.contains('hidden')){
                return i
            }
        }
    }

    autoAdvance = () => {
        setTimeout(() => {
            if(this.playShow){
                this.advanceSlide()
            }
        }, 5500)
    }

    resetSlides = () =>{
        for(let i=0;i<this.slides.length;i++){
            gsap.to(this.slides[i],{
                x:'0',
                duration: 0.01,
            })
        }
        this.ready = true
    }
  
    returnSlide = () => {
        if(this.ready){
            this.ready = false
            this.playShow = false
            if(this.pauseButton.classList.contains('fa-pause')){
                this.pauseButton.classList.remove('fa-pause')
                this.pauseButton.classList.add('fa-play')
            }

            let activeSlide = this.findActiveSlide()

            if(activeSlide===0){
                let lastSlide = this.slides.length-1
                gsap.to(this.slides[activeSlide],{
                    x:'100%',
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                this.slides[lastSlide].classList.toggle('hidden')
                gsap.from(this.slides[lastSlide],{
                    x:"-100%",
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                gsap.to(this.slides[lastSlide],{
                    height: "45rem",
                    duration: 0.01,
                })
                setTimeout(() => {
                    this.slides[activeSlide].classList.toggle('hidden')
                    this.resetSlides()
                }, 1600)
            }
            else{
                gsap.to(this.slides[activeSlide],{
                    x:'100%',
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                this.slides[activeSlide-1].classList.toggle('hidden')
                gsap.from(this.slides[activeSlide-1],{
                    x:"-100%",
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                gsap.to(this.slides[activeSlide-1],{
                    height: "45rem",
                    duration: 0.01,
                })
                setTimeout(() => {  
                    this.slides[activeSlide].classList.toggle('hidden')
                    this.resetSlides()
                }, 1600)
            }

        }
        
    }

    advanceSlide = (evt) => {
        if(this.ready){
            this.ready = false
            if(evt){
                this.playShow = false
                if(this.pauseButton.classList.contains('fa-pause')){
                    this.pauseButton.classList.remove('fa-pause')
                    this.pauseButton.classList.add('fa-play')
                }
            }
    
            let activeSlide = this.findActiveSlide()
    
            if(activeSlide===this.slides.length-1){
                gsap.to(this.slides[activeSlide],{
                    x:'-100%',
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                this.slides[0].classList.toggle('hidden')
                gsap.from(this.slides[0],{
                    x:"100%",
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                gsap.to(this.slides[0],{
                    height: "45rem",
                    duration: 0.01,
                })
                setTimeout(() => {  
                    this.slides[activeSlide].classList.toggle('hidden')
                    this.resetSlides()
                }, 1600)
            }
            else{
                gsap.to(this.slides[activeSlide],{
                    x:'-100%',
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                this.slides[activeSlide+1].classList.toggle('hidden')
                gsap.from(this.slides[activeSlide+1],{
                    x:"100%",
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                gsap.to(this.slides[activeSlide+1],{
                    height: "45rem",
                    duration: 0.01,
                })
                setTimeout(() => {  
                    this.slides[activeSlide].classList.toggle('hidden')
                    this.resetSlides()
                }, 1600)
            }
    
            if(this.playShow){
                this.autoAdvance()
            }
        }
        
    }

    pauseSlideShow = () => {
        if(this.pauseButton.classList.contains('fa-pause')){
            this.playShow = false
            this.pauseButton.classList.remove('fa-pause')
            this.pauseButton.classList.add('fa-play')
        }
        else{
            this.playShow = true
            this.pauseButton.classList.remove('fa-play')
            this.pauseButton.classList.add('fa-pause')
            this.autoAdvance()
        }
    }
}

new Carousel