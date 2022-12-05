"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"overview",title:"Overview"},l=void 0,c={unversionedId:"Project/overview",id:"version-19/Project/overview",title:"Overview",description:"A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files.",source:"@site/versioned_docs/version-19/Project/overview.md",sourceDirName:"Project",slug:"/Project/overview",permalink:"/docs/19/Project/overview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Project/overview.md",tags:[],version:"19",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/docs/19/Notes/updates"},next:{title:"Working with a project",permalink:"/docs/19/Project/creating"}},p={},s=[{value:"Project files",id:"project-files",level:2},{value:"Development",id:"development",level:2},{value:"Final application",id:"final-application",level:2}],d={toc:s};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. A 4D project is primarily made of text-based files. "),(0,o.kt)("h2",n({},{id:"project-files"}),"Project files"),(0,o.kt)("p",null,"4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor..."),(0,o.kt)("p",null,"Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor. "),(0,o.kt)("p",null,"In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/19/Project/architecture"}),"folders and files"),"."),(0,o.kt)("h2",n({},{id:"development"}),"Development"),(0,o.kt)("p",null,"4D projects are developed using the ",(0,o.kt)("strong",{parentName:"p"},"4D")," application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing to develop, test, and debug any kind of project. "),(0,o.kt)("p",null,"Multi-user development is managed via standard ",(0,o.kt)("strong",{parentName:"p"},"source control")," repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications. "),(0,o.kt)("h2",n({},{id:"final-application"}),"Final application"),(0,o.kt)("p",null,"Project files can be ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/19/Project/compiler"}),"compiled")," and easily deployed. 4D allows you to create three types of applications from your projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/19/WebServer/overview"}),"web")," applications,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/4d-for-ios/"}),"mobile")," applications, "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/19/Desktop/building"}),"desktop")," applications (client/server or single-user). ")),(0,o.kt)("p",null,"Back end applications can be deployed using 4D Server, 4D, or merged with 4D Volume license."))}u.isMDXComponent=!0}}]);