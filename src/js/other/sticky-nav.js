// Navbar stay fixed while scrolling
window.onscroll = function() { fixedToTop()};

const header = document.getElementById("myNav");
const sticky = header.offsetTop;

function fixedToTop() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
