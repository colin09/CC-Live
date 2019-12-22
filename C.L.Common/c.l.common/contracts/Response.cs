using System;
using System.Collections.Generic;

namespace c.l.common.contracts.response {

    public class BaseResponse {

        public static BaseResponse SuccessResponse = new BaseResponse (true);
        public static BaseResponse ErrorResponse (string message) => new BaseResponse (message);

        public BaseResponse () { }
        public BaseResponse (bool success = true) { this.success = success; }
        public BaseResponse (string message, bool success = false) { this.success = success; this.message = message; }

        /// <summary>
        /// 调用是否成功
        /// </summary>
        public bool success { get; set; }

        /// <summary>
        /// 错误信息
        /// </summary>
        public string code { get; set; }

        /// <summary>
        /// 详细描述信息
        /// </summary>
        public string message { get; set; }

        public static implicit operator BaseResponse (bool success) {
            return new BaseResponse (success);
        }

        public static implicit operator bool (BaseResponse baseResponse) {
            return baseResponse.success;
        }

        public static BaseResponse<T> From<T> (T t, bool success = true) {
            return new BaseResponse<T> () {
            data = t,
            success = success
            };
        }
    }

    public class BaseResponse<T> : BaseResponse {

        public BaseResponse (bool success = true) : base (success) { }
        public BaseResponse (T data, bool success = true) : base (success) {
            this.data = data;
        }
        public BaseResponse (string message, bool success = false) : base (success) {
            this.message = message;
        }
        public BaseResponse (T data, string message, bool success = true) : this (message, success) {
            this.data = data;
        }
        public T data { get; set; }

        /// <summary>
        /// 针对泛型的类型是bool时的转换
        /// </summary>
        /// <param name="success"></param>
        public static implicit operator BaseResponse<T> (bool success) {
            return new BaseResponse<T> ((T) (Object) success, true);
        }

        public static implicit operator bool (BaseResponse<T> baseResponse) {
            return baseResponse.success;
        }
    }

    public class BasePageResponse<T> : BaseResponse<T> {
        public BasePageResponse () { }
        public BasePageResponse (T data, int totalCount, bool success = true) {
            this.data = data;
            this.totalCount = totalCount;
            this.success = success;
        }

        /// <summary>
        /// 数据总量
        /// </summary>
        public int totalCount { get; set; }
        public Dictionary<string, decimal> statistics { get; set; }
    }
}