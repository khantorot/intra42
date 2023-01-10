window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });


    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

window.addEventListener('load', function () {

    const text = baffle(".text_data");
    text.set({
        characters: '01',
        speed: 100
    });
    text.start();
    text.reveal(5000);

    setTimeout(function () {
        this.history.scrollRestoration = 'manual';
        this.scrollTo(0, 0);

        document.querySelector('.preloader').classList.add('hide_preloader');
    }, 2000)
})













let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.3;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
};





const container = document.querySelector('.container');
const menu_btn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav_wrap');


menu_btn.addEventListener('click', function () {
    nav.classList.toggle('nav_wrap_show');
    menu_btn.classList.toggle('menu_btn_active');
    container.classList.toggle('container_hide');
    if (menu_btn.classList.contains('menu_btn_active')) {
        menu_btn.innerHTML = 'close';
    } else {
        menu_btn.innerHTML = 'menu';
    }
});





const nav_links = document.querySelectorAll('.nav_wrap a');

nav_links.forEach(element => {
    element.addEventListener('click', function () {
        nav.classList.remove('nav_wrap_show');
        container.classList.remove('container_hide')

        menu_btn.classList.remove('menu_btn_active');
        menu_btn.innerHTML = 'menu'
    })
});



const isRolling = Symbol("rolling text");

function getPositions(length) {
    return Array.from(new Array(length), () => [
        (length * Math.random() | 0) % length,
        (length * Math.random() | 0) % length,
    ]);
}

async function rollText(element) {
    if (element[isRolling]) return;

    element[isRolling] = true;

    const word = [...element.textContent];
    const ps = getPositions(word.length);
    const computedWords = [word.join("")];

    for (const [p1, p2] of ps) {
        [word[p1], word[p2]] = [word[p2], word[p1]];
        computedWords.push(element.textContent = word.join(""));
        await delay(100);
    }

    while (computedWords.length) {
        const word = computedWords.pop();
        element.textContent = word;
        await delay(100);
    }
    element[isRolling] = false;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rollHandler({ target }) {
    if (target.matches('.roll_text')) rollText(target);
}

addEventListener("pointerover", rollHandler);