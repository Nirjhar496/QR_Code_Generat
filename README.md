# QR Code Generator Frontend

## File Structure

- index.html
  - Main webpage structure

- css/style.css
  - All UI styling

- js/app.js
  - QR generation and download logic

- js/qrcode.min.js
  - Reserved for local QR library if you want offline generation

## How to Run

Open index.html in any browser.

Features:
- Text QR generation
- URL QR generation
- Phone number QR generation
- QR size selection
- Download QR image

Note:
The current version uses a QR generation API. You can later replace it with a local JavaScript QR library for a fully offline app.