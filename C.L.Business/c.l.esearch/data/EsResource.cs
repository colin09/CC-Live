using System;
using c.l.models.enums;
using Nest;

namespace c.l.esearch.data {

    public class EsResource : EsBase {
        public SourceType SourceType { set; get; }

        [Text (Name = "name", Analyzer = "ik_smart")]
        public string Name { set; get; }

        [Text (Name = "fullName", Analyzer = "ik_smart")]
        public string FullName { set; get; }
        public string Url { set; get; }
        public string Md5 { set; get; }

        [Text (Name = "tags", Analyzer = "ik_smart")]
        public string Tags { set; get; }
        public int Sort { set; get; }
    }
}