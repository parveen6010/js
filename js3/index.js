const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;
const  updateCounter = () => {
  userchar = charval.value.length;
  totalCount.innerText = userchar;

  remainingCount.innerText = 150-userchar;
};

charval.addEventListener('keyup' , () => updateCounter() );


const copyText = () =>{
  charval.select();  
  charval.setSelectionRange(0,9999);
  navigator.clipboard.writeText(charval.v)
};  