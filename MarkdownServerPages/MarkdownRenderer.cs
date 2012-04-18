using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MarkdownServerPages
{
    public class MarkdownRenderer : ispJs.IISPAC, ispJs.IISPRenderer
    {
        private string file;
        DateTime version = DateTime.Now;
        MarkdownRenderer()
        {
        }
        public MarkdownRenderer(string file)
        {
            this.file = file;
        }
        #region IISPAC 成员

        public void Page_Read(string subPage)
        {
            var d = System.IO.File.GetLastWriteTime(string.Format(file, subPage));
            if (d > version)
            {
                var path = ispJs.WebApplication.Request.Path.Substring(1);
                if (path == "")
                {
                    path = "Default.html";
                }
                ispJs.WebApplication.SafeDelete(path);
                version = d;
            }
            if (this.Read != null)
            {
                this.Read(subPage, this.file,
                    System.IO.File.Exists(string.Format(file, this.PathTransforming(subPage))));
            }
        }

        #endregion
        public Func<string, string> PathTransforming = (str1) => str1;
        public Action<Dictionary<string, object>, string> Load;
        public Action<string, string,bool> Read;
        #region IISPRenderer 成员

        public void Page_Load(Dictionary<string, object> locals)
        {
            string content, title;
            try
            {
                content = System.IO.File.ReadAllText(string.Format(file,this.PathTransforming(locals["$subPage"] as string)), System.Text.Encoding.UTF8);

            }
            catch (System.IO.IOException)
            {
                content = System.IO.File.ReadAllText(string.Format(file, "404"), System.Text.Encoding.UTF8);

            }
            MarkdownDeep.Markdown m = new MarkdownDeep.Markdown();
            m.AutoHeadingIDs = true;
            Dictionary<string, MarkdownDeep.LinkDefinition> links;
            var results = m.Transform(content,out links);
            locals["content"] = results;
            locals["links"] = links;
            try
            {
                var i = results.IndexOf("<h1>");
                title = results.Substring(i + 4, results.IndexOf("</h1>") - i - 4);
            }
            catch (Exception)
            {
                title = null;
            }
            locals["title"] = title;
            locals["version"] = VersionFormat == null ? version.ToString() : version.ToString(VersionFormat);
            if (this.Load != null)
            {
                this.Load(locals, this.file);
            }
        }
        public string VersionFormat = null;
        #endregion

        #region IDisposable 成员

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
