window["MzBrowser"]=
{
};
(function()
{
  if(MzBrowser.platform) return;
  var ua = window.navigator.userAgent;
  MzBrowser.platform = window.navigator.platform;
  MzBrowser.firefox = ua.indexOf("Firefox")>0;
  MzBrowser.opera = typeof(window.opera)=="object";
  MzBrowser.ie = !MzBrowser.opera && ua.indexOf("MSIE")>0;
  MzBrowser.mozilla = window.navigator.product == "Gecko";
  MzBrowser.netscape= window.navigator.vendor=="Netscape";
  MzBrowser.safari= ua.indexOf("Safari")>-1;
  if(MzBrowser.firefox) var re = /Firefox(\s|\/)(\d+(\.\d+)?)/;
  else if(MzBrowser.ie) var re = /MSIE( )(\d+(\.\d+)?)/;
  else if(MzBrowser.opera) var re = /Opera(\s|\/)(\d+(\.\d+)?)/;
  else if(MzBrowser.netscape) var re = /Netscape(\s|\/)(\d+(\.\d+)?)/;
  else if(MzBrowser.safari) var re = /Version(\/)(\d+(\.\d+)?)/;
  else if(MzBrowser.mozilla) var re = /rv(\:)(\d+(\.\d+)?)/;
  if("undefined"!=typeof(re)&&re.test(ua))
  MzBrowser.version = parseFloat(RegExp.$2);
}
)();
function checkScreen()
{
  s=700;
  if(MzBrowser.ie)
  {
    s=document.body.offsetHeight;
  }
  if(MzBrowser.firefox)
  {
    s=window.innerHeight;
  }
  if(MzBrowser.opera)
  {
    s=document.body.clientHeight;
  }
  if(s<630)
  {
    window.moveTo(14,14);   
    window.resizeTo(screen.width-28,screen.height-28);   
  }
  if(MzBrowser.ie)
  {
    s=document.body.offsetHeight;
  }
  if(MzBrowser.firefox)
  {
    s=window.innerHeight;
  }
  if(MzBrowser.opera)
  {
    s=document.body.clientHeight;
  }
  if (s<630)
  {
    alert('您的游戏画面显示不全，建议您使用全屏显示（按F11）');
  }
}

function addfavorite(www,name)
{
  window.external.addFavorite(www,name);
}