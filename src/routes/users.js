const express = requires ('express');
const router = express.Router();
const {createUser, findUser} = require('../controllers/users');
const userSchema = require('../schemas/user');
const{validateSchemaMiddleware} = require('../services/validation');
const {addUuid} = require('../services/uuid');



router.get('/find', finUser);
router.post('/create', addUuid,validationSchemaMiddleware(userSchema), createUser);


module.exports = router;


