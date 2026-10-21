document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.bodyhehe');

  const observerOptions = {
    root: null, // Uses the browser viewport
    rootMargin: "0px", 
    threshold: 0.1 // Triggers when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Check if the element has entered the screen
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Stop watching this element once it has animated in
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Tell the observer to monitor each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
