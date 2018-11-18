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
        name: "Locutus of Borg",
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

    let JeanLucPicard = {
        name: "Jean-Luc Picard",
        health: 1000,
        attack: 100
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
    let enemiesDefeated = 0;
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
        charChoice.attr("src", "/assets/images/placeholder.jpg");
        charAtt.html(0);
        charName.html("");
        charHealth.html(0);
    }

    function reset() {
        enemiesDefeated = 0;
        buttonPress = 0;
        hasPlayerChosen = false;
        phaseTwo = false;
        phaseThree = false;
        phaseFour = false;
        enemy.health = 0;
        char.health = 0;
        updateCharInfo();
        hideAttButton();
        $("#charStats").fadeOut(3000);
        setTimeout(blankChar, 5000);
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
        $("#enemyStats").fadeOut(3000);
    }

    function showEnemyList() {
        $("#enemies").fadeIn("slow");
    }

    function hideEnemyList() {
        $("#enemies").hide();
    }

    function showAttButton() {
        attButton.show();
    }

    function hideAttButton() {
        attButton.hide();
    }

    function pickChar() {
        showChar();
        // These show the Char Stat Box when you hover over the character.
        $("#data").mouseenter(function () {
            charChoice.attr('src', '/assets/images/data.jpg');
            charHealth.html(Data.health);
            charAtt.html(Data.attack);
            charName.html(Data.name);
        });
        $("#worf").mouseenter(function () {
            charChoice.attr('src', '/assets/images/worf.jpg');
            charHealth.html(Worf.health);
            charAtt.html(Worf.attack);
            charName.html(Worf.name);
        });
        $("#troi").mouseenter(function () {
            charChoice.attr('src', '/assets/images/troi.jpg');
            charHealth.html(Troi.health);
            charAtt.html(Troi.attack);
            charName.html(Troi.name);
        });

        $("#geordi").mouseenter(function () {
            charChoice.attr('src', '/assets/images/geordi.jpg');
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
            charChoice.attr('src', '/assets/images/data.jpg');
        }

        let pickWorf = function () {
            updateCharInfo();
            charChoice.attr('src', '/assets/images/worf.jpg');
        }

        let pickTroi = function () {
            updateCharInfo();
            charChoice.attr('src', '/assets/images/troi.jpg');
        }

        let pickGeordi = function pickDataFunc() {
            updateCharInfo();
            charChoice.attr('src', '/assets/images/geordi.jpg');
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
            // charChoice.attr('src', '../images/troi.jpg');
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
            // charChoice.attr('src', '../images/geordi.jpg');
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
        mainText.show();
    }

    attButton.click(function () {
        attack();

        if (enemiesDefeated < 4) {

            if (char.health <= 0) {

                mainText.html(char.name + " was defeated! The Borg win. <br><br>Press any button to try again.");

                updateCharInfo();
                reset();
            }
            else if (enemy.health <= 0) {

                hideAttButton();
                enemy.health = 0;
                char.health = char.health + 100;
                hideEnemy();
                updateCharInfo();
                mainText.html("The " + enemy.name + ' was defeated! ' + char.name + ' was healed a little bit.<br><br> Press any key to continue.');
                phaseTwo = true;
                enemiesDefeated++;
                console.log("enemies defeated:" + enemiesDefeated);
            }
        }
        
    });

    function droneReady() {

        enemyChoice.attr('src', '/assets/images/borgdrone.jpg');
        enemy.health = BorgDrone.health;
        enemy.attack = BorgDrone.attack;
        enemy.name = BorgDrone.name;
        showEnemy();
    }

    function soldierReady() {
        enemyChoice.attr('src', '/assets/images/borgsoldier.jpg');
        enemy.health = BorgSoldier.health;
        enemy.attack = BorgSoldier.attack;
        enemy.name = BorgSoldier.name;
        showEnemy();
    }

    function picardReady() {
        enemyChoice.attr('src', '/assets/images/borgpicard.jpg');
        enemy.health = BorgPicard.health;
        enemy.attack = BorgPicard.attack;
        enemy.name = BorgPicard.name;
        showEnemy();
    }

    function queenReady() {
        enemyChoice.attr('src', '/assets/images/borgqueen.jpg');
        enemy.health = BorgQueen.health;
        enemy.attack = BorgQueen.attack;
        enemy.name = BorgQueen.name;
        showEnemy();
    }

    function savedPicard() {
        enemyChoice.attr('src', '/assets/images/savedpicard.jpg');
        enemy.health = JeanLucPicard.health;
        enemy.attack = JeanLucPicard.attack;
        enemy.name = JeanLucPicard.name;
        showEnemy();
    }


    document.onkeyup = function () {

        buttonPress = buttonPress + 1;
        console.log(buttonPress);

        if (buttonPress === 401) {
            mainText.html("I'm feeling much better now. Thank you for rescuing me. <br>Press any button to play again.");            
            reset();
            showChar();
            savedPicard();
            updateCharInfo();
        }

        else if (enemiesDefeated === 4) {

            hideAttButton();
            enemy.health = 0;
            hideEnemy();
            updateCharInfo();
            mainText.html(char.name + " defeated the Queen Borg! There's still time to save the Captain. Let's take him to Dr. Crusher now. <br>Press any button to continue.");
            buttonPress = 400;
        }

        else if (buttonPress === 301) {
            showAttButton();
            queenReady();
            updateCharInfo();
            showEnemy();
            mainText.hide();
        }

        else if (phaseFour && buttonPress > 200 < 300) {

            mainText.html('The captain is passed out. "Let' + "'s get out of here." + '<br>Press any button to continue.');
            buttonPress = 300;
        }

        else if (buttonPress === 201) {
            showAttButton();
            picardReady();
            updateCharInfo();
            showEnemy();
            mainText.hide();
            phaseFour = true;
        }

        else if (phaseThree && buttonPress > 100 < 200) {

            mainText.html("I'm setting my phasers to stun so we don't kill the captain. I know Dr. Crusher can still save him. <br>Press any button to continue.");
            buttonPress = 200;
        }

        else if (buttonPress === 101) {
            showAttButton();
            soldierReady();
            updateCharInfo();
            showEnemy();
            mainText.hide();
            phaseThree = true;
        }

        else if (phaseTwo === true) {
            mainText.html('Troi says she can sense the Captain nearby. "Let' + "s go help him." + '"<br>"You will be assimmilated." a voice says from behind. You turn around and see a much stronger Borg. <br> Press any button to continue.');
            buttonPress = 100;
        }

        else if (hasPlayerChosen === true) {
            mainText.html("Attack the Borg Drone by pushing the attack button. You get stronger with each attack. <br>Defeat the enemy before they defeat you!");
            hasPlayerChosen = false;
            console.log(hasPlayerChosen);
            showAttButton();
            updateCharInfo();
        }

        else if (hasPlayerChosen === false && buttonPress === 2) {
            mainText.html('You arrive on the Borg ship. Your scanners show an enemy nearby. You turn a corner and a Borg Drone is in front of you. It says "We are Borg. You will be assimilated. Resistence is futile." <br>Pick your character.');
            droneReady();
            showEnemy();
            pickChar();
            showCharList();
            updateCharInfo();
            buttonPress++;
        }

        else if (buttonPress === 1) {
            mainText.html("Captian Picard has been captured by the nefarious hivemind Borg. <br>It's up to the remaining Enterprise crew to save him. <br>Press any key to continue.");
            $("#enemyStats").hide();
        }

    }

});
