var genBtnEl = document.getElementById('genera-btn');

genBtnEl.addEventListener('click', function() {
    var nameSur = document.getElementById('nome-cognome').value;
    var distance = document.getElementById('km-da-percorrere').value;
    console.log(distance);
    var ticketCost = 0.21;
    var ageDiscount = document.getElementById('fascia-eta').value;
    var sconto20 = distance * ticketCost * 0.2;
    var sconto40 = distance * ticketCost * 0.4;

    console.log(nameSur)

    var ticketName = document.getElementById('nameSurname')
    ticketName.innerHTML = nameSur.value;


    var ticketOffer = document.getElementById('discountCode');
    ticketOffer.innerHTML = ageDiscount.value;

    var randomSeat = Math.floor(Math.random() * 10000 + 90000);
    document.getElementById("cpCode").innerHTML = randomSeat;

    var randomCarrozza = Math.floor(Math.random() * 10 + 1);
    document.getElementById("carriage").innerHTML = randomCarrozza;

    var ticketPrice = document.getElementById('prezzo');
    if (nameSur == '' || distance == '') {
        alert('Il contenuto è nullo o non valido');
    } else {
        document.getElementById('ticket').style.display = 'block';
        if (ageDiscount == 'minorenne') {
            ticketPrice.innerHTML = (distance * ticketCost - sconto20).toFixed(2) + "€";
            document.getElementById('discountCode').innerHTML = "Sconto minorenni 20%";
        } else if (ageDiscount == 'over65') {
            ticketPrice.innerHTML = (distance * ticketCost - sconto40).toFixed(2) + "€";
            document.getElementById('discountCode').innerHTML = "Sconto over 65 anni 40%";
        } else {
            ticketPrice.innerHTML = (distance * ticketCost).toFixed(2) + "€";
            document.getElementById('discountCode').innerHTML = "Nessuno sconto";
        }
    }



})

var deleteBtn = document.getElementById('cancel-btn');

deleteBtn.addEventListener('click', function() {
    document.getElementById('ticket').style.display = 'none';
    document.getElementById('nome-cognome').value = '';
    document.getElementById('km-da-percorrere').value = '';
    document.getElementById('fascia-eta').value = 'none';
})