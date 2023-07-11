fetch("data.json")
  .then(response => response.json())
  .then(respuesta => {
    let elemento = document.getElementById("container");
    let codigo_html = "";
    codigo_html = "<h1>" + respuesta[0].nombre + "</h1>";
    codigo_html += "<h2>" + respuesta[0].email + "</h2>";
    codigo_html += "<ul>";
    respuesta[0].works.forEach(element => {
      codigo_html += "<li>" + element.empresa + "-" + element.ubicacion + ": " + element.f_start + "</li>"
    });
    codigo_html += "</ul>"
    elemento.innerHTML = codigo_html;
  })
  .catch(error => {
    console.error("Error al cargar el archivo: ", error);
  });
