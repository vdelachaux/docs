"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var A=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,A)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,A,n=function(e,t){if(null==e)return{};var r,A,n={},a=Object.keys(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=A.createContext({}),c=function(e){var t=A.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return A.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},g=A.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(r),p=n,d=g["".concat(s,".").concat(p)]||g[p]||l[p]||a;return r?A.createElement(d,i(i({ref:t},u),{},{components:r})):A.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return A.createElement.apply(null,i)}return A.createElement.apply(null,r)}g.displayName="MDXCreateElement"},45249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var A=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var A in r)Object.prototype.hasOwnProperty.call(r,A)&&(e[A]=r[A])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,A,n=function(e,t){if(null==e)return{};var r,A,n={},a=Object.keys(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)r=a[A],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"overview",title:"Overview"},o=void 0,s={unversionedId:"Preferences/overview",id:"version-19-R7/Preferences/overview",title:"Overview",description:"User preferences specify various settings affecting your working environment, e.g. default options, display themes, Code Editor features, shortcuts, etc. They are applied to all projects opened with your 4D or 4D Server application.",source:"@site/versioned_docs/version-19-R7/Preferences/overview.md",sourceDirName:"Preferences",slug:"/Preferences/overview",permalink:"/docs/Preferences/overview",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Compatibility page",permalink:"/docs/settings/compatibility"},next:{title:"General Page",permalink:"/docs/Preferences/general"}},c={},u=[{value:"Access",id:"access",level:2},{value:"Storage",id:"storage",level:2},{value:"Customizing parameters and reset settings",id:"customizing-parameters-and-reset-settings",level:2}],l={toc:u};function g(e){var{components:t}=e,i=a(e,["components"]);return(0,A.kt)("wrapper",n({},l,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"User preferences specify various settings affecting your working environment, e.g. default options, display themes, Code Editor features, shortcuts, etc. They are applied to all projects opened with your 4D or 4D Server application."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"4D Server"),": Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. Only one user can use the Preferences dialog box at a time."),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"4D offers a different set of parameters specific to the open projet: ",(0,A.kt)("strong",{parentName:"p"},"Settings")," (available from the ",(0,A.kt)("strong",{parentName:"p"},"Design")," menu). For more information, refer to the Settings chapter.")),(0,A.kt)("h2",n({},{id:"access"}),"Access"),(0,A.kt)("p",null,"You can access the Preferences dialog box from the ",(0,A.kt)("strong",{parentName:"p"},"Edit > Preferences...")," menu (Windows) or the ",(0,A.kt)("strong",{parentName:"p"},"4D")," Application menu (macOS):"),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(62618).Z,width:"314",height:"300"})," "),(0,A.kt)("p",null,"This menu option is available even when there is no open project."),(0,A.kt)("p",null,'You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the ',(0,A.kt)("inlineCode",{parentName:"p"},"OPEN SETTINGS WINDOW")," command."),(0,A.kt)("h2",n({},{id:"storage"}),"Storage"),(0,A.kt)("p",null,"Settings made in the Preferences dialog box are saved in an XML format preferences file named ",(0,A.kt)("strong",{parentName:"p"},"4D Preferences vXX.4DPreferences")," that is stored in the active 4D folder of the current user, as returned by the ",(0,A.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html"}),(0,A.kt)("inlineCode",{parentName:"a"},"Get 4D folder"))," command:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Windows: ",(0,A.kt)("inlineCode",{parentName:"li"},"{disk}\\Users\\{UserName}\\AppData\\Roaming\\4D")),(0,A.kt)("li",{parentName:"ul"},"macOS: ",(0,A.kt)("inlineCode",{parentName:"li"},"{disk}:Users:{UserName}:Library:Application Support:4D"))),(0,A.kt)("h2",n({},{id:"customizing-parameters-and-reset-settings"}),"Customizing parameters and reset settings"),(0,A.kt)("p",null,"In settings dialog boxes, parameters whose values have been modified appear in bold:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(28769).Z,width:"833",height:"145"})),(0,A.kt)("p",null,"Preferences indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted database. "),(0,A.kt)("p",null,"A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized. "),(0,A.kt)("p",null,"To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the ",(0,A.kt)("strong",{parentName:"p"},"Reset to factory settings")," button:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(1311).Z,width:"866",height:"126"})),(0,A.kt)("p",null,"This button resets all the parameters of the current page. It becomes active when at least one parameter has been modified on the current page."))}g.isMDXComponent=!0},62618:(e,t,r)=>{r.d(t,{Z:()=>A});const A="data:image/png;base64,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"},1311:(e,t,r)=>{r.d(t,{Z:()=>A});const A="data:image/png;base64,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"},28769:(e,t,r)=>{r.d(t,{Z:()=>A});const A="data:image/png;base64,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"}}]);