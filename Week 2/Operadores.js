var operador1 = 10;
var operador2 = 20;

var resultado = operador1 * operador2;

console.log(resultado);

var nome = "Math";

if (nome === "Matheus"){
    console.log("seu nome é mesmo Matheus");
}  else if (nome === "Math") {
    console.log("Esse nickame tambem serve");
}
   else{
           console.log("esse nome não esta autorizado a utilizar o sistema!!!");
}

var objeto = ('roupa');

switch (objeto){
 case 'maça':
     console.log("existe maça no case");
 break;
 case 'roupa':
        console.log("existe roupa em objeto")
        break;
     default:
        console.log('voce não é quem eu estava procurando!')
        break;

}


var numeroSorteado = 10;

var tabuada = 7

for(var i = 0; i < 100; i ++ ){
    console.log(i);
}



var tabuada = 7

for(var i = 1; i < 13; i ++ ){
 var conta = tabuada * i 
    console.log(i + " x" + " 7" + " =" + conta);
}

var numeroSorteado = 10;

for( var i = 0; i <= 100; i++) {
  if ( numeroSorteado === i) {
    console.log('seu numeros foi encontrado ');
    break;

  }
}

var achou = false;
while (achou){
    console.log("achou")
    
}





function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Ola estudante ' + nome );
}

var resultadoDaSoma = soma(1, 2);
var resultadoNovoDaSoma = soma(344, 90);
console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);


olaGama('Matheus');


class matematica{
    soma(valorA, valorB){
        return valorA + valorB;
    subtracao(valorA, valorB){
        return valorA - valorA;
        
    }

    }
}

var instanciaMatematica = new matematica();
var resultado = instanciaMatematica.soma(4,7);
console.log(resultado);