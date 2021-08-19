require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001
const Product = require('./model/products');
const Service = require('./model/services');

app.use(express.json());

// Read-- Mostrar todos los productos
app.get('/products', (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Productos a la DB
app.post('/product', (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() => {
            res.status(201).send(product);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


// Read-- Mostrar todos los servicios
app.get('/services', (req, res) => {
    Service.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Servicios a la DB
app.post('/service', (req, res) => {
    const service = new Service(req.body)
    service.save()
        .then(() => {
            res.status(201).send(service);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});