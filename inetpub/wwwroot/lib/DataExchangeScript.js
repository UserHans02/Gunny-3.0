//------------------------------------------------------------------
//	Attention, all variables and functions must have "LCS" prefix
//	or extremely extraordinary name to avoid intersection with page
//	variables.
//------------------------------------------------------------------
var LCS_336D0C35_8A85_403a_B9D2_65C292C39087_g_DataObject = new LCS_336D0C35_8A85_403a_B9D2_65C292C39087_DataExchageObject();						// Local data storage object.

function LCS_336D0C35_8A85_403a_B9D2_65C292C39087_launchLocalScriptWhenReady()
{
	
	if (typeof(LCS_336D0C35_8A85_403a_B9D2_65C292C39087_localScriptLoad) != "undefined") setTimeout("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_localScriptLoad()", 0);
	else setTimeout("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_launchLocalScriptWhenReady()", 0);
}
//------------------------------------------------------------------
//	Data exchange object
//------------------------------------------------------------------
function LCS_336D0C35_8A85_403a_B9D2_65C292C39087_DataExchageObject()
{
	this.localStorage = new Array();
	this.firstInit = true;	
	this.communicationDiv = document.getElementById('LCS_336D0C35_8A85_403a_B9D2_65C292C39087_communicationDiv');	
	
	// Updating storage externally
	this.updateStorage = function(newStorage)
	{
		LCS_336D0C35_8A85_403a_B9D2_65C292C39087_g_DataObject.localStorage = JSON.parse(unescape(newStorage));
		if (this.firstInit)
		{
			this.firstInit = false;
			setTimeout("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_launchLocalScriptWhenReady()", 0);
		}
	};
	
	// Getting value from extension storage. If no value, defaultValue is returned.
	this.getValue = function(valueName, defaultValue)
	{
		var retVal = "";
		
		try
		{
			retVal = this.localStorage[valueName];
			
			// Special step for toolbarID - it should never be empty or "0000". Fix it if it happened
			// to be wrong in previous version.
			if (valueName=="toolbarID")
			{
				if (!retVal || retVal=="undefined" || retVal == "0000" || retVal=="")
				{
					var S4 = function() 
					{
						return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
					};
					var guid = (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
					
					retVal = guid;
					this.localStorage["toolbarID"] = guid;
					this.setValue("toolbarID", guid);
				}
			}
				
			if (!retVal || retVal=="undefined")
			{
				retVal = defaultValue;
				this.localStorage[valueName] = defaultValue;
				this.setValue(valueName, defaultValue);
			}
		}
		catch(LCS_336D0C35_8A85_403a_B9D2_65C292C39087_e)
		{
			if (LCS_336D0C35_8A85_403a_B9D2_65C292C39087_g_isDebugOn) alert("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_DataExchageObject.getValue: " + LCS_336D0C35_8A85_403a_B9D2_65C292C39087_e.toString());
		}
		
		return retVal;
	};
	
	// Setting extension storage value.
	this.setValue = function(valueName, valueResult)
	{
		try
		{
			this.localStorage[valueName] = valueResult;
			
			this.communicationDiv.setAttribute("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_valueName", valueName);
			this.communicationDiv.setAttribute("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_valueResult", valueResult);
			var customEvent = document.createEvent('Event');
			customEvent.initEvent('LCS_336D0C35_8A85_403a_B9D2_65C292C39087_msg_SetValue', true, true);
			this.communicationDiv.dispatchEvent(customEvent);
		}
		catch(LCS_336D0C35_8A85_403a_B9D2_65C292C39087_e)
		{
			if (LCS_336D0C35_8A85_403a_B9D2_65C292C39087_g_isDebugOn) alert("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_DataExchageObject.setValue: " + LCS_336D0C35_8A85_403a_B9D2_65C292C39087_e.toString());
		}
	};
}

try
{
	// Notify Content Script about our load.
	var customEvent = document.createEvent('Event');
	customEvent.initEvent('LCS_336D0C35_8A85_403a_B9D2_65C292C39087_msg_ExchangeScriptLoaded', true, true);
	LCS_336D0C35_8A85_403a_B9D2_65C292C39087_g_DataObject.communicationDiv.dispatchEvent(customEvent);
}
catch(LCS_336D0C35_8A85_403a_B9D2_65C292C39087_e)
{
	if (LCS_336D0C35_8A85_403a_B9D2_65C292C39087_g_isDebugOn) alert("LCS_336D0C35_8A85_403a_B9D2_65C292C39087_NotifyContentScript: " + LCS_336D0C35_8A85_403a_B9D2_65C292C39087_e.toString());
}
