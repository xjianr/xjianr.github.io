// build time:Sun Jun 30 2019 01:12:16 GMT+0800 (GMT+08:00)
var OriginTitle=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/assets/img/warn.png");document.title="ヽ(●-`Д´-)ノ出BUG了~"+OriginTitle;clearTimeout(titleTime)}else{$('[rel="icon"]').attr("href","/assets/img/favicon_32.png");document.title="ヾ(Ő∀Ő3)ノ咦又好了~"+OriginTitle;titleTime=setTimeout(function(){document.title=OriginTitle},2e3)}});
//rebuild by neat 