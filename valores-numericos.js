// Ejercicio

//- Una variable que contenga tu altura en centímetros (entero)
let alturaEntero = 175;
console.log(alturaEntero + " centímetros");
//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaDecimal = 1.75;
console.log(alturaDecimal + " metros");
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 70;
console.log(peso + " kg");

//- Una variable que contenga tu altura en metros redondeada hacia arriba
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let altura = 1.75;
console.log(altura.toFixed(1));
console.log(altura.toPrecision(4));

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let valMax = Number.MAX_VALUE;
let valMax1 = Number.MAX_VALUE + 1;
console.log(valMax);
console.log(valMax1);
if ((valMax = valMax1)) {
  console.log("Los valores son iguales");
} else if (valMax1 >= valMax) {
  console.log("El valor mayor es el que se le sumó 1");
} else {
  console.log("Error");
}
