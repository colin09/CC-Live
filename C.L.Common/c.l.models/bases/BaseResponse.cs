using System;
using System.Collections.Generic;
using System.Text;

namespace c.l.models.bases
{
    public class BaseResponse
    {

        public BaseResponse(bool success = true, string message = "")
        {
            this.Success = success;
            this.Message = message;
        }


        public bool Success { set; get; }
        public string Message { set; get; }
        public string Code { set; get; }


        public static BaseResponse SuccessResponse() => new BaseResponse();
        public static BaseResponse ErrorResponse(string message) => new BaseResponse(false, message);

        public static BaseResponse<T> SuccessResponse<T>(T data, bool success = true) where T : class
        {
            return new BaseResponse<T>
            {
                Data = data,
                Success = success,
            };
        }
        public static BasePageResponse<T> SuccessResponse<T>(T data, Pager pager, bool success = true) where T : class
        {
            return new BasePageResponse<T>
            {
                Data = data,
                Pager = pager,
                Success = success,
            };
        }
    }

    public class BaseResponse<T> : BaseResponse where T : class
    {
        public T Data { set; get; }
    }

    public class BasePageResponse<T> : BaseResponse where T : class
    {
        public Pager Pager { set; get; }
        public T Data { set; get; }
    }
}
