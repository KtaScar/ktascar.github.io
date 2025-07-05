window.addEventListener("load", () => {
  const introContent = document.getElementById("intro-content");
  const subtitle = document.getElementById("subtitle");
  const menu = document.getElementById("menu");
  const loadingScreen = document.getElementById("loading-screen");

  // Mostrar subtítulo
  subtitle.style.opacity = 1;

  // Iniciar ambos efectos al mismo tiempo
  setTimeout(() => {
    loadingScreen.classList.add("hide");
    introContent.classList.add("to-header");
    // Habilitar menú y scroll después del movimiento (1.5s)
    setTimeout(() => {
      menu.style.pointerEvents = "auto";
      document.body.style.overflowY = "auto";
    }, 1500);
  }, 1250); // Espera inicial para mostrar el intro (ajusta si querés)
});

// Modal lógica
document.getElementById("about-btn").addEventListener("click", () => {
  document.getElementById("about-modal").style.display = "flex";
});

document.getElementById("contact-btn").addEventListener("click", () => {
  document.getElementById("contact-modal").style.display = "flex";
});

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

// Deshabilitar menú contextual del clic derecho
window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

VANTA.CELLS({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  color1: 0x27384c,
  color2: 0x1b0c31,
  size: 1.30,
  speed: 5,
  scale: 1.00
})
