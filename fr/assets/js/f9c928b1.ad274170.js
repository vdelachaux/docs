"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"templates",title:"Template pages"},o=void 0,l={unversionedId:"WebServer/templates",id:"version-19-R7/WebServer/templates",title:"Template pages",description:"Le serveur Web de 4D vous permet d'utiliser des pages de mod\xe8les HTML contenant des balises, c'est-\xe0-dire un m\xe9lange de code HTML statique et de r\xe9f\xe9rences 4D ajout\xe9es via des balises de transformation telles que 4DTEXT, 4DIF ou 4DINCLUDE. These tags are usually inserted as HTML type comments (``) into the HTML source code.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/WebServer/templates.md",sourceDirName:"WebServer",slug:"/WebServer/templates",permalink:"/docs/fr/WebServer/templates",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"templates",title:"Template pages"},sidebar:"docs",previous:{title:"Prise en main",permalink:"/docs/fr/WebServer/gettingStarted"},next:{title:"Traitement des requ\xeates HTTP",permalink:"/docs/fr/WebServer/httpRequests"}},p={},d=[{value:"Tags for templates",id:"tags-for-templates",level:2},{value:"Tag parsing",id:"tag-parsing",level:2},{value:"Acc\xe8s aux m\xe9thodes 4D via le Web",id:"acc\xe8s-aux-m\xe9thodes-4d-via-le-web",level:2},{value:"Prevention of malicious code insertion",id:"prevention-of-malicious-code-insertion",level:2}],c={toc:d};function u(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le serveur Web de 4D vous permet d'utiliser des pages de mod\xe8les HTML contenant des balises, c'est-\xe0-dire un m\xe9lange de code HTML statique et de r\xe9f\xe9rences 4D ajout\xe9es via des ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/Tags/tags"}),"balises de transformation")," telles que 4DTEXT, 4DIF ou 4DINCLUDE. These tags are usually inserted as HTML type comments (",(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--#4DTagName TagValue--\x3e"),") into the HTML source code."),(0,n.kt)("p",null,"When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D processing."),(0,n.kt)("p",null,"For example, if you write in an HTML page:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<P>Welcome to \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n")),(0,n.kt)("p",null,"The value of the 4D variable ",(0,n.kt)("em",{parentName:"p"},"vtSiteName")," will be inserted in the HTML page."),(0,n.kt)("h2",r({},{id:"tags-for-templates"}),"Tags for templates"),(0,n.kt)("p",null,"The following 4D tags are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4DTEXT, to insert 4D variables and expressions as text,"),(0,n.kt)("li",{parentName:"ul"},"4DHTML, to insert HTML code,"),(0,n.kt)("li",{parentName:"ul"},"4DEVAL, to evaluate any 4D expression,"),(0,n.kt)("li",{parentName:"ul"},"4DSCRIPT, to execute a 4D method,"),(0,n.kt)("li",{parentName:"ul"},"4DINCLUDE, to include a page within another one,"),(0,n.kt)("li",{parentName:"ul"},"4DBASE, to modify the default folder used by the 4DINCLUDE tag,"),(0,n.kt)("li",{parentName:"ul"},"4DCODE, to insert 4D code,"),(0,n.kt)("li",{parentName:"ul"},"4DIF, 4DELSE, 4DELSEIF and 4DENDIF, to insert conditions in the HTML code,"),(0,n.kt)("li",{parentName:"ul"},"4DLOOP et 4DENDLOOP, pour faire des boucles dans le code HTML,"),(0,n.kt)("li",{parentName:"ul"},"4DEACH et 4DENDEACH, pour boucler des collections, des entity selections ou des propri\xe9t\xe9s d'objets.")),(0,n.kt)("p",null,"Ces balises sont d\xe9crites dans la page ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/Tags/tags"}),"Balises de transformation"),"."),(0,n.kt)("p",null,"It is possible to mix tags. For example, the following HTML code is allowed:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n\n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n")),(0,n.kt)("h2",r({},{id:"tag-parsing"}),"Tag parsing"),(0,n.kt)("p",null,"For optimization reasons, the parsing of the HTML source code is not carried out by the 4D Web server when HTML pages are called using simple URLs that are suffixed with \u201c.HTML\u201d or \u201c.HTM\u201d."),(0,n.kt)("p",null,"Parsing of the contents of template pages sent by 4D web server takes place when ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," (.htm, .html, .shtm, .shtml), ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND BLOB")," (text/html type BLOB) or ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND TEXT"),' commands are called, as well as when sending pages called using URLs. Dans ce dernier cas, \xe0 des fins d\'optimisation, les pages suffix\xe9es par ".htm" et ".html" ne sont PAS pars\xe9es. In order to "force" the parsing of HTML pages in this case, you must add the suffix \u201c.shtm\u201d or \u201c.shtml\u201d (for example, ',(0,n.kt)("inlineCode",{parentName:"p"},"http://www.server.com/dir/page.shtm"),"). An example of the use of this type of page is given in the description of the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET STATISTICS")," command. XML pages (.xml, .xsl) are also supported and always parsed by 4D."),(0,n.kt)("p",null,"You can also carry out parsing outside of the Web context when you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PROCESS 4D TAGS")," command."),(0,n.kt)("p",null,"Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),"), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Action / Command"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Content analysis of the sent pages"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Support of $ syntax(*)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Character set used for parsing tags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pages called via URLs"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X, except for pages with \u201c.htm\u201d or \u201c.html\u201d extensions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X, except for pages with \u201c.htm\u201d or \u201c.html\u201d extensions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"No conversion necessary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X, if BLOB is of the \u201ctext/html\u201d type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset set in the "Content-Type" header of the response. Otherwise, use of default character set for the HTTP server')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inclusion by the ",(0,n.kt)("inlineCode",{parentName:"td"},"\x3c!--#4DINCLUDE--\x3e")," tag"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"PROCESS 4D TAGS")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text data: no conversion. BLOB data: automatic conversion from the Mac-Roman character set for compatibility")))),(0,n.kt)("p",null,"(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags."),(0,n.kt)("h2",r({},{id:"acc\xe8s-aux-m\xe9thodes-4d-via-le-web"}),"Acc\xe8s aux m\xe9thodes 4D via le Web"),(0,n.kt)("p",null,"L'ex\xe9cution d'une m\xe9thode 4D avec ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEACH"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DELSEIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DLOOP"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", ou ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT")," \xe0 partir d'une requ\xeate web est soumise \xe0 la valeur de l'attribut ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/WebServer/allowProject"}),"disponible via des balises 4D et des URL (4DACTION...)")," d\xe9finie dans les propri\xe9t\xe9s de la m\xe9thode. Si cet attribut n'est pas v\xe9rifi\xe9 pour la m\xe9thode, celle-ci ne peut pas \xeatre appel\xe9e \xe0 partir d'une requ\xeate Web."),(0,n.kt)("h2",r({},{id:"prevention-of-malicious-code-insertion"}),"Prevention of malicious code insertion"),(0,n.kt)("p",null,"4D tags accept different types of data as parameters: text, variables, methods, command names, etc. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. However, your database code often works with data that was, at one time or another, introduced through an external source (user input, import, etc.)."),(0,n.kt)("p",null,"In this case, it is advisable to ",(0,n.kt)("strong",{parentName:"p"},"not use")," tags such as ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", which evaluate parameters, directly with this sort of data."),(0,n.kt)("p",null,"De plus, selon le ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/Tags/tags#recursive-processing"}),"principe de la r\xe9cursivit\xe9"),", le code malveillant peut lui-m\xeame inclure des balises de transformation. In this case, it is imperative to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),' tag. Imagine, for example, a Web form field named "Name", where users must enter their name. This name is then displayed using a ',(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--#4DHTML vName--\x3e"),' tag in the page. If text of the "\\','" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the ',(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),' tag systematically in this case. Since this tag escapes the special HTML characters, any malicious recursive code that may have been inserted will not be reinterpreted. Pour se r\xe9f\xe9rer \xe0 l\'exemple pr\xe9c\xe9dent, le champ "Name" contiendra, dans ce cas, "',(0,n.kt)("inlineCode",{parentName:"p"},"&lt;!--#4DEVAL QUIT 4D--&gt;"),'" qui ne sera pas transform\xe9.'))}u.isMDXComponent=!0}}]);