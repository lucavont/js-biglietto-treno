var yourAge = prompt('Inserisci la tua età')
var yourKm = prompt('Inserisci la quantità di km da percorrere')
var ticketPrice = yourKm * 0.21;
var sconto20 = (ticketPrice * 20) / 100;
var sconto40 = (ticketPrice * 40) / 100;

if (yourAge < 18) {
    ticketPrice = ticketPrice - sconto20;
} else if (yourAge > 65) {
    ticketPrice = ticketPrice - sconto40;
} else(ticketPrice)

console.log(ticketPrice.toFixed(2));


document.getElementById("prezzo").innerHTML = ticketPrice.toFixed(2) + '€';