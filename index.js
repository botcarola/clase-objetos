// DATOS PRIMITIVOS

// 1) STRING
// 2) NUMBER
// 3) BOOLEANO

const nombre = "Mariana"
const edad = 28
const colorFavorito = "violeta"
const saborDeHelado = "Granizado"
const esEstudiante = true
const segundoNombre = "Lola"
const numeroConComaFavorito = 3.1416

// OBJECT

const laProfe = {
    nombre: "Carola",    
}

const mesa = {
    patas: 4,
    colorDeLasPatas: "verde",
    material: "madera",
    color: "caoba",
    mantel: true,
    sillas: {
        cantidad: 4
    },   
}




// QUÉ ES LO QUE HACE A UN OBJETO?
// 1) el uso de llaves, genera objetos literales {} ---> objeto
// 2) contiene una colección de propiedades que hacen referencia a su objeto y caracterísitcas
// 3) {
//        clave: valor
//    }
// las llaves expresan la existencia de un objeto
// la clave es el identificador, que va a hacer referencia a su contenido
// el valor es lo que contiene esa clave.
// 4) los valores que puede contener pueden ser cualquier tipo de dato: string, booleano, number, function, array, objeto
// 5) las propiedades se separan con coma
// 6) no hay un límite en relación a la cantidad de propiedades que pueda agregar
// 7) la coma del último elemento es opcional

const persona = {
    edad: 12,
    altura: 1.50,
    peso: 45,   
    "gusto de helado": "vainilla" // OTRA FORMA DE DETALLAR PROPIEDADES 
}

// LAS PROPIEDADES NO SE MODIFICAN COMO LO HARÍAN CON UNA REASIGNACIÓN A LA VARIABLE, ES DECIR, NO ES IGUAL LA MODIFICACIÓN QUE UN TIPO DE VALOR PRIMITIVO
// PARA PODER MODIFICAR ESTAS PROPIEDADES DEBEMOS ACCEDER A ELLAS

//ej

// 1)
// se accede a través del identificador, el uso de un punto y el nombre de la propiedad

persona.altura

// 2)

persona["altura"]

// forma de visualizar un dato de un objeto en consola

console.log(persona.altura)
console.log(persona["altura"])
console.log(persona["gusto de helado"])

// forma de llamar a un objeto que contiene a otro objeto

mesa.sillas.cantidad

console.log(mesa.sillas.cantidad)

// PARA MODIFICAR LOS VALORES, DEBEMOS LLAMARLOS COMO LO VENIMOS HACIENDO

persona.edad = 22

console.log(persona.edad)

mesa.sillas.cantidad = 6

console.log(mesa.sillas.cantidad)

// Delete para borrar propiedades

delete persona.edad

console.log(persona)

// TENEMOS DIVERSAS FORMAS DE CREAR OBJETOS

// 1) EL USO DE LLAVES: OBJETOS LITERALES {}

console.log(typeof {})

// 2) new Object ()

console.log(typeof new Object())

// 3) podemos instanciar objetos

class Personaje {
    constructor (vida, ataque, resistenciaMagica, armadura, magia) {
        this.vida = vida;
        this.ataque = ataque;
        this.resistenciaMagica = resistenciaMagica;
        this.armadura = armadura;
        this.magia = magia
    }
}

const mago = new Personaje(80, 5, 15, 15, 120)
const ogro = new Personaje(110, 50, 5, 100, 0)

console.log(mago)
console.log(ogro)

for( let i = 0; i < 3; i++ ){

    ogro.vida = ogro.vida - mago.magia
    mago.vida = mago.vida - ogro.ataque

    console.log(ogro.vida)
    console.log(mago.vida)

    if( ogro.vida <= 0 ) {
        console.log("El ganador del encuentro es el mago.")
        break
    } else if ( mago.vida <= 0 ){
        console.log("El ganador del encuentro es el ogro.")
        break
    }  
}


// 03 - base de datos
// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados
// // DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// // 1,ada@gmail.com,Ada Lovelace,1234567890
// // 2,grace@hotmail.com,Grace Hopper,0987654321
// // 3,hedy@gmail.com,Hedy Lamarr,6789054321
// // 4,radia@yahoo.com,Radia Perlman,1234509876
// // 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

class Cliente {
    constructor (id, email, nombre, telefono) {
        this.identificador = id;
        this.correoElectronico = email;
        this.nombreCompleto = nombre;
        this.numeroDeTelefono = telefono
    }
}

const cliente1 = new Cliente(1, "ada@gmail.com", "Ada Lovelace", 1234567890)

console.log(cliente1)

// opción 2

const nuevosClientes = (id, email, nombre, telefono) => {
    return {
        identificador: id,
        correoElectronico: email,
        nombreCompleto: nombre,
        numeroDeTelefono: telefono
    }
}

const nuevoCliente = nuevosClientes(2, "grace@gmail.com", "Grace Hopper", 0987654321)

console.log(nuevoCliente)