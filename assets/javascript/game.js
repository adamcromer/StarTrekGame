$(document).ready(function() {

let Data = {
    name:"Lieutenant Commander Data",
    health:320,
    attack:16 
};

let Worf = {
    name:"",
    health:270,
    attack:15
};

let Troi = {
    name:"",
    health:340,
    attack:12 
};

let Geordi = {
    name:"",
    health:280,
    attack:14 
};

let BorgDrone = {
    name:"Borg Drone",
    health:250,
    attack:13
};



function updateCharInfo() {
    document.getElementById("charHealth").innerHTML = Data.health;
    document.getElementById("charAtt").innerHTML = Data.attack;
    document.getElementById("charName").innerHTML = Data.name;

    document.getElementById("enemyHealth").innerHTML = BorgDrone.health;
    document.getElementById("enemyAtt").innerHTML = BorgDrone.attack;
    document.getElementById("enemyName").innerHTML = BorgDrone.name;
}



updateCharInfo();


});