using System;
using Nest;
using c.l.common.config;

namespace c.l.esearch.client
{

    public class EsClient
    {

        private static string _url = AppSettingConfig.EsUrl;
        private static string _defaultIndex = AppSettingConfig.EsDefaultIndex;
        private static string _indexPrefix = AppSettingConfig.EsIndexPrefix;
        private static ElasticClient _client;
        private EsClient() { }

        public static ElasticClient GetClient()
        {
            if (_client != null)
                return _client;

            InitClient();
            return _client;
        }

        public static ElasticClient GetClient(string index)
        {
            var indexName = $"{_indexPrefix}{index.ToLower()}";
            System.Console.WriteLine($"url: {_url} , defaultIndex: {indexName}");
            var node = new Uri(_url);
            _client = new ElasticClient(new ConnectionSettings(node).DefaultIndex(indexName));
            return _client;
        }

        private static void InitClient()
        {
            System.Console.WriteLine($"url: {_url} , defaultIndex: {_defaultIndex}");
            var node = new Uri(_url);
            _client = new ElasticClient(new ConnectionSettings(node).DefaultIndex(_defaultIndex));
        }
    }
}