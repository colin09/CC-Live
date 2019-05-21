using c.l.common.logger;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace c.l.common.Mvc
{
    public class ErrorFilterAttribute : ActionFilterAttribute, IExceptionFilter
    {



        public void OnException(ExceptionContext filterContext)
        {
            Exception Error = filterContext.Exception;
            string message = Error.Message;//错误信息
            //string url = HttpContext.Request.RawUrl;//错误发生地址

            Logger.Current().Error(Error);

            filterContext.ExceptionHandled = true;
            filterContext.Result = new RedirectResult("/Home/Error/");//跳转至错误提示页面
        }
    }
}
