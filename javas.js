const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const contBtn = document.querySelector(".cont-btn");
const main = document.querySelector(".main");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const quizSection = document.querySelector(".quiz-section");
const tryagainBtn = document.querySelector(".tryagain-btn");
const homeBtn = document.querySelector(".home-btn");
const isChecked = document.querySelector(".isChecked");
const ageGroup = document.querySelector(".ageGroup");
const subjects = document.querySelector(".subjects");
const subjectRadio = document.querySelector(".subjectRadio");

let questions;

startBtn.onclick = () => {
    popupInfo.classList.add('active')
    main.classList.add('active')
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active')
    main.classList.remove('active')
    ageGroup.classList.remove('makeit-visibel');
    subjects.classList.add('makeit-visibel')
    nextCount = 0;
}

isChecked.onclick = () => {
    contBtn.classList.add('active')
}

subjectRadio.onclick = () => {
    contBtn.classList.add('active')
}

let nextCount = 0;
contBtn.onclick = () => {
    if (nextCount === 0) {
        nextCount++;
        var radios = document.getElementsByName('agegroup');
        var radioId;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                radioId = radios[i].id
                console.log(radioId);
                radios[i].checked = false;
                break;
            }
        }

        ageGroup.classList.add('makeit-visibel');
        subjects.classList.remove('makeit-visibel')

        let setSubjectRadio;

        if (radioId === "age10_14") {
            setSubjectRadio = `<div>
            <label for="maths10_14" class="info">
                <input type="radio" name="subjectgroup" id="maths10_14">
                Maths
            </label>
            <label for="sst" class="info">
                <input type="radio" name="subjectgroup" id="sst">
                Social Studies
            </label>
        </div>

        <div>
            <label for="brainGame" class="info">
                <input type="radio" name="subjectgroup" id="brainGame">
                Brain Games
            </label>
            <label for="gs10_18" class="info">
                <input type="radio" name="subjectgroup" id="gs10_18">
                General Knowledge
            </label>
        </div>`
            subjectRadio.innerHTML = setSubjectRadio;
        }
        else if (radioId === "age14_18") {
            setSubjectRadio = `<div>
            <label for="literature" class="info">
                <input type="radio" name="subjectgroup" id="literature">
                Litrature
            </label>
            <label for="brainGame" class="info">
                <input type="radio" name="subjectgroup" id="brainGame">
                Brain Games
            </label>
        </div>

        <div>
            <label for="science" class="info">
                <input type="radio" name="subjectgroup" id="science">
                Science
            </label>
            <label for="gs10_18" class="info">
                <input type="radio" name="subjectgroup" id="gs10_18">
                General Knowledge
            </label>
        </div>`
            subjectRadio.innerHTML = setSubjectRadio;
        }
        else if (radioId === "age18_28") {
            setSubjectRadio = `<div>
            <label for="commerce" class="info">
                <input type="radio" name="subjectgroup" id="commerce">
                Commerce
            </label>
            <label for="brainGame" class="info">
                <input type="radio" name="subjectgroup" id="brainGame">
                Brain Games
            </label>
        </div>

        <div>
            <label for="bio" class="info">
                <input type="radio" name="subjectgroup" id="bio">
                Biology
            </label>
            <label for="gs18_above" class="info">
                <input type="radio" name="subjectgroup" id="gs18_above">
                General Knowledge
            </label>
        </div>`
            subjectRadio.innerHTML = setSubjectRadio;
        }
        else {
            setSubjectRadio = `<div>
            <label for="indianHistory" class="info">
                <input type="radio" name="subjectgroup" id="indianHistory">
                Indian History
            </label>
            <label for="indianEco" class="info">
                <input type="radio" name="subjectgroup" id="indianEco">
                Indian Economy
            </label>
        </div>

        <div>
            <label for="technology" class="info">
                <input type="radio" name="subjectgroup" id="technology">
                Technology
            </label>
            <label for="gs18_above" class="info">
                <input type="radio" name="subjectgroup" id="gs18_above">
                General Knowledge
            </label>
        </div>`
            subjectRadio.innerHTML = setSubjectRadio;
        }

        contBtn.classList.remove('active')
    }
    else {
        var subjectgroup = document.getElementsByName('subjectgroup');
        var subjectradioId;
        for (var i = 0, length = subjectgroup.length; i < length; i++) {
            if (subjectgroup[i].checked) {
                subjectradioId = subjectgroup[i].id
                subjectgroup[i].checked = false;
                break;
            }
        }

        if (subjectradioId === "maths10_14") {
            questions = maths10_14;
        }
        else if (subjectradioId === "sst") {
            questions = sst;
        }
        else if (subjectradioId === "brainGame") {
            questions = brainGame;
        }
        else if (subjectradioId === "gs10_18") {
            questions = gs10_18;
        }
        else if (subjectradioId === "literature") {
            questions = literature;
        }
        else if (subjectradioId === "science") {
            questions = science;
        }
        else if (subjectradioId === "commerce") {
            questions = commerce;
        }
        else if (subjectradioId === "bio") {
            questions = bio;
        }
        else if (subjectradioId === "gs18_above") {
            questions = gs18_above;
        }
        else if (subjectradioId === "indianHistory") {
            questions = indianHistory;
        }
        else if (subjectradioId === "indianEco") {
            questions = indianEco;
        }
        else {
            questions = technology;
        }

        showQuestion(getRandomInt(0, 19));
        questionCounter(1)
        headerScore();
        main.classList.add('makeit-visibel')
        quizSection.classList.remove('makeit-visibel')
        popupInfo.classList.remove('active')
        main.classList.remove('active')
        ageGroup.classList.remove('makeit-visibel');
        subjects.classList.add('makeit-visibel')
        nextCount = 0;
        nextBtn.textContent = "Next";
        document.title = "Quiz Page - MMQ"
    }

}

homeBtn.onclick = () => {
    document.title = "Mind Maze Quiz"
    quizSection.classList.add('makeit-visibel')
    main.classList.remove('makeit-visibel')
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    nextBtn.classList.remove('active');
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
}

tryagainBtn.onclick = () => {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    nextBtn.classList.remove('active');
    nextBtn.textContent = "Next";
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestion(getRandomInt(0, 19));
    questionCounter(questionNumb);
    headerScore();
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
    if (questionCount < 4) {
        questionCount++;
        questionNumb++;
        showQuestion(getRandomInt(0, 19));
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector(".option-list");

let quesIdx;

//getting questions and options from the array
function showQuestion(idx) {
    quesIdx = idx;
    const questionText = document.querySelector(".question-text")
    questionText.textContent = `${questionNumb}. ${questions[idx].ques}`;

    let optionTag = `<div class="option"><span>${questions[idx].options[0]}</span></div>
    <div class="option"><span>${questions[idx].options[1]}</span></div>
    <div class="option"><span>${questions[idx].options[2]}</span></div>
    <div class="option"><span>${questions[idx].options[3]}</span></div>
    `;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}

function optionSelected(ans) {
    let userAns = ans.textContent;
    let correctAns = questions[quesIdx].ans;
    let allOptions = optionList.children.length;

    if (questionCount == 4) {
        nextBtn.textContent = "Result";
    }

    if (userAns == correctAns) {
        ans.classList.add('correct');
        userScore++;
        headerScore();
    }
    else {
        ans.classList.add('incorrect');
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled')
    }

    nextBtn.classList.add('active');
}

function questionCounter(idx) {
    const questionTotal = document.querySelector(".question-total");
    questionTotal.textContent = `${idx} of 5`
}

function headerScore() {
    const headerScoreText = document.querySelector(".header-score");
    headerScoreText.textContent = `Score : ${userScore} of 5`
}

function showResultBox() {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');

    const scoreText = document.querySelector('.score-text');
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');

    scoreText.textContent = `Your score is ${userScore} out of 5`;

    let progressStartValue = -1;
    let progressEndValue = (userScore / 5) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}