
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const foodTypeSelect = document.getElementById('food-type');
    const foodInput = document.getElementById('food');
    const timeInput = document.getElementById('time'); // Get the time input

    // --- Set default time to 2:07 AM/PM as per image ---
    // Note: HTML input type="time" uses 24-hour format (HH:MM) internally.
    // "2:07 AM" would be "02:07". "2:07 PM" would be "14:07".
    // The image clearly shows "2:07 AM", so we'll set it to "02:07".
    timeInput.value = "02:07";

    // --- Food Type / Food Input Dependency ---
    // Initially disable the 'Food' input
    foodInput.disabled = true;
    foodInput.placeholder = 'select food type';
    foodInput.style.backgroundColor = '#e0e0e0'; // Visually indicate disabled state

    foodTypeSelect.addEventListener('change', () => {
        const selectedFoodType = foodTypeSelect.value;
        if (selectedFoodType) {
            foodInput.disabled = false;
            foodInput.readOnly = false; // Make it editable
            foodInput.placeholder = `Enter ${selectedFoodType} item`;
            foodInput.style.backgroundColor = '#f0f0f0'; // Revert to normal background
            foodInput.focus(); // Focus on the food input
        } else {
            foodInput.disabled = true;
            foodInput.readOnly = true; // Make it readonly again
            foodInput.placeholder = 'select food type';
            foodInput.value = ''; // Clear any previous value
            foodInput.style.backgroundColor = '#e0e0e0'; // Visually indicate disabled state
        }
    });

    // --- Basic Form Submission Handling (for demonstration) ---
    // In a real application, you would send this data to a server.
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(orderForm);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        console.log('Form Submitted Data:', data);
        alert('Order form submitted! Check console for data.');

        // You might want to clear the form after successful submission
        // orderForm.reset();
        // foodInput.disabled = true; // Re-disable food input after reset
        // foodInput.readOnly = true;
        // foodInput.placeholder = 'select food type';
        // foodInput.style.backgroundColor = '#e0e0e0';
    });
});