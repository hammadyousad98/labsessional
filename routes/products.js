var express = require('express');
var router = express.Router();
var productmodel = require("../models/product");
/* GET home page. */
router.get('/', async function(req, res, next) {
  let product = await productmodel.find();
  console.log(req.session.user);
  res.render('products/list',{title:"EDUREKAS COURSE LIST",products:product});
});
router.get('/add',async function(req, res, next) {
  res.render('products/add');
});
router.post('/add', async function(req, res, next) {
  let product = new productmodel(req.body);
  await product.save();
  res.redirect('/products');
});
router.get('/delete/:id', async function(req, res, next) {
  let product = await productmodel.findByIdAndDelete(req.params.id);
  res.redirect('/products');
});
router.get('/update/:id', async function(req, res, next) {
  let product = await productmodel.findById(req.params.id);
  res.render('products/update',{product});
});
router.post('/update/:id', async function(req, res, next) {
  let product = await productmodel.findById(req.params.id);
  product.name= req.body.name;
  product.id= req.body.id;
  product.duration= req.body.duration;
  product.fee= req.body.fee;
  await product.save();
  res.redirect('/products');
});

module.exports = router;
