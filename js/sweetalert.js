Swal.fire({
	html: '<strong><h3>Añade la repo de <a href="https://jailbreak-update.github.io/repo%20cydia/add%20repo.html" target="_blank">Jailbreak-Update</a></h3>',
	position: "top",
	timer: 3000,
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
					confirmButtonText: '<a href="https://jailbreak-update.github.io/en/mentenimiento.html" style="text-decoration: none; color: white;">Yes</a>', 
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
