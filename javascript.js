function showMeun(clickedBtn) {
	var allNav = document.querySelectorAll("nav");
	var divNav = clickedBtn.querySelector("nav");
	var arrow = clickedBtn.querySelector("img");
	var allArrows = document.querySelectorAll(".icon-arrow-light")

	if (arrow.classList.contains("active")) {
		arrow.classList.remove("active");
	}
	else {
		for (i = 0; i < allArrows.length; i++) {
			allArrows[i].classList.remove("active");
		}
		arrow.classList.add("active");
	}

	if (divNav.style.opacity == 1) {
		divNav.style.opacity = 0;
		return
	}
	else {
		for (i = 0; i < allNav.length; i++) {
			allNav[i].style.opacity = 0;
		}
		divNav.style.opacity = 1;
	}

}