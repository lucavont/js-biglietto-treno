var genBtnEl = document.getElementById('genera-btn');

genBtnEl.addEventListener('click', function() {
    var nameSur = document.getElementById('nome-cognome');
    var distance = document.getElementById('km-da-percorrere');
    var ticketCost = 0.21;
    var ageDiscount = document.getElementById('fascia-eta');
    var sconto20 = distance * ticketCost * 0.2;
    var sconto40 = distance * 0.4;



    var ticketName = document.getElementById('nameSurname')
    ticketName.innerHTML = nameSur.value;
    document.getElementById('ticket').style.display = 'block';

    var ticketOffer = document.getElementById('discountCode');
    ticketOffer.innerHTML = ageDiscount.value;

    var randomSeat = Math.floor(Math.random() * 10000 + 90000);
    document.getElementById("cpCode").innerHTML = randomSeat;

    var randomCarrozza = Math.floor(Math.random() * 10 + 1);
    document.getElementById("carriage").innerHTML = randomCarrozza;

    var ticketPrice = document.getElementById('prezzo');
    ticketPrice.innerHTML = distance * ticketCost - sconto20;


})