using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using c.l.common.Mvc;
using c.l.esearch.data;
using c.l.esearch.service;
using c.l.models.bases;
// using c.l.web.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace c.l.web.Controllers {
    public class UserController : BaseController {

        public UserController () { }

        public async Task<IActionResult> SignIn (string name, string passwprd) {
            var identity = new ClaimsIdentity ();

            identity.AddClaim (new Claim (ClaimTypes.PrimarySid, "user.Id.ToString ()"));
            identity.AddClaim (new Claim (ClaimTypes.Sid, name));
            identity.AddClaim (new Claim (ClaimTypes.Name, name));
            // identity.AddClaim (new Claim (ClaimTypes.Dsa, user.Department));

            identity.AddClaim (new Claim (ClaimTypes.Gender, "user.Gender"));
            identity.AddClaim (new Claim (ClaimTypes.MobilePhone, "user.MobileNo"));
            identity.AddClaim (new Claim (ClaimTypes.Email, "user.Email"));
            // identity.AddClaim(new Claim(ClaimTypes.UserData, user.ToJson()));
            // identity.AddClaim (new Claim (ClaimTypes.Role, user.AuthType.ToString ()));
            //identity.AddClaim(new Claim(ClaimTypes.Authentication, user.AuthType.ToString()));
            await HttpContext.SignInAsync (CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal (identity));
            return Json (BaseResponse.SuccessResponse (CurrentSessionUser));
        }
        public async Task<IActionResult> SignOut () {
            await HttpContext.SignOutAsync (CookieAuthenticationDefaults.AuthenticationScheme);
            return Json (BaseResponse.SuccessResponse ());
        }

    }
}