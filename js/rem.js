function getWindowWidth() {
    return Math.max( jQuery(window).width(), window.innerWidth);
}

function getWindowHeight() {
    return Math.max( jQuery(window).height(), window.innerHeight);
}



function setHomeHeight()
{
	header_height=getWindowHeight() - 120;  
	if (header_height <540) {header_height=540;} 
	
	
	$("#front #header, #front #header_content").height(header_height);
	
}

setHomeHeight(); 

$('#carousel').carousel({
    pause: "false",
	interval: 4500   
});
 





$(document).ready(function(){

gh=getWindowWidth(); 
	  
if 	(gh >768  )
{  
	$('.eh').equalHeights();
}


$('nav.navbar').affix({
      offset: {
        top: $('#header').height() -100
      }
}); 


 $('#pammTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


			

    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



// Floating label headings for the contact form

    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });


	
	 
			
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})	




// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

  




		
});



 










$(window).resize(function () {
        setHomeHeight();
		gh=getWindowWidth();
		if 	(gh >768 )
{
		$('.eh').equalHeights();
}
});
		
	