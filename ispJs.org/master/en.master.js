/*<!--*/
var lang = 'en';
var langs = typeof (arguments[0].langs) == 'undefined' ? null : arguments[0].langs;
var misc = $load('inc/misc.inc.js')();
/*--><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>
        <!--*/
if (typeof (arguments[0].title) != 'undefined' && arguments[0].title) { $((arguments[0].title ? arguments[0].title : 'Untitled Page') + '-'); } /*-->
        ISP.js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
    <style type="text/css">
        body
        {
            padding-top: 60px;
            padding-bottom: 40px;
        }
    </style>
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
    <script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
    <script src="/js/fancyBox/jquery.fancybox.pack.js" type="text/javascript"></script>
    <link href="/js/fancyBox/jquery.fancybox.css" rel="stylesheet" type="text/css" />
    <!--*/
if (typeof (arguments[0].head) == 'function') { arguments[0].head(); } /*-->
</head>
<body data-spy="scroll" data-target=".toc">
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span
                    class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                </a><a class="brand" href="/">ISP.js</a>
                <div class="nav-collapse">
                    <ul class="nav">
                        <li class="{$misc.getClassNav('Overview')$}"><a href="/Overview.{$lang$}">Overview</a></li>
                        <li class="{$misc.getClassNav('GetStarted')$}"><a href="/GetStarted.{$lang$}">Get Started</a></li>
                        <li class="{$misc.getClassNav('Examples')$}"><a href="/Examples.{$lang$}">Examples</a></li>
                        <li class="{$misc.getClassNav('Docs')$}"><a href="/Docs.{$lang$}">Docs</a></li>
                        <li class="{$misc.getClassNav('Download')$}"><a href="/Download.{$lang$}">Download</a></li>
                        <li class="{$misc.getClassNav('Source')$}"><a href="/Source.{$lang$}">Source</a></li>

                    </ul>
                    <ul class="nav" style="float: right;">
                        <li class="{$misc.getClassLang(lang,'en',langs)$}"><a title="English" href="{$misc.getHrefLang('en')$}">
                            <img src="/img/en.jpg" /></a></li>
                        <li class="{$misc.getClassLang(lang,'zh',langs)$}"><a title="Chinese" href="{$misc.getHrefLang('zh')$}">
                            <img src="/img/zh.jpg" /></a></li>
                    </ul>
                    <script type="text/javascript" src="/js/scripts.js">
                    </script>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>
    <div class="container">
        <!--*/
arguments[0].body(); /*-->
        <hr>
        <footer>
        <p>&copy; ispjs.org 2012 Powered by 
        <a href="http://twitter.github.com/bootstrap/" target="_blank">Bootstrap</a>,
        <a href="https://github.com/layerssss/ispJs" target="_blank">ISP.js</a>
        </p>
      </footer>
    </div>
    <!-- /container -->
    <a class="visible-desktop" id="github" href="https://github.com/layerssss/ispjs" style="position:fixed;top:0px;left:0;z-index:10000;"><img src="https://a248.e.akamai.net/assets.github.com/img/5d21241b64dc708fcbb701f68f72f41e9f1fadd6/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub"></a>
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/js/bootstrap.min.js" type="text/javascript"></script>
</body>
</html>
<!--*/
//-->
