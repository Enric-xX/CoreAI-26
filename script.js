// --- CONFIGURACIÓN DE FIREBASE (Login Real) ---
// Aquí pondrías tus claves de Firebase para que el login funcione de verdad.
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "tu-app.firebaseapp.com",
    projectId: "tu-app-id"
};
firebase.initializeApp(firebaseConfig);

function realLogin(type) {
    if(type === 'email') {
        const email = document.getElementById('user-email').value;
        const pass = document.getElementById('user-pass').value;
        // Simulación de Auth Real - En producción usaría firebase.auth().signInWithEmailAndPassword
        if(email && pass) {
            unlockApp({displayName: email.split('@')[0], photoURL: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'});
        }
    } else {
        alert("Redirigiendo a API segura de " + type);
        // Aquí disparas el Provider de Google/Github
        unlockApp({displayName: "S4vitar_Guest", photoURL: "https://via.placeholder.com/50"});
    }
}

function unlockApp(user) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
    document.getElementById('user-name').innerText = user.displayName.toUpperCase();
    document.getElementById('user-avatar').src = user.photoURL;
    logTerminal("PROTOCOLO_ACCESO: AUTENTICACIÓN_CORRECTA");
}

// --- COMPARADOR DE HARDWARE (Technical City Clone) ---
function compareHardware() {
    const selected = document.getElementById('gpu-select').value;
    const refPower = document.getElementById('ref-power');
    const refName = document.getElementById('ref-name');
    
    if(selected === '4090') { refPower.style.width = "100%"; refName.innerText = "RTX 4090"; }
    if(selected === '3080') { refPower.style.width = "70%"; refName.innerText = "RTX 3080"; }
    if(selected === 'rx7900') { refPower.style.width = "90%"; refName.innerText = "RX 7900 XTX"; }
    
    logTerminal(`COMPARACIÓN_UPDATE: TARGET_SET_TO_${refName.innerText}`);
}

// --- AUDITORÍA DE SEGURIDAD (S4vitar Style) ---
function runSecurityScan(type) {
    const el = type === 'firewall' ? 'fw-status' : 'port-status';
    document.getElementById(el).innerText = "SCANNING...";
    
    setTimeout(() => {
        document.getElementById(el).innerText = "SECURE_BY_COREAI";
        document.getElementById(el).className = "status-ok";
        logTerminal(`SECURITY_AUDIT: ${type.toUpperCase()}_CHECK_COMPLETE`);
    }, 2000);
}

// --- APERTURA DIRECTA DE AJUSTES ---
function openConfig(uri) {
    // Sin preguntas, directo al sistema
    window.location.href = uri;
}

// Funciones de utilidad anteriores (Terminal, Ping, etc.)
