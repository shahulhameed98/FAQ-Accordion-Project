const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	const btn = question.querySelector(".question-btn");
	console.log(btn);
	btn.addEventListener("click", () => {
		questions.forEach((item) => {
			// console.log(item);
			if (item !== question) {
				item.classList.remove("show-text");
			}
			// console.log(item);
		});
		question.classList.toggle("show-text");
	});
});
