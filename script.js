document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejar la inscripción a cursos
    const botonesInscripcion = document.querySelectorAll('.inscribir');
    
    botonesInscripcion.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const cursoId = evento.target.dataset.cursoId;
            const tituloCurso = evento.target.closest('.curso').querySelector('h3').textContent;
            
            // Simulación de inscripción
            alert(`¡Te has inscrito al curso: "${tituloCurso}" (ID: ${cursoId})! \n(Esta es una funcionalidad de frontend, no se guarda en el servidor).`);
            
            // Aquí iría la lógica para enviar la inscripción al backend (Etapa 4 - Integrante B)
            console.log(`Petición de inscripción para ${tituloCurso} enviada al backend.`);
        });
    });

    // 2. Manejar el botón 'Ver Cursos'
    const botonMostrarCursos = document.getElementById('mostrarCursos');
    
    botonMostrarCursos.addEventListener('click', () => {
        console.log('Se ha hecho clic en "Ver Cursos".');
        // Aquí se podría implementar la lógica para cargar cursos desde el backend
    });

    console.log('Frontend de la plataforma educativa cargado exitosamente.');
});