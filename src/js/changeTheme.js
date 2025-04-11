const changeTheme = document.querySelector('#changeTheme')

let Theme

const themesNames = {
	DARK: 'dark',
	LIGHT: 'light'
}

const checkTheme = () => {
	if (changeTheme.checked === true) {
		Theme = themesNames.DARK
		document.body.classList.add(themesNames.DARK)
	} else {
		Theme = themesNames.LIGHT
		document.body.classList.remove(themesNames.DARK)
	}
}

function toggle() {
	setTimeout(() => {
		checkTheme()
		localStorage.setItem('StyleTheme', Theme)
	}, 100)
}

if (localStorage.getItem('StyleTheme')) {
	Theme = localStorage.getItem('StyleTheme')
	if (Theme === themesNames.DARK) {
		toggle()
		changeTheme.checked = true
		console.log(Theme)
	} else {
		changeTheme.checked = false
	}
}

changeTheme.addEventListener('change', toggle)
