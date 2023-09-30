
function* iterate(array) {
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Walas', 'David', "Mamoncillo", "Scooby"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* iterate(object) {
    for(let value in object){
        yield value;
    }
}

const itO = iterate({
    walas: "wisin",
    Rativa: "yandel"
});
console.log(itO.next().value);
console.log(itO.next().value);
console.log(itO.next().value);