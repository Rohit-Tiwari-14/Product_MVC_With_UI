const express = require('express');

const { addform, addPr ,showPr, deletePr, editForm, updatePr} = require('../controller/prcontroller');

const router = express.Router()

router.get("/addPr",addform);//form
router.get("/showPr",showPr);//Show
router.post("/addPr",addPr)//ADD
router.delete("/delete/:id",deletePr)

// update
router.get("/edit/:id",editForm)
router.patch("/edit/:id",updatePr)

module.exports = router