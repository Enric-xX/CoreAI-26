// --- SISTEMA DE LOGS ---
function terminalLog(msg) {
    const out = document.getElementById('terminal-out');
    const time = new Date().toLocaleTimeString();
    out.innerHTML += `<br>[${time}] > ${msg}`;
    out.scrollTop = out.scrollHeight;
}

// --- NAVEGACIÓN SPA ---
function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    terminalLog(`MOD_LOAD: ${tabId.toUpperCase()}`);
}

// --- LLAMADAS REALES A WINDOWS ---
function winCall(uri) {
    terminalLog(`EXEC_URI_CALL: ${uri}`);
    window.location.href = uri;
}

// --- GENERADOR DE SCRIPT BATCH ELITE ---
function deployBat() {
    const batContent = `@echo off
title CoreAI 26 - Genesis Cleaner
echo [SYSTEM] Iniciando limpieza profunda...
del /s /f /q %temp%\\*.*
rd /s /q %temp%
md %temp%
ipconfig /flushdns
echo [SUCCESS] Sistema purgado.
pause`;

    const blob = new Blob([batContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'COREAI_PURGE.bat';
    link.click();
    terminalLog("SCRIPT_GEN: COREAI_PURGE.bat descargado.");
}

// --- MONITORIZACIÓN REAL ---
setInterval(() => {
    // Simulación de carga de CPU (Nate apreciaría el detalle visual)
    const load = Math.floor(Math.random() * 30) + 5;
    document.getElementById('cpu-bar').style.width = load + "%";
    
    // Test de Ping (S4vitar apreciaría la métrica de red)
    const start = Date.now();
    fetch('https://www.google.com', { mode: 'no-cors' }).then(() => {
        const ping = Date.now() - start;
        document.getElementById('ping-val').innerText = ping + " MS";
    });
}, 3000);

terminalLog("KERNEL_ESTABLISHED // READY_FOR_USER_INPUT");
