const factText = document.querySelector(".fact"),
factBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomFact() {
    factBtn.classList.add("loading");
    factBtn.innerText = "Loading Fact..."
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then(res => res.json()).then(result =>{
        factText.innerText = result.text;
        factBtn.innerText = "New Fact";
        factBtn.classList.remove("loading");
    });
}


soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${factText.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(factText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://x.com/compose/post=${factText.innerText}`;
    window.open(tweetUrl, "_blank");
});


factBtn.addEventListener("click", randomFact);