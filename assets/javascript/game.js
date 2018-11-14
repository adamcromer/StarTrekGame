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

    let BorgSoldier = {
        name: "Borg Soldier",
        health: 300,
        attack: 25
    };

    let BorgPicard = {
        name: "Locutus of Borg, Jean-Luc Picard",
        health: 375,
        attack: 35
    };

    let BorgQueen = {
        name: "Borg Queen",
        health: 400,
        attack: 50
    };

    let char = {
        name: "",
        health: 0,
        attack: 0
    }

    let charHealth = $("#charHealth");
    let charAtt = $("#charAtt");
    let charName = $("#charName");
    let charChoice = $("#charChoice")
    let enemyHealth = $("#enemyHealth");
    let enemyAtt = $("#enemyAtt");
    let enemyName = $("#enemyName");
    let enemyChoice = $("#enemyChoice")
    let hasPlayerChosen = false;

    function  updateCharInfo() {
    charHealth.html(char.health);
    charAtt.html(char.attack);
    charName.html(char.name);
    enemyHealth.html(BorgDrone.health);
    enemyAtt.html(BorgDrone.attack);
    enemyName.html(BorgDrone.name);
    }

    updateCharInfo();

    function showChar() {
        $("#charStats").show();
    }

    function hideChar() {
        $("#charStats").hide();
    }

    function showEnemy() {
        $("#enemyStats").show();
    }

    function hideEnemy() {
        $("#enemyStats").hide();
    }

    function hideEnemyList() {
        $("#enemies").hide();
    }

    function attack() {

    }

    // These show the Char Stat Box when you hover over the character.
    $("#data").mouseenter(function () {
        showChar();
        charChoice.attr('src', '/assets/images/data.jpg');
        charHealth.html(Data.health);
        charAtt.html(Data.attack);
        charName.html(Data.name);
    });
    $("#worf").mouseenter(function () {
        showChar();
        charChoice.attr('src', '/assets/images/worf.jpg');
        charHealth.html(Worf.health);
        charAtt.html(Worf.attack);
        charName.html(Worf.name);
    });
    $("#troi").mouseenter(function () {
        showChar();
        charChoice.attr('src', '/assets/images/troi.jpg');
        charHealth.html(Troi.health);
        charAtt.html(Troi.attack);
        charName.html(Troi.name);
    });
    $("#geordi").mouseenter(function () {
        showChar();
        charChoice.attr('src', '/assets/images/geordi.jpg');
        charHealth.html(Geordi.health);
        charAtt.html(Geordi.attack);
        charName.html(Geordi.name);
    });

    //These hide the char stat box when you stop hovering.
    $("#data").mouseleave(function () {
        hideChar();
    });

    $("#worf").mouseleave(function () {
        hideChar();
    });

    $("#troi").mouseleave(function () {
        hideChar();
    });

    $("#geordi").mouseleave(function () {
        hideChar();
    });

    // if (hasPlayerChosen === false) {
    $("#data").click(function () {
        // It wouldn't work without the timers, it would just hide, so I added the timer for 50 milliseconds
        setTimeout(showChar, 50);
        $("#characters").hide();
        charChoice.attr('src', '/assets/images/data.jpg');
        char.health = Data.health;
        char.attack = Data.attack;
        char.name = Data.name;
        hasPlayerChosen = true;
        updateCharInfo();
    });
    $("#worf").click(function () {
        setTimeout(showChar, 50);
        $("#characters").hide();
        charChoice.attr('src', '/assets/images/worf.jpg');
        char.health = Worf.health;
        char.attack = Worf.attack;
        char.name = Worf.name;
        hasPlayerChosen = true;
        console.log(char);
        updateCharInfo();
    });
    $("#troi").click(function () {
        setTimeout(showChar, 50);
        $("#characters").hide();
        charChoice.attr('src', '/assets/images/troi.jpg');
        char.health = Troi.health;
        char.attack = Troi.attack;
        char.name = Troi.name;
        hasPlayerChosen = true;
        console.log(char);
        updateCharInfo();
    });
    $("#geordi").click(function () {
        setTimeout(showChar, 50);
        $("#characters").hide();
        charChoice.attr('src', '/assets/images/geordi.jpg');
        char.health = Geordi.health;
        char.attack = Geordi.attack;
        char.name = Geordi.name;
        hasPlayerChosen = true;
        console.log(char);
        updateCharInfo();
    });
    // }

    // hideChar();
    // hideEnemy();
    // hideEnemyList();

});
