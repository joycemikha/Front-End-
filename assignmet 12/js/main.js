// Name and Password from the register-form
var namee = document.getElementById('namee');
var email = document.getElementById('email');
var pass = document.getElementById('pass');



// storing input from register-form
function store() {
    localStorage.setItem('namee', namee.value);
    localStorage.setItem('pass', pass.value);
    localStorage.setItem('email', email.value);
    if( pass.value !== "" || email.value !== "" ) {
        alert('Sucess');
    }else {
        alert('please enter valid data');
    }
}


function check() {

    var storedPass = localStorage.getItem('pass');
    var storedEmail = localStorage.getItem('email');

    var pass = document.getElementById('pass');
    var email = document.getElementById('email');

    if( pass.value == storedPass && email.value == storedEmail ) {
        event.preventDefault();
          location.href = '../home.html';
    }else {
         alert('please enter valid email and password');
    }
}

    
    document.getElementById("username").textContent = localStorage.getItem('namee');




