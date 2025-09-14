// JavaScript for the portfolio site

// Insert the current year into the footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // In a real application you would send the form data to a server
    alert('Thank you for your message!');
    contactForm.reset();
  });
});
