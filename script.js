// --- MONITOR DE LATENCIA ---
function updatePing() {
    const start = Date.now();
    fetch('https://www.google.com/favicon.ico', { mode: 'no-cors', cache: 'no-cache' })
        .then(() => {
            const delta = Date.now() - start;
            const pingEl = document.getElementById('ping-value');
            if (pingEl) pingEl.innerText = delta;
        }).catch(() => {});
}
setInterval(updatePing, 5000);

// --- NAVEGACIÓN ---
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-section');
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.classList.add('active');
    });
});

// --- GENERADOR IA ---
function generarComandoIA() {
    const input = document.getElementById('ia-prompt');
    const resText = document.getElementById('ia-command-result');
    const resBox = document.getElementById('ia-response');
    if (!input || !resText) return;

    const query = input.value.toLowerCase();
    const comandos = {
        "dns": "ipconfig /flushdns",
        "red": "netsh int tcp set global autotuninglevel=disabled",
        "limpiar": "del /s /f /q %temp%\\*.*",
        "ip": "ipconfig /all"
    };

    let result = "Comando no reconocido. Prueba con 'dns' o 'red'.";
    for (let key in comandos) {
        if (query.includes(key)) result = comandos[key];
    }

    resText.innerText = result;
    if (resBox) resBox.style.display = 'flex';
}

// --- DESCARGAS ---
function descargarOptimizador() {
    const batContent = "@echo off\ntitle CoreAI 26 Optimizer\nipconfig /flushdns\npause";
    const blob = new Blob([batContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CoreAI26_Optimizer.bat';
    a.click();
}

function copyText(btn) {
    const code = btn.parentElement.querySelector('code');
    if (code) {
        navigator.clipboard.writeText(code.innerText);
        const originalText = btn.innerText;
        btn.innerText = "¡Copiado!";
        setTimeout(() => btn.innerText = originalText, 2000);
    }
}


