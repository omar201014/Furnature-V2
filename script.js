// form Valdiation // 

const myForm = document.getElementById('form')

myForm.addEventListener('input' , (e) =>{
   
    switch(e.target.id){

        case 'user_name':
         nameValdation(e.target)
        break;

        case 'user_mail':
        emailValidation(e.target)
        break;

        case 'user_password':
        passValidation(e.target)
        break;
    }    
})

   // name valdiate through this function //

function nameValdation(input){

    const inputText = input.value.trim()                      //using .trim() for space check //
    if (inputText.length <3) 
        showError(input, "enter a valid name");
    else 
        removeError(input);
}

   // email valdiate through this function // 

function emailValidation(input){
    // indicate our regExp //
    const regularExpression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    // console.log(regularExpression.test(input.value));
    // indicate our condition //
    if (regularExpression.test(input.value) == true)
        removeError(input);

   else 
        showError(input, "enter a valid email address");
}

    // password validate through this function // 

function passValidation(input){    
    // indicate our regExp
    const passRegExp = /^(()|((?=.*[0-9]))|((?=.*[0-9])))(?=.{8,})/
    // console.log(passRegExp.test(input.value));
    // indicate our condition //
    if(passRegExp.test(input.value) == false)
        showError(input , "your password must be at least 8 character or numbers");
    else
        removeError(input);    
}

function showError(myInput , msg){
    const error = myInput.nextElementSibling;
     error.innerHTML = msg ;   
    error.classList.remove('d-none')
    error.classList.add('d-block')
    error.classList.add('text-danger')
}

function removeError(myInput){
    const error = myInput.nextElementSibling;
    error.classList.add('d-none')
    
}