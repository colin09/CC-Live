using System;
using System.Security.Claims;
using c.l.common.helper;
using c.l.models.bases;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace c.l.common.Mvc
{

    [Area("Sys")]
    [ErrorFilterAttribute]
    public class MgrBaseController : Controller
    {

        private CurrentUser _currentUser = null;
        //protected CurrentUser CurrentUser => GetCurrentUser();

        protected string UserName = "";

        protected CurrentUser GetCurrentUserInfo(ClaimsPrincipal curUser)
        {
            if (_currentUser != null)
                return _currentUser;

            //var curUser = HttpContext.User;
            var userId = curUser.FindFirst(ClaimTypes.PrimarySid).Value.ToInt();
            System.Console.WriteLine($"==========> ClaimTypes.PrimarySid: {userId}");
            return new CurrentUser
            {
                Id = userId.HasValue ? userId.Value : 0,
                UserName = curUser.FindFirst(ClaimTypes.Sid).Value,
                TrueName = curUser.FindFirst(ClaimTypes.Name).Value,
                Department = curUser.FindFirst(ClaimTypes.Dsa).Value,

                MobileNo = curUser.FindFirst(ClaimTypes.MobilePhone).Value,
            };
        }

    }
    /*
    public class CurrentUser
    {
        public int Id { set; get; }
        public string UserName { set; get; }
        public string TrueName { set; get; }
        public string Department { set; get; }

        public string Gender { set; get; }
        public string Email { set; get; }
        public string MobileNo { set; get; }

        public int Encryption { set; get; }=0;
    }*/

}