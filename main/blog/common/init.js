/*在线演示公共底部*/
$(function(){
	var buf = [];
	buf.push('<script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
	buf.push('<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-0608155192548477" data-ad-slot="8305246055"></ins>');
	buf.push('<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
	buf.push('<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "http://hm.baidu.com/hm.js?244ff9d4fa95dcc8d7e59d2dfaf5b2c4";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>');
	buf.push('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"1","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];</script>');
	// buf.push('<div class="bdsharebuttonbox" style="float:right"><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a><a href="#" class="bds_tsohu" data-cmd="tsohu" title="分享到搜狐微博"></a><a href="#" class="bds_qq" data-cmd="qq" title="分享到QQ收藏"></a><a href="#" class="bds_kaixin001" data-cmd="kaixin001" title="分享到开心网"></a><a href="#" class="bds_xg" data-cmd="xg" title="分享到鲜果"></a><a href="#" class="bds_more" data-cmd="more"></a></div>');
	// buf.push('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"32"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin","tieba","tsohu","qq","kaixin001","xg"],"viewText":"分享到：","viewSize":"16"}};with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];</script>');
	$('.footer-banner').html(buf.join(''));
	/*头部导航*/
	
	// $('body').append('<div class="top-banner clearfix"><div class="fl"><a href="http://www.cnblogs.com/lhb25/p/10-useful-html5-css3-effect.html" target="_blank">&lt;&lt;8个前沿的 HTML5 & CSS3 效果【附源码下载】</a></div><div class="fr"><a href="http://www.cnblogs.com/lhb25/p/10-useful-web-effect.html" target="_blank">Web 开发中很实用的10个效果【附源码下载】&gt;&gt;</a></div></div>');
});
