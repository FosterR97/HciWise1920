function login(e){
    e.preventDefault();
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(doLogin(user,password)){
        window.location.replace("menu.html");
    }
    else{
        document.getElementById("errormsg").innerText = "Wrong username or password!";
    }
}
