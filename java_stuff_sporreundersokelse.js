// Henter elementer
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");

// Array med spørsmål
var quiz = [
    { sporsmaal: "Det er lov med anannas på Pizza",
        alternativer: ["Enig", "Uenig"],
        fasit: "Enig"},
    { sporsmaal: "Italiensk Pizza er bedre enn Amerikansk",
        alternativer: ["Enig", "Uenig"],
        fasit: "Enig"},
    { sporsmaal: "Sjokoladepizza var en god ide",
        alternativer: ["Enig", "Uenig"],
        fasit: "Enig"},
    { sporsmaal: "Det er rart å spise pizza med bare ost på",
        alternativer: ["Enig", "Uenig"],
        fasit: "Enig"}
];

// Skriver spørsmålene til nettsiden
for (let i = 0; i < quiz.length; i++){
    // Lager et <div>-element til hvert spørsmål
    let sporsmaalEl = document.createElement("div");
    // Gir <div>-elementet klassen checkboxradio
    sporsmaalEl.className = "checkboxradio";
    // Lager et <h3>-elementet til spørsmålet
    let h3El = document.createElement("h3");
    // Legger til spørsmålet i <h3>-elementet
    h3El.innerHTML = quiz[i].sporsmaal;
    // Legger til <h3>-elementet i <div>-elementet
    sporsmaalEl.appendChild(h3El);

    // Lager elementer for hvert av alternativene
    for (let j = 0; j < quiz[i].alternativer.length; j++) {
        // Lager en <label>
        let labelEl = document.createElement("label");
        // Lager en radioknapp
        let radioEl = document.createElement("input");
        // Angir typen radio
        radioEl.type = "radio";
        // Bruker i som navn for å gi alternativene til samme spørsmål likt name
        radioEl.name = i;

        // Sjekker om dette alternativet er det riktige.
        // Hvis det er riktig, bruker vi "riktig" som value, ellers "galt".
        if (quiz[i].fasit === quiz[i].alternativer[j]) {
            radioEl.value = "riktig";
        } else {
            radioEl.value = "galt";
        }

        // Legger til knappen i <label>-elementet
        labelEl.appendChild(radioEl);

        // Legger til svaralternativ
        labelEl.innerHTML += quiz[i].alternativer[j];

        // Legger til <label>-elementet i <div>-elementet
        sporsmaalEl.appendChild(labelEl);
    }

    // Legger til <div>-elementet i quiz-elementet
    quizEl.appendChild(sporsmaalEl);
}

// Legger til svar knapp
let knapp1El = document.createElement("button");
knapp1El.innerHTML = "Svar";
// Legger til lytter på knappen
knapp1El.addEventListener("click", finnPoeng);
// Legger til knappen på nettsiden
quizEl.appendChild(knapp1El);


// Funksjon som beregner og skriver ut poengsum
function finnPoeng (){

    // Legger til resultat knapp
    let knapp2El = document.createElement("button");
    knapp2El.innerHTML = "Resultat";
// Legger til svar knapp
    knapp2El.addEventListener("click", resultater);
// Legger til knappen på nettsiden
    quizEl.appendChild(knapp2El);
// Henter alle radioknapper på siden

    alleRadioEl = document.querySelectorAll("input[type='radio']");

    // Variabel for å telle poeng
    let antallPoeng = 0;
    let spors1 = 0;
    let spors2 = 0;
    let spors3 = 0;
    let spors4 = 0;

    // Går gjennom alle radioknappene
    for (var i = 0; i < alleRadioEl.length; i++) {
        // Hvis en radioknapp er haket av
        if (alleRadioEl[i].checked) {
            antallPoeng ++;
            // Undersøk om alternativet er riktig
            if (alleRadioEl[i].value === "riktig") {
                // Hvis riktig, gi ett poeng
                if (antallPoeng === 1) {
                    spors1++;
                }
                if (antallPoeng === 2) {
                    spors2++;
                }
                if (antallPoeng === 3) {
                    spors3++;
                }
                if (antallPoeng === 4) {
                    spors4++;
                }
            }
        }
    }

}
let res1 =document.querySelectorAll(".graf")
function resultater() {

}

