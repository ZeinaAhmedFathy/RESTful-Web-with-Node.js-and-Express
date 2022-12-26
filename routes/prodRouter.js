const express = require('express');

function routes(Product) {
    const prodRouter = express.Router();
    prodRouter.route('/products')
        .post((req, res) => {
            const prod = new Product(req.body);
            prod.save();
            return res.status(201).json(prod);
        })
        .get((req, res) => {
            const query = req.query;
            Product.find(query, (err, products) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(products);
            });
        });
    prodRouter.route('/product/:prodId')
        .get((req, res) => {
            Product.findById(req.params.prodId, (err, prod) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(prod);
            });
        })
        .put((req, res) => {
            const { prod } = req;
            prod.Name = req.body.Name;
            prod.Price = req.body.Price;
            prod.Quantity = req.body.Quantity;
            prod.imgURL = req.body.imgURL;
            prod.CateogryID = req.body.CateogryID;
            req.prod.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(prod);
            });
        });


    return prodRouter;
}

module.exports = routes;