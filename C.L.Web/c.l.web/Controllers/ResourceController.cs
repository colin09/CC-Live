using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using c.l.esearch.service;
using c.l.models.bases;
using c.l.web.Models;
using c.l.common.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace c.l.web.Controllers
{
    public class ResourceController : BaseController
    {

        private EsResourceService _resourceService;
        public ResourceController()
        {
            _resourceService = new EsResourceService();
        }

        [HttpGet]
        public IActionResult Search(string key, int pageIndex, int pageSize)
        {
            var list = _resourceService.Search(key,CurrentSessionUser.Encryption, new Pager { PageIndex = pageIndex, PageSize = pageSize });
            return Json(BaseResponse.SuccessResponse(list));
        }

        [HttpPost]
        public IActionResult SetState(string id, int option, int value)
        {
            var resource = _resourceService.Get(id);
            switch (option)
            {
                case 99: resource.EncryptionLevel = value; break;
            }
            _resourceService.Index(resource);
            return Json(BaseResponse.SuccessResponse());
        }

    }
}