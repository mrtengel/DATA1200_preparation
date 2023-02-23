let winnerList = [];
    let winner1 = {
        name:"Tengel Sandtrø",
        team:"Alpha"
    };

    let winner2 = {
        name:'Klara Sandtrø',
        team:'Beta'
    };

    let winner3 = {
        name:'Aurora Aas',
        team:'Alpha'
    };

winnerList.push(winner1);
winnerList.push(winner2);
winnerList.push(winner3);


let teamList = ['Alpha', 'Beta'];
    function winners() {
        document.getElementById("first-place-name").innerHTML = winnerList[0].name;
            document.getElementById("first-place-team").innerHTML = winnerList[0].team;;
        document.getElementById("second-place-name").innerHTML = winnerList[1].name;
            document.getElementById("second-place-team").innerHTML = winnerList[1].team;
        document.getElementById("third-place-name").innerHTML = winnerList[2].name;
            document.getElementById("third-place-team").innerHTML = winnerList[2].team;
    }