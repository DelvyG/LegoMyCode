// Ajustamos la importación para que apunte a la ubicación correcta en 'blocks'
import './lmc-app-shell.ts';

// Creamos una instancia de nuestro nuevo componente raíz
const appShellInstance = document.createElement('lmc-app-shell');

// Buscamos el contenedor #app que ya tienes en tu index.html
const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = ''; // Limpia el contenedor
  appContainer.appendChild(appShellInstance);
} else {
  // Si no hay #app, añadimos directamente al body
  console.warn('No element with id="app" found. Appending lmc-app-shell directly to body.');
  // Primero, busca y elimina cualquier instancia de <my-element> que pudiera estar en index.html
  const oldElement = document.querySelector('my-element');
  if (oldElement) {
    oldElement.remove();
  }
  document.body.appendChild(appShellInstance);
}

console.log("LegoMyCode App Shell Bootstrapped via my-element.ts");