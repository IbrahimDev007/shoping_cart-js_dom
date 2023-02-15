document.getElementById("btn-phone-plus").addEventListener("click", function () {

    const value = phoneUpdate(true);
    phoneInner(value);
    subTotal();


})

document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const value = phoneUpdate(false);
    phoneInner(value)
    subTotal();
})

function phoneInner(params) {
    const Cvalue = params * 1259
    input_field = document.getElementById('phone-amount')
    input_field.innerText = Cvalue;
}

function phoneUpdate(inputNumb) {
    const input_field = document.getElementById('phone-number')
    const value = parseInt(input_field.value);
    let cur
    if (inputNumb) {
        cur = value + 1;

    }
    else {
        cur = value - 1;
    }
    input_field.value = cur;

    return cur
}
