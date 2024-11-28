const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

// Example routes
app.get('/', (req, res) => {
    res.json({
        message: 'Order Service is running',
        routes: ['/orders', '/orders/:id']
    });
});

app.get('/orders', (req, res) => {
    res.json([
        { id: 1, userId: 1, product: 'Laptop', quantity: 1, status: 'Shipped' },
        { id: 2, userId: 2, product: 'Smartphone', quantity: 2, status: 'Delivered' }
    ]);
});

app.get('/orders/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, userId: 1, product: 'Sample Product', quantity: 1, status: 'Pending' });
});

app.post('/orders', (req, res) => {
    const { userId, product, quantity } = req.body;
    res.json({
        message: 'Order created',
        order: { userId, product, quantity, status: 'Pending' }
    });
});

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
