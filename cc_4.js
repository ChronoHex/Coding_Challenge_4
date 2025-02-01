// Task 1: If Statements
let purchaseAmount = 200; // amount of purchase
let finalAmount = purchaseAmount; // final amount after discount applied

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // 10% discount
    console.log("Discount applied")
}

console.log(`Final amount after discount: $${finalAmount}`);

// Task 2: For Loop
let sales = [120, 85, 200, 150, 90]; // array of sales
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
}

console.log(`Total sales: $${totalSales}`);

// Task 3: While Loop
let stock = 10;

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // decrements by 1
}

console.log("Stock depleted")