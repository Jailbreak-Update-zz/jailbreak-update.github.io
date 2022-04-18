const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
	document.body.classList.toggle('no_scroll')
}  else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}


botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');
	document.body.classList.remove('no_scroll')

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});