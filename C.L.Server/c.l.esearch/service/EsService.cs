using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using c.l.common.config;
using c.l.esearch.client;
using c.l.esearch.data;
using Nest;

namespace c.l.esearch.service
{
    public class EsService<T> where T : EsBase
    {
        protected IElasticClient _client;
        protected string _indexName;
        protected static string _indexPrefix = AppSettingConfig.EsIndexPrefix;

        public EsService()
        {
            _client = EsClient.GetClient();
            _indexName = $"{_indexPrefix}{typeof(T).Name}".ToLower();
        }

        public void Index(T model)
        {
            //var indexName = $"{_indexPrefix}{typeof(T).Name}";
            var response = _client.Index(model, s => s.Index(_indexName));
            System.Console.WriteLine(response);
        }

        public void BulkAll(IEnumerable<T> models)
        {
            //var indexName = $"{_indexPrefix}{typeof(T).Name}";
            // System.Console.WriteLine ($"indexName => {indexName.ToLower ()}");

            // var response = _client.BulkAll (models, s => s.Index (indexName.ToLower ()));
            // System.Console.WriteLine (response);

            var waitHandle = new CountdownEvent(1);

            var bulkAll = _client.BulkAll(models, b => b
               .Index(_indexName) /* index */
               .BackOffRetries(2) //how many times to retry before failing
               .BackOffTime("5s") //how long we should wait before retrying
               .RefreshOnCompleted(true)
               .MaxDegreeOfParallelism(4) //number of concurrent requests
               .Size(1000) //number of documents to send in each request
            );

            bulkAll.Subscribe(new BulkAllObserver(
                onNext: (b) => { System.Console.WriteLine($"[next] page:{b.Page}, retries:{b.Retries}"); },
                onError: (e) => { throw e; },
                onCompleted: () => waitHandle.Signal()
            ));

            waitHandle.Wait();
        }

        public void Delete(T model)
        {
            var response = _client.Delete(new DocumentPath<T>(new Id(model.Id)));
            System.Console.WriteLine(response);
        }
        public void DeleteInex()
        {
            var response = _client.DeleteIndex(_indexName);
            System.Console.WriteLine(response);
        }


        public T Get(string id)
        {
            var result = _client.Search<T>(s => s
               //.Index (Indices.All)
               //.Index (IndexName.From<EsContent>())
               .Index(_indexName)
               .Query(q => q.Term(f => f.Id, id))
            //    .Query(q => q.Term(t => t.OnField(f => f.Id).Value(7)))
            );
            // System.Console.WriteLine (result.Documents.ToJson ());
            //System.Console.WriteLine($"{result.Documents.Count()}/{result.Total} , in {result.Took}ms");
            return result.Documents.FirstOrDefault();
        }
    }
}