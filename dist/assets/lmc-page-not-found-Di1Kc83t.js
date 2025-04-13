import{i as c,x as m,a as s,t as p}from"./main-TYaH_DXW.js";var d=Object.getOwnPropertyDescriptor,v=(t,r,i,n)=>{for(var e=n>1?void 0:n?d(r,i):r,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=o(e)||e);return e};let a=class extends c{render(){return m`
      <lmc-container>
        <lmc-text-display level="h2">Oops! Página no encontrada (404)</lmc-text-display>
        <lmc-text-display>La página que buscas no existe o ha sido movida.</lmc-text-display>
        <lmc-nav-link href="/">Volver a la página principal</lmc-nav-link>
      </lmc-container>
    `}};a.styles=s`
    :host {
      display: block;
      padding-top: 4rem;
      text-align: center;
    }
    lmc-text-display[level="h2"] {
      margin-bottom: 1rem;
      color: var(--lmc-global-color-error, red);
    }
    lmc-nav-link {
        margin-top: 2rem;
        font-size: 1.1rem;
    }
  `;a=v([p("lmc-page-not-found")],a);export{a as LmcPageNotFound};
