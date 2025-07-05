// Placeholder for future JavaScript (e.g., theme toggle, smooth scroll)

document.addEventListener("DOMContentLoaded", function () {
  if (window.particlesJS) {
    particlesJS.load("particles-js", "particlesjs-config.json", function () {
      console.log("Particles.js config loaded");
    });
  } else {
    var checkParticles = setInterval(function () {
      if (window.particlesJS) {
        clearInterval(checkParticles);
        particlesJS.load(
          "particles-js",
          "particlesjs-config.json",
          function () {
            console.log("Particles.js config loaded");
          }
        );
      }
    }, 100);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const frames = document.querySelectorAll(".skills-frame");
  const dots = document.querySelectorAll(".nav-dot");
  let current = 0;
  let autoInterval;
  let isTransitioning = false;

  function showFrame(idx) {
    if (isTransitioning || idx === current) return;
    isTransitioning = true;
    const prev = current;
    frames[prev].classList.add("fading");
    setTimeout(() => {
      frames[prev].classList.remove("active", "fading");
      frames[idx].classList.add("active");
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === idx);
      });
      current = idx;
      isTransitioning = false;
    }, 600); // match CSS transition duration
  }

  function nextFrame() {
    let next = (current + 1) % frames.length;
    showFrame(next);
  }

  function startAuto() {
    if (autoInterval) clearInterval(autoInterval);
    autoInterval = setInterval(nextFrame, 3000);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showFrame(idx);
      startAuto(); // reset timer on manual click
    });
  });

  // Show the first frame by default
  frames[0].classList.add("active");
  dots[0].classList.add("active");
  startAuto();

  // Projects frames logic
  const projectFrames = document.querySelectorAll(".project-frame");
  const projectDots = document.querySelectorAll(".project-nav-dot");
  let currentProject = 0;
  let isProjectTransitioning = false;
  let projectAutoInterval;

  function showProjectFrame(idx) {
    if (isProjectTransitioning || idx === currentProject) return;
    isProjectTransitioning = true;
    const prev = currentProject;
    projectFrames[prev].classList.add("fading");
    setTimeout(() => {
      projectFrames[prev].classList.remove("active", "fading");
      projectFrames[idx].classList.add("active");
      projectDots.forEach((d, i) => {
        d.classList.toggle("active", i === idx);
      });
      currentProject = idx;
      isProjectTransitioning = false;
    }, 600); // match CSS transition duration
  }

  function nextProjectFrame() {
    let next = (currentProject + 1) % projectFrames.length;
    showProjectFrame(next);
  }

  function startProjectAuto() {
    if (projectAutoInterval) clearInterval(projectAutoInterval);
    projectAutoInterval = setInterval(nextProjectFrame, 3000);
  }

  projectDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showProjectFrame(idx);
      startProjectAuto(); // reset timer on manual click
    });
  });

  // Show the first project frame by default
  if (projectFrames.length > 0) {
    projectFrames[0].classList.add("active");
    projectDots[0].classList.add("active");
    startProjectAuto();
  }

  // Smooth scroll with navbar offset
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navbar = document.querySelector("header nav");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetTop =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
