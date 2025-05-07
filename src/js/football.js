document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.football__place')
	const ball = document.querySelector('.football__ball')
	const cones = document.querySelectorAll('.football__cone')
	const gate = document.querySelector('.football__gate')
	const startButton = document.querySelector('.football__button-start')
	const startOverlay = document.querySelector('.football__start')
	const countDisplay = document.querySelector('.football__count')
	const countNumber = document.querySelector('.football__count-number')

	let isBallFrozen = true
	let targetX = 0
	let targetY = 0
	let ballX = 0
	let ballY = 0
	let animationFrame
	let score = 0
	const resetBallPosition = () => {
		targetX = 92
		targetY = 85
		ballX = targetX
		ballY = targetY
		ball.style.left = `${ballX}px`
		ball.style.top = `${ballY}px`
	}

	const isCollision = (ball, element) => {
		const ballRect = ball.getBoundingClientRect()
		const elementRect = element.getBoundingClientRect()

		return !(
			ballRect.right < elementRect.left ||
			ballRect.left > elementRect.right ||
			ballRect.bottom < elementRect.top ||
			ballRect.top > elementRect.bottom
		)
	}

	const handleCollision = () => {
		isBallFrozen = true
		startOverlay.style.display = 'flex'
		startButton.textContent = 'Перезапустити'
		resetBallPosition()
	}

	const handleWin = () => {
		isBallFrozen = true
		startOverlay.style.display = 'flex'
		startButton.textContent = 'Ви Виграли!'
		score += 1
		countNumber.textContent = score
		resetBallPosition()
	}

	startButton.addEventListener('click', () => {
		startOverlay.style.display = 'none'
		isBallFrozen = false
		startButton.textContent = 'Гра триває'
		countDisplay.style.visibility = 'visible'
		resetBallPosition()
		updateBallPosition()
	})

	const updateBallPosition = () => {
		ballX += (targetX - ballX) * 0.1
		ballY += (targetY - ballY) * 0.1

		ball.style.left = `${ballX}px`
		ball.style.top = `${ballY}px`

		cones.forEach(cone => {
			if (isCollision(ball, cone)) {
				handleCollision()
				return
			}
		})

		if (isCollision(ball, gate)) {
			handleWin()
			return
		}

		if (!isBallFrozen) {
			animationFrame = requestAnimationFrame(updateBallPosition)
		}
	}

	container.addEventListener('mousemove', event => {
		if (isBallFrozen) return

		const rect = container.getBoundingClientRect()
		targetX = event.clientX - rect.left - ball.offsetWidth / 2
		targetY = event.clientY - rect.top - ball.offsetHeight / 2

		targetX = Math.max(0, Math.min(targetX, rect.width - ball.offsetWidth))
		targetY = Math.max(0, Math.min(targetY, rect.height - ball.offsetHeight))
	})

	container.addEventListener('mouseleave', () => {
		if (!isBallFrozen) {
			resetBallPosition()
			isBallFrozen = true
		}
	})

	resetBallPosition()
})
