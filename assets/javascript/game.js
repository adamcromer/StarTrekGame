$(document).ready(function () {

    let Data = {
        name: "Lt. Commander Data",
        health: 550,
        attack: 16,
        baseattack: 16,
        shortname: "Data"
    };

    let Worf = {
        name: "Lieutenant Worf",
        health: 600,
        attack: 15,
        baseattack: 15,
        shortname: "Worf"
    };

    let Troi = {
        name: "Lt. Commander Troi",
        health: 655,
        attack: 10,
        baseattack: 10,
        shortname: "Troi"
    };

    let Geordi = {
        name: "Lt. Commander La Forge",
        health: 600,
        attack: 14,
        baseattack: 14,
        shortname: "Geordi"
    };

    let BorgDrone = {
        name: "Borg Drone",
        health: 200,
        attack: 20
    };

    let BorgSoldier = {
        name: "Borg Soldier",
        health: 300,
        attack: 50
    };

    let BorgPicard = {
        name: "Locutus of Borg",
        health: 250,
        attack: 35
    };

    let BorgQueen = {
        name: "Borg Queen",
        health: 400,
        attack: 80
    };

    let char = {
        name: "",
        health: 0,
        attack: 0,
        baseattack: 0,
        shortname: ""
    };

    let enemy = {
        name: "",
        health: "??",
        attack: "??"
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
    let DronePicked = false;
    let SoldierPicked = false;
    let PicardPicked = false;
    let QueenPicked = false;

    function updateCharInfo() {
        charHealth.html(char.health);
        charAtt.html(char.attack);
        charName.html(char.name);
        enemyHealth.html(enemy.health);
        enemyAtt.html(enemy.attack);
        enemyName.html(enemy.name);
    }

    let blankChar = function() {
        charChoice.attr("src", "https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/placeholder.jpg");
        charAtt.html(0);
        charName.html("");
        charHealth.html(0);
    }

    let blankEnemy = function() {
        enemyChoice.attr("src", "https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/placeholder.jpg");
        enemyAtt.html("??");
        enemyName.html("");
        enemyHealth.html("??");
        enemy.health = "??";
        enemy.attack = "??";
        enemy.name = "";
    }

    function reset() {
        enemiesDefeated = 0;
        buttonPress = 0;
        hasPlayerChosen = false;
        phaseTwo = false;
        phaseThree = false;
        phaseFour = false;
        DronePicked = false;
        SoldierPicked = false;
        PicardPicked = false;
        QueenPicked = false;
        enemy.health = 0;
        char.health = 0;
        char.attack = 0;        
        $("#charStats").fadeOut(3000);
        $("#drone").css('opacity', 1.0);
        $("#soldier").css('opacity', 1.0);
        $("#picard").css('opacity', 1.0);
        $("#queen").css('opacity', 1.0);
        setTimeout(blankChar, 1000 * 3);
        setTimeout(blankEnemy, 1000 * 10);
        setTimeout(hideEnemy, 1000 * 10);
        updateCharInfo();
        hideAttButton();
    }

    function showChar() {
        $("#charStats").show();
    }

    function hideChar() {
        $("#charStats").hide();
    }

    function showCharList() {
        $("#characters").show();
    }

    let showEnemy = function() {
        $("#enemyStats").show();
    }

    function hideEnemy() {
        $("#enemyStats").fadeOut(3000);
    }

    function showEnemyList() {
        $("#enemies").show();
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
        showCharList();
        showChar();
        updateCharInfo();

        // These show the Char Stat Box when you hover over the character.
        $("#data").mouseenter(function () {
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/data.jpg');
            charHealth.html(Data.health);
            charAtt.html(Data.attack);
            charName.html(Data.name);
        });
        $("#worf").mouseenter(function () {
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/worf.jpg');
            charHealth.html(Worf.health);
            charAtt.html(Worf.attack);
            charName.html(Worf.name);
        });
        $("#troi").mouseenter(function () {
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/troi.jpg');
            charHealth.html(Troi.health);
            charAtt.html(Troi.attack);
            charName.html(Troi.name);
        });

        $("#geordi").mouseenter(function () {
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/geordi.jpg');
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
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/data.jpg');
        }

        let pickWorf = function () {
            updateCharInfo();
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/worf.jpg');
        }

        let pickTroi = function () {
            updateCharInfo();
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/troi.jpg');
        }

        let pickGeordi = function pickDataFunc() {
            updateCharInfo();
            charChoice.attr('src', 'https://raw.githubusercontent.com/adamcromer/StarTrekGame/master/assets/images/geordi.jpg');
        }

        $("#data").click(function () {
            // It wouldn't work without the timers, it would just hide, so I added the timer for 25 milliseconds
            setTimeout(pickData, 25);
            $("#characters").hide();
            char.health = Data.health;
            char.attack = Data.attack;
            char.baseattack = Data.baseattack;
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
            char.baseattack = Worf.baseattack;
            char.name = Worf.name;
            char.shortname = Worf.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
        $("#troi").click(function () {
            setTimeout(pickTroi, 25);
            $("#characters").hide();
            char.health = Troi.health;
            char.attack = Troi.attack;
            char.baseattack = Troi.baseattack;
            char.name = Troi.name;
            char.shortname = Troi.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
        $("#geordi").click(function () {
            setTimeout(pickGeordi, 25);
            $("#characters").hide();
            char.health = Geordi.health;
            char.attack = Geordi.attack;
            char.baseattack = Geordi.baseattack;
            char.name = Geordi.name;
            char.shortname = Geordi.shortname;
            hasPlayerChosen = true;
            mainText.html("Press any button to continue.");
        });
    }

    function pickEnemy() {
        
        blankEnemy();
        showEnemy();
        showEnemyList();
        updateCharInfo();

        // These show the Enemy Stat Box when you hover over the character.
        
        $("#drone").mouseenter(function () {
            if (DronePicked === false) {
                blankEnemy();
                showEnemy();
                enemyChoice.attr('src', 'assets/images/borgdrone.jpg');
                enemyName.html(BorgDrone.name);
            }
        });
    
        $("#soldier").mouseenter(function () {
            if (SoldierPicked === false) {
                blankEnemy();
                showEnemy();
                enemyChoice.attr('src', 'assets/images/borgsoldier.jpg');enemyName.html(BorgSoldier.name);
            }
        });      
    
        $("#picard").mouseenter(function () {
            if (PicardPicked === false) {
                blankEnemy();
                showEnemy();
                enemyChoice.attr('src', 'assets/images/borgpicard.jpg'); 
                enemyName.html(BorgPicard.name);    
            }            
        });
        
        $("#queen").mouseenter(function () {
            if (QueenPicked === false) {
                blankEnemy();
                showEnemy();
                enemyChoice.attr('src', 'assets/images/borgqueen.jpg');
                enemyName.html(BorgQueen.name);
            }
        });   

        //These blank the char stat box when you stop hovering.
        $("#drone").mouseleave(function () {
            if (DronePicked === false) {
                blankEnemy();
            }
        });

        $("#soldier").mouseleave(function () {
            if (SoldierPicked === false) {
                blankEnemy();
            }
        });

        $("#picard").mouseleave(function () {
            if (PicardPicked === false) {
                blankEnemy();
            }
        });

        $("#queen").mouseleave(function () {
            if (QueenPicked === false) {
                blankEnemy();
            }
        });
        

        let pickDrone = function () {
            updateCharInfo();
            enemyChoice.attr('src', 'assets/images/borgdrone.jpg');
        }

        let pickSoldier = function () {
            updateCharInfo();
            enemyChoice.attr('src', 'assets/images/borgsoldier.jpg');
        }

        let pickPicard = function () {
            updateCharInfo();
            enemyChoice.attr('src', 'assets/images/borgpicard.jpg');
        }

        let pickQueen = function() {
            updateCharInfo();
            enemyChoice.attr('src', 'assets/images/borgqueen.jpg');
        }        
        
        $("#drone").click(function () {
            if (DronePicked === false) {
                setTimeout(pickDrone, 25);            
                $("#drone").css('opacity', 0.3);
                $("#enemies").hide();
                enemy.health = BorgDrone.health;
                enemy.attack = BorgDrone.attack;
                enemy.name = BorgDrone.name;
                enemy.shortname = BorgDrone.shortname;
                mainText.html('"Resistence is futile. <br>Prepare to be assimilated." <br>Press any button to continue.');
                DronePicked = true;
                console.log(DronePicked);
                buttonPress = buttonPress + 100;
            }
        });        
        
        $("#soldier").click(function () {
            if (SoldierPicked === false) {
                setTimeout(pickSoldier, 25);
                $("#soldier").css('opacity', 0.3);
                $("#enemies").hide();
                enemy.health = BorgSoldier.health;
                enemy.attack = BorgSoldier.attack;
                enemy.name = BorgSoldier.name;
                enemy.shortname = BorgSoldier.shortname;
                mainText.html('"Prepare to be assimilated. <br>Your biological and technological distinctiveness will be added to our own."<br>Press any button to continue.');
                SoldierPicked = true;
                buttonPress = buttonPress + 100;
            }
        });        
        
        $("#picard").click(function () {
            if (PicardPicked === false) {
                setTimeout(pickPicard, 25);
                $("#picard").css('opacity', 0.3);
                $("#enemies").hide();
                enemy.health = BorgPicard.health;
                enemy.attack = BorgPicard.attack;
                enemy.name = BorgPicard.name;
                enemy.shortname = BorgPicard.shortname;
                mainText.html('"Resistance is futile. Your life as it has been is over. <br>From this time forward, you will service the Borg." <br>Press any button to continue.');
                PicardPicked = true;
                buttonPress = buttonPress + 100;
            }
        });        
        
        $("#queen").click(function () {
            if (QueenPicked === false) {
                setTimeout(pickQueen, 25);
                $("#queen").css('opacity', 0.3);
                $("#enemies").hide();
                enemy.health = BorgQueen.health;
                enemy.attack = BorgQueen.attack;
                enemy.name = BorgQueen.name;
                enemy.shortname = BorgQueen.shortname;
                mainText.html('"You' + "'re such a noble creature. A quality we sometimes lack. <br>We will add your distinctiveness to our own. Welcome home." + '"<br>Press any button to continue.');
                QueenPicked = true;
                buttonPress = buttonPress + 100;
            }
        });
    }    
    
    function savedPicard() {
        enemyChoice.attr('src', 'assets/images/savedpicard.jpg');
        enemy.health = JeanLucPicard.health;
        enemy.attack = JeanLucPicard.attack;
        enemy.name = JeanLucPicard.name;
        showEnemy();
    }

    function attack() {
        enemy.health = enemy.health - char.attack;
        let newAttack = char.attack + char.baseattack;
        char.health = char.health - enemy.attack;
        mainText.html(char.shortname + " does " + char.attack + " damage.<br>" + char.shortname + "'s attack is now " + newAttack + ".<br> The " + enemy.name + " does " + enemy.attack + " damage. ");
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
                hideEnemy();
                updateCharInfo();
                mainText.html("The " + enemy.name + ' was defeated!<br><br> Press any key to continue.');
                phaseTwo = true;
                enemiesDefeated++;
                console.log("enemies defeated:" + enemiesDefeated);
            }
        }
        
    });

    document.onkeyup = function () {

        buttonPress = buttonPress + 1;
        console.log(buttonPress);

        if (buttonPress === 501) {
            mainText.html('"I' + "'ll be feeling much better in no time. I am forever indebted to you." + '"<br><br>Press any button to play again.');            
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
            mainText.html(char.shortname + ' defeated the Queen Borg! "There' + "'s still time to save the Captain. <br>Let's take him to Dr. Crusher. Enterprise, four to transport." +  '"<br>Press any button to continue.');
            buttonPress = 500;
        }

        else if (buttonPress > 400 && buttonPress < 500) {
            mainText.hide();
            showEnemy();
            showAttButton();
        }

        else if (enemiesDefeated === 3) {
            mainText.html("Now's our chance! Only one left.");
            pickEnemy();
        }

        else if (buttonPress > 300 && buttonPress < 400) {
            mainText.hide();
            showEnemy();
            showAttButton();
        }

        else if (enemiesDefeated === 2) {
            mainText.html(enemy.name + " is down. Two to go.");
            pickEnemy();
        }

        else if (buttonPress > 200 && buttonPress < 300) {
            mainText.hide();
            showEnemy();
            showAttButton();
        }

        else if (enemiesDefeated === 1) {
            mainText.html('Good job on defeating the ' + enemy.name + ". Who's next?");
            pickEnemy();
        }

        else if (buttonPress > 100 && buttonPress < 200) {
            mainText.html('Press the attack button to attack the enemy. <br>Your attack power increases with every attack. Defeat the Borg before they beat you.');
            showEnemy();
            showAttButton();
        }

        if (hasPlayerChosen === true) {
            mainText.html('You are teleported to the Borg Bridge. <br>Awaiting are four enemies including Picard fully transformed in to a Borg. <br>Pick who to battle first.');
            hasPlayerChosen = false;
            pickEnemy();
            updateCharInfo();
        }

        else if (buttonPress === 2) {
            mainText.html('The Borg sent a message telling the Enterprise to send a crew of four or Captain Picard dies. <br>Acting Captain Riker sends Data, Worf, Troi, & Geordi to investigate. <br>Pick your character.');
            pickChar(); 
            updateCharInfo();
        }

        else if (buttonPress === 1) {
            mainText.html("Captian Picard has been slowly turning in to a Borg. Trusting the hivemind Borg won't hurt the remaining Enterprise crew, Picard willingly gave himself to them. It's up to the remaining Enterprise crew to save him. <br>Press any key to continue.");
        }
    }
});
