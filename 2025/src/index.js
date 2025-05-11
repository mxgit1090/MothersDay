// Import image processing function
import { changeCarnationColor } from "./imageProcessor.js";
// Import Web Font Loader
import WebFont from "https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/+esm";

// Add base styles
const style = document.createElement("style");
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #FFFACD;
  }
  
  #main-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
document.head.appendChild(style);

// Create two canvases
const mainCanvas = document.createElement("canvas");
const textCanvas = document.createElement("canvas");
mainCanvas.id = "main-canvas";
textCanvas.id = "text-canvas";
document.body.appendChild(mainCanvas);
// textCanvas only exists in memory, not added to DOM

// Get contexts
const mainCtx = mainCanvas.getContext("2d");
const textCtx = textCanvas.getContext("2d");

// Settings
const text = "母親節快樂！";
const fontSize = 120;
const samplingStep = 5;
let textureCoordinates = []; // Store point coordinates
let carnationCanvas = null; // Store processed carnation canvas
let isFontLoaded = false; // Track font loading status

// Font settings
const fontFamily = '"Kaisei Decol", "Noto Serif TC", serif';

// Load fonts
WebFont.load({
  google: {
    families: ["Kaisei Decol", "Noto Serif TC"],
  },
  custom: {
    families: ["Kaisei Decol"],
    urls: [
      "https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap",
    ],
  },
  loading: function () {
    console.log("Loading fonts...");
  },
  active: function () {
    console.log("Fonts loaded successfully!");
    isFontLoaded = true;
    initializeCarnation();
  },
  inactive: function () {
    console.log("Font loading failed, using fallback fonts");
    isFontLoaded = true;
    initializeCarnation();
  },
});

// Pink gradient color palette
const pinkShades = [
  "#FFB6C1", // Light pink
  "#FF69B4", // Hot pink
  "#FF1493", // Deep pink
  "#DB7093", // Old rose
  "#FFC0CB", // Pink
];

// Carnation animation states
const carnationStates = [];

// Initialize carnation states
function initializeCarnationStates() {
  carnationStates.length = 0; // Clear array
  for (let i = 0; i < textureCoordinates.length; i++) {
    carnationStates.push({
      scale: 0, // Initial scale
      maxScale: getRandomScale(0.06, 0.16), // Maximum scale range
      minScale: 0.06, // Minimum scale
      isGrowing: true, // Growth state
      growthSpeed: 0.0001 + Math.random() * 0.0002, // Growth speed
      age: Math.random() * Math.PI * 2, // Initial age (for sine wave animation)
      ageDelta: 0.01 + Math.random() * 0.02, // Age change speed
      rotation: Math.random() * Math.PI * 2, // Initial rotation
      rotationSpeed: (Math.random() - 0.05) * 0.0001, // Rotation speed
      colorIndex: Math.floor(Math.random() * carnationCanvas.length), // Fixed color index
    });
  }
}

// Update carnation states
function updateCarnationStates() {
  carnationStates.forEach((state) => {
    // Update age
    state.age += state.ageDelta;

    if (state.isGrowing) {
      // Growth phase
      state.scale += state.growthSpeed;
      if (state.scale >= state.maxScale) {
        state.isGrowing = false;
      }
    } else {
      // Mature phase - use sine wave for subtle breathing effect
      state.scale = state.maxScale + Math.sin(state.age) * 0.02;
    }

    // Update rotation
    state.rotation += state.rotationSpeed;

    // Ensure scale stays within bounds
    state.scale = Math.max(
      state.minScale,
      Math.min(state.maxScale * 1.2, state.scale)
    );
  });
}

// Animation loop
let animationFrameId = null;

function animate() {
  updateCarnationStates();
  drawCarnations();
  animationFrameId = requestAnimationFrame(animate);
}

function stopAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Initialize: Load carnation images
async function initializeCarnation() {
  if (!isFontLoaded) {
    console.log("Waiting for fonts to load...");
    return;
  }

  try {
    // Generate a carnation canvas for each color
    carnationCanvas = await Promise.all(
      pinkShades.map((color) => changeCarnationColor(color))
    );
    // Start drawing after loading
    sampleCoordinates();
    initializeCarnationStates();
    animate(); // Start animation
  } catch (error) {
    console.error("Error loading carnation:", error);
  }
}

// Set canvas to fullscreen
function resizeCanvas() {
  mainCanvas.width = window.innerWidth;
  mainCanvas.height = window.innerHeight;
  textCanvas.width = window.innerWidth;
  textCanvas.height = window.innerHeight;
}

// Initial resize
resizeCanvas();

// Handle window resize
window.addEventListener("resize", () => {
  resizeCanvas();
  if (carnationCanvas && carnationCanvas.length && isFontLoaded) {
    sampleCoordinates();
    initializeCarnationStates();
  }
});

function sampleCoordinates() {
  if (!isFontLoaded) {
    console.log("Waiting for fonts to load...");
    return;
  }

  // Clear text canvas
  textCtx.fillStyle = "#FFFACD";
  textCtx.fillRect(0, 0, textCanvas.width, textCanvas.height);

  // Set text style
  textCtx.fillStyle = "#DB7093";
  textCtx.font = `${fontSize}px ${fontFamily}`;
  textCtx.textAlign = "center";
  textCtx.textBaseline = "middle";

  // Calculate text position
  const chars = text.split("");
  const charSpacing = fontSize * 1.2;
  const totalHeight = chars.length * charSpacing;
  const startX = textCanvas.width / 2;
  const startY = (textCanvas.height - totalHeight) / 2 + fontSize * 0.5;

  // Draw text
  chars.forEach((char, index) => {
    const y = startY + index * charSpacing;
    textCtx.fillText(char, startX, y);
  });

  // Sample coordinates
  textureCoordinates = [];
  const imageData = textCtx.getImageData(
    0,
    0,
    textCanvas.width,
    textCanvas.height
  );

  for (let i = 0; i < textCanvas.height; i += samplingStep) {
    for (let j = 0; j < textCanvas.width; j += samplingStep) {
      const index = (j + i * textCanvas.width) * 4;
      // Check if pixel is not background color (light yellow)
      if (
        imageData.data[index] !== 255 ||
        imageData.data[index + 1] !== 250 ||
        imageData.data[index + 2] !== 205
      ) {
        textureCoordinates.push({
          x: j,
          y: i,
        });
      }
    }
  }
}

// Generate random number within range
function getRandomScale(min, max) {
  return Math.random() * (max - min) + min;
}

// Get random element from array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function drawCarnations() {
  if (!carnationCanvas || !carnationCanvas.length) return;

  // Clear main canvas
  mainCtx.fillStyle = "#FFFACD";
  mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

  // Set global opacity
  mainCtx.globalAlpha = 0.2;

  // Draw carnations
  for (let i = 0; i < textureCoordinates.length; i++) {
    const state = carnationStates[i];
    const scale = (fontSize / carnationCanvas[0].height) * state.scale;
    const scaledWidth = carnationCanvas[0].width * scale;
    const scaledHeight = carnationCanvas[0].height * scale;

    // Use fixed color index
    const carnation = carnationCanvas[state.colorIndex];

    // Save current state
    mainCtx.save();

    // Set rotation center point
    const x = textureCoordinates[i].x;
    const y = textureCoordinates[i].y;
    mainCtx.translate(x, y);
    mainCtx.rotate(state.rotation);

    // Draw carnation
    mainCtx.drawImage(
      carnation,
      -scaledWidth / 2,
      -scaledHeight / 2,
      scaledWidth,
      scaledHeight
    );

    // Restore state
    mainCtx.restore();
  }

  // Reset opacity
  mainCtx.globalAlpha = 1.0;
}

// Start initialization
initializeCarnation();

// Cleanup function
window.addEventListener("beforeunload", () => {
  stopAnimation();
});
