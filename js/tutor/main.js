stateMic = false;
stateShare = false;
tutoractive = true;


function sendChatMessage(){
    if(!tutoractive){
        swalfire('Warnung', 'Dein Tutor ist nicht mehr im Chatraum. Bitte verlasse den Chatraum! Du kannst keine Nachrichten mehr senden!', 'error', 'Okay')
        return;
    }
    let text = document.getElementById('chatbox').value;
    document.getElementById('chatbox').value = "";
    document.getElementById('chat').innerHTML += "<div class=\"container right\"><div class=\"content\"><p><i>Max</i><br></p><p>"+ text +"</p></div></div>";
    setTimeout(answer, 3000);
}

function swalfire(title, text, icon, confirmText){
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmText
    });
}

function sendFile(){
    if(!tutoractive){
        swalfire('Warnung', 'Dein Tutor ist nicht mehr im Chatraum. Bitte verlasse den Chatraum! Du kannst keine Nachrichten mehr senden!', 'error', 'Okay')
        return;
    }
    let files = document.getElementById("file").files;
    document.getElementById('chat').innerHTML += "<div class=\"container right\"><div class=\"content\"><p><i>Max</i><br></p><p><img src='../images/file.png' />"+ files[0].name+"</p></div></div>";
    setTimeout(answerTwo, 4000);
    setTimeout(answerThree, 9000);
    setTimeout(showScreenSharing, 12000);
    setTimeout(tutorEXIT, 16000);
}

function answer(){
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p>Okay, ich schaue eben mal nach. Kannst du mir eben mal die Quellcode-Datei hochladen?</p></div></div>";
}

function answerTwo(){
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p>Danke für die Datei, ich gucke eben mal rein.</p></div></div>";
}

function answerThree(){
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p>Ich gebe dir gleich mal das Screensharing frei, ich habe dir deinen Fehler markiert.</p></div></div>";
}

function tutorEXIT(){
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p>Du solltest nun ja alles verstanden haben nehm ich an? Nun gut, ich kümmere mich um den nächsten; Tschüss!.</p></div></div>";
    document.getElementById('chat').innerHTML += "<div class=\"container left\"><div class=\"content\"><p><i>Peter</i><br></p><p><i>Hat die Konversation verlassen...</i></p></div></div>";
    tutoractive = false;
}

function showScreenSharing(){
    window.scrollTo(0,0);
    swalfire('Info', 'Screen Sharing deines Tutors wurde dir freigegeben!', 'info', 'Okay');
    window.scrollTo(0,0);
    document.getElementById('overlay').style.visibility = "visible";
    document.getElementById('closebox').style.visibility = "visible";
    document.getElementById('viewbox').style.visibility = "visible";
}

function closeScreenSharing(){
    swalfire('Info', 'Screen Sharing deines Tutors wurde von dir beendet!', 'info', 'Okay');
    document.getElementById('overlay').style.visibility = "hidden";
    document.getElementById('closebox').style.visibility = "hidden";
    document.getElementById('viewbox').style.visibility = "hidden";
}

function leaveChat(){
    var result = prompt("Waren Sie zufrieden mit Ihrem Tutor? Vergeben Sie bitte eine Schulnote (1-6)");
    window.location.replace("menu.html");
}

function imageMic(){
    if(stateMic){
        document.getElementById('micImg').src = "../images/microphone-black-shape-disabled.png";
        swalfire('Microphone', 'Dein Microphone wurde deaktiviert', 'info', 'Okay');
        stateMic = false;
    }
    else{
        document.getElementById('micImg').src = "../images/microphone-black-shape.png";
        swalfire('Microphone', 'Dein Microphone wurde aktiviert', 'success', 'Okay');
        stateMic = true;
    }
}

function imageShare(){
    if(stateShare){
        document.getElementById('shareImg').src = "../images/share-disabled.png";
        swalfire('Screen Sharing', 'Dein Screen Sharing wurde deaktiviert', 'info', 'Okay');
        stateShare = false;
    }
    else{
        document.getElementById('shareImg').src = "../images/share.png";
        swalfire('Screen Sharing', 'Dein Screen Sharing wurde aktiviert', 'success', 'Okay');
        stateShare = true;
    }
}
