import hljs from 'https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/highlight.min.js';
import html from 'https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/xml.min.js';
hljs.registerLanguage('html', html);

const codeEditable1 = document.querySelectorAll('pre code[contenteditable="true"]')[0];
const codeEditable2 = document.querySelectorAll('pre code[contenteditable="true"]')[1];
const codeHightlighted1 = document.querySelectorAll('pre code.language-html')[0];
const codeHightlighted2 = document.querySelectorAll('pre code.language-html')[1];
const svgContainer = document.querySelector('output');
const inputRangeElement = document.querySelector('#opacity-range');

codeEditable1.textContent = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 17 16">
  <path d="M15.33 8c-1.77 3.11-4 4.67-6.66 4.67C6 12.67 3.77 11.1 2 8c1.78-3.11 4-4.67 6.67-4.67 2.66 0 4.89 1.56 6.66 4.67Z"/>
  <path d="M8.67 9.33a1.33 1.33 0 1 0 0-2.66 1.33 1.33 0 0 0 0 2.66Z"/>
</svg>
`.trim();

codeEditable2.textContent = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" viewBox="0 0 17 16">
  <path d="M2 8 A8.4 12 0 0 0 15.33 8A8.4 12 0 0 0 2 8Z"/>
  <circle cx="8.67" cy="8" r="1.33"/>
</svg>
`.trim();

function handleCodeEditable1Input() {
  codeHightlighted1.textContent = codeEditable1.textContent;
  hljs.highlightElement(codeHightlighted1);
  svgContainer.innerHTML = codeEditable1.textContent + codeEditable2.textContent;
}

handleCodeEditable1Input();

codeEditable1.addEventListener('input', handleCodeEditable1Input);

function handleCodeEditable2Input() {
  codeHightlighted2.textContent = codeEditable2.textContent;
  hljs.highlightElement(codeHightlighted2);
  svgContainer.innerHTML = codeEditable1.textContent + codeEditable2.textContent;
}

handleCodeEditable2Input();

codeEditable2.addEventListener('input', handleCodeEditable2Input);

function setSecondSvgOpacity() {
  document.querySelector('output > *:last-child').style.opacity = inputRangeElement.value / 100;
};

setSecondSvgOpacity();

inputRangeElement.addEventListener('input', setSecondSvgOpacity);
