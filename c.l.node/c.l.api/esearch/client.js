const { Client } = require('@elastic/elasticsearch')
const address = 'http://172.16.1.197:9200/'

// npm install @elastic/elasticsearch


async function init() {
    /*
    var client = new Client({
        node: address,
        maxRetries: 5,
        requestTimeout: 60000,
        sniffOnStart: true
        // auth: {
        //   username: 'elastic',
        //   password: 'changeme'
        // },
        // ssl: {
        //   ca: fs.readFileSync('./cacert.pem'),
        //   rejectUnauthorized: true
        // }
    })*/
    var client = new Client({ node: address });
    return client;
}

async function index(index, type, body) {
    var client = await init();
    await client.index({ refresh: true, index: index, type: type, body: body });
}

async function bulk(index, type, list) {
    var client = await init();

    var body = list.flatMap(doc => [{ index: { _index: index } }, doc])
    var { body: bulkResponse } = await client.bulk({ refresh: true, index: index, type: type, body: body })
}

async function search(index, type, body) {
    var client = await init();
    var { body } = await client.search({ index: index, type: type, body: body });

    console.log(body)
    var result = [];
    body.hits.hits.forEach(hit => {
        result.push(hit._source);
    });
    return { totalCount: body.hits.total, result: result };
}





async function run() {
    const client = new Client({ node: address })

    // Let's start by indexing some data
    await client.index({
        index: 'game-of-thrones',
        type: 'game', // uncomment this line if you are using {es} ≤ 6
        body: {
            character: 'Ned Stark',
            quote: 'Winter is coming.'
        }
    })

    await client.index({
        index: 'game-of-thrones',
        type: 'game', // uncomment this line if you are using {es} ≤ 6
        body: {
            character: 'Daenerys Targaryen',
            quote: 'I am the blood of the dragon.'
        }
    })

    await client.index({
        index: 'game-of-thrones',
        type: 'game', // uncomment this line if you are using {es} ≤ 6
        body: {
            character: 'Tyrion Lannister',
            quote: 'A mind needs books like a sword needs a whetstone.'
        }
    })

    // We need to force an index refresh at this point, otherwise we will not
    // get any result in the consequent search
    await client.indices.refresh({ index: 'game-of-thrones' })

    // Let's search!
    const { body } = await client.search({
        index: 'game-of-thrones',
        type: 'game', // uncomment this line if you are using {es} ≤ 6
        body: {
            query: {
                match: { quote: 'winter' }
            }
        }
    })

    console.log(body.hits.total)
    console.log(body.hits.hits)
}








module.exports = {
    index,
    bulk,
    search
};

