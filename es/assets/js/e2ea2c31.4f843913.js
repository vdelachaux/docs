"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),v=n,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"variant",title:"Variant"},l=void 0,s={unversionedId:"Concepts/variant",id:"version-19-R6/Concepts/variant",title:"Variant",description:"Variant es un tipo de variable que permite encapsular datos de todo tipo v\xe1lido y est\xe1ndar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir c\xf3digo gen\xe9rico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del c\xf3digo que maneja los atributos de objeto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/Concepts/dt_variant.md",sourceDirName:"Concepts",slug:"/Concepts/variant",permalink:"/docs/es/19-R6/Concepts/variant",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/Concepts/dt_variant.md",tags:[],version:"19-R6",frontMatter:{id:"variant",title:"Variant"},sidebar:"docs",previous:{title:"Hora",permalink:"/docs/es/19-R6/Concepts/time"},next:{title:"Variables",permalink:"/docs/es/19-R6/Concepts/variables"}},p={},c=[],u={toc:c};function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Variant es un tipo de variable que permite encapsular datos de todo tipo v\xe1lido y est\xe1ndar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir c\xf3digo gen\xe9rico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del c\xf3digo que maneja los atributos de objeto."),(0,r.kt)("p",null,"Una variable de tipo variant puede contener un valor de los tipos de datos siguientes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BLOB"),(0,r.kt)("li",{parentName:"ul"},"boolean"),(0,r.kt)("li",{parentName:"ul"},"collection"),(0,r.kt)("li",{parentName:"ul"},"date"),(0,r.kt)("li",{parentName:"ul"},"entero largo"),(0,r.kt)("li",{parentName:"ul"},"object"),(0,r.kt)("li",{parentName:"ul"},"picture"),(0,r.kt)("li",{parentName:"ul"},"pointer"),(0,r.kt)("li",{parentName:"ul"},"real"),(0,r.kt)("li",{parentName:"ul"},"text"),(0,r.kt)("li",{parentName:"ul"},"time"),(0,r.kt)("li",{parentName:"ul"},"null"),(0,r.kt)("li",{parentName:"ul"},"indefinido")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Las matrices no pueden almacenarse en variables de tipo variant.")),(0,r.kt)("p",null,"Tanto en modo interpretado como en compilado, a una misma variable variant se le pueden asignar contenidos de diferentes tipos. A diferencia de los tipos de variable est\xe1ndar, el tipo de contenido de la variable variant es diferente del tipo de variable variant mismo. Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n')),(0,r.kt)("p",null,"Se pueden utilizar variables variant en cualquier lugar donde se esperen variables, s\xf3lo hay que asegurarse de que el tipo de datos del contenido de la variable es del tipo esperado. Al acceder a las variables de las variantes, s\xf3lo se tiene en cuenta su valor actual. Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //asignar una variable a otra variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n')),(0,r.kt)("p",null,"Variant se puede utilizar para declarar par\xe1metros de m\xe9todos ($0, $1,...) que pueden ser de varios tipos. En este caso, puede construir su c\xf3digo probando el tipo de valor del par\xe1metro, por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"C_VARIANT($1)\nCase of\n: (Value type($1)=Is longint)\n...\n: (Value type($1)=Is text)\n...\n//statement(s)\n End case\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cuando las variables variant no son necesarias (es decir, cuando se conoce el tipo de datos), se recomienda utilizar variables de tipo est\xe1ndar. Las variables de tipo est\xe1ndar ofrecen un mejor rendimiento, hacen que el c\xf3digo sea m\xe1s claro y son \xfatiles para que el compilador evite los errores relacionados con el paso de tipos de datos inesperados.")))}d.isMDXComponent=!0}}]);