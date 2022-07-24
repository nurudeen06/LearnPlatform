$(".login-form").submit((e)=>{
	e.preventDefault()	
	let username = $("#username").val()
	let password = $("#password").val()

	let data = JSON.parse(localStorage.newWorld)
	if(username == data.username && password == data.password){
		alert("Logged In...")
		location.href= "/dashboard"
	}else{
		alert("Incorrect Details")
	}
})