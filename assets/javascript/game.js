$(document).ready(function () {

    let Data = {
        name: "Lt. Commander Data",
        health: 320,
        attack: 16
    };

    let Worf = {
        name: "Lieutenant Worf",
        health: 270,
        attack: 15
    };

    let Troi = {
        name: "Lt. Commander Troi",
        health: 340,
        attack: 12
    };

    let Geordi = {
        name: "Lt. Commander La Forge",
        health: 280,
        attack: 14
    };

    let BorgDrone = {
        name: "Borg Drone",
        health: 250,
        attack: 13
    };

    let charHealth = $("#charHealth");
    let charAtt = $("#charAtt");
    let charName = $("#charName");
    let enemyHealth = $("#enemyHealth");
    let enemyAtt = $("#enemyAtt");
    let enemyName = $("#enemyName");
    let hasPlayerChosen = false;

    function updateCharInfo() {
        charHealth.html(Data.health);
        charAtt.html(Data.attack);
        charName.html(Data.name);
        enemyHealth.html(BorgDrone.health);
        enemyAtt.html(BorgDrone.attack);
        enemyName.html(BorgDrone.name);
    }

    $("#data").hover(function () {
        charHealth.html(Data.health);
        charAtt.html(Data.attack);
        charName.html(Data.name);
    });
    $("#worf").hover(function () {
        charHealth.html(Worf.health);
        charAtt.html(Worf.attack);
        charName.html(Worf.name);
    });
    $("#troi").hover(function () {
        charHealth.html(Troi.health);
        charAtt.html(Troi.attack);
        charName.html(Troi.name);
    });
    $("#geordi").hover(function () {
        charHealth.html(Geordi.health);
        charAtt.html(Geordi.attack);
        charName.html(Geordi.name);
    });

    if (hasPlayerChosen === false) {
        $("#data").on("click", function () {
            $("#data").hide();
            
            charHealth.html(Data.health);
            charAtt.html(Data.attack);
            charName.html(Data.name);
            hasPlayerChosen = true;
        });
        $("#worf").on("click", function () {
            $("#worf").hide();
            charHealth.html(Worf.health);
            charAtt.html(Worf.attack);
            charName.html(Worf.name);
            hasPlayerChosen = true;
        });
        $("#troi").on("click", function () {
            $("#troi").hide();
            charHealth.html(Troi.health);
            charAtt.html(Troi.attack);
            charName.html(Troi.name);
            hasPlayerChosen = true;
        });
        $("#geordi").on("click", function () {
            $("#geordi").hide();
            charHealth.html(Geordi.health);
            charAtt.html(Geordi.attack);
            charName.html(Geordi.name);
            hasPlayerChosen = true;
        });
    }


});