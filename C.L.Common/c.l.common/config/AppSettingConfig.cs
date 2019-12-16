using System.Collections.Generic;
using c.l.common.helper;
using Microsoft.Extensions.Configuration;

namespace c.l.common.config {
    public class AppSettingConfig {

        private static IConfigurationRoot Configuration = ConfigBuilder.Configuration;

        public static string TDES_Key {
            get { return ""; /* ConfigurationManager.AppSettings["TDES_Key"]; */ }
        }
        public static string TDES_IV {
            get { return ""; /* ConfigurationManager.AppSettings["TDES_IV"];*/ }
        }
        public static string MgConn => Get ("MgConn");

        public static string MgDBName => Get ("MgDBName");

        public static string MgPrefix => Get ("MgPrefix");

        public static string EsUrl => Get ("EsUrl");
        public static string EsDefaultIndex => Get ("EsDefaultIndex");
        public static string EsIndexPrefix => Get ("EsIndexPrefix");

        public static string VideoThumbTime => Get ("VideoThumbTime");

        public static string Get (string key) => Configuration[key];

        public static IEnumerable<IConfigurationSection> GetChildren () {
            return Configuration.GetChildren ();
        }
        public static IEnumerable<IConfigurationSection> GetChildren (string key) {
            var section = Configuration.GetSection (key);
            return section.GetChildren ();
        }

        private static void GetSectionList (string key) {
            var section = Configuration.GetSection (key);
            System.Console.WriteLine (section.GetChildren ());
            foreach (var item in section.GetChildren ()) {
                System.Console.WriteLine (item.ToJson ());

                var root = Get ($"{item.Path}:root");
                var url = Get ($"{item.Path}:url");
                System.Console.WriteLine ($"root:{root}, url:{url}");
            }
        }
        /*
        public static string MqHost
        {
            get { return ConfigurationManager.AppSettings["MqHost"]; }
        }
        public static string MqUser
        {
            get { return ConfigurationManager.AppSettings["MqUser"]; }
        }

        public static string MqPwd
        {
            get { return ConfigurationManager.AppSettings["MqPwd"]; }
        }

        public static string MqExchange
        {
            get { return ConfigurationManager.AppSettings["MqExchange"]; }
        }
        public static string MqQueue
        {
            get { return ConfigurationManager.AppSettings["MqQueue"]; }
        }
        */

    }
}