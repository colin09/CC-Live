using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using c.l.esearch.service;
using c.l.models.bases;
using c.l.web.Models;
using Microsoft.AspNetCore.Mvc;

namespace c.l.web.Controllers {
    public class ResourceController : Controller {

        private EsResourceService _resourceService;
        public ResourceController () {
            _resourceService = new EsResourceService ();
        }

        [HttpGet]
        public IActionResult Search (string key, int pageIndex, int pageSize) {
            var list = _resourceService.Search (key, new Pager { PageIndex = pageIndex, PageSize = pageSize });
            return Json (BaseResponse.SuccessResponse (list));
        }

    }
}