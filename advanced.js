// Given the following object, implement a function
// that calculates the total sales, and total tax, grouped by company.

var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


//create function to sum sales for an array
function sumSales(array){
  var sum = 0
  for (i of array){
      sum += i;
  }
  return sum
}

//function to calculate sales and tax
function calculateSalesTax(allSales){
  // create object to take in all transactions
  var results = {}

  for (var i of allSales){
    var transaction = i;
    var rate = taxRates[transaction.province];
    var currentTotalTax = sumSales(transaction.sales) * rate;
    // if new put in results
      if (!results[transaction.name]) {
        results[transaction.name] = {
          totalSales: 0,
          totalTaxes: 0
        }
      }
    results[transaction.name].totalSales += sumSales(transaction.sales)
    results[transaction.name].totalTaxes += currentTotalTax
  }
  return results
}

console.log(calculateSalesTax(companySalesData));



