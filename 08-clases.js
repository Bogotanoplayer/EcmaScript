//declarando
class User{};
//instancia de una clase
const newUser = new User();

class user {
    //metodos
    greeting(){
        return 'hello';
    }
};

const walas = new user ();
console.log(walas.greeting());

const feka = new user();
console.log(feka.greeting());

// constructor

class user {
    //constructor
    constructor() {
        console.log('nuevo usuario');
    }
    greeting(){
        return 'hello';
    }
}
const david = new user();

//this

class user {
    constructor(name) {
        this.name = name;
    }

    //metodos
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user ('Ana')
;
console.log(ana.greeting());

//setters getters

class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
        //metodos
        speak(){
            return 'hello';
        }
        greeting(){
            return `${this.speak()} ${this.name} tienes ${this.age} anos`
        }
        get uAge() {
            return this.age;
        }
        set uAge(n) {
            this.age = n;
        }
    }

    const walasGod = new user('walas', 12);
    const feka1 = new user('feka', 10)
    console.log(walasGod.greeting());
    console.log(feka1.speak());
    console.log(walasGod.uAge);
    console.log(walasGod.uAge = 20);


