/// <reference path="/ISPReferences/master/en.master.js" />
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
        Zhixiang Yin</title>
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
<body>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span
                    class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                </a><a class="brand" href="/">Zhixiang Yin</a>
                <div class="nav-collapse">
                    <ul class="nav">
                        <li class="{$misc.getClassNav('')$}"><a href="/Ciao.{$lang$}">About &amp; Projects</a></li>
                        <li class="divider-vertical"></li>
                        <li class="{$misc.getClassNav('Journal')$}"><a href="/Journals.{$lang$}">Journals</a></li>
                        <li class="divider-vertical"></li>
                        <li class="{$misc.getClassNav('CV')$}"><a href="/CV.{$lang$}">CV</a></li>
                        <li class="divider-vertical"></li>
                        <li><a href="#" onclick="return false;">see me on:</a></li>
                        <li><a href="https://github.com/layerssss/ISP.js" target="_blank">Github</a></li>
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
        <p>&copy; Zhixiang Yin 2012 Powered by 
        <a href="http://twitter.github.com/bootstrap/" target="_blank">Bootstrap</a>,
        <a href="https://github.com/layerssss/ispJs" target="_blank">ISP.js</a>
        </p>
      </footer>
    </div>
    <!-- /container -->
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/js/bootstrap.min.js" type="text/javascript"></script>
</body>
</html>
<!--*/
//-->
