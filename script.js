let userScore = 0;
let compScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const userScore_span = document.querySelector('#userscore');
const compScore_span = document.querySelector('#compscore');
const result_span = document.querySelector('.result h2');
const finalResult = document.querySelector('#final-result');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const getRandomNumber = Math.floor(Math.random() * 3);
    return choices[getRandomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissor"
}
function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_span.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}`;
    finalResult.innerHTML = "You Win..."
    finalResult.style.color = "green";
}

function lost(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_span.innerHTML = `${convertToWord(user)}${smallUserWord} lost to ${convertToWord(comp)}${smallCompWord}`;
    finalResult.innerHTML = "You Lose..."
    finalResult.style.color = "red";
}
function draw(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_span.innerHTML = `${convertToWord(user)}${smallUserWord} Equals ${convertToWord(comp)}${smallCompWord}`;
    finalResult.innerHTML = "Its Drawww..."
    finalResult.style.color = "blue";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }

}

rockBtn.addEventListener('click', function () {
    game("r");
})
paperBtn.addEventListener('click', function () {
    game("p");
})
scissorBtn.addEventListener('click', function () {
    game("s");
})