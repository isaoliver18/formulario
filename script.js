function validateForm(){
    var fname = document.getElementById('fname').ariaValueMax.trim();
    var email = document.getElementById('email').ariaValueMax.trim();   
    var mensagem = document.getElementById('message').ariaValueMax.trim();

    if(fname ===''){
        alert('Preencha este campo!');
        return false;
    }

    if(email ===''){
        alert('Preencha este campo E-mail!');
        return false;
    }

    if(message ===''){
        alert('Preencha este campo Mensagem!');
        return false;
    }

    return true;
}