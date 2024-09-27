let dado = 7;//generar un numero random del 1 al 6
let numRandom = Math.floor(Math.random() * dado);
let miApuesta = document.getElementById("apuesta");

function intRandom(dado){
	return Math.floor(Math.random() * dado);
}

console.log(intRandom(7));
console.log(numRandom);
