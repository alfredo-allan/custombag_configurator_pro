// js/configurator.js
// Industria Gráfica Alquimista - Configurator Logic

// Estado global do configurador
const ConfiguratorState = {
  size: {
    id: "m",
    name: "Tamanho M",
    dimensions: "23 x 32 x 8cm",
    details: "Padrão vestuário. Suporta até 4kg.",
  },
  paper: {
    id: "duplex",
    name: "Duplex 190g",
    details: "Verso pardo, frente branca. Alta rigidez estrutural.",
    requiresLamination: true,
  },
  finish: {
    id: "matte",
    name: "Fosca",
    icon: "texture",
  },
  printing: {
    id: "cmyk",
    name: "4x0 (CMYK)",
    colors: 4,
  },
  handle: {
    type: "paper",
    color: "preta",
    colorCode: "#000000",
  },
  eyelet: {
    id: "none",
    name: "Nenhum",
  },
  pantone: "",
  quantity: 500,
  artwork: null,
};

// Opções disponíveis
const Options = {
  sizes: {
    p: {
      name: "Tamanho P",
      dimensions: "18 x 23,5 x 8cm",
      details: "Ideal para joias e pequenos acessórios. Suporta até 2kg.",
      weight: "2kg",
    },
    m: {
      name: "Tamanho M",
      dimensions: "23 x 32 x 8cm",
      details: "Padrão vestuário. Suporta até 4kg.",
      weight: "4kg",
    },
    g: {
      name: "Tamanho G",
      dimensions: "35 x 24 x 14 cm",
      details: "Caixas de sapato, casacos. Suporta até 5kg.",
      weight: "5kg",
    },
    gg: {
      name: "Tamanho GG",
      dimensions: "45,5 x 35 x 12 cm",
      details: "Grandes volumes. Suporta até 7kg.",
      weight: "7kg",
    },
  },
  papers: {
    offset: {
      name: "Offset 180g",
      details: "Fosco natural, excelente absorção de tinta.",
      requiresLamination: false,
    },
    duplex: {
      name: "Duplex 190g",
      details: "Verso pardo, frente branca. Alta rigidez estrutural.",
      requiresLamination: true,
    },
    kraft: {
      name: "Reciclato Kraft 180g",
      details:
        "Rústico, ecológico. Impressão recomenda-se em cores escuras ou preto.",
      requiresLamination: false,
    },
  },
  finishes: {
    none: { name: "Nenhum", icon: "block" },
    matte: { name: "Fosca", icon: "texture" },
    gloss: { name: "Brilho", icon: "flare" },
  },
  printings: {
    onecolor: { name: "1x0 (Uma Cor)", colors: 1 },
    cmyk: { name: "4x0 (CMYK)", colors: 4 },
  },
  handles: {
    paper: {
      colors: {
        branca: { name: "Branca", code: "#FFFFFF" },
        preta: { name: "Preta", code: "#000000" },
        kraft: { name: "Kraft", code: "#d2b48c" },
      },
    },
    fabric: {
      colors: {
        branca: { name: "Branca", code: "#FFFFFF" },
        preta: { name: "Preta", code: "#000000" },
      },
    },
  },
  eyelets: {
    none: { name: "Nenhum" },
    white: { name: "Branco", color: "#FFFFFF" },
    black: { name: "Preto", color: "#000000" },
  },
};

// Funções auxiliares
function updateSummary() {
  const summarySize = document.getElementById("summary-size");
  const summaryPaper = document.getElementById("summary-paper");
  const summaryFinish = document.getElementById("summary-finish");
  const summaryPrinting = document.getElementById("summary-printing");
  const summaryHandle = document.getElementById("summary-handle");
  const summaryEyelet = document.getElementById("summary-eyelets");
  const summaryPantone = document.getElementById("summary-pantone");
  const summaryQuantity = document.getElementById("summary-quantity");
  const summaryTotal = document.getElementById("summary-total");

  if (summarySize)
    summarySize.textContent = `${ConfiguratorState.size.name} (${ConfiguratorState.size.dimensions})`;
  if (summaryPaper) summaryPaper.textContent = ConfiguratorState.paper.name;
  if (summaryFinish) summaryFinish.textContent = ConfiguratorState.finish.name;
  if (summaryPrinting)
    summaryPrinting.textContent = ConfiguratorState.printing.name;
  if (summaryHandle)
    summaryHandle.textContent = `${
      ConfiguratorState.handle.type === "paper" ? "Papel Torcido" : "Gorgurão"
    } ${ConfiguratorState.handle.color}`;
  if (summaryEyelet) summaryEyelet.textContent = ConfiguratorState.eyelet.name;
  if (summaryPantone)
    summaryPantone.textContent = ConfiguratorState.pantone || "Nenhuma";
  if (summaryQuantity) summaryQuantity.textContent = ConfiguratorState.quantity;

  // Calcula preço aproximado (simulação)
  if (summaryTotal) {
    let basePrice = 0;
    switch (ConfiguratorState.size.id) {
      case "p":
        basePrice = 1.2;
        break;
      case "m":
        basePrice = 1.8;
        break;
      case "g":
        basePrice = 2.5;
        break;
      case "gg":
        basePrice = 3.5;
        break;
    }
    const paperMultiplier = ConfiguratorState.paper.id === "duplex" ? 1.3 : 1;
    const finishMultiplier = ConfiguratorState.finish.id !== "none" ? 1.15 : 1;
    const printingMultiplier =
      ConfiguratorState.printing.id === "cmyk" ? 1.4 : 1;
    const unitPrice =
      basePrice * paperMultiplier * finishMultiplier * printingMultiplier;
    const total = unitPrice * ConfiguratorState.quantity;
    summaryTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}

function saveToLocalStorage() {
  localStorage.setItem(
    "industrialAlchemistConfig",
    JSON.stringify(ConfiguratorState)
  );
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem("industrialAlchemistConfig");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(ConfiguratorState, parsed);
    } catch (e) {}
  }
}

// Export para uso global
window.ConfiguratorState = ConfiguratorState;
window.Options = Options;
window.updateSummary = updateSummary;
window.saveToLocalStorage = saveToLocalStorage;
window.loadFromLocalStorage = loadFromLocalStorage;
