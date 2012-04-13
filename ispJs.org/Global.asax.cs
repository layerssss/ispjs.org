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
                foreach (var key in PolyglotServerPages.WebApplication.Languages)
                {
                    if (System.IO.File.Exists(ispJs.WebApplication.Server.MapPath('/' +
                        (locals["$subPage"] as string) + '.' + key + ".md"
                    )))
                    {
                        dic[key] = "true";
                    }
                }
                locals["langs"] = dic;
            };
            ispJs.WebApplication.RegisterRenderer("zh.isp.js",
                new MarkdownServerPages.MarkdownRenderer(Server.MapPath("/") + "{0}.zh.md")
                {
                    Load = load,
                    Read = (subPage, file) =>
                    {
                        PolyglotServerPages.WebApplication.Preference = "zh";
                    }
                });


            ispJs.WebApplication.RegisterSubPage("en.isp.js");
            ispJs.WebApplication.RegisterRenderer("en.isp.js",
                new MarkdownServerPages.MarkdownRenderer(Server.MapPath("/") + "{0}.en.md")
                {
                    Load = load,
                    Read = (subPage, file) =>
                    {
                        PolyglotServerPages.WebApplication.Preference = "en";
                    }
                });
            ispJs.WebApplication.HandleStart(Server);
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_PreSendRequestHeaders(object sender, EventArgs e)
        {

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