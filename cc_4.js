let purchaseAmount = 200; //amount of purchase
let finalAmount = purchaseAmount; // final amount after discount applied

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // 10% discount
    console.log("Discount applied")
}

console.log(`Final amount after discount: $${finalAmount}`);