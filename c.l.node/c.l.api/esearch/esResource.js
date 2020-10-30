const esearch = require('./client');
const indexName = 'c-live-resource'
const typeName = 'medias'


async function index(data) {
    var { result } = await esearch.index(indexName, typeName, data);
    return result;
}

async function bulk(list) {
    var { result } = await esearch.bulk(indexName, typeName, list);
    return result;
}

async function search(model) {
    if (!model.pager.pageSize || model.pager.pageSize < 1) model.pager.pageSize = 1000;
    if (!model.pager.pageIndex || model.pager.pageIndex < 1) model.pager.pageIndex = 1;

    let query = { match_all: {} };
    if (model.search.key && model.search.key.length > 2)
        query = { match: { name: model.search.key } };

    var search = {
        from: (model.pager.pageIndex - 1) * model.pager.pageSize,
        size: model.pager.pageSize,
        query: query
    };
    var { totalCount, result } = await esearch.search(indexName, typeName, search);
    return { totalCount, result };
}




module.exports = {
    index, bulk, search
}