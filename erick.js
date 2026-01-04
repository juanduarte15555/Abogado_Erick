// Función para abrir los servicios en una nueva pestaña



function abrirServicio(url) {
    if (url && url !== "#") {
        window.open(url, '_blank');
    } else {
        alert("El detalle de este servicio estará disponible pronto.");
    }
}



// Mensaje de bienvenida en consola (opcional, solo para verificar que carga)
console.log("Página del Despacho Erick cargada correctamente.");