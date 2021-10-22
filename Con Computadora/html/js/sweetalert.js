/*Swal.fire({
	text: "La versión en inglés está en proceso de renovación. (The English version is under renovation)",
	icon: "info",
	timer: 6000,
	timerProgressBar: true,
	position: "top",
	allowOutsideClick: false,
	allowEscapeKey: false,
	allowEnterKey: false,
	showConfirmButton: false,
	showClass: {
	  popup: 'animate__animated animate__fadeInDown'
	},
	hideClass: {
	  popup: 'animate__animated animate__fadeOutUp'
	}
  });*/


  $("#btn0").click(function(){
    const { value: idioma } = Swal.fire({
		allowOutsideClick: false,
		timer: 4000,
		background: '#fff',
		timerProgressBar: true,
		allowEscapeKey: false,
		allowEnterKey: false,
		showConfirmButton: false,
		backdrop: `rgba(0, 0, 0, 0.9)`,
		html: '<tittle><strong><big>Proximamente</big></strong></tittle><br><br><img src="https://jailbreak-update.github.io/Con%20Computadora/html/img/favicon.png"> Linux Mint v20.2 Cinnamon Edition.iso',
		text:"Linux Mint v20.2 Cinnamon Edition.iso",
		showClass: {
			popup: 'animate__animated animate__fadeInDown'
		  },
		  hideClass: {
			popup: 'animate__animated animate__fadeOutUp'
		  }
		
	})
})
