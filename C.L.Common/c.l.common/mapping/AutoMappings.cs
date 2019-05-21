
using System;
using System.Linq;
using System.Reflection;
using AutoMapper;

namespace c.l.common.mapping
{

    public class Mappings
    {
        public static void RegisterMappings()
        {
            //获取所有IProfile实现类
            var allType = Assembly
                .GetEntryAssembly()//获取默认程序集
               .GetReferencedAssemblies()//获取所有引用程序集
               .Select(Assembly.Load)
               .SelectMany(y => y.DefinedTypes)
               .Where(type => typeof(IProfile).GetTypeInfo().IsAssignableFrom(type.AsType()));

            foreach (var typeInfo in allType)
            {
                var type = typeInfo.AsType();

                System.Console.WriteLine($"=====> mapping : {type},{type.BaseType}");
                //if (type.Equals(typeof(IProfile)))
                if (type.BaseType == typeof(Profile))
                {
                    //注册映射
                    Mapper.Initialize(cfg =>
                    {
                        //cfg .AddProfiles(type); // Initialise each Profile classe

                        System.Console.WriteLine($"=====> Initialize : {type}");
                        cfg.AddProfile(Activator.CreateInstance(type) as Profile);
                    });
                }
            }
        }

    }
}
