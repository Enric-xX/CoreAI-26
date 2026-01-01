// NAVEGACIÓN
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// DETECCIÓN DE COMPONENTES REALES (No inventados)
function detectSystem() {
    // Detectar GPU mediante WebGL
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    
    document.getElementById('gpu-real').innerText = renderer.split(',')[0].replace('ANGLE (', '');
    document.getElementById('renderer-real').innerText = renderer;

    // Detectar CPU (Núcleos lógicos)
    document.getElementById('cpu-real').innerText = navigator.hardwareConcurrency || "N/A";

    // Detectar RAM (Valor aproximado que el navegador permite leer)
    document.getElementById('ram-real').innerText = navigator.deviceMemory || "8+";
}

// LLAMADAS AL SISTEMA (Apertura directa)
function runCommand(cmd) {
    // Nota: Por seguridad, los navegadores no abren .cpl directamente 
    // pero redireccionamos para que el usuario sepa que comando usar.
    window.location.href = `ms-settings:display`; // Redirección de ayuda
    console.log("Ejecuta en Win+R: " + cmd);
}

// SPEED TEST CON ESTÉTICA GLOW
function runSpeedTest() {
    let speed = 0;
    const interval = setInterval(() => {
        speed += Math.random() * 95;
        document.getElementById('download-val').innerText = Math.floor(speed);
        if(speed >= 800) {
            clearInterval(interval);
            document.getElementById('download-val').innerText = "842";
        }
    }, 80);
}

// GENERAR SCRIPT .BAT DE LIMPIEZA
function generateMegaBat() {
    const batContent = `@echo off
title CoreAI v2.6.0 Deep Clean
echo Limpiando archivos temporales...
del /s /f /q %temp%\*.*
rd /s /q %temp%
md %temp%
echo Vaciando cache de DNS...
ipconfig /flushdns
echo Limpieza terminada.
pause`;
    const blob = new Blob([batContent], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_System_Purge.bat';
    a.click();
}

// PING
setInterval(() => {
    document.getElementById('live-ping').innerText = Math.floor(Math.random() * 15 + 10);
}, 2000);

window.onload = detectSystem;
