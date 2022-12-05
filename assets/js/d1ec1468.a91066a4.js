"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,b=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(b,l(l({ref:t},m),{},{components:a})):r.createElement(b,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"preemptiveWeb",title:"Using preemptive web processes"},o=void 0,p={unversionedId:"WebServer/preemptiveWeb",id:"version-19-R6/WebServer/preemptiveWeb",title:"Using preemptive web processes",description:"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your applications. You can configure your web-related code, including 4D tags, web database methods or ORDA REST class functions to run simultaneously on as many cores as possible.",source:"@site/versioned_docs/version-19-R6/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/docs/19-R6/WebServer/preemptiveWeb",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/WebServer/preemptiveWeb.md",tags:[],version:"19-R6",frontMatter:{id:"preemptiveWeb",title:"Using preemptive web processes"},sidebar:"docs",previous:{title:"User sessions",permalink:"/docs/19-R6/WebServer/sessions"},next:{title:"Getting Started",permalink:"/docs/19-R6/REST/gettingStarted"}},s={},m=[{value:"Availability of preemptive mode for web processes",id:"availability-of-preemptive-mode-for-web-processes",level:2},{value:"Writing thread-safe web server code",id:"writing-thread-safe-web-server-code",level:2},{value:"Thread-safety of 4D web code",id:"thread-safety-of-4d-web-code",level:2},{value:"4D commands and database methods",id:"4d-commands-and-database-methods",level:3},{value:"Web Server URLs",id:"web-server-urls",level:3},{value:"Preemptive web process icon",id:"preemptive-web-process-icon",level:3}],d={toc:m};function c(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)("wrapper",n({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your applications. You can configure your web-related code, including 4D tags, web database methods or ORDA REST class functions to run simultaneously on as many cores as possible."),(0,r.kt)("p",null,"For in-depth information on preemptive process in 4D, please refer to the ",(0,r.kt)("em",{parentName:"p"},"Preemptive 4D processes")," section in the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),(0,r.kt)("em",{parentName:"a"},"4D Language Reference")),"."),(0,r.kt)("h2",n({},{id:"availability-of-preemptive-mode-for-web-processes"}),"Availability of preemptive mode for web processes"),(0,r.kt)("p",null,"The following table indicates whether the preemptive mode is used or is available, depending on the execution context:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"4D Server"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpreted (",(0,r.kt)("a",n({parentName:"th"},{href:"/docs/19-R6/Debugging/debugging-remote"}),"debugger attached"),")"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpreted (debugger detached)"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Compiled"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"REST Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperative"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preemptive"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preemptive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Web Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperative"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"web setting")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"web setting"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Web Services Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperative"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"web setting")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"web setting"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"4D remote/single-user"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpreted"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Compiled"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"REST Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperative"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preemptive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Web Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperative"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"web setting"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Web Services Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperative"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"web setting"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REST Server: handles ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/REST/classFunctions"}),"ORDA data model class functions")),(0,r.kt)("li",{parentName:"ul"},"Web Server: handles ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/templates"}),"web templates"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/httpRequests"}),"4DACTION and database methods")),(0,r.kt)("li",{parentName:"ul"},"Web Service Server: handles SOAP requests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"web setting"))," means that the preemptive mode depends on a setting value:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/sessions#enabling-sessions"}),(0,r.kt)("strong",{parentName:"a"},"Scalable sessions"))," option is selected, the ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/sessions#preemptive-mode"}),"preemptive mode is automatically used")," for web processes."),(0,r.kt)("li",{parentName:"ul"},"otherwise, the ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/webServerConfig#use-preemptive-processes"}),(0,r.kt)("strong",{parentName:"a"},"Use preemptive processes"))," option is taken into account. "),(0,r.kt)("li",{parentName:"ul"},'regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see ',(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html"}),"Publishing a Web Service with 4D"),") or proxy client methods (see ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html"}),"Subscribing to a Web Service in 4D"),") and make sure they are confirmed thread-safe by the compiler. ")))),(0,r.kt)("h2",n({},{id:"writing-thread-safe-web-server-code"}),"Writing thread-safe web server code"),(0,r.kt)("p",null,"All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the ",(0,r.kt)("a",n({parentName:"p"},{href:"#availability-of-preemptive-mode-for-web-processes"}),"preemptive mode is enabled"),", the following parts of the application will be automatically evaluated by the 4D compiler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All web-related database methods:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/authentication#on-web-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/WebServer/httpRequests#on-web-connection"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Connection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/19-R6/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,r.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," and ",(0,r.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mobile App Action"))," "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler_web"),' project method (regardless of its actual "Execution mode" property);')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basically any code processed by the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page816.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"PROCESS 4D TAGS"))," command in the web context, for example through .shtml pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Any project method with the "Available through 4D tags and URLS (',(0,r.kt)("inlineCode",{parentName:"p"},"4DACTION"),', etc.)" attribute')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Triggers for tables with "Expose as REST resource" attribute')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"/docs/19-R6/REST/classFunctions"}),"ORDA data model class functions")," called via REST"))),(0,r.kt)("p",null,"For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the ",(0,r.kt)("em",{parentName:"p"},"Writing a thread-safe method")," paragraph in the ",(0,r.kt)("em",{parentName:"p"},"Processes")," chapter of the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"4D Language Reference")," manual."),(0,r.kt)("h2",n({},{id:"thread-safety-of-4d-web-code"}),"Thread-safety of 4D web code"),(0,r.kt)("p",null,"Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode. "),(0,r.kt)("h3",n({},{id:"4d-commands-and-database-methods"}),"4D commands and database methods"),(0,r.kt)("p",null,"All 4D web-related commands are thread-safe, ",(0,r.kt)("em",{parentName:"p"},"i.e."),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all commands from the ",(0,r.kt)("em",{parentName:"li"},"Web Server")," theme,"),(0,r.kt)("li",{parentName:"ul"},"all commands from the ",(0,r.kt)("em",{parentName:"li"},"HTTP Client")," theme.")),(0,r.kt)("p",null,"The web-related database methods are thread-safe and can be used in preemptive mode (see above): ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"...)."),(0,r.kt)("p",null,"Of course, the code executed by these methods must also be thread-safe."),(0,r.kt)("h3",n({},{id:"web-server-urls"}),"Web Server URLs"),(0,r.kt)("p",null,"The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4daction/")," (the called project method must also be thread-safe)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dcgi/")," (the called database methods must also be thread-safe)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dwebtest/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dblank/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dstats/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dhtmlstats/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dcacheclear/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"rest/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dimgfield/")," (generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," for web request on picture fields)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dimg/")," (generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," for web request on picture variables)")),(0,r.kt)("h3",n({},{id:"preemptive-web-process-icon"}),"Preemptive web process icon"),(0,r.kt)("p",null,"Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Process type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Icon"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Preemptive web method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:a(17743).Z,width:"40",height:"32"}))))))}c.isMDXComponent=!0},17743:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAIAAADvz61XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAc5SURBVFhH7VbZU1xVHp5/YF6nnAd9mLKmah6s8sEXX6zR0YkEF4KJZiUrSTBISEggi4SEREyc7ARUAiEk0ASahm7ohd7onQa6m17uPefuvZmZ0XEWNeqYMZnM1/TFcsrbgQerfPGr013dt875fef8ft/vO/cXD34i/Ez8EIiywkkKK8opQU7wcpyX5zl5fuFHUpAZQaaSgjnq7KWwXGJZUYKsdGtOOOvhD1jpdiO7doRZNcy8PsJUjbL1FvKOm+sLC+6UJEgKJqvLSmMJYoTgJSXCyZMJqSskvO2g24zkRR3zRHfisffjj3TEH+2M//bDxHP9qY2j7MFJetnPj8+L00RGbqSHnn4J4gVWqWea3zDKrtIzlXpmj5nstZCKIWbFAFM+yGATZTpm9zjZZyVrDWyFnnlNz57zcmEiEVFWo2ihJDHOSiXZz0hXAly9lYBym4k0TtKjDtripMedXKONVpvIfgs97uCOO2mzkx6y090TZJWerZkgZzzUGhfBXercJYmxABnuDfPP65IY4BuOCBEqX/JzrW5qS4ioNzbUFeJDRLrg4066qSspWeLiu1NcpT71RE/8tIfi3Mi5GvH/UZKYiMrVEP+WmVQMp94wMA2T9JKfBxmq2Bnkp4lkmhf322jfjMCI8o0Z4ayXvzkjfBjijzho1RhbNpisHi/kHPXW1Jo2sSArc1TeM0F+35+qNZOmSbrXShpsBEHP+XjdnDhL5dGoWGch18ICemksJmJDLU4O+sLMg5NYQspvMav17HhMhM7VuN+DNjE6B9vfMsa+Nsx0h3hUa2JeBGWNmRyyc21TfHtAaHZyFcMMNIUEnPHwbzu5Ogs96eIMUREJH4uK1SYWGsSG0GM/7G9tYpzmqIPbamTrzMSTkpQF9IaF6nGC52e8PEa9lb44yOwch444EJ9wcXvM9LyXh8NgMvyk1UXXGxjoEeX4YaW1id8P8qsNLEr4QZBHzovEA7MCnuhmC22KgbrumiDt/kK98RcpAXdHgIeSMRlM/bMCSrPZyL4zxUEHauhFaBNDmU/fSLW4OCQZBolIiDY4VzAQOElxH+YFcSF68S8EfNbLQVw4K2ZAJe6khDy/MoRyUOhADb0IbeIjdvp4V+I9DxfjZEgDrOhpSLrVyTlKEM8Q+aKPRyPAusGKzcLP+2eEZ/tTW8YIHqqhF6FNfMBGf9URrzVTrLw1J+rmhOthodXFwRnQVMMREQMOetxFIaUicZKXTVER4oCULHFpKCIOzIrQ2pPXkusM7HKJkZxfXo5X6llI95iTO+LgcLgtRhb+9ZaF4glGm5u2e1l7hFUIq7CMyKSSCSYQY41ztNNfmIC1O8bJb7ria0YYXGJq6EVoE0OKv+5M4NsUE23xgh8ZYyJKiB7tnhbsCQnDFY77J11J3c1sx3vZ8ycyZ1uky6dJX3fMZvOHIpACbotzXv6p3uSG5Z8Yxvu77uTpKW6GFjwP9skv1LjFRe0JUZEkhbJpnyvT90H2VGOu5o381pfym1fmd63JNddlui6m7RMSw0QZHhflCwMMLB31VkMvQpsYsnqmP4Vc4aAQJFSND4p91MkVVA3WwFSmtyO3b0u+ujK/qSy/4Y+FgR/bX83tWZdtf1d02tyhGFSNy+qgjaI11NCL0CbumRaqjKTOSs/7+DBR+3hwTjxs55B5JR7NDF3PnjyQryr7a1P136+0fTc+adn70aay3OEaueeKx+FBXeAzsHG4ihp6EdrEaBW8UWwaY6EO3DlFYlhHkw2dLSnhQPZPx3JvrsUp/6W7ev/OF9+NOy7z7R0V+Z2rM0dqoyaTZV6EF6FGy3Uu3AGGiLjdRPByg4sPvetjCm4AU4TclIAn21Kf3/pyfv0Ln430/ffuN1/PBr6cst77x6dfBd23q1flN5dn6zbSMT1cz5mU4PzL9WokF3JosNKVgwwqdMHHo4/hiLvNBBeR4nPnDu/Ob1yRX/c8iO9/eeef3Rf+1tZ4Ny2qxKj3rsq08VZRHPhW434P2sQAkoMUwSPRu6tHWJTqop+H1qKcnA56sycaoCP1xN/+5xuB/Xcycv+Lz1XirS/n9m1Omw2Io8kKlCRGC6Hrwb1+lP2DLvXSEHPKzaHeqAIbCimX2hAahwbxg3v3vv34z3clDuNzw83b214pCPtUY9ppVWNpoSQxUHwdAHeTnaK7yocYXIvtAd4RjJKRweyZo/mqlYVUf/3VZ/rrHzfXYvylvgq7yR2rywz2pGdCaiAtPIwYAHfx3LBMaK3KyMLOOqeSAbdPGOjJNtd9eqPzTtD1Sev+/IYV0FSu5vVc085M96W0f0phkmoULSxBDCDnqDe0hvsA1yXu4Fozq5+lsUBQMQzkLp+63bTjI9hIVXn+zTW5kw0ZXXfa71ZEEbpSQ2hhaeIioBGkHaaN1wm8AgRYiU0xykwoYxvL6K5mezuz165k+rsy48PpkFdJJdRlpbFc4h8ZDx78Dxocu+NZveoIAAAAAElFTkSuQmCC"}}]);