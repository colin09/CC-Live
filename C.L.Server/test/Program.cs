using System;
using System.Collections.Generic;
using System.Linq;
using c.l.common.helper;

namespace test {
    class Program {
        static void Main (string[] args) {
            Console.WriteLine ("Hello World!");

            var productSkuIds = new string[] { "aaaa", "bbbbb" };
            var request = new List<dynamic> ();
            request.Add (productSkuIds);
            request.Add (1123);
            System.Console.WriteLine (request.ToJson ());

            var response = new Dictionary<string, List<string>> ();
            response.Add ("1234", productSkuIds.ToList());
            System.Console.WriteLine (response.ToJson ());
        }
    }
}