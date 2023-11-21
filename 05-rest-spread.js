//arrays destructuring

let fruits = ['apple', 'banana' ];
let [a, b] = fruits;// asigno elementos array a a y b para usarlos como variable mas facil que posicion
console.log(a, b);
console.log(a, fruits[1]);

let walas = ['nik', 'rat'];
let[name, lastname] = walas
console.log(lastname);

//object destructuring

let user = { username: 'walas', age: 21};
let { username, age} = user;//lo mismop que con arrays solo que con objetos
console.log(username, age);

let chicken = { color: 'red', f1: "codominance"}
let { color, f1} = chicken
//console.log(color, algo);// red, undefined
console.log(color, f1);

// spread operator

let person = { name: 'Feka', age : 125};
console.log(person);
let country = 'MX';

let data = { id: 1, ...person, country};// 3 puntos para lo que se encuentre en objeto asignarlo a nuevo y poder asignar mas info al objeto
console.log(data);

let persona1 = { nombre: 'wals', edad: 102}
let persona2 = { nombre: 'nik', edad: 13}
let persona3 = { nombre: 'butoski', edad: 21}

const panas = (persona1, persona2, persona3) =>{
  return {...persona1, ...persona2, ...persona3}
}
console.log(panas({ movimiento: 'wals', edad: 102},{ nombre: 'nik', edad: 13}, { nombre: 'butoski', edad: 21}));
//no puedo repetir parametros en objetos

function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {
    return { ...json1, ...json2 }
  }
  console.log(solution());

//rest function -> empaqueta

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

const mul = (num, ...numbers) =>{
  return num * numbers[2]
}

console.log(mul(11, 1,2,3,4));

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)
let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

