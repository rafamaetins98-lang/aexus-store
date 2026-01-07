const whatsappLink = "https://chat.whatsapp.com/JjwmHPliObfJOrcifLFS8d";

// Todos os botões de compra
document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("click", () => {
    // Animação rápida
    btn.classList.add("pulse");
    setTimeout(() => btn.classList.remove("pulse"), 200);

    // Abre WhatsApp
    window.open(whatsappLink, "_blank");
  });
});