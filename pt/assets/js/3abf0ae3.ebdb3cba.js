"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?s.createElement(h,o(o({ref:t},d),{},{components:n})):s.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});n(67294);var s=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"authUsers",title:"Users and sessions"},i=void 0,l={unversionedId:"REST/authUsers",id:"version-19-R6/REST/authUsers",title:"Users and sessions",description:"REST requests can benefit from web user sessions, providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/pt/19-R6/REST/authUsers",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"authUsers",title:"Users and sessions"},sidebar:"docs",previous:{title:"Server Configuration",permalink:"/docs/pt/19-R6/REST/configuration"},next:{title:"Obter informa\xe7\xe3o do servidor",permalink:"/docs/pt/19-R6/REST/genInfo"}},u={},d=[{value:"Authenticating users",id:"authenticating-users",level:2},{value:"Opening sessions",id:"opening-sessions",level:2},{value:"Exemplo",id:"exemplo",level:2}],c={toc:d};function p(e){var{components:t}=e,o=a(e,["components"]);return(0,s.kt)("wrapper",r({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"REST requests can benefit from ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/sessions"}),"web user sessions"),", providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges."),(0,s.kt)("p",null,"Como primeiro passo para abrir uma sess\xe3o REST no servidor 4D, o usu\xe1rio que envia a solicitude deve estar autenticado."),(0,s.kt)("h2",r({},{id:"authenticating-users"}),"Authenticating users"),(0,s.kt)("p",null,"You log in a user to your application by calling ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST request including the user's name and password in the header. This request calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method (if it exists), where you can check the user's credentials (see example below)."),(0,s.kt)("h2",r({},{id:"opening-sessions"}),"Opening sessions"),(0,s.kt)("p",null,"When ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/sessions#enabling-sessions"}),"scalable sessions are enabled")," (recommended), if the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", a user session is then automatically opened and you can handle it through the ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," object and the ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/API/SessionClass"}),"Session API"),". Subsequent REST requests will reuse the same session cookie."),(0,s.kt)("p",null,"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method has not been defined, a ",(0,s.kt)("inlineCode",{parentName:"p"},"guest")," session is opened."),(0,s.kt)("h2",r({},{id:"exemplo"}),"Exemplo"),(0,s.kt)("p",null,"In this example, the user enters their email and password in an html page that requests ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST (it is recommended to use an HTTPS connection to send the html page). The ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called to validate the credentials and to set the session."),(0,s.kt)("p",null,"The HTML login page:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:n(98714).Z,width:"268",height:"85"})),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n <FORM name="myForm"> Email: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/> Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()"> Login\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,s.kt)("p",null,"When the login page is sent to the server, the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called:"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs. SalesPersonsEntity\n\n$Accepted:=False\n\n //A \'/rest\' URL has been called with headers username-4D and password-4D If ($userId#"")\n    $sales:=ds. SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if End if \n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"As soon as it has been called and returned ",(0,s.kt)("inlineCode",{parentName:"p"},"True"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is no longer called in the session.")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"fillSession")," project method initializes the user session, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs. SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname Session.setPrivileges($info) Use (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if End use\n')))}p.isMDXComponent=!0},98714:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"}}]);