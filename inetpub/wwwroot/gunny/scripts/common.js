// JavaScript Document
jQuery(document).ready(function(){
	jQuery('.Dangky').bind('mouseover',function(){
		jQuery(this).removeClass('Dangky');
		jQuery(this).addClass('Dangky-o');
	})
	jQuery('.Dangky').bind('mouseout',function(){
		jQuery(this).removeClass('Dangky-o');
		jQuery(this).addClass('Dangky');
	})
	jQuery('.quickReg > a').bind('mouseover',function(){
		jQuery(this).removeClass('quick');
		jQuery(this).addClass('quick-o');
	})
	jQuery('.quickReg > a').bind('mouseout',function(){
		jQuery(this).removeClass('quick-o');
		jQuery(this).addClass('quick');
	})
	if(jQuery("#img").length > 0){
		new FadeGallery(jQuery("#img"),{
			control_event: "mouseover",
			auto_play: true,
			control: jQuery("ul#imgControl"),
			delay: 2
		});
	}
})

function checklogin()
	 {
		var err=0;
		if(document.getElementById("username").value == '')
		{
		  alert('Vui lòng nh?p tên dang nh?p');
		  err++;
		}
		else if(document.getElementById("password").value == '')
		{
		  alert('Vui lòng nh?p tên m?t kh?u');
		 err++;
		}

		if (err == 0)
				 document.frmLogin.submit();
			
			return false;
	 }
