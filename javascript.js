function showMeun(clickedBtn) {
	var allNav = document.querySelectorAll("nav");
	var nav = document.getElementById(clickedBtn);
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