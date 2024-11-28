const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// Example routes
app.get('/', (req, res) => {
    res.json({
        message: 'Product Service is running',
        routes: ['/products', '/products/:id']
    });
});

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Smartphone', price: 800 }
    ]);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Sample Product', price: 100 });
});

app.post('/products', (req, res) => {
    const { name, price } = req.body;
    res.json({ message: 'Product created', product: { name, price } });
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
