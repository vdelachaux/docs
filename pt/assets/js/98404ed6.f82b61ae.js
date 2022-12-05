"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7507],{3905:(e,t,A)=>{A.d(t,{Zo:()=>l,kt:()=>g});var n=A(67294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function s(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):s(s({},t),e)),A},l=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(A),g=r,f=u["".concat(o,".").concat(g)]||u[g]||p[g]||a;return A?n.createElement(f,s(s({ref:t},l),{},{components:A})):n.createElement(f,s({ref:t},l))}));function g(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=A.length,s=new Array(a);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=A[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,A)}u.displayName="MDXCreateElement"},42060:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});A(67294);var n=A(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}const s={id:"overview",title:"Vis\xe3o Geral"},i=void 0,o={unversionedId:"settings/overview",id:"version-19-R6/settings/overview",title:"Vis\xe3o Geral",description:"The Settings configure how the current project functions. These parameters may be different for each project. They include the listening ports, backup configurations, security options, Web parameters, etc.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/settings/overview.md",sourceDirName:"settings",slug:"/settings/overview",permalink:"/docs/pt/19-R6/settings/overview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/settings/overview.md",tags:[],version:"19-R6",frontMatter:{id:"overview",title:"Vis\xe3o Geral"},sidebar:"docs",previous:{title:"Descri\xe7\xe3o de arquivos de hist\xf3rico",permalink:"/docs/pt/19-R6/Debugging/debugLogFiles"},next:{title:"General page",permalink:"/docs/pt/19-R6/settings/general"}},c={},l=[{value:"Accessing the settings",id:"accessing-the-settings",level:2},{value:"Locking information",id:"locking-information",level:3},{value:"Customizing parameters",id:"customizing-parameters",level:2},{value:"Resetting the settings",id:"resetting-the-settings",level:2}],p={toc:l};function u(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)("wrapper",r({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Settings configure how the current project functions. These parameters may be different for each project. They include the listening ports, backup configurations, security options, Web parameters, etc."),(0,n.kt)("p",null,(0,n.kt)("img",{src:A(6382).Z,width:"863",height:"723"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D provides another set of parameters, called ",(0,n.kt)("strong",{parentName:"p"},"Preferences"),", that apply to the 4D IDE application. For more information, refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Preferences/general"}),"Preferences"),".")),(0,n.kt)("h2",r({},{id:"accessing-the-settings"}),"Accessing the settings"),(0,n.kt)("p",null,"You can access the Settings dialog box:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"using the ",(0,n.kt)("strong",{parentName:"li"},"Design > Settings...")," menu option"),(0,n.kt)("li",{parentName:"ul"},"by clicking ",(0,n.kt)("strong",{parentName:"li"},"Settings")," on the 4D toolbar"),(0,n.kt)("li",{parentName:"ul"},"on 4D Server, using the ",(0,n.kt)("strong",{parentName:"li"},"Edit > Settings...")," menu option")),(0,n.kt)("p",null,"When ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Desktop/user-settings"}),(0,n.kt)("strong",{parentName:"a"},"User settings")," mode is enabled"),", ",(0,n.kt)("strong",{parentName:"p"},"Settings...")," is renamed ",(0,n.kt)("strong",{parentName:"p"},"Structure Settings...")," and two additional menu commands are available at each location:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Settings...")," gives you access to settings that can be stored externally in a user file. If these are modified, they are used instead of structure settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Settings for Data File...")," gives you access to settings that can be stored externally in a user file attached to the current data file. If they are modified, they are used instead of user or structure settings.")),(0,n.kt)("h3",r({},{id:"locking-information"}),"Locking information"),(0,n.kt)("p",null,"Locking can occur in both Project and Client/server modes when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"settings.4DSettings")," file is 'Read-only' (Projects only). Modifying a setting will display an alert to unlock it, if possible."),(0,n.kt)("li",{parentName:"ul"},"Two or more users attempt to modify the same settings at the same time. The settings cannot be used until the first user frees it by closing the window. (Client/server only)")),(0,n.kt)("p",null,"In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed."),(0,n.kt)("h2",r({},{id:"customizing-parameters"}),"Customizing parameters"),(0,n.kt)("p",null,"In the Settings dialog boxes, parameters whose values have been modified appear ",(0,n.kt)("strong",{parentName:"p"},"in bold"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{src:A(83284).Z,width:"703",height:"192"})),(0,n.kt)("p",null,"Parameters indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted project."),(0,n.kt)("p",null,"A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized."),(0,n.kt)("p",null,"Most of the settings are applied immediately. However, a few of them (such as the Startup environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup."),(0,n.kt)("h2",r({},{id:"resetting-the-settings"}),"Resetting the settings"),(0,n.kt)("p",null,"To reset the parameters to their default values and remove the bold style indicating that they have been customized, click ",(0,n.kt)("strong",{parentName:"p"},"Reset to factory settings"),"."),(0,n.kt)("p",null,"This button resets all the parameters of the current page. It becomes active when at least one parameter has been modified on the current page."))}u.isMDXComponent=!0},83284:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6382:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/main-eb76fd922646d74ff2d364ba82524934.png"}}]);