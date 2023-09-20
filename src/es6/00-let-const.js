var lastName = 'David';
lastName = 'Walas';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Mango'
console.log(fruit);

const animal = 'Dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';// function scope
        let fruit2 = 'Bananon';//block scope
        const fruit3 = 'mango';// block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();