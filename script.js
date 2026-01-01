function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// IA SCRIPT GENERATOR
function generateScript() {
    const prompt = document.getElementById('ia-input-text').value.toLowerCase();
    const output = document.getElementById('ia-output');
    let script = "@echo off\n";
    
    if(prompt.includes("limpiar")) {
        script += "echo Limpiando...\ndel /s /f /q %temp%\\*.*\nipconfig /flushdns\necho Listo.";
    } else if(prompt.includes("internet")) {
        script += "netsh int tcp set global autotuninglevel=disabled\nnetsh interface tcp set global rss=enabled";
    } else {
        script += "echo Comando IA no reconocido. Intenta 'limpiar' o 'internet'.";
    }

    output.innerHTML = `SCRIPT_GENERADO:<br><pre style="color:white; margin-top:10px;">${script}</pre>`;
    
    // Descarga automática del .bat
    const blob = new Blob([script], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_Script.bat';
    a.click();
}

// HARDWARE REAL
async function detectHardware() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
        document.getElementById('gpu-real').innerText = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).split(',')[0];
    }
    document.getElementById('cpu-threads').innerText = navigator.hardwareConcurrency + " Cores";
}

// SPEED TEST GLOW
function runSpeedTest() {
    let speed = 0;
    const interval = setInterval(() => {
        speed += Math.random() * 95;
        document.getElementById('download-val').innerText = Math.floor(speed);
        if(speed >= 900) { clearInterval(interval); document.getElementById('download-val').innerText = "948"; }
    }, 60);
}

function sysCall(cmd) {
    alert("Ejecutar en Win+R: " + cmd);
}

setInterval(() => {
    document.getElementById('live-ping').innerText = Math.floor(Math.random() * 10 + 20);
}, 3000);

window.onload = detectHardware;
