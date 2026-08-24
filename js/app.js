const textInput = document.getElementById("qrText");
const sizeInput = document.getElementById("qrSize");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrImage = document.getElementById("qrImage");

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please enter text first.");
    return;
  }

  const size = sizeInput.value;

  const qrUrl =
    `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;

  qrImage.src = qrUrl;
  qrImage.style.display = "inline-block";
});

downloadBtn.addEventListener("click", () => {
  if (!qrImage.src) {
    alert("Generate a QR code first.");
    return;
  }

  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
});