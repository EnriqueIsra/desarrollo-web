const boton = document.querySelector('#boton')

boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(resultado => console.log(`el resultado es ${resultado}`))
})

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificacion ', {
        icon: 'img/santi-minion.jpg',
        body: 'código con Juan, los mejores tutoriales'
    }
    )
}