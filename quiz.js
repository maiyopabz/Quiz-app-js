// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ["How many legs does a spider have?", "8"],
    ["What is the name of the toy cowboy in Toy Story?","woody"],
    ["What is the color of an emerald?","green"],
    ["What is something you hit with a hammer?","nail"],
    ["What’s the name of a place you go to see lots of animals","zoo"],
    ["Whose nose grew longer every time he lied?","pinocchio"],
    ["What is the name of the fairy in Peter Pan?","tinkerbell"],
    ["If you freeze water, what do you get?","ice"],
    ["What colors are the stars on the American flag?","white"],
    ["Where does the President of the United States live while in office?","white house"]
];

//2. store the number of question answer correctly.
const correct = []
const incorrect = []
let correctAnswers = 0;

for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question).toLowerCase();

if (response === answer) {
    correctAnswers++;
    correct.push(question);

} else {
    incorrect.push(question);
}


}

function createListItems(arr) {
    let items ='';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}`;
    }
    return items;
}



let html = `
<h1> You got ${correctAnswers} question(s) correct</h1>
<h2> You got these questions right:</h2>
<ol>${ createListItems(correct) }</ol>

<h2>You got these question wrongs:</h2>
<ol>${ createListItems(incorrect) }</ol>
`;
document.querySelector('main').innerHTML=html;
