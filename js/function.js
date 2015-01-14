var iswork = true;
var isart = false;

function changeWork(){
	$('.bg').toggleClass('bgart');
	$('.ctnt_webdev').slideToggle();
	$('.ctnt_artwork').slideToggle();
	isart = !isart;
	if(isart){
		$('.banner_text').find('h5').text('web development');
		$('.banner_text').css({"margin-left":"10vw"});
	}else{
		$('.banner_text').find('h5').text('artwork');
		$('.banner_text').css({"margin-left":"21vw"});}
}

function gotoABT(){
	$('.bg').removeClass('bgart');
	$('.ctnt_webdev').hide();
	$('.ctnt_artwork').hide();
	$('.banner').hide();
	// if(window.innerWidth > 1024){
		// Move Stuff, Moving text as well because the transform permanently changes it
		$('.fb_box').css({"-webkit-transform":"translate(-10vw, 30vw)"});
		$('.blog_box').css({"-webkit-transform":"translate(-20vw, 20vw)"});
		$('.blog_text').css({"-webkit-transform":"translate(0, -10vw)"});
		$('.tumblr_box').css({"-webkit-transform":"translate(-20vw, 0)"});
		$('.tumblr_text').css({"-webkit-transform":"translate(0, -20vw)"});
		$('.abt_box').css({"-webkit-transform":"translate(10vw, 20vw)"});
		$('.abt_text').css({"-webkit-transform":"translate(0, -20vw)"});
		$('.ctnt_abt').show();
		// $('.ctnt_abt').css();
	// }
	iswork = false;
	console.log(iswork);
}

function gotoWork(){
	$('.bg').removeClass('bgart');
	$('.ctnt_webdev').slideToggle();
	$('.ctnt_artwork').hide();
	$('.banner').show();
	// Move ABT
	// if(window.innerWidth > 1024){
	$('.abt_box').css({"-webkit-transform":"translate(0, 0)"});
	$('.blog_box').css({"-webkit-transform":"translate(0, 0)"});
	$('.tumblr_box').css({"-webkit-transform":"translate(0, 0)"});
	$('.fb_box').css({"-webkit-transform":"translate(0, 0)"});
	$('.ctnt_abt').hide();
	// }
	iswork = true;
	console.log(iswork);
}

$(document).ready(function(){
	$('.banner').click(function(){
		changeWork();
	});
	$('.abt_box').click(function(){
		if(iswork){
			gotoABT();
		};
	});
	$('.work_box').click(function(){
		if(!iswork){
			gotoWork();
		};
	});
	$('.work_box').hover(function(){
			$(this).toggleClass('cursorptr');
			$('.work_arrow').toggle();
	});
	$('.abt_box').hover(function(){
			$(this).toggleClass('cursorptr');
			$('.abt_arrow').toggle();
	});
	$('[class*="bg_"').hover(function(){
		var name = $(this).attr('class');
		$('.ctnt_'+name[3]+'_details').toggle();
		$(this).find('.overlay').toggleClass('reveal_overlay');
		$(this).find('.overlay_text').toggleClass('reveal_overlay_text');
	});
	$('.banner').hover(function(){
		$(this).find('.overlay').toggleClass('reveal_overlay');
		$(this).find('.overlay_text').toggleClass('reveal_overlay_text');
		$('.banner_arrow').toggle();
	});

});
