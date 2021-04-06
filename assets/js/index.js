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
