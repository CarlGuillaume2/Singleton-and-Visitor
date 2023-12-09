// CarVisitor.js
var CarVisitor = function() {
    this.visit = function(car) {
        // Car-specific visit implementation
        if(car.seats > 2) {
            console.log('This is clearly a car for old people');
        } else {
            console.log('My bet is this car has at least 2 cylinders');
        }
    };
};

// TruckVisitor.js
var TruckVisitor = function() {
    this.visit = function(truck) {
        // Truck-specific visit implementation
        if(truck.towPackage) {
            console.log('We need to buy a boat');
        }
    };
};

// MonsterTruckVisitor.js
var MonsterTruckVisitor = function() {
    this.visit = function(monsterTruck) {
        // MonsterTruck-specific visit implementation
        if(monsterTruck.looksLikeADragon) {
            console.log('That is a badass monster truck');
        } else {
            console.log('Loser');
        }
    };
};

// carVariable.js
var carVariable = function() {
    var seats = 5;
    var doors = 4;
    this.accept = function(visitorObject) {
        visitorObject.visit(this);
    };
};

// truckVariable.js
var truckVariable = function() {
    var towPackage = true;
    var doors = 2;
    this.accept = function(visitorObject) {
        visitorObject.visit(this);
    };
};

// monsterTruckVariable.js
var monsterTruckVariable = function() {
    var looksLikeADragon = true;
    var doors = 1.5;
    this.accept = function(visitorObject) {
        visitorObject.visit(this);
    };
};

// visitorDemo.js
var myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor());

var myMonsterTruck = new monsterTruckVariable();
myMonsterTruck.looksLikeADragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());

var myCar2 = new carVariable();
myCar2.seats = 2;
myCar2.accept(new MonsterTruckVisitor());

