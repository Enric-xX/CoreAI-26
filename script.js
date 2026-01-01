function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// IA SCRIPT GEN (BAT)
function generateScript() {
    const input = document.getElementById('ia-input').value.toLowerCase();
    const output = document.getElementById('ia-output');
    let code = "@echo off\ntitle CoreAI_AutoScript\n";

    if(input.includes("limpiar")) {
        code += "echo Limpiando Temporales...\ndel /s /f /q %temp%\\*.*\nipconfig /flushdns\necho Done.";
    } else if(input.includes("dns")) {
        code += "ipconfig /flushdns\necho DNS Flushed.";
    } else {
        code += "echo Comando IA no definido. Intenta 'limpiar'.";
    }

    output.innerText = code;
    const blob = new Blob([code], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_Opti.bat';
    a.click();
}

// HARDWARE REAL
async function detectSpecs() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debug = gl.getExtension('WEBGL_debug_renderer_info');
    if (debug) {
        console.log("GPU Detectada: " + gl.getParameter(debug.UNMASKED_RENDERER_WEBGL));
    }
}

function sysCall(cmd) {
    alert("Copia y pega en Win+R: " + cmd);
}

window.onload = detectSpecs;
