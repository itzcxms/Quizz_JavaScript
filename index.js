const questionContainer = document.querySelector(".click-event");
questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked")
})

let bonnesReponses = 0;
let nbReponses = 0;

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
    rep_q2.style.background = "red";
    avancementQuizz()
})

btnFaux_q2.addEventListener("click", () => {
    rep_q2.classList.add("show-response");
    rep_q2.style.background = "green";
    bonnesReponses+=1;
    avancementQuizz()
})

function avancementQuizz() {
    nbReponses+=1;
    console.log(nbReponses)
    if (nbReponses === 2) {
        console.log("Quiz terminé")
    }
}
