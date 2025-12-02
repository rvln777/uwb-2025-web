const { updateRecords, getRecords } = require('./db');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const crypto = require('crypto');


app.use(bodyParser.json());
app.use(cors());

app.get('/products', async (req, res) => {
    const products = await getRecords('products');
    res.json(products);
})

app.get('/orders', async (req, res) => {
    const orders = await getRecords('orders');
    const products = await getRecords('products');

    res.json(orders.map((order) => {
        let orderProducts = [];
        for (let opr of order.products) {
            orderProducts.push({
                ...products.find((pr) => opr.id === pr.Id),
                Qty: opr.qty
            })
        }

        return {
            id: order.id,
            date: order.date,
            products: orderProducts,
            totalSum: orderProducts.reduce((sum, opr) => {
                sum += Number(opr.Qty) * opr.Price
                return sum
            }, 0).toFixed(2)
        }
    }));
})

app.post('/orders', async (req, res) => {
    const products = req.body;
    const orders = await getRecords('orders');
    const dbProducts = await getRecords('products');
    const id = crypto.randomUUID();

    for (let product of products) {
        const i = dbProducts.findIndex((pr) => pr.Id === product.Id)
        dbProducts[i].Qty -= Number(product.Qty)
    }

    orders.push({
        id: id,
        date: new Date(),
        products: products.map((product) => {
            return {
                id: product.Id,
                qty: product.Qty
            }
        })
    })

    await updateRecords(orders, 'orders');
    await updateRecords(dbProducts, 'products');

    res.json('OK');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

