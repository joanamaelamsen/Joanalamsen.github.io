document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 'product1', qty: 'qty1', price: 'price1' },
        { id: 'product2', qty: 'qty2', price: 'price2' },
        { id: 'product3', qty: 'qty3', price: 'price3' },
        { id: 'product4', qty: 'qty4', price: 'price4' },
        { id: 'product5', qty: 'qty5', price: 'price5' },
        { id: 'product6', qty: 'qty6', price: 'price6' }
    ];

    const carts = document.getElementById('carts');
    const total = document.getElementById('total');
    const cash = document.getElementById('cash');
    const change = document.getElementById('change');

    function addOrder() {
        carts.textContent = '';
        let totalPrice = 0;

        products.forEach(product => {
            const qty = parseFloat(document.getElementById(product.qty).value);
            const price = parseFloat(document.getElementById(product.price).textContent);
            const name = document.getElementById(product.id).textContent;

            if (qty > 0) {
                const order = ${qty} pc/s x ${price} ------ ${name} ------ Php ${qty * price}\n;
                carts.textContent += order;
                totalPrice += qty * price;
            }
        });

        total.value = ₱ ${totalPrice.toFixed(2)};
    }

    function calculateChange() {
        const totalPrice = parseFloat(total.value.replace('₱ ', ''));
        const cashTendered = parseFloat(cash.value);

        if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
            const changeAmount = cashTendered - totalPrice;
            change.value = ₱ ${changeAmount.toFixed(2)};
        } else {
            change.value = '';
        }
    }

    products.forEach(product => {
        document.getElementById(product.qty).add
