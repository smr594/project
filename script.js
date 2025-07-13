

document.addEventListener('DOMContentLoaded', () => {
    
    const addIcons = document.querySelectorAll('.add-icon');
    const cartItemCountSpan = document.getElementById('cart-item-count');
    const cartModal = document.getElementById('cart-modal');
    const viewCartBtn = document.getElementById('view-cart-btn');
    const closeModalBtn = document.querySelector('.close-button');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalSpan = document.getElementById('cart-total');

    let cart = [];

    
    function updateCartDisplay() {
        cartItemCountSpan.textContent = cart.length; 

        
        cartItemsList.innerHTML = ''; 
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        } else {
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.title}</span>
                    <span>Rs.${item.price}/-</span>
                `;
                cartItemsList.appendChild(li);
                total += item.price;
            });
        }
        cartTotalSpan.textContent = total;
    }

    
    addIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            const itemCard = event.target.closest('.item-card');
            const title = itemCard.querySelector('.title').textContent;
            
            const price = parseInt(itemCard.querySelector('.price').dataset.price);
            const imageSrc = itemCard.querySelector('img').src;
            const itemId = event.target.dataset.itemId; 

            const item = {
                id: itemId,
                title: title,
                price: price,
                image: imageSrc
            };

            cart.push(item);
            updateCartDisplay();
            console.log('Cart:', cart); 
        });
    });

    
    viewCartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex'; 
        updateCartDisplay(); 
    });

    closeModalBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    
    updateCartDisplay();


    
    const sliderContainer = document.getElementById('menuSlider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');


    function scrollSlider(direction) {
         
        const cardWidth = 240; 

        
        const scrollAmount = cardWidth * 3; 

        if (direction === 'next') {
            sliderContainer.scrollLeft += scrollAmount;
        } else if (direction === 'prev') {
            sliderContainer.scrollLeft -= scrollAmount;
        }
    }

    prevBtn.addEventListener('click', () => scrollSlider('prev'));
    nextBtn.addEventListener('click', () => scrollSlider('next'));

 
});

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

