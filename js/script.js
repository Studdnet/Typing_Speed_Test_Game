"use strict";

const typingText = document.querySelector(".typing-text p"),
	inputField = document.querySelector(".wrapper .input-field");

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
	let typeChar = inputField.value.split("")[charIndex];
	if (characters[charIndex].innerText === typeChar) {
		console.log('correct');
	} else {
		console.log('wrong');
	}

}

randomParagraph();
inputField.addEventListener("input", initTyping);