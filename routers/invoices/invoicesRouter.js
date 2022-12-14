const express = require("express");
const router = express.Router();

// const { Json } = require("sequelize/types/utils");
const { invoices, order } = require("../../models");
const url = "invoice";


// get all
router.get(`/get-${url}`, async (req, res) => {
  try {
    
     
      invoices.findAll({ include: order }).then((invoices) => {
        res.status(200).send(invoices);
      });
    
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
