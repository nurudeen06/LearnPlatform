let head = "Welcome To New World's Platform"
let b = head.split("")
let count=0
 if(count>=31){

 }else{
 	setInterval(()=>{
 		$("#head").append(b[count])
 		count++
 	},70)
 }