document.addEventListener("DOMContentLoaded", () => {
  // Elementos do DOM
  const contactBtn = document.getElementById("whatsapp-btn"); // Botão Contato do Menu
  const sideModal = document.getElementById("contact-side-modal");
  const closeModalBtn = document.getElementById("close-side-modal");
  const modalWhatsappBtn = document.getElementById("modal-whatsapp-btn");
  const textContainer = document.getElementById("typewriter-text");

  // Texto conceitual estruturado para a Identidade da marca
  const messageToType =
    "Alquimista : Online\n\nOperador técnico pronto. Desenvolvemos embalagens com precisão.\n\nFábrica em São Paulo.\nDespachamos para todo o país com frete por conta do contratante (FOB).\n\nClique abaixo para alinhar suas especificações.";

  let animationHasRun = false;

  // Preparar o contêiner injetando cada letra envolvida em um span para controle do Anime.js
  function prepareTextForAnimation(text) {
    textContainer.innerHTML = "";
    const characters = Array.from(text);

    characters.forEach((char) => {
      const span = document.createElement("span");
      if (char === "\n") {
        span.innerHTML = "<br>";
        span.className = "br-space";
      } else {
        span.textContent = char;
        span.className = "letter";
      }
      textContainer.appendChild(span);
    });
  }

  // Execução da animação do texto usando Anime.js
  function runTypewriterAnimation() {
    if (animationHasRun) return; // Evita re-animar toda vez que abrir se já digitado
    animationHasRun = true;

    prepareTextForAnimation(messageToType);

    anime.timeline({ loop: false }).add({
      targets: "#typewriter-text .letter",
      opacity: [0, 1],
      translateY: [2, 0],
      easing: "easeOutQuad",
      duration: 15,
      delay: anime.stagger(25), // Velocidade média de digitação de um operador humano (25ms por letra)
    });
  }

  // Abrir Modal lateral
  function openModal() {
    // Exibe apenas em telas desktop (conforme solicitado pelo fluxo responsivo)
    if (window.innerWidth >= 768) {
      sideModal.style.transform = "translateX(0)";
      // Pequeno timeout para sincronizar a entrada do modal com o início da digitação
      setTimeout(() => {
        runTypewriterAnimation();
      }, 350);
    }
  }

  // Fechar Modal lateral
  function closeModal() {
    sideModal.style.transform = "translateX(100%)";
  }

  // Event Listeners
  if (contactBtn) {
    // Substituindo o comportamento padrão do botão de contato do menu superior
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  // Fechar ao clicar fora do modal
  document.addEventListener("click", (e) => {
    if (
      sideModal &&
      !sideModal.contains(e.target) &&
      contactBtn &&
      !contactBtn.contains(e.target)
    ) {
      closeModal();
    }
  });

  // Ação do botão interno do WhatsApp com gatilho de conversão
  if (modalWhatsappBtn) {
    modalWhatsappBtn.addEventListener("click", () => {
      const phoneNumber = "5511982987512";
      const textMessage =
        "Olá! Estou no configurador desktop da Alquimista e gostaria de tratar sobre o frete e detalhes do pedido.";
      const wpUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        textMessage
      )}`;

      // Executa a tag global de conversão configurada na sua Head antes de redirecionar
      if (typeof gtag_report_conversion === "function") {
        gtag_report_conversion(wpUrl);
      } else {
        window.open(wpUrl, "_blank");
      }
    });
  }

  // GATILHO OPCIONAL: Abre o modal de forma sutil após 8 segundos logado na página desktop
  setTimeout(() => {
    openModal();
  }, 4000);
});
