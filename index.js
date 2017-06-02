// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Call the X to close Modal.
var span = document.getElementsByClassName("close")[0];

// Close modal by X
span.onclick = function() {
    modal.style.display = "none";
};

// Close Modal by clicking outside Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// Call Modal after set time
setTimeout(function (){
	modal.style.display = "block";
}, 1000);
//submit button in Modal
let submit = document.getElementById('submit');
let email = document.getElementById('email');
let password = document.getElementById('password');
submit.addEventListener('click', func);
function func () {
	if (email.value.length > 6 && password.value.length > 4) {
		alert("Thank you, an email will be sent shortly.")
	}else {
		alert('Invalid email/password')
	}
};