// --- MANEJO DE PESTAÑAS ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// --- COMANDOS DE WINDOWS REALES ---
function openWinSetting(uri) {
    // Esto abre ventanas reales de configuración de Windows
    window.location.href = uri;
    showToast("Abriendo Ajustes de Sistema...");
}

// --- GENERADOR DE SCRIPT BATCH (.BAT) REAL ---
function generateBatch() {
    const code = `@echo off
title CoreAI Limpiador
echo Limpiando archivos temporales...
del /s /f /q %temp%\\*.*
ipconfig /flushdns
echo Proceso terminado con éxito!
pause`;

    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Optimizar_PC.bat';
    a.click();
    showToast("Script .BAT generado e iniciado.");
}

// --- UTILIDADES ---
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast("Comando copiado al portapapeles.");
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// --- MÉTRICAS SIMULADAS (Live Feel) ---
setInterval(() => {
    const gpu = Math.floor(Math.random() * 40) + 10;
    const net = Math.floor(Math.random() * 20) + 5;
    
    if(document.getElementById('gpu-val')) {
        document.getElementById('gpu-val').innerText = gpu + "%";
        document.getElementById('gpu-bar').style.width = gpu + "%";
        document.getElementById('net-val').innerText = net + " ms";
    }
}, 2000);
