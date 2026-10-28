const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalBeforeDiscount = cart.reduce(
    (sum, product) => sum + product.price,
    0
);

let totalAfterCategoryDiscount = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);
    totalAfterCategoryDiscount += finalPrice;

    console.log(product.item + " Final Price: ₹" + finalPrice.toFixed(2));
}

if (totalBeforeDiscount > 50000) {
    totalAfterCategoryDiscount *= 0.95;
}

console.log("Original Cart Total: ₹" + totalBeforeDiscount.toFixed(2));
console.log("Final Cart Total: ₹" + totalAfterCategoryDiscount.toFixed(2));