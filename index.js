const questionContainer = document.querySelector(".click-event");
questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked")
})

let bonnesReponses = 0;
let nbReponses = 0;

function avancementQuizz() {
    nbReponses+=1;
    console.log(nbReponses)
    if (nbReponses === 10) {
        document.querySelector("#score").innerHTML = `
    <h3>Vous avez répondu correctement à ${bonnesReponses} questions sur 10</h3>`;
    }
}

// Question 1
const btnVrai_q1 = document.querySelector("#q1 > .btn-vrai");
const btnFaux_q1 = document.querySelector("#q1 > .btn-faux");
const rep_q1 = document.querySelector("#q1 > p");

btnVrai_q1.addEventListener("click", () => {
    rep_q1.classList.add("show-response");
    rep_q1.style.background = "red";
    avancementQuizz()
})

btnFaux_q1.addEventListener("click", () => {
    rep_q1.classList.add("show-response");
    rep_q1.style.background = "green";
    bonnesReponses+=1;
    avancementQuizz()
})

// Question 2
const btnVrai_q2 = document.querySelector("#q2 > .btn-vrai");
const btnFaux_q2 = document.querySelector("#q2 > .btn-faux");
const rep_q2 = document.querySelector("#q2 > p");

btnVrai_q2.addEventListener("click", () => {
    rep_q2.classList.add("show-response");
    rep_q2.style.background = "green";
    avancementQuizz();
    bonnesReponses += 1;
})

btnFaux_q2.addEventListener("click", () => {
    rep_q2.classList.add("show-response");
    rep_q2.style.background = "red";
    avancementQuizz();
})

// Question 3
const btnVrai_q3 = document.querySelector("#q3 > .btn-vrai");
const btnFaux_q3 = document.querySelector("#q3 > .btn-faux");
const rep_q3 = document.querySelector("#q3 > p");

btnVrai_q3.addEventListener("click", () => {
    rep_q3.classList.add("show-response");
    rep_q3.style.background = "red";
    avancementQuizz();
})

btnFaux_q3.addEventListener("click", () => {
    rep_q3.classList.add("show-response");
    rep_q3.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})

// Question 4
const btnVrai_q4 = document.querySelector("#q4 > .btn-vrai");
const btnFaux_q4 = document.querySelector("#q4 > .btn-faux");
const rep_q4 = document.querySelector("#q4 > p");

btnVrai_q4.addEventListener("click", () => {
    rep_q4.classList.add("show-response");
    rep_q4.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})

btnFaux_q4.addEventListener("click", () => {
    rep_q4.classList.add("show-response");
    rep_q4.style.background = "red";
    avancementQuizz();
})

// Question 5
const btnVrai_q5 = document.querySelector("#q5 > .btn-vrai");
const btnFaux_q5 = document.querySelector("#q5 > .btn-faux");
const rep_q5 = document.querySelector("#q5 > p");

btnVrai_q5.addEventListener("click", () => {
    rep_q5.classList.add("show-response");
    rep_q5.style.background = "red";
    avancementQuizz();
})

btnFaux_q5.addEventListener("click", () => {
    rep_q5.classList.add("show-response");
    rep_q5.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})

// Question 6
const btnVrai_q6 = document.querySelector("#q6 > .btn-vrai");
const btnFaux_q6 = document.querySelector("#q6 > .btn-faux");
const rep_q6 = document.querySelector("#q6 > p");

btnVrai_q6.addEventListener("click", () => {
    rep_q6.classList.add("show-response");
    rep_q6.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})

btnFaux_q6.addEventListener("click", () => {
    rep_q6.classList.add("show-response");
    rep_q6.style.background = "red";
    avancementQuizz();
})

// Question 7
const btnVrai_q7 = document.querySelector("#q7 > .btn-vrai");
const btnFaux_q7 = document.querySelector("#q7 > .btn-faux");
const rep_q7 = document.querySelector("#q7 > p");

btnVrai_q7.addEventListener("click", () => {
    rep_q7.classList.add("show-response");
    rep_q7.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})

btnFaux_q7.addEventListener("click", () => {
    rep_q7.classList.add("show-response");
    rep_q7.style.background = "red";
    avancementQuizz();
})

// Question 8
const btnVrai_q8 = document.querySelector("#q8 > .btn-vrai");
const btnFaux_q8 = document.querySelector("#q8 > .btn-faux");
const rep_q8 = document.querySelector("#q8 > p");

btnVrai_q8.addEventListener("click", () => {
    rep_q8.classList.add("show-response");
    rep_q8.style.background = "green";
    avancementQuizz();
    bonnesReponses += 1;
})

btnFaux_q8.addEventListener("click", () => {
    rep_q8.classList.add("show-response");
    rep_q8.style.background = "red";
    avancementQuizz();
})

// Question 9
const btnVrai_q9 = document.querySelector("#q9 > .btn-vrai");
const btnFaux_q9 = document.querySelector("#q9 > .btn-faux");
const rep_q9 = document.querySelector("#q9 > p");

btnVrai_q9.addEventListener("click", () => {
    rep_q9.classList.add("show-response");
    rep_q9.style.background = "red";
    avancementQuizz();
})

btnFaux_q9.addEventListener("click", () => {
    rep_q9.classList.add("show-response");
    rep_q9.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})

// Question 10
const btnVrai_q10 = document.querySelector("#q10 > .btn-vrai");
const btnFaux_q10 = document.querySelector("#q10 > .btn-faux");
const rep_q10 = document.querySelector("#q10 > p");

btnVrai_q10.addEventListener("click", () => {
    rep_q10.classList.add("show-response");
    rep_q10.style.background = "red";
    avancementQuizz();
})

btnFaux_q10.addEventListener("click", () => {
    rep_q10.classList.add("show-response");
    rep_q10.style.background = "green";
    bonnesReponses += 1;
    avancementQuizz();
})
