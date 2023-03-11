function convertir(cantidad,cambio){	
	let resultado=(cantidad*cambio);
	return resultado;
}

var cambio_yen=125;
window.onload=inicio;

function inicio(){
	document.getElementById("input_cambio").value=cambio_yen;
	document.getElementById("boton").onclick=ir_a_convertir;
	document.getElementById("dinero").onkeydown=teclado;

	// seleccion por tagname el div
	// document.querySelector("div").innerHTML = cambio_yen;no me vale no es el 1ºdiv
	// document.querySelectorAll("#caja1")[3].innerHTML = cambio_yen; no va bien
	

	// seleccion de caja 1 por id
	// document.querySelector("#caja1").innerHTML = cambio_yen;
	// va bien
	// document.querySelectorAll("div")[3].innerHTML = cambio_yen;

	document.getElementById("caja1").innerHTML = cambio_yen;
	DocumentTimeline.getElementsByTagName('div')[3].innerHTML = cambio_yen;

	// caja div 2 por clase
	// document.querySelector(".caja2").innerHTML = "Hola";

	// pongo 0 porque es el primer elemento que se llama caja2
	// document.querySelectorAll(".caja2")[0].innerHTML = cantidad; 

	// aqui un 1 porque es el 2ºdiv
	// document.querySelectorAll("div")[1].innerHTML = cambio_yen;

	// el 0 porque es el 1º elemento que se llama caja2
	// document.getElementsByClassName("caja2")[0].innerHTML = cambio_yen;;

	// document.getElementsByTagName('div')[0].innerHTML = cambio_yen;

	// selecciono todos los elementos clase2
	let cantidad = document.getElementsByClassName("caja2");
	alert(cantidad.length);
	document.querySelector("body").innerHTML += '<div class="caja2>Caja 2</div>'
	alert(cantidad.length);
}

function teclado(a){
	let codigo_tecla=a.keyCode;
	if (codigo_tecla==13){
		ir_a_convertir();
	}
}

function ir_a_convertir(){
	cambio=document.getElementById("input_cambio").value;
	cantidad=document.getElementById("dinero").value;
	cantidad= (cantidad!="") ? cantidad : 1;
	a=convertir(cantidad,cambio);
	document.getElementById("conversiones").innerHTML+=cantidad +" euros son " +a + " yenes<br>";
	document.getElementById("dinero").value="";
	document.getElementById("dinero").focus();
}

