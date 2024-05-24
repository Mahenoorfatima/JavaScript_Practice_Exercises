let myCar = {
    make: "Toyota Corolla" ,
    SeatingCapacity: 5 ,
    transmissionType: "Automatic" ,
    fuelTankCapacity: "50 liters" ,
    gasTankSize:  "13.2 gallons" ,
    topSpeed: "180 - 240 KM/H" ,
    generation: 12 ,
    model: 2019 ,
    color: "Blue" ,
    forSale: "true"
};

var propertyName = "color";
myCar[propertyName] = "red";

propertyName = "forSale";
myCar[propertyName] = "true";

console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

console.log("For Sale:", myCar.forSale);
