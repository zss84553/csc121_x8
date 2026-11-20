function Initiate() {
    cwd = "assets/images/";
    ext = ".png";

    const possibilities = [
        "Cherry", "Cherry", "Cherry", "Cherry",
        "Magnemite", "Magnemite", "Magnemite",
        "Pikachu", "Pikachu", "Pikachu",
        "Rocket", "Rocket", "Rocket",
        "Seven",
        "Slowpoke", "Slowpoke", "Slowpoke",
        "Staryu", "Staryu", "Staryu", "Staryu"
    ]

    computerPick = RandomInt(0, (possibilities.length - 1));
    slot1.src = cwd + possibilities[computerPick] + ext;

    computerPick = RandomInt(0, (possibilities.length - 1));
    slot2.src = cwd + possibilities[computerPick] + ext;

    computerPick = RandomInt(0, (possibilities.length - 1));
    slot3.src = cwd + possibilities[computerPick] + ext;

    test.innerHTML = "The house always wins!";
}
