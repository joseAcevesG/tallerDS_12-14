
let variable = 3;
var var2 = 4;
const cons1 = 1;

//let suma = var2 + variable;
/*Se hace una suma*/
function suma(a, b){
    return a + b;
}

function condicional(num1, num2){
    if(num1 > num2){
        alert(num1 + " es mayor");
    }else if(num2 > num1){
        alert(num2 + " es mayor");
    }else{
        alert("los numeros son iguales");
    }
}