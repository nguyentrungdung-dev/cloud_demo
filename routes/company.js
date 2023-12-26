var express = require('express');
var router = express.Router();
var CompanyModel = require('../models/CompanyModel');


router.get('/', async (req, res) => {
    var companies = await CompanyModel.find({});
    res.render('company/index', { companies });
 })

 router.get('/add', (req, res) => {
    res.render('company/add');
 })
 
 router.post('/add', async (req, res) => {
    var company = req.body;
    await CompanyModel.create(company);
    res.redirect('/company');
 })

 module.exports = router;