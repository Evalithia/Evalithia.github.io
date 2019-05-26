var yes = 0;
var no = 0;
var pcty = 0;
var pctn = 0;

function launch() {
    yes = Math.floor((Math.random()*11+90));
    no = Math.floor((Math.random()*11+90));
    pcty = ((yes / (yes+no)) * 100).toFixed(2);
    pctn = ((no / (yes+no)) * 100).toFixed(2);
}
function displayValues() {
    document.getElementById('yes').innerHTML = yes.toLocaleString();
    document.getElementById('no').innerHTML = no.toLocaleString();
    document.getElementById('pcty').innerHTML = pcty;
    document.getElementById('pctn').innerHTML = pctn;
}

function showText() {
    var y = document.getElementById('textyes');
    var n = document.getElementById('textno');
    var p1 = document.getElementById('percent1');
    var p2 = document.getElementById('percent2');
    if (y.style.display === "none" || n.style.display === "none" || p1.style.display === "none" || p2.style.display === "none") {
        y.style.display = "inline";
        n.style.display = "inline";
        p1.style.display = "inline";
        p2.style.display = "inline";
      } 
}

function maybe() {
    yes = yes + Math.ceil((Math.random() * .1 * yes + 1));
    no = no + Math.ceil((Math.random() * .1 *  no + 1));
    pcty = ((yes / (yes+no)) * 100).toFixed(2);
    pctn = ((no / (yes+no)) * 100).toFixed(2);
    showText();
    displayValues();
}