// 小游戏代码
let score = 0;
const button = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

// 页面滑动效果
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
