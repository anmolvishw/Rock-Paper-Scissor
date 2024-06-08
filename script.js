let score = 0;
let comp = 0;

let run = document.querySelectorAll("#score");
let result = document.querySelector("#resulttxt");
let resultbox = document.querySelector("#result");


const value = ["Rock","Paper","Scissor"];

const getCompchoice = () =>{
    const idx = Math.floor(Math.random() * 3);
    return value[idx];
};

const playgame = (userChoice) =>{
    console.log("user choice : ",userChoice);
    const compChoice = getCompchoice();
    console.log("compu choce : ",compChoice);

    if(userChoice == compChoice){
        console.log("Both Same");
        result.innerText = "Draw";
        resultbox.style.backgroundColor = "yellow";
        
    }
   else{
    if((userChoice == "Rock" && compChoice=="Paper") || 
    (userChoice == "Paper" && compChoice=="Scissor") || 
    (userChoice == "Scissor" && compChoice=="Rock")){
        run[1].innerText = ++comp;
        result.innerText = "Computer Win";
        resultbox.style.backgroundColor = "Red";
        console.log("Comp Win");
    }else{
        run[0].innerText = ++score;
        result.innerText = "You Win";
        resultbox.style.backgroundColor = "Green";
        console.log("User Win");
    }
}

};

const choices = document.querySelectorAll(".btimg");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});



// rockbt[0].addEventListener("click",()=>{
//     console.log(`rock button `)
// });

// rockbt[1].addEventListener("click",()=>{
//     console.log(`paper button `)
// });

// rockbt[2].addEventListener("click",()=>{
//     console.log(`scissor button `)
// });
