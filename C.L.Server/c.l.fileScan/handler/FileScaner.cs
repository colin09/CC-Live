using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using c.l.esearch.data;
using c.l.esearch.service;
using c.l.models.enums;

namespace c.l.fileScan.handler {

    public class FileScaner {

    public void Excute () {
    var path = @"E:\erp文档\";
    //path = Directory.GetCurrentDirectory ();
    ReadDirectory (path);
        }

        private void ReadDirectory (string path) {
            var dir = new DirectoryInfo (path);
            var files = dir.GetFiles ();

            ReadFiles (files);
            ReadSubDirectory (path);
        }

        private void ReadSubDirectory (string path) {
            var root = new DirectoryInfo (path);
            var dirs = root.GetDirectories ();
            if (dirs == null || dirs.Length < 1) return;

            dirs.ToList ().ForEach (dir => {
                //System.Console.WriteLine($"dir : {dir.FullName}");
                ReadDirectory (dir.FullName);
            });
        }

        private void ReadFiles (FileInfo[] files) {
            if (files == null || files.Length < 1) return;

            var list = new List<EsResource> ();
            foreach (var file in files) {
                var sourceType = GetSourceType (file.Extension);
                //if (sourceType == SourceType.None) continue;

                var md5 = GetMD5HashFromFile (file.FullName);
                list.Add (new EsResource {
                    SourceType = sourceType,
                        Name = file.Name,
                        FullName = file.FullName,
                        Url = "",
                        Md5 = md5,
                        Tags = $"{file.Name},",
                        Sort = 520,
                });
                System.Console.WriteLine ($"name : {file.Name} , Extension : {file.Extension} ");
            }

            if (list.Count > 0) {
                var service = new EsResourceService ();
                service.BulkAll (list);
            }
        }

        private string GetMD5HashFromFile (string filePath) {
            try {
                FileStream file = new FileStream (filePath, FileMode.Open);
                System.Security.Cryptography.MD5 md5 = new System.Security.Cryptography.MD5CryptoServiceProvider ();
                byte[] retVal = md5.ComputeHash (file);
                file.Close ();
                StringBuilder sb = new StringBuilder ();
                for (int i = 0; i < retVal.Length; i++) {
                    sb.Append (retVal[i].ToString ("x2"));
                }
                return sb.ToString ();
            } catch (Exception ex) {
                System.Console.WriteLine ("GetMD5HashFromFile() fail,error:" + ex.Message);
                // throw new Exception("GetMD5HashFromFile() fail,error:" + ex.Message);
            }
            return null;
        }

        private SourceType GetSourceType (string extension) {
            var sourceType = SourceType.None;
            switch (extension) {
                case ".txt":
                case ".doc":
                case ".pdf":
                    sourceType = SourceType.Text;
                    break;
                case ".gif":
                case ".png":
                case ".jpg":
                    sourceType = SourceType.Image;
                    break;
                case ".mp3":
                    sourceType = SourceType.Audio;
                    break;
                case ".mp4":
                case ".avi":
                case ".rmvb":
                    sourceType = SourceType.video;
                    break;
            }
            return sourceType;
        }
    }
}