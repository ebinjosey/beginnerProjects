const factText = document.querySelector(".fact"),
factBtn = document.querySelector("button");

function randomFact() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then(res => res.json())
}

factBtn.addEventListener("click", randomFact);