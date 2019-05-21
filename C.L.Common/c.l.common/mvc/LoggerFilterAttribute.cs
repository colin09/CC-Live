using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace c.l.common.Mvc
{
    public class LoggerFilterAttribute : ActionFilterAttribute
    {
        /// <summary>
        /// Action方法之后调用
        /// </summary>
        /// <param name="context"></param>
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            //throw new NotImplementedException();
        }


        /// <summary>
        /// Action方法之前调用
        /// </summary>
        /// <param name="context"></param>
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            //throw new NotImplementedException();
        }
    }
}
