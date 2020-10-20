// ==UserScript==
// @name         Even Better Code-Server
// @namespace    https://certe.kim/
// @version      0.3
// @description  Add Font Suppoprt
// @author       Certe Kim
// @match        http://127.0.0.1:10086/*
// @match        http://localhost:10086/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  var iconTag1 = document.querySelector('link[rel="apple-touch-icon"]');
  iconTag1.href = "https://code.visualstudio.com/favicon.ico";

  var iconTag2 = document.querySelector('link[rel="icon"]');
  iconTag2.href = "https://code.visualstudio.com/favicon.ico";

  document.body.insertAdjacentHTML('beforeend', `
<style>
.monaco-workbench .activitybar > .content > .home-bar > .home-bar-icon-badge,
.monaco-workbench .part.titlebar > .window-appicon,
.file-icons-enabled
  .show-file-icons
  .vs_code_welcome_page-name-file-icon.file-icon:before,
.file-icons-enabled
  .show-file-icons
  .vs_code_editor_walkthrough\.md-name-file-icon.md-ext-file-icon.ext-file-icon.markdown-lang-file-icon.file-icon:before{
  background-image: url("data:image/svg+xml,%3Csvg width='256' height='256' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M246.94 27.64L194.19 2.24C188.09 -0.70 180.79 0.54 175.00 5.33L3.32 162.77C-1.32 167.01 -1.32 174.32 3.34 178.55L17.44 191.37C21.24 194.83 26.97 195.08 31.06 191.98L239.00 34.23C245.98 28.93 255.00 33.91 255.00 42.67V42.05C255.00 35.91 252.48 30.30 246.94 27.64Z' fill='%230065a9'/%3E%3Cpath d='M246.94 228.36L194.19 253.76C188.09 256.70 180.79 255.46 175.00 250.67L3.32 93.23C-1.32 88.99 -1.32 81.68 3.34 77.45L17.44 64.63C21.24 61.17 26.97 60.92 31.06 64.02L239.00 221.77C245.98 227.06 255.00 222.09 255.00 213.33V213.95C255.00 220.09 252.48 225.70 246.94 228.36Z' fill='%23007acc'/%3E%3Cpath d='M194.20 253.76C188.09 256.7 180.79 255.46 176 250.67C181.90 256.57 192 252.39 192 244.04V11.96C192 3.61 181.90 -0.57 176 5.33C180.79 0.54 188.09 -0.70 194.20 2.24L246.93 27.60C252.48 30.26 256 35.87 256 42.02V213.98C256 220.13 252.48 225.74 246.93 228.40L194.20 253.76Z' fill='%231f9cf0'/%3E%3C/svg%3E");
}
</style>`);
})();