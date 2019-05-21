using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using c.l.common.config;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;


namespace c.l.common.helper
{
    public class FileHelper
    {

        public async static Task<FileModel[]> SaveFiles(IFormFileCollection files)
        {
            string webRootPath = @"../../Sources/";
            string contentRootPath = $"{Directory.GetCurrentDirectory()}/SourcesFile/";

            var fileList = new List<FileModel>();
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    string fileExt = System.IO.Path.GetExtension(formFile.FileName); //文件扩展名，不含“.”
                    long fileSize = formFile.Length; //获得文件大小，以字节为单位

                    string newFileName = System.Guid.NewGuid().ToString() + fileExt; //随机生成新的文件名

                    var filePath = $"{contentRootPath}{fileExt.ToFileType()}/{newFileName}";
                    var fileUrl = $"{webRootPath}{fileExt.ToFileType()}/{newFileName}";

                    Utility.DirectoryCheck($"{contentRootPath}{fileExt.ToFileType()}");

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }

                    var fModel = new FileModel
                    {
                        Filepath = filePath,
                        FileUrl = fileUrl,
                        FileName = formFile.FileName,
                        FileType = fileExt.ToFileType(),
                        FileMd5 = "",
                    };

                    if (fModel.FileType == "video")
                    {
                        //fModel.ThumbUrl = CreateVideoThrum(fModel);
                        CreateVideoThrum(fModel);
                        fModel.ThumbUrl = fModel.FileUrl.Substring(0, fModel.FileUrl.LastIndexOf(".")) + ".jpg";
                    }

                    fileList.Add(fModel);
                }
            }
            return fileList.ToArray();
        }

        private static string CreateVideoThrum(FileModel model)
        {
            /**
            # 50分钟处截屏 
            ffmpeg -ss 00:50:00  -i RevolutionOS.rmvb sample.jpg  -r 1 -vframes 1 -an -vcodec mjpeg  
            # 或者使用 -f 参数指定输出的格式为 mjpeg ，效果一样 
            ffmpeg -ss 00:50:00  -i RevolutionOS.rmvb sample.jpg  -r 1 -vframes 1 -an -f mjpeg
            */

            //var time = "00:00:10";
            var time = AppSettingConfig.VideoThumbTime;
            var filepath = model.Filepath.Replace('/','\\');
            var fileImagePath = filepath.Substring(0, filepath.LastIndexOf(".")) + ".jpg";

            var cmd = "ffmpeg -ss {0}  -i {1} {2}  -r 1 -vframes 1 -an -f mjpeg";
            cmd = cmd.Frmt(time, filepath, fileImagePath);

            var message = "";
            CmdTool.RunCmd(cmd, out message);
            System.Console.WriteLine(message);

            return fileImagePath;
        }

    }

    public class FileModel
    {
        public string FileName { set; get; }
        public string Filepath { set; get; }
        public string FileUrl { set; get; }
        public string ThumbUrl { set; get; }
        public string FileType { set; get; }
        public string FileMd5 { set; get; }
    }
}