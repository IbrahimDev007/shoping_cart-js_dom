function subTotal() {
    let totalValue=parseInt(document.getElementById('case-amount').innerText)+parseInt(document.getElementById('phone-amount').innerText)
   
    document.getElementById('subtotal').innerText=totalValue;
}