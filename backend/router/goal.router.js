const express = require('express');
const router = express.Router();

const {create,all,byid,supp,update} = require('../controller/goal.controle')

router.post('/add', create);

router.get('/todo', all);

router.get('/byid/:id', byid);

router.delete('/delete/:id', supp);

router.put('/update/:id', update);

module.exports = router;