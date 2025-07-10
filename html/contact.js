
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation (can be more robust)
        if (name.trim() === '' || email.trim() === '') {
            alert('Please fill in all required fields (Name and Email).');
            return;
        }

        // In a real application, you would send this data to a server.
        // For demonstration, we'll just log it to the console and show an alert.
        console.log('Form Submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        alert('Thank you for your message! We will get back to you soon.');

        // Optionally, clear the form after successful submission
        contactForm.reset();
    });
});