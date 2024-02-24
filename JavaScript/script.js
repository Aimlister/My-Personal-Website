import { variables } from './vendor.js'

const backToTop = () => {
    window.scrollTo(0, 0);
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

variables.backToTopButtonElement.addEventListener('click', backToTop);

//Resume button functionality
variables.viewMyResumeButtonElement.addEventListener('click', viewResume);
variables.resumeCloseButtonElement.addEventListener('click', viewResume);
document.addEventListener('keydown', closeViewResume);

//mobile navigation button functionality
variables.mobileNavButtonElement.addEventListener("click", mobileNavigator);