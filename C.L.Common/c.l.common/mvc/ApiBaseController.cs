using System;
using System.Security.Claims;
using c.l.common.helper;
using c.l.models.bases;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace c.l.common.Mvc {

    [LoggerFilterAttribute]
    [ErrorFilterAttribute]
    public class ApiBaseController : ControllerBase {
        private CurrentUser _currentUser = null;
        protected CurrentUser CurrentSessionUser => GetCurrentUserInfo ();

        private CurrentUser GetCurrentUserInfo () {
            if (_currentUser != null)
                return _currentUser;
            _currentUser = new CurrentUser ();

            var curUser = HttpContext.User;
            if (curUser == null) return _currentUser;

            var userId = curUser.FindFirst (ClaimTypes.PrimarySid)?.Value.ToInt ();
            if (userId.HasValue && userId > 0)
                _currentUser = new CurrentUser {
                    Id = userId.HasValue ? userId.Value : 0,
                    UserName = curUser.FindFirst (ClaimTypes.Sid).Value,
                    TrueName = curUser.FindFirst (ClaimTypes.Name).Value,
                    Department = curUser.FindFirst (ClaimTypes.Dsa).Value,

                    MobileNo = curUser.FindFirst (ClaimTypes.MobilePhone).Value,

                    Encryption = 666,
                };
            return _currentUser;
        }
    }
}