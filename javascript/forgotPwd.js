function errorMessage() {
        var error = document.getElementById("error")
        var error1 = document.getElementById("error1")
        var error3 = document.getElementById("error3")
        var email = document.getElementById("email").value
	var usrnm = document.getElementById("usrnm").value
        if (email != 'jan03112000@gmail.com') 
        {
            error.textContent = "Please enter a valid email"
            error.style.color = "red"
        } else {
            error.textContent = ""
        }
	if (usrnm != 'cb.en.u4cse18325') 
        {
            error1.textContent = "Please enter a valid username"
            error1.style.color = "red"
        } else {
            error1.textContent = ""
        } 
	if (usrnm == 'cb.en.u4cse18325' && email == 'jan03112000@gmail.com') 
        {
	    error3.textContent = "The confirmation mail has been sent"
            error3.style.color = "black"
        } 
        else {
            error3.textContent = ""
        }
}
