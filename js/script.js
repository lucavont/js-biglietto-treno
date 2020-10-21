var yourAge = document.getElementById('fascia-eta');
var yourKm = document.getElementById('km-da-percorrere');
var underAge = document.getElementById('under-age');
var overAge = document.getElementById('over-age');
var ticketPrice = yourKm * 0.21;
var sconto20 = (ticketPrice * 20) / 100;
var sconto40 = (ticketPrice * 40) / 100;

if (underAge) {
    ticketPrice = ticketPrice - sconto20;
} else if (overAge) {
    ticketPrice = ticketPrice - sconto40;
} else(ticketPrice)

console.log(ticketPrice.toFixed(2));


document.getElementById("prezzo").innerHTML = ticketPrice.toFixed(2) + '€';