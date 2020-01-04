stateMic = false;
stateShare = false;


function sendChatMessage(){
    let text = document.getElementById('chatbox').value;
    document.getElementById('chatbox').value = "";
    document.getElementById('chat').innerHTML += "<div class=\"container right\"><div class=\"content\"><p><i>Max</i><br></p><p>"+ text +"</p></div></div>";
    setTimeout(answer, 3000);
}

function sendFile(){
    let files = document.getElementById("file").files;
    document.getElementById('chat').innerHTML += "<div class=\"container right\"><div class=\"content\"><p><i>Max</i><br></p><p><img src='../images/file.png' />"+ files[0].name+"</p></div></div>";
    setTimeout(answerTwo, 4000);
}

function answer(){
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p>Okay, ich schaue eben mal nach.</p></div></div>";
}

function answerTwo(){
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p>Danke für die Datei, ich gucke eben mal rein.</p></div></div>";
}

function leaveChat(){
    var result = prompt("Waren Sie zufrieden mit Ihrem Tutor? Vergeben Sie bitte eine Schulnote (1-6)");
    window.location.replace("menu.html");
}

function imageMic(){
    if(stateMic){
        document.getElementById('micImg').src = "../images/microphone-black-shape-disabled.png";
        alert("Microphone wurde deaktiviert.");
        stateMic = false;
    }
    else{
        document.getElementById('micImg').src = "../images/microphone-black-shape.png";
        alert("Microphone wurde aktiviert.");
        stateMic = true;
    }
}

function imageShare(){
    if(stateShare){
        document.getElementById('shareImg').src = "../images/share-disabled.png";
        alert("Screen Sharing wurde deaktiviert.");
        stateShare = false;
    }
    else{
        document.getElementById('shareImg').src = "../images/share.png";
        alert("Screen Sharing wurde aktiviert.");
        stateShare = true;
    }
}
