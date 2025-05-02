import dinoDead from '../images/dino/dino-dead.png'
import dinoJump from '../images/dino/dino-jump.png'
import dinoRun1 from '../images/dino/dino-run1.png'
import dinoRun2 from '../images/dino/dino-run2.png'
import dinoStand from '../images/dino/dino.png'

import cactus1Src from '../images/dino/cactus1.png'
import cactus2Src from '../images/dino/cactus2.png'
import cactus3Src from '../images/dino/cactus3.png'
import groundSrc from '../images/dino/ground.png'

const startGame = document.querySelector('.dino__btn')
const result = document.querySelector('.dino__result')

let board = document.getElementById('dino-board')
let context = board.getContext('2d')

let boardWidth, boardHeight, scale
function setBoardSize() {
	const windowWidth = window.innerWidth
	if (windowWidth >= 1090) {
		boardWidth = 600
		boardHeight = 200
	} else if (windowWidth >= 480) {
		boardWidth = 280
		boardHeight = 140
	}
	scale = boardWidth / 600

	board.width = boardWidth
	board.height = boardHeight
}
setBoardSize()

window.addEventListener('resize', () => {
	setBoardSize()
	initDino()
	context.clearRect(0, 0, board.width, board.height)
	drawGround()
	drawDino(dino)
})

let dinoWidth = 44 * scale
let dinoHeight = 47 * scale
let dinoX = 50 * scale
let dinoY = boardHeight - dinoHeight

let dino

let cactusArray = []

let cactus1Width = 15 * scale
let cactus2Width = 35 * scale
let cactus3Width = 50 * scale
let cactusHeight = 35 * scale
let cactusX = boardWidth
let cactusY = boardHeight - cactusHeight

let cactus1Img = new Image()
cactus1Img.src = cactus1Src
let cactus2Img = new Image()
cactus2Img.src = cactus2Src
let cactus3Img = new Image()
cactus3Img.src = cactus3Src

let velocityX = -6 * scale
let velocityY = 0
let gravity = 0.4 * scale
let groundY = boardHeight - dinoHeight

let score = 0
let gameOver = false
let cactusIntervalId = null

const dinoRun1Img = new Image()
dinoRun1Img.src = dinoRun1
const dinoRun2Img = new Image()
dinoRun2Img.src = dinoRun2
const dinoJumpImg = new Image()
dinoJumpImg.src = dinoJump
const dinoDeadImg = new Image()
dinoDeadImg.src = dinoDead
const dinoStandImg = new Image()
dinoStandImg.src = dinoStand

let groundX = 0
let groundSpeed = 6 * scale

const groundImg = new Image()
groundImg.src = groundSrc

function initDino() {
	dinoWidth = 44 * scale
	dinoHeight = 47 * scale
	dinoX = 50 * scale
	dinoY = boardHeight - dinoHeight
	groundY = boardHeight - dinoHeight
	cactusX = boardWidth
	cactusY = boardHeight - cactusHeight

	dino = {
		x: dinoX,
		y: groundY,
		width: dinoWidth,
		height: dinoHeight,
		ySpeed: 0,
		isJumping: false,
		isDead: false,
		frame: 0
	}
	velocityY = 0
}

function drawDino(dino) {
	let img

	if (dino.isDead) {
		img = dinoDeadImg
	} else if (dino.isJumping) {
		img = dinoJumpImg
	} else if (dino.frame === 1) {
		img = dinoRun1Img
	} else if (dino.frame === 2) {
		img = dinoRun2Img
	} else {
		img = dinoStandImg
	}

	context.drawImage(img, dino.x, dino.y, dino.width, dino.height)
}

function moveDino(e) {
	if (e.code === 'Space' && !dino.isJumping && !gameOver) {
		velocityY = -10 * scale
		dino.isJumping = true
	}
}

function placeCactus() {
	let cactus = {
		img: null,
		x: boardWidth,
		y: boardHeight - cactusHeight,
		width: null,
		height: cactusHeight
	}

	let chance = Math.random()
	if (chance > 0.9) {
		cactus.img = cactus3Img
		cactus.width = cactus3Width
	} else if (chance > 0.7) {
		cactus.img = cactus2Img
		cactus.width = cactus2Width
	} else if (chance > 0.3) {
		cactus.img = cactus1Img
		cactus.width = cactus1Width
	} else {
		return
	}

	cactusArray.push(cactus)
	if (cactusArray.length > 5) cactusArray.shift()
}

function detectCollision(dino, cactus) {
	return (
		dino.x < cactus.x + cactus.width &&
		dino.x + dino.width > cactus.x &&
		dino.y < cactus.y + cactus.height &&
		dino.y + dino.height > cactus.y
	)
}

function drawGround() {
	let groundHeight = 20 * scale
	groundX -= groundSpeed
	if (groundX <= -boardWidth) groundX = 0
	context.drawImage(
		groundImg,
		groundX,
		boardHeight - groundHeight,
		boardWidth,
		groundHeight
	)
	context.drawImage(
		groundImg,
		groundX + boardWidth,
		boardHeight - groundHeight,
		boardWidth,
		groundHeight
	)
}

function update() {
	if (gameOver) return
	requestAnimationFrame(update)
	context.clearRect(0, 0, board.width, board.height)
	drawGround()

	velocityY += gravity
	dino.y += velocityY
	if (dino.y > groundY) {
		dino.y = groundY
		velocityY = 0
		dino.isJumping = false
	}

	dino.frame = score % 20 < 10 ? 1 : 2
	drawDino(dino)

	for (let cactus of cactusArray) {
		cactus.x += velocityX
		context.drawImage(
			cactus.img,
			cactus.x,
			cactus.y,
			cactus.width,
			cactus.height
		)
		if (detectCollision(dino, cactus)) {
			gameOver = true
			dino.isDead = true
			drawDino(dino)
			startGame.disabled = false
			startGame.textContent = 'Перезапустити'
			clearInterval(cactusIntervalId)
			return
		}
	}

	score++
	result.textContent = `Результат: ${score}`
}

function handleKeydown(e) {
	if (gameOver) return
	if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return
	if (e.code === 'Space') {
		e.preventDefault()
		moveDino(e)
	}
}

function resetGame() {
	score = 0
	gameOver = false
	cactusArray = []
	initDino()
	startGame.disabled = true
	startGame.textContent = 'Гра триває...'
	result.textContent = 'Результат: 0'
	context.clearRect(0, 0, board.width, board.height)
	cactusIntervalId = setInterval(placeCactus, 1000)
	requestAnimationFrame(update)
	document.addEventListener('keydown', handleKeydown)
}

startGame.addEventListener('click', resetGame)

window.addEventListener('resize', () => {
	setBoardSize()
	initDino()
})

window.onload = () => {
	initDino()
	context.clearRect(0, 0, board.width, board.height)
	drawGround()
	drawDino(dino)
	result.textContent = 'Результат: 0'
}
