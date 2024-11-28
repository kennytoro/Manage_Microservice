const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

// Example routes
app.get('/', (req, res) => {
    res.json({
        message: 'Notification Service is running',
        routes: ['/notifications', '/send']
    });
});

app.get('/notifications', (req, res) => {
    res.json([
        { id: 1, userId: 1, message: 'Order shipped!' },
        { id: 2, userId: 2, message: 'Order delivered!' }
    ]);
});

app.post('/send', (req, res) => {
    const { userId, message } = req.body;
    res.json({ message: `Notification sent to user ${userId}`, notification: { userId, message } });
});

app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
