var smc = 0;
var name = 'You';
var sanitize = document.createElement('div');

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        post();
    }
});

function post() {
    var raw = document.getElementById('msgBox');
    var msg = String(raw.value);
    sanitize.innerText = msg;
    var clean = sanitize.innerHTML;


if (msg == '') {
    //do nothing lol
}
else {
    document.getElementById('messages').innerHTML += '<strong>' + name + ': </strong>' + clean + '<br />';
    document.getElementById('msgBox').value = "";
    var objDiv = document.getElementById("scroll");
    objDiv.scrollTop = objDiv.scrollHeight;
    smc++;
}

}