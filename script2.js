const COLUMNAS= 50;
const FILAS= 20;
const LADO=20;
const ANCHO_CANVAS= COLUMNAS*LADO;
const ALTO_CANVAS= FILAS*LADO;

let canvas;


function setup(){
    canvas=createCanvas(ANCHO_CANVAS,ALTO_CANVAS);

}

function windowResized(){
    let escala= windowWidth / width;
    if(escala >= 1){
        return;
    }

    canvas.style("width", width * escala + "px");
    canvas.style("height", height * escala + "px");

}

function draw(){
    background("black");

}