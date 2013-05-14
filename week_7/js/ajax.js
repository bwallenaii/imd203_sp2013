$(document).ready(function(){
	var content = $("#content");

	$("#nav a").click(function(){
		var $this = $(this); //sets a jquery object based on what was clicked on
		var href = $this.attr("href"); //gets the href attribute from what was clicked on

		//hide the content div
		content.hide(500, function(){
			//loads the href into the div
			content.load(href, function(){
				//show the content div when content is ready
				content.show(500);
			});
		});
		
		


		return false;
	});
});