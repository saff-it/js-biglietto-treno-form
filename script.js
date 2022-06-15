
const calcButton = document.getElementById("calc-button");

calcButton.addEventListener('click', function() {
    const userDistance = parseInt( document.getElementById('user-km-num').value );
    const userAge = parseInt( document.getElementById('user-age').value );
    let ticketPrice = userDistance * 0.26;
    const ticketFullPrice = userDistance * 0.26;
     

    console.log(userDistance, userAge, ticketPrice);


    if ( isNaN(userDistance) == true ) {
        console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero di KM che intendi percorrere');
    
    } else if ( isNaN(userAge) == true ) {
        console.log('Qualcosa è andato storto; ricarica la pagina ed inserisci il numero dei tuoi anni');
    
    } else {
    
        if (userAge < 18) {
            ticketPrice = (ticketPrice - ( (ticketPrice * 15) / 100) );
            let showDiscount = document.getElementById('ticket-discount').innerHTML += 'invece di ' + ticketFullPrice + '€ ' + 'con lo sconto del 15% per i minorenni';
            
            
        } else if (userAge > 65) {
            ticketPrice = (ticketPrice - ( (ticketPrice * 35) / 100) );
            let showDiscount = document.getElementById('ticket-discount').innerHTML += 'invece di ' + ticketFullPrice + '€ ' + 'con lo sconto del 35% per gli over 65';
        }
    
        document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed( 2 ) + '€';
    }    

});













