const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('.'));

// CORREO DEL ADMINISTRADOR GENERAL
const ADMIN_EMAIL = "jmra2208@gmail.com";

let authCodes = {};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ADMIN_EMAIL,
        pass: 'xxxx xxxx xxxx xxxx' // Tu contraseña de aplicación
    }
});

// ==========================================
//  BASE DE DATOS Y GESTIÓN DE JUEGOS
// ==========================================
const DB_PATH = path.join(__dirname, 'juegos.json');

// Lista por defecto en caso de no existir el archivo juegos.json
const juegosIniciales = [
    {
        id: 'roblox',
        nombre: 'Roblox',
        imagen: 'img/roblox.png',
        url: 'roblox.html',
        activo: true,
        paquetes: [
            { id: 'precio-1', nombre: '80 Robux', usd: 1.00, activo: true },
            { id: 'precio-2', nombre: '400 Robux', usd: 5.00, activo: true },
            { id: 'precio-3', nombre: '800 Robux', usd: 10.00, activo: true },
            { id: 'precio-4', nombre: '1700 Robux', usd: 20.00, activo: true }
        ]
    },
    {
        id: 'blood-strike',
        nombre: 'Blood Strike',
        imagen: 'img/blood-strike.png',
        url: 'blood-strike.html',
        activo: true,
        paquetes: [
            { id: 'bs-1', nombre: 100, usd: 0.99, activo: true },
            { id: 'bs-2', nombre: 500, usd: 4.99, activo: true }
        ]
    }
];

// Función para cargar los juegos desde el archivo JSON
function cargarJuegos() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify(juegosIniciales, null, 2));
        return juegosIniciales;
    }
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return juegosIniciales;
    }
}

// Función para guardar cambios en el JSON
function guardarJuegos(juegos) {
    fs.writeFileSync(DB_PATH, JSON.stringify(juegos, null, 2));
}

// 1. Obtener lista completa de juegos (para index y checkout)
app.get('/api/juegos', (req, res) => {
    const juegos = cargarJuegos();
    res.json(juegos);
});

// 2. Actualizar estado (activo/desactivo) o precio de un juego o sus paquetes
app.put('/api/admin/juegos/:id', (req, res) => {
    const { id } = req.params;
    const { activo, paquetes } = req.body;
    let juegos = cargarJuegos();

    const juegoIndex = juegos.findIndex(j => j.id === id);
    if (juegoIndex === -1) {
        return res.status(404).json({ success: false, message: 'Juego no encontrado' });
    }

    if (typeof activo === 'boolean') {
        juegos[juegoIndex].activo = activo;
    }

    if (paquetes && Array.isArray(paquetes)) {
        juegos[juegoIndex].paquetes = paquetes;
    }

    guardarJuegos(juegos);
    res.json({ success: true, message: 'Juego actualizado correctamente', juego: juegos[juegoIndex] });
});

// ==========================================
//  AUTENTICACIÓN
// ==========================================
app.post('/api/auth/login-request', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Ingresa un correo válido' });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    authCodes[email.toLowerCase()] = code;

    const mailOptions = {
        from: ADMIN_EMAIL,
        to: email,
        subject: 'Código de Acceso - E GAMING STORE',
        text: `Tu código de acceso es: ${code}`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
        }
        res.json({ success: true, message: 'Código enviado a tu correo.' });
    });
});

app.post('/api/auth/verify-code', (req, res) => {
    const { email, code } = req.body;
    const cleanEmail = email.toLowerCase();

    if (authCodes[cleanEmail] && authCodes[cleanEmail] === code) {
        delete authCodes[cleanEmail];

        const isAdmin = (cleanEmail === ADMIN_EMAIL.toLowerCase());

        return res.json({
            success: true,
            user: {
                email: cleanEmail,
                role: isAdmin ? 'admin' : 'client'
            },
            token: isAdmin ? 'ADMIN_SESSION_TOKEN_9988' : 'CLIENT_SESSION_TOKEN_1122'
        });
    } else {
        return res.status(401).json({ success: false, message: 'Código incorrecto o expirado.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});