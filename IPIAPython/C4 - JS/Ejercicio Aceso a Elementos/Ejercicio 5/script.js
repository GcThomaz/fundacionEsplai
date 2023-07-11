
    var buttonSH = document.getElementById("buttonSH");
    var divSquare = document.getElementById("square");

    buttonSH.addEventListener("click", function() {
        if (divSquare.style.display === "none") {
            divSquare.style.display = "block";
        } else {
            divSquare.style.display = "none";
        }
    });