var images = [ /*maak een array aan met de images die ingeladen moeten worden*/
"../img/banner.jpg",
"../img/fashion.jpeg",
"../img/supercar.jpg"
];

var num = 0;

function next() { /*Functie aangemaakt. Deze wordt aangeroepen iedere keer wanneer ik op Next op de pagina klik*/
	var slider = document.getElementById('slider'); /*roep de img genaamd slider aan en maak er een variabele van*/
	num++; 
	if (num >=images.length) { /*als num groter of gelijk is aan 3 dan wordt num weer 0. Zo voorkom je dat je eindeloos next kan drukken zonder dat er afbeeldingen verschijnen.*/
		num = 0;
	}
	slider.src = images[num]; /*Slider src veranderd nu elke keer in wat er in de array staat*/
}

function prev() {
	var slider = document.getElementById('slider'); /*Functie aangemaakt. Deze wordt aangeroepen iedere keer wanneer ik op Next op de pagina klik*/
	num--;
	if (num<0) { /*Als num kleiner is dan 0, veranderd num weer terug naar [2] van de array. Zo voorkom je dat er eindeloos op previous kan drukken zonder dat er afbeeldingen verschijnen.*/
		num = images.length -1;
	}
	slider.src = images[num]; /*Slider src veranderd nu elke keer in wat er in de array staat*/
}