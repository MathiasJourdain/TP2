const express = requires ('express');
const router = express.Router();
const {createItem} = require('../controllers/items');
const itemSchema = require('../schemas/items');
const{validateSchemaMiddleware} = require('../services/validation');
const {addUuid} = require('../services/uuid');



//router.get('/find', finUser);
router.post('/create', addUuid,validationSchemaMiddleware(itemSchema), createItem);


module.exports = router;