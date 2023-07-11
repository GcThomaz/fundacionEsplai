fetch('../json/data.json')
.then(response => response.json())
.then(respuesta => {

    $('#objetivos').append('<h4>' + respuesta[0].basics.name + '</h4>');


    console.log(respuesta)
});