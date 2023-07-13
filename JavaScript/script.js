
//back to top button functionality
function backToTop() {
    window.scrollTo(0, 0);
}
//Resume button functionality
document.querySelector('.resume-btn').addEventListener('click', function() {
    document.querySelector('.resume').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
})
document.querySelector('.resume-close-btn').addEventListener('click', function() {
    document.querySelector('.resume').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
})
document.addEventListener('keydown', function (e) {
    if(e.key ==='Escape' && !(document.querySelector('.resume').classList.contains('hidden'))){
        document.querySelector('.resume').classList.add('hidden');
        document.querySelector('.overlay').classList.add('hidden');
    }
})

//mobile navigation button functionality
const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-header");

btnEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open");
});