//create animal array
var searchTerms = ["cat","dog","rabbit","fish","turtle","hawk","hamster","piglet"];

var supplementarySearch = "";

function loadAnimals() {
	$( ".jumbotron" ).html("");
	drawButtons();
	trackButtons();
}

function drawButtons() {
	$( "#buttonContainer" ).html("");
	
	for (i=0; i < searchTerms.length; i++) {
		buttonToPrint = $('<button>');
		buttonToPrint.addClass('btn btn-primary btn-lg buttonChoice');
		buttonToPrint.attr('data-value', searchTerms[i]);
		buttonToPrint.text(searchTerms[i]);
		$( "#buttonContainer" ).append( buttonToPrint );	
	}	
};

function trackButtons() {
	$('.buttonChoice').on('click', function(event) {
		
		var animalSelected = $(this).attr('data-value');
		$( ".jumbotron" ).html("");
		var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + animalSelected + "+" + supplementarySearch + "&api_key=dc6zaTOxFJmzC";
		
		$.ajax({
			url: giphyUrl,
			 method: "GET"
			})
		.done(function(response){
			currentResult = response;
			console.log(currentResult);
			for (i=0; i < 10; i++) {
				//load static image from API and load animated path into data-alt
				$( ".jumbotron" ).append("<img class='giphyImages' data-alt='" + response.data[i].images.original.url + "' src='" + response.data[i].images.original_still.url + "''>");
			}
		});
	return;
	});
}

$(document).on('click', '.giphyImages', swapImageState);
	
function swapImageState() {
	//swamp data-alt with src to swap animated with still
	var activeImage = $(this).attr('src');
	var altImage = $(this).attr('data-alt');
	$(this).attr('data-alt', activeImage);
	$(this).attr('src', altImage);
}

// Process Form Submittal
$('#submit').on('click', function() {
	var animalToAdd = $("#addAnimal").val();
	searchTerms.push(animalToAdd);
	loadAnimals();
	return false;
});

loadAnimals();