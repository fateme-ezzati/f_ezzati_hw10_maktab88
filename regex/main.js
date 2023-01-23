let registerForm = document.getElementById('registerForm')

registerForm.onsubmit = function(e) {
    e.preventDefault()
    let inputs = document.getElementsByTagName('input')
    let firstname_err = document.getElementsByClassName('firstname_err')[0]
    let lastname_err = document.getElementsByClassName('lastname_err')[0]
    let email_err = document.getElementsByClassName('email_err')[0]
    let psw_err = document.getElementsByClassName('psw_err')[0]
    let psw_repeat_err = document.getElementsByClassName('psw_repeat_err')[0]

    firstname_err.innerText = ''
    lastname_err.innerText = ''
    email_err.innerText = ''
    psw_err.innerText = ''
    psw_repeat_err.innerText = ''

    if(!inputs.firstname.value.trim()){
        console.log(inputs.firstname.value)
        firstname_err.innerText = 'please fill firstname input!'
    }

    if(!inputs.lastname.value.trim()){
        lastname_err.innerText = 'please fill lastname input!'
    }

    if(!inputs.email.value.trim()){
        email_err.innerText = 'please fill email input!'
    }

    if(!inputs.psw.value.trim()){
        psw_err.innerText = 'please fill password input!'
    }

    if(!inputs.psw_repeat.value.trim()){
        psw_repeat_err.innerText = 'please fill repeat password input!'
    }


    // var myregex = new Regex(@"^[\u0600-\u06FF]+$");
    let nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/

};
