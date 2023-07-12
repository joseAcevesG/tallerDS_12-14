const parrafo = document.getElementById("parrafo");

const boton = document.getElementById("boton");

function clickBoton() {
	if (parrafo.innerHTML == "test") {
		parrafo.innerHTML = "Hola";
	}
}
