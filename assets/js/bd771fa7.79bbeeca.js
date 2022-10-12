"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14960],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(a),c=n,N=k["".concat(i,".").concat(c)]||k[c]||s[c]||l;return a?r.createElement(N,o(o({ref:e},m),{},{components:a})):r.createElement(N,o({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:n,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},87325:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"ZipFolderClass",title:"ZIPFolder"},d=void 0,i={unversionedId:"API/ZipFolderClass",id:"version-19-R7/API/ZipFolderClass",title:"ZIPFolder",description:"The following properties and functions from the Folder class are available to ZIPFolder objects:",source:"@site/versioned_docs/version-19-R7/API/ZipFolderClass.md",sourceDirName:"API",slug:"/API/ZipFolderClass",permalink:"/docs/API/ZipFolderClass",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"ZipFolderClass",title:"ZIPFolder"},sidebar:"docs",previous:{title:"ZIPFile",permalink:"/docs/API/ZipFileClass"},next:{title:"About 4D Code",permalink:"/docs/code-editor/overview"}},p={},m=[],s={toc:m};function k(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following properties and functions from the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/API/FolderClass"}),"Folder")," class are available to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIPFolder")," objects:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Available ",(0,r.kt)("a",n({parentName:"th"},{href:"/docs/API/FolderClass"}),"Folder")," APIs for ZIPFolder"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#copyto"}),(0,r.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,r.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { ; ",(0,r.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,r.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#creationdate"}),(0,r.kt)("strong",{parentName:"a"},".creationDate")," : Date")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Date may be different for the ",(0,r.kt)("inlineCode",{parentName:"td"},"root")," folder from a folder within the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#creationtime"}),(0,r.kt)("strong",{parentName:"a"},".creationTime")," : Time")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Time may be different for the ",(0,r.kt)("inlineCode",{parentName:"td"},"root")," folder from a folder within the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#exists"}),(0,r.kt)("strong",{parentName:"a"},".exists")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#extension"}),(0,r.kt)("strong",{parentName:"a"},".extension")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#file"}),(0,r.kt)("strong",{parentName:"a"},".file"),"( ",(0,r.kt)("em",{parentName:"a"},"path")," : Text ) : 4D.File")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#files"}),(0,r.kt)("strong",{parentName:"a"},".files"),"( { ",(0,r.kt)("em",{parentName:"a"},"options")," : Integer } ) : Collection")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#folder"}),(0,r.kt)("strong",{parentName:"a"},".folder"),"( ",(0,r.kt)("em",{parentName:"a"},"path")," : Text ) : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#folders"}),(0,r.kt)("strong",{parentName:"a"},".folders"),"( { ",(0,r.kt)("em",{parentName:"a"},"options")," : Integer } ) : Collection")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#fullname"}),(0,r.kt)("strong",{parentName:"a"},".fullName")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#geticon"}),(0,r.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,r.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#hidden"}),(0,r.kt)("strong",{parentName:"a"},".hidden")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#isalias"}),(0,r.kt)("strong",{parentName:"a"},".isAlias")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#isfile"}),(0,r.kt)("strong",{parentName:"a"},".isFile")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#isfolder"}),(0,r.kt)("strong",{parentName:"a"},".isFolder")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#ispackage"}),(0,r.kt)("strong",{parentName:"a"},".isPackage")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#modificationdate"}),(0,r.kt)("strong",{parentName:"a"},".modificationDate")," : Date")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Date may be different for the ",(0,r.kt)("inlineCode",{parentName:"td"},"root")," folder from a folder within the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#modificationtime"}),(0,r.kt)("strong",{parentName:"a"},".modificationTime")," : Time")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Time may be different for the ",(0,r.kt)("inlineCode",{parentName:"td"},"root")," folder from a folder within the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#name"}),(0,r.kt)("strong",{parentName:"a"},".name")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#original"}),(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#parent"}),(0,r.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The archive's virtual ",(0,r.kt)("inlineCode",{parentName:"td"},"root")," folder has no parent. However, the folders within the archive may have a parent other than the root.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#path"}),(0,r.kt)("strong",{parentName:"a"},".path")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns a path relative to the archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/API/FolderClass#platformpath"}),(0,r.kt)("strong",{parentName:"a"},".platformPath")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))))}k.isMDXComponent=!0}}]);