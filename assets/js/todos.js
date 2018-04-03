//Toggle the css class "completed" in all the li's
$("ul").on("click", "li", function(e) {
    $(this).toggleClass("completed-js");
});

//fade out and remove the lis when click in the X
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

//adding the functionality to the input
$("input[type='text'").keypress(function(e){
	if(e.which === 13) {
		//extracting the text from the input
		var textInput = $(this).val();
		$(this).val("");
		//append the text from the input to a new li inside the ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + textInput + "</li>");
	}
});

//functionality to hide and unhide the input form
$("i.fa-edit").on("click", function(){
	$("input[type='text'").fadeToggle();
});
