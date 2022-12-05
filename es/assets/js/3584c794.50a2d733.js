"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"php",title:"P\xe1gin PHP"},s=void 0,p={unversionedId:"settings/php",id:"version-19-R7/settings/php",title:"P\xe1gin PHP",description:"In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see Executing PHP scripts in 4D in the 4D Language Reference manual).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/es/settings/php",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/settings/php.md",tags:[],version:"19-R7",frontMatter:{id:"php",title:"P\xe1gin PHP"},sidebar:"docs",previous:{title:"P\xe1gina SQL",permalink:"/docs/es/settings/sql"},next:{title:"P\xe1gina seguridad",permalink:"/docs/es/settings/security"}},c={},l=[{value:"Int\xe9rprete",id:"int\xe9rprete",level:2},{value:"Opciones",id:"opciones",level:2}],u={toc:l};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html"}),"Executing PHP scripts in 4D")," in the 4D ",(0,n.kt)("em",{parentName:"p"},"Language Reference")," manual)."),(0,n.kt)("h2",a({},{id:"int\xe9rprete"}),"Int\xe9rprete"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"IP Address")," and Port number By default, 4D provides a PHP interpreter, compiled in FastCGI. For reasons related to the internal architecture, execution requests go to the PHP interpreter at a specific HTTP address. Por defecto, 4D utiliza la direcci\xf3n 127.0.0.1 y el puerto 8002. You can change this address and/or port if they are already used by another service or if you have several interpreters on the same machine. To do this, you modify the ",(0,n.kt)("strong",{parentName:"p"},"IP Address")," and ",(0,n.kt)("strong",{parentName:"p"},"Port number")," parameters.\\\nNote that the HTTP address must be on the same machine as 4D.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"External interpreter"),' If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in ',(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"}),"Executing PHP scripts in 4D"),"). Select this option so 4D does not attempt a connection with the internal interpreter when executing a PHP request. Note that this configuration requires your manual execution and control of the external interpreter."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D Server:")," These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). Also, if the server uses an external interpreter on port 9002, the client machines must also use an interpreter on this port."),(0,n.kt)("h2",a({},{id:"opciones"}),"Opciones"),(0,n.kt)("p",null,"These options are related to the automatic management of the 4D PHP interpreter and are disabled when the ",(0,n.kt)("strong",{parentName:"p"},"External interpreter")," option is selected."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Number of processes"),': The 4D PHP interpreter drives a set of system execution processes called "child processes". For optimization, it can run and keep up to five child processes simultaneously by default. Puede modificar el n\xfamero de procesos hijos seg\xfan sus necesidades. For example, you may want to increase this value if you call on the PHP interpreter intensively. For more information, refer to the "Architecture" section in ',(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"}),"Executing PHP scripts in 4D"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Under Mac OS, all child processes share the same port. Under Windows, each child process uses a specific port number. The first number is the one set for the PHP interpreter; the other child processes increment this number. For example, if the default port is 8002 and you launch 5 child processes, they will use ports 8002 to 8006."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Restart the interpreter after X requests"),": This sets the maximum number of requests that the 4D PHP interpreter accepts. Cuando se alcanza este n\xfamero, el int\xe9rprete se reinicia. For more information about this parameter, refer to the FastCGI-PHP documentation."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," In this dialog box, the parameters are specified by default for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html"}),"Get database parameter")," commands. Los par\xe1metros modificados por el comando ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," tienen prioridad para la sesi\xf3n actual.")))))}m.isMDXComponent=!0}}]);