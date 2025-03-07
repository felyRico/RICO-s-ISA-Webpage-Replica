gsap.registerPlugin(ScrollTrigger);

/* 1) Dog & Cat infinite loop */
gsap.timeline({ repeat: -1 })
  .to("#dog", { duration: 1, y: 50, opacity: 0, ease: "power2.in" })
  .fromTo("#cat", { y: -50, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "power2.out", immediateRender: false })
  .to("#cat", { duration: 1, delay: 1 })
  .to("#cat", { duration: 1, y: 50, opacity: 0, ease: "power2.in" })
  .fromTo("#dog", { y: -50, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "power2.out", immediateRender: false })
  .to("#dog", { duration: 1, delay: 1 });

/* 2) Hero text animation with ScrollTrigger */
gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    toggleActions: "restart none none restart"
  }
})
  .from(".hero .content h1", { duration: 1, x: 100, opacity: 0, ease: "power2.out" }, 0)
  .from([".hero .content p", ".hero .social-icons"], { duration: 1, y: 50, opacity: 0, ease: "power2.out" }, 0);

/* 3) Animate each project box sliding in from the left */
gsap.utils.toArray(".project-item").forEach(item => {
  gsap.from(item, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none none restart"
    }
  });
});

/* 4) Animate ward boxes sliding up */
gsap.utils.toArray(".ward-box").forEach(box => {
  gsap.from(box, {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: box,
      start: "top bottom",
      toggleActions: "restart none none restart"
    }
  });
});

/* 5) Animate "Apply for help" box sliding in from the right */
gsap.from(".apply-help-link", {
  x: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".apply-help",
    start: "top bottom",
    toggleActions: "restart none none restart"
  }
});

// 6) Hover border square animation for project and ward boxes (excluding Apply for help)
document.querySelectorAll('.project-item, .ward-box').forEach(box => {
  if (!box.querySelector('.border-square')) {
    let colorClass = '';
    if (box.closest('.projects-section')) {
      colorClass = 'white';
    } else if (box.closest('.wards-section')) {
      colorClass = 'black';
    }
    box.insertAdjacentHTML('beforeend', `<div class="border-square ${colorClass}"></div>`);
  }
  
  const borderSquare = box.querySelector('.border-square');
  gsap.set(borderSquare, { x: "0%", y: "0%", opacity: 1 });
  
  box.addEventListener('mouseenter', () => {
    gsap.to(borderSquare, {
      duration: 0.3,
      x: "5%",
      y: "-5%",
      opacity: 1,
      ease: "power2.out"
    });
  });
  
  box.addEventListener('mouseleave', () => {
    gsap.to(borderSquare, {
      duration: 0.3,
      x: "0%",
      y: "0%",
      opacity: 1,
      ease: "power2.out"
    });
  });
});
