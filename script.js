// Contact form handler with success message
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: "POST",
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    document.getElementById("form-success").style.display = "block";
                } else {
                    alert("Er ging iets mis. Probeer opnieuw.");
                }
            })
            .catch(error => {
                alert("Er ging iets mis: " + error.message);
            });
    });
}

