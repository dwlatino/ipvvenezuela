const cabecera = document.getElementById("cabecera");
cabecera.innerHTML = `
<a id="logo_cabecera" href="index.html">
	<img src="medios_audiovisuales/img_logo_ipvvenezuela.svg" 
	alt="Logo de Iglesia Cristiana Bíblica Palabra Viva">
</a>
<div id="menu_cabecera">
	<div></div>
	<div></div>
	<div></div>
</div>
`
const botonMenuCabecera = document.getElementById("menu_cabecera");
const menuInicio = document.getElementById("navegacion_principal");
botonMenuCabecera.addEventListener("click", function () {
			  menuInicio.scrollIntoView({
				 behavior: "smooth",
				 block: "center",
				 inline: "end"
			  })
		});
		
const textoClaveAlFondoDePagina = document.getElementById("texto_clave_fondo");
textoClaveAlFondoDePagina.innerHTML = `
<p>Iglesias edificadas
  <br><span id="linea_2">sobre el fundamento</span>
  <br>de los apóstoles y profetas
  <br><span id="linea_4">siendo Cristo Jesús</span>
  <br>la piedra angular
</p>
`

const navegacionPrincipal = document.getElementById("navegacion_principal");
navegacionPrincipal.innerHTML = `
<a href="index.html">Inicio</a>
<a href="iglesias.html">Iglesias</a>
<a href="recursos.html">Recursos</a>
<a href="apoya.html">Apoya</a>
`

const pieDePagina = document.getElementById("pie_de_pagina");
pieDePagina.innerHTML = `
<p>Correo: ipvvenezuela@gmail.com</p>
<p>Instagram: icbpalabraviva</p>
<p>Whatsapp: +58 424 917 2916</p>
`
