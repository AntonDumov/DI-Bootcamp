let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object.
// Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(i => console.log(i))
}

displayGroceries()

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable.
// (Tip : make the user variable equal to the client variable)
const cloneGroceries = () => {
    let user = client
    // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    client = 'Betty' // changing client won't affect user

    // In the function, create a variable named shopping that is equal to the groceries variable.
    let shopping = groceries
    // Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    groceries.totalPrice = '35$' // changing groceries will affect shopping

    // Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
    groceries.other.paid = false; // changes paid in both shopping and groceries


}
cloneGroceries()
displayGroceries()