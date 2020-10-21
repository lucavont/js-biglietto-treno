var genBtnEl = document.getElementById('genera-btn');

genBtnEl.addEventListener('click', function() {
    var nameSur = document.getElementById('nome-cognome');
    var distance = document.getElementById('km-da-percorrere');
    var ageDiscount = document.getElementById('fascia-eta');
    // var price = distance * 0.21;
    var sconto20 = distance * 0.2;

    var ticketName = document.getElementById('nameSurname')
    ticketName.innerHTML = nameSur.value;
    document.getElementById('ticket').style.display = 'block';

    var ticketOffer = document.getElementById('discountCode');
    ticketOffer.innerHTML = ageDiscount.value;

    var TicketPrice = document.getElementById('prezzo');

    if (ageDiscount = 'under-age') {
        TicketPrice.innerHTML = distance.value - sconto20 + "€";
    }

})