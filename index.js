//my qestions
let question = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question2 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question3 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question4 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question5 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question6 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question7 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question8 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question9 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
let question10 = {
	title: "what block is unbreakeable",
	answers: ["Bedrock", "obsidian", "sand", "magma"],
};
//gets buttons for answers
let questionEl = document.querySelector(".question");
let btnEl1 = document.querySelector("#btn-1");
let btnEl2 = document.querySelector("#btn-2");
let btnEl3 = document.querySelector("#btn-3");
let btnEl4 = document.querySelector("#btn-4");

// starts first qestion
function start() {
	questionEl.textContent = question.title;
	btnEl1.textContent = question.answers[0];
	btnEl2.textContent = question.answers[1];
	btnEl3.textContent = question.answers[2];
	btnEl4.textContent = question.answers[3];
}
console.log(btnEl1);
// score
score = 0;

// see if btn has been clicked
questionPersonIsOn = 0;
isBtn1Clicked = false;
isBtn2Clicked = false;
isBtn3Clicked = false;
isBtn4Clicked = false;

btnEl1.addEventListener("click", () => {
	Btn1True();
});
btnEl1.addEventListener("click", () => {
	Btn1True();
});
btnEl1.addEventListener("click", () => {
	Btn1True();
});
btnEl1.addEventListener("click", () => {
	Btn1True();
});

function Btn1True() {
	isBtn1Clicked = true;
	whatQestionIsit();
}
function whatQestionIsit() {
	if ((questionPersonIsOn = 0)) {
		IsQ1Correct();
	} else if ((questionPersonIsOn = 1)) {
		IsQ2Correct();
	}
}

function IsQ1Correct() {
	if (isBtn1Clicked && questionPersonIsOn == 0) {
		score++;
		question2fun();
		isBtn1Clicked = false;
	} else {
		question2fun();
		isBtn1Clicked = false;
	}
}
function question2fun() {
	questionEl.textContent = question2.title;
	btnEl1.textContent = question2.answers[1];
	btnEl2.textContent = question2.answers[0];
	btnEl3.textContent = question2.answers[3];
	btnEl4.textContent = question2.answers[2];
}
