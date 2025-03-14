// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Form Validation
  const contactForm = document.querySelector('#contact form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Dynamic Year in Footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;