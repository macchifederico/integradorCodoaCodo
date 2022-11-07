const inputs = document.querySelectorAll('#form input')
const seleccion = document.getElementById('seleccion');
const cantidad = document.getElementById('cantidad');
const resumen = document.getElementById('resumen');
const borrar = document.getElementById('borrar');
const valorTicket = 200;
const estudiante = document.getElementsByTagName('h5');
const formulario = document.getElementById('form');

const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/	
}


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
    
    switch (e.target.name) {
        
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('border-danger');
                document.getElementById('nombre').classList.add('border-success');
            } else {
                document.getElementById('nombre').classList.add('border-danger');
                document.getElementById('nombre').classList.remove('border-success');
            }
        break;
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('apellido').classList.remove('border-danger');
                document.getElementById('apellido').classList.add('border-success');
            } else {
                document.getElementById('apellido').classList.add('border-danger');
                document.getElementById('apellido').classList.remove('border-success');
            }        
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('email').classList.remove('border-danger');
                document.getElementById('email').classList.add('border-success');
            } else {
                document.getElementById('email').classList.add('border-danger');
                document.getElementById('email').classList.remove('border-success');
            }        
        break;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarCampos);
    input.addEventListener('blur', validarCampos);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})


// seguir viendo esto para validar campos https://www.youtube.com/watch?v=s3pC93LgP18