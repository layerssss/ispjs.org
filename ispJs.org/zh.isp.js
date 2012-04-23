/*<!--*/
$load('master/zh.master.js')({
    title: title,
    langs: langs,
    body: function () {

        /*-->
<div class="row">
    <div class="span4 navmenu">
        <div class="well">
            <!--*/
            if(breadcrumb){
                /*-->
            <ul class="breadcrumb">
                <!--*/for(var btitle in breadcrumb){/*-->
                <li><a href="{$breadcrumb[btitle]$}.zh">{$btitle$}</a> <span class="divider">/</span>
                </li>
                <!--*/}/*-->
                <li class="active">{$title$}</li>
            </ul>
            <!--*/
            }
/*-->
            <div class="toc">
                <ul class="nav nav-list toc">
                    <li class="nav-header">目录</li>
                    <!--*/for(var i =0;i<chapters.length;i++){var t=chapters[i];/*-->
                    <li><a href="#chapter{$i$}">{$t$}</a> </li>
                    <!--*/}/*-->
                </ul>
            </div>
        </div>
    </div>
    <div class="span8">
        <h1>
            {$title$}</h1>
        <hr />
        {$content$}</div>
    <div class="span8">
        <div id="disqus_thread">
        </div>
        <script type="text/javascript">
            /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
            var disqus_shortname = 'ispjsorg'; // required: replace example with your forum shortname

            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function () {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        </script>
        <noscript>
            Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments
                powered by Disqus.</a></noscript>
        <a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">
            Disqus</span></a></div>
</div>
<!--*/

    } 
});

//-->
