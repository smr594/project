document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const foodTypeSelect = document.getElementById('food-type');
    const foodInput = document.getElementById('food');
    const timeInput = document.getElementById('time');

    // Set default time
    if (timeInput) {
        timeInput.value = "02:07";
    }

    // Disable food input by default
    if (foodInput) {
        foodInput.disabled = true;
        foodInput.placeholder = 'Select food type';
        foodInput.style.backgroundColor = '#e0e0e0';
    }

    // Enable food input when food type is selected
    foodTypeSelect.addEventListener('change', () => {
        const selectedFoodType = foodTypeSelect.value;

        if (selectedFoodType) {
            foodInput.disabled = false;
            foodInput.readOnly = false;
            foodInput.placeholder = `Enter ${selectedFoodType} item`;
            foodInput.style.backgroundColor = '#f0f0f0';
            foodInput.focus();
        } else {
            foodInput.disabled = true;
            foodInput.readOnly = true;
            foodInput.placeholder = 'Select food type';
            foodInput.value = '';
            foodInput.style.backgroundColor = '#e0e0e0';
        }
    });

    // Handle form submission
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const data = {};

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        console.log('Form Submitted Data:', data);
        alert('✅ Order form submitted! Check console for submitted data.');
    });
});
