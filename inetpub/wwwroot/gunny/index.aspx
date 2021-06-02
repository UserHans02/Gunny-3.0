<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Tank.Flash._Default" %>

<html>
<head id="Head1" runat="server">
    <META   HTTP-EQUIV="Pragma"   CONTENT="no-cache">    
    <META   HTTP-EQUIV="Cache-Control"   CONTENT="no-cache">    
    <META   HTTP-EQUIV="Expires"   CONTENT="0">    
    <title><%=SiteTitle%></title>
    <script type="text/javascript" src="scripts/dandantang.js"></script>
    <script type="text/javascript" src="scripts/rightClick.js"></script>
    <script src="scripts/popup/prototype.js" type="text/javascript"></script>
    <script src="scripts/popup/script/popup.js" type="text/javascript"></script>
    <style>
       html, body	{ height:100%; }
      body
        {
            margin: 0px auto;
            padding: 0px;
            background-image: url(images/bg_all.jpg);
	     background-repeat: no-repeat;
        background-position: center center;
        overflow:auto; text-align:center;
        }
    </style>
</head>
<body scroll="no"  onload= "setFlashFocus()">
    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td valign="middle">
                    <table border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center" id="bdgame">
                                <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="7road-ddt-game" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"
                                    name="Main" width="1000" height="600" align="middle" id="Main">
                                    <param name="allowScriptAccess" value="always" />
                                    <param name="movie" value='Loading.swf?<%=Content %>&v=<%=Edition %>&rand=0.735361468389333' />                   
                                    <param name="quality" value="high" />
                                    <param name="menu" value="false">
                                    <param name="bgcolor" value="#000000" />
                                    <param name="FlashVars" value="<%=AutoParam + "&sex=" + sex %>" />
                                    <embed flashVars="<%=AutoParam + "&sex=" + sex %>"  src='Loading.swf?<%=Content %>&v=<%=Edition %>&rand=0.735361468389333' width="1000" height="600"
                                        align="middle" quality="high" name="Main" allowscriptaccess="sameDomain" type="application/x-shockwave-flash"
                                        pluginspage="http://www.macromedia.com/go/getflashplayer" />
                                </object>
                            </td>
                        </tr>
                    </table>
            </td>
        </tr>
    </table>
</body>
</html>

