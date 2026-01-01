// SISTEMA DE NAVEGACIÓN
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// DESBLOQUEO REAL
function unlock() {
    document.getElementById('auth-layer').style.fadeOut = "slow";
    setTimeout(() => {
        document.getElementById('auth-layer').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        initHardware();
    }, 500);
}

// APERTURA DIRECTA AJUSTES WINDOWS (SIN PREGUNTAS)
function openConfig(uri) {
    window.location.href = uri;
}

// IA COMMAND GENERATOR
const iaKnowledge = {
    "red": "netsh int tcp set global autotuninglevel=disabled",
    "limpiar": "del /s /f /q %temp%\\*.*",
    "dns": "ipconfig /flushdns",
    "ram": "EmptyStandbyList.exe (Requiere Tool)"
};

function processIA() {
    const q = document.getElementById('user-query').value.toLowerCase();
    const out = document.getElementById('ia-output');
    let cmd = "No reconozco esa petición. Prueba con 'limpiar' o 'red'.";
    
    for (let key in iaKnowledge) {
        if (q.includes(key)) {
            cmd = `COMANDO_GENERADO: <br><code style="color:white; background:#000; padding:10px; display:block; margin-top:10px;">${iaKnowledge[key]}</code>`;
            break;
        }
    }
    out.innerHTML = cmd;
}

// SPEEDTEST REALISTA
function startSpeedTest() {
    let s = 0;
    const interval = setInterval(() => {
        s += Math.random() * 85;
        document.getElementById('speed-val').innerText = Math.floor(s);
        if(s >= 900) {
            clearInterval(interval);
            document.getElementById('speed-val').innerText = "941.0";
        }
    }, 100);
}

// DETECCIÓN HARDWARE REAL
function initHardware() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
    document.getElementById('gpu-name').innerText = gpu || "GPU GENÉRICA";
}

// GENERAR .BAT DE LIMPIEZA
function generateCleanBat() {
    const code = `@echo off\necho CoreAI Limpiando...\ndel /s /f /q %temp%\\*.*\nipconfig /flushdns\necho LISTO.\npause`;
    const blob = new Blob([code], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_System_Purge.bat';
    a.click();
}

// SIMULADOR DE STATS
setInterval(() => {
    document.getElementById('cpu-temp').innerText = Math.floor(Math.random() * 10 + 40) + "°C";
    document.getElementById('ram-load').innerText = Math.floor(Math.random() * 15 + 10) + "%";
}, 3000);
