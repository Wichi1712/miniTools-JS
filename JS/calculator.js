//document.getElementById('number1');
//Nota: ver otra opcion a Input
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

let buttonSuma = document.getElementById("buttonSuma");
let buttonResta = document.getElementById("buttonResta");
let buttonMultiplicacion = document.getElementById("buttonMultiplicacion");
let buttonDivision = document.getElementById("buttonDivision");
//let inputClear = document.getElementById("inputClear");
let buttonReset = document.getElementById("buttonReset");


buttonSuma.addEventListener("click", actionSuma);
buttonResta.addEventListener("click", actionResta);
buttonMultiplicacion.addEventListener("click", actionMulti);
buttonDivision.addEventListener("click", actionDivision);
buttonReset.addEventListener("click", actionClear);
//inputClear.addEventListener("click", actionClear);

let inputResultado = document.getElementById("inputResultado");
let labelResultado = document.getElementById("labelResultado");
let divResultado = document.getElementById("divResultado");

//let adicion = parseInt(number1.value) + parseInt(number2.value);

function actionSuma() {
	//return number1 + number2;
	inputResultado.value = parseInt(number1.value) + parseInt(number2.value);
	document.getElementById("labelResultadotxt").innerHTML = "la suma de :" + number1.value + " y " + number2.value + " es ";
	divResultado.innerHTML = parseInt(number1.value) + parseInt(number2.value);
	labelResultado.innerHTML = parseInt(number1.value) + parseInt(number2.value);
}


function actionResta() {
	document.getElementById("labelResultadotxt").innerHTML = "la resta de :" + number1.value + " y " + number2.value + " es ";
	divResultado.innerHTML = parseInt(number1.value) - parseInt(number2.value);
	labelResultado.innerHTML = parseInt(number1.value) - parseInt(number2.value);
	//console.log("ooooooooooooo");
}

function actionMulti() {
	document.getElementById("labelResultadotxt").innerHTML = "la multiplicación de :" + number1.value + " y " + number2.value + " es ";
	divResultado.innerHTML = parseInt(number1.value) * parseInt(number2.value);
	labelResultado.innerHTML = parseInt(number1.value) * parseInt(number2.value);
	//console.log("ooooooooooooo");
}

function actionDivision() {
	document.getElementById("labelResultadotxt").innerHTML = "la division de :" + number1.value + " y " + number2.value + " es ";
	divResultado.innerHTML = parseInt(number1.value) / parseInt(number2.value);
	labelResultado.innerHTML = parseInt(number1.value) / parseInt(number2.value);
	//console.log("ooooooooooooo");
}

function actionClear() {
	//var reset = document.getElementById("miForm")getElementById("number1").reset();
	number1.value = "";
	number2.value = "";
	inputResultado.value = "";
	divResultado.innerHTML = "";
	labelResultado.innerHTML = "";
	document.getElementById("labelResultadotxt").innerHTML = "";
	//console.log("ooooooooooooo");
}

//console.log(number1);