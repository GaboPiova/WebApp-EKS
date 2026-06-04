async function conectar() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje');

    try {
        // En producción, le pegaremos al endpoint del backend
        const response = await fetch('http://backend-service:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        });
        
        const data = await response.json();
        mensaje.innerText = data.message;
        mensaje.style.color = data.success ? 'green' : 'red';
    } catch (error) {
        mensaje.innerText = 'Error al conectar con el backend';
        mensaje.style.color = 'red';
    }
}