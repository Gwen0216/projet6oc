
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]



let currentIndex = 0; 


function updateSlide() {
	const imageElement = document.getElementById("slideImage");
	const tagLineElement = document.getElementById("tline");
	const dots = document.querySelectorAll(".dot");

	imageElement.src = slides[currentIndex].image;
	
	tagLineElement.innerHTML = slides[currentIndex].tagLine;

	dots.forEach((dot, index) => {
		dot.className = (index === currentIndex) ? 'dot dot_selected' : 'dot';
	});
}



let flecheg = document.getElementById("flecheg");
flecheg.addEventListener("click", () => {
	
	currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	updateSlide();
	
});

let fleched = document.getElementById("fleched");
fleched.addEventListener("click", () => {
	
	currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	updateSlide();


});

document.querySelectorAll(".dot").forEach((dot, index) => {	
	dot.addEventListener("click", () => {
		currentIndex = index;
		updateSlide();
	});
});
