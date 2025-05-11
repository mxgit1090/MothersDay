// Create a Promise to load image
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      console.error("Error loading image:", e);
      reject(e);
    };
    img.src = src;
  });
}

// Convert RGB color string to RGB values
function hexToRgb(hex) {
  // Remove # symbol
  hex = hex.replace("#", "");

  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

// Get base URL for assets
const baseUrl =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "/"
    : "/MothersDay/2025/";

// Main function: Change carnation color
export async function changeCarnationColor(targetColor) {
  try {
    // Load original image
    const originalImage = await loadImage(`${baseUrl}image.png`);

    // Create canvas for image processing
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size to match image
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;

    // Draw original image
    ctx.drawImage(originalImage, 0, 0);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Convert target color to RGB
    const targetRgb = hexToRgb(targetColor);

    // Process each pixel
    for (let i = 0; i < data.length; i += 4) {
      // Check if pixel is black (or near black)
      // Use threshold to avoid processing background
      const isBlack = data[i] < 50 && data[i + 1] < 50 && data[i + 2] < 50;

      if (isBlack) {
        // Set new color while maintaining original transparency
        data[i] = targetRgb.r; // R
        data[i + 1] = targetRgb.g; // G
        data[i + 2] = targetRgb.b; // B
        // data[i + 3] remains unchanged (Alpha)
      } else {
        // Set non-black parts to fully transparent
        data[i + 3] = 0; // Alpha set to 0
      }
    }

    // Put processed image data back to canvas
    ctx.putImageData(imageData, 0, 0);

    // Return processed canvas
    return canvas;
  } catch (error) {
    console.error("Error processing image:", error);
    throw error;
  }
}
