const { getCollection } = require('./connection');

async  function  findOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async function find(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.find(query, options).toArray();
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction find avec les paramètres suivants: ${query}`);
        console.log(e);
        throw e;
    }
}

async function insertOne(collectionName, document) {
    
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(document);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'insertion d'un document avec les paramètres suivants: ${document}`);
        console.log(e);
        throw e;
    }
}

async function insertMany(collectionName, documents) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(documents);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'insertion de plusieurs documents`);
        console.log(e);
        throw e;
    }
}

async function updateOne(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter, update, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de la mise à jour d'un document avec les paramètres suivants: ${filter}, ${update}`);
        console.log(e);
        throw e;
    }
}

async function updateMany(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter, update, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de la mise à jour de plusieurs documents avec les paramètres suivants: ${filter}, ${update}`);
        console.log(e);
        throw e;
    }
}

async function replace(collectionName, filter, replacement, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(filter, replacement, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors du remplacement d'un document avec les paramètres suivants: ${filter}, ${replacement}`);
        console.log(e);
        throw e;
    }
}

async function deleteOne(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(filter, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de la suppression d'un document avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}

async function deleteMany(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(filter, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de la suppression de plusieurs documents avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}

module.exports = {
    findOne,
    find,
    insertOne,
    insertMany, 
    updateOne,
    updateMany,
    replace,
    deleteOne,
    deleteMany,
};
     