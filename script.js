document.getElementById('btn-submit').addEventListener('click', function(){
 const emailField = document.getElementById('user-email');
  const email = emailField.value;
  console.log(email);
  const passwordField = document.getElementById('user-pass');
  const pass = passwordField.value;
  console.log(pass);
  if(email === 'sandy.mitra488@gmail.com' && pass === 'secret$77'){
    console.log('Valid user')
    window.location.href = 'bank.html';
  }else{
    console.log('Invalid user')
    }
});