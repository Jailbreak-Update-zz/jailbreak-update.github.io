Swal.fire({
	html: '<span class="element"></span>',
	position: "top",
	allowOutsideClick: false,
	allowEscapeKey: false,
	allowEnterKey: false,
	showConfirmButton: true,
	
	showClass: {
	  popup: 'animate__animated animate__fadeInDown'
	},
	hideClass: {
	  popup: 'animate__animated animate__fadeOutUp'
	}
  })


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
			/*Español: 'Español (Spanish)',*/
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
				  confirmButtonText: '<a href="//jailbreak-update.github.io/Banner/Inicio/Inicio.html" style="text-decoration: none; color: white;">Si</a>',
				  showCancelButton: true,
				  cancelButtonText: '<a href="//jailbreak-update.github.io/Banner/Inicio/Inicio.html" style="text-decoration: none; color: white;">No</a>', 
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
					confirmButtonText: '<a href="//jailbreak-update.github.io/en/Banner/Home/Home.html" style="text-decoration: none; color: white;">Yes</a>', 
					showCancelButton: true,
					cancelButtonText: '<a href="//jailbreak-update.github.io/Banner/Inicio/Inicio.html" style="text-decoration: none; color: white;">No</a>',
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
