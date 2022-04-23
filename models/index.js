// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});


// example - https://www.bezkoder.com/sequelize-associate-many-to-many/#:~:text=belongsToMany()%20provides%20simple%20way,two%20columns%3A%20tag_id%20and%20tutorial_id.
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: '',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: '',
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
