function send1() {

    let input1 = document.getElementById("text1");
    let screen1 = document.getElementById("screen1");
    let screen2 = document.getElementById("screen2");    

    var text1 = input1.value;
    input1.value = "";
    var message = document.createElement('li');
    message.innerHTML = text1;
    message.classList.add("message-sent");
    screen1.appendChild(message);
    
    var message_sent = document.createElement('li');
    message_sent.innerHTML = text1;
    message_sent.classList.add("message-recieved");
    screen2.appendChild(message_sent);
}

function send2() {

    let input1 = document.getElementById("text2");
    let screen1 = document.getElementById("screen2");
    let screen2 = document.getElementById("screen1");    

    var text1 = input1.value;
    input1.value = "";
    var message = document.createElement('li');
    message.innerHTML = text1;
    message.classList.add("message-sent");
    screen1.appendChild(message);
    
    var message_sent = document.createElement('li');
    message_sent.innerHTML = text1;
    message_sent.classList.add("message-recieved");
    screen2.appendChild(message_sent);
}


//window.scrollTo(500, 0);

var input1 = document.getElementById("text1");
var input2 = document.getElementById("text2");

input1.addEventListener("click", (e)=> {
     if (e.keyCode == 13) 
        send1();
});
input2.addEventListener("click", (e)=> {
     if (e.keyCode == 13) 
        send2();
});