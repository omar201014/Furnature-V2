// form Valdiation // 

const myForm = document.getElementById('form')

myForm.addEventListener('input' , (e) =>{
   
    switch(e.target.id){

        case 'user_name':
         nameValdation(e.target)
        break;

        case 'user_mail':

        break;

        case 'user_password':

        break;
    }

    

})


function nameValdation(input){

    const inputText = input.value
    if (inputText.length <3) 
        showError(input , "enter a valid name");
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