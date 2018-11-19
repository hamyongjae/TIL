/* ES5 something like class..? */
// function Car (options) {
//     this.title = options.title;
// }

// Car.prototype.drive = function () {
//     return 'Vroom';
// }

// var Car = new Car({title : 'Genesis'});

// function Ferrari(options){
//     Car.call(this. options);
//     this.color = options.color;
// }

// Ferrari.prototype.honk = function() {
//     return 'Bammmmmm'
// }

// var laFerrari = new Ferrari({color: 'red', title: 'laFerrari'});

/* ES6 class..? */
class Car{
    constructor ( { title }){
        this.title = title;
    }

    drive(){
        return 'Vroom';
    }
}

const car = new Car({title: 'A6'});
console.log(car);
console.log(typeof car);

class Audi extends Car {
    constructor(options){
        this.color = options.color;
    }

    honk(){
        return '빵빵';
    }
}

class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
        this.key = options.key;
    }
}

class Pickachu extends Monter{
    constructor(options){
        super(options);
    }

    bite(monster){
        monster.health -=10;
    }
}

const jobmob = new Monster({name : '꼬렛'});
const Pickachu = new Pickachu({name : '데드풀'});

Pickachu.bite(jobmob);
console.log(jobmob);
console.log(pickachu);