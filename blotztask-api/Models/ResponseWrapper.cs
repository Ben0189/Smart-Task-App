using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlotzTask.Models;
public class ResponseWrapper<T>
{
    public T Data { get; set; }
    public string Message { get; set; }
    public bool Success { get; set; }

    public ResponseWrapper(T data, string message, bool success)
    {
        Data = data;
        Message = message;
        Success = success;
    }
}
