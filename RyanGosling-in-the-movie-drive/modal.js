
// alert('Хай, чипс!');

const span = document.getElementsByClassName("close")[0];

const overlay = document.querySelector('.overlay'),
	  modal = document.querySelector('.modal'),
	  close = document.querySelector('.close'),
	  btn = document.querySelector('#myBtn'),
	  drive = document.querySelector('#drive'),
	  ryan = document.querySelector('#ryan'),
	  film = document.querySelector('#film');

btn.addEventListener('click', () => {
	overlay.style.display = 'block';
	modal.style.display = 'flex';
	drive.style.opacity = '0';
})

close.addEventListener('click', () => {
	modal.style.display = 'none';
	overlay.style.display = 'none';
	if(ryan.style.opacity == 0 && film.style.opacity == 0) {
		drive.style.opacity = '100%';
	}
})

// Дропдовн меню

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}



