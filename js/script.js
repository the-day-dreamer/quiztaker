const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");
const answers = Array.from(document.getElementsByClassName("answer"));
const submitBtn = document.getElementById("submit-btn");
const submitBtn1 = document.getElementById("submit-btn1");
const showResult = document.getElementById("show-result");
const playAgain = document.getElementById("play-again");
const clear = document.getElementById("clear");

 let quesDB = [
    {question:"Q1.What is the full form of HTML?",
    a:"Hyper Text Markup Language",
    b:"Hello To Machine Learning",
    c:"Hyper To Markup Language",
    d:"None of these",
    ans:"ans1"},
    {question:"Q2.What is the full form of CSS?",
    a:"Central Style Sheet",
    b:"Cascading Style Sheet",
    c:"Central Style Section",
    d:"None of these",
    ans:"ans2"},
    {question:"Q3.What is the full form of JS?",
    a:"JavaSheets",
    b:"JordanShoes",
    c:"JavaScript",
    d:"None of these",
    ans:"ans3"},
    {question:"Q4.Which HTML tag is used to make an unordered list?",
    a:"<ol>",
    b:"<ul>",
    c:"<p>",
    d:"None of these",
    ans:"ans2"}
    ]
// let ques = Array.from(quesDB);
let questionCounter = 0 ;
let score = 0;
function loadQuestion(){
    question.innerText = quesDB[questionCounter].question
}
function loadOption(){
    option1.innerText = quesDB[questionCounter].a;
    option2.innerText = quesDB[questionCounter].b;
    option3.innerText = quesDB[questionCounter].c;
    option4.innerText = quesDB[questionCounter].d;


}
loadQuestion();
loadOption();
arrowRight.addEventListener("click",()=>{
    questionCounter++;
    loadQuestion();
    loadOption();

  
})
arrowLeft.addEventListener("click",()=>{
    questionCounter--;
    loadQuestion();
    loadOption();

   
})
function checkOption(){
    let p;
    answers.forEach((e)=>{
        if(e.checked == true){
            p =  e.id;
            // console.log(e.id);
        }
    })
    return p;
}
submitBtn.addEventListener("click",()=>{
    let checkedAnswer = checkOption();
    console.log(checkedAnswer);
    if(checkedAnswer === quesDB[questionCounter].ans){
        score++;
    
    }
    console.log(score);
    questionCounter++;
    loadQuestion();
    loadOption();
    deselectAll();

})
// checkOption();
function deselectAll(){
    answers.forEach((e)=>{
        e.checked = false;
    })
}
submitBtn1.addEventListener("click",()=>{
    showResult.innerHTML = `
    <div>you scored ${score} out of ${quesDB.length}</div>
    <button class = "play__again" id = "play-again" onclick = "location.reload()">play again</button>`;
    showResult.classList.remove("abc");
    deselectAll();

})
clear.addEventListener("click",deselectAll);





