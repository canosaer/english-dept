
class NumberAnimation{
  
  constructor(){

      this.animate()
  }

  animate = () => {

    let cwNumber = {
      element: document.querySelector('.statistics__creative-writing .statistics__animated-number'),
      animatedNumber: 1,
    }
    let phdNumber = {
      element: document.querySelector('.statistics__phd .statistics__animated-number'),
      animatedNumber: 1,
    }
    let majorsNumber = {
      element: document.querySelector('.statistics__undergrad-major .statistics__animated-number'),
      animatedNumber: 1,
    }

    let rings = document.querySelectorAll('.statistics__outer-circle')

    gsap.to(
      cwNumber, {
          duration: 3,
          ease: 'expo.inOut',
          animatedNumber: 4,
          roundProps: 'animatedNumber',
          onUpdate: function() {
              cwNumber.element.textContent = `#${cwNumber.animatedNumber}`
          }
      }
    )

    gsap.to(
      phdNumber, {
          duration: 3,
          ease: 'expo.inOut',
          animatedNumber: 26,
          roundProps: 'animatedNumber',
          onUpdate: function() {
              phdNumber.element.textContent = `#${phdNumber.animatedNumber}`
          }
      }
    )

    gsap.to(
      majorsNumber, {
          duration: 3,
          ease: 'expo.inOut',
          animatedNumber: 41,
          roundProps: 'animatedNumber',
          onUpdate: function() {
              majorsNumber.element.textContent = `#${majorsNumber.animatedNumber}`
          }
      }
    )

    rings.forEach(ring => {
      gsap.from(ring, {
        duration: 4,
        ease: 'expo.inOut',
        borderColor: '#D3D3D3'
      })
    });
      
  }

}

new NumberAnimation