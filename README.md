# LegoMyCode 🧱🤖

Un sistema innovador para crear interfaces web usando bloques modulares (Web Components con Lit) y asistencia de Inteligencia Artificial.

## Visión del Proyecto ✨

La visión de **LegoMyCode** es simplificar radicalmente el desarrollo frontend, permitiendo generar y componer interfaces complejas mediante prompts dirigidos a una IA, basados en un sistema de bloques bien definido y reutilizable.

Este proyecto sigue los principios de:

*   **Modularidad:** Construcción basada en piezas independientes.
*   **Encapsulación:** Estilos y lógica contenidos (gracias a Shadow DOM).
*   **Componibilidad:** Anidación y combinación de bloques.
*   **Personalización:** Adaptación vía propiedades y variables CSS.
*   **Simplicidad para IA:** Diseño pensado para la generación por IA.
*   **Basado en Estándares Web:** Uso de Web Components, Lit, y JS/TS/CSS modernos.

_(Para más detalles, consulta la documentación interna del proyecto)_

## Estado Actual ⚠️

**Nota:** Este proyecto está actualmente en fase de **desarrollo activo / prueba de concepto**. La API, la estructura de los bloques y las funcionalidades pueden cambiar.

## Stack Tecnológico 🛠️

*   **Vite:** Bundler y servidor de desarrollo rápido.
*   **Lit:** Librería ligera y eficiente para crear Web Components rápidos y funcionales.
*   **TypeScript:** Tipado estático para mejorar la robustez y la experiencia de desarrollo.
*   **Web Components:** Tecnología base (Custom Elements, Shadow DOM, Templates).
*   **Git / GitHub:** Control de versiones y colaboración.
*   **(Meta) Inteligencia Artificial:** Como asistente para la generación de código y composición.

## Cómo Empezar (Desarrollo Local) 🚀

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/DelvyG/LegoMyCode.git
    ```
2.  **Entrar al Directorio:**
    ```bash
    cd LegoMyCode
    ```
3.  **Instalar Dependencias:**
    ```bash
    npm install
    ```
4.  **Iniciar Servidor de Desarrollo:**
    ```bash
    npm run dev
    ```
    Esto abrirá la aplicación en tu navegador (normalmente en `http://localhost:5173` o similar). ¡Cualquier cambio en el código se reflejará automáticamente!

## Estructura del Proyecto 📁 (Simplificada)

LegoMyCode/
├── public/         # Archivos estáticos (ej: imágenes)
├── src/
│   ├── blocks/     # ¡Aquí viven los bloques LegoMyCode! (lmc-*.ts)
│   ├── assets/     # Assets específicos del código fuente
│   ├── my-element.ts # Componente principal de demostración/página
│   └── vite-env.d.ts # Tipos de Vite
├── .gitignore      # Archivos ignorados por Git
├── index.html      # Punto de entrada HTML para Vite
├── package.json    # Dependencias y scripts del proyecto
├── tsconfig.json   # Configuración de TypeScript
└── README.md       # ¡Este archivo!