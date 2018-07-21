// JScript source code
var level = 1;

var HP = 100;
var maxHP = 100;
var PP = 50;
var maxPP = 50;

var PWR = 10;
var ATT = 0;

var DEF = 10;
var AMR = 0;

var SPD = 10;
var BST = 0;

var tesi = 0;
var doken = 0;

function DisplayValues() {
    document.getElementById('level').innerHTML = level;
    document.getElementById('HP').innerHTML = HP;
    document.getElementById('maxHP').innerHTML = maxHP;
    document.getElementById('PP').innerHTML = PP;
    document.getElementById('maxPP').innerHTML = maxPP;
    document.getElementById('PWR').innerHTML = PWR;
    document.getElementById('ATT').innerHTML = ATT;
    document.getElementById('DEF').innerHTML = DEF;
    document.getElementById('AMR').innerHTML = AMR;
    document.getElementById('SPD').innerHTML = SPD;
    document.getElementById('BST').innerHTML = BST;
    document.getElementById('tesi').innerHTML = tesi;
    document.getElementById('doken').innerHTML = doken;
}

function LevelUpTest() {
    level = level + 1;
    maxHP = maxHP + Math.floor((Math.random() * level) + 1);
    maxPP = maxPP + Math.floor((Math.random() * level / 2) + 1);
    PWR = PWR + Math.floor((Math.random() * level / 5) + 1);
    DEF = DEF + Math.floor((Math.random() * level / 5) + 1);
    SPD = SPD + Math.floor((Math.random() * level / 5) + 1);


    HP = maxHP;
    PP = maxPP;
    DisplayValues();
    document.getElementById('messages').innerHTML = "You leveled up!";
}

function TestAddTesi() {
    tesi = tesi + 1;
    DisplayValues();
}

function Pay2Win() {
    if (tesi==0) {
        document.getElementById('messages').innerHTML = "Not enough Tesi!";
    }
    else {
        PWR = PWR + 999999;
        DEF = DEF + 999999;
        SPD = SPD + 999999;
        ATT = ATT + 999;
        AMR = AMR + 999;
        BST = BST + 999;
        maxHP = maxHP + 999999;
        maxPP = maxPP + 999999;
        HP = maxHP;
        PP = maxPP;
        tesi = tesi - 1;
        DisplayValues();
        document.getElementById('messages').innerHTML = "You win the game!";
    }

    
}