function validation() {
    document.getElementById("validation_output").innerHTML = "";
    let userInput = document.getElementById("polygon_side_input").value;

    if (userInput < 0) userInput = Math.abs(userInput);
    if (userInput < 0 || userInput > 10 || userInput == "") {
        document.getElementById("validation_output").innerHTML = "Input Invalid, enter a number between 0 and 10.";
    } else {
        getShape(userInput);
    }
}

function getShape(userInput) {
    const polygons = {
        0: "null - agon? No such thing.",
        1: "Henagon",
        2: "Digon",
        3: "Trigon",
        4: "Tetragon",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Eeneagon",
        10: "Decagon"
    };

    userInput = Math.round(userInput);
    userInput = polygons[userInput];
    alert(userInput);
}