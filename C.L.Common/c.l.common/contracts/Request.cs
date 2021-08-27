namespace c.l.common.contracts.request {
    public interface IRequest {
        void Validate ();
    }

    public class PagerRequest {
        public PagerRequest () {
            this.pageSize = 20;
            this.pageIndex = 1;
            this.IsGetTotalCount = true;
        }

        public PagerRequest (int pagerIndex, int pageSize) {
            this.pageSize = pageSize;
            this.pageIndex = pagerIndex;
            this.IsGetTotalCount = true;
        }

        public int pageSize { get; set; }
        public int pageIndex { get; set; }
        public bool IsGetTotalCount { get; set; }
    }

    public class BasePagerRequest<T> : IRequest {
        public BasePagerRequest () { }

        public BasePagerRequest (T data, PagerRequest pager) {
            this.data = data;
            this.pager = pager;
        }
        public T data { get; set; }
        public PagerRequest pager { set; get; }

        public void Validate () {
            if (pager.pageIndex < 1) pager.pageIndex = 1;
            if (pager.pageSize <= 0) pager.pageSize = 20;
        }
    }

}