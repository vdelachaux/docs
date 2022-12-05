"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"overview",title:"Overview"},l=void 0,c={unversionedId:"Backup/overview",id:"version-18/Backup/overview",title:"Overview",description:"4D includes a full database backup and restore module.",source:"@site/versioned_docs/version-18/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/18/Backup/overview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Backup/overview.md",tags:[],version:"18",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Encrypt Page",permalink:"/docs/18/MSC/encrypt"},next:{title:"Backup",permalink:"/docs/18/Backup/backup"}},s={},u=[],p={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D includes a full database backup and restore module."),(0,n.kt)("p",null,"This module allows backing up a database currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Database Settings."),(0,n.kt)("p",null,"Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface."),(0,n.kt)("p",null,"Databases can be restored automatically when a damaged database is opened."),(0,n.kt)("p",null,"Also, the integrated backup module can take advantage of the .journal file (",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/18/Backup/log"}),"database log file"),"). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with a database in use, any operations missing in the data file are automatically reintegrated the next time the database is opened. You can view the journal file contents at any time."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of databases for backup purposes. These solutions can be based on the following mechanisms and technologies:  "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,n.kt)("li",{parentName:"ul"},"Synchronization using SQL"),(0,n.kt)("li",{parentName:"ul"},"Synchronization using HTTP (/rest/url)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),".")))}d.isMDXComponent=!0}}]);