//enhaced object literals

function newUser (user, age, country, uId){
    return {
        user,
        age, //nombre claro sin hacer asignacion a el mismo elemento
        country, // en vez de especificar que lo mismo que pongamos como parametro, recibir parametro si mencionarlo
        id: uId //propuesta original ecma5 valor por asignacion
    }
}
console.log(newUser('walas', 23, "COL", 1));