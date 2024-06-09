function registrarDocente() {
    function pintar(nombre, materia, estatus, correo, curp) {
        let tbody = document.getElementById("contenido");
        let fila = document.createElement("tr");

        let dataNombre = document.createElement("td");
        let dataMateria = document.createElement("td");
        let dataEstatus = document.createElement("td");
        let dataCorreo = document.createElement("td");
        let dataCurp = document.createElement("td");

        dataNombre.innerText = nombre;
        dataMateria.innerText = materia;
        dataEstatus.innerText = estatus;
        dataCorreo.innerText = correo;
        dataCurp.innerText = curp;

        fila.appendChild(dataNombre);
        fila.appendChild(dataMateria);
        fila.appendChild(dataEstatus);
        fila.appendChild(dataCorreo);
        fila.appendChild(dataCurp);

        tbody.appendChild(fila);
    }

    // Parse URL parameters and paint the table
    let address = window.location.search;
    let parameterList = new URLSearchParams(address);

    let nombre = parameterList.get("nombre");
    let materia = parameterList.get("materia");
    let estatus = parameterList.get("estatus");
    let correo = parameterList.get("correo");
    let curp = parameterList.get("curp");

    if (nombre && materia && estatus && correo && curp) {
        pintar(nombre, materia, estatus, correo, curp);
    }
    window.location.href = "verX.html"; 

    pintar(nombre, materia, estatus, correo, curp);
    }

