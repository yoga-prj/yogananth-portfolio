// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const topOffset = 72; // navbar height
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  });
});

// ✅ Contact form with Formspree integration
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("✅ Thanks! Your message has been sent.");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("⚠️ Network error. Please check your connection.");
  }
});

// Fade-in sections
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 500ms ease, transform 500ms ease';
  io.observe(section);
});
