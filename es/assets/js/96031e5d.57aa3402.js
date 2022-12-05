"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39631],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),d=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return s.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,A=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return t?s.createElement(A,o(o({ref:n},u),{},{components:t})):s.createElement(A,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});t(67294);var s=t(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},a.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={id:"authUsers",title:"Usuarios y sesiones"},i=void 0,l={unversionedId:"REST/authUsers",id:"version-19-R7/REST/authUsers",title:"Usuarios y sesiones",description:"Las peticiones REST pueden beneficiarse de sesiones de usuario web, ofreciendo funcionalidades extra como la gesti\xf3n de m\xfaltiples peticiones, la posibilidad de compartir datos entre los procesos del cliente web y los privilegios del usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/es/REST/authUsers",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/REST/authUsers.md",tags:[],version:"19-R7",frontMatter:{id:"authUsers",title:"Usuarios y sesiones"},sidebar:"docs",previous:{title:"Configuraci\xf3n del servidor",permalink:"/docs/es/REST/configuration"},next:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/REST/genInfo"}},d={},u=[{value:"Autenticaci\xf3n de los usuarios",id:"autenticaci\xf3n-de-los-usuarios",level:2},{value:"Apertura de las sesiones",id:"apertura-de-las-sesiones",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:u};function p(e){var{components:n}=e,o=r(e,["components"]);return(0,s.kt)("wrapper",a({},c,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Las peticiones REST pueden beneficiarse de ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/WebServer/sessions"}),"sesiones de usuario web"),", ofreciendo funcionalidades extra como la gesti\xf3n de m\xfaltiples peticiones, la posibilidad de compartir datos entre los procesos del cliente web y los privilegios del usuario."),(0,s.kt)("p",null,"Como primer paso para abrir una sesi\xf3n REST en el servidor 4D, el usuario que env\xeda la solicitud debe estar autenticado."),(0,s.kt)("h2",a({},{id:"autenticaci\xf3n-de-los-usuarios"}),"Autenticaci\xf3n de los usuarios"),(0,s.kt)("p",null,"Usted inicia la sesi\xf3n de un usuario en su aplicaci\xf3n llamando a ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," en una petici\xf3n POST incluyendo el nombre y la contrase\xf1a del usuario en el encabezado. Esta petici\xf3n llama al m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo)."),(0,s.kt)("h2",a({},{id:"apertura-de-las-sesiones"}),"Apertura de las sesiones"),(0,s.kt)("p",null,"Cuando las ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/WebServer/sessions#enabling-sessions"}),"sesiones escalables se activan")," (recomendado), si el m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," devuelve ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", se abre autom\xe1ticamente una sesi\xf3n de usuario y se puede manejar a trav\xe9s del objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," y la ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/API/SessionClass"}),"API Session"),". Las siguientes peticiones REST reutilizar\xe1n la misma cookie de sesi\xf3n."),(0,s.kt)("p",null,"Si no se ha definido el m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),", se abre una sesi\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"guest"),"."),(0,s.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,s.kt)("p",null,"En este ejemplo, el usuario introduce su correo electr\xf3nico y contrase\xf1a en una p\xe1gina html que solicita ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," en un POST (se recomienda utilizar una conexi\xf3n HTTPS para enviar la p\xe1gina html). Se llama al m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," para validar las credenciales y establecer la sesi\xf3n."),(0,s.kt)("p",null,"P\xe1gina de inicio de sesi\xf3n HTML:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:t(80415).Z,width:"268",height:"85"})),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n    <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //direcci\xf3n del servidor rest\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,s.kt)("p",null,"Cuando la p\xe1gina de inicio de sesi\xf3n se env\xeda al servidor, se llama al m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'    //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n    //Una URL \'/rest\' ha sido llamada con los encabezados username-4D y password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Tan pronto como se ha llamado y devuelto ",(0,s.kt)("inlineCode",{parentName:"p"},"True"),", el m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," deja de llamarse en la sesi\xf3n.")),(0,s.kt)("p",null,"El m\xe9todo proyecto ",(0,s.kt)("inlineCode",{parentName:"p"},"fillSession")," inicializa la sesi\xf3n usuario, por ejemplo:"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n')))}p.isMDXComponent=!0},80415:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"}}]);