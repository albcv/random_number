document.addEventListener('DOMContentLoaded', function(){


document.querySelector('button').addEventListener('click', function(){

    // Número: 00000-99999 (100,000 posibilidades)
    const numero = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    
    // Serie: 000-999 (1,000 posibilidades)  
    const serie = Math.floor(Math.random() * 1000).toString().padStart(3, '0');


    const p = document.querySelector('p');
    p.innerHTML = 'Número:   <span>'+numero+
    '</span><br><br>Serie:   <span>'+serie+'</span>';

    

});




});




