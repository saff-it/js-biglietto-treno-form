

const calcButton = document.getElementById("calc-button");

calcButton.addEventListener('click', function() {
    const userDistance = parseInt( document.getElementById('user-km-num').value );
    const userAge = parseInt( document.getElementById('user-age').value );
    let ticketPrice = userDistance * 0.26;

    console.log(userDistance, userAge, ticketPrice);


    if ( isNaN(userDistance) == true ) {
        console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero di KM che intendi percorrere');
    
    } else if ( isNaN(userAge) == true ) {
        console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero dei tuoi anni');
    
    } else {
    
        if (userAge < 18) {
            ticketPrice = (ticketPrice - ( (ticketPrice * 15) / 100) );
            
            
        } else if (userAge > 65) {
            ticketPrice = (ticketPrice - ( (ticketPrice * 35) / 100) );
        }
    
        document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed( 2 ) + '€';
    }    

});













