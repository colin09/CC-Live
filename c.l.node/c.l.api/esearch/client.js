const { Client } = require('@elastic/elasticsearch')

const address = 'http://172.16.1.197:9200/'

// npm install @elastic/elasticsearch


function init() {
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
    })
    return client;
}

async function index(index, type, body) {
    var client = init();
    await client.index({ index: index, type: type, body: body });
}

async function search(index, type, body) {
    // var client = init();
    
    // await client.indices.refresh({ index: 'game-of-thrones' })
    // var body = await client.search({ index: index, type: type, body: body });
    
    const client = new Client({ node: address })
    var { body }  = await client.search({
        index: 'game-of-thrones',
        type: 'game', // uncomment this line if you are using {es} ≤ 6
        body: {
            query: {
                match: { quote: 'winter' }
            }
        }
    });
    console.log(body.hits)
    return body;
    // return { totalCount: body.hits.total, result: body.hits.hits };
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
    search
};

