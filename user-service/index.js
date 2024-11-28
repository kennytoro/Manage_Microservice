const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Example routes
app.get('/', (req, res) => {
    res.json({
        message: 'User Service is running',
        routes: ['/users', '/users/:id', '/users']
    });
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Toro', email: 'fxtoro4@gmail.com' },
        { id: 2, name: 'Kenny', email: 'dev@jenkins.com' }
    ]);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Sample User', email: `user${id}@example.com` });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({ message: `User ${id} updated`, updatedDetails: { name, email } });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
