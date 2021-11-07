function navbar(id){
    if( id == 'home' ){
        document.getElementById('inicio').classList.add('show')
        document.getElementById('inicio').classList.remove('hide')
        document.getElementById('nosotros').classList.add('nosotros')

        document.getElementById('logReg').classList.add('hide')
    } else if ( id == 'us' ){
        document.getElementById('nosotros').classList.add('show')
        document.getElementById('nosotros').classList.remove('nosotros')
        document.getElementById('nosotros').classList.remove('hide')
        document.getElementById('inicio').classList.add('hide')

        document.getElementById('logReg').classList.add('hide')
    }
}


/* LOGIN */
function formLog(id){

    document.getElementById('logReg').classList.add('show');
    document.getElementById('logReg').classList.remove('hide');

    document.getElementById('inicio').classList.add('hide');
    document.getElementById('nosotros').classList.add('hide');

    

    if( id == 'log' || id == 'signIn' ){
        console.log('Le diste click a log');
        //document.getElementById("log").setAttribute("href", "https://www.w3schools.com");
        document.getElementById('main-reg').classList.add('hide');
        document.getElementById('main-log').classList.remove('hide');

        document.getElementById('reg').classList.remove('active-btn');
        document.getElementById('log').classList.add('active-btn');
    } else if ( id == 'reg' || id == 'register' ){
        console.log('Le diste click a reg');
        document.getElementById('main-log').classList.add('hide');
        document.getElementById('main-reg').classList.remove('hide');
        document.getElementById('main-reg').classList.remove('main-reg');
        
        
        document.getElementById('reg').classList.add('active-btn');
        document.getElementById('log').classList.remove('active-btn');
        

    }
}



function registerLog(){
    var email = document.getElementById('email').value;
    var names = document.getElementById('names').value;
    var lastname = document.getElementById('lastname').value;
    var organization = document.getElementById('organization').value;
    var jobtitle = document.getElementById('jobtitle').value;

    if( email == '' && names == '' && lastname == '' && organization == '' && jobtitle == '' ){
        document.getElementById("btnSubmit").disabled=true;
        document.getElementById("btnSubmit").classList.remove('pwc-btn');
        document.getElementById("btnSubmit").classList.add('pwc-btn-disabled');

    }if(  email != '' && names != '' && lastname != '' && organization != '' && jobtitle != '' ){
        document.getElementById("btnSubmit").disabled=false;
        document.getElementById("btnSubmit").classList.add('pwc-btn');
        document.getElementById("btnSubmit").classList.remove('pwc-btn-disabled');
    }

}


function validate(){
    var emaillogin=document.f1.emaillogin.value;
    var passwordlogin=document.f1.passwordlogin.value;
    
    if( emaillogin=='pwccorreo@mail.com' && passwordlogin=='PWCpassword' ){
        window.location.href = "https://www.pwc.com/";
        return true;
    }
    else{
        invalid();
        return false;
    }
}


//MODAL
function invalid(){

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnLogin");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
  
    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}



//----------------------------------------------------------------
/*
function inputVal(){
    var email = document.getElementById('email').value;
    var names = document.getElementById('names').value;
    var lastname = document.getElementById('lastname').value;

    if( email != '' ){
        email.classList.add('input-active');
        console.log('Input NO ESTÁ VACIO!')
    } else if ( names != '' ){
        names.classList.add('input-active');
    } else if ( lastname != '' ) {
        lastname.classList.add('input-active');
    }
}
*/

/* HAMBURGUER */
function hamburguer(){
    alert('La hamburguesería!!!!')
    document.getElementById('dropdown').classList.add('show');
    document.getElementById('dropdown').classList.remove('pwc-options');
}

/* BTN LOGIN */
function login(){
    var emaillogin = document.getElementById('emaillogin').value;
    var passwordlogin = document.getElementById('passwordlogin').value;

    if( emaillogin == '' && passwordlogin == '' ){
        document.getElementById("btnLogin").disabled=true;
        document.getElementById("btnLogin").classList.remove('pwc-btn');
        document.getElementById("btnLogin").classList.add('pwc-btn-disabled');

    }else if( emaillogin != '' && passwordlogin != '' ){
        document.getElementById("btnLogin").disabled=false;
        document.getElementById("btnLogin").classList.add('pwc-btn');
        document.getElementById("btnLogin").classList.remove('pwc-btn-disabled');
    
    } else {
        //console.log('Inputs vacios... :(')
    }

}

