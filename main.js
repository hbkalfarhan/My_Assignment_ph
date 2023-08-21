
document.getElementById('kitchenware-item2').addEventListener('click', function () {
    const itemText = document.getElementById('kitchenware-item2-text').innerText;
    const itemAmount = parseFloat(document.getElementById('kitchenware-item2-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('kitchenware-item1').addEventListener('click', function () {
    const itemText = document.getElementById('kitchenware-item1-text').innerText;
    const itemAmount = parseFloat(document.getElementById('kitchenware-item1-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});


document.getElementById('kitchenware-item3').addEventListener('click', function () {
    const itemText = document.getElementById('kitchenware-item3-text').innerText;
    const itemAmount = parseFloat(document.getElementById('kitchenware-item3-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('sportswear-item1').addEventListener('click', function () {
    const itemText = document.getElementById('sportswear-item1-text').innerText;
    const itemAmount = parseFloat(document.getElementById('sportswear-item1-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('sportswear-item2').addEventListener('click', function () {
    const itemText = document.getElementById('sportswear-item2-text').innerText;
    const itemAmount = parseFloat(document.getElementById('sportswear-item2-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('sportswear-item3').addEventListener('click', function () {
    const itemText = document.getElementById('sportswear-item3-text').innerText;
    const itemAmount = parseFloat(document.getElementById('sportswear-item3-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('furniture-item1').addEventListener('click', function () {
    const itemText = document.getElementById('furniture-item1-text').innerText;
    const itemAmount = parseFloat(document.getElementById('furniture-item1-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('furniture-item2').addEventListener('click', function () {
    const itemText = document.getElementById('furniture-item2-text').innerText;
    const itemAmount = parseFloat(document.getElementById('furniture-item2-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

document.getElementById('furniture-item3').addEventListener('click', function () {
    const itemText = document.getElementById('furniture-item3-text').innerText;
    const itemAmount = parseFloat(document.getElementById('furniture-item3-amount').innerText);
    addItemOnList(itemText);
    addAmountOnTotalPrice(itemAmount);
});

function addItemOnList(data) {
    const itemsList = document.getElementById('items-list');
    const newLiElement = document.createElement('li');
    newLiElement.innerText = data;
    itemsList.appendChild(newLiElement);
}

function addAmountOnTotalPrice(data) {
    const price = parseFloat(document.getElementById('total-price').innerText);
    const totalPrice = (price + data).toFixed(2);
    document.getElementById('total-amount').innerText = totalPrice;
    document.getElementById('total-price').innerText = totalPrice;
    if (totalPrice > 0) {
        document.getElementById('makePurchaseBtn').removeAttribute('disabled');
    }
}

document.getElementById('coupon-field').addEventListener('keyup', function (event) {
    const couponFieldValue = event.target.value;
    if (couponFieldValue === 'SELL200') {
        document.getElementById('coupon-apply-button').removeAttribute('disabled');
    } else {
        document.getElementById('coupon-apply-button').setAttribute('disabled', true);
    }
})

document.getElementById('coupon-apply-button').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price').innerText;
    if (totalPrice >= 200) {
        const totalDiscountAmount = (totalPrice * .2).toFixed('2');
        document.getElementById('discount-amount').innerText = totalDiscountAmount;
        const finalAmount = (totalPrice - totalDiscountAmount).toFixed(2);
        document.getElementById('total-amount').innerText = finalAmount;
    } 
});

document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('discount-amount').innerText = '00.00';
    document.getElementById('total-amount').innerText = '00.00';
    document.getElementById('items-list').innerText = '';
    document.getElementById('makePurchaseBtn').setAttribute('disabled', true);
    document.getElementById('coupon-field').value = '';
    document.getElementById('coupon-apply-button').setAttribute('disabled', true);
});

