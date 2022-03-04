
// selection part
const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();

});
const sendData = (count,successRate) =>{
    if(count==successRate){
        alert("Registration Successfully Completed!!");
    }
}
// form submit Success Message
const SuccessMsg = () =>{
    let formControl = document.getElementsByClassName('form-control');
   var count = formControl.length -1;
    for(var i =0;i<formControl.length;i++){
        if(formControl[i].className=="form-control success"){
            var successRate = 0+i;
            sendData(count,successRate);
        }
        else{
            return false;
        }
    }
}
// mail validation function
const isEmail = (emailValue) =>{
    var atSymbol = emailValue.indexOf('@');
    if(atSymbol<1) return false;
    var dot = emailValue.lastIndexOf('.');
    if(dot<=atSymbol+3) return false;
    if(dot==emailValue.legnth-1) return false;
    return true;
}
function validateInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
   // username validation
    if(usernameValue==""){
        setErrorMsg(username,'username cannot be null');
    }
    else if(usernameValue.length<2){
        setErrorMsg(username,'username min 3 char');
    }
    else{
        setSuccessMsg(username);
    }

    // mail validation
    if(emailValue==""){
        setErrorMsg(email,'email cannot be null');
    }
    else if(!isEmail(emailValue)){
        setErrorMsg(email,'email Not valide');
    }
    else{
        setSuccessMsg(email);
    }
// password validation
if(passwordValue==""){
    setErrorMsg(password,'password cannot be null');
}
else if(passwordValue.length<=5){
    setErrorMsg(password,'password min 6 char');
}
else{
    setSuccessMsg(password);
}

//c password validation
if(cpasswordValue==""){
    setErrorMsg(cpassword,'confirm password cannot be null');
}
else if(cpasswordValue!==passwordValue){
    setErrorMsg(cpassword,'confirm password doesnot matched');
}
else if(cpasswordValue.length<=5){
    setErrorMsg(cpassword,'Confirm password min 6 char');
}
else{
    setSuccessMsg(cpassword);
}


// phone number validation
if(phoneValue==""){
    setErrorMsg(phone,'phone cannot be null');
}
else if(phoneValue.length<=10){
    setErrorMsg(phone,'phone min 11 char');
}
else{
    setSuccessMsg(phone);
}
SuccessMsg();
    function setErrorMsg(input,msg){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error ";
        small.innerHTML = msg;
    }
    function setSuccessMsg(input){
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
}