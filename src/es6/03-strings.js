//antes ecma6
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//template literals

let epicPhrase2 = `${hello} ${world} !`;
console.log(epicPhrase2);

// multi-line strings
let lorem = 'walas \n' + 'esto es otra linea';// antes usar /n

let lorem2 = `walas epic
epic continuacion multiliena.`;// al usar comillas francesas  podemos saltar espacio ecma

console.log(lorem);
console.log(lorem2);