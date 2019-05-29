using System;
using System.Linq;
using c.l.esearch.data;
using c.l.models.bases;

namespace c.l.esearch.service
{
    public class EsResourceService : EsService<EsResource>
    {

        public EsResource[] Search(string key, int entryption, Pager page)
        {
            System.Console.WriteLine($"_indexName : {_indexName}");
            var result = _client.Search<EsResource>(s => s
               //.Index (Indices.All)
               //.Index (IndexName.From<EsContent>())
               .Index(_indexName)
               .From((page.PageIndex - 1) * page.PageSize)
               .Size(page.PageSize)
               .Query(q =>
                   {
                       var query = q.Range(m => m.Field(f => f.EncryptionLevel).LessThanOrEquals(entryption));
                       query = query & q.Match(m => m.Field(f => f.Name).Query(key));
                       return query;
                   })
            );
            // System.Console.WriteLine (result.Documents.ToJson ());
            System.Console.WriteLine($"{result.Documents.Count()}/{result.Total} , in {result.Took}ms");
            return result.Documents.ToArray();
        }
    }

}