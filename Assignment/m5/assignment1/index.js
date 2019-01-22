var quiz = {
	"questions" : [
	{
		"question": "Bootstrap 3 is mobile-first.","option" : [
		{
			text: "true",
			isCorrect: true,
			feedback: "Correct"
		},
		{
			text: "false",
			isCorrect: false,
			feedback: "Incorrect"
		}
		],
	},
	{
		"question": "Which class provides a responsive fixed width container?",
		"option": [
		{
			text: ".container",
			isCorrect: true,
			feedback: "Correct"
		},
		{
			text: ".container-fluid",
			isCorrect: false,
			feedback: "Incorrect"
		}
		],
	},
	{
		"question": "Which class provides a full width container, spanning the entire width of the viewport?",
		"option": [
		{
			text: ".container",
			isCorrect: true,
			feedback: "Correct"
		},
		{
			text: ".container-fixed",
			isCorrect: false,
			feedback: "Incorrect"
		}
		]
	}
	]
}

var i = 0;
var j = 0;
window.onload = function display() {
	document.getElementById('question 1').innerHTML = '<h3>'+quiz.questions[i].question+'</h3>';
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value="option 1" onclick="radioclicked('+i+','+j+')">'+quiz.questions[i].option[j].text+'<br>'
	                                                +'<input type ="radio" name = "q1" value="option 2" onclick="radioclicked('+i+','+j+1+')">'+quiz.questions[i].option[j+1].text+'<br>';

	document.getElementById('question 2').innerHTML = '<h3>'+quiz.questions[i+1].question+'</h3>';
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value="option 1" onclick="radioclicked('+i+1+','+j+')">'+quiz.questions[i+1].option[j].text+'<br>'
	                                                +'<input type ="radio" name = "q2" value="option 2" onclick="radioclicked('+i+1+','+j+1+')">'+quiz.questions[i+1].option[j+1].text+'<br>';
	
	document.getElementById('question 3').innerHTML = '<h3>'+quiz.questions[i+2].question+'</h3>';
	document.getElementById('radio 3').innerHTML = '<input type = "radio" name = "q3" value="option 1" onclick="radioclicked('+i+2+','+j+')">'+quiz.questions[i+2].option[j].text+'<br>'
	                                                +'<input type ="radio" name = "q3" value="option 2" onclick="radioclicked('+i+2+','+j+1+')">'+quiz.questions[i+2].option[j+1].text+'<br>';
};
function radioclicked(i, j) {
	if (quiz.questions[i].option[j].isCorrect) {
		code =''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'+'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
		document.getElementById(i+1).innerHTML = code
	} else {
		code =''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'+'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
		document.getElementById(i+1).innerHTML = code
	}
}
function reset() {
	location.reload();
}
