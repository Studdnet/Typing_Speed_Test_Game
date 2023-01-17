"use strict";

const typingText = document.querySelector(".typing-text p"),
	inputField = document.querySelector(".wrapper .input-field"),
	mistakeTag = document.querySelector(".mistake span"),
	timeTag = document.querySelector(".time span b"),
	wpmTag = document.querySelector(".wpm span b"),
	cpmTag = document.querySelector(".cpm span b");

let charIndex = 0,
	 mistakes = 0,
	 isTyping = 0,
	 timer,
	 maxTime = 60,
	 timeLeft = 60;

function randomParagraph() {
	let randIndex = Math.floor(Math.random() * paragraphs.length);
	paragraphs[randIndex].split("").forEach(span => {
		let spanTag = `<span>${span}</span>`;
		typingText.innerHTML += spanTag;
	});
	document.addEventListener("keydown", () => inputField.focus());
	typingText.addEventListener("click", () => inputField.focus());
}

function initTyping() {
	const characters = typingText.querySelectorAll("span");
	let typedChar = inputField.value.split("")[charIndex];
	if (!isTyping) {
		timer = setInterval(initTimer, 1000);
		isTyping = true;
	}
	if (typedChar == null) {
		charIndex--; 
		if (characters[charIndex].classList.contains("incorrect")) {
			mistakes--;
		}
		characters[charIndex].classList.remove("correct", "incorrect");
	} else {
		if (characters[charIndex].innerText === typedChar) {
			characters[charIndex].classList.add("correct");
		} else {
			mistakes++;
			characters[charIndex].classList.add("incorrect");
		}
		charIndex++;
	}
	characters.forEach(span => span.classList.remove("active"));
	characters[charIndex].classList.add("active");

	mistakeTag.innerText = mistakes; 
}

function initTimer () {
	if (timeLeft > 0) {
		timeLeft--;
		timeTag.innerText = timeLeft; 
	} else {
		clearInterval(timer);
	}
}

randomParagraph();
inputField.addEventListener("input", initTyping);