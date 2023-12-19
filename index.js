// Write your code here

class Breakfast {
    constructor(food, drink) {
      this.drink = drink;
      this.food = food;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
      this.drink = drink;
      this.soup = soup;
      this.salad = salad

    }
}

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
      this.#dessert = dessert;
      this.soup = soup;
      this.salad = salad
      this.entree = entree;
    }
}