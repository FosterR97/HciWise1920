function intervalSetter(){
    setInterval(countdown, 1500);
}

function countdown(){
    let i = document.getElementById("countdown").innerText;
    if(i == 0){
        window.location.replace("tutor.html");
    }
    else{
        i--;
        document.getElementById("countdown").innerText = i;
    }
}
