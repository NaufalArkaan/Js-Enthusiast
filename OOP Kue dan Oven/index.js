//Cookie : class induk
//Chocolate, Strawberry, Blueberry : class ank
//Oven : class faktor

class Cookie {
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class Chocolate extends Cookie {
    constructor(name, price, isSweet){
        super(name, "Chocolate", price);
        this.isSweet = isSweet || false;
    }
}
class Strawberry extends Cookie {
    constructor(name, price, isSweet){
        super(name, "Strawberry", price);
        this.isSweet = isSweet || false;
    }
}
class Blueberry extends Cookie {
    constructor(name, price, isSweet){
        super(name, "Blueberry", price);
        this.isSweet = isSweet || false;
    }
}

class Oven {
    constructor(container){
        this.container = container || [];
    }
    bake(cookie){
        this.container.push(cookie);
    }
    delivery(cookie_name){
        this.container = this.container.filter(cookie => cookie.name !== cookie_name);
    }
}

let oven = new Oven();
oven.bake(new Chocolate("Kue", 150000));
oven.bake(new Strawberry("Susu", 40000));
oven.bake(new Blueberry("Selai", 30000));
oven.delivery("Selai");
console.log(oven.container);