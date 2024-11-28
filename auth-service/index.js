const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Example POST route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        return res.json({ message: 'Login Successful', token: 'dummy-token' });
    }
    res.status(401).json({ message: 'Invalid Credentials' });
});

// Example GET route for testing
app.get('/', (req, res) => {
    res.json({
        message: 'Auth Service is running',
        routes: ['/login'],
    });
});

// Example PUT route for updating user credentials (mocked)
app.put('/update-password', (req, res) => {
    const { userId, newPassword } = req.body;
    if (userId && newPassword) {
        return res.json({ message: `Password updated for user ${userId}` });
    }
    res.status(400).json({ message: 'Invalid request body' });
});

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});
