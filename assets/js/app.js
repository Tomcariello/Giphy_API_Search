//create animal array
var searchTerms = ["cat","dog","rabbit","fish","turtle","hawk","hamster","piglet"];

var supplementarySearch = "";

function loadPresetAnimals() {
	$( ".jumbotron" ).html("");
	for (i=0; i < searchTerms.length; i++) {
		drawButtons(searchTerms[i]);
	}
	trackButtons();
}

// Process Form Submittal
$('#submit').on('click', function() {
	var animalToAdd = $("#addAnimal").val();
	drawButtons(animalToAdd);
	trackButtons();
	return false;
});


function drawButtons(itemToPrint) {
	var buttonToPrint = ("<a class='btn btn-primary btn-lg choice' data-value='" + itemToPrint + "'role='button'>" + itemToPrint + "</a>");
	$( "#buttonContainer" ).append( buttonToPrint );
};

function trackButtons() {
	$('.choice').on('click', function(event) {
		
		var animalSelected = $(this).attr('data-value');
		
		$( ".jumbotron" ).html("");

		var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + animalSelected + "+" + supplementarySearch + "&api_key=dc6zaTOxFJmzC";
		
		$.ajax({
			url: giphyUrl,
			 method: "GET"
			})
		.done(function(response){
			console.log(response);
			for (i=0; i < 10; i++) {
				$( ".jumbotron" ).append("<img src='" + response.data[i].images.original_still.url + "'>");
				
				//The line below will print the animated gif
				//$( ".jumbotron" ).append("<img src='" + response.data[i].images.original.url + "'>");
			}
		});
	return;
	});
}


loadPresetAnimals();