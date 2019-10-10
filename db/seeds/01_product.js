exports.seed = function (knex, Promise) {
    return knex('products').del()
      .then(function () {
        return knex('products').insert([
          { name: 'Fishing Rod', price: 150.00, inventory: 53 },
          { name: 'Spinning Reel', price: 350.50, inventory: 1 },
          { name: 'Braided Lines', price: 69.99, inventory: 1 }
        ]);
      });
  };