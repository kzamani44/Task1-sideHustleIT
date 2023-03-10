const form = document.getElementById('myForm')
const fname = document.querySelector('.fname')
const mail = document.querySelector('#mail')
const password = document.querySelector('#password')
const phone = document.querySelector('#phone')
const errName = document.querySelector('#errName')
const errMail = document.querySelector('#eeMail')
const errPass = document.querySelector('#eePass')
const errPhone = document.querySelector('#errP')

form.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs();
})

const checkInputs = () => {
    const nameInput = fname.value.trim()
    const mailInput = mail.value.trim()
    const passInput = password.value.trim()
    const phoneNum = phone.value.trim()

    if(nameInput == ''){
        fname.classList.add('error')
        errName.textContent = 'Please enter your name!'
        errName.classList.add('error-msg')

    }
    else{
        fname.classList.remove('error')
        errName.classList.remove('error-msg')
        fname.classList.add('success')
        errName.textContent = ''
    }

    if(mailInput == ''){
        errMsg = document.getElementById('eeMail')
        mail.classList.add('error')
        errMsg.textContent = 'Please enter your email address!'
        errMsg.classList.add('error-msg')
    }
    else{
        mail.classList.remove('error')
        mail.classList.remove('error-msg')
        mail.classList.add('success')
        errMsg.textContent= ''
    }

    if(passInput == ''){
        password.classList.add('error')
        errPass.classList.add('error-msg')
        errPass.textContent = 'Please enter a password!'
    }
    else{
        password.classList.remove('error')
        errPass.classList.remove('error-msg')
        errPass.textContent = ''
        password.classList.add('success')
    }

    if(phoneNum == ''){
        errPhone.classList.add('error-msg')
        phone.classList.add('error')
        errPhone.textContent = 'Please enter your phone number!'
    }else{
        errPhone.classList.remove('error-msg')
        phone.classList.remove('error')
        errPhone.textContent = ''
        phone.classList.add('success')
    }

}