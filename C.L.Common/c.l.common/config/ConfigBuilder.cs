using System.IO;
using Microsoft.Extensions.Configuration;

namespace c.l.common.config
{
    public class ConfigBuilder
    {
        static ConfigBuilder()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath($"{Directory.GetCurrentDirectory()}/configurations/")
                .AddJsonFile("appsettings.json");

            Configuration = builder.Build();
        }

        public static IConfigurationRoot Configuration { get; private set; }

    }
}


/**
 * 
 * SetBasePath extension method is defined in Config.FileExtensions.
 * 
 * need to add a dependency to Microsoft.Extensions.Configuration.FileExtensions package.
 * 
 * To resolve AddJsonFile add dependency to Microsoft.Extensions.Configuration.Json
 * 
 * 
 */
