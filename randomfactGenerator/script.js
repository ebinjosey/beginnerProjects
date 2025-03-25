const factText = document.querySelector(".fact"),
factBtn = document.querySelector("button");

function randomFact() {
    factBtn.innerText = "Loading Fact..."
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then(res => res.json()).then(result =>{
        console.log(result)
        factText.innerText = result.text;
        factBtn.innerText = "New Fact"
    });
}

factBtn.addEventListener("click", randomFact);