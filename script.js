document.addEventListener('DOMContentLoaded', () => {
  
  // --- MOBILE RESPONSIVE HAMBURGER MENU ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      // Basic accessibility state management
      const isExpanded = menuToggle.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when a navigation item is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // --- FAQ ACCORDION ANIMATION LOGIC ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close any other open items first to achieve a clean accordion effect
        faqItems.forEach(innerItem => {
          innerItem.classList.remove('active');
          innerItem.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle state of current selected item
        if (!isActive) {
          item.classList.add('active');
          // Dynamically calculate actual height to support fluid height CSS transitions
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        }
      });
    }
  });

});
