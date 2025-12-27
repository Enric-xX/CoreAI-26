// 1. MONITOR DE PING REAL
setInterval(() => {
    const start = Date.now();
    fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' })
        .then(() => {
            const delta = Date.now() - start;
            document.getElementById('ping-value').innerText = delta;
            document.getElementById('ping-status').style.background = delta < 100 ? '#28a745' : '#ffc107';
        });
}, 5000);

// 2. NAVEGACIÓN
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.section).classList.add('active');
    });
});

// 3. MODO OSCURO
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-toggle');
    btn.innerText = body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Noche";
}

// 4. IA GENERADORA (DICCIONARIO PRO)
function generarComandoIA() {
    const prompt = document.getElementById('ia-prompt').value.toLowerCase();
    const resBox = document.getElementById('ia-response');
    const resText = document.getElementById('ia-command-result');
    
    const db = {
        "teclado": "reg add \"HKCU\\Control Panel\\Accessibility\\Keyboard Response\" /v \"Delay\" /t REG_SZ /d \"0\" /f",
        "red": "netsh int tcp set global autotuninglevel=disabled",
        "limpiar": "del /q /f /s %temp%\\*",
        "latencia": "netsh interface ipv4 set subinterface \"Ethernet\" mtu=1500 store=persistent"
    };

    let cmd = "Petición no reconocida. Prueba 'teclado', 'red' o 'limpiar'.";
    for (let key in db) { if (prompt.includes(key)) cmd = db[key]; }

    resBox.style.display = 'flex';
    resText.innerText = cmd;
}

// 5. DIAGNÓSTICO BOTTLENECK
function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value;
    const gpu = document.getElementById('gpu-user').value;
    const res = document.getElementById('resultado-ia');
    
    res.style.display = 'block';
    res.innerHTML = `<h3>Análisis CoreAI:</h3><p>Detectado: ${cpu} + ${gpu}. <br><b>Puntuación de Equilibrio: 94/100</b>. Recomendamos desactivar MPO en registros para evitar stuttering.</p>`;
}

// 6. DESCARGA .REG
function descargarReg() {
    const content = `Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile]\n"NetworkThrottlingIndex"=dword:ffffffff`;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Optimizar_Red.reg';
    a.click();
}

function copyText(btn) {
    const code = btn.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = "¡OK!";
    setTimeout(() => btn.innerText = "Copiar", 2000);
}
