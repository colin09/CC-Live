const { Client } = require('@elastic/elasticsearch')
const address = 'http://localhost:9200'



// const client = new Client({ node: address })

const client = new Client({
    node: address,
    maxRetries: 5,
    requestTimeout: 60000,
    sniffOnStart: true
})
const client = new Client({
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

client.on('request', (err, result) => {
    console.log(err, result)
})

client.on('response', (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})
client.on('sniff', (err, result) => {
    console.log(err, result)
})
client.on('resurrect', (err, result) => {
    console.log(err, result)
})



// promise API
const result = await client.search({
    index: 'my-index',
    body: { foo: 'bar' }
})

// callback API
client.search({
    index: 'my-index',
    body: { foo: 'bar' }
}, (err, result) => {
    if (err) console.log(err)
})


async function index(index, body) {
    await client.index({
        index: index,
        body: body
    })
}

async function search(index, body) {
    await client.index({
        index: index,
        body: body
    })
}