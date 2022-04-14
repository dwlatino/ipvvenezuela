class Cancion {
	constructor(nombreCancion, autorCancion, tonalidadRecomendada, letra){
		this.nombre=nombreCancion;
		this.autor=autorCancion;
		this.tonalidades=tonalidadRecomendada;
		this.letra=letra;	
	};
	mostrarInformacion(){
		return this.nombre +`<br>`+ this.autor +`<br>`;
	};
	mostrarLetra(){
		return this.letra
	};
};
let salmo1v1=new Cancion("Salmo 1 v.1", "Eduardo Osteicoechea", "D-F", "");
let salmo1v2=new Cancion("Salmo 1 v.2", "Eduardo Osteicoechea", "D-F", `
<p>
Como el viento pasan los malvados<br>
Caerán en juicio condenados<br>
Su camino de impiedad perecerá<br>
En el reino del Señor no entrarán
</p>`);
let salmo1v3=new Cancion("Salmo 1 v.3", "Eduardo Osteicoechea", "D-F", "");
let graciasCristo=new Cancion("Gracias Cristo", "Soverein Grace Music", "E-A", "");


const cancionesIPV=[
`${salmo1v1.mostrarInformacion()}`,
`${salmo1v2.mostrarInformacion()}`,
`${salmo1v3.mostrarInformacion()}`
]

const bandejaCanciones=document.getElementById("bandeja_canciones");
bandejaCanciones.innerHTML=cancionesIPV;


