const hello = () => {
    console.log('hello!');
}

export {hello}; // usar llaves para exportar es buena practica

const hola = () => {
    console.log('hola!');
}

export default hola;// tambien se puede exportar con default