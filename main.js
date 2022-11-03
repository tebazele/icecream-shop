const iceCream = [
    {
        name: 'strawberry',
        image: '/1.png',
        price: 2,
        amount: 0
    },
    {
        name: 'blueberry',
        image: '/2.png',
        price: 2,
        amount: 0
    },
    {
        name: 'mint',
        image: '/3.png',
        price: 2,
        amount: 0
    },
    {
        name: 'vanilla',
        image: '/4.png',
        price: 2,
        amount: 0
    },
    {
        name: 'chocolate',
        image: '/5.png',
        price: 2,
        amount: 0
    },
    {
        name: 'spacejam',
        image: '/6.png',
        price: 2,
        amount: 0
    },
];

const toppings = [
    {
        name: 'sprinkles',
        image: '7.png',
        price: .75,
        amount: 0
    },
    {
        name: 'm&ms',
        image: '8.png',
        price: 1,
        amount: 0
    },
    {
        name: 'chocolate chips',
        image: '9.png',
        price: .75,
        amount: 0
    },
];

const cones = [
    {
        name: 'waffle',
        image: '10.png',
        price: 3,
        amount: 0
    },
    {
        name: 'basic',
        image: '11.png',
        price: 1.50,
        amount: 0
    },
    {
        name: 'deluxe',
        image: '12.png',
        price: 5,
        amount: 0
    },
];

let cart = [];

function addToCart(array, type) {
    let itemToAdd = array.find(item => item.name == type);
    if (cones.includes(itemToAdd) && !cart.includes(itemToAdd)) {
        itemToAdd.amount = 1;
        cart.push(itemToAdd);
    } else if (cones.includes(itemToAdd) && cart.includes(itemToAdd)) {
        itemToAdd.amount = 1;
    } else if (cart.includes(itemToAdd)) {
        itemToAdd.amount += 1;
    } else {
        itemToAdd.amount += 1;
        cart.push(itemToAdd);
    }
    drawCart();
}

function buy() {
    if (window.confirm('Are you ready to checkout?')) {
        cart = [];
        iceCream.forEach(ice => ice.amount = 0);
        cones.forEach(cone => cone.amount = 0);
        toppings.forEach(top => top.amount = 0);
        drawCart();
    }

}

// SECTION draw items to page

function drawIceCreamOptions() {
    let template = `
    <div class="col-12 text-center p-3">
        <h2>Ice Cream Options</h2>
    </div>`;

    iceCream.forEach(ice => {
        template += `
        <div class="col-4 p-3" id="${ice.name}" name="ice-cream-card">
                        <div class="card bg-light border border-dark" onclick="addToCart(iceCream, '${ice.name}')">
                            <img src="${ice.image}" class="img-fluid">
                            <section class="row justify-content-between px-3">
                                <div class="col-7">
                                    <h6>${ice.name}</h6>
                                </div>
                                <div class="col-4 text-end">
                                    <h6>$${ice.price}</h6>
                                </div>
                            </section>
                        </div>
                    </div>
        `;
    });
    console.log(template)
    document.getElementById('ice-cream-options').innerHTML = template;
}

function drawToppings() {
    template = `
    <div class="col-12 text-center p-3">
        <h2>Toppings</h2>
    </div>`;

    toppings.forEach(topping => {
        template += `
        <div class="col-4 p-3" id="${topping.name}" name="ice-cream-card">
                        <div class="card bg-light border border-dark" onclick="addToCart(toppings, '${topping.name}')">
                            <img src="${topping.image}" class="img-fluid">
                            <section class="row justify-content-between px-3">
                                <div class="col-7">
                                    <h6>${topping.name}</h6>
                                </div>
                                <div class="col-4 text-end">
                                    <h6>$${topping.price}</h6>
                                </div>
                            </section>
                        </div>
                    </div>
        `
    })
    console.log(template)
    // console.log(document.getElementById('toppings-options'))
    document.getElementById('toppings-options').innerHTML = template;

}

function drawCones() {
    template = `
    <div class="col-12 text-center p-3">
        <h2>Cones</h2>
    </div>`;

    cones.forEach(cone => {
        template += `
        <div class="col-4 p-3" id="${cone.name}" name="ice-cream-card">
                        <div class="card bg-light border border-dark" onclick="addToCart(cones, '${cone.name}')">
                            <img src="${cone.image}" class="img-fluid">
                            <section class="row justify-content-between px-3">
                                <div class="col-7">
                                    <h6>${cone.name}</h6>
                                </div>
                                <div class="col-4 text-end">
                                    <h6>$${cone.price}</h6>
                                </div>
                            </section>
                        </div>
                    </div>
        `
    })
    console.log(template)

    document.getElementById('cones-options').innerHTML = template;
}

function drawCart() {
    template = '';
    cart.forEach(item => {
        template += `
        <div class="col-4">${item.name}</div>
        <div class="col-3">${item.amount}</div>
        <div class="col-3">$${item.price}</div>
        <div class="col-2">$${item.price * item.amount}</div>
        `;
    })
    document.getElementById('cart').innerHTML = template;
    drawTotal();
}

function drawTotal() {
    let total = 0;
    cart.forEach(item => {
        if (item.amount != 0) {
            total += item.amount * item.price;
        }
    })
    document.getElementById('total').innerText = total.toFixed(2);
}

drawIceCreamOptions();
drawToppings();
drawCones();