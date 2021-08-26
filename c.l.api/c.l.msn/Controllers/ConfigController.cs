using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace c.l.msn.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class ConfigController : ControllerBase {

        private readonly IConfiguration _configuration;
        private readonly AppSettings _settings;
        private readonly AppSettings _sSettings;
        private readonly AppSettings _mSettings;

        private readonly ILogger<ConfigController> _logger;

        public ConfigController (ILogger<ConfigController> logger,
            IConfiguration configuration,
            IOptions<AppSettings> options,
            IOptionsSnapshot<AppSettings> sOptions,
            IOptionsMonitor<AppSettings> _mOptions) {
            _logger = logger;
            _configuration = configuration;
            _settings = options.Value;
            _sSettings = sOptions.Value;
            _mSettings = _mOptions.CurrentValue;
        }

        [HttpGet]
        public string Get () {
            // ....

            return "ok";
        }

    }
}