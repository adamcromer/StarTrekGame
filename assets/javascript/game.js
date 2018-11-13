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
    let charChoice = $("#charChoice")
    let enemyHealth = $("#enemyHealth");
    let enemyAtt = $("#enemyAtt");
    let enemyName = $("#enemyName");
    let enemyChoice = $("#enemyChoice")
    let hasPlayerChosen = false;

    function updateCharInfo() {
        charHealth.html(Data.health);
        charAtt.html(Data.attack);
        charName.html(Data.name);
        enemyHealth.html(BorgDrone.health);
        enemyAtt.html(BorgDrone.attack);
        enemyName.html(BorgDrone.name);
    }

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

    

    function leaveHover() {
        charChoice.attr('src', '/assets/images/placeholder.jpg');
        charHealth.html("??");
        charAtt.html("??");
        charName.html("Name");
        console.log("test");
    }

    $("#data").hover(function () {
        showChar();
        charChoice.attr('src', '/assets/images/data.jpg');
        charHealth.html(Data.health);
        charAtt.html(Data.attack);
        charName.html(Data.name);
    });
    $("#worf").hover(function () {
        showChar();
        charChoice.attr('src', '/assets/images/worf.jpg');
        charHealth.html(Worf.health);
        charAtt.html(Worf.attack);
        charName.html(Worf.name);
    });
    $("#troi").hover(function () {
        showChar();
        charChoice.attr('src', '/assets/images/troi.jpg');
        charHealth.html(Troi.health);
        charAtt.html(Troi.attack);
        charName.html(Troi.name);
    });
    $("#geordi").hover(function () {
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
        $("#data").on("click", function () {
            showChar();
            $("#characters").hide();
            charChoice.attr('src', '/assets/images/data.jpg');
            charHealth.html(Data.health);
            charAtt.html(Data.attack);
            charName.html(Data.name);
            hasPlayerChosen = true;
        });
        $("#worf").on("click", function () {
            showChar();
            $("#characters").hide();
            charChoice.attr('src', '/assets/images/worf.jpg');
            charHealth.html(Worf.health);
            charAtt.html(Worf.attack);
            charName.html(Worf.name);
            hasPlayerChosen = true;
        });
        $("#troi").on("click", function () {
            showChar();
            $("#characters").hide();
            charChoice.attr('src', '/assets/images/troi.jpg');
            charHealth.html(Troi.health);
            charAtt.html(Troi.attack);
            charName.html(Troi.name);
            hasPlayerChosen = true;
        });
        $("#geordi").on("click", function () {
            
            $("#characters").hide();
            charChoice.attr('src', '/assets/images/geordi.jpg');
            charHealth.html(Geordi.health);
            charAtt.html(Geordi.attack);
            charName.html(Geordi.name);
            hasPlayerChosen = true;
            showChar();
        });
    // }

// hideChar();
// hideEnemy();
// hideEnemyList();

});
