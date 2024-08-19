function showMeun(clickedBtn, btnArrow) {
	var allNav = document.querySelectorAll("nav");
	var nav = document.getElementById(clickedBtn);
	var arrow = document.getElementById(btnArrow);
	var allArrows = document.querySelectorAll(".icon-arrow-light");

	if (arrow.classList.contains("active")) {
		arrow.classList.remove("active");

	}
	else {
		for (i = 0; i < allArrows.length; i++) {
			allArrows[i].classList.remove("active");
		}
		arrow.classList.add("active");
	}

	if (nav.style.opacity == 1) {
		nav.style.opacity = 0;
		return
	}
	else {
		for (i = 0; i < allNav.length; i++) {
			allNav[i].style.opacity = 0;
		}
		nav.style.opacity = 1;
	}

}