class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}, el domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

class Animal {
    constructor(tipo) {
        this._tipo = tipo;
    }

    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(tipo, nombre, enfermedad, propietario) {
        super(tipo);
        this._nombre = nombre;
        this._enfermedad = enfermedad;
        this.propietario = propietario;
    }

    get nombre() {
        return ` mientras que el nombre de la mascota es: ${this._nombre}`;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get enfermedad() {
        return this._enfermedad;
    }
    
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
    
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.querySelector('#propietario').value;
    let direccion = document.querySelector('#direccion').value;
    let telefono = document.querySelector('#telefono').value;
    let propietario = new Propietario(nombre, direccion, telefono);

    let tipo = document.querySelector('#tipo').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let enfermedad = document.querySelector('#enfermedad').value;
    let mascota = new Mascota(tipo, nombreMascota, enfermedad, propietario);

    let lista = document.querySelector('#resultado ul');
    lista.innerHTML += `<li>${mascota.propietario.datosPropietario()}<br>${mascota.tipo}, ${mascota.nombre}, y la enfermedad es: ${mascota.enfermedad}</li>`;


});
