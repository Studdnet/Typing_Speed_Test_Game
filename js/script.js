"use strict";

const typingText = document.querySelector(".typing-text p"),
	inputField = document.querySelector(".wrapper .input-field"),
	mistakeTag = document.querySelector(".mistake"); 

let charIndex = 0;

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
	if (typedChar == null) {
		charIndex--; 
		characters[charIndex].classList.remove("correct", "incorrect");
	} else {
		if (characters[charIndex].innerText === typedChar) {
			characters[charIndex].classList.add("correct");
		} else {
			characters[charIndex].classList.add("incorrect");
		}
		charIndex++;
	}
	characters.forEach(span => span.classList.remove("active"));
	characters[charIndex].classList.add("active");
}

randomParagraph();
inputField.addEventListener("input", initTyping);