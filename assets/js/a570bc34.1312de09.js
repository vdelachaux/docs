"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=o,v=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"http-server",title:"HTTP Server Page"},s=void 0,l={unversionedId:"ServerWindow/http-server",id:"version-19-R7/ServerWindow/http-server",title:"HTTP Server Page",description:"The HTTP Server page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server.",source:"@site/versioned_docs/version-19-R7/ServerWindow/http-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/http-server",permalink:"/docs/ServerWindow/http-server",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"http-server",title:"HTTP Server Page"},sidebar:"docs",previous:{title:"SQL Server Page",permalink:"/docs/ServerWindow/sql-server"},next:{title:"Real Time Monitor Page",permalink:"/docs/ServerWindow/real-time-monitor"}},c={},p=[{value:"Start/Stop HTTP Server",id:"startstop-http-server",level:2},{value:"Web Information",id:"web-information",level:2},{value:"SOAP Information",id:"soap-information",level:2},{value:"HTTP Server Configuration",id:"http-server-configuration",level:2}],u={toc:p};function m(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"HTTP Server")," page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(69607).Z,width:"1036",height:"701"})),(0,n.kt)("p",null,"The upper part of the page provides information about the current status of the HTTP server of 4D Server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"State"),": Started or Stopped"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Starting time"),": Date and time the HTTP server was last launched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Uptime"),": Time elapsed since last startup of the HTTP server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total HTTP hits"),": Number of (low level) HTTP hits received by the HTTP server since it was started.")),(0,n.kt)("h2",o({},{id:"startstop-http-server"}),"Start/Stop HTTP Server"),(0,n.kt)("p",null,"This button toggles and can be used to control the activation of the 4D Server HTTP server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'When the HTTP server state is "Started," the button is titled ',(0,n.kt)("strong",{parentName:"li"},"Stop HTTP Server"),". If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests."),(0,n.kt)("li",{parentName:"ul"},'When the HTTP server state is "Stopped," the button is titled ',(0,n.kt)("strong",{parentName:"li"},"Start HTTP Server"),". If you click on this button, the 4D Server HTTP server is immediately started; Web, REST, and SOAP requests are accepted.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You must have a suitable license in order to be able to start the HTTP server."),(0,n.kt)("p",{parentName:"blockquote"},"The HTTP server can also be launched automatically on application startup (Settings) or by programming.")),(0,n.kt)("h2",o({},{id:"web-information"}),"Web Information"),(0,n.kt)("p",null,"This area provides specific information about the Web server of 4D Server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Web requests"),": Accepted or Rejected. This information indicates whether the Web server is activated. Since the Web server is directly linked to the HTTP server, Web requests are accepted when the HTTP server is started and rejected when it is stopped."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maximum connections"),": Maximum number of Web connections allowed. This value depends on the license installed on the server machine.")),(0,n.kt)("h2",o({},{id:"soap-information"}),"SOAP Information"),(0,n.kt)("p",null,"This area provides specific information about the SOAP server of 4D Server and includes a control button."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SOAP requests"),": Accepted or Rejected. This information indicates whether the SOAP server is activated. In order for SOAP requests to be accepted, the HTTP server must be started and the SOAP server must explicitly accept the requests (see the Accept/Reject button)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maximum connections"),": Maximum number of SOAP connections allowed. This value depends on the license installed on the server machine."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept/Reject SOAP requests")," button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the ",(0,n.kt)("strong",{parentName:"li"},"Allow Web Services Requests"),' option on the "Web Services" page of the Settings (and vice versa). You can also use the ',(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1636.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"SOAP REJECT NEW REQUESTS"))," command to refuse new SOAP requests, however this does not modify the value of the ",(0,n.kt)("strong",{parentName:"li"},"Allow Web Services Requests")," option.")),(0,n.kt)("p",null,"If you click on the ",(0,n.kt)("strong",{parentName:"p"},"Accept SOAP requests")," button and the HTTP server is stopped, 4D automatically starts it."),(0,n.kt)("h2",o({},{id:"http-server-configuration"}),"HTTP Server Configuration"),(0,n.kt)("p",null,"This area provides information about the configuration parameters and operation of the HTTP server:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auto-launched at startup"),": parameter set via the Settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP Server processes (used/total)"),": number of HTTP processes created on the server (current number of processes / total of all processes created)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cache memory"),": size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the ",(0,n.kt)("strong",{parentName:"li"},"Clear Cache")," button to empty the current cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Listening to IP"),", ",(0,n.kt)("strong",{parentName:"li"},"HTTP Port")," (80 by default), ",(0,n.kt)("strong",{parentName:"li"},"TLS enabled")," for HTTP connections (does not concern 4D nor SQL connections) and ",(0,n.kt)("strong",{parentName:"li"},"HTTPS Port")," used: current ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/WebServer/webServerConfig"}),"configuration parameters")," of the HTTP server, specified through the Settings or by programming."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Log file information"),": name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).")))}m.isMDXComponent=!0},69607:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"}}]);