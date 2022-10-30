const quizDB = [
    {
     
      question:  " How many tags are in a regular element?",
        a: "2",
        b: "1",
        c: "3",
        d: "4",
        ans: "ans3"
    } ,
    {
     
        question:  " What does HTML stand for?",
          a: "Hyper Text Markup Language",
          b: "Hot Mail",
          c: "How to Make Lasagna",
          d: "Opening tag has a / in front",
          ans: "ans1"
      } ,
      {
     
        question:  " Which of the following is an example of an empty element?",
          a: "< img / >",
          b: "< img > < / img >",
          c: "< / img>",
          d: "img",
          ans: "ans4"
      } ,
      {
     
        question:  " Where do all items for the same website need to be saved?",
          a: "In the same folder",
          b: "Where ever is fine",
          c: "In different folders",
          d: "In  folders",
          ans: "ans3"
      } ,
];

const question = document.querySelector(".question");
const a = document.querySelector("#option1");
const b = document.querySelector("#option2");
const c = document.querySelector("#option3");
const d = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");

let questioncont = 0;
let score = 0;
const load = () =>{
    question.innerHTML = quizDB[questioncont].question;
    a.innerHTML = quizDB[questioncont].a;
    b.innerHTML = quizDB[questioncont].b;
    c.innerHTML = quizDB[questioncont].c;
    d.innerHTML = quizDB[questioncont].d;
}

load();

const getcheckanswer = ()=>{
    let answer; 
    answers.forEach((curanselem) => {
        if(curanselem.checked){
            answer = curanselem.id;
        }
        
    });
    return answer;     
};

const  deslectall = () =>{
    answers.forEach((curanselem ) => {
        curanselem.checked = false;
    })
};

submit.addEventListener('click' , () => {
      const checkedanswer  = getcheckanswer();


      if(checkedanswer == quizDB[questioncont].ans){
        score++;
      }
      questioncont++;
 
      deslectall();

      if(questioncont < quizDB.length){
        
        load();
      }else{
        showscore.innerHTML = `
        <h3> Your Score ${score}/${quizDB.length} 🌞 </h3> 
        <button class = "btn" onclick = "location.reload() ">New Game<button>
        `;
     
      }
});