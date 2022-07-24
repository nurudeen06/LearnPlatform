$(".register").submit((e)=>{
	e.preventDefault()
	let name = $("#name").val()
	let email = $("#email").val()
	let username = $("#username").val()
	let password = $("#password").val()
	let cPassword = $("#cPassword").val()

	if(password != cPassword){
		alert("Password do not match Confirm Password")
	}else{
		let input = {
			"name" : name,
			"email" : email,
			"username" : username,
			"password" : password
		}
		let data = JSON.stringify(input)
		if(localStorage.newWorld == undefined){
			localStorage.newWorld=data
			alert("Registered...")
		}else{
			alert("Already Registered an Account")
		}
	}
})