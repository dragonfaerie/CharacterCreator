function diceRoller() {
  var diceType = document.forms["formA"]["diceType"].value;
  var numDice = document.forms["formA"]["numDice"].value;
  var diceRoll;
  var totalRoll = 0;
  var rollText = "";
  document.forms["formB"]["indResult"].value = "";
  document.forms["formB"]["totResult"].value = "";

  for (var i = 0; i < numDice; i++) {
    diceRoll = 1 + Math.round(diceType * Math.random());
    if (diceRoll > diceType) {
      diceRoll = diceRoll - 1;
    }

    if (rollText == "") {
      rollText = rollText + diceRoll;
    } else {
      rollText = rollText + ", " + diceRoll;
    }
    totalRoll = totalRoll + diceRoll;
  }

  document.forms["formB"]["indResult"].value = rollText;
  document.forms["formB"]["totResult"].value = totalRoll;
}

function partOne() {
  var charRace = document.forms["formC"]["charRace"].value;
  var charClass = document.forms["formC"]["charClass"].value;
  var diceType;
  var rollHolder = [];

  for (var i = 0; i < 6; i++) {
    var a = 1 + Math.round(6 * Math.random());
    var b = 1 + Math.round(6 * Math.random());
    var c = 1 + Math.round(6 * Math.random());
    var tmpStat = a + b + c;
    if (tmpStat > 18) {
      tmpStat = 18;
    }
    rollHolder.push(tmpStat);
  }
  rollHolder.sort(function(a, b) {
    return a - b;
  });

  switch (charClass) {
  }

  console.log(rollHolder[0]);
  console.log(rollHolder[1]);
  console.log(rollHolder[2]);
  console.log(rollHolder[3]);
  console.log(rollHolder[4]);
  console.log(rollHolder[5]);
}
