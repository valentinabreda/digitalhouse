//const process = require("process");
//console.log(process.argv); // nos da los parametros

//const operacion = process.argv[2]
//const operando1 = process.argv[3]
//const operando2 = process.argv[4]

const [,, operacion, operando1, operando2] = process.argv

function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function dividir(a,b){
    return a / b;
}

function multiplicar(a,b){
    return a * b;
}

switch(operacion){
    case "sumar": {
        let resultado = sumar(Number(operando1), Number(operando2));
        console.log(resultado);
    }
    break;
    case "restar":{
        let resultado
    }
}


console.log(process.argv);
console.log(operacion,operando1,operando2);