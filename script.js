// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if(targetId && targetId.startsWith('#')){
      const targetEl = document.querySelector(targetId);
      if(targetEl){
        const topOffset = 72; // navbar height
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  });
});

// Contact form submit placeholder
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks — your message was submitted (placeholder). I will follow up soon.');
  this.reset();
});

// Fade-in sections
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.12});

document.querySelectorAll('.section').forEach(section=>{
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 500ms ease, transform 500ms ease';
  io.observe(section);
});
