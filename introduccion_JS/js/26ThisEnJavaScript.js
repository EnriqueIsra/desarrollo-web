//this

const reservacion = {
    nombre: 'Enrique',
    apellido: 'Torres',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y ` ,this.pagado == true ? `ah pagado una total de ${this.total} pesos` : `debe un total de ${this.total} pesos`)
    }
}

const reservacion2 = {
    nombre: 'Israel',
    apellido: 'Mendoza',
    total: 6000,
    pagado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y ` ,this.pagado == true ? `ah pagado una total de ${this.total} pesos` : `debe un total de ${this.total} pesos`)
    }
}

reservacion.informacion();
reservacion2.informacion();