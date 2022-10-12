"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14714],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=m(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},55424:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"MailAttachmentClass",title:"MailAttachment"},i=void 0,p={unversionedId:"API/MailAttachmentClass",id:"version-19/API/MailAttachmentClass",title:"MailAttachment",description:"Objetos anexo permite referenciar arquivos dentro de um objetoEmail. Objetos anexos s\xe3o criados usando o comando MAIL New attachment.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/pt/19/API/MailAttachmentClass",draft:!1,tags:[],version:"19",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/pt/19/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/pt/19/API/POP3TransporterClass"}},m={},d=[{value:"Objeto anexos",id:"objeto-anexos",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"4D. MailAttachment.new()",id:"4d-mailattachmentnew",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".cid",id:"cid",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".name",id:"name",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".path",id:"path",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".type",id:"type",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4}],s={toc:d};function c(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Objetos anexo permite referenciar arquivos dentro de um objeto",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/API/EmailObjectClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"Email")),". Objetos anexos s\xe3o criados usando o comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,n.kt)("h3",r({},{id:"objeto-anexos"}),"Objeto anexos"),(0,n.kt)("p",null,"Objetos anexos oferecem as propriedades e fun\xe7\xf5es apenas leitura abaixo:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#cid"}),(0,n.kt)("strong",{parentName:"a"},".cid")," : Text"),"\xa0","\xa0","\xa0","\xa0"," the ID of the attachment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#disposition"}),(0,n.kt)("strong",{parentName:"a"},".disposition")," : Text"),"\xa0","\xa0","\xa0","\xa0","the value of the ",(0,n.kt)("inlineCode",{parentName:"td"},"Content-Disposition")," header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getcontent"}),(0,n.kt)("strong",{parentName:"a"},".getContent()")," : Blob"),"\xa0","\xa0","\xa0","\xa0","The ",(0,n.kt)("inlineCode",{parentName:"td"},".getContent()")," function")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#name"}),(0,n.kt)("strong",{parentName:"a"},".name")," : Text"),"\xa0","\xa0","\xa0","\xa0","the name and extension of the attachment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#path"}),(0,n.kt)("strong",{parentName:"a"},".path")," : Text"),"\xa0","\xa0","\xa0","\xa0","the POSIX path of the attachment file, if it exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#platformpath"}),(0,n.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"\xa0","\xa0","\xa0","\xa0","the path of the attachment file expressed with the current platform syntax")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#type"}),(0,n.kt)("strong",{parentName:"a"},".type")," : Text"),"\xa0","\xa0","\xa0","\xa0","the ",(0,n.kt)("inlineCode",{parentName:"td"},"content-type")," of the attachment file")))),(0,n.kt)("h2",r({},{id:"mail-new-attachment"}),"MAIL New attachment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,n.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D. MailAttachment",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,n.kt)("em",{parentName:"p"},"blob")," : Blob { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rota do arquivo anexo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob contendo o anexo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome + extens\xe3o usado pelo cliente email para designar o anexo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"cid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valor do cabe\xe7alho content-type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"disposition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D. MailAttachment"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Attachment object")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"MAIL New attachment")," command allows you to create an attachment object that you can add to an ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/API/EmailObjectClass#email-object"}),"Email object"),"."),(0,n.kt)("p",null,"Pode passar uma rota ou um Blob para definir o anexo."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se usar uma ",(0,n.kt)("em",{parentName:"p"},"rota"),", passe um ",(0,n.kt)("strong",{parentName:"p"},"texto")," valor contendo a rota do arquivo anexo, expresso com a sintaxe sistema. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diret\xf3rio como o arquivo projeto).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se usar um ",(0,n.kt)("em",{parentName:"p"},"blob"),", passe um valor",(0,n.kt)("strong",{parentName:"p"},"BLOB")," que cont\xe9m o pr\xf3prio anexo."))),(0,n.kt)("p",null,"O par\xe2metro opcional ",(0,n.kt)("em",{parentName:"p"},"name")," permite passar o nome e extens\xe3o para ser usado pelo cliente email para designar o anexo. Se ",(0,n.kt)("em",{parentName:"p"},"name")," for omitido e:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"passar uma rota de arquivo, o nome e extens\xe3o do arquivo \xe9 usado,"),(0,n.kt)("li",{parentName:"ul"},"passar um BLOB, um nome aleat\xf3rio sem extens\xe3o \xe9 gerado automaticamente.")),(0,n.kt)("p",null,"O par\xe2metro opcional ",(0,n.kt)("em",{parentName:"p"},"cid")," permite passar uma ID interna para o anexo. A ID \xe9 o valor do cabe\xe7alho ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Id"),", vai ser usado apenas em mensagens HTML.  The cid associates the attachment with a reference defined in the message body using an HTML tag such as ",(0,n.kt)("inlineCode",{parentName:"p"},'\\&#060;img src="cid:ID"&#062;'),". Isso significa que os conte\xfados do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. Pode passar uma string vazia em ",(0,n.kt)("em",{parentName:"p"},"cid")," se n\xe3o quiser usar esse par\xe2metro."),(0,n.kt)("p",null,"Pode usar o par\xe2metro opcional ",(0,n.kt)("em",{parentName:"p"},"type")," para estabe\xe7ecer explicitamente o ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type"),' do arquivo anexo. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extens\xe3o. Para saber mais sobre tipos MIME veja a p\xe1gina sobre tipos MIME ',(0,n.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MIME"}),"em Wikipedia"),"."),(0,n.kt)("p",null,"Como padr\xe3o, se o par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"type")," for omitido ou conter uma string vazia, o ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," do arquivo anexo \xe9 baseado em sua extens\xe3o. As regras abaixo s\xe3o aplicadas aos tipos MIME:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Extens\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Content-Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"jpg, jpeg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image/jpeg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"png"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image/png")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"gif"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image/gif")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pdf"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/pdf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"doc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/msword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"xls"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/vnd.ms-excel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ppt"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/vnd.ms-powerpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"zip"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/zip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"gz"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/gzip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"js"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/javascript")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ps"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/postscript")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"xml"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/xml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"htm, html"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text/html")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mp3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"audio/mpeg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"outro")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/octet-stream")))),(0,n.kt)("p",null,"O par\xe2metro opcional ",(0,n.kt)("em",{parentName:"p"},"disposition")," permite passar o cabe\xe7alho ",(0,n.kt)("inlineCode",{parentName:"p"},"content-disposition"),' do anexo. Pode passar uma das constantes abaixo da constante tema de "Mail":'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail disposition attachment"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"attachment"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Estabelece o valor de cabe\xe7alho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail disposition inline"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"inline"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Estabelece o valor de cabe\xe7alho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conte\xfado da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.')))),(0,n.kt)("p",null,"Como padr\xe3o, se o par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"disposition")," for omitido:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"se o par\xe2metro ",(0,n.kt)("em",{parentName:"li"},"cid")," for usado, o cabe\xe7alho ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' \xe9 estabelecido como "inline",'),(0,n.kt)("li",{parentName:"ul"},"se o par\xe2metro ",(0,n.kt)("em",{parentName:"li"},"cid")," n\xe3o for passado ou estiver vazio, o cabe\xe7alho ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' \xe9 estabelecido para "attachment".')),(0,n.kt)("h4",r({},{id:"exemplo-1"}),"Exemplo 1"),(0,n.kt)("p",null,"Se quiser enviar um email com um arquivo selecionado pelo usu\xe1rio como um anexo e uma imagem embebida no corpo HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //If a document was selected C_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//add a link to download file\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insert an inline picture (use a cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //send mail End if\n')),(0,n.kt)("h4",r({},{id:"exemplo-2"}),"Exemplo 2"),(0,n.kt)("p",null,"Se quiser enviar um email com uma \xe1rea 4D Write pro como um anexo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx) C_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n')),(0,n.kt)("h2",r({},{id:"4d-mailattachmentnew"}),"4D. MailAttachment.new()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D. MailAttachment.new"),"( ",(0,n.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D. MailAttachment",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"4D. MailAttachment.new"),"( ",(0,n.kt)("em",{parentName:"p"},"blob")," : Blob { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rota do arquivo anexo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob contendo o anexo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome + extens\xe3o usado pelo cliente email para designar o anexo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"cid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valor do cabe\xe7alho content-type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"disposition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D. MailAttachment"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Attachment object")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment.new()")," creates and returns a new object of the ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment")," type. Isso \xe9 id\xeantico ao comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," (atalho)."),(0,n.kt)("h2",r({},{id:"cid"}),".cid"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".cid")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".cid")," cont\xe9m  the ID of the attachment. Essa funcionalidade \xe9 usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo \xe9 manejado como um anexo simples (link)."),(0,n.kt)("h2",r({},{id:"disposition"}),".disposition"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".disposition")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".disposition")," cont\xe9m the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header. Dois valores eset\xe3o dispon\xedveis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"inline": o anexo \xe9 renderizado dentro dos conte\xfados da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.'),(0,n.kt)("li",{parentName:"ul"},'"attachment": o anexo \xe9 fornecido como um link na mensagem.')),(0,n.kt)("h2",r({},{id:"getcontent"}),".getContent()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getContent()")," : Blob"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Content of the attachment")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".getContent()")," The ",(0,n.kt)("inlineCode",{parentName:"p"},".getContent()")," function. Summary --\x3epermite que crie um objeto anexo que pode adicionar a um ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/API/EmailObjectClass#email-object"}),"objeto Email "),"."),(0,n.kt)("h2",r({},{id:"name"}),".name"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".name")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-5"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".name")," cont\xe9m the name and extension of the attachment.  Como padr\xe3o, \xe9 o nome do arquivo, a n\xe3o ser que outro nome tenha sido especificado no comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,n.kt)("h2",r({},{id:"path"}),".path"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".path")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-6"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".path")," cont\xe9m the POSIX path of the attachment file, if it exists."),(0,n.kt)("h2",r({},{id:"platformpath"}),".platformPath"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".platformPath")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-7"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".platformPath")," devolve the path of the attachment file expressed with the current platform syntax."),(0,n.kt)("h2",r({},{id:"type"}),".type"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".type")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-8"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".type")," cont\xe9m the ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," of the attachment file. Se o tipo n\xe3o for passado explicitamente ao comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," \xe9 baseado na sua extens\xe3o de arquivo."))}c.isMDXComponent=!0}}]);