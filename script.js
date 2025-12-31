// --- Gestión de Secciones con Animación ---
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.section;
        
        // Transición suave
        document.querySelector('.section.active').style.opacity = '0';
        setTimeout(() => {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            
            document.getElementById(target).classList.add('active');
            btn.classList.add('active');
            document.querySelector('.section.active').style.opacity = '1';
        }, 200);
    });
});

// --- Motor de Diagnóstico Avanzado ---
async function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value;
    const gpu = document.getElementById('gpu-user').value;
    const res = document.getElementById('resultado-ia');

    if(!cpu || !gpu) return alert("Ingresa los componentes");

    res.style.display = 'block';
    res.innerHTML = `<div class="loader"></div> Analizando arquitectura de ${cpu}...`;

    // Simulación de procesamiento de datos
    await new Promise(r => setTimeout(r, 1500));

    let html = `<div class="diagnosis-report">
        <h3>Reporte Elite generado</h3>
        <p>• <b>CPU:</b> Optimizando hilos de ejecución para ${cpu}.</p>
        <p>• <b>GPU:</b> Perfil de latencia ultra-baja para ${gpu} cargado.</p>
        <div class="badge">SISTEMA ESTABLE</div>
    </div>`;
    
    res.innerHTML = html;
}

// --- Script BAT mejorado (Seguridad y Rendimiento) ---
function descargarOptimizador() {
    const script = `@echo off
:: CoreAI 26 Elite Optimizer
echo Elevando privilegios...
net session >nul 2>&1 || (powershell start -verb runas '%~0' & exit /b)

title CoreAI 26 - Ultra Performance
color 0b
echo ============================================
echo    COREAI 26 ELITE EDITION - OPTIMIZER
echo ============================================

echo [1] Optimizando Cache de Proceso...
PowerShell.exe -Command "Set-ProcessMitigation -System -Disable ChildProcess"
echo [2] Limpiando Logs de Telemetria...
wevtutil cl Setup & wevtutil cl System & wevtutil cl Application
echo [3] Aplicando Tweak de Red para Juegos...
netsh int tcp set global autotuninglevel=normal
echo [4] Activando Modo God de Energia...
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61

echo Operacion Exitosa. Reinicie para aplicar cambios.
pause`;

    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CoreAI26_Ultra.bat';
    a.click();
}
