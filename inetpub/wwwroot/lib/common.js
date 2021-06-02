jQuery(document).ready(function(){
	
	
	
	
	if(jQuery('#typeRegTopbar').length>0){		

		jQuery('#typeRegTopbar').click(function(){
			var urlsharelink=jQuery(this).attr("href");	
			var addclas = 'QuickReg';
			callSurvey2(urlsharelink,440,addclas);
			return false;
		})
	}
	
})

function callSurvey2(url,size, id){
	
	if(size==undefined){
		size=535;	
	}
	if(id==undefined){
		id='SpamLinkPopup';
	}
	createOverlays("sub_spamlink");	
	
	jQuery("body").append('<div id="sub_spamlink" class="survey_popup '+id+'"><a class="SurveyClose" title="Đóng" href="#">Đóng</a><div class="SurveyContent"><iframe height="410" frameborder="0" width="'+size+'" allowtransparency="1" src='+url+'></iframe> </div></div>');
	jQuery('.SurveyClose').bind('click', function() {
		closeVideo('sub_spamlink');
		jQuery("#sub_spamlink").remove();
			return false;
	});
	jQuery('#overlays').bind('click', function() {
		closeVideo('sub_spamlink');
		jQuery("#sub_spamlink").remove();
			return false;
	});
	return false;
	
}