// ejercicio 1 Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula
let Coche = {
    marca: 'Toyota',
    modelo: 'Aurys',
    matricula: '5768AEC'
};

//ejericio 2 Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso
let Casa = {
    codPostal: '48003',
    calle: 'Maximo Aguirre',
    portal: 15,
    piso: 5
}

//ejericico 3  Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos
let FullStackDeveloper = {
    lenguajes: [],
    proyectos: []
}

//ejercicio 4  Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, 
// función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)
let Perro = {
    nombre: 'Loui',
    raza: 'Teckel',
    color: 'Chocolate',
    edad: 0,
    ladrar: function() {
        console.log('Guauu');
    },
    popo: function() {
        return Math.random() * 3;
    }

};

//Lectura de propiedades
//ejercicio 5 

let marcaPortatil = Portatil.marca;

//ejercicio 6 Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2
let marcaPortatil2 = Portatil["marca"];

//ejericicio 7 Dado un objeto de nombre Concierto obtén el valor de la propiedad array grupos guardándolo en la variable grupos
let grupos = Concierto.grupos;

//ejercicio 8  Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]
let RGB = [Led.rojo, Led.verde, Led.azul];

//MODIFICACION DE PROPIEDADES
//EJERCICIO 9 Dado un objeto de nombre Portatil modifica el valor de la propiedad modelo por el valor P345
Portatil.modelo = 'P345';

//ejercicio 10 Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera
Concierto.cartelera.push("Guns N' Roses");

//ejercicio 11 Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)
Concierto.fecha = new Date();

//ejercicio 12 Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas
Impresora.imprimiendo = {
    nombreArchivo: '',
    copias: 1,
    numPaginas: 1
}

//ejercicio 13 
let Noticia = {
    titular: '',
    cuerpo: ''
};

//ejercicio 14
let Persona = {
    nombre: '',
    apellidos: '',
    edad: 38
};

//ejercicio 15
let Avion = {
    numPasajeros: 20,

    despegar: function() {
        console.log('despegando');
    },

    volar: function() {
        console.log('llegando al destino');

    },

    aterrizar: function() {
        console.log('aterrizando')
    }
    
};

//ejercicio 16
 let Paquete = {
    contenido: [
      {
        nombre: ''
      },

      {
        nombrre: ''
      }, 

      {
        nombre: ''
      }
    ]

};

//ejercicio 17

let Pais = {
    numHabitantes: 200,
    continente: '',
    gentilicio: ''
}

//ejercicio 18

let codError = O_Error.codigo;

//ejercicio 19

let integrantes = Grupo.integrantes;

//ejercicio 20

let nivelesTinta = Impresora.tinta;

//ejercicio 21
let pixeles = Pantalla.pixeles;

//ejercicio 22

let especificaciones = Movil.especificaciones;

//ejercicio 23
Grupo.numIntegrantes = 5;

//ejercicio 24

Pantalla.dimensiones = '1920x1080';

//ejercico 25 
Led.encendido = !Led.encendido;

//ejercicio 26

Movil.temperatura = '20º';