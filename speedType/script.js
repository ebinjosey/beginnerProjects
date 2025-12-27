const words = `apple ball cat dog egg fish goat hat ice jam kite leaf milk nest owl pen queen rain sun tree up van water xray yak zoo air bat cup dad ear fan gum hen ink jug key log man net ox pig quilt rat sock top urn vet win box yarn zip run walk jump play read write clap draw paint laugh sing climb ride swim dance bake cook peel cut mix pour stir taste smell see hear touch think feel sleep wake dream snore hug kiss talk shout grow hop skip slide roll crawl bounce pop flip spin nod blink wave chew bite lick pull push carry drop pick throw catch dig hit kick jump hop yawn blink hum nod tap pat rub buzz bark meow moo chirp tweet hoot oink neigh bleat croak quack baa hiss roar peep peck hug grin giggle smile frown nod shrug blink stretch twist shake wiggle blink trip slip bump fall crash bang thud clank click beep ring knock crack creak drip drop splash splat fizz zoom zap zip whoosh blink glow blink beam shine flash flicker sparkle shimmer twinkle blink open close lift lock tug twist push pull tug spin swirl twirl spin wheel frame edge pad mat lens stand cord plug wire bulb tube screen glass clamp hook latch knob pin nail bolt screw tray lid cover case bin bag pot pan cup mug bowl spoon fork knife plate dish jug jar box tin sack basket bucket rope string chain ribbon cloth towel paper book pen pad chalk crayon brush pencil ruler eraser marker sharpener board clock bell whistle flute drum horn gong bugle piano guitar violin trumpet shaker tambourine cymbal stick rod pole cane bat club puck ball puck hoop ring kite balloon plane train truck car bike boat ship rocket sled skis skates surf tube board raft coat shirt dress pants shoes socks boots hat cap scarf gloves jacket shorts jeans belt laces zip buttons pockets sleeve collar tag badge sticker stamp coin cash bill card phone tablet laptop camera radio lamp torch watch key chain lock tag bell frame clip note ticket map plan list chart graph sign post bell flag star moon sun cloud rain wind snow fog mist storm wave fire ice smoke dust light dark shade bright dull soft hard rough smooth sharp blunt hot warm cool cold wet dry thick thin wide narrow deep shallow tall short long small tiny big huge giant great fast slow quick still loud quiet clear soft sweet sour salty bitter spicy bland clean dirty neat messy new old young aged fresh stale sweet sour juicy dry rich plain full empty early late soon never always often rarely sometimes now then today tomorrow tonight morning evening noon dawn dusk week month year spring summer autumn winter day night north south east west left right up down front back near far in out on off by with from to at for of about above below under over between among beyond across around through during inside outside against along before after without within under beside atop behind toward into onto upon around`.split(' ');
const wordsCount = words.length;
const gameTime = 30 * 1000;
window.timer = null;
window.gameStart = null;

function addClass(el, name) {
    el.classList.add(name);
}

function removeClass(el, name) {
    el.classList.remove(name);
}

function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex - 1]
}

function formatWord(word) {
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
    document.getElementById('info').innerHTML = (gameTime / 1000) + '';
    window.timer = null;
}

function getWpm() {
    const words = [...document.querySelectorAll('.word')];
    const lastTypedWord = document.querySelector('.word.current');
    const lastTypedWordIndex = words.indexOf(lastTypedWord)
    const typedWords = words.slice(0, lastTypedWordIndex);
    const correctWords = typedWords.filter(word => {
        const letters = [...word.children];
        const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
        const correctLetters = letters.filter(letter => letter.className.includes('correct'));
        return incorrectLetters.length === 0 && correctLetters.length === letters.length
    });
    return correctWords.length / gameTime * 60000;
}

function gameOver() {
    clearInterval(window.timer);
    addClass(document.getElementById('game'), 'over');
    document.getElementById('info').innerHTML = `WPM: ${getWpm()}`;
}


document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;

    if (document.querySelector('#game.over')) {
        return;
    }
     
    console.log({key, expected});

    if (!window.timer && isLetter) {
        window.timer = setInterval(() => {
            if (!window.gameStart) {
                window.gameStart = (new Date()).getTime();
            }
            const currentTime = (new Date()).getTime();
            const msPassed = currentTime - window.gameStart;
            const sPassed = Math.round(msPassed / 1000);
            const sLeft = (gameTime / 1000) - sPassed;
            if (sLeft <= 0) {
                gameOver();
                return;
            }
            document.getElementById('info').innerHTML = sLeft + '';
        }, 1000);
    }

    if (isLetter) {
        if (currentLetter) {
        addClass(currentLetter, key === expected ? 'correct' : 'incorrect');   
        removeClass(currentLetter, 'current');
        if (currentLetter.nextSibling) {
            addClass(currentLetter.nextSibling, 'current'); 
            }
        } else {
            const incorrectLetter = document.createElement('span');
            incorrectLetter.innerHTML = key;
            incorrectLetter.className = 'letter incorrect extra';
            currentWord.appendChild(incorrectLetter);
        }
    }

    if (isSpace) {
        if (expected !== ' ') {
            const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
            lettersToInvalidate.forEach(letter => {
                addClass(letter, 'incorrect');
            });
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        if (currentLetter) {
            removeClass(currentLetter, 'current');
        }
        addClass(currentWord.nextSibling.firstChild, 'current');
    }

    if (isBackspace) {
        if (currentLetter && isFirstLetter) {
            removeClass(currentWord, 'current');
            addClass(currentWord.previousSibling, 'current');
            removeClass(currentLetter, 'current');
            addClass(currentWord.previousSibling.lastChild, 'current');
            removeClass(currentWord.previousSibling.lastChild, 'incorrect');
            removeClass(currentWord.previousSibling.lastChild, 'correct');
        }
        if (currentLetter && !isFirstLetter) {
            removeClass(currentLetter, 'current');
            addClass(currentLetter.previousSibling, 'current');
            removeClass(currentLetter.previousSibling, 'incorrect');
            removeClass(currentLetter.previousSibling, 'correct');
        }

        if (!currentLetter) {
            addClass(currentWord.lastChild, 'current');
            removeClass(currentWord.lastChild, 'incorrect');
            removeClass(currentWord.lastChild, 'correct');
        }
    }    

    // Scrolling

    const game = document.getElementById('game');
    const wordsContainer = document.getElementById('words');
    const gameTop = game.getBoundingClientRect().top;
    const wordTop = currentWord.getBoundingClientRect().top;

    if (wordTop - gameTop > 70) {
        const margin = parseFloat(wordsContainer.style.marginTop || '0');
        wordsContainer.style.marginTop = (margin - 35) + 'px';
    }

    // Cursor Movement

    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 +'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 0.2 + 'px';

})

document.getElementById('newGameBtn').addEventListener('click', () => {
    gameOver();
    newGame();

    const gameEl = document.getElementById('game');
    gameEl.classList.remove('over');

    cursor.style.top = 'auto';
    cursor.style.left = 'auto';
    cursor.style.display = 'none';

    gameEl.focus();
});

newGame()