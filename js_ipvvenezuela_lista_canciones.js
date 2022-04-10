const bandejaCanciones=document.getElementById("bandeja_canciones");
class Cancion {
	constructor(nombreCancion, autorCancion, tonalidadRecomendada){
		this.nombre=nombreCancion;
		this.autor=autorCancion;
		this.tonalidades=tonalidadRecomendada;		
	};
	mostrarInformacion(){
		return this.nombre +`<br>`+ this.autor +`<br>`;
	};
};

var elDiosQueAdoramos=new Cancion("El Dios que adoramos", "Soverein Grace Music", "E-A");
var graciasCristo=new Cancion("Gracias Cristo", "Soverein Grace Music", "E-A");


const cancionesIPV=[
`${elDiosQueAdoramos.mostrarInformacion()}`,
`${graciasCristo.mostrarInformacion()}`
]
bandejaCanciones.innerHTML=cancionesIPV;
