fetch('data.json')
.then(response => response.json())
.then(respuesta => {

    console.log(respuesta)
});