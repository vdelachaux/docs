"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29261],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return t?o.createElement(f,n(n({ref:r},l),{},{components:t})):o.createElement(f,n({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,n=new Array(s);n[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var c=2;c<s;c++)n[c]=t[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12655:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>l});t(67294);var o=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const n={id:"stepper",title:"Stepper"},i=void 0,p={unversionedId:"FormObjects/stepper",id:"version-19-R7/FormObjects/stepper",title:"Stepper",description:"Un stepper permite al usuario desplazarse por valores num\xe9ricos, duraciones (tiempos) o fechas por pasos predefinidos haciendo clic en los botones de flecha.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/FormObjects/stepper.md",sourceDirName:"FormObjects",slug:"/FormObjects/stepper",permalink:"/docs/es/FormObjects/stepper",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"stepper",title:"Stepper"},sidebar:"docs",previous:{title:"Imagen est\xe1tica",permalink:"/docs/es/FormObjects/staticPicture"},next:{title:"Subformulario",permalink:"/docs/es/FormObjects/subformOverview"}},c={},l=[{value:"Uso del stepper",id:"uso-del-stepper",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}],d={toc:l};function m(e){var{components:r}=e,n=s(e,["components"]);return(0,o.kt)("wrapper",a({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un stepper permite al usuario desplazarse por valores num\xe9ricos, duraciones (tiempos) o fechas por pasos predefinidos haciendo clic en los botones de flecha."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(86374).Z,width:"285",height:"61"})),(0,o.kt)("h2",a({},{id:"uso-del-stepper"}),"Uso del stepper"),(0,o.kt)("p",null,"Puede asignar la variable asociada al objeto a un \xe1rea introducible (campo o variable) para almacenar o modificar el valor actual del objeto."),(0,o.kt)("p",null,"Se puede asociar un stepper directamente a una variable num\xe9rica, hora o fecha."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Para los valores de tipo hora, las propiedades M\xednimo, M\xe1ximo y Paso representan segundos. Por ejemplo, para programar un paso de 8:00 a 18:00 con pasos de 10 minutos:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/propertiesScale#minium"}),"m\xednimo")," = 28 800 (8","*","60","*","60)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/propertiesScale#maximum"}),"m\xe1ximo")," = 64 800 (18","*","60","*","60)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/propertiesScale#step"}),"paso")," = 600 (10","*","60)"))),(0,o.kt)("li",{parentName:"ul"},"Para los valores de tipo fecha, el valor introducido en la propiedad ",(0,o.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/propertiesScale#step"}),"paso")," representa d\xedas. Las propiedades M\xednimo y M\xe1ximo se ignoran.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html"}),"C_TIME")," or ",(0,o.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html"}),"C_DATE")," command."))))),(0,o.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/progressIndicator#using-indicatire"}),"Uso de indicadores"),' en la p\xe1gina "Indicadores de progreso".'),(0,o.kt)("h2",a({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de la l\xednea de borde")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Abajo")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#enterable"}),"Editable")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAction#execute-object-method"}),"Ejecutar m\xe9todo objeto")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n"),' (s\xf3lo "entero", "n\xfamero", "fecha" u "hora") - ',(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura<")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesHelp#help-tip"}),"Mensaje de ayuda")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dim. horizontal")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesScale#maximum"}),"M\xe1ximo")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesScale#minimum"}),"M\xednimo")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesScale#step"}),"Paso")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top"}),"Arriba")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression"}),"Variable o Expresi\xf3n")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dim. vertical")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")),(0,o.kt)("h2",a({},{id:"ver-tambi\xe9n"}),"Ver tambi\xe9n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/progressIndicator"}),"indicadores de progreso")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/ruler"}),"reglas"))))}m.isMDXComponent=!0},86374:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,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"}}]);