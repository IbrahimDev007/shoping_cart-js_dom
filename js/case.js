document.getElementById("btn-case-plus").addEventListener("click", function () {

    const value = update(true);
    caseInner(value);
    subTotal();

})

document.getElementById("btn-case-minus").addEventListener("click", function () {
    const value = update(false);
    caseInner(value);
    subTotal();

})

function caseInner(params) {
    const Cvalue = params * 59
    input_field = document.getElementById('case-amount')
    input_field.innerText = Cvalue;
}

function update(inputNumb) {
    const input_field = document.getElementById('case-number')
    const value = parseInt(input_field.value);
    let cur
    if (inputNumb) {
        cur = value + 1;

    }
    else {
        cur = value - 1;
        if (cur < 0) {
            return 0;
        }
        
    }
    input_field.value = cur;

    return cur
}
