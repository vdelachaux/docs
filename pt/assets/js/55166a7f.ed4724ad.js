"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"advanced-programming",title:"Advanced programming with Javascript"},s=void 0,p={unversionedId:"ViewPro/advanced-programming",id:"version-19-R7/ViewPro/advanced-programming",title:"Advanced programming with Javascript",description:"A 4D View Pro Area is a Web Area form object that uses the embedded web rendering engine. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/pt/ViewPro/advanced-programming",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"advanced-programming",title:"Advanced programming with Javascript"},sidebar:"docs",previous:{title:"Method List",permalink:"/docs/pt/ViewPro/method-list"},next:{title:"Developing Components",permalink:"/docs/pt/Extensions/develop-components"}},l={},c=[{value:"Hands-on example: Hiding the Ribbon",id:"hands-on-example-hiding-the-ribbon",level:2},{value:"Calling SpreadJS Javascript methods",id:"calling-spreadjs-javascript-methods",level:2},{value:"Exemplo",id:"exemplo",level:4},{value:"4D View Pro Tips repository",id:"4d-view-pro-tips-repository",level:2}],d={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A 4D View Pro Area is a ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/webAreaOverview"}),"Web Area form object")," that uses the ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"embedded web rendering engine"),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1029.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"WA Evaluate Javascript"))," 4D command."),(0,n.kt)("p",null,"Since 4D View Pro is powered by the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html"}),"SpreadJS spreadsheet solution"),", you can also call SpreadJS Javascript methods in 4D View Pro areas."),(0,n.kt)("h2",a({},{id:"hands-on-example-hiding-the-ribbon"}),"Hands-on example: Hiding the Ribbon"),(0,n.kt)("p",null,"Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/ViewPro/configuring#ribbon"}),"Ribbon"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"//Button's object method\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n")),(0,n.kt)("h2",a({},{id:"calling-spreadjs-javascript-methods"}),"Calling SpreadJS Javascript methods"),(0,n.kt)("p",null,"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets."),(0,n.kt)("p",null,"4D has a built-in ",(0,n.kt)("inlineCode",{parentName:"p"},"Utils.spread")," expression that points at the spreadsheet (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html"}),"Workbook methods"),"."),(0,n.kt)("h4",a({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"The following code undoes the last action in the spreadsheet:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n')),(0,n.kt)("h2",a({},{id:"4d-view-pro-tips-repository"}),"4D View Pro Tips repository"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/4d-depot/4D-View-Pro-Tips"}),"4D-View-Pro-Tips")," is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project."))}m.isMDXComponent=!0}}]);