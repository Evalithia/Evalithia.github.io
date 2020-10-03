var input = "";
var output = "";

function generate() {
    input = document.getElementById('text1').value;
    for (var i = 0; i < input.length; i++) {
        inputchar = input.charAt(i).toLowerCase()
        if ('a' <= inputchar && inputchar <= 'z') {
            output += ":regional_indicator_" + inputchar + ": ";
        }
      }
      document.getElementById('text3').innerHTML = output.toLocaleString();
}