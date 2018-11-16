$(document).ready(function () {

    let Data = {
        name: "Lt. Commander Data",
        health: 320,
        attack: 16,
        shortname: "Data"
    };

    let Worf = {
        name: "Lieutenant Worf",
        health: 270,
        attack: 15,
        shortname: "Worf"
    };

    let Troi = {
        name: "Lt. Commander Troi",
        health: 340,
        attack: 12,
        shortname: "Troi"
    };

    let Geordi = {
        name: "Lt. Commander La Forge",
        health: 280,
        attack: 14,
        shortname: "Geordi"
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
        attack: 0,
        shortname: ""
    };

    let enemy = {
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
    let enemyChoice = $("#enemyChoice");
    let attButton = $("#attButton");
    let mainText = $("#mainText");
    let buttonPress = 0;
    let hasPlayerChosen = false;
    let phaseTwo = false;
    let phaseThree = false;
    let phaseFour = false;

    function updateCharInfo() {
        charHealth.html(char.health);
        charAtt.html(char.attack);
        charName.html(char.name);
        enemyHealth.html(enemy.health);
        enemyAtt.html(enemy.attack);
        enemyName.html(enemy.name);
    }

    let blankChar = function blankCharFunction() {
        charChoice.attr('src', 'assets/images/placeholder.jpg');
        charAtt.html("0");
        charName.html("");
        charHealth.html("0");
    }

    let showChar = function showCharFunction() {
        $("#charStats").show();
    }

    function hideChar() {
        $("#charStats").hide();
    }

    function showCharList() {
        $("#characters").show();
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

    function showAttButton() {
        attButton.show();
    }

    function pickChar() {
        // These show the Char Stat Box when you hover over the character.
        $("#data").mouseenter(function () {
            showChar();
            charChoice.attr('src', 'assets/images/data.jpg');
            charHealth.html(Data.health);
            charAtt.html(Data.attack);
            charName.html(Data.name);
        });
        $("#worf").mouseenter(function () {
            showChar();
            charChoice.attr('src', 'assets/images/worf.jpg');
            charHealth.html(Worf.health);
            charAtt.html(Worf.attack);
            charName.html(Worf.name);
        });
        $("#troi").mouseenter(function () {
            showChar();
            charChoice.attr('src', 'assets/images/troi.jpg');
            charHealth.html(Troi.health);
            charAtt.html(Troi.attack);
            charName.html(Troi.name);
        });

        $("#geordi").mouseenter(function () {
            showChar();
            charChoice.attr('src', 'assets/images/geordi.jpg');
            charHealth.html(Geordi.health);
            charAtt.html(Geordi.attack);
            charName.html(Geordi.name);
        });

        //These blank the char stat box when you stop hovering.
        $("#data").mouseleave(function () {
            blankChar();
        });

        $("#worf").mouseleave(function () {
            blankChar();
        });

        $("#troi").mouseleave(function () {
            blankChar();
        });

        $("#geordi").mouseleave(function () {
            blankChar();
        });


        let pickData = function () {
            updateCharInfo();
            charChoice.attr('src', 'assets/images/data.jpg');
        }

        let pickWorf = function () {
            updateCharInfo();
            charChoice.attr('src', 'assets/images/worf.jpg');
        }

        let pickTroi = function () {
            updateCharInfo();
            charChoice.attr('src', 'assets/images/troi.jpg');
        }

        let pickGeordi = function pickDataFunc() {
            updateCharInfo();
            charChoice.attr('src', 'assets/images/geordi.jpg');
        }

        $("#data").click(function () {
            // It wouldn't work without the timers, it would just hide, so I added the timer for 25 milliseconds
            setTimeout(pickData, 25);
            $("#characters").hide();
            char.health = Data.health;
            char.attack = Data.attack;
            char.name = Data.name;
            char.shortname = Data.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
        $("#worf").click(function () {
            setTimeout(pickWorf, 25);
            $("#characters").hide();
            char.health = Worf.health;
            char.attack = Worf.attack;
            char.name = Worf.name;
            char.shortname = Worf.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
        $("#troi").click(function () {
            setTimeout(pickTroi, 25);
            $("#characters").hide();
            charChoice.attr('src', 'assets/images/troi.jpg');
            char.health = Troi.health;
            char.attack = Troi.attack;
            char.name = Troi.name;
            char.shortname = Troi.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
        $("#geordi").click(function () {
            setTimeout(pickGeordi, 25);
            $("#characters").hide();
            charChoice.attr('src', 'assets/images/geordi.jpg');
            char.health = Geordi.health;
            char.attack = Geordi.attack;
            char.name = Geordi.name;
            char.shortname = Geordi.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
    }

    function attack() {
        enemy.health = enemy.health - char.attack;
        let newAttack = Math.floor(char.attack * 1.3);
        char.health = char.health - enemy.attack;
        mainText.html(char.shortname + " does " + char.attack + " damage. " + char.shortname + "'s attack is now " + newAttack + ".<br> The " + enemy.name + " does " + enemy.attack + " damage. ");
        char.attack = newAttack;
        updateCharInfo();
    }

    attButton.click(function () {
        attack();
    });

    function droneReady() {
        console.log('test');
        enemyChoice.attr('src', 'assets/images/borgdrone.jpg');
        enemy.health = BorgDrone.health;
        enemy.attack = BorgDrone.attack;
        enemy.name = BorgDrone.name;
    }

    document.onkeyup = function () {

        buttonPress = buttonPress + 1;
        console.log(buttonPress);

        if (buttonPress === 1) {

            mainText.html("Captian Picard has been captured by the nefarious hivemind Borg. <br>It's up to the remaining Enterprise crew to save him. <br>Press any key to continue.");
        }

        else if (hasPlayerChosen === false && buttonPress === 2) {

            mainText.html('You arrive on the Borg ship. Your scanners show an enemy nearby. You turn a corner and a Borg Drone is in front of you. It says "We are Borg. You will be assimilated. Resistence is futile." <br>Pick your character.');
            droneReady();
            showEnemy();
            showChar();
            pickChar();
            showCharList();
            updateCharInfo();
            buttonPress++;
        }

        if (hasPlayerChosen === true) {
            mainText.html("Attack the Borg Drone by pushing the attack button. You get stronger with each attack. <br>Defeat the enemy before they defeat you!");
            hasPlayerChosen === false;
            showAttButton();
            updateCharInfo();
        }
        
    }

    




    // droneBattle();
});
