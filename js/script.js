var genBtnEl = document.getElementById('genera-btn');

genBtnEl.addEventListener('click', function() {
    var nameSur = document.getElementById('nome-cognome');
    var distance = document.getElementById('km-da-percorrere');
    var ageDiscount = document.getElementById('fascia-eta');
    var sconto20 = distance.value * 0.2;
    var sconto40 = distance.value * 0.4;
    var underAge = document.getElementById('under-age').checked;

    var ticketName = document.getElementById('nameSurname')
    ticketName.innerHTML = nameSur.value;
    document.getElementById('ticket').style.display = 'block';

    var ticketOffer = document.getElementById('discountCode');
    ticketOffer.innerHTML = ageDiscount.value;

    if (ageDiscount = 'under-age') {
        var TicketPrice = document.getElementById('prezzo');
        TicketPrice.innerHTML = distance.value - sconto20 + "€";
    } else if (ageDiscount = 'over-age') {
        var TicketPrice = document.getElementById('prezzo');
        TicketPrice.innerHTML = distance.value - sconto40 + "€";
    }

})