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
	 			if (result < 0) { result = 0} else if (result >= results.length - 1) {result = results.length - 1} 
	 			question.innerHTML = results[Math.round(result)];
	 			for (var i = 0; i < buttons.length; i++) {
	 				buttons[i].style.display = "none";
	 			}
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
				for (let j = 0; j < count_; j++) {
					mid_num -= changes;
				}
				for (let a = 0; a < answers[counter].length; a++) {
					let num = mid_num + (changes * a);
					mass[a] = num;
				}
				result += mass[i];
				console.log(result);
			} else {
				let mass_ = [];
				let mid_num = 0;
				for (let l = 0; l < middle; l++) {
					mid_num -= changes;
				}
				for (let q = 0; q < answers[counter].length; q++) {
					if (q != middle) {
						mid_num += changes;
						mass_[q] = mid_num;
						
					} 	else {
						mid_num += changes * 2;
						mass_[q] = mid_num;
					}
				}
				/*for (let q = 0; q < answers[counter].length; q++) {
					if (q != middle) {
						mid_num += changes;
						mass_[q] = mid_num;
						
					} 	else {
						mid_num += changes * 2;
						mass_[q] = mid_num;
					}
				}
				*/
				result += mass_[i];
			    console.log(result);
			}

			counter++;
			initNext(counter, result);
		});
	}
}