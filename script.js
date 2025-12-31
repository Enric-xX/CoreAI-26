document.addEventListener('DOMContentLoaded', () => {
    // 1. NAVEGACIÓN FUNCIONAL
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.section;
            navItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            item.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // 2. SIMULACIÓN DE MONITOR (Para que no esté vacío)
    actualizarMetricasSimuladas();
});

// --- FUNCIONES DE APERTURA DE AJUSTES REALES DE WINDOWS ---
// Estos comandos abren las ventanas exactas en tu PC
function abrirAjustes(tipo) {
    const rutas = {
        'pantalla': 'ms-settings:display',
        'gpu': 'ms-settings:display-advancedgraphics',
        'energia': 'ms-settings:powersleep',
        'juegos': 'ms-settings:gaming-gamemode',
        'apps': 'ms-settings:appsfeatures'
    };
    
    if (rutas[tipo]) {
        window.location.href = rutas[tipo];
    }
}

function abrirLegacy(comando) {
    // Estos requieren que el usuario los escriba en Win+R, 
    // pero les damos el comando listo para copiar.
    showToast(`Copia y pega "${comando}" en Ejecutar (Win + R)`);
}

// --- DIAGNÓSTICO DE HARDWARE (Lógica Real) ---
function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value.toLowerCase();
    const gpu = document.getElementById('gpu-user').value.toLowerCase();
    const result = document.getElementById('resultado-ia');

    if (!cpu || !gpu) {
        showToast("⚠️ Introduce los datos primero");
        return;
    }

    result.style.display = 'block';
    result.innerHTML = "Analizando arquitectura...";

    setTimeout(() => {
        let diagnostico = `<h4>Reporte para ${cpu.toUpperCase()} / ${gpu.toUpperCase()}</h4><br>`;
        
        // Lógica de optimización real
        if (gpu.includes('nvidia') || gpu.includes('rtx')) {
            diagnostico += "✅ <b>GPU NVIDIA:</b> Debes activar 'ReSize BAR' en BIOS y 'Modo Latencia Baja' en el Panel de Control.<br>";
        } else if (gpu.includes('amd') || gpu.includes('radeon')) {
            diagnostico += "✅ <b>GPU AMD:</b> Activa 'Smart Access Memory' y 'Anti-Lag' en Adrenalin.<br>";
        }

        if (cpu.includes('k') || cpu.includes('ryzen')) {
            diagnostico += "🔥 <b>Desbloqueado:</b> Tu CPU permite Overclock. Revisa voltajes en BIOS.<br>";
        }

        diagnostico += "<br>🚀 <b>Tip:</b> Ejecuta el comando de telemetría en Panel Pro para ganar 2-5% de FPS.";
        result.innerHTML = diagnostico;
    }, 1000);
}

// --- SISTEMA DE COPIADO ---
function copyCommand(btn) {
    const container = btn.closest('.code-block') || btn.closest('.command-item');
    const code = container.querySelector('code').innerText;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "¡Copiado!";
        btn.style.background = "#28a745";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "";
        }, 2000);
    });
}

// --- GENERADOR DE SCRIPT .BAT REAL ---
function descargarOptimizador() {
    const scriptBatch = `@echo off
title CoreAI 26 - Limpiador Elite
echo Limpiando archivos temporales...
del /s /f /q %temp%\\*.*
rd /s /q %temp%
md %temp%
del /s /f /q C:\\Windows\\temp\\*.*
rd /s /q C:\\Windows\\temp
md C:\\Windows\\temp
echo Limpiando Cache de DNS...
ipconfig /flushdns
echo Optimización completada.
pause`;

    const blob = new Blob([scriptBatch], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Limpieza_CoreAI26.bat';
    a.click();
}

// --- NOTIFICACIONES ---
function showToast(msj) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = msj;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Simulación visual de métricas
function actualizarMetricasSimuladas() {
    setInterval(() => {
        if(document.getElementById('cpu-temp')) {
            document.getElementById('cpu-temp').innerText = Math.floor(Math.random() * (60 - 40) + 40) + "°C";
            document.getElementById('gpu-load').innerText = Math.floor(Math.random() * 100) + "%";
        }
    }, 3000);
}
