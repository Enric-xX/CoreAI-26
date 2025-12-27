// MONITOR PING
setInterval(() => {
    const start = Date.now();
    fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' }).then(() => {
        const delta = Date.now() - start;
        document.getElementById('ping-value').innerText = delta;
    }).catch(() => {});
}, 5000);

// NAVEGACIÓN
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.section).classList.add('active');
    });
});

// MODO OSCURO
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// IA
function generarComandoIA() {
    const input = document.getElementById('ia-prompt').value.toLowerCase();
    const resBox = document.getElementById('ia-response');
    const resText = document.getElementById('ia-command-result');
    
    let cmd = "Prueba con 'dns', 'red' o 'limpiar'.";
    if (input.includes('dns')) cmd = "ipconfig /flushdns";
    if (input.includes('red')) cmd = "netsh int tcp set global autotuninglevel=disabled";
    if (input.includes('limpiar')) cmd = "del /s /f /q %temp%\\*.*";

    resText.innerText = cmd;
    resBox.style.display = 'flex';
}

function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value;
    const gpu = document.getElementById('gpu-user').value;
    const res = document.getElementById('resultado-ia');
    res.style.display = 'block';
    res.innerHTML = `Analizando ${cpu}... Sistema listo para optimización pro.`;
}

function descargarOptimizador() {
    const code = "@echo off\nipconfig /flushdns\npause";
    const blob = new Blob([code], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_Opt.bat';
    a.click();
}

function descargarReg() {
    const code = "Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile]\n\"NetworkThrottlingIndex\"=dword:ffffffff";
    const blob = new Blob([code], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CoreAI_Red.reg';
    a.click();
}

function copyText(btn) {
    const code = btn.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = "OK";
    setTimeout(() => btn.innerText = "Copiar", 2000);
}
