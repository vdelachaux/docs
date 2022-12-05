"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57892],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"httpRequests",title:"Processing HTTP requests"},l=void 0,s={unversionedId:"WebServer/httpRequests",id:"version-19-R7/WebServer/httpRequests",title:"Processing HTTP requests",description:"The 4D web server provides several features to handle HTTP requests:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/WebServer/httpRequests.md",sourceDirName:"WebServer",slug:"/WebServer/httpRequests",permalink:"/docs/pt/WebServer/httpRequests",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/WebServer/httpRequests.md",tags:[],version:"19-R7",frontMatter:{id:"httpRequests",title:"Processing HTTP requests"},sidebar:"docs",previous:{title:"Template pages",permalink:"/docs/pt/WebServer/templates"},next:{title:"Allowing project methods",permalink:"/docs/pt/WebServer/allowProject"}},p={},m=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Database method calls",id:"database-method-calls",level:3},{value:"Sintaxe",id:"sintaxe",level:3},{value:"$1 - URL extra data",id:"1---url-extra-data",level:3},{value:"$2 - Header and Body of the HTTP request",id:"2---header-and-body-of-the-http-request",level:3},{value:"$3 - Web client IP address",id:"3---web-client-ip-address",level:3},{value:"$4 - Server IP address",id:"4---server-ip-address",level:3},{value:"$5 and $6 - User Name and Password",id:"5-and-6---user-name-and-password",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Exemplo",id:"exemplo",level:4},{value:"4DACTION to post forms",id:"4daction-to-post-forms",level:3},{value:"Exemplo",id:"exemplo-1",level:4},{value:"Getting values from HTTP requests",id:"getting-values-from-http-requests",level:2},{value:"Other Web Server Commands",id:"other-web-server-commands",level:2},{value:"COMPILER_WEB Project Method",id:"compiler_web-project-method",level:2}],d={toc:m};function u(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The 4D web server provides several features to handle HTTP requests:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method, a router for your web application,"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"/4DACTION")," URL to call server-side code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," to get values from HTML objects sent to the server"),(0,n.kt)("li",{parentName:"ul"},"other commands such as ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP BODY"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP HEADER"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET BODY PART")," allow to customize the request processing, including cookies."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("em",{parentName:"li"},"COMPILER_WEB")," project method, to declare your variables.")),(0,n.kt)("h2",r({},{id:"on-web-connection"}),"On Web Connection"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method can be used as the entry point for the 4D Web server."),(0,n.kt)("h3",r({},{id:"database-method-calls"}),"Database method calls"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method is automatically called when the server reveives any URL that is not a path to an existing page on the server. The database method is called with the URL."),(0,n.kt)("p",null,'For example, the URL "',(0,n.kt)("em",{parentName:"p"},"a/b/c"),'" will call the database method, but "',(0,n.kt)("em",{parentName:"p"},"a/b/c.html"),'" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the ',(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/webServerConfig#root-folder"}),"WebFolder"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The request should have previously been accepted by the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method (if it exists) and the web server must be launched.")),(0,n.kt)("h3",r({},{id:"sintaxe"}),"Sintaxe"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Web Connection"),"( ",(0,n.kt)("em",{parentName:"p"},"$1")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$2")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$3")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$4")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$5")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$6")," : Text )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"HTTP headers + HTTP body (up to 32 kb limit)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IP address of the web client (browser)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IP address of the server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome de usuario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Senha")))),(0,n.kt)("p",null,"You must declare these parameters as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//On Web Connection database method\n\n C_TEXT($1;$2;$3;$4;$5;$6)\n\n//Code for the method\n")),(0,n.kt)("p",null,"Alternatively, you can use the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Concepts/parameters#named-parameters"}),"named parameters")," syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// On Web Connection database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Calling a 4D command that displays an interface element (",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", etc.) is not allowed and ends the method processing.")),(0,n.kt)("h3",r({},{id:"1---url-extra-data"}),"$1 - URL extra data"),(0,n.kt)("p",null,"The first parameter ($1) is the URL entered by users in the address area of their web browser, without the host address."),(0,n.kt)("p",null,"Let\u2019s use an intranet connection as an example. Suppose that the IP address of your 4D Web Server machine is 123.4.567.89. The following table shows the values of $1 depending on the URL entered in the web browser:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"URL entered in web browser"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value of parameter $1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.4.567.89"}),"http://123.4.567.89")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89/Customers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.4.567.89/Customers/Add"}),"http://123.4.567.89/Customers/Add")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers/Add")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89/Do_This/If_OK/Do_That"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Do_This/If_OK/Do_That")))),(0,n.kt)("p",null,'Note that you are free to use this parameter at your convenience. 4D simply ignores the value passed beyond the host part of the URL. For example, you can establish a convention where the value "',(0,n.kt)("em",{parentName:"p"},"/Customers/Add"),'" means \u201cgo directly to add a new record in the ',(0,n.kt)("inlineCode",{parentName:"p"},"[Customers]")," table.\u201d By supplying the web users with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. This way, web users can quickly access resources of your website without going through the entire navigation path each time they make a new connection."),(0,n.kt)("h3",r({},{id:"2---header-and-body-of-the-http-request"}),"$2 - Header and Body of the HTTP request"),(0,n.kt)("p",null,"The second parameter ($2) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),' database method "as is". Its contents will vary depending on the nature of the web browser attempting the connection.'),(0,n.kt)("p",null,"If your application uses this information, it is up to you to parse the header and the body. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP HEADER")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP BODY")," commands."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.")),(0,n.kt)("h3",r({},{id:"3---web-client-ip-address"}),"$3 - Web client IP address"),(0,n.kt)("p",null,"The $3 parameter receives the IP address of the browser\u2019s machine. This information can allow you to distinguish between intranet and internet connections."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/webServerConfig#about-ipv6-support"}),"IPv6 Support")," section.")),(0,n.kt)("h3",r({},{id:"4---server-ip-address"}),"$4 - Server IP address"),(0,n.kt)("p",null,"The $4 parameter receives the IP address requested by the 4D Web Server. 4D allows for multi-homing, which allows you to use machines with more than one IP address. For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"webServerConfig.html#ip-address-to-listen"}),"Configuration page"),"."),(0,n.kt)("h3",r({},{id:"5-and-6---user-name-and-password"}),"$5 and $6 - User Name and Password"),(0,n.kt)("p",null,"The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/authentication"}),"authentication page"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons.")),(0,n.kt)("h2",r({},{id:"4daction"}),"/4DACTION"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"/4DACTION/")),"MethodName",(0,n.kt)("strong",{parentName:"p"},"*",(0,n.kt)("br",null)," "),"/4DACTION/",(0,n.kt)("strong",{parentName:"p"},"**"),"MethodName/Param*"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MethodName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Name of the 4D project method to be executed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Param"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text parameter to pass to the project method")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Usage:")," URL or Form action."),(0,n.kt)("p",null,"This URL allows you to call the ",(0,n.kt)("em",{parentName:"p"},"MethodName")," 4D project method with an optional ",(0,n.kt)("em",{parentName:"p"},"Param")," text parameter. The method will receive this parameter in ",(0,n.kt)("em",{parentName:"p"},"$1"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The 4D project method must have been ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/WebServer/allowProject"}),"allowed for web requests"),": the \u201cAvailable through 4D tags and URLs (4DACTION...)\u201d attribute value must have been checked in the properties of the method. If the attribute is not checked, the web request is rejected."),(0,n.kt)("li",{parentName:"ul"},"When 4D receives a ",(0,n.kt)("inlineCode",{parentName:"li"},"/4DACTION/MethodName/Param")," request, the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," database method (if it exists) is called.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION/")," can be associated with a URL in a static Web page:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"MyMethod"),' project method should generally return a "reply" (sending of an HTML page using ',(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND TEXT"),", etc.). Be sure to make the processing as short as possible in order not to block the browser."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A method called by ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION")," must not call interface elements (",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", etc.).")),(0,n.kt)("h4",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"This example describes the association of the ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION")," URL with an HTML picture object in order to dynamically display a picture in the page. You insert the following instructions in a static HTML page:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<IMG SRC="/4DACTION/getPhoto/smith">\n')),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"getPhoto")," \xe9 o seguinte:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_TEXT($1) // This parameter must always be declared\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //find the picture in the Images folder within the Resources folder \n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd" READ PICTURE FILE($path;$PictVar) //put the picture in the picture variable PICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format WEB SEND BLOB($BLOB;"image/png")\n')),(0,n.kt)("h3",r({},{id:"4daction-to-post-forms"}),"4DACTION to post forms"),(0,n.kt)("p",null,"The 4D Web server also allows you to use \u201cposted\u201d forms, which are static HTML pages that send data to the Web server, and to easily retrieve all the values. The POST type must be associated to them and the form\u2019s action must imperatively start with /4DACTION/MethodName."),(0,n.kt)("p",null,"A form can be submitted through two methods (both can be used with 4D):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"POST, usually used to send data to the Web server,"),(0,n.kt)("li",{parentName:"ul"},"GET, usually used to request data from the Web server.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the Web server receives a posted form, it calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method (if it exists).")),(0,n.kt)("p",null,"In the called method, you must call the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command in order to ",(0,n.kt)("a",r({parentName:"p"},{href:"#getting-values-from-the-requests"}),"retrieve the names and values")," of all the fields included in an HTML page submitted to the server."),(0,n.kt)("p",null,"Example to define the action of a form:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n')),(0,n.kt)("h4",r({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("p",null,"In a Web application, we would like for the browsers to be able to search among the records by using a static HTML page. This page is called \u201csearch.htm\u201d. The application contains other static pages that allow you to, for example, display the search result (\u201cresults.htm\u201d). The POST type has been associated to the page, as well as the ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION/SEARCH")," action."),(0,n.kt)("p",null,"Here is the HTML code that corresponds to this page:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n')),(0,n.kt)("p",null,'During data entry, type \u201cABCD\u201d in the data entry area, check the "Whole word" option and validate it by clicking the ',(0,n.kt)("strong",{parentName:"p"},"Search")," button. In the request sent to the Web server:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'vName="ABCD"\nvExact="Word" OK="Search"\n')),(0,n.kt)("p",null,"4D calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method (if it exists), then the ",(0,n.kt)("inlineCode",{parentName:"p"},"processForm")," project method is called, which is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_TEXT($1) //mandatory for compiled mode\n C_LONGINT($vName)\n C_TEXT(vName;vLIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Send the list to the results.htm form\n  //which contains a reference to the variable vLIST,\n  //for example \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n')),(0,n.kt)("h2",r({},{id:"getting-values-from-http-requests"}),"Getting values from HTTP requests"),(0,n.kt)("p",null,"4D's Web server lets you recover data sent through POST or GET requests, using Web forms or URLs."),(0,n.kt)("p",null,"When the Web server receives a request with data in the header or in the URL, 4D can retrieve the values of any HTML objects it contains. This principle can be implemented in the case of a Web form, sent for example using ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND BLOB"),", where the user enters or modifies values, then clicks on the validation button."),(0,n.kt)("p",null,"In this case, 4D can retrieve the values of the HTML objects found in the request using the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command. The ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command retrieves the values as text."),(0,n.kt)("p",null,"Consider the following HTML page source code:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n')),(0,n.kt)("p",null,"When 4D sends the page to a Web Browser, it looks like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(46590).Z,width:"446",height:"156"})),(0,n.kt)("p",null,"The main features of this page are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It includes three ",(0,n.kt)("strong",{parentName:"li"},"Submit")," buttons: ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbLogOn"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbRegister")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbInformation"),"."),(0,n.kt)("li",{parentName:"ul"},"When you click ",(0,n.kt)("strong",{parentName:"li"},"Log On"),", the submission of the form is first processed by the JavaScript function ",(0,n.kt)("inlineCode",{parentName:"li"},"LogOn"),". If no name is entered, the form is not even submitted to 4D, and a JavaScript alert is displayed."),(0,n.kt)("li",{parentName:"ul"},"The form has a POST 4D method as well as a Submit script (",(0,n.kt)("em",{parentName:"li"},"GetBrowserInformation"),") that copies the browser properties to the four hidden objects whose names starts with ",(0,n.kt)("em",{parentName:"li"},"vtNav_App"),". Inclui tamb\xe9m o objecto ",(0,n.kt)("inlineCode",{parentName:"li"},"vtUserName"),".")),(0,n.kt)("p",null,"Let\u2019s examine the 4D method ",(0,n.kt)("inlineCode",{parentName:"p"},"WWW_STD_FORM_POST")," that is called when the user clicks on one of the buttons on the HTML form."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // Retrieval of value of variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_TEXT($user)\n\n Case of\n\n  // The Log On button was clicked\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // The WWW POST EVENT method saves the information in a database table\n       Else\n\n          $0:=WWW Register\n  // The WWW Register method lets a new Web user register\n       End if\n\n  // The Register button was clicked\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n\n  // The Information button was clicked\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n')),(0,n.kt)("p",null,"The features of this method are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The values of the variables ",(0,n.kt)("em",{parentName:"li"},"vtNav_appName"),", ",(0,n.kt)("em",{parentName:"li"},"vtNav_appVersion"),", ",(0,n.kt)("em",{parentName:"li"},"vtNav_appCodeName"),", and ",(0,n.kt)("em",{parentName:"li"},"vtNav_userAgent")," (bound to the HTML objects having the same names) are retrieved using the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," command from HTML objects created by the ",(0,n.kt)("em",{parentName:"li"},"GetBrowserInformation")," JavaScript script."),(0,n.kt)("li",{parentName:"ul"},"Out of the ",(0,n.kt)("em",{parentName:"li"},"vsbLogOn"),", ",(0,n.kt)("em",{parentName:"li"},"vsbRegister")," and ",(0,n.kt)("em",{parentName:"li"},"vsbInformation")," variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," command. When the submit is performed by one of these buttons, the browser returns the value of the clicked button to 4D. This tells you which button was clicked.")),(0,n.kt)("p",null,"Keep in main that with HTML, all objects are text objects. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command, and not the position of the element in the array as in 4D. ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," always returns values of the Text type."),(0,n.kt)("h2",r({},{id:"other-web-server-commands"}),"Other Web Server Commands"),(0,n.kt)("p",null,"The 4D web server provides several low-level web commands allowing you to develop custom processing of requests:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP BODY")," command returns the body as raw text, allowing any parsing you may need"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP HEADER")," command return the headers of the request. It is useful to handle custom cookies, for example (along with the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET HTTP HEADER")," command)."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET BODY PART")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB Get body part count")," commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.")),(0,n.kt)("p",null,"These commands are summarized in the following graphic:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(44492).Z,width:"676",height:"374"})),(0,n.kt)("p",null,'The 4D web server supports files uploaded in chunked transfer encoding from any Web client. Chunked transfer encoding is a data transfer mechanism specified in HTTP/1.1. It allows data to be transferred in a series of "chunks" (parts) without knowing the final data size. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using ',(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND RAW DATA"),")."),(0,n.kt)("h2",r({},{id:"compiler_web-project-method"}),"COMPILER_WEB Project Method"),(0,n.kt)("p",null,"The COMPILER","_","WEB method, if it exists, is systematically called when the HTTP server receives a dynamic request and calls the 4D engine. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-connection"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Connection")),". This method is intended to contain typing and/or variable initialization directives used during Web exchanges. It is used by the compiler when the application is compiled. The COMPILER","_","WEB method is common to all the Web forms. By default, the COMPILER_WEB method does not exist. You must explicitly create it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The COMPILER_WEB project method is also called, if it exists, for each SOAP request accepted.")))}u.isMDXComponent=!0},44492:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},46590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"}}]);