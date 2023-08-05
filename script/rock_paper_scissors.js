const score = {
    you: 0,
    bot: 0
}
let enable = true;
let userMove = "";
let computerMove = "";

let playAgainBtn = document.querySelector('.js-play-again-btn');
playAgainBtn.addEventListener('click', () => {
    userMove = "";
    computerMove = "";
    playAgainBtn.classList.remove("visibility");
    enable = true;
    document.querySelector('.js-attack').innerHTML = `Pick a choice`;
    document.querySelector('.js-result').innerHTML = ``;
});

document.querySelectorAll('.js-btn')
    .forEach((button)=>{
        button.addEventListener('click', () => {
            if (enable)
            {
                animation();
                setTimeout(() => {  
                    pickUserMove(button.dataset.index);
                    pickComputerMove();
                    calculationResult();
                    playAgainBtn.classList.add("visibility");
                    enable = false;
                 }, 600);
            }
        });
});

function pickComputerMove()
{
    let randomMove = Math.floor(Math.random() * 100) % 3;
    if (randomMove === 0)
        computerMove = "rock";
    else if (randomMove === 1)
        computerMove = "paper";
    else computerMove = "scissors";
}

function pickUserMove(index)
{
    if (index === "0")
        userMove = "rock";
    else if (index === "1")
        userMove = "paper";
    else userMove = "scissors";
}

function calculationResult()
{
    if (userMove === "rock")
    {
        if (computerMove === "rock")
        {
            printResult("Draw");
        }
        else if (computerMove === "paper")
        {
            score.bot += 1;
            printResult("Bot");
        }
        else if (computerMove === "scissors")
        {
            score.you += 1;
            printResult("You");
        }
    }

    if (userMove === "paper")
    {
        if (computerMove === "rock")
        {
            score.you += 1;
            printResult("You");
        }
        else if (computerMove === "paper")
        {
            printResult("Draw");
        }
        else if (computerMove === "scissors")
        {
            score.bot += 1;
            printResult("Bot");
        }
    }

    if (userMove === "scissors")
    {
        if (computerMove === "rock")
        {
            score.bot += 1;
            printResult("Bot");
        }
        else if (computerMove === "paper")
        {
            score.you += 1;
            printResult("You");
        }
        else if (computerMove === "scissors")
        {
            printResult("Draw");
        }
    }
}

function printResult(result)
{
    document.querySelector('.js-attack').innerHTML = `You <img class="icon-mini" src="./styles/images/${userMove}-emoji.png"> - <img class="icon-mini" src="./styles/images/${computerMove}-emoji.png"> Bot`;
    let resultText = document.querySelector('.js-result');
    if (result === "You")
    {
        resultText.innerHTML = `You win`;
    }
    else if (result === "Bot")
    {
        resultText.innerHTML = `Bot win`;
    }
    else if (result === "Draw") {
        resultText.innerHTML = `Draw`;
    }

    document.querySelector('.js-score-board').innerHTML = `You ${score.you} - Bot ${score.bot}`;
}

function animation()
{
    let rockBtn = document.querySelector('.js-rock-btn');
    let paperBtn = document.querySelector('.js-paper-btn');
    let scissorsBtn = document.querySelector('.js-scissors-btn');
    setTimeout(() => {  
        rockBtn.innerHTML = `<img class="icon" src="./styles/images/paper-emoji.png">`;
        paperBtn.innerHTML = `<img class="icon" src="./styles/images/scissors-emoji.png">`;
        scissorsBtn.innerHTML = `<img class="icon" src="./styles/images/rock-emoji.png">`;
     }, 100);

    setTimeout(() => {  
        rockBtn.innerHTML = `<img class="icon" src="./styles/images/scissors-emoji.png">`;
        paperBtn.innerHTML = `<img class="icon" src="./styles/images/rock-emoji.png">`;
        scissorsBtn.innerHTML = `<img class="icon" src="./styles/images/paper-emoji.png">`;
    }, 200);

    setTimeout(() => {  
        rockBtn.innerHTML = `<img class="icon" src="./styles/images/paper-emoji.png">`;
        paperBtn.innerHTML = `<img class="icon" src="./styles/images/scissors-emoji.png">`;
        scissorsBtn.innerHTML = `<img class="icon" src="./styles/images/rock-emoji.png">`;
    }, 300);

    setTimeout(() => {  
        rockBtn.innerHTML = `<img class="icon" src="./styles/images/scissors-emoji.png">`;
        paperBtn.innerHTML = `<img class="icon" src="./styles/images/rock-emoji.png">`;
        scissorsBtn.innerHTML = `<img class="icon" src="./styles/images/paper-emoji.png">`;
    }, 400);

    setTimeout(() => {  
        rockBtn.innerHTML = `<img class="icon" src="./styles/images/paper-emoji.png">`;
        paperBtn.innerHTML = `<img class="icon" src="./styles/images/scissors-emoji.png">`;
        scissorsBtn.innerHTML = `<img class="icon" src="./styles/images/rock-emoji.png">`;
    }, 500);

    setTimeout(() => {  
        rockBtn.innerHTML = `<img class="icon" src="./styles/images/rock-emoji.png">`;
        paperBtn.innerHTML = `<img class="icon" src="./styles/images/paper-emoji.png">`;
        scissorsBtn.innerHTML = `<img class="icon" src="./styles/images/scissors-emoji.png">`;
    }, 600);


}