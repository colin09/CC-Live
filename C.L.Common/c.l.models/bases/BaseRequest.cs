using System;
using System.Collections.Generic;
using System.Text;

namespace c.l.models.bases
{
    public class BaseRequest
    {
        public int Num1 { set; get; }
        public int Num2 { set; get; }
        public int Num3 { set; get; }

        public string Key1 { set; get; }
        public string Key2 { set; get; }
        public string Key3 { set; get; }
        public string Key4 { set; get; }

        
        public bool Flag1 { set; get; }
    }

    public class BasePageRequest : BaseRequest
    {
        public Pager Pager { set; get; }

    }
}