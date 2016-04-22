window.onload = function () {
    //游戏的玩法与技巧
    function introduce() {

        //游戏说明
        var introLi = document.getElementsByTagName("li")[0];
        var intro = introLi.getElementsByTagName("a")[0];
        var introInfo = document.getElementById("introduce");
        intro.addEventListener("click", function () {
            introInfo.style.display = "block";
        });
        //游戏技巧导航
        var list = document.getElementsByTagName("li")[1];
        var skill = list.getElementsByTagName("a")[0];
        var skills = list.getElementsByTagName("ul")[0];
        skills.style.display = "none";
        skill.addEventListener("mouseenter", function () {
            skills.style.display = "block";
        });
        skill.addEventListener("click", function () {
            if (skills.style.display == "none") {
                skills.style.display = "display";
            } else {
                skills.style.display = "none";
            }
        });
        //具体游戏技巧
        var infos = document.getElementById("skill");
        var skill1 = skills.getElementsByTagName("li")[0];
        var skill2 = skills.getElementsByTagName("li")[1];
        var skill3 = skills.getElementsByTagName("li")[2];
        var skill4 = skills.getElementsByTagName("li")[3];
        var skill5 = skills.getElementsByTagName("li")[4];

        var skillInfo1 = infos.getElementsByTagName("div")[0];
        var skillInfo2 = infos.getElementsByTagName("div")[1];
        var skillInfo3 = infos.getElementsByTagName("div")[2];
        var skillInfo4 = infos.getElementsByTagName("div")[3];
        var skillInfo5 = infos.getElementsByTagName("div")[4];

        skill1.addEventListener("click", function () {
            infos.style.display = "block";
            skillInfo1.style.display = "block";
            skillInfo2.style.display = "none";
            skillInfo3.style.display = "none";
            skillInfo4.style.display = "none";
            skillInfo5.style.display = "none";
        });

        skill2.addEventListener("click", function () {
            infos.style.display = "block";
            skillInfo2.style.display = "block";
            skillInfo1.style.display = "none";
            skillInfo3.style.display = "none";
            skillInfo4.style.display = "none";
            skillInfo5.style.display = "none";
        });

        skill3.addEventListener("click", function () {
            infos.style.display = "block";
            skillInfo3.style.display = "block";
            skillInfo1.style.display = "none";
            skillInfo2.style.display = "none";
            skillInfo4.style.display = "none";
            skillInfo5.style.display = "none";
        });
        skill4.addEventListener("click", function () {
            infos.style.display = "block";
            skillInfo4.style.display = "block";
            skillInfo1.style.display = "none";
            skillInfo2.style.display = "none";
            skillInfo3.style.display = "none";
            skillInfo5.style.display = "none";
        });
        skill5.addEventListener("click", function () {
            infos.style.display = "block";
            skillInfo5.style.display = "block";
            skillInfo1.style.display = "none";
            skillInfo2.style.display = "none";
            skillInfo3.style.display = "none";
            skillInfo4.style.display = "none";
        });

        //关闭信息
        var closeIntro = document.getElementsByClassName("close")[0];
        var close1 = document.getElementsByClassName("close")[1];
        var close2 = document.getElementsByClassName("close")[2];
        var close3 = document.getElementsByClassName("close")[3];
        var close4 = document.getElementsByClassName("close")[4];
        var close5 = document.getElementsByClassName("close")[5];

        closeIntro.addEventListener("click", function () {
            introInfo.style.display = "none";
        });
        close1.addEventListener("mousedown", function () {
            skillInfo1.style.display = "none";
            infos.style.display = "none";
        });
        close2.addEventListener("mousedown", function () {
            skillInfo2.style.display = "none";
            infos.style.display = "none";
        });
        close3.addEventListener("mousedown", function () {
            skillInfo3.style.display = "none";
            infos.style.display = "none";
        });
        close4.addEventListener("mousedown", function () {
            skillInfo4.style.display = "none";
            infos.style.display = "none";
        });
        close5.addEventListener("mousedown", function () {
            skillInfo5.style.display = "none";
            infos.style.display = "none";
        });
    }

    introduce();

    var banker = document.getElementById("banker");//庄家的区域
    var player = document.getElementById("player");//玩家的区域
    var array = [];//记录所有扑克的点数
    var bankerArray = [];//记录庄家的点数
    var playerArray = [];//记录玩家的点数
    var result="",isInsurance=false;
    //共有7个区域会在游戏进行中整体出现消失：
    //扑克区，扑克点数区，判断输赢的结果区，确认本剧结果开始下一局的ok区，赌注区，玩家步骤选择区，保险区
    //扑克区
    var bankerPoker = document.getElementsByClassName("poker")[0];//庄家扑克区
    var playerPoker = document.getElementsByClassName("poker")[1];//玩家扑克区
    //扑克点数区
    var bankerPoints = banker.getElementsByClassName("points")[0];//庄家显示点数的区域
    var playerPoints = player.getElementsByClassName("points")[0];//庄家显示点数的区域
    //判断输赢结果区
    var bankerResult = banker.getElementsByClassName("result")[0];
    var playerResult = player.getElementsByClassName("result")[0];
    //ok区
    var ok = document.getElementById("ok");//ok区域
    //赌注区
    var wager = document.getElementById("wager");//堵注区域
    var figure = document.getElementById("bet");//堵注数值区域
    var betsDiv = document.getElementsByTagName("span")[1];//投掷赌注时显示的赌注div
    var bets = Number(betsDiv.innerHTML);//投掷赌注时显示的赌注值
    var playBetDiv = document.getElementsByTagName("span")[0];//玩家处显示的赌注div
    var playBet = playBetDiv.innerHTML;//玩家处显示的赌注值
    var creditsDiv = document.getElementsByTagName("span")[2];//剩余赌注div
    var credits = Number(creditsDiv.innerHTML);//剩余赌注值
    //玩家步骤选择区
    var choice = document.getElementById("choice");
    //保险区
    var insurance = document.getElementById("insurance");


    //游戏总程序
    function game() {
        wager.style.display = "block";
        //设定赌注
        var five = figure.getElementsByTagName("div")[0];
        var ten = figure.getElementsByTagName("div")[1];
        var twentyFive = figure.getElementsByTagName("div")[2];
        var hundred = figure.getElementsByTagName("div")[3];
        var reset = figure.getElementsByTagName("div")[4];
        five.addEventListener("click", function () {
            if (credits >= 5) {
                bets += 5;
                betsDiv.innerHTML = bets;
                credits -= 5;
                creditsDiv.innerHTML = credits;
            }
        });
        ten.addEventListener("click", function () {
            if (credits >= 10) {
                bets += 10;
                betsDiv.innerHTML = bets;
                credits -= 10;
                creditsDiv.innerHTML = credits;
            }
        });
        twentyFive.addEventListener("click", function () {
            if (credits >= 25) {
                bets += 25;
                betsDiv.innerHTML = bets;
                credits -= 25;
                creditsDiv.innerHTML = credits;
            }
        });
        hundred.addEventListener("click", function () {
            if (credits >= 100) {
                bets += 100;
                betsDiv.innerHTML = bets;
                credits -= 100;
                creditsDiv.innerHTML = credits;
            }
        });
        reset.addEventListener("click", function () {
            credits += bets;
            bets = 0;
            betsDiv.innerHTML = bets;
            creditsDiv.innerHTML = credits;
        });
        //设好之后开始游戏
        var set = wager.getElementsByTagName("button")[0];
        set.addEventListener("click", function () {
            if (bets != 0) {
                playBet = bets;
                playBetDiv.innerHTML = playBet;
                wager.style.display = "none";
                init();
            }
        });
    }

    game();

    //初始化游戏,庄家和玩家各随机发两张牌
    function init() {
        //所有的牌都不能重复
        for (var i = 0; i < 4; i++) {
            array[i] = Math.ceil(Math.random() * 52);
        }
        array = repeatRepair(array);
        //将发的牌显示出来
        bankerArray[0] = array[0];
        bankerArray[1] = array[1];
        playerArray[0] = array[2];
        playerArray[1] = array[3];
        var bankerPoker1 = document.createElement("img");
        var bankerPoker2 = document.createElement("img");
        var playerPoker1 = document.createElement("img");
        var playerPoker2 = document.createElement("img");
        playAHand(0, bankerPoker1);
        playAHand(array[1], bankerPoker2);
        playAHand(array[2], playerPoker1);
        playAHand(array[3], playerPoker2);
        bankerPoker.appendChild(bankerPoker1);
        bankerPoker.appendChild(bankerPoker2);
        playerPoker.appendChild(playerPoker1);
        playerPoker.appendChild(playerPoker2);
        bankerPoker.style.display="block";
        playerPoker.style.display="block";
        if (getPoints(bankerArray[1] == 11)) {//如果庄家的明牌是A，则进入买保险阶段
            buyInsurance();
        } else {//如果装假明牌不是A，则进入判断黑杰阶段
            blackJackJudge();
        }
        console.log(array+" "+bankerArray);
        console.log(bankerPoker);
        console.log(playerPoker);
    }

    //如果有重复的则去掉重复，
    // 输入为扑克数组，
    // 返回为去重后的扑克数组
    function repeatRepair(array) {
        var repeat = false;
        var temp = 0;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] == array[i + 1]) {
                repeat = true;
                temp = i + 1;
                break;
            }
        }
        if (repeat) {
            array[temp] = Math.ceil(Math.random() * 52);
            repeatRepair(array);
        }
        return array;
    }

    //根据产生的随机数发牌，
    // 输入为随机数和牌的位置，
    // 输出为牌的位置显示有随机数产生的牌
    function playAHand(random, position) {
        if (random == 0) {
            position.src = "./images/blackJack.JPG";
        } else {
            var color = "", card = 0;
            switch (Math.floor((random - 1) / 13)) {
                case 0:
                    color = "a";
                    break;
                case 1:
                    color = "b";
                    break;
                case 2:
                    color = "c";
                    break;
                case 3:
                    color = "d";
                    break;
            }
            switch (random % 13) {
                case 0:
                    card = 13;
                    break;
                case 1:
                    card = 1;
                    break;
                case 2:
                    card = 2;
                    break;
                case 3:
                    card = 3;
                    break;
                case 4:
                    card = 4;
                    break;
                case 5:
                    card = 5;
                    break;
                case 6:
                    card = 6;
                    break;
                case 7:
                    card = 7;
                    break;
                case 8:
                    card = 8;
                    break;
                case 9:
                    card = 9;
                    break;
                case 10:
                    card = 10;
                    break;
                case 11:
                    card = 11;
                    break;
                case 12:
                    card = 12;
                    break;
            }
            position.src = "./images/" + color + card + ".JPG";
        }
    }

    //得到庄家或玩家的随机扑克点数
    //输入为庄家或玩家的扑克数组
    //输出为相应的游戏点数
    function getPoints(array) {
        var count = 0;//计算A出现的次数
        var sum = 0;//计算牌的点数和
        var cardArray = [];
        for (var i = 0; i < array.length; i++) {
            cardArray[i] = randomTranCard(array[i]);//将随机数值转为扑克值
            if (cardArray[i] == 1) {
                count++;
            }
            sum += cardArray[i];
        }
        for (i = count; i > 0; i--) {
            if (sum + i * 10 <= 21) {
                return sum + i * 10;
            }
        }
        return sum;
    }

    //根据点数值和牌数判断是爆掉，还是黑杰克，还是五小龙，还是继续
    //输入庄家或者玩家扑克数组
    //输出爆掉 或者 黑杰克 或者 五小龙 或者 继续
    function resultJudge(array) {
        var points = getPoints(array);
        if (points > 21) {
            return "bust";
        } else if (points == 21) {
            return "blackJack"
        } else if (array.length == 5) {
            return "five";
        } else {
            return "go";
        }
    }

    //随机数转为card值
    //输入为随机数
    //输出为扑克的相应点数
    function randomTranCard(random) {
        var card = 0;
        switch (random % 13) {
            case 0:
                card = 10;
                break;
            case 1:
                card = 1;
                break;
            case 2:
                card = 2;
                break;
            case 3:
                card = 3;
                break;
            case 4:
                card = 4;
                break;
            case 5:
                card = 5;
                break;
            case 6:
                card = 6;
                break;
            case 7:
                card = 7;
                break;
            case 8:
                card = 8;
                break;
            case 9:
                card = 9;
                break;
            case 10:
                card = 10;
                break;
            case 11:
                card = 10;
                break;
            case 12:
                card = 10;
                break;
        }
        return card;
    }

    //显示黑杰克，并显示结果
    //输入庄家或者玩家的角色
    //显示结果，将角色显示为黑杰克
    function blackJackShow(role) {
        resultShow();
        //显示黑杰克
        if (role == "banker") {
            var blackJack = bankerResult.getElementsByTagName("div")[0];
            blackJack.style.display = "block";
        } else {
            blackJack = playerResult.getElementsByTagName("div")[0];
            blackJack.style.display = "block";
        }
        //显示ok区
        ok.style.display = "block";
    }

    function fiveDragonShow(role) {
        resultShow();
        //显示五小龙
        if (role == "banker") {
            var five = bankerResult.getElementsByTagName("div")[5];
            five.style.display = "block";
        } else {
            five = playerResult.getElementsByTagName("div")[5];
            five.style.display = "block";
        }
        //显示ok区
        ok.style.display = "block";
    }

    //显示赢家，并显示结果
    //输入庄家或者玩家的角色
    //显示结果，将角色显示为赢家
    function winShow(role) {
        resultShow();
        //显示赢家
        if (role == "banker") {
            var win = bankerResult.getElementsByTagName("div")[1];
            win.style.display = "block";
        } else {
            win = playerResult.getElementsByTagName("div")[1];
            win.style.display = "block";
        }
        //显示ok区
        ok.style.display = "block";
    }

    //显示输家，并显示结果
    //输入庄家或者玩家的角色
    //显示结果，将角色显示为输家
    function loseShow(role) {
        resultShow();
        //显示输家
        if (role == "banker") {
            var lose = bankerResult.getElementsByTagName("div")[2];
            lose.style.display = "block";
        } else {
            lose = playerResult.getElementsByTagName("div")[2];
            lose.style.display = "block";
        }
        //不显示ok区，因为赢家和暑假一定为一对，赢家显示了，输家则不显示
        //ok.style.display="block";
    }

    //显示平局，并显示结果
    function pushShow() {
        resultShow();
        //显示黑杰克
        var bankerPush = bankerResult.getElementsByTagName("div")[3];
        var playerPush = playerResult.getElementsByTagName("div")[3];
        bankerPush.style.display = "block";
        playerPush.style.display = "block";
        //显示ok区
        ok.style.display = "block";
    }

    //显示爆掉，并显示结果
    //输入庄家或者玩家的角色
    //显示结果，将角色显示为爆掉
    function bustShow(role) {
        resultShow();
        //显示黑杰克
        if (role == "banker") {
            var bust = bankerResult.getElementsByTagName("div")[4];
            bust.style.display = "block";
        } else {
            bust = playerResult.getElementsByTagName("div")[4];
            bust.style.display = "block";
        }
        //显示ok区
        ok.style.display = "block";
    }

    //结果显示，将庄家的第一张明牌，并更新庄家和玩家的点数
    function resultShow() {
        //庄家第一张明牌
        var image = bankerPoker.children[0];
        playAHand(array[0], image);
        //points值更新
        bankerPoints.style.display = "block";
        playerPoints.style.display = "block";
        bankerPoints.innerHTML = getPoints(bankerArray);
        playerPoints.innerHTML = getPoints(playerArray);
    }

    //玩家确认本局结束，下局开始
    //输入：result为玩家的游戏结果，isInsurance表示玩家是否要付保险金
    function decision() {
        isInsurance=false;
        //确认后本局的poker区，points区，还有ok区，都会消失
        bankerPoker.style.display = "none";
        bankerPoints.style.display = "none";
        playerPoker.style.display = "none";
        playerPoints.style.display = "none";
        ok.style.display = "none";
        //去掉result区
        bankerResult.getElementsByTagName("div")[0].style.display = "none";
        bankerResult.getElementsByTagName("div")[1].style.display = "none";
        bankerResult.getElementsByTagName("div")[2].style.display = "none";
        bankerResult.getElementsByTagName("div")[3].style.display = "none";
        bankerResult.getElementsByTagName("div")[4].style.display = "none";
        bankerResult.getElementsByTagName("div")[5].style.display = "none";
        playerResult.getElementsByTagName("div")[0].style.display = "none";
        playerResult.getElementsByTagName("div")[1].style.display = "none";
        playerResult.getElementsByTagName("div")[2].style.display = "none";
        playerResult.getElementsByTagName("div")[3].style.display = "none";
        playerResult.getElementsByTagName("div")[4].style.display = "none";
        playerResult.getElementsByTagName("div")[5].style.display = "none";
        //庄家和玩家的扑克数组和扑克图片都会清除
        array.length = 0;
        bankerArray.length = 0;
        playerArray.length = 0;
        while (bankerPoker.hasChildNodes()) {
            bankerPoker.removeChild(bankerPoker.firstChild);
        }
        while (playerPoker.hasChildNodes()) {
            playerPoker.removeChild(playerPoker.firstChild);
        }
        //掷赌区将会在设定credit值后出现
        switch (result) {
            //平局
            case "push":
                //平局，玩家credits为原值
                credits += bets;
                creditsDiv.innerHTML = credits;
                //玩家付保险金
                if (isInsurance) {
                    credits -= bets;
                    creditsDiv.innerHTML = credits;
                }

                break;
            //玩家赢了
            case "win":
                //赢回赌注
                credits += bets * 2;
                creditsDiv.innerHTML = credits;
                //玩家付保险金
                if (isInsurance) {
                    credits -= bets;
                    creditsDiv.innerHTML = credits;
                }

                break;
            //玩家输了
            case "lose":
                //输掉了赌注，credits不变，
                //玩家付保险金
                if (isInsurance) {
                    credits -= bets;
                    creditsDiv.innerHTML = credits;
                }
                break;
            //玩家选择了双倍且赢了
            case "doubleWin":
                //赢回赌注的2倍
                credits += bets * 3;
                creditsDiv.innerHTML = credits;
                //玩家付保险金
                if (isInsurance) {
                    credits -= bets;
                    creditsDiv.innerHTML = credits;
                }
                break;
            //玩家选择了双倍且输了
            case "doubleLose":
                //输掉双倍的赌注
                credits -= bets;
                creditsDiv.innerHTML = credits;
                //玩家付保险金
                if (isInsurance) {
                    credits -= bets;
                    creditsDiv.innerHTML = credits;
                }
                break;
        }
        //掷赌区
        playBet = 0;
        playBetDiv.innerHTML = playBet;
        bets = 0;
        betsDiv.innerHTML = bets;
        wager.style.display = "block";
    }

    //庄家抓拍的程序，小于17一直抓，抓完后判断本局结果并显示
    function bankerChoice(isDouble) {
        var image, i;//用于显示庄家的牌
        if (getPoints(bankerArray) < 17) { //小于17一直抓
            array[array.length] = Math.ceil(Math.random() * 52);
            array = repeatRepair(array);
            bankerArray[bankerArray.length] = array[array.length - 1];
            bankerChoice(isDouble);
        } else if (resultJudge(bankerArray) == "bust") {//庄家爆掉
            //显示庄家的牌
            for (i = 2; i < bankerArray.length; i++) {
                image = document.createElement("img");
                bankerPoker.appendChild(image);
                playAHand(bankerArray[i], bankerPoker.lastElementChild);
            }
            bustShow("banker");
            if (isDouble) {
                result="doubleWin";
                ok.onclick=null;ok.onclick = decision;
            } else {
                result="win";
                ok.onclick = decision;
            }
        } else if (resultJudge(bankerArray) == "blackJack") {//庄家为黑杰克
            //显示庄家的牌
            for (i = 2; i < bankerArray.length; i++) {
                image = document.createElement("img");
                bankerPoker.appendChild(image);
                playAHand(bankerArray[i], bankerPoker.lastElementChild);
            }
            blackJackShow("banker");
            if (isDouble) {
                result="doubleLose";
                ok.onclick = decision;
            } else {
                result="lose";
                ok.onclick = decision;
            }
        }
        else if (bankerArray.length == 5) {//庄家为五小龙
            //显示庄家的牌
            for (i = 2; i < bankerArray.length; i++) {
                image = document.createElement("img");
                bankerPoker.appendChild(image);
                playAHand(bankerArray[i], bankerPoker.lastElementChild);
            }
            fiveDragonShow("banker");
            if (isDouble) {
                result="doubleLose";
                ok.onclick = decision;
            } else {
                result="lose";
                ok.onclick = decision;
            }
        } else {//比较庄家和玩家谁更接近21
            //显示庄家的牌
            for (i = 2; i < bankerArray.length; i++) {
                image = document.createElement("img");
                bankerPoker.appendChild(image);
                playAHand(bankerArray[i], bankerPoker.lastElementChild);
            }
            if (getPoints(bankerArray) > getPoints(playerArray)) {//如果庄家更接近
                winShow("banker");
                loseShow("player");
                if (isDouble) {
                    result="doubleLose";
                    ok.onclick = decision;
                } else {
                    result="lose";
                    ok.onclick = decision;
                }
            } else if (getPoints(bankerArray) == getPoints(playerArray)) {//如果二者相同
                pushShow("banker");
                pushShow("player");
                result="push";
                ok.onclick = decision;
            } else {//如果玩家更接近
                loseShow("banker");
                winShow("player");
                if (isDouble) {
                    result="doubleWin";
                    ok.onclick = decision;
                } else {
                    result="win";
                    ok.onclick = decision;
                }
            }
        }
    }

    //当玩家选择继续摸牌
    //输入：是否双倍，是否要付保险
    //输出，显示玩家的新牌，并对结果进行处理
    function playerContinue(isDouble) {
        //玩家发新牌
        array[array.length] = Math.ceil(Math.random() * 52);
        array = repeatRepair(array);
        playerArray[playerArray.length] = array[array.length - 1];
        var image = document.createElement("img");
        playerPoker.appendChild(image);
        var playerPosition = playerPoker.lastElementChild;
        playAHand(array[array.length - 1], playerPosition);
        //判断玩家的点数
        switch (resultJudge(playerArray)) {
            case "blackJack":
                blackJackShow("player");
                if (isDouble) {
                    result="doubleWin";
                    ok.onclick = decision;
                } else {
                    result="win";
                    ok.onclick = decision;
                }
                break;
            case "bust":
                bustShow("player");
                if (isDouble) {
                    result="doubleLose";
                    ok.onclick = decision;
                } else {
                    result="lose";
                    ok.onclick = decision;
                }
                break;
            case "five":
                fiveDragonShow("player");
                if (isDouble) {
                    result="doubleWin";
                    ok.onclick = decision;
                } else {
                    result="win";
                    ok.onclick = decision;
                }
                break;
            default :
                if (isDouble) {//如果双倍不能再要牌
                    bankerChoice(true);
                } else {//没有双倍可以继续要牌
                    playerChoice();
                }
        }
    }

    //玩家选择下一步是停止要牌还是继续要牌，还是要赌注加倍（赌注加倍只能要一张牌）
    //输入：是否要付保险
    //输出：根据玩家的选择完成下一步操作
    function playerChoice() {
        //玩家步骤选择区出现
        choice.style.display = "block";
        //停止要牌，开局
        var start = choice.getElementsByTagName("button")[0];
        start.onclick = function () {
            choice.style.display = "none";
            bankerChoice(false);
        };
        //继续要牌，玩家继续要牌
        var hit = choice.getElementsByTagName("button")[1];
        hit.onclick = function () {
            choice.style.display = "none";
            playerContinue(false);
        };
        //赌注加倍，玩家继续要牌（紧要一次）
        var double = choice.getElementsByTagName("button")[2];
        double.onclick = function () {
            choice.style.display = "none";
            playerContinue(true);
        }
    }

    //当庄家明牌不是A是，对二者黑杰克的身份进行判断并进行下一步处理
    function blackJackJudge() {
        if (resultJudge(bankerArray) == "blackJack" && resultJudge(playerArray)) {//如果二者都是黑杰克
            blackJackShow("banker");
            blackJackShow("player");
            ok.onclick = decision("push", false);
        } else if (resultJudge(bankerArray) == "blackJack") {//如果只有庄家是黑杰克
            blackJackShow("banker");
            ok.onclick = decision("lose", false);
        } else if (resultJudge(playerArray) == "blackJack") {//如果只有玩家是黑杰克
            blackJackShow("player");
            ok.onclick = decision("win", false);
        } else {//如果都不是，玩家将进行步骤选择
            playerChoice(false);
        }
    }

    //当庄家是A时，出现保险区，玩家对是否买保险进行选择
    function buyInsurance() {
        //显示保险区
        insurance.style.display = "block";
        //玩家觉得庄家是黑杰克，买了保险
        var buy = insurance.getElementsByTagName("button")[0];
        buy.onclick = function () {
            isInsurance=true;
            //保险区消失
            insurance.style.display = "none";
            if (resultJudge(bankerArray) == "blackJack") {//如果庄家是黑杰克，显示庄家身份，本局平局，并且玩家不用付保险
                blackJackShow("banker");
                ok.onclick = decision("push");
            } else {//如果庄家不是黑杰克，玩家进入选择下一步阶段，并且要付保险
                playerChoice();
            }
        };
        //玩家觉得庄家不是黑杰克，没买保险
        var noBuy = insurance.getElementsByTagName("button")[1];
        noBuy.onclick = function () {
            isInsurance=false;
            //保险区消失
            insurance.style.display = "none";
            if (resultJudge(bankerArray) == "blackJack") {//如果庄家是黑杰克，显示庄家身份，本局输了，并且玩家不用付保险
                blackJackShow("banker");
                ok.onclick = decision("lose");
            } else {//如果庄家不是黑杰克，玩家进入选择下一步阶段，并且不用付保险
                playerChoice();
            }
        }
    }
};