let tokens = 20;

function spin() {
    const ext = ".png";

    const possibilities = [
        "Magnemite",
        "Pikachu",
        "Slowpoke",
        "Staryu"
    ]

    tokens--;

    results = ["1st", "2nd", "3rd"];

    for (result in results) {
        computerPick = RandomInt(0, (possibilities.length - 1));
        results[result] = possibilities[computerPick];
    }

    slot0.src = results[0] + ext;
    slot1.src = results[1] + ext;
    slot2.src = results[2] + ext;

    outputValue = slot2.src;

    if ((       results[0] == results[1])
            && (results[1] == results[2])
            && (results[2] == results[0])
    ) {
        winCon = true;
    } else {
        winCon = false;
    }

    if (winCon) {
        tokens += 14;
        returnMsg.innerHTML = "<span style='color: red; font-size: 32px;'>CONGRATULATIONS - you win!</span>";
    } else if (tokens == 0) {
        returnMsg.innerHTML = "<span style='color: red; font-size: 32px;'>WARNING - no tokens left.</span>";
        slotButton.hidden = true;
    } else {
        returnMsg.innerHTML = ""
    }
    tokenCount.innerHTML = "Tokens remaining: " + tokens.toString();
}
