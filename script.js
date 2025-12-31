// NAVEGACIÓN
function showTab(id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// TERMINAL LOGIC (S4vitar Style)
const termIn = document.getElementById('term-in');
const termOut = document.getElementById('term-out');

termIn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = termIn.value.toLowerCase();
        const line = document.createElement('div');
        line.innerHTML = `<span style="color:#888">$ ${cmd}</span><br>${executeCmd(cmd)}`;
        termOut.appendChild(line);
        termIn.value = '';
        termOut.scrollTop = termOut.scrollHeight;
    }
});

function executeCmd(cmd) {
    if (cmd === 'netstat') return "TCP 127.0.0.1:443 ESTABLISHED...";
    if (cmd === 'purge_mem') return "Memory buffer cleared. 1.2GB released.";
    if (cmd === 'sys_info') return "CoreAI Kernel v2.6.0-stable | x64_AES_ACTIVE";
    return "Error: Command not found. Try 'sys_info' or 'netstat'.";
}

// SPEEDTEST (Vodafone Style)
function runSpeedTest() {
    let dl = 0;
    const interval = setInterval(() => {
        dl += Math.random() * 80;
        document.getElementById('dl-val').innerText = Math.floor(dl);
        if (dl >= 750) {
            clearInterval(interval);
            document.getElementById('ul-val').innerText = "320";
        }
    }, 100);
}

// LLAMADAS AL SISTEMA
function winCall(uri) {
    window.location.href = uri;
}

function deployBat() {
    const code = `@echo off\necho Cleaning system...\ndel /q /f %temp%\\*.*\nipconfig /flushdns\npause`;
    const blob = new Blob([code], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'COREAI_CLEAN.bat';
    a.click();
}

// DETECCIÓN HARDWARE (Technical City Style)
function initHardware() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const dbgRender = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu = gl.getParameter(dbgRender.UNMASKED_RENDERER_WEBGL);
    document.getElementById('gpu-name').innerText = gpu || "Standard Graphics Device";
    document.getElementById('user-hardware-info').innerText = gpu;
}

// PING SIMULATOR
setInterval(() => {
    document.getElementById('ping-val').innerText = Math.floor(Math.random() * 20 + 5) + " MS";
}, 3000);

window.onload = initHardware;
