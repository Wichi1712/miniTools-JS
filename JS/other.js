var auxNumero;

function isPar(numero) {
	var numero;
	var par = Math.floor(numero/2);
	auxNumero = numero

	//console.log(numero);
	//console.log(par);

	if (par === numero /2 ) {console.log("Este numero "+numero+" es par");}
	else {console.log("Este numero "+numero+" es impar");}

}


for (var i = 0; i < 11; i++) {
	isPar(i);
}

//var muestraNumeros = document.getElementById("muestraNumeros");//.innerHTML=auxNumero;
for (var i = 0; i < 11; i++) {
	var creaDiv = document.createElement("div");
	creaDiv.setAttribute("id",auxNumero.toString())
	var newContent = document.createTextNode(auxNumero.toString());//("Hola!¿Qué tal?");
	//var nuevoContenido = 0;
	//nuevoContenido++; 
	creaDiv.appendChild(newContent);
	//muestraNumeros.appenChild(creaDiv);
	// añade el elemento creado y su contenido al DOM
  	var currentDiv = document.getElementById("div");
  	document.body.insertBefore(creaDiv, currentDiv);
}

