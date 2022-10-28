let compusterguess;
let userguessupdate = document.getElementById("textoutput");
let usernumberupdate = document.getElementById("inboxtext");
let userguess = [];
let audio = new Audio("Button.mp3");
let audioc = new Audio("click.mp3");


const init  = () => {
    compusterguess = Math.floor(Math.random() * 100 );
   console.log(compusterguess)
};

document.getElementById("newgamebutton").style.display = "none";
document.getElementById("gamearea").style.display = "none";

   const startgame = () =>{
    document.getElementById("welcomescreen").style.display = "none";
    document.getElementById("gamearea").style.display = "block";    
   };

   const  startnewgame = () => {
    document.getElementById("newgamebutton").style.display = "inline";
    usernumberupdate.setAttribute("disabled" , true);
   };
    const comperguess = () =>{
        audio.play();
         const usernumber =  Number(document.getElementById("inboxtext").value);
         userguess = [...userguess , usernumber];
         document.getElementById("guess").innerHTML = userguess; 

      if(userguess.length < maxguess){
          if(usernumber > compusterguess){
            userguessupdate.innerHTML = "Your Guess no is High 😮 ";
            usernumberupdate.value = "";
        } else if (usernumber < compusterguess){
            userguessupdate.innerHTML = "Your Guess no is low 🙄";
            usernumberupdate.value = "";
        }else{
            userguessupdate.innerHTML = "its Correct 😎 ";
            usernumberupdate.value = "";
            startnewgame();
        }
}else{
    if(usernumber > compusterguess){
        userguessupdate.innerHTML = ` Your Lost 😖 Correct no is ${compusterguess}`;  
        usernumberupdate.value = "";
        startnewgame();
    } else if (usernumber < compusterguess){
        userguessupdate.innerHTML = ` Your Lost 😖 Correct no is ${compusterguess}`; 
        usernumberupdate.value = "";
        startnewgame();
    }else{
        userguessupdate.innerHTML = "its Correct 😎 ";
        usernumberupdate.value = "";
        startnewgame();
    }
}
       
        document.getElementById("attempts").innerHTML = userguess.length;
    
    };
     
   

const easymode = () => {
    audio.play();
  maxguess = 10;
    startgame();
};
const hardmode = () => {
    audio.play();
   maxguess = 5;
    startgame();
};


const newgamebigin = () => {
    audioc.play();
  window.location.reload();

 
};
