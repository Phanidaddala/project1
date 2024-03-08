const products = [
    { id: 1, name: 'Iphone 12', price: 200.00, image: 'https://th.bing.com/th/id/OIP.thanxWr7pgMNxd9qTRanEAHaKI?rs=1&pid=ImgDetMain', category: 'Mobiles' },
    { id: 2, name: 'Iphone 13', price: 300.00, image: 'https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70&crop=false', category: 'Mobiles' },
    // Rest of the products
    { id: 3, name: 'Iphone 14', price: 400.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-originalimaghx9qkugtbfrn.jpeg?q=70&crop=false', category: 'Mobiles' },
{ id: 4, name: 'Iphone 15', price: 500.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-originalimagtc5fz9spysyk.jpeg?q=70&crop=false', category: 'Mobiles' },
{ id: 5, name: 'Vivo v11', price: 100.00, image: 'https://in-exstaticvivofs.vivo.com/gdHFRinHEMrj3yPG/20181018/d5366bf022b1eff670ad75816e180f88.png', category: 'Mobiles' },
{ id: 6, name: 'Brown Shirt', price: 50.00, image:'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/x/u/h/m-st2-vebnororiginal-imagpw7w3ha4tv2h.jpeg?q=70&crop=false', category: 'Fashion' },
{ id: 7, name: 'White Pant', price: 10.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/trouser/b/a/w/30-hltr005361-highlander-original-imagqy3gtz3bufrk.jpeg?q=70&crop=false',category: 'Fashion' },
{ id: 8, name: 'Iphone12 Phonecase', price: 20.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/u/3/9/-original-imagtkt7r3b5jyr4.jpeg?q=70&crop=false', category: 'MobileAccessories' },
{ id: 10, name: 'Vivov11 Phonecase', price: 15.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/0/q/t/-original-imagrh2zz9zscfeb.jpeg?q=70&crop=false', category: 'MobileAccessories' },
{ id: 11, name: 'AppleWatch 8', price: 93.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/q/m/q/-original-imaghxg9cwddrghx.jpeg?q=70&crop=false', category: 'Watches' },
{ id: 12, name: 'Noise icon', price: 85.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/y/9/l/-original-imagxp8u2fgthyxy.jpeg?q=70&crop=false', category: 'Watches' },
{ id: 13, name: 'Fastrack', price: 95.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/c/i/4/-original-imagxp8urwgc96cz.jpeg?q=70&crop=false', category: 'Watches' },
{ id: 14, name: 'Boult Crown', price: 98.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/e/u/-original-imagxp8uhccxxgyf.jpeg?q=70&crop=false', category: 'Watches' },
{ id: 15, name: 'Boat Ultimate', price: 106.00, image:'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/b/y/n/-original-imagxp8unrg6d4bt.jpeg?q=70&crop=false', category: 'Watches' },
{ id: 16, name: 'Highlander Shirt', price: 49.00, image:'https://rukminim2.flixcart.com/image/832/832/kufuikw0/shirt/j/5/0/shlsh012786-highlander-original-imag7kcgyhkyr5wg.jpeg?q=70&crop=false',category: 'Fashion' },
{ id: 17, name: 'Highlander Shirt', price: 55.00, image:
'https://rukminim2.flixcart.com/image/832/832/kxrvi4w0/shirt/e/9/o/xlhlsh013252-highlander-original-imaga5hvrhndruhw.jpeg?q=70&crop=false',
category: 'Fashion' },
{ id: 18, name: 'Highlander Shirt', price: 79.00, image:'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/9/q/q/xl-hlsh013843-highlander-original-imagg9texvxqpuhq.jpeg?q=70&crop=false', category:'Fashion' },
{ id: 19, name: 'Taskin Mobile Holder', price: 50.00, image:'https://rukminim2.flixcart.com/image/416/416/l1jmc280/shopsy-mobileholder/1/h/d/stand-premium-smart-foldable-mobile-stand-for-table-and-bedoriginal-imagd3cgsvzdhtva.jpeg?q=70&crop=false', category: 'MobileAccessories' },
];

const selectedProducts = [];

function displayProducts(productsToDisplay) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
}

// Call function to display products initially
displayProducts(products);
