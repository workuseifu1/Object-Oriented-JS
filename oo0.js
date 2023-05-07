class Pizza {

  constructor(size, crust, drink) {
    this.size = size;
    this.crust = crust;
    this.toppings = "cheese ";
    this.drink = drink;
  }

  addTopping(...topping) {
    this.toppings += (topping);
  }
}
let pizza1 = new Pizza("large", "thin", "pepsi");
console.log(`Toppings: ${pizza1.toppings}, Size: ${pizza1.size}, Bread type:${pizza1.crust}, Drink: ${pizza1.drink}`);
pizza1.addTopping("mushrooms","peppers");
console.log(`Toppings: ${pizza1.toppings}, Size: ${pizza1.size}, Bread type:${pizza1.crust}, Drink: ${pizza1.drink}`);

let pizza2 = new Pizza("small","thick","No drink");
console.log(`Toppings: ${pizza2.toppings}, Size: ${pizza2.size}, Bread type:${pizza2.crust}, Drink: ${pizza2.drink}`);
pizza2.addTopping("more cheese");
console.log(`Toppings: ${pizza2.toppings}, Size: ${pizza2.size}, Bread type:${pizza2.crust}, Drink: ${pizza2.drink}`);

let pizza3 = new Pizza("large", "thin","7UP");
console.log(`Toppings: ${pizza3.toppings}, Size: ${pizza3.size}, Bread type:${pizza3.crust}, Drink: ${pizza3.drink}`);
console.log(pizza1);