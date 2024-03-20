function printMedalists() {
    let medalistsName = document.getElementById("medalists-one-name-input").value;
    document.getElementById("reveal-places").innerHTML = medalistsName;
}

function printWinnername() {
    let winnerName = document.getElementById("winner-input").value;
    document.getElementById("winner-name").innerHTML = h3red + winnerName + h3end;
}

const h3red = '<h3 style="color: red">';
const h3end = '</h3>';

// let medalistsName = document.getElementById("medalists-one-name-input").value;
// let medalistsTeam = document.getElementById("medalists-one-team-input").value;