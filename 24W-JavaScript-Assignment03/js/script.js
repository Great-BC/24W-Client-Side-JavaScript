
// Capture form values, create Pizza object and add student information
document.getElementById('orderBtn').addEventListener('click', function () {
    var studentInfo = document.getElementById("studentInfo");
    studentInfo.textContent = "Student ID: 200555844";
    var size = document.querySelector('input[name="size"]:checked').value;
    var crust = document.querySelector('input[name="crust"]:checked').value;
    var sauce = document.querySelector('input[name="sauce"]:checked').value;
    var cheese = [];
    document.querySelectorAll('input[name="cheese"]:checked').forEach(function (checkbox) {
        cheese.push(checkbox.value);
    });
    var toppings = [];
    document.querySelectorAll('input[name="toppings"]:checked').forEach(function (checkbox) {
        toppings.push(checkbox.value);
    });

    // Pizza object
    var pizza = new Pizza(size, crust, sauce, cheese, toppings);

    // Output pizza description
    var pizzaDescription = document.getElementById('pizzaDescription');
    pizzaDescription.innerHTML = `
        <h2>Your Pizza</h2>
        <p>Size: ${pizza.size}</p>
        <p>Crust: ${pizza.crust}</p>
        <p>Sauce: ${pizza.sauce}</p>
        <p>Cheese: ${pizza.cheese.join(', ')}</p>
        <p>Toppings: ${pizza.toppings.join(', ')}</p>
    `;
});

// Pizza object class
class Pizza {
    constructor(size, crust, sauce, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
    }
}

