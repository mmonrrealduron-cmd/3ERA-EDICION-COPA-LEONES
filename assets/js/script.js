const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');

const SCRIPT_URL = https://script.google.com/macros/s/AKfycbxraN7l6TSPQElC2QyVnuXRFagNXyR_Zm1j3hL0xYDc04FIzgakl5rCE5FNVslG0Xzp8Q/exec;

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const modalidadesSeleccionadas = [];

    document.querySelectorAll('input[type="checkbox"]:checked')
    .forEach(check => {
        modalidadesSeleccionadas.push(check.value);
    });
   const datos = {
        atleta: form.atleta.value,
        dojang: form.dojang.value,
        entrenador: form.entrenador.value,
        edad: form.edad.value,
        cinta: form.cinta.value,
        modalidades: modalidadesSeleccionadas.join(', '),
        extraModalidades: form.extraModalidades.value,
        whatsapp: form.whatsapp.value
    };
     try{

        await fetch(SCRIPT_URL, {
            method:'POST',
            body:JSON.stringify(datos)
        });

        mensaje.innerHTML = '✅ Registro enviado correctamente';

        form.reset();

    }catch(error){

        mensaje.innerHTML = '❌ Error al registrar';

    }
  });
