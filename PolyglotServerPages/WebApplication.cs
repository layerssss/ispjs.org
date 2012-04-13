using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
namespace PolyglotServerPages
{
    public static class WebApplication
    {
        public static IEnumerable<string> Languages = new string[] { "en" };
        public static string Preference
        {
            get
            {
                var ck = HttpContext.Current.Request.Cookies["psppref"];
                if (ck == null)
                {
                    var accl = HttpContext.Current.Request.Headers["Accept-Language"];
                    try
                    {
                        for (var i = 0; i < accl.Length; i++)
                        {
                            foreach (var lang in Languages)
                            {
                                if (accl.Substring(i, lang.Length) == lang)
                                {
                                    Preference = lang;
                                    return lang;
                                }
                            }
                        }
                        throw (new IndexOutOfRangeException());
                    }
                    catch (Exception)
                    {
                        Preference = Languages.First();
                        return Languages.First();
                    }
                }
                return ck.Value;
            }
            set
            {
                HttpContext.Current.Response.Cookies.Add(
                    new HttpCookie("psppref", value) { Expires = DateTime.Now.AddDays(60) });
            }
        }
    }
}
