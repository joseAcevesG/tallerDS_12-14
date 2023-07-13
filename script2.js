const COLUMNAS= 50;
const FILAS= 20;
const LADO=20;
const ANCHO_CANVAS= COLUMNAS*LADO;
const ALTO_CANVAS= FILAS*LADO;

let canvas;

let snake;

function setup(){
    canvas=createCanvas(ANCHO_CANVAS,ALTO_CANVAS);

    snake= new Snake();

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

    snake.dibujar();

}

function Snake(){
    this.posicion= createVector(COLUMNAS/2,FILAS/2);
    this.direccion= createVector();

    this.dibujar= function(){
        fill("white");

        rect(this.posicion.x*LADO , this.posicion.y * LADO , LADO, LADO);
    }
}