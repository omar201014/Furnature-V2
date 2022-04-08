    
    const contentArr = Array.from(document.getElementsByClassName('product-cont'));
    const overlay = document.querySelectorAll('.overlay-hov');
    const buttonHov = document.querySelectorAll('.btn-hov')

    function clickHoveron(){   

    for (content of contentArr){
        content.addEventListener('click' , function(){ 
                        
            overlay.forEach(item =>{                
            item.style.display ='block';  
                                    
            })

            buttonHov.forEach(button =>{
                button.classList.remove('mt-5' , 'btn-lg')
            }) 

            content.childN
        })
          
                       
                                                                
    }
};








document.addEventListener("DOMContentLoaded" , clickHoveron)
// document.addEventListener("DOMContentLoaded" , clickHoveroff)


