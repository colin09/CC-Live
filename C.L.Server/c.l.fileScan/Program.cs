using System;
using c.l.fileScan.handler;

namespace c.l.fileScan
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var handler = new FileScaner();
            handler.Excute();


            System.Console.WriteLine("done !");
        }
    }
}
