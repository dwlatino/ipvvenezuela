const tonalidadesCifrado = [
"A","A#","B","C","C#","D","D#","E","F","F#","G","G#",
"A","A#","B","C","C#","D","D#","E","F","F#","G"];
const tonalidades = [
"LA","LA#","SI","DO","DO#","RE","RE#","MI","FA","FA#","SOL","SOL#",
"LA","LA#","SI","DO","DO#","RE","RE#","MI","FA","FA#","SOL"];

const primera = document.getElementsByClassName("primera");
const primeraSost = document.getElementsByClassName("primeraSost");
const segunda = document.getElementsByClassName("segunda");
const tercera = document.getElementsByClassName("tercera");
const terceraSost = document.getElementsByClassName("terceraSost");
const cuarta = document.getElementsByClassName("cuarta");
const cuartaSost = document.getElementsByClassName("cuartaSost");
const quinta = document.getElementsByClassName("quinta");
const sexta = document.getElementsByClassName("sexta");
const sextaSost = document.getElementsByClassName("sextaSost");
const septima = document.getElementsByClassName("septima");
const septimaSost = document.getElementsByClassName("septimaSost");



function insertarNotas(){

const obtenerTonalidad = document.getElementById("tonalidad_cancion").value.toUpperCase();
if (obtenerTonalidad==="") {
	for(let i=0; i < primera.length; i++) {primera[i].innerHTML=""};
	for(let i=0; i < primeraSost.length; i++) {primeraSost[i].innerHTML=""};
	for(let i=0; i < segunda.length; i++) {segunda[i].innerHTML=""};
	for(let i=0; i < tercera.length; i++) {tercera[i].innerHTML=""};
	for(let i=0; i < terceraSost.length; i++) {terceraSost[i].innerHTML=""};
	for(let i=0; i < cuarta.length; i++) {cuarta[i].innerHTML=""};
	for(let i=0; i < cuartaSost.length; i++) {cuartaSost[i].innerHTML=""};
	for(let i=0; i < quinta.length; i++) {quinta[i].innerHTML=""};
	for(let i=0; i < sexta.length; i++) {sexta[i].innerHTML=""};
	for(let i=0; i < sextaSost.length; i++) {segunda[i].innerHTML=""};
	for(let i=0; i < septima.length; i++) {segunda[i].innerHTML=""};
	for(let i=0; i < segunda.length; i++) {segunda[i].innerHTML=""};
}else{

const indiceDeTonalidadDeterminada = tonalidadesCifrado.findIndex(function(valor, indice) {
	return valor===obtenerTonalidad
});

	for(let i=0; i < primera.length; i++) {primera[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada]};
	for(let i=0; i < primeraSost.length; i++) {primeraSost[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+1]};
	for(let i=0; i < segunda.length; i++) {segunda[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+2]+"m"};
	for(let i=0; i < tercera.length; i++) {tercera[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+3]+"m"};
	for(let i=0; i < terceraSost.length; i++) {terceraSost[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+4]};
	for(let i=0; i < cuarta.length; i++) {cuarta[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+5]};
	for(let i=0; i < cuartaSost.length; i++) {cuartaSost[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+6]};
	for(let i=0; i < quinta.length; i++) {quinta[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+7]};
	for(let i=0; i < sexta.length; i++) {sexta[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+9]+"m"};
	for(let i=0; i < sextaSost.length; i++) {segunda[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+10]};
	for(let i=0; i < septima.length; i++) {segunda[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+11]};
	for(let i=0; i < segunda.length; i++) {segunda[i].innerHTML=tonalidadesCifrado[indiceDeTonalidadDeterminada+12]};
};};

