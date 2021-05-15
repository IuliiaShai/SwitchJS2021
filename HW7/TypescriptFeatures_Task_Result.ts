//1
abstract class Vehicle {
    abstract logInfo(): void;
}

class Car extends Vehicle {
    constructor(
        public model: string,
        public year: number,
        public wheels: number = 4) {
        super();
    }

    logInfo(): void {
    console.log(`This car is ${this.model} and it's ${this.year} year and has ${this.wheels} wheels`);
    }
}

const carHonda = new Car('civic', 2020);
console.log(carHonda);
carHonda.logInfo;

//2

// interface
interface User {
    name: string,
    login: string,
    age?: number,
    getPassword():string
}

class Julia implements User {
    name:string = 'Julia';
    login: string = 'julishai';
    getPassword():string {
        return `Your password is ${this.name}1111`
    }
}

//3 generic

class User<T,K> {
    constructor(public login: T, public age: K) {}
    public getPassword():string {
        return `Your password is 20${this.login}${this.age}21`
    }
}

const julia = new User('juliaSha', 28);
const max = new User('max', '31');
const lana = new User(20, 20);
console.log(julia.getPassword());
console.log(max.getPassword());
console.log(lana.getPassword());



