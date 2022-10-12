"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});t(67294);var r=t(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"overview",title:"Overview"},s=void 0,u={unversionedId:"Menus/overview",id:"version-18/Menus/overview",title:"Overview",description:"You can create menu bars and menus for your 4D databases and custom applications. Because pull-down menus are a standard feature of any desktop application, their addition will make your databases easier to use and will make them feel familiar to users.",source:"@site/versioned_docs/version-18/Menus/overview.md",sourceDirName:"Menus",slug:"/Menus/overview",permalink:"/docs/18/Menus/overview",draft:!1,tags:[],version:"18",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Web Area",permalink:"/docs/18/FormObjects/propertiesWebArea"},next:{title:"Creating menus and menu bars",permalink:"/docs/18/Menus/creating"}},c={},l=[{value:"Menu editor",id:"menu-editor",level:2}],m={toc:l};function p(e){var{components:n}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",a({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create menu bars and menus for your 4D databases and custom applications. Because pull-down menus are a standard feature of any desktop application, their addition will make your databases easier to use and will make them feel familiar to users."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(97525).Z,width:"448",height:"138"})),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"menu bar")," is a group of menus that can be displayed on a screen together. Each ",(0,r.kt)("strong",{parentName:"p"},"menu")," on a menu bar can have numerous menu commands in it, including some that call cascading submenus (or hierarchical submenus). When the user chooses a menu or submenu command, it calls a project method or a standard action that performs an operation."),(0,r.kt)("p",null,"You can have many separate menu bars for each database. For example, you can use one menu bar that contains menus for standard database operations and another that becomes active only for reporting. One menu bar may contain a menu with menu commands for entering records. The menu bar appearing with the input form may contain the same menu, but the menu commands are disabled because the user doesn\u2019t need them during data entry."),(0,r.kt)("p",null,"You can use the same menu in several menu bars or other menus, or you can leave it unattached and manage it only by programming (in this case, it is known as an independent menu)."),(0,r.kt)("p",null,"When you design menus, keep the following two rules in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use menus for functions that are suited to menus: Menu commands should perform tasks such as adding a record, searching for records, or printing a report."),(0,r.kt)("li",{parentName:"ul"},"Group menu commands by function: For example, all menu commands that print reports should be in the same menu. For another example, you might have all the operations for a certain table in one menu.")),(0,r.kt)("p",null,"To create menus and menu bars, you can use either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Menu editor from the Toolbox,"),(0,r.kt)("li",{parentName:"ul"},'language commands for the "Menus" theme,'),(0,r.kt)("li",{parentName:"ul"},"a combination of both.")),(0,r.kt)("h2",a({},{id:"menu-editor"}),"Menu editor"),(0,r.kt)("p",null,"The Menu editor is accessed using the ",(0,r.kt)("strong",{parentName:"p"},"Menus")," button of the Toolbox."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(85723).Z,width:"778",height:"575"})),(0,r.kt)("p",null,"Menus and menu bars are displayed as two items of the same hierarchical list, on the left side of the dialog box. Each menu can be attached to a menu bar or to another menu. In the second case, the menu becomes a sub-menu."),(0,r.kt)("p",null,"4D assigns menu bar numbers sequentially \u2014 Menu Bar #1 appears first. You can rename menu bars but you cannot change their numbers. These numbers are used by the language commands."))}p.isMDXComponent=!0},85723:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/editor1-03bcee3b6ceb440afa5b4ff149352506.png"},97525:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);