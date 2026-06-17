let registrosSalud = [];
const PIN_CORRECTO = "1234";

function verificarPIN() {
    const pinIngresado = document.getElementById("pin-input").value;
    const errorMsg = document.getElementById("error-pin");

    if (pinIngresado === PIN_CORRECTO) {
        document.getElementById("pantalla-pin").style.display = "none";
        document.getElementById("contenido-principal").style.display = "block";
    } else {
        errorMsg.innerText = "❌ PIN Incorrecto. Inténtalo de nuevo.";
    }
}

function guardarRegistro() {
    const fecha = document.getElementById("fecha").value;
    const fase = document.getElementById("fase").value;
    const emocion = document.getElementById("emocion").value;

    if (!fecha) {
        alert("Por favor selecciona una fecha.");
        return;
    }

    const nuevoRegistro = { fecha, fase, emocion };
    registrosSalud.push(nuevoRegistro);
    alert("✅ Registro guardado con éxito.");
    actualizarVistaReporte();
}

function actualizarVistaReporte() {
    const contenedorReporte = document.getElementById("vista-reporte");
    if (registrosSalud.length === 0) {
        contenedorReporte.innerText = "No hay registros guardados este mes.";
        return;
    }
    let textoReporte = "📋 REPORTE MENSUAL DE SALUD\n\n";
    registrosSalud.forEach(r => {
        textoReporte += `🔹 Fecha: ${r.fecha} | Estado: ${r.fase} | Emoción: ${r.emocion}\n`;
    });
    contenedorReporte.innerText = textoReporte;
}

function exportarReporte() {
    if (registrosSalud.length === 0) {
        alert("No hay datos para exportar.");
        return;
    }
    let textoReporte = "📋 REPORTE MENSUAL DE BIENESTAR Y SALUD\nGenerado para revisión médica.\n\n";
    registrosSalud.forEach(r => {
        textoReporte += `- Fecha: ${r.fecha} | Ciclo: ${r.fase} | Síntoma/Emoción: ${r.emocion}\n`;
    });
    const blob = new Blob([textoReporte], { type: "text/plain;charset=utf-8" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "Reporte_Salud_Mensual.txt";
    enlace.click();
}

function irInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
