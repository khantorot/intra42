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

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});







const text = baffle(".data");
text.set({
      characters : '01',
      speed: 120
});
text.start();
text.reveal(4000);



const menu_btn = document.querySelector('.menu_btn');
const nav = document.querySelector('nav');


menu_btn.addEventListener('click', function(){
    nav.classList.toggle('nav_show');
    this.classList.toggle('menu_btn_active');
    (this.classList.contains('menu_btn_active')) ? this.innerHTML = 'close' : this.innerHTML = 'menu';
});



window.onload = function () {
    setTimeout(function(){
        const preloader = document.querySelector('.main_bg');
        preloader.classList.add('main_bg_hide');
    }, 2000);

}





// menu link
let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;
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



const nav_links = document.querySelectorAll('.section-nav a');

nav_links.forEach(element => {
    element.addEventListener('click', function(){
        nav.classList.remove('nav_show');
        menu_btn.classList.remove('menu_btn_active');
    })
});