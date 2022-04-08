    
    const contentArr = Array.from(document.getElementsByClassName('product-cont'));
    const overlay = document.querySelectorAll('.overlay-hov');
    const buttonHov = document.querySelectorAll('.btn-hov')

    function clickHoveron(){   

    for (content of contentArr){
        this.addEventListener('click' , function(){ 
            // this.removeChild(this.children[1])            
            overlay.forEach(item =>{                
            if(item.style.display ==='none'){
                item.style.display ='block'
            }  
             else{
                item.style.display ='block' 
             }                       
            })

            buttonHov.forEach(button =>{
                button.classList.remove('mt-5' , 'btn-lg')
            }) 
            
        })                                 
                                                                
    }
};


function clickHoveroff(){
    overlay.forEach(div => {
        div.addEventListener('click' , function(){
            if (div.style.display ==='block'){
                delete div.style.display['block']                
            }
            
            console.log(div);
        })
    })
}








document.addEventListener("DOMContentLoaded" , clickHoveron)
document.addEventListener("DOMContentLoaded" , clickHoveroff)


