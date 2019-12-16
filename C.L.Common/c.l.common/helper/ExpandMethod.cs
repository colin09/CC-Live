using System;
using System.Text;
using Newtonsoft.Json;

namespace c.l.common.helper {
    public static class ExpandMethod {
        public static string Frmt (this string str, params object[] args) {
            return string.Format (str, args);
        }

        public static bool IsEmpty (this string str) {
            return string.IsNullOrWhiteSpace (str);
        }
        public static bool IsNotEmpty (this string str) {
            return !string.IsNullOrWhiteSpace (str);
        }
        public static byte[] ToByte (this string str) {
            return Encoding.UTF8.GetBytes (str);
        }

        public static int? ToInt (this string str) {
            if (str.IsEmpty ())
                return null;
            var result = 0;
            var flag = int.TryParse (str, out result);
            if (flag)
                return result;
            return null;
        }
        public static string ToJson (this object obj) {
            return JsonConvert.SerializeObject (obj);
        }

        public static T DesJson<T> (this string obj) {
            return JsonConvert.DeserializeObject<T> (obj);
        }

        public static string ToDate (this double oadate) {
            var date = DateTime.Parse ("1899-12-30").AddMilliseconds (Math.Round (oadate * 24 * 60 * 60 * 1000));
            return date.ToString ("yyyy-MM-dd");
        }
        public static string ToDate (this DateTime date) {
            if (date == null)
                return "";
            return date.ToString ("yyyy-MM-dd");
        }
        public static string ToDate (this DateTime? date) {
            if (date == null)
                return "";
            return date.Value.ToString ("yyyy-MM-dd");
        }

        public static string ToFileType (this string fileExt) {
            var fileType = "other";
            switch (fileExt.ToLower ()) {
                case ".bmp":
                case ".png":
                case ".gif":
                case ".jpg":
                case ".jpeg":
                    fileType = "image";
                    break;
                case ".mp4":
                    fileType = "video";
                    break;
                case ".pdf":
                case ".doc":
                    fileType = "doc";
                    break;
            }
            return fileType;
        }

        public static string TakeString (this string str, int length) {
            if (string.IsNullOrEmpty (str))
                return str;
            var tem = System.Text.RegularExpressions.Regex.Replace (str, "<[^>]+>", "");
            if (!string.IsNullOrEmpty (tem.Trim ()) && tem.Length > length)
                return tem.Substring (0, length);
            return tem;
        }

    }
}