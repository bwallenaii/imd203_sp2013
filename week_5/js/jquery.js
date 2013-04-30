$(document).ready(function(){ //wait for dom to be ready

	//selects a tags that navigate away within the content class
	//then sets a click event that notifies leaving site
	$("a[href^='http']").click(function(){
		console.log(this);
		$(this).hide();
		return false;//confirm("You are about to leave the site.\r\nDo you want to continue?");
	});

	//set the value of the input box
	$("#box").val("Enter your name");

	$("#box").focus(function(){
		//console.log($("#box").val());
		$("#box").val("");
	});

	$("#box").blur(function(){
		var currentContent = $("#notepad").html();
		var newContent = $("#box").val();
		$("#notepad").html(currentContent + "<p>" + newContent + "</p>\r\n");

		$("p").click(function(){
			$(this).toggleClass("large");
		});
	});

	$("p").click(function(){
		$(this).toggleClass("large");
	});
});