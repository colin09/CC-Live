using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using c.l.esearch.service;
using c.l.models.bases;
using c.l.common.Mvc;


namespace c.l.web.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResourceController : ApiBaseController
    {
        private EsResourceService _resourceService;
        private readonly ILogger<ResourceController> _logger;

        public ResourceController(ILogger<ResourceController> logger)
        {
            _logger = logger;
            _resourceService = new EsResourceService();
        }




        [HttpGet("search")]
        public BaseResponse Search(string key, int pageIndex, int pageSize)
        {
            var list = _resourceService.Search(key,CurrentSessionUser.Encryption, new Pager { PageIndex = pageIndex, PageSize = pageSize });
            return BaseResponse.SuccessResponse(list);
        }
    }
}