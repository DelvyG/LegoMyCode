// Contenido NUEVO para src/my-element.ts (ahora actúa como punto de entrada)

import { LitElement, html } from 'lit'; // Puede que no necesitemos LitElement/html aquí
import { customElement } from 'lit/decorators.js'; // Puede que tampoco necesitemos customElement

// --- BORRA TODO EL CÓDIGO ANTERIOR DE my-element.ts ---

// Importamos el componente App Shell.
// Este App Shell es ahora la raíz de nuestra aplicación visible.
import './lmc-app-shell';

// --- Este archivo ahora solo se encarga de añadir lmc-app-shell al DOM ---

// Creamos una instancia de nuestro nuevo componente raíz
const appShellInstance = document.createElement('lmc-app-shell');

// Buscamos dónde añadirlo en el HTML. Normalmente el body o un div específico.
// Si index.html tiene <my-element></my-element> en el body, necesitamos reemplazarlo.
// Forma segura: Limpiar el body (o un contenedor #app si existe) y añadir el shell.
// Si estás seguro de que body está vacío o solo contenía <my-element>, puedes hacer:
// document.body.innerHTML = ''; // Limpia el body
// document.body.appendChild(appShellInstance);

// O si index.html ya tiene un <div id="app"> (común en Vite):
const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = ''; // Limpia el contenedor
  appContainer.appendChild(appShellInstance);
} else {
  // Si no hay #app, añadimos directamente al body (asegúrate de que index.html no tenga ya <my-element>)
   console.warn('No element with id="app" found. Appending lmc-app-shell directly to body.');
   // Primero, busca y elimina cualquier instancia de <my-element> que pudiera estar en index.html
   const oldElement = document.querySelector('my-element');
   if (oldElement) {
       oldElement.remove();
   }
   document.body.appendChild(appShellInstance);
}


console.log("LegoMyCode App Shell Bootstrapped via my-element.ts");


// Ya no necesitamos la definición de la clase MyElement aquí,
// ni su @customElement('my-element'), ni sus estilos, ni su render().
// Su única función ahora es cargar lmc-app-shell.