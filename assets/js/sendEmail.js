function sendMail(contactForm) {
    emailjs.send("gmail", "music_match", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("SUCCESS", response);
        },
        function(error) {
            alert("FAILED", error);
        }
    );
    return false;
}