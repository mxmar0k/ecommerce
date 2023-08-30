// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//each product has a foreing key that references the cat models id
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
//category has many product model, formming a one to many relation
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
//priduct belongs to many tag model using product tag join table, it forms a
//many to many relation
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
//tag belings to many product models through product tag join table, it is the inverse of
//many to many relation
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
