class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
    this._size = size;
  } else {
    this._size = `select the right size 's', 'm' or 'l'`;
  }
  }
  getSize() {
    return this.size;
  }
  get Price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}
const pizza = new Pizza('m', 'thin');
pizza.size = 'l';
console.log(pizza.Price);
console.log(pizza);
pizza.size = 'm';
pizza.addTopping("more cheese");
console.log(pizza.Price);
console.log(pizza);