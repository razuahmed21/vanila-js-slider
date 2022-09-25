let sliderPosition = 0;
const slides = document.getElementsByClassName("single-slider");
const totalSlides = slides.length;

document.getElementById("prev").addEventListener("click", movePrevious);
document.getElementById("next").addEventListener("click", moveNext);

let defaultText = (document.getElementById("one").textContent =
	"I believe in God");

function text() {
	let firstSlideText = (document.getElementById("one").textContent =
		"I believe in God");
	let seconfSlideText = (document.getElementById("two").textContent =
		"Only I spell it Nature");
	let thirdSlideText = (document.getElementById("three").textContent =
		"Choose only one master");
}
function hideshowSildes() {
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("slider-visible");
		slides[i].classList.add("slider-hidden");
	}
}

function movePrevious() {
	hideshowSildes();
	text();
	if (sliderPosition === 0) {
		sliderPosition = totalSlides - 1;
	} else {
		sliderPosition--;
	}
	slides[sliderPosition].classList.add("slider-visible");
}

function moveNext() {
	hideshowSildes();
	text();
	if (sliderPosition === totalSlides - 1) {
		sliderPosition = 0;
	} else {
		sliderPosition++;
	}
	slides[sliderPosition].classList.add("slider-visible");
}
