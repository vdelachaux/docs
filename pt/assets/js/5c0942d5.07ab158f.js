"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"spinner",title:"Spinner"},p=void 0,s={unversionedId:"FormObjects/spinner",id:"version-18/FormObjects/spinner",title:"Spinner",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/spinner.md",sourceDirName:"FormObjects",slug:"/FormObjects/spinner",permalink:"/docs/pt/18/FormObjects/spinner",draft:!1,tags:[],version:"18",frontMatter:{id:"spinner",title:"Spinner"},sidebar:"docs",previous:{title:"Formas",permalink:"/docs/pt/18/FormObjects/shapesOverview"},next:{title:"Separador",permalink:"/docs/pt/18/FormObjects/splitters"}},c={},l=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:3}],m={toc:l};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,n.kt)("p",null,"The spinner is a circular indicator that displays a continuous animation, like the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/progressIndicator#barber-shop"}),"Barber shop"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(96751).Z,width:"50",height:"44"})),(0,n.kt)("p",null,"You use this type of object to indicate that an operation such as establishing a network connection or a performing a calculation is underway. When this indicator is selected, ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesScale"}),"graphical Scale properties")," are not available."),(0,n.kt)("p",null,"When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"associated variable or expression"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 (or any value other than 0) = Start animation,"),(0,n.kt)("li",{parentName:"ul"},"0 = Stop animation")),(0,n.kt)("h3",o({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," -",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}d.isMDXComponent=!0},96751:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spinner-156274f06885f34b79b8fa4815b4e8a8.gif"}}]);