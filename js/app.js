(function(){

$(document).on("pageInit", function(e, pageId, $page) {
  if(pageId == "page-activityDetail") {
  	// flash
  	var flash = new Swiper('#flash',{
  		pagination : '.swiper-pagination'
  	});
  }
  if(pageId == "page-activityList") {
  	
  }
});

$.init();

})();