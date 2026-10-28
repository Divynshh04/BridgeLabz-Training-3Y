"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(\d+)$/;
        const match = coupon.match(couponRegex);

        if (!match) {
            console.log("Invalid coupon format.");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            console.log("Coupon discount must be between 1% and 100%.");
            return this.getTotal();
        }

        const total = this.getTotal();
        const discount = total * discountPercent / 100;
        const finalTotal = total - discount;

        console.log("Original Total: ₹" + total.toFixed(2));
        console.log("Coupon Discount: " + discountPercent + "%");
        console.log("Discount Amount: ₹" + discount.toFixed(2));
        console.log("Final Total: ₹" + finalTotal.toFixed(2));

        return finalTotal;
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 2000, 1);

console.log("Cart Items:", cart.items);

cart.applyCoupon("SAVE20");