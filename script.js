const parrafo = document.getElementById("parrafo");

const boton = document.getElementById("boton");

function clickBoton() {
	if (parrafo.innerHTML == "test") {
		parrafo.innerHTML = "Hola";
	}
}

function botenes(boton) {
	const parrafo = document.getElementById("parrafo2");
	let numero = Number(boton.getAttribute("numero"));

	switch (numero) {
	}
}
