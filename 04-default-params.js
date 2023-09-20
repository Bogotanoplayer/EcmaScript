function newUser(name, age, country) {
    var name = name || 'Oscar';//asignando valor por defecto con or ||
    var age = age || 34;
    var country = country || 'COL'
    console.log(name, age, country);
}
newUser();
newUser('walas', 1, 'VEN');

//ecma6

function newAdmin(name = 'Oscar', age = 12, country = 'CL'){// asignamdo valor por defecto
    console.log(name, age, country);
}
newAdmin();
newAdmin( 'Ana', 89, 'JP')