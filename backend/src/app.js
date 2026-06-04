const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta de prueba de conectividad
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend conectado exitosamente en AWS EKS' });
});

// Ruta para procesar el Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // Simulación básica de credenciales
    if (username === 'admin' && password === 'gabo123') {
        res.json({ success: true, message: '¡Login correcto!' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});