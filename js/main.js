window.onload = function() {
	const answers = [
	 ["А", "Б", "В", "Г", "Д"],
	 ["Е", "Ё", "Ж"],
	 ["Й", "К"],
	 ["О", "П", "Р", "С"],
	 ["У", "Ф", "Х", "Ц", "Ч"],
	 ];
	 const questions = [
	 "А",
	 "Б",
	 "В",
	 "Г",
	 "Д"
	 ];
	 const results = [
	 	 "А",
	 	 "Б",
	     "В",
	     "Г",
	     "Д"
	 ];
	 const buttons = document.querySelectorAll(".answer");
	 const question = document.querySelector(".question");
	 var counter = 0;
	 function initNext(counter, result) {
	 		if (questions.length > counter) {
	 			question.innerHTML = questions[counter];
	 			for (let i = 0; i < answers[counter].length; i++) buttons[i].innerHTML = answers[counter][i];
	 			for (let i = 0; i < answers[counter].length; i++) buttons[i].style.display = "block";
	 			for (let i = answers[counter].length; i < buttons.length; i++) buttons[i].style.display = "none";
	 		} else {
	 			alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
	 		}
	 	
	}
	var result = 2;
	initNext(counter, result);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			let changes = 0.3;
			let middle = Math.round(answers[counter].length / 2);
			let count_ = middle - 1;
			if (answers[counter].length % 2 != 0) {
				
				let mass = [];
				let mid_num = 0;
				for (let i = 0; i < count_; i++) {
					mid_num -= changes;
				}
				for (let i = 0; i < answers[counter].length; i++) {
					let num = mid_num + (changes * i);
					mass[i] = num;
				}
				result += mass[i];
				console.log(result);
			} else {
				let mass_ = [];
				let mid_num = 0;
				for (let i = 0; i < middle; i++) {
					mid_num -= changes;
				}
				for (var i = 0; i < answers[counter].length; i++) {
					if (i != count_) {
						mid_num += changes;
						mass_[i] = mid_num;
						
					} 	else {
					
						mid_num += changes * 2;
						mass_[i] = mid_num;
					}
				}
				result += mass_[i];
				console.log(result);
			}
			counter++;
			initNext(counter, result);
		});
	}
}