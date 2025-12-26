document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.section).classList.add('active');
        document.querySelector('.content').scrollTop = 0;
    });
});

function analizarHardware() {
    const cpu = document.getElementById('cpu-user').value;
    const res = document.getElementById('resultado-ia');
    if(!cpu) return alert("Escribe tu CPU");
    res.style.display = "block";
    res.innerHTML = `<strong>Auditoría:</strong> Para la CPU <b>${cpu}</b>, desactiva el <b>Modo Juego</b> y aplica el ajuste de <b>Rendimiento Visual</b>.`;
}

function copyText(button) {
    const code = button.previousElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const oldText = button.innerText;
        button.innerText = "Copiado";
        setTimeout(() => button.innerText = oldText, 2000);
    });
}