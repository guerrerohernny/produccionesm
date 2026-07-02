/* ============================================
   PRODUCCIONES M — script
   ============================================ */

// Número de WhatsApp de la empresa (formato internacional, sin +, sin espacios)
const WHATSAPP_NUMBER = "526671602877";

document.addEventListener("DOMContentLoaded", function () {

  /* ---- Header: fondo sólido al hacer scroll ---- */
  const header = document.getElementById("site-header");
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll);

  /* ---- Menú móvil ---- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Animación de las líneas de pulso al entrar en pantalla ---- */
  const pulses = document.querySelectorAll(".pulse-line");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    pulses.forEach((p) => io.observe(p));
  } else {
    pulses.forEach((p) => p.classList.add("in-view"));
  }

  /* ---- Calendario para elegir la fecha del evento ---- */
  if (window.flatpickr) {
    flatpickr("#fecha", {
      locale: "es",
      minDate: "today",
      dateFormat: "d/m/Y",
      disableMobile: false,
    });
  }

  /* ---- Formulario "Cotiza tu evento" -> envía todo por WhatsApp ---- */
  const form = document.getElementById("quote-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const tipo = document.getElementById("tipo").value;
    const fecha = document.getElementById("fecha").value.trim();
    const ubicacion = document.getElementById("ubicacion").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !telefono || !tipo || !fecha) {
      alert("Por favor completa nombre, número de celular, tipo de evento y fecha.");
      return;
    }

    let texto = "Hola, quiero cotizar un evento con Producciones M:\n";
    texto += "• Nombre: " + nombre + "\n";
    texto += "• Celular: " + telefono + "\n";
    texto += "• Tipo de evento: " + tipo + "\n";
    texto += "• Fecha: " + fecha + "\n";
    if (ubicacion) texto += "• Lugar: " + ubicacion + "\n";
    if (mensaje) texto += "• Detalles: " + mensaje + "\n";

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
  });

  /* ---- Año dinámico en el footer ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
