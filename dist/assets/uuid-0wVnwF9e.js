function n(){return window.crypto&&typeof window.crypto.randomUUID=="function"?window.crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).substring(2)}export{n as u};
