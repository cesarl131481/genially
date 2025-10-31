const marker = document.querySelector("#marcador");
const container = document.querySelector("#canvas-container");

let geniallyFrame = null;
let initialized = false;
let active = false;

// ✅ Crear el iframe de Genially
function createGeniallyFrame() {
  geniallyFrame = document.createElement("iframe");
  
  // 🔗 AQUÍ PONES TU URL DE GENIALLY
  geniallyFrame.src = "https://view.genially.com/61ae3053cec5b10d5140ddf2/interactive-content-salud-bucal";
  
  // Estilos del iframe
  geniallyFrame.style.position = "absolute";
  geniallyFrame.style.top = "50%";
  geniallyFrame.style.left = "50%";
  geniallyFrame.style.transform = "translate(-50%, -50%)";
  geniallyFrame.style.width = "40%";
  geniallyFrame.style.height = "80%";
  geniallyFrame.style.border = "none";
  geniallyFrame.style.borderRadius = "10px";
  geniallyFrame.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  geniallyFrame.style.display = "none"; // Inicialmente oculto
  geniallyFrame.style.zIndex = "100";
  
  // Permitir interacción completa
  geniallyFrame.setAttribute("allowfullscreen", "true");
  geniallyFrame.setAttribute("allow", "autoplay; fullscreen");
  
  container.appendChild(geniallyFrame);
  console.log("✅ Iframe de Genially creado");
}

// ✅ Inicializar solo una vez
function initGenially() {
  if (!initialized) {
    createGeniallyFrame();
    initialized = true;
  }
}

// ✅ Mostrar Genially
function showGenially() {
  if (geniallyFrame) {
    geniallyFrame.style.display = "block";
    active = true;
    console.log("👁️ Genially visible");
  }
}

// ✅ Ocultar Genially
function hideGenially() {
  if (geniallyFrame) {
    geniallyFrame.style.display = "none";
    active = false;
    console.log("🙈 Genially oculto");
  }
}

// ✅ Eventos del marcador
marker.addEventListener("targetFound", () => {
  console.log("📸 Marcador detectado");
  
  if (!initialized) {
    initGenially();
  }
  
  // Pequeño delay para asegurar que el iframe esté listo
  setTimeout(() => {
    showGenially();
  }, 100);
});

marker.addEventListener("targetLost", () => {
  console.log("❌ Marcador perdido");
  hideGenially();
});