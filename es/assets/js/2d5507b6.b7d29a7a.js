"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32574],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>b});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),l=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=t,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return n?r.createElement(m,i(i({ref:a},d),{},{components:n})):r.createElement(m,i({ref:a},d))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39512:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const i={id:"rollback",title:"P\xe1gina Retroceso",sidebar_label:"P\xe1gina Retroceso"},c=void 0,s={unversionedId:"MSC/rollback",id:"version-19-R7/MSC/rollback",title:"P\xe1gina Retroceso",description:"La p\xe1gina Retroceso permite acceder a la funci\xf3n de retorno entre las operaciones realizadas en el archivo de datos. Se asemeja a una funci\xf3n de anulaci\xf3n aplicada en varios niveles. Es especialmente \xfatil cuando un registro ha sido borrado por error en una base de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/es/MSC/rollback",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/MSC/rollback.md",tags:[],version:"19-R7",frontMatter:{id:"rollback",title:"P\xe1gina Retroceso",sidebar_label:"P\xe1gina Retroceso"},sidebar:"docs",previous:{title:"P\xe1gina compactado",permalink:"/docs/es/MSC/compact"},next:{title:"P\xe1gina Restauraci\xf3n",permalink:"/docs/es/MSC/restore"}},l={},d=[],u={toc:d};function p(e){var{components:a}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",t({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"La p\xe1gina Retroceso permite acceder a la funci\xf3n de retorno entre las operaciones realizadas en el archivo de datos. Se asemeja a una funci\xf3n de anulaci\xf3n aplicada en varios niveles. Es especialmente \xfatil cuando un registro ha sido borrado por error en una base de datos."),(0,r.kt)("p",null,"Esta funci\xf3n s\xf3lo est\xe1 disponible cuando la aplicaci\xf3n trabaja con un archivo de historial de datos."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70134).Z,width:"882",height:"666"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si la base de datos est\xe1 encriptada y no se ha suministrado una llave de datos v\xe1lida correspondiente al archivo de registro abierto, los valores encriptados no se muestran en la columna ",(0,r.kt)("strong",{parentName:"p"},"Valores")," y se muestra un di\xe1logo en el que se solicita la frase secreta o la llave de datos si se hace clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Retroceso"),".")),(0,r.kt)("p",null,"El contenido y el funcionamiento de la lista de operaciones es el mismo que el de la ventana ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/es/MSC/analysis"}),"An\xe1lisis de actividades"),"."),(0,r.kt)("p",null,"Para realizar un retroceso entre las operaciones, seleccione la linea tras la cual deben anularse todas las operaciones. La operaci\xf3n de la l\xednea seleccionada ser\xe1 la \xfaltima conservada. Si, por ejemplo, desea cancelar una eliminaci\xf3n, seleccione la operaci\xf3n situada justo antes de ella. La operaci\xf3n de eliminaci\xf3n, as\xed como todas las operaciones posteriores, se cancelar\xe1n."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(52581).Z,width:"1008",height:"366"})),(0,r.kt)("p",null,"A continuaci\xf3n, haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Retroceso"),". 4D le pide que confirme la operaci\xf3n. Si hace clic en ",(0,r.kt)("strong",{parentName:"p"},"Aceptar"),", los datos se restauran al estado exacto en el que se encontraban en el momento de la acci\xf3n seleccionada."),(0,r.kt)("p",null,"El men\xfa que se encuentra en la parte inferior de la ventana permite seleccionar un archivo de historial que se utilizar\xe1 cuando se aplique la funci\xf3n de retorno a una base restaurada desde un archivo. En este caso, debe especificar el archivo de historial de datos correspondiente al archivo."),(0,r.kt)("p",null,"As\xed es como funciona la funci\xf3n de retroceso: cuando el usuario hace clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Retroceso"),", 4D cierra la base de datos actual y restaura la \xfaltima copia de seguridad de los datos de la base. La base restaurada se abre y 4D integra las operaciones del archivo de historial de datos hasta la operaci\xf3n seleccionada. Si la base a\xfan no se ha guardado, 4D se inicia con un archivo de datos vac\xedo."))}p.isMDXComponent=!0},70134:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},52581:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"}}]);