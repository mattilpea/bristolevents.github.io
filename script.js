document.addEventListener('scroll', () =>{
    const navDiv = document.querySelector('div.navBarDiv');

    if (window.scrollY > 0 ){
        navDiv.classList.add('scrolled');

    }else {
        navDiv.classList.remove('scrolled')
    }

})
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Add or remove a class from the document or specific element
    const successMessage = document.querySelector('.contactSuccess');
    
    // Add the class to display the success message
    successMessage.classList.add('contactSuccessVis');
});



