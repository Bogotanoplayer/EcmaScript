const anotherFunction = () => {
    return new Promise((resolve, reject) => {// se usa para hacer tareas asincronas 
        if (true){
            resolve('Hey!!');
        } else {
            reject('noob!');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch( err => console.log(err));

function hacerSolicitud() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Simula si la solicitud fue exitosa o no
            if (exito) {
                const datos = { mensaje: "Datos obtenidos correctamente", User: 'walas' };
                resolve(datos); // La promesa se resuelve con los datos
            } else {
                reject("Error al obtener datos"); // La promesa se rechaza con un mensaje de error
            }
        }, 2000); // Simulamos un retraso de 2 segundos
    });
}

// Uso de la promesa
hacerSolicitud()
    .then((datos) => {
        console.log("Éxito:", datos);
    })
    .catch((error) => {
        console.error("Error:", error);
    });