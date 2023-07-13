const COLUMNAS= 50;
const FILAS= 20;
const LADO=20;
const ANCHO_CANVAS= COLUMNAS*LADO;
const ALTO_CANVAS= FILAS*LADO;

let canvas;

let snake;

let arriba;
let abajo;
let izquierda;
let derecha;


function setup(){
    canvas=createCanvas(ANCHO_CANVAS,ALTO_CANVAS);
    frameRate(10);

    snake= new Snake();
    arriba=createVector(0,-1);
    abajo=createVector(0,1);
    derecha=createVector(1,0);
    izquierda=createVector(-1,0);
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

function keyPressed(){

    switch(keyCode){
        case UP_ARROW:
            snake.direccion=arriba;
            break;
        case DOWN_ARROW:
            snake.direccion=abajo;
            break;
        case RIGHT_ARROW:
            snake.direccion=derecha;
            break;
        case LEFT_ARROW:
            snake.direccion=izquierda;
            break;
    }
}

function Snake(){
    this.posicion= createVector(COLUMNAS/2,FILAS/2);
    this.direccion= createVector();

    this.bordes= function(){
        if(this.posicion.x >= COLUMNAS){
            this.posicion.x=0;
        }

        if(this.posicion.x< 0){
            this.posicion.x =COLUMNAS -1;
        }
        if(this.posicion.y >= FILAS){
            this.posicion.y=0;
        }

        if(this.posicion.y< 0){
            this.posicion.y =FILAS -1;
        }
    }

    this.dibujar= function(){
        fill("white");

        rect(this.posicion.x*LADO , this.posicion.y * LADO , LADO, LADO);

        this.posicion.add(this.direccion);

        

        this.bordes();
    }

}