var iPhone7 = new Phone ("Apple", 2700, "A1778", "Silver Gray");
var OnePlusOne = new Phone ("OnePlus", 1700, "A0001", "Black");
var GalaxyS6 = new Phone ("Samsung", 1000, "SM-G920F", "Silver");

function Phone(brand, price, model, color){
    this.brand = brand;
    this.price = price;
    this.model = model;
    this.color = color;
    
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", model is " + this.model + " and the price is " + this.price +".");
}

iPhone7.printInfo();
OnePlusOne.printInfo();
GalaxyS6.printInfo();