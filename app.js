    
    const cards = document.getElementById('cards')
    

    cards.addEventListener('click' , (event)=>{
        event.target.closest('figure').lastElementChild.classList.toggle('overlay-click')
    })





    



