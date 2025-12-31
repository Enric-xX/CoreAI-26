// --- NAVEGACIÓN ENTRE SECCIONES ---
document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
        // Quitar clase activa de botones y secciones
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

        // Activar el botón clicado y su sección correspondiente
        button.classList.add('active');
        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// --- MOTOR DE DIAGNÓSTICO (HARDWARE) ---
function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value.toLowerCase();
    const gpu = document.getElementById('gpu-user').value.toLowerCase();
    const resultBox = document.getElementById('resultado-ia');

    if (!cpu || !gpu) {
        alert("Por favor, introduce tu CPU y GPU para el análisis.");
        return;
    }

    resultBox.style.display = 'block';
    resultBox.innerHTML = `<h3>🔍 Analizando configuración...</h3><p>Generando recomendaciones para ${cpu.toUpperCase()} y ${gpu.toUpperCase()}...</p>`;

    setTimeout(() => {
        let recomendacion = `<strong>Recomendación CoreAI 26:</strong><br><br>`;
        
        if (gpu.includes('nvidia') || gpu.includes('rtx') || gpu.includes('gtx')) {
            recomendacion += "• Detectada GPU NVIDIA: Activa 'Modo Latencia Baja' en el Panel de Control de NVIDIA.<br>";
        } else if (gpu.includes('amd') || gpu.includes('radeon')) {
            recomendacion += "• Detectada GPU AMD: Activa 'Radeon Anti-Lag' en el software Adrenalin.<br>";
        }

        if (cpu.includes('i7') || cpu.includes('i9') || cpu.includes('ryzen 7') || cpu.includes('ryzen 9')) {
            recomendacion += "• Hardware de Gama Alta: Asegúrate de usar el plan de energía 'Máximo Rendimiento' del Panel Pro.<br>";
        } else {
            recomendacion += "• Hardware Optimizable: Recomendamos priorizar el 'Rendimiento Visual' en sysdm.cpl.<br>";
        }

        recomendacion += "<br>✅ <b>Consejo Extra:</b> Limpia la caché de DirectX en la sección 'Limpieza' para evitar tirones (stuttering).";
        
        resultBox.innerHTML = recomendacion;
    }, 1200);
}

// --- FUNCIÓN PARA COPIAR COMANDOS ---
function copyText(button) {
    const codeElement = button.parentElement.querySelector('code');
    const textToCopy = codeElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;
        button.innerText = "¡Copiado!";
        button.style.background = "#28a745"; // Verde éxito

        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = "var(--accent)";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}
function descargarOptimizador() {
    const comandos = `@echo off
title CoreAI 26 - Optimizador Elite
echo Optimizando sistema... por favor espere.
echo.
echo [1/5] Activando Maximo Rendimiento...
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
echo [2/5] Limpiando cache DNS...
ipconfig /flushdns
echo [3/5] Desactivando Hibernacion...
powercfg -h off
echo [4/5] Optimizando TCP...
netsh int tcp set global autotuninglevel=disabled
echo [5/5] Buscando actualizaciones de apps...
winget upgrade --all
echo.
echo Optimización completada con éxito.
pause`;

    const blob = new Blob([comandos], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Optimizar_CoreAI26.bat';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
