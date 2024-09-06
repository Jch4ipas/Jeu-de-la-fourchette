const prompt = require('prompt-sync')();
console.log("Bienvenue dans le jeu de la fourchette")

let nombre = -1
let nombreATrouver = Math.floor(Math.random() * 10000);
//console.log(nombreATrouver);

while (nombre != nombreATrouver) {
  nombre = prompt('Nouveau nombre : ');
  console.log(`Le nombre entré est : ${nombre}`);
  if (nombre > nombreATrouver) {
    console.log('Le nombre recherché est plus petit')
  }
  else {
    console.log('Le nombre recherché est plus grand')
  }
}
console.log('BRAVO vous avez trouvé le nombre qui est ' + nombre)



