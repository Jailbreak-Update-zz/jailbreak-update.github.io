/*Swal.fire({
	html: '<strong><h3>Lets make it trending <a href="https://twitter.com/hashtag/UntetherDay?src=hashtag_click" target="_blank">#UntetherDay</a></h3> <br> <h4>Vamos a hacerlo tendencia <a href="https://twitter.com/hashtag/UntetherDay?src=hashtag_click" target="_blank">#UntetherDay</a></h4>',
	position: "top",
	timer: 6000,
	timerProgressBar: true,
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
  })*/


  $("#btn0").click(function(){
    const { value: idioma } = Swal.fire({
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
	  confirmButtonText: 'Seleccionar',
	  backdrop: true,
		html: '<h2>Seleciona tu idioma</h2> <h3><p>(Select your language)</p></h3>',
		input: 'select',
		inputOptions: {
			Español: 'Español (Spanish)',
			Ingles: 'Ingles (English)'
		},
		inputValidator: (value) => {
			return new Promise((resolve) => {
			  if (value === 'Español') {
				Swal.fire({
				  allowOutsideClick: false,
					 allowEscapeKey: false,
					allowEnterKey: false,
				  showConfirmButton: true,
				  confirmButtonText: '<a href="https://jailbreak-update.github.io/" style="text-decoration: none; color: white;">Si</a>',
				  showCancelButton: true,
				  cancelButtonText: '<a href="https://jailbreak-update.github.io/" style="text-decoration: none; color: white;">No</a>', 
				  backdrop: true, 
				  html: '<h2>Seleccionaste idioma Español es correcto</h2>',
				})
			  } 
			  if (value === 'Ingles') {
				Swal.fire({
				  allowOutsideClick: false,
					 allowEscapeKey: false,
					allowEnterKey: false,
					showConfirmButton: true,
					confirmButtonText: '<a href="https://jailbreak-update.github.io/en/" style="text-decoration: none; color: white;">Yes</a>', 
					showCancelButton: true,
					cancelButtonText: '<a href="https://jailbreak-update.github.io/" style="text-decoration: none; color: white;">No</a>',
					backdrop: true,
				  html: '<h2>You selected language English is correct</h2>',
				})
			  } else {
				resolve('Necesitas seleccionar un idioma')
			  }
			  
			})
		  }
	})
})

$("#btn1").click(function(){
    const { value: idioma } = Swal.fire({
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
	  confirmButtonText: 'OK',
	  backdrop: true,
	  imageUrl: '//jailbreak-update.github.io/img/1c094e21-8ac0-4efc-ba65-2a494e28924d.jfif',
	  imageHeight: 300,
	  html: '<a href="//t.me/joinchat/VoeYI1-XmFc2N2Fh" target="_blank">//t.me/joinchat/VoeYI1-XmFc2N2Fh</a> ',
		
		
	})
})
