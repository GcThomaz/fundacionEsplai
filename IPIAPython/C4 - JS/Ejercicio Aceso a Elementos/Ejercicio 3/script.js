var buttonGustavo = document.getElementById("warning");
var text = document.getElementById("textWarning");

buttonGustavo.addEventListener("click", warning );

function warning () {
    let texto = text.innerHTML;
    alert(texto);
    }