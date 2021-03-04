const MongoClient = require('mongodb').MongoClient;
const user = encodeURIComponent('root');
const password = encodeURIComponent('password');
const authMechanism = 'DEFAULT';

// Connection URL
const url = `mongodb://${user}:${password}@172.16.1.197:27017/?poolSize=20`;

// Database Name
const dbName = 'erp-Message_test';

// Create a new MongoClient
const client = new MongoClient(url);

// npm install mongodb

async function init() {
    console.log(client.isConnected());
    if (!client.isConnected())
        await client.connect();
}



async function index(collection, index) {
    try {
        await init();
        const db = client.db(dbName);

        // Insert a single document
        let r = await db.collection(collection).createIndex(index);
        console.log("index :" + r);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}


async function insertOne(collection, data) {
    try {
        await init();
        const db = client.db(dbName);

        // Insert a single document
        let r = await db.collection(collection).insertOne(data);
        console.log("insertOne :" + r.insertedCount);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}


async function insertMany(collection, list) {
    try {
        await init();
        const db = client.db(dbName);

        // Insert multiple documents
        let r = await db.collection(collection).insertMany(list);
        console.log("insertMany :" + r.insertedCount);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}


async function update(collection, list) {
    try {
        await init();
        const db = client.db(dbName);

        // Get the updates collection
        const col = db.collection(collection);

        // Update a single document
        r = await col.updateOne({ a: 1 }, { $set: { b: 1 } });
        // assert.equal(1, r.matchedCount);
        // assert.equal(1, r.modifiedCount);

        // Update multiple documents
        r = await col.updateMany({ a: 2 }, { $set: { b: 1 } });
        // assert.equal(2, r.matchedCount);
        // assert.equal(2, r.modifiedCount);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function bulkWrite(collection) {
    try {
        await init();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Get the collection
        const col = db.collection(collection);
        const r = await col.bulkWrite([
            { insertOne: { document: { a: 1 } } }
            , { updateOne: { filter: { a: 2 }, update: { $set: { a: 2 } }, upsert: true } }
            , { updateMany: { filter: { a: 2 }, update: { $set: { a: 2 } }, upsert: true } }
            , { deleteOne: { filter: { c: 1 } } }
            , { deleteMany: { filter: { c: 1 } } }
            , { replaceOne: { filter: { c: 3 }, replacement: { c: 4 }, upsert: true } }]
            , { ordered: true, w: 1 });
        // assert.equal(1, r.insertedCount);
        // assert.equal(1, Object.keys(r.insertedIds).length);
        // assert.equal(1, r.matchedCount);
        // assert.equal(0, r.modifiedCount);
        // assert.equal(0, r.deletedCount);
        // assert.equal(2, r.upsertedCount);
        // assert.equal(2, Object.keys(r.upsertedIds).length);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

// findOneAndUpdate
// findOneAndDelete


async function deleteOne(collection, search) {
    try {
        await init();
        const db = client.db(dbName);

        // Remove a single document
        let r = await db.collection(collection).deleteOne(search);
        console.log("deleteOne :" + r.insertedCount);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function deleteMany(collection, search) {
    try {
        await init();
        const db = client.db(dbName);

        // Remove a single document
        let r = await db.collection(collection).deleteMany(search);
        console.log("deleteMany :" + r.insertedCount);

        // Close connection
        // client.close();
    } catch (err) {
        console.log(err.stack);
    }
}


async function search(collection, search) {
    try {
        await init();
        const db = client.db(dbName);

        // Get documents that match the query
        let sort = { 'CreateTime': -1 };
        let cursor = await db.collection(collection).find(search).sort(sort).limit(1000);
        return cursor.toArray();
    } catch (err) {
        console.log(err.stack);
    } finally {
        // Close connection
        // await client.close();
    }
}

async function searchByPager(collection, search, pageIndex, pageSize) {
    try {
        await init();
        const db = client.db(dbName);

        // Get documents that match the query
        let sort = { 'CreateTime': 1 };
        let cursor = await db.collection(collection).find(search).sort(sort)
            .skip((pageIndex - 1) * pageSize).limit(pageSize);

        let totalCount = await db.collection(collection).countDocuments(search);
        var result = await cursor.toArray();
        return { totalCount, result };
    } catch (err) {
        console.log(err.stack);
    } finally {
        // Close connection
        // await client.close();
    }
}


/*
collection.find({}).project({a:1})                             // Create a projection of field a
collection.find({}).skip(1).limit(10)                          // Skip 1 and limit 10
collection.find({}).batchSize(5)                               // Set batchSize on cursor to 5
collection.find({}).filter({a:1})                              // Set query on the cursor
collection.find({}).comment('add a comment')                   // Add a comment to the query, allowing to correlate queries
collection.find({}).addCursorFlag('tailable', true)            // Set cursor as tailable
collection.find({}).addCursorFlag('oplogReplay', true)         // Set cursor as oplogReplay
collection.find({}).addCursorFlag('noCursorTimeout', true)     // Set cursor as noCursorTimeout
collection.find({}).addCursorFlag('awaitData', true)           // Set cursor as awaitData
collection.find({}).addCursorFlag('exhaust', true)             // Set cursor as exhaust
collection.find({}).addCursorFlag('partial', true)             // Set cursor as partial
collection.find({}).addQueryModifier('$orderby', {a:1})        // Set $orderby {a:1}
collection.find({}).max(10)                                    // Set the cursor max
collection.find({}).maxTimeMS(1000)                            // Set the cursor maxTimeMS
collection.find({}).min(100)                                   // Set the cursor min
collection.find({}).returnKey(10)                              // Set the cursor returnKey
collection.find({}).setReadPreference(ReadPreference.PRIMARY)  // Set the cursor readPreference
collection.find({}).showRecordId(true)                         // Set the cursor showRecordId
collection.find({}).sort([['a', 1]])                           // Sets the sort order of the cursor query
collection.find({}).hint('a_1')                                // Set the cursor hint
*/




module.exports = {
    index,
    insertOne,
    insertMany,
    deleteOne,
    deleteMany,
    search,
    searchByPager
};
