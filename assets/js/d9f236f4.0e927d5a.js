"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,u=h["".concat(d,".").concat(m)]||h[m]||s[m]||a;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"error-handling",title:"Error handling"},l=void 0,d={unversionedId:"Concepts/error-handling",id:"version-18/Concepts/error-handling",title:"Error handling",description:"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.",source:"@site/versioned_docs/version-18/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/18/Concepts/error-handling",draft:!1,tags:[],version:"18",frontMatter:{id:"error-handling",title:"Error handling"},sidebar:"docs",previous:{title:"Looping structures",permalink:"/docs/18/Concepts/looping"},next:{title:"Interpreted and Compiled modes",permalink:"/docs/18/Concepts/interpreted-compiled"}},p={},c=[{value:"Installing an error-handling method",id:"installing-an-error-handling-method",level:2},{value:"Scope and components",id:"scope-and-components",level:3},{value:"Handling errors within the method",id:"handling-errors-within-the-method",level:3},{value:"Example",id:"example",level:4},{value:"Using an empty error-handling method",id:"using-an-empty-error-handling-method",level:3}],s={toc:c};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions."),(0,r.kt)("p",null,"Error handling meets two main needs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"finding out and fixing potential errors and bugs in your code during the development phase,"),(0,r.kt)("li",{parentName:"ul"},"catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine, and could log errors in a dedicated file for further analyses.")),(0,r.kt)("h2",o({},{id:"installing-an-error-handling-method"}),"Installing an error-handling method"),(0,r.kt)("p",null,"In 4D, all errors can be catched and handled in a specific project method, the ",(0,r.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,r.kt)("strong",{parentName:"p"},"error-catching"),") method."),(0,r.kt)("p",null,"This project method is installed for the current process and will be automatically called for any error that occurs in the process, in interpreted or compiled mode. To ",(0,r.kt)("em",{parentName:"p"},"install")," this project method, you just need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command with the project method name as parameter. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") //Installs the error-handling method\n')),(0,r.kt)("p",null,"To stop catching errors and give back hand to 4D, call ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," with an empty string:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("") //gives back control to 4D\n')),(0,r.kt)("h3",o({},{id:"scope-and-components"}),"Scope and components"),(0,r.kt)("p",null,"You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per process."),(0,r.kt)("p",null,"An error-handling method installed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command only applies to the running database. In the case of an error generated by a ",(0,r.kt)("strong",{parentName:"p"},"component"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," error-handling method of the host database is not called, and vice versa."),(0,r.kt)("p",null,"The  ",(0,r.kt)("inlineCode",{parentName:"p"},"Method called on error")," command allows to know the name of the method installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. It is particularly useful in the context of components because it enables you to temporarily change and then restore the host database error-catching method:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //If the document cannot be opened, an error is generated\n $ref:=Open document("MyDocument")\n  //Reinstallation of previous method\n ON ERR CALL($methCurrent)\n\n')),(0,r.kt)("h3",o({},{id:"handling-errors-within-the-method"}),"Handling errors within the method"),(0,r.kt)("p",null,"Within the custom error method, you have access to several information that will help you identifying the error:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4D automatically maintains a number of variables called ",(0,r.kt)("strong",{parentName:"p"},"system variables"),", meeting different needs (see the ",(0,r.kt)("em",{parentName:"p"},"4D Language Reference manual"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error")," (longint): error code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error method")," (text): name of the method that triggered the error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error line")," (longint): line number in the method that triggered the error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): formula of the 4D code (raw text) which is at the origin of the error."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET LAST ERROR STACK")," command that returns information about the current stack of errors of the 4D application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the ",(0,r.kt)("inlineCode",{parentName:"p"},"Get call chain")," command that returns a collection of objects describing each step of the method call chain within the current process."))),(0,r.kt)("h4",o({},{id:"example"}),"Example"),(0,r.kt)("p",null,"Here is a simple error-handling system:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//installing the error handling method\n ON ERR CALL("errorMethod")\n //... executing code\n ON ERR CALL("") //giving control back to 4D\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// errorMethod project method\n If(Error#1006) //this is not a user interruption\n    ALERT("The error "+String(Error)+" occurred". The code in question is: \\""+Error formula+"\\"")\n End if\n')),(0,r.kt)("h3",o({},{id:"using-an-empty-error-handling-method"}),"Using an empty error-handling method"),(0,r.kt)("p",null,"If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," system variable can be tested in any method, i.e. outside of the error-handling method:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')))}h.isMDXComponent=!0}}]);