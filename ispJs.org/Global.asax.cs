using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace ispJs.org
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {

            PolyglotServerPages.WebApplication.Languages = new string[] { "en", "zh", "eo" };

            ispJs.WebApplication.RegisterSubPage("zh.isp.js");
            Action<Dictionary<string, object>, string> load = (locals, file) =>
            {
                var dic = new Dictionary<string, string>();
                var subPage = (locals["$subPage"] as string);
                foreach (var key in PolyglotServerPages.WebApplication.Languages)
                {
                    if (System.IO.File.Exists(ispJs.WebApplication.Server.MapPath('/' +
                         subPage.Replace('-', '/') + '.' + key + ".md"
                    )))
                    {
                        dic[key] = "true";
                    }
                }
                locals["langs"] = dic;
                var breadcrumb = new Dictionary<string, string>();
                try
                {
                    var i = subPage.IndexOf('-', 0);
                    while (i != -1)
                    {

                        breadcrumb.Add(System.IO.File.ReadAllLines(
                            string.Format(file
                            , subPage.Remove(i).Replace('-', ispJs.Utility.PathSymbol)))[0].Trim(),
                            subPage.Remove(i));
                        i = subPage.IndexOf('-', i + 1);
                    }

                }
                catch (Exception ex)
                {
                    breadcrumb.Add("错误", ex.Message);
                }
                locals["breadcrumb"] = breadcrumb;
            };
            ispJs.WebApplication.RegisterRenderer("zh.isp.js",
                new MarkdownServerPages.MarkdownRenderer(Server.MapPath("/") + "{0}.zh.md")
                {
                    Load = load,
                    Read = (subPage, file, found) =>
                    {
                        PolyglotServerPages.WebApplication.Preference = "zh";
                        ispJs.WebApplication.Response.AddHeader("Content-Language", "zh-cn");
                        thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId] = found;
                    },
                    PathTransforming = (path) => path.Replace('-', ispJs.Utility.PathSymbol)
                });


            ispJs.WebApplication.RegisterSubPage("en.isp.js");
            ispJs.WebApplication.RegisterRenderer("en.isp.js",
                new MarkdownServerPages.MarkdownRenderer(Server.MapPath("/") + "{0}.en.md")
                {
                    Load = load,
                    Read = (subPage, file, found) =>
                    {
                        PolyglotServerPages.WebApplication.Preference = "en";
                        ispJs.WebApplication.Response.AddHeader("Content-Language", "en");
                        thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId] = found;
                    },
                    PathTransforming = (path) => path.Replace('-', ispJs.Utility.PathSymbol)
                });
            ispJs.WebApplication.HandleStart(Server);
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            
        }
        static Dictionary<int, bool> thread404Status = new Dictionary<int, bool>();
        protected void Application_PreSendRequestHeaders(object sender, EventArgs e)
        {
            try
            {
                if (!thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId])
                {
                    thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId] = true;
                    if (Response.StatusCode == 200)
                    {
                        Response.StatusCode = 404;
                    }
                }
            }
            catch (KeyNotFoundException) { }
            var path = Request.Path;
            var exts = new[] { "js", "css", "jpeg", "jpg", "gif", "png", "swf", "pdf" };
            var ext = "";
            try
            {
                ext = path.Substring(path.LastIndexOf('.') + 1);
            }
            catch { }
            if (!(path.Contains('.') && exts.Contains(ext)))
            {
                Response.ContentType = "text/html";
            }
        }
        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            ispJs.WebApplication.HandleBeginRequest();

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

            ispJs.WebApplication.HandleEnd();
        }
    }
}