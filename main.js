"use strict";

// usamos libreria QR Code js
// en cdn.js localizar el script de la libreria

const qrContainer = document.getElementById("qrcode");
const inputLink = document.getElementById("link");
const btn = document.getElementById("btn");

const QR = new QRCode(qrContainer, {
  width: 200,
  height: 200,
  /*   colorDark: "#F9B44D", */
});

function createQRCode() {
  if (!inputLink.value) {
    alert("Introduce una URL");
    inputLink.focus();
    return;
  } else {
    QR.makeCode(inputLink.value);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  createQRCode();
});
