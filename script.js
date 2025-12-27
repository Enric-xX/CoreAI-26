// 1. MONITOR DE PING REAL
setInterval(() => {
    const start = Date.now();
    fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' })
        .then(() => {
            const delta = Date.now() - start;
            const pingValue = document.getElementById('ping-value');
            const pingStatus = document.getElementById('ping-status');
            if(pingValue) pingValue.innerText = delta;
            if(pingStatus) pingStatus.style.background = delta < 100 ? '#28a745' : '#ffc107';
        }).catch(() => {});
}, 5000);

// 2. NAVEGACIÓN
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        const section = document.getElementById(btn.dataset.section);
        if(section) section.classList.add('active');
    });
});

// 3. MODO OSCURO
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.innerText = body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Noche";
}

// 4. IA GENERADORA
function generarComandoIA() {
    const promptInput = document.getElementById('ia-prompt');
    const resBox = document.getElementById('ia-response');
    const resText = document.getElementById('ia-command-result');
    
    if(!promptInput || !resBox || !resText) return;

    const prompt = promptInput.value.toLowerCase();
    const db = {
        "teclado": "reg add \"HKCU\\Control Panel\\Accessibility\\Keyboard Response\" /v \"Delay\" /t REG_SZ /d \"0\" /f",
        "red": "netsh int tcp set global autotuninglevel=disabled",
        "limpiar": "del /q /f /s %temp%\\*",
        "latencia": "netsh interface ipv4 set subinterface \"Ethernet\" mtu=1500 store=persistent",
        "dns": "ipconfig /flushdns",
        "ip": "ipconfig /all"
    };

    let cmd = "Petición no reconocida. Prueba 'teclado', 'red' o 'dns'.";
    for (let key in db) { if (prompt.includes(key)) cmd = db[key]; }

    resBox.style.display = 'flex';
    resText.innerText = cmd;
}

// 5. DIAGNÓSTICO
function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value;
    const gpu = document.getElementById('gpu-user').value;
    const res = document.getElementById('resultado-ia');
    if(!res) return;
    
    res.style.display = 'block';
    res.innerHTML = `<h3>Análisis CoreAI:</h3><p>Detectado: ${cpu || 'Genérico'} + ${gpu || 'Genérico'}. <br><b>Estado: Optimizable</b>. Se recomienda aplicar el parche de registro para reducir latencia.</p>`;
}

// 6. DESCARGAS
function descargarReg() {
    const content = "Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile]\n\"NetworkThrottlingIndex\"=dword:ffffffff";
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Optimizar_Red.reg';
    a.click();
}

function descargarOptimizador() {
    const code = "@echo off\ntitle CoreAI 26\necho Optimizando...\npowercfg -h off\nipconfig /flushdns\npause";
    const blob = new Blob([code], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI26_Optimizer.bat';
    a.click();
}

function copyText(btn) {
    const codeElement = btn.parentElement.querySelector('code');
    if(!codeElement) return;
    navigator.clipboard.writeText(codeElement.innerText);
    const old = btn.innerText;
    btn.innerText = "¡OK!";
    setTimeout(() => btn.innerText = old, 2000);
}

