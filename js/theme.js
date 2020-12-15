var switcher = document.getElementById('chb_theme');

switcher.onclick = function() {
	if (switcher.checked) {
		lightTheme();
	} else {
		darkTheme();
	}
}

function darkTheme() {
	switcher.checked = false;
	document.body.removeAttribute('theme');	
}

function lightTheme() {
	switcher.checked = true;
	document.body.setAttribute('theme', 'light');
}