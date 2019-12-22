using System;

namespace c.l.esearch.data {
    public class EsBase {
        
        public string Id { set; get; }

        
        public DateTime CreateTime { set; get; } = DateTime.Now;
        
        public DateTime UpdateTime { set; get; } = DateTime.Now;
    }
}