"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84834],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});t(67294);var r=t(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"control-flow",title:"Condiciones y bucles"},l=void 0,s={unversionedId:"Concepts/control-flow",id:"version-19-R7/Concepts/control-flow",title:"Condiciones y bucles",description:"Independientemente de la simplicidad o la complejidad de un m\xe9todo o de una funci\xf3n, siempre utilizar\xe1 uno o varios de los tres tipos de estructuras de programaci\xf3n. Las estructuras de programaci\xf3n determinan el flujo de ejecuci\xf3n, si se ejecutan y el orden de las l\xedneas de instrucciones dentro de un m\xe9todo. Hay tres tipos de estructuras:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/docs/es/Concepts/control-flow",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Concepts/flow-control.md",tags:[],version:"19-R7",frontMatter:{id:"control-flow",title:"Condiciones y bucles"},sidebar:"docs",previous:{title:"Clases",permalink:"/docs/es/Concepts/classes"},next:{title:"Estructuras condicionales",permalink:"/docs/es/Concepts/branching"}},c={},u=[{value:"return {expression}",id:"return-expression",level:2},{value:"Ejemplo",id:"ejemplo",level:3}],d={toc:u};function p(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Independientemente de la simplicidad o la complejidad de un m\xe9todo o de una funci\xf3n, siempre utilizar\xe1 uno o varios de los tres tipos de estructuras de programaci\xf3n. Las estructuras de programaci\xf3n determinan el flujo de ejecuci\xf3n, si se ejecutan y el orden de las l\xedneas de instrucciones dentro de un m\xe9todo. Hay tres tipos de estructuras:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secuencial"),": una estructura secuencial es una estructura simple y lineal. Una secuencia es una serie de sentencias que 4D ejecuta una tras otra, de la primera a la \xfaltima. Una instrucci\xf3n de una l\xednea, utilizada frecuentemente para los m\xe9todos de los objetos, es el caso m\xe1s simple de una estructura secuencial. Por ejemplo: ",(0,r.kt)("inlineCode",{parentName:"li"},"[People]lastName:=Uppercase([People]lastName)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/docs/es/Concepts/branching"}),"Branching")),": una estructura de bifurcaci\xf3n permite que los m\xe9todos prueben una condici\xf3n y tomen caminos alternativos, dependiendo del resultado. La condici\xf3n es una expresi\xf3n booleana, una expresi\xf3n que eval\xfaa TRUE o FALSE. Una estructura condicional es la estructura ",(0,r.kt)("inlineCode",{parentName:"li"},"If...Else...End if"),", que dirige el flujo del programa a lo largo de uno de los dos caminos. The other branching structure is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Case of... Else...End case")," structure, which directs program flow to one of many paths."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/docs/es/Concepts/looping"}),"Bucle")),": cuando se escriben m\xe9todos, es muy com\xfan encontrarse con que se necesita que una secuencia de sentencias se repita un n\xfamero de veces. Para hacer frente a esta necesidad, el lenguaje 4D ofrece las siguientes estructuras de bucle:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,r.kt)("br",null)," Los bucles se controlan de dos maneras: o bien hacen un bucle hasta que se cumpla una condici\xf3n, o bien hacen un bucle un n\xfamero determinado de veces. Cada estructura de bucle puede utilizarse de cualquier manera, pero los bucles ",(0,r.kt)("inlineCode",{parentName:"li"},"While")," y los bucles ",(0,r.kt)("inlineCode",{parentName:"li"},"Repeat")," son m\xe1s apropiados para repetir hasta que se cumpla una condici\xf3n, y los bucles ",(0,r.kt)("inlineCode",{parentName:"li"},"For")," son m\xe1s apropiados para hacer un bucle un n\xfamero determinado de veces. ",(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each")," permite la mezcla en ambos sentidos y est\xe1 dise\xf1ado para realizar bucles dentro de objetos y colecciones.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:"),' 4D permite anidar estructuras de programaci\xf3n hasta una "profundidad" de 512 niveles.'),(0,r.kt)("h2",a({},{id:"return-expression"}),"return {expression}"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3rico"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modificaciones"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"v19 R4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,r.kt)("p",null,"La instrucci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," puede ser llamada desde cualquier lugar. Cuando se utiliza una instrucci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," en una funci\xf3n o un m\xe9todo, se detiene la ejecuci\xf3n de la funci\xf3n o del m\xe9todo. El c\xf3digo restante no se ejecuta y el control se devuelve al llamante."),(0,r.kt)("p",null,"La instrucci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," puede utilizarse para ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/Concepts/parameters#return-expression"}),"devolver un valor")," al llamante."),(0,r.kt)("h3",a({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $message : Text\nvar $i : Integer\n\nWhile (True) //infinite loop\n    $i:=$i+1\n    $message+=String($i)+"A\\r"  // hasta 5\n    logConsole($message)\n    If ($i=5)\n        return //stops the loop\n    End if \n    $message+=String($i)+"B\\r"  // hasta 4\n    logConsole($message)\nEnd while \n$message+=String($i)+"C\\r"  //nunca se ejecuto \nlogConsole($message)\n\n// 1A\n// 1B\n// 2A\n// 2B\n// 3A\n// 3B\n// 4A\n// 4B\n// 5A\n\n')))}p.isMDXComponent=!0}}]);