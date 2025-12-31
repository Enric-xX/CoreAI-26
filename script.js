// NAVEGACIÓN SPA
function tab(id) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
    logTerminal(`Switched to module: ${id.toUpperCase()}`);
}

// APERTURA DIRECTA DE WINDOWS SETTINGS
function sys(uri) {
    logTerminal(`Executing direct system call: ${uri}`);
    // Esto lo abre directamente en Windows sin preguntar
    window.location.href = uri;
}

// TEST DE VELOCIDAD (SIMULACIÓN REALISTA)
function runTest() {
    logTerminal("Iniciando Network Stress Test...");
    let val = 0;
    const interval = setInterval(() => {
        val += Math.random() * 92;
        document.getElementById('speed-num').innerText = Math.floor(val);
        if(val >= 890) {
            clearInterval(interval);
            document.getElementById('speed-num').innerText = "914.2";
            logTerminal("Test completado: 914.2 Mbps.");
        }
    }, 80);
}

// TERMINAL (S4vitar Style)
const tIn = document.getElementById('t-input');
const tLog = document.getElementById('term-log');

tIn.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const cmd = tIn.value.toLowerCase();
        logTerminal(`[USER]: ${cmd}`);
        tIn.value = '';
        processCmd(cmd);
    }
});

function logTerminal(msg) {
    const p = document.createElement('p');
    p.innerText = `> [${new Date().toLocaleTimeString()}] ${msg}`;
    tLog.appendChild(p);
    tLog.scrollTop = tLog.scrollHeight;
}

function processCmd(cmd) {
    if(cmd === 'sys_info') logTerminal("KERNEL_V_OMEGA // x64 // AES_256_ENABLED");
    else if(cmd === 'clear') tLog.innerHTML = '';
    else logTerminal("Unknown command. Try: sys_info, clear.");
}

// HARDWARE DETECT (Technical City Style)
function detect() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debug = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL);
    document.getElementById('gpu-display').innerText = gpu;
    document.getElementById('local-hw').innerText = gpu;
}

// GENERAR .BAT DE LIMPIEZA
function genBat() {
    const content = `@echo off\necho Limpiando... \ndel /s /f /q %temp%\\*.*\nipconfig /flushdns\npause`;
    const blob = new Blob([content], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CoreAI_Cleaner.bat';
    a.click();
}

window.onload = () => {
    detect();
    setInterval(() => {
        document.getElementById('ping-val').innerText = Math.floor(Math.random() * 12 + 4);
    }, 2000);
};
