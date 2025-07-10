

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded!');
    // Example: You could add a simple validation for the email input if this were a real form
    const emailInput = document.getElementById('email-address');
    if (emailInput) {
        emailInput.addEventListener('focus', () => {
            console.log('Email input focused');
        });
    }
});

