using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace c.l.models.bases
{
    public class Pager
    {
        public Pager()
        {
            this.PageIndex = 1;
            this.PageSize = 20;
            this.TotalCount = 0;
            this.IsGetTotalCount = true;
        }


        public virtual int PageIndex { get; set; }
        public virtual int PageSize { get; set; }
        public virtual int TotalCount { get; set; }
        public bool IsGetTotalCount { get; set; }
        public virtual int PageCount
        {
            get { if (this.PageSize >= 0) { return (this.TotalCount - 1) / this.PageSize + 1; } return 1; }
        }

        public static implicit operator Pager(long totalCount)
        {
            return new Pager(){ TotalCount =(int)totalCount};
        }
    }
}
