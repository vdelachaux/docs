"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?o.createElement(k,n(n({ref:t},d),{},{components:a})):o.createElement(k,n({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var p=2;p<l;p++)n[p]=a[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});a(67294);var o=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const n={id:"stylesheets",title:"Folhas de estilo"},i=void 0,s={unversionedId:"FormEditor/stylesheets",id:"version-18/FormEditor/stylesheets",title:"Folhas de estilo",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormEditor/createStylesheet.md",sourceDirName:"FormEditor",slug:"/FormEditor/stylesheets",permalink:"/docs/pt/18/FormEditor/stylesheets",draft:!1,tags:[],version:"18",frontMatter:{id:"stylesheets",title:"Folhas de estilo"},sidebar:"docs",previous:{title:"Bibliotecas de objetos",permalink:"/docs/pt/18/FormEditor/objectLibrary"},next:{title:"Imagens",permalink:"/docs/pt/18/FormEditor/pictures"}},p={},d=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Arquivos folhas de estilo",id:"arquivos-folhas-de-estilo",level:3},{value:"Arquitetura das folhas de estilo",id:"arquitetura-das-folhas-de-estilo",level:3},{value:"Seletores de folhas de estilo",id:"seletores-de-folhas-de-estilo",level:2},{value:"Tipo de objeto",id:"tipo-de-objeto",level:3},{value:"Nome de objeto",id:"nome-de-objeto",level:3},{value:"Class",id:"class",level:3},{value:"Todos os objetos",id:"todos-os-objetos",level:3},{value:"Atributos espec\xedficos",id:"atributos-espec\xedficos",level:3},{value:"Sintaxes compat\xedveis",id:"sintaxes-compat\xedveis",level:4},{value:"Exemplos",id:"exemplos",level:4},{value:"Declara\xe7\xf5es de folhas de estilo",id:"declara\xe7\xf5es-de-folhas-de-estilo",level:2},{value:"Mapa de atributos",id:"mapa-de-atributos",level:3},{value:"Valores de atributos espec\xedficos",id:"valores-de-atributos-espec\xedficos",level:3},{value:"Ordem de prioridade",id:"ordem-de-prioridade",level:2},{value:"JSON vs Folha de estilo",id:"json-vs-folha-de-estilo",level:3},{value:"Folhas de estilo m\xfaltiplas",id:"folhas-de-estilo-m\xfaltiplas",level:3},{value:"Cria\xe7\xe3o ou modifica\xe7\xe3o de folhas de estilo",id:"cria\xe7\xe3o-ou-modifica\xe7\xe3o-de-folhas-de-estilo",level:2}],m={toc:d};function u(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",r({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,o.kt)("p",null,"Uma folha de estilo agrupa junto uma combina\xe7\xe3o de atributos para objetos formul\xe1rio - de atributos de texto a quase qualquer atributo de objeto dispon\xedvel."),(0,o.kt)("p",null,"Al\xe9m de harmonizar uma interface de aplica\xe7\xe3o, folhas de estilo oferecem tr\xeas vantagens principais:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Poupa tempo durante o desenvolvimento: cada objeto tem agrupamentos de configura\xe7\xf5es espec\xedficos dentro de uma \xfanica opera\xe7\xe3o."),(0,o.kt)("li",{parentName:"ul"},"Manuten\xe7\xe3o facilitada: folhas de estilo modificam a apar\xeancia de qualquer objeto que as usa, ent\xe3o mudar o tamanho de fonte em uma folha de estilo vai mudar o estilo de fonte para todos os objetos que usarem essa mesma folha de estilo."),(0,o.kt)("li",{parentName:"ul"},"Controle de desenvolvimento multiplataforma: as folhas de estilo podem ser aplicadas para plataformas macOS e Windows, apenas macOS ou s\xf3 Windows. Quando uma folha de estilo for aplicada, 4D automaticamente usa a folha de estilo apropriada.")),(0,o.kt)("h3",r({},{id:"arquivos-folhas-de-estilo"}),"Arquivos folhas de estilo"),(0,o.kt)("p",null,"4D aceita tr\xeas arquivos espec\xedficos de folhas de estilo:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Folha de Estilo"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Plataforma"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"styleSheets.css"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Folha de estilo global para macOS e Windows")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Para definir os estilos de atributos espec\xedficos de macOS unicamente")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Para definir os estilos de atributos espec\xedficos para Windows unicamente")))),(0,o.kt)("p",null,'Estes arquivos se armazenam na pasta "/SOURCES" do projeto.'),(0,o.kt)("h3",r({},{id:"arquitetura-das-folhas-de-estilo"}),"Arquitetura das folhas de estilo"),(0,o.kt)("p",null,"Apesar de adaptadas para satisfazer \xe0s necessidades espec\xedficas dos formul\xe1rios 4D, as folhas de estilo dos bancos de dados projeto geralmente seguem a sintaxe e a gram\xe1tica CSS2."),(0,o.kt)("p",null,"Cada r\xe9gua de estilo em uma folha de estilo cont\xe9m duas partes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a ",(0,o.kt)("em",{parentName:"p"},"Selector"),' - Um seletor define onde aplicar o estilo. 4D \xe9 compat\xedvel com os seletores "object type", "object name", "class", "all objects" e "attribute value".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"uma ",(0,o.kt)("em",{parentName:"p"},"declara\xe7\xe3o")," - A declara\xe7\xe3o define o estilo real a aplicar. Podem ser agrupadas v\xe1rias linhas de declara\xe7\xe3o para formar um bloco de declara\xe7\xe3o. Cada linha de um bloco de declara\xe7\xe3o CSS deve terminar com um ponto e linha, e o bloco inteiro deve ser rodeado por chaves."))),(0,o.kt)("h2",r({},{id:"seletores-de-folhas-de-estilo"}),"Seletores de folhas de estilo"),(0,o.kt)("h3",r({},{id:"tipo-de-objeto"}),"Tipo de objeto"),(0,o.kt)("p",null,"O tipo de objeto define o tipo de objeto ao que vai aplicar o estilo, e corresponde ao seletor de elementos CSS."),(0,o.kt)("p",null,"Especifique o tipo de objeto, depois entre chaves, declare os estilos a aplicar."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"O tipo de objeto corresponde ao JSON ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"tipo")," propriedade de objetos formul\xe1rios.")),(0,o.kt)("p",null,"No exemplo abaixo, todos os objetos do tipo ",(0,o.kt)("em",{parentName:"p"},"button")," vai exibir texto na fonte Helvetica Neue, com um tamanho de 20 p\xedxels:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,o.kt)("p",null,'Para aplicar o mesmo estilo para m\xfaltiplos tipos de objetos, especifique o tipo de objeto separado por um "," ent\xe3o em chaves, declare os estilos a aplicar:'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"text, input {\n  text-align: left;\n  stroke: grey;\n}\n")),(0,o.kt)("h3",r({},{id:"nome-de-objeto"}),"Nome de objeto"),(0,o.kt)("p",null,"O nome de objeto corresponde ao ",(0,o.kt)("strong",{parentName:"p"},"seletor de ID")," CSS e define um objeto espec\xedfico ao que h\xe1 que dar estilo, j\xe1 que o nome do objeto \xe9 \xfanico dentro do formul\xe1rio."),(0,o.kt)("p",null,"Determine o objeto com um caractere '#' antes do nome de objeto, depois entre chaves, declare os estilos a aplicar."),(0,o.kt)("p",null,'No exemplo abaio, o texto de objeto com o nome "okButton" ser\xe1 exibido em fonte Helvetica Neue, com um tamanho de 20 p\xedxels:'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n")),(0,o.kt)("h3",r({},{id:"class"}),"Class"),(0,o.kt)("p",null,"Class corresponde ao ",(0,o.kt)("strong",{parentName:"p"},"selector class")," CSS e define o estilo para todos os objetos formul\xe1rio com o atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,o.kt)("p",null,'Pode especificar as classes a usar com um caractere "." seguido pelo nome da classe, e entre chaves, declare os estilos a aplicar.'),(0,o.kt)("p",null,"No exemplo abaixo, o texto de todos os objetos com o nome da classe ",(0,o.kt)("inlineCode",{parentName:"p"},"okButtons")," se mostrar\xe1 na fonte Helvetica Neue, com um tamanho de 20 p\xedxels, alinhado ao centro:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n")),(0,o.kt)("p",null,'Para indicar que um estilo deve aplicar-se s\xf3 aos objetos de um tipo determinado, especifique o tipo seguido de "." e o nome da classe, e depois, entre chaves, declare o estilo ou os estilos a aplicar.'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"text.center {\n  text-align: center;\n  stroke: red;\n}\n")),(0,o.kt)("p",null,"Na descri\xe7\xe3o do formul\xe1rio 4D, se associa um nome de classe a um objeto mediante o atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),". Este atributo cont\xe9m um ou v\xe1rios nomes de classe, separados por um espa\xe7o:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),'class: "okButtons important"       \n')),(0,o.kt)("h3",r({},{id:"todos-os-objetos"}),"Todos os objetos"),(0,o.kt)("p",null,"Em correspond\xeancia com o seletor CSS ",(0,o.kt)("strong",{parentName:"p"},"universal"),', o caractere "*" indica que o seguinte estilo se aplicar\xe1 a todos os objetos do formul\xe1rio.'),(0,o.kt)("p",null,'Indique que um estilo deve aplicar-se a todos os objetos formul\xe1rio com o car\xe1cter "*" e, a seguir, entre chaves, declare os estilos que devem aplicar-se.'),(0,o.kt)("p",null,"No seguinte exemplo, todos os objetos ter\xe3o um fundo cinza:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"* {\n  fill: gray;\n}\n")),(0,o.kt)("h3",r({},{id:"atributos-espec\xedficos"}),"Atributos espec\xedficos"),(0,o.kt)("p",null,"Os estilos correspondentes aos ",(0,o.kt)("strong",{parentName:"p"},"seletores de atributos")," CSS se pedem aplicar a todos os objetos formul\xe1rio com um atributo espec\xedfico."),(0,o.kt)("p",null,"Especifique o tipo de atributo entre colchetes, depois entre chaves, declare os estilos a aplicar."),(0,o.kt)("h4",r({},{id:"sintaxes-compat\xedveis"}),"Sintaxes compat\xedveis"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"[attribute]"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"coincide com objetos com o ",(0,o.kt)("inlineCode",{parentName:"td"},"attribute"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'[attribute="value"]'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"coincide com objetos cujo valor do ",(0,o.kt)("inlineCode",{parentName:"td"},"attribute"),' conteha exatamente o "valor" especificado')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'[attribute~="value"]'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"coincide com os objetos com o valor do ",(0,o.kt)("inlineCode",{parentName:"td"},"attribute"),' que cont\xe9m o  "valor" entre uma lista de palavras separadas por espa\xe7os')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"[attribute","|",'="value"]'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"coincide com objetos com um ",(0,o.kt)("inlineCode",{parentName:"td"},"attribute"),' cujo valor come\xe7a por "valor"')))),(0,o.kt)("h4",r({},{id:"exemplos"}),"Exemplos"),(0,o.kt)("p",null,"Todos os objetos com o atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"borderStyle")," ter\xe3o l\xednhas roxas:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"[borderStyle]\n{\n     stroke: purple;\n}\n")),(0,o.kt)("p",null,'Todos os objetos de tipo texto com um atributo texto cujo valor seja "Hello" ter\xe3o letras azuis:'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"text[text=Hello]\n{\n     stroke: blue;\n}\n")),(0,o.kt)("p",null,'Todos os objetos de tipo texto cujos valores contenham "hello" ter\xe3o linhas azuis:'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"[text~=Hello]\n{\n     stroke: blue;\n}\n\n")),(0,o.kt)("p",null,'Todos os objetos do tipo texto com um atributo de texto cujo valor comece com "Hello" ter\xe3o as letras amarelas:'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"text[text|=Hello]\n{\n     stroke: yellow;\n}\n")),(0,o.kt)("h2",r({},{id:"declara\xe7\xf5es-de-folhas-de-estilo"}),"Declara\xe7\xf5es de folhas de estilo"),(0,o.kt)("p",null,"A maioria dos atributos do objeto formul\xe1rio podem ser definidos dentro de uma folha de estilo, exceto os seguintes atributos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"method"'),(0,o.kt)("li",{parentName:"ul"},'"type"'),(0,o.kt)("li",{parentName:"ul"},'"class"'),(0,o.kt)("li",{parentName:"ul"},'"event"'),(0,o.kt)("li",{parentName:"ul"},"choiceList, excludedList, labels, list, requiredList (list type)")),(0,o.kt)("p",null,"Os atributos de objeto formul\xe1rio podem ser declarados com seu nome JSON como atributos CSS (sem incluir os tipos de objetos, m\xe9todos, eventos e listas). Para mais informa\xe7\xe3o, consulte a p\xe1gina ",(0,o.kt)("strong",{parentName:"p"},"Formul\xe1rios din\xe2micos")," no Manual de Desenho."),(0,o.kt)("h3",r({},{id:"mapa-de-atributos"}),"Mapa de atributos"),(0,o.kt)("p",null,"Os atributos listados a continua\xe7\xe3o podem aceitar o nome 4D ou o nome CSS."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"4D"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"CSS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"borderStyle"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"border-style")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"fill"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"background-color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"fontFamily"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"font-family")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"fontSize"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"font-size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"fontStyle"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"font-style")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"fontWeight"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"font-weight")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"stroke"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"textAlign"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"text-align")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"textDecoration"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"text-decoration")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"verticalAlign"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"vertical-align")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Os valores espec\xedficos 4D (",(0,o.kt)("em",{parentName:"p"},"por exemplo, "),', "sunken") n\xe3o s\xe3o compat\xedveis quando se utilizam nomes de atributos CSS.')),(0,o.kt)("h3",r({},{id:"valores-de-atributos-espec\xedficos"}),"Valores de atributos espec\xedficos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Para os atributos ",(0,o.kt)("inlineCode",{parentName:"li"},"icon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"picture")," e ",(0,o.kt)("inlineCode",{parentName:"li"},"customBackgroundPicture")," que s\xe3o compat\xedveis com uma rota a uma imagem, a sintaxe \xe9:")),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* rota absoluta */\nicon: url("edit.png"); /* rota relativa ao arquivo de formul\xe1rio */\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Para ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stroke")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"alternateFill")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontalLineStroke")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"verticalLineStroke"),", tr\xeas sintaxes s\xe3o compat\xedveis:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"css color name: ",(0,o.kt)("inlineCode",{parentName:"li"},"fill: red;")),(0,o.kt)("li",{parentName:"ul"},"valor hexad\xe9cimal: ",(0,o.kt)("inlineCode",{parentName:"li"},"fill: #FF0000;")),(0,o.kt)("li",{parentName:"ul"},"funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"li"},"rgb()"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"fill:rgb(255,0,0)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Se uma string utilizar caracteres proibidos em CSS, pode rodear a string com aspas simples ou duplas. Por exemplo:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"uma referencia xliff: ",(0,o.kt)("inlineCode",{parentName:"li"},'tooltip: ":xliff:CommonMenuFile";')),(0,o.kt)("li",{parentName:"ul"},"um datasource com a express\xe3o de campo: ",(0,o.kt)("inlineCode",{parentName:"li"},'dataSource: "[Table_1:1]ID:1";'))))),(0,o.kt)("h2",r({},{id:"ordem-de-prioridade"}),"Ordem de prioridade"),(0,o.kt)("p",null,"Os proetos 4D priorizam as defini\xe7\xf5es de estilo em conflito, primeiro pela defini\xe7\xe3o do formul\xe1rio e depois pelas folhas de estilo."),(0,o.kt)("h3",r({},{id:"json-vs-folha-de-estilo"}),"JSON vs Folha de estilo"),(0,o.kt)("p",null,"Se um atributo estiver definido na descri\xe7\xe3o do formul\xe1rio JSON e em uma folha de estilo, 4D utilizar\xe1 o valor do arquivo JSON."),(0,o.kt)("p",null,"Para anular este comportamento, o valor do estilo deve ir seguido de uma declara\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"!important"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo 1:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n do formul\xe1rio JSON"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Folha de Estilo"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"4D exibe"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"text: Edit;")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},'"Button"'))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo 2:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n do formul\xe1rio JSON"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Folha de Estilo"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"4D exibe"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},'"text": "Button",')),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"text: Edit !important;")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},'"Edit"'))))),(0,o.kt)("h3",r({},{id:"folhas-de-estilo-m\xfaltiplas"}),"Folhas de estilo m\xfaltiplas"),(0,o.kt)("p",null,"Durante a execu\xe7\xe3o, 4D prioriza automaticamente as folhas de estilo na seguinte ordem:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"O formul\xe1rio 4D carregar\xe1 primeiro o arquivo CSS por padr\xe3o ",(0,o.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets.css"),"."),(0,o.kt)("li",{parentName:"ol"},"Depois carregar\xe1 o arquivo CSS para a plataforma atual ",(0,o.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_mac.css")," o ",(0,o.kt)("inlineCode",{parentName:"li"},"/SOURCES/styleSheets_windows.css"),"."),(0,o.kt)("li",{parentName:"ol"},"Se existir, ent\xe3o carregar\xe1 um arquivo CSS espec\xedfico definido no formul\xe1rio  JSON:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"um arquivo para ambas plataformas:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",r({parentName:"pre"},{}),'"css": "<path>"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ou uma lista de arquivos para ambas plataformas:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",r({parentName:"pre"},{}),'"css": [\n     "<path1>",\n     "<path2>"\n      ],\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ou uma lista de arquivos por plataforma:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",r({parentName:"pre"},{}),' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As rotas dos arquivos pedem ser relativas ou absolutas."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Relative paths are resolved relative to the JSON form description file."),(0,o.kt)("li",{parentName:"ul"},"For security reasons, only filesystem paths are accepted for absolute paths. (",(0,o.kt)("em",{parentName:"li"},"e.g."),', "/RESOURCES", "/DATA")'))),(0,o.kt)("h2",r({},{id:"cria\xe7\xe3o-ou-modifica\xe7\xe3o-de-folhas-de-estilo"}),"Cria\xe7\xe3o ou modifica\xe7\xe3o de folhas de estilo"),(0,o.kt)("p",null,'Pode criar folhas de estilo utilizando seu editor de texto preferido e salvando o arquivo com extens\xe3o ".css" na pasta "/SOURCES" do projeto.'),(0,o.kt)("p",null,"A caixa de ferramentas de 4D oferece uma p\xe1gina ",(0,o.kt)("strong",{parentName:"p"},"Hojas de estilo")," como op\xe7\xe3o de acesso direto para criar e editar uma das tr\xeas folhas de estilo com nomes espec\xedficas da plataforma."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Abra a p\xe1gina ",(0,o.kt)("strong",{parentName:"p"},"Estilos")," escolhendo a ",(0,o.kt)("strong",{parentName:"p"},"Caixa de ferramentas > Styles")," do menu Design ou clique no \xedcone ",(0,o.kt)("strong",{parentName:"p"},"Caixa de ferramentas")," da barra de ferramentas do editor de formul\xe1rios."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(69280).Z,width:"787",height:"582"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Selecione o tipo de folha de estilo que deseja criar E cliquer no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Criar")," ou ",(0,o.kt)("strong",{parentName:"p"},"Editar"),": ",(0,o.kt)("img",{src:a(77471).Z,width:"116",height:"23"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A folha de estilo se abrir\xe1 em seu editor de texto predeterminado."))))}u.isMDXComponent=!0},77471:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},69280:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"}}]);