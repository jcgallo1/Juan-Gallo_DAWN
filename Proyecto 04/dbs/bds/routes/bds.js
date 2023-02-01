var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
 
const customers = require('../models').customers;  
const employee = require('../models').employee; 
const office = require('../models').office;  

router.get("/customer/findAll/json", function (req, res, next) {
    customers.findAll({
      attributes: { exclude: ["id","updatedAt", "createdAt"] },
    })
      .then((customer) => {
        res.json(customer);
      })
      .catch((error) => res.status(400).send(error));
  });
  router.get('/customer/findById/:id/json', function(req, res, next) {  

    let id = parseInt(req.params.id);
  
    customers.findAll({  
        attributes: { exclude: ["id","updatedAt", "createdAt"] } ,
        where: { 
          [Op.and]: [
            {customerNumber: id}
          ]
        }
    })  
    .then(customer => {  
        res.json(customer);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });
module.exports = router;