const parrafo = document.getElementById("parrafo");

const boton = document.getElementById("boton");

function clickBoton() {
	if (parrafo.innerHTML == "test") {
		parrafo.innerHTML = "Hola";
	}else if(boton.getAttribute("estado") == "noClick"){
        parrafo.innerHTML = "Mundo";
        boton.setAttribute("estado", "Click");
    }else if(parrafo.innerHTML == "Mundo" && boton.getAttribute("estado") == "Click" ){
        parrafo.innerHTML = "Taller IDS";
    }else{
        parrafo.innerHTML = "test";
        boton.setAttribute("estado", "noClick");
    }
}

function botenes(boton) {
	const parrafo = document.getElementById("parrafo2");
	let numero = Number(boton.getAttribute("numero"));

	switch (numero) {
	}
}
