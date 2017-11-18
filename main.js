 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAb90yTx_rZPpKhd-jF0tQNqncsomHnqp8",
    authDomain: "rentfinds-22659.firebaseapp.com",
    databaseURL: "https://rentfinds-22659.firebaseio.com",
    projectId: "rentfinds-22659",
    storageBucket: "rentfinds-22659.appspot.com",
    messagingSenderId: "29885036537"
  };
  firebase.initializeApp(config);


var messagesRef = firebase.datebase().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//  Submit form
function submitForm(e) {

	e.preventDefault();

// Get values

var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var phone = getInputVal('message');
	
	console.log(name);

// Save message
saveMessage(name, company, email, phone,message);

}

// function to get form values
function getInputVal(id)  {
	return document.getElementById(id).value;
}


// Save message to firebase

function saveMessage(name, company, email, phone,message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message

	});
	
}