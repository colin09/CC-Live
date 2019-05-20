using System;
using System.IO;
using System.Linq;
using System.Text;

namespace c.l.fileScan.handler
{

    public class FileScaner
    {

        public void Excute()
        {
            var path = "";
            path = Directory.GetCurrentDirectory();
            ReadDirectory(path);
        }



        private void ReadDirectory(string path)
        {
            var dir = new DirectoryInfo(path);
            var files = dir.GetFiles();

            ReadFiles(files);
            ReadSubDirectory(path);
        }


        private void ReadSubDirectory(string path)
        {
            var root = new DirectoryInfo(path);
            var dirs = root.GetDirectories();
            if (dirs == null || dirs.Length < 1) return;

            dirs.ToList().ForEach(dir =>
            {
                //System.Console.WriteLine($"dir : {dir.FullName}");

                ReadDirectory(dir.FullName);
            });
        }

        private void ReadFiles(FileInfo[] files)
        {
            if (files == null || files.Length < 1) return;
            files.ToList().ForEach(file =>
            {
                var md5 = GetMD5HashFromFile(file.FullName);
                var name = file.Name;
                var fullName = file.FullName;

                System.Console.WriteLine($"name : {file.Name} , md5 : {md5}");
                // System.Console.WriteLine($"fullName : {file.FullName}");
                // System.Console.WriteLine($"DirectoryName : {file.DirectoryName}");

            });
        }

        private string GetMD5HashFromFile(string filePath)
        {
            try
            {
                FileStream file = new FileStream(filePath, FileMode.Open);
                System.Security.Cryptography.MD5 md5 = new System.Security.Cryptography.MD5CryptoServiceProvider();
                byte[] retVal = md5.ComputeHash(file);
                file.Close();
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < retVal.Length; i++)
                {
                    sb.Append(retVal[i].ToString("x2"));
                }
                return sb.ToString();
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("GetMD5HashFromFile() fail,error:" + ex.Message);
                // throw new Exception("GetMD5HashFromFile() fail,error:" + ex.Message);
            }
            return null;
        }
    }
}