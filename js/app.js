const inputs = document.querySelectorAll('#form input')
const seleccion = document.getElementById('seleccion');
const cantidad = document.getElementById('cantidad');
const resumen = document.getElementById('resumen');
const borrar = document.getElementById('borrar');
const valorTicket = 200;
const estudiante = document.getElementsByTagName('h5');
const formulario = document.getElementById('form');




resumen.addEventListener('click', () => {
    swal({
        title: "Buena eleccion!",
        text: "Ahora podes pasar a pagar las entradas!",
        icon: "success",
    });  
})

seleccion.addEventListener('change', () => {
    const total = document.getElementById('total');
    total.value = (cantidad.value * 200)

    if (seleccion.options[seleccion.selectedIndex].text == "Estudiante") {
        total.value = total.value - (total.value * 0.8);
    } 
    if (seleccion.options[seleccion.selectedIndex].text == "Trainee") {
        total.value = total.value - (total.value * 0.5);
    }
    if (seleccion.options[seleccion.selectedIndex].text == "Junior"){
        total.value = total.value - (total.value * 0.15);
    }


})

borrar.addEventListener('click', () => {
    formulario.reset();
})

const validarCampos = (e) => {
    
    switch (e.target.nombre) {
        case "nombre":
            console.log(e);
        break;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarCampos);
    input.addEventListener('blur', validarCampos);
})

formulario.addEventListener('submit', (e) => {
    console.log('toque sumbit');
    e.preventDefault();
})


// seguir viendo esto para validar campos https://www.youtube.com/watch?v=s3pC93LgP18