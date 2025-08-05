// Métodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canciión con el id: ${id}`)
    },
    pausar: function(){
        console.log("Cancion en pausa...")
    },
    crearPlaylist: function(nombre) {
        console.log(`Playlist ${nombre} creada`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Se elimnó la pista ${id}`)
}

reproductor.reproducir(3840)
reproductor.pausar()
reproductor.borrarCancion(20)
reproductor.crearPlaylist('Trap')
reproductor.reproducirPlaylist('Trap')