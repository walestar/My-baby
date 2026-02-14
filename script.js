const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const extraText = document.getElementById('extra-text');
const headerContainer = document.getElementById('header-container');
const contentWrapper = document.getElementById('content-wrapper');

let stage = 1;

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', () => { if (stage === 1) moveButton(); });

noBtn.addEventListener('click', () => {
    if (stage === 2) moveButton();
    else if (stage === 3) showFinalScreen();
});

yesBtn.addEventListener('click', () => {
    if (stage === 1) {
        headerContainer.innerHTML = '<h2 class="woohoo-text">WOOHOO!</h2>';
        mainText.innerText = "Now";
        subText.innerText = "Are you my pretty babeh?";
        stage = 2;
        noBtn.style.position = 'relative'; noBtn.style.left = '0'; noBtn.style.top = '0';
    } else if (stage === 2) {
        headerContainer.innerHTML = '<h2 class="woohoo-text">WOOOO</h2>';
        mainText.innerText = "I agree you are pretty";
        mainText.style.fontSize = "2rem";
        extraText.innerText = "I am sorry about yesterday, but I hope you like this";
        extraText.style.display = "block";
        subText.innerText = "Will you be my valentine?";
        subText.classList.add('valentine-final');
        yesBtn.innerText = "YES? IN LAVENDER";
        yesBtn.style.backgroundColor = "#E6E6FA"; yesBtn.style.color = "#6A5ACD";
        noBtn.innerText = "YES? BUT IN YELLOW";
        noBtn.style.backgroundColor = "#FFFACD"; noBtn.style.color = "#D2B48C";
        noBtn.style.position = 'relative'; noBtn.style.left = '0'; noBtn.style.top = '0';
        stage = 3;
    } else if (stage === 3) {
        showFinalScreen();
    }
});

function showFinalScreen() {
    contentWrapper.innerHTML = `
        <div class="final-container">
            <h1 class="final-main">I love you my baby</h1>
            <p class="final-sub">Kiss</p>
        </div>`;
    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.classList.add('confetti');
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = ['#ff69b4','#FFFACD','#E6E6FA','#ffffff'][Math.floor(Math.random()*4)];
        c.style.animationDuration = (Math.random()*2+3)+'s';
        document.body.appendChild(c);
    }
}