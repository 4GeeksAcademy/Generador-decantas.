let palos = [ "♦", "♥", "♠", "♣" ];
let valores = [ "A", "2","3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K"];

let boton = document.getElementById("btn");
let divsuperior = document.getElementById("superior");
let divcentro = document.getElementById("centro");
let divinferior = document.getElementById("inferior");
let lacarta = document.getElementById("carta");


let ancho = document.getElementById("ancho");
let alto = document.getElementById("alto");


function generarCarta() { 

///ancho y alto///  
  
if (ancho.value) {
  lacarta.style.width = `${ancho.value}px`;
}

if (alto.value){
   lacarta.style.height = `${alto.value}px`;
}



let paloAzar = palos[Math.floor(Math.random() * palos.length)];
let valoresAzar = valores[Math.floor(Math.random() * valores.length)];

divsuperior.innerHTML = valoresAzar + "<br>" + paloAzar;
divcentro.innerHTML = valoresAzar ;
divinferior.innerHTML = valoresAzar  + "<br>" + paloAzar ;


 if (paloAzar === "♥" || paloAzar === "♦") 
  { lacarta.style.color = "red" ;

 } else { 
  lacarta.style.color = "black" ; }

}


generarCarta();

btn.addEventListener ("click" , generarCarta);



window.onload = function (){

}

setInterval(generarCarta , 10000);

