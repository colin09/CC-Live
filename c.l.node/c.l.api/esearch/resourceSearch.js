const esearch = require('./client');
const indexName = 'c-live-resource'
const typeName = 'medias'


async function index(data) {
    var { result } = await esearch.index(indexName, typeName, data);
}

async function bulk(list) {
    var { result } = await esearch.bulk(indexName, typeName, list);
}

async function search(model) {
    var search = {
        query: {
            match: { name: model.key }
        }
    };
    var { result } = await esearch.search(indexName, typeName, search);
}


