function sendMail(contactForm) {
    emailjs.send("gmail", "music_match", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("Success!!! You're message has been sent", response);
        },
        function(error) {
            alert("FAILED, sorry...", error);
        }
    );
    return false;
}