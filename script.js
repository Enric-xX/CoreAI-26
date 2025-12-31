// NAVEGACIÓN
function showTab(id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// TERMINAL (S4vitar Style)
const tInput = document.getElementById('term-input');
const tLog = document.getElementById('term-log');

tInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const cmd = tInput.value;
        const line = document.createElement('div');
        line.innerHTML = `<span style="color:#00f3ff">user@coreai:~$</span> ${cmd}<br>${runCmd(cmd)}`;
        tLog.appendChild(line);
        tInput.value = '';
        tLog.scrollTop = tLog.scrollHeight;
    }
});

function runCmd(cmd) {
    if(cmd === 'help') return "Commands: sys_info, netstat, config_dump, clear";
    if(cmd === 'sys_info') return "Kernel: CoreAI-26 | Status: Stable | Enc: AES-256";
    if(cmd === 'netstat') return "Scanning... [8080:OPEN] [22:LISTENING]";
    return "Error: Unknown command sequence.";
}

// SPEEDTEST (Vodafone/Speedtest Style)
function runSpeedTest() {
    let speed = 0;
    const interval = setInterval(() => {
        speed += Math.random() * 95;
        document.getElementById('mbps').innerText = Math.floor(speed);
        const offset = 283 - (283 * (speed / 1000));
        document.getElementById('speed-progress').style.strokeDashoffset = offset;
        
        if(speed >= 850) {
            clearInterval(interval);
            document.getElementById('mbps').innerText = "852.4";
        }
    }, 100);
}

// HARDWARE DETECT (Technical City Style)
function initHW() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const gpu = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
    
    document.getElementById('gpu-info').innerText = gpu;
    document.getElementById('my-hw').innerText = gpu;
    document.getElementById('my-bar').style.width = "72%"; // Simulación de potencia vs 4090
}

// PING REAL-TIME
setInterval(() => {
    document.getElementById('ping').innerText = Math.floor(Math.random() * 15 + 5) + " MS";
}, 3000);

function winCall(uri) { window.location.href = uri; }
function login(p) { alert(`Conectando con ${p.toUpperCase()} Secure API...`); }

window.onload = initHW;
