const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Dummy user (para ejemplo)
const user = {
  username: 'testuser',
  password: '1234' // Nunca almacenes contraseñas así en producción
};

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.send('<h2>Login successful! Welcome to NotCopy.</h2>');
  } else {
    res.send('<h2>Invalid username or password. <a href="/">Try again</a></h2>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
