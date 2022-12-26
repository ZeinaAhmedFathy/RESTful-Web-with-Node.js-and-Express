const express = require('express');

function routes(Category) {
  const catRouter = express.Router();
  catRouter.route('/categories')
    .get((req, res) => {
      const query = {};
      Category.find(query, (err, categories) => {
        if (err) {
          return res.send(err);
        }
        return res.json(categories);
      });
    });
  return catRouter;
}

module.exports = routes;