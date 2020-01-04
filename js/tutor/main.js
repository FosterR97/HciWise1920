function sendChatMessage(){
    let text = document.getElementById('chatbox').value;
    document.getElementById('chatbox').value = "";
    document.getElementById('chat').innerHTML += "<div class=\"container right\"><div class=\"content\"><p><i>Max</i><br></p><p>"+ text +"</p></div></div>";
}
