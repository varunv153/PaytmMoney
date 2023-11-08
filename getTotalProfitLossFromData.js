const jsonData = {
    "status": "success",
    "message": "",
    "data": []
}

// Initialize the sum
let sumOfPrice = 0;
var expression = '';

// Iterate through the data
jsonData.data.forEach(entry => {
    if (entry.display_status === "Successful") {
        var price = entry.avg_traded_price;
        var qty = entry.quantity;
        if (entry.txn_type === 'S') {
            sumOfPrice += price * qty;
            expression =  expression + '+' + price + '*' + qty;
        } else {
            sumOfPrice -= price * qty;
            expression =  expression + '-' + price + '*' + qty;
        } 
    }
});

console.log(`Sum of 'price' for entries with 'display_status' as 'Successful: ${sumOfPrice}`);
console.log(`Sum of 'price' for entries with 'display_status' as 'Successful: ${expression}`);
