
document.querySelectorAll('.faq-question').forEach(item => {
item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
});
});

// Live Chat Placeholder (You can integrate a real chat service here)
document.querySelector('.live-chat').addEventListener('click', () => {
alert('Live chat support coming soon!');
});

// Form Submission Placeholder
document.querySelector('.quote-form form').addEventListener('submit', (e) => {
e.preventDefault();
alert('Thank you for your request! We will get back to you soon.');
});


    // Navbar toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const closeIcon = document.querySelector('.close-icon');

    menuIcon.addEventListener('click', () => {
      navbar.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
      navbar.classList.remove('active');
    });