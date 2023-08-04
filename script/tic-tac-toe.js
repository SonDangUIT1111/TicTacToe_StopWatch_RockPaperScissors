let board = [[0,0,0],[0,0,0],[0,0,0]];
let time = 0;
let check = false;
const result = {
    you: 0,
    computer: 0,
    draw: 0
}

document.querySelector('.js-play-again-btn').addEventListener('click',() => {
    document.querySelectorAll('.js-cell-btn')
    .forEach((checkButton)=>{
        checkButton.innerHTML = ``;
        checkButton.classList.remove("check-img-animation-draw");
        checkButton.classList.remove("check-img-animation");
    });
    board = [[0,0,0],[0,0,0],[0,0,0]];
    time = 0;
    check = false;
    document.querySelector('.js-play-again-btn').classList.remove("visibility");
    document.querySelector('.js-result-of-game').innerHTML = '.';
});

document.querySelectorAll('.js-cell-btn')
    .forEach((checkButton)=>{
        checkButton.addEventListener('click', () => {
            if (!check)
            {
                if (board[checkButton.dataset.index[0]][checkButton.dataset.index[1]] === 0 )
                {
                    checkButton.innerHTML = `<img src="./styles/images/x.png" class="check-img">`;
                    checkPoint(checkButton.dataset.index,1);
                    printResult();
                    if (time < 4)
                    {
                        if (!check)
                        {
                            let computerMove = computerPlay();
                            checkPoint(computerMove,2);
                            drawComputerMove(computerMove);
                            printResult();
                        }
                    }
                    else if (time === 4)
                    {
                        printResult();
                        if (!check)
                        {
                            drawLineDraw();
                            document.querySelector('.js-result-of-game').innerHTML = 'Draw';
                            document.querySelector('.js-play-again-btn').classList.add("visibility");
                        }
                    }
                    time += 1;
                }
            }
        });
    });

function printResult()
{
    let value = checkResult();
    if (value === 1)
    {
        check = true;
        document.querySelector('.js-result-of-game').innerHTML = 'You win';
        document.querySelector('.point').innerHTML = `You ${result.you} - Bot ${result.computer}`;
        document.querySelector('.js-play-again-btn').classList.add("visibility");
    }
    else if (value === 2)
    {
        check = true;
        document.querySelector('.js-result-of-game').innerHTML = 'Bot win';
        document.querySelector('.point').innerHTML = `You ${result.you} - Bot ${result.computer}`;
        document.querySelector('.js-play-again-btn').classList.add("visibility");
    }
}


function drawComputerMove(index)
{
    document.querySelectorAll('.js-cell-btn')
    .forEach((checkButton)=>{
        if (checkButton.dataset.index[0] === index[0] && checkButton.dataset.index[1] === index[1] )
        {
            checkButton.innerHTML = `<img src="./styles/images/o.png" class="check-img">`;
        } 
    });
}

function computerPlay()
{
    let result = "";
    while (1)
    {
        let row = Math.floor(Math.random() * 100) % 3;
        let column = Math.floor(Math.random() * 100) % 3;
        if (board[row][column] === 0 )
        {
            result = row + "" + column;
            break;
        }
    }
    return result;
}


function checkPoint(index,role)
{
    board[index[0]][index[1]] = role;
}

function checkResult()
{
    //check three row 
    for (let i = 0;i < 3; i++)
    {
        for (let j = 0; j < 1; j++)
        {
            if (board[i][j] === board[i][j+1] && board[i][j+1] === board[i][j+2] && board[i][j] !== 0)
            {
                let index1 = "" + i + j;
                let index2 = "" + i + JSON.parse(j+1);
                let index3 = "" + i +JSON.parse(j+2);
                drawLineWin(index1,index2,index3);
                if (board[i][j] === 1)
                {
                    result.you += 1;
                    return 1;
                }
                else if (board[i][j] === 2)
                {
                    result.computer += 1;
                    return 2;
                }
            }
        }
    }
    //check three column
    for (let i = 0;i < 3; i++)
    {
        for (let j = 0; j < 1; j++)
        {
            if (board[j][i] === board[j+1][i] && board[j+1][i] === board[j+2][i] && board[j][i] !== 0)
            {
                let index1 = "" + j + i;
                let index2 = "" + JSON.parse(j+1) + i;
                let index3 = "" + JSON.parse(j+2) + i;
                drawLineWin(index1,index2,index3);
                if (board[j][i] === 1)
                {
                    result.you += 1;
                    return 1;
                }
                else if (board[j][i] === 2)
                {
                    result.computer += 1;
                    return 2;
                }
            }
        }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0)
    {
        let index1 = "00";
        let index2 = "11";
        let index3 = "22";
        drawLineWin(index1,index2,index3);
        if (board[1][1] === 1)
        {
            result.you += 1;
            return 1;
        }
        else if (board[1][1] === 2)
        {
            result.computer += 1;
            return 2;
        }
    }
    else if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== 0)
    {
        let index1 = "20";
        let index2 = "11";
        let index3 = "02";
        drawLineWin(index1,index2,index3);
        if (board[1][1] === 1)
        {
            result.you += 1;
            return 1;
        }
        else if (board[1][1] === 2)
        {
            result.computer += 1;
            return 2;
        }
    }
    return 0;
}

function drawLineWin(index1, index2, index3)
{
    document.querySelectorAll('.js-cell-btn')
        .forEach((button)=>{
            if (button.dataset.index === index1 )
            {
                button.classList.add("check-img-animation");
            }
        });

        setTimeout(() => {  
            document.querySelectorAll('.js-cell-btn')
            .forEach((button)=>{
            if (button.dataset.index === index2 )
            {
                button.classList.add("check-img-animation");
            }
        });
         }, 100);

        setTimeout(() => {  
            document.querySelectorAll('.js-cell-btn')
            .forEach((button)=>{
            if ( button.dataset.index === index3)
            {
                button.classList.add("check-img-animation");
            }
        });
         }, 200);
}

function drawLineDraw()
{
    document.querySelectorAll('.js-cell-btn')
        .forEach((button)=>{
            button.classList.add("check-img-animation-draw");
        });
}

