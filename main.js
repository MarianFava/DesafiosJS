//Desafío 1 Sintaxis y Variables//

/*Se ingresan los valores de los productos
let productoA = parseInt (prompt("Precio productoA:"));
let productoB = parseInt (prompt("Precio productoB:"));
Se realiza la suma de los precios ingresados
let precioTotal = productoA + productoB;
 muestra en consola*/

//Desafío 2 Control de flujos//

/*console.log(precioTotal);

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >=18) {
   console.log("Es mayor de edad");
}
else{
   console.log("Es menor de edad");
   alert("Prohibida la venta a menores de 18 años");
}*/

//Desafío 3 Ciclos Iteraciones//

//Declaracion de variables//
//Se guardan datos de usuarios registrados//
let usuarioGuardado = "Marian Fava";
let contraseniaGuardada = "Qwerty0987";
//Declaración de variables de usuario y contraseña a ingresar por pantalla//
let usuarioIngresado; 
let contraseniaIngresada; 
//Contador de intentos fallidos//
let intentosFallidos = 0;

do{
//Ingreso de usuario y contraseña por pantalla//
   usuarioIngresado = prompt("Ingrese su usuario");

   contraseniaIngresada = prompt ("Ingrese su contraseña");
   
   if(usuarioIngresado == usuarioGuardado && contraseniaIngresada == contraseniaGuardada ){
      alert("Ingreso exitoso");
      break;

   }else{
      alert("Usuario y/o contraseña incorrecta");
      intentosFallidos = intentosFallidos + 1;
   }
   //Se reintentará ingreso hasta 3 veces//
}while(intentosFallidos < 3)

if( intentosFallidos == 3){
   alert("Se supero la cantidad de intentos fallidos. Intente más tarde")
}
 
   



