window.onload = function(){
	let button1 = document.querySelector('.btn-message');
	console.log(button1);
	let button2 = document.querySelector('.message-submit');
	console.log(button2);
	let button3 = document.querySelector('.btn-follow');
	console.log(button3);
	let modal = document.querySelector('.modal');
	console.log(modal);
	button1.addEventListener('click', function(e){
		modal.style.visibility = 'visible';
	});
	button2.addEventListener('click', function(e){
		modal.style.visibility = 'hidden';
		alert("Thank You! The Message was successfully sent!");
		ClearFields();	
	});
	button3.addEventListener('click', function(e){
		alert("Thank You! You are following Alinur Sabit now!")
	})
};

function ClearFields() {
			document.getElementById("1").value = "";
		    document.getElementById("2").value = "";
		    document.getElementById("3").value = "";
}