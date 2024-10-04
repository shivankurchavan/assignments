/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySpending = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category already exists, add the price to the existing total
    if (categorySpending[category]) {
      categorySpending[category] += price;
    } else {
      // If the category doesn't exist, create it and set the initial price
      categorySpending[category] = price;
    }
  });

  // Convert the categorySpending object into an array of objects
  const result = Object.keys(categorySpending).map((category) => ({
    category: category,
    totalSpent: categorySpending[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
