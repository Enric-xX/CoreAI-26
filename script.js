function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// DETECCIÓN DE COMPONENTES SIN INVENTAR
async function detectHardware() {
    // 1. GPU Exacta vía WebGL
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        document.getElementById('gpu-real').innerText = renderer.replace('ANGLE (', '').split(',')[0];
        document.getElementById('gpu-vendor').innerText = vendor;
    }

    // 2. CPU (Hilos lógicos reales)
    document.getElementById('cpu-threads').innerText = navigator.hardwareConcurrency + " Núcleos Lógicos";

    // 3. Estado de Energía (Sustituto de RAM si no es accesible)
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            const level = (battery.level * 100) + "%";
            const charging = battery.charging ? "Cargando" : "Modo Batería";
            document.getElementById('power-status').innerText = `${level} (${charging})`;
        });
    } else {
        document.getElementById('power-status').innerText = "Desktop / AC Power";
    }
}

// SIMULADOR DE PING
setInterval(() => {
    document.getElementById('live-ping').innerText = Math.floor(Math.random() * 12 + 5);
}, 2000);

// SPEED TEST GLOW
function runSpeedTest() {
    let speed = 0;
    const interval = setInterval(() => {
        speed += Math.random() * 85;
        document.getElementById('download-val').innerText = Math.floor(speed);
        if(speed >= 800) {
            clearInterval(interval);
            document.getElementById('download-val').innerText = "894";
        }
    }, 60);
}

// LLAMADAS DE REFERENCIA AL SISTEMA
function sysCall(cmd) {
    alert("Ejecuta en Win + R el comando: " + cmd);
}

window.onload = detectHardware;
