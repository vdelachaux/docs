"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(r),m=o,u=h["".concat(d,".").concat(m)]||h[m]||c[m]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"error-handling",title:"Error handling"},l=void 0,d={unversionedId:"Concepts/error-handling",id:"version-19/Concepts/error-handling",title:"Error handling",description:"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.",source:"@site/versioned_docs/version-19/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/19/Concepts/error-handling",draft:!1,tags:[],version:"19",frontMatter:{id:"error-handling",title:"Error handling"},sidebar:"docs",previous:{title:"Transformation tags",permalink:"/docs/19/Tags/tags"},next:{title:"Interpreted and Compiled modes",permalink:"/docs/19/Concepts/interpreted-compiled"}},s={},p=[{value:"Error or status",id:"error-or-status",level:2},{value:"Installing an error-handling method",id:"installing-an-error-handling-method",level:2},{value:"Scope and components",id:"scope-and-components",level:3},{value:"Handling errors within the method",id:"handling-errors-within-the-method",level:3},{value:"Example",id:"example",level:4},{value:"Using an empty error-handling method",id:"using-an-empty-error-handling-method",level:3}],c={toc:p};function h(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions. "),(0,n.kt)("p",null,"Error handling meets two main needs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"finding out and fixing potential errors and bugs in your code during the development phase,"),(0,n.kt)("li",{parentName:"ul"},"catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface. ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine, and could log errors in a dedicated file for further analyses. ")),(0,n.kt)("h2",o({},{id:"error-or-status"}),"Error or status"),(0,n.kt)("p",null,"Many 4D class functions, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"entity.save()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", return a ",(0,n.kt)("em",{parentName:"p"},"status"),' object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.'),(0,n.kt)("p",null,'Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.  '),(0,n.kt)("h2",o({},{id:"installing-an-error-handling-method"}),"Installing an error-handling method"),(0,n.kt)("p",null,"In 4D, all errors can be caught and handled in a specific project method, the ",(0,n.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,n.kt)("strong",{parentName:"p"},"error-catching"),") method."),(0,n.kt)("p",null,"This project method is installed for the current process and will be automatically called for any error that occurs in the process, in interpreted or compiled mode. To ",(0,n.kt)("em",{parentName:"p"},"install")," this project method, you just need to call the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command with the project method name as parameter. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") //Installs the error-handling method\n')),(0,n.kt)("p",null,"To stop catching errors and give back hand to 4D, call ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," with an empty string:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") //gives back control to 4D\n')),(0,n.kt)("p",null,"The  ",(0,n.kt)("inlineCode",{parentName:"p"},"Method called on error")," command allows you to know the name of the method installed by ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //If the document cannot be opened, an error is generated\n $ref:=Open document("MyDocument")\n  //Reinstallation of previous method\n ON ERR CALL($methCurrent)\n\n')),(0,n.kt)("h3",o({},{id:"scope-and-components"}),"Scope and components"),(0,n.kt)("p",null,"You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per process."),(0,n.kt)("p",null,"An error-handling method installed by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command only applies to the running application. In the case of an error generated by a ",(0,n.kt)("strong",{parentName:"p"},"component"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," error-handling method of the host application is not called, and vice versa. "),(0,n.kt)("h3",o({},{id:"handling-errors-within-the-method"}),"Handling errors within the method"),(0,n.kt)("p",null,"Within the custom error method, you have access to several pieces of information that will help you identifying the error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dedicated system variables(*):"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (longint): error code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method")," (text): name of the method that triggered the error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (longint): line number in the method that triggered the error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): formula of the 4D code (raw text) which is at the origin of the error. ")))),(0,n.kt)("p",null,"(",(0,n.kt)("em",{parentName:"p"},") 4D automatically maintains a number of variables called ",(0,n.kt)("strong",{parentName:"em"},"system variables"),", meeting different needs. See the "),"4D Language Reference manual*."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"GET LAST ERROR STACK")," command that returns information about the current stack of errors of the 4D application."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"Get call chain")," command that returns a collection of objects describing each step of the method call chain within the current process. ")),(0,n.kt)("h4",o({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Here is a simple error-handling system:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//installing the error handling method\n ON ERR CALL("errorMethod")\n //... executing code\n ON ERR CALL("") //giving control back to 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// errorMethod project method\n If(Error#1006) //this is not a user interruption\n    ALERT("The error "+String(Error)+" occurred". The code in question is: \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",o({},{id:"using-an-empty-error-handling-method"}),"Using an empty error-handling method"),(0,n.kt)("p",null,"If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," system variable can be tested in any method, i.e. outside of the error-handling method:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')))}h.isMDXComponent=!0}}]);