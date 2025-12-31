// --- LÓGICA DE NAVEGACIÓN ---
const initNavigation = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.section;
            
            navItems.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            // Efecto sutil de sonido o vibración (opcional)
            if (window.navigator.vibrate) window.navigator.vibrate(5);
        });
    });
};

// --- MOTOR DE DIAGNÓSTICO MEJORADO ---
const analizarHardware = () => {
    const cpu = document.getElementById('cpu-user').value.trim();
    const gpu = document.getElementById('gpu-user').value.trim();
    const resultBox = document.getElementById('resultado-ia');

    if (!cpu || !gpu) {
        showToast("⚠️ Introduce los datos de hardware");
        return;
    }

    resultBox.style.display = 'block';
    resultBox.innerHTML = `<div class="loader"></div><p>Analizando arquitectura de ${cpu}...</p>`;

    setTimeout(() => {
        const gpuLower = gpu.toLowerCase();
        let html = `<h3>Análisis de Optimización</h3><ul style="list-style: none; padding:0;">`;

        const tips = [
            gpuLower.includes('nvidia') ? "✅ Optimizando para núcleos CUDA: Activar Low Latency Boost." : "",
            gpuLower.includes('amd') ? "✅ Optimizando arquitectura RDNA: Activar SmartAccess Memory." : "",
            cpu.toLowerCase().includes('i9') || cpu.toLowerCase().includes('ryzen 9') ? "🔥 CPU detectada como High-End: Desbloqueando planes de energía extrema." : ""
        ].filter(t => t !== "");

        tips.forEach(tip => html += `<li style="margin-bottom:10px; border-left: 3px solid var(--accent); padding-left:10px;">${tip}</li>`);
        html += `</ul><p style="margin-top:15px; color: var(--text-dim);">Recomendación: Ejecuta <b>Winget Upgrade</b> mensualmente.</p>`;
        
        resultBox.innerHTML = html;
    }, 1500);
};

// --- SISTEMA DE COPIADO CON FEEDBACK ---
const copyText = async (button) => {
    const code = button.parentElement.querySelector('code').innerText;
    try {
        await navigator.clipboard.writeText(code);
        const originalText = button.innerHTML;
        button.innerHTML = "¡Listo!";
        button.style.background = "var(--success)";
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = "var(--accent)";
        }, 2000);
    } catch (err) {
        console.error('Error al copiar', err);
    }
};

// Toast Notifications simples
const showToast = (msg) => {
    alert(msg); // Aquí podrías implementar un toast flotante elegante
};

document.addEventListener('DOMContentLoaded', initNavigation);
