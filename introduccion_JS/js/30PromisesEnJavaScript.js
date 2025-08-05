const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve("Usuario Autenticado"); // el promise se cumple
  } else {
    reject("No se pudo iniciar sesion"); // el primise no se cumple
  }
});

usuarioAutenticado
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));
