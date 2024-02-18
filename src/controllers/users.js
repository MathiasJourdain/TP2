const {insertOne, findOne} = require('../services/db/crud');





async function createUser(req, res, next ) {
        const value = req.body;

        const result = await insertOne("users", value);
        return res.status(201).send(result);
    
}


async function findUser(req, res, next) {
    try {
        const user = await findOne(collection, req.query);
        if (!user) {
            return res.status(404).send("Not found");
        }
        return res.status(200).send(user);
    }
    catch (e) {
        console.log(e);
        return next(e);
    }

}


module.exports = { 
    createUser,
    findUser
};
