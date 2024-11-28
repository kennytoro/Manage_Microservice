const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = process.env.PORT || 3000;

// Gateway routes and proxies
app.get('/', (req, res) => {
    res.json({
        message: 'Gateway Service is running',
        routes: ['/auth', '/user', '/product', '/order', '/notification']
    });
});

// Proxy to other services
app.use('/auth', createProxyMiddleware({ target: 'http://auth-service:3001', changeOrigin: true }));
app.use('/user', createProxyMiddleware({ target: 'http://user-service:3002', changeOrigin: true }));
app.use('/product', createProxyMiddleware({ target: 'http://product-service:3003', changeOrigin: true }));
app.use('/order', createProxyMiddleware({ target: 'http://order-service:3004', changeOrigin: true }));
app.use('/notification', createProxyMiddleware({ target: 'http://notification-service:3005', changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`Gateway Service running on port ${PORT}`);
});
