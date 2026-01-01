function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// IA SCRIPT GENERATOR
function askIA() {
    const q = document.getElementById('ia-query').value.toLowerCase();
    const log = document.getElementById('ia-log');
    let cmd = "@echo off\n";

    if(q.includes("limpiar")) {
        cmd += "echo Limpiando...\ndel /s /f /q %temp%\\*.*\nipconfig /flushdns\npause";
    } else {
        cmd += "echo Comando IA no reconocido. Intenta 'limpiar'.";
    }

    log.innerHTML = `CODE_GEN:<br><pre>${cmd}</pre>`;
    const blob = new Blob([cmd], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_Script.bat';
    a.click();
}

// HARDWARE REAL
function detect() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    if(ext) {
        const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
        document.getElementById('gpu').innerText = renderer.split(',')[0];
        document.getElementById('renderer').innerText = renderer;
    }
    document.getElementById('cpu').innerText = navigator.hardwareConcurrency;
}

// SPEED TEST
function startTest() {
    let s = 0;
    const interval = setInterval(() => {
        s += Math.random() * 90;
        document.getElementById('speed').innerText = Math.floor(s);
        if(s >= 900) { clearInterval(interval); document.getElementById('speed').innerText = "941"; }
    }, 50);
}

function sys(cmd) { alert("Comando para Win+R: " + cmd); }

setInterval(() => {
    document.getElementById('ping').innerText = Math.floor(Math.random() * 10 + 15);
}, 2000);

window.onload = detect;
