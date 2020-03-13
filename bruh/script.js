var typ = [
    'Class',
    'Type',
    'Mode',
    'Level',
    'Tier',
    'Model'
];
var styp = 'Class';
var lvl = 0;

function generate() {
    lvl = Math.floor((Math.random()*999));
    var styp_select = Math.floor(Math.random()*typ.length);
    styp = typ[styp_select];
    document.getElementById('type').innerHTML = styp.toLocaleString();
    document.getElementById('level').innerHTML = lvl.toLocaleString();
}