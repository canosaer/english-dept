class ContactForm{

    constructor(){
        this.contactForm = document.querySelector('.contact')

        this.setupListeners()
    }

    setupListeners = () => {
        let submitButton = document.querySelector('.contact__send')
        let contactButton = document.querySelector('.summary__contact')

        submitButton.addEventListener('click', this.handleSubmitClick)
        contactButton.addEventListener('click', this.handleContactClick)
    }

    handleSubmitClick = (evt) => {
        evt.preventDefault()

        let firstNameInput = document.querySelector('.contact__input_first-name')
        let lastNameInput = document.querySelector('.contact__input_last-name')
        let emailInput = document.querySelector('.contact__input_email')
        let messageInput = document.querySelector('.contact__input_message')
        let errorEl = document.querySelector('.contact__error')
        let passed = true

        let firstNameResponse = false
        if(firstNameInput.value) firstNameResponse = true

        let lastNameResponse = false
        if(lastNameInput.value) lastNameResponse = true

        let emailResponse = false
        if(emailInput.value) emailResponse = true

        let messageEntered = false
        if(messageInput.value) messageEntered = true
        console.log(messageInput.value)

        
        if(!firstNameResponse || !lastNameResponse || !emailResponse || !messageEntered){
            if(errorEl.classList.contains('invisible')) errorEl.classList.toggle('invisible')
            errorEl.textContent = 'Complete all fields to continue'
            passed = false
        }

        if(emailResponse){
            let emailRE = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,}([-.]\w{2,})*$/
            if(!emailRE.test(emailInput.value)){
                if(errorEl.classList.contains('invisible')) errorEl.classList.toggle('invisible')
                errorEl.textContent = 'Please enter a valid email address'
                passed = false
            }
        }

        if(passed){
            let composeMessage = document.querySelector('.contact__compose-message')
            let successDisplay = document.querySelector('.contact__heading_success')
            let heading = document.querySelector('.contact__heading')

            composeMessage.classList.toggle('hidden')
            successDisplay.classList.toggle('hidden')
            heading.classList.toggle('hidden')
            
            setTimeout(() => {  
                this.contactForm.classList.toggle('hidden')
                composeMessage.classList.toggle('hidden')
                successDisplay.classList.toggle('hidden')
                heading.classList.toggle('hidden')
                this.contactForm.reset()
            }, 1600)
        }

        
        
    }

    handleContactClick = (evt) => {
        if(window.innerWidth >= 500){
            evt.preventDefault()
            this.contactForm.classList.toggle('hidden')
        }
    }

}

new ContactForm