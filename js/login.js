document.getElementById('submit-btn').addEventListener('click' , function(){
    const emailField = document.getElementById('user-email') ;
    const email = emailField.value ;
    const passwordField = document.getElementById('user-password') ;
    const password = passwordField.value ;

    const userEmail = 'sontan@baap.com' ;
    const userPassword = 'secret' ;
    if (email === userEmail && password === userPassword){
        window.location.href = 'dashboard.html'
    }
    else{
        alert('Please Input Create Information')
    }
})