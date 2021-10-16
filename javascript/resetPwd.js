function errorMessage() {
        var error = document.getElementById("error")
        var error1 = document.getElementById("error1")
        var error2 = document.getElementById("error2")
	var pattern = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
        var pass = document.getElementById("pass").value
	var cpass = document.getElementById("cpass").value
	if (pass == "") {
		error1.textContent = ""
		error2.textContent = ""
       		error.textContent = "please fill the field"
          	error.style.color = "red"
        } 
	else{
            	 error.textContent = ""
		 if(!pattern.test(pass)){
			error1.textContent = ""
			error2.textContent = ""
			error.textContent = "your password is weak please use one capital letter,number and one special char"
          		error.style.color = "red"
		}
		else{	
		 if (pass == "Jan@3"){
			error1.textContent = ""     
			error2.textContent = ""    		
			error.textContent = "old password cannot be your new password"
            		error.style.color = "red"
      		 } 
		 else{
			error1.textContent = ""
			error2.textContent = ""
			error.textContent = ""
	    		if (pass != cpass){
            			error1.textContent = "confirm password should be equal to password"
            			error1.style.color = "red"
            		} 
	    		else{
            			error1.textContent = ""
				error2.textContent = "your password has been reseted"
                		error2.style.color = "black"
            		}
		  } 
        	}
	}
}

function myFunction(x) {
  x.classList.toggle("fa-eye-slash");
  if(document.getElementById('pass').type == 'password'){
	document.getElementById('pass').type = 'text'
  }
  else{
	document.getElementById('pass').type = 'password'
  }
} 
function myFunction1(x) {
  x.classList.toggle("fa-eye-slash");
  if(document.getElementById('cpass').type == 'password'){
	document.getElementById('cpass').type = 'text'
  }
  else{
	document.getElementById('cpass').type = 'password'
  }
} 
