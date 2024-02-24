import { variables } from './vendor.js';

const showBackToTopButton = () => {
    if(window.scrollY >= 100){
        variables.backToTopButtonElement.classList.remove('hidden');
    }else{
        variables.backToTopButtonElement.classList.add('hidden');
    }
}
const backToTop = () => {
    window.scrollTo(0, 0)
    showBackToTopButton();
}

const viewResume = () => {
    variables.resumeElement.classList.toggle('hidden');
    variables.backdropOverlay.classList.toggle('hidden');    
}
const closeViewResume = (element) => {
    if(element.key ==='Escape' && !(variables.resumeElement.classList.contains('hidden'))){
            viewResume();
    }
}
const mobileNavigator = () => {
    variables.homeHeaderElement.classList.toggle("nav-open");
}
// Back to top button functionality
variables.backToTopButtonElement.addEventListener('click', backToTop);
document.addEventListener('scroll', showBackToTopButton);

//Resume button functionality
variables.viewMyResumeButtonElement.addEventListener('click', viewResume);
variables.resumeCloseButtonElement.addEventListener('click', viewResume);
document.addEventListener('keydown', closeViewResume);

//mobile navigation button functionality
variables.mobileNavButtonElement.addEventListener("click", mobileNavigator);