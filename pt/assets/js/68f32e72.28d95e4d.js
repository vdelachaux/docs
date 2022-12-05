"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"ZipArchiveClass",title:"ZIPArchive"},i=void 0,p={unversionedId:"API/ZipArchiveClass",id:"version-19/API/ZipArchiveClass",title:"ZIPArchive",description:'Um arquivo 4D Zip \xe9 um  objetoFile ou Folder contendo um ou mais arquivos ou pastas, que s\xe3o comprimidos para ter um tamanho menor que o original. Esses arquivos s\xe3o criados com uma extens\xe3o ".zip" e podem ser usados para poupar espa\xe7o em disco ou transferir arquivos via meios que tenham limita\xe7\xf5es de tamanho (por exemplo, um email ou por uma rede).',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/pt/19/API/ZipArchiveClass",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/API/ZipArchiveClass.md",tags:[],version:"19",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/pt/19/API/WebServerClass"},next:{title:"ZIPFile",permalink:"/docs/pt/19/API/ZipFileClass"}},s={},d=[{value:"Exemplo",id:"exemplo",level:3},{value:"Resumo",id:"resumo",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:"Exemplo",id:"exemplo-5",level:4},{value:".root",id:"root",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4}],m={toc:d};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um arquivo 4D Zip \xe9 um  objeto",(0,r.kt)("inlineCode",{parentName:"p"},"File")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"Folder"),' contendo um ou mais arquivos ou pastas, que s\xe3o comprimidos para ter um tamanho menor que o original. Esses arquivos s\xe3o criados com uma extens\xe3o ".zip" e podem ser usados para poupar espa\xe7o em disco ou transferir arquivos via meios que tenham limita\xe7\xf5es de tamanho (por exemplo, um email ou por uma rede).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pode criar um arquivo 4D ZIP com o comando ",(0,r.kt)("a",n({parentName:"li"},{href:"#zip-create-archive"}),"ZIP Create archive"),"."),(0,r.kt)("li",{parentName:"ul"},"As inst\xe2ncias ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/API/ZipFileClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," e ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/API/ZipFolderClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," de 4D est\xe3o dispon\xedveis vai a propriedade ",(0,r.kt)("a",n({parentName:"li"},{href:"#root"}),(0,r.kt)("inlineCode",{parentName:"a"},"root"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") do objeto retornado pelo comando ",(0,r.kt)("a",n({parentName:"li"},{href:"#zip-read-archive"}),"ZIP Read archive"),".")),(0,r.kt)("h3",n({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"Para recuperar e ver os conte\xfados de um objeto ZIP file:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $path; $archive : 4D. File\nvar $zipFile : 4D. ZipFile\nvar $zipFolder : 4D. ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // store the zip main folder\n$zipFile:=$zipFolder.files()[0] //read the first zipped file If($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n')),(0,r.kt)("h3",n({},{id:"resumo"}),"Resumo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"#root"}),(0,r.kt)("strong",{parentName:"a"},".root")," : 4D. ZipFolder"),"\xa0","\xa0","\xa0","\xa0","uma pasta virtual que permite o acesso ao conte\xfado do arquivo ZIP")))),(0,r.kt)("h2",n({},{id:"zip-create-archive"}),"ZIP Create archive"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3rico"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"v18"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Adicionado"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"fileToZip")," : 4D. File ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D. File ) : Object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"folderToZip")," : 4D. Folder ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D. File { ; ",(0,r.kt)("em",{parentName:"p"},"options")," : Integer }) : Object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipStructure")," : Object ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D. File ) : Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"fileToZip"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D. File"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto File ou Folder a comprimir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"folderToZip"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D. Folder"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto File ou Folder a comprimir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"zipStructure"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto File ou Folder a comprimir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"destinationFile"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D. File"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Arquivo destino para o arquivo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"folderToZip")," option: ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Resultados"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto de estado")))),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"O comando ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," cria um objecto de arquivo ZIP comprimido e devolve o estado da opera\xe7\xe3o."),(0,r.kt)("p",null,"You can pass a 4D. File, a 4D. Folder, or a zip structure object as first parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"fileToZip"),": simplesmente passar  ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," para compactar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"folderToZip"),": You pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. Folder")," to compress. Nesse caso, o par\xe2metro ",(0,r.kt)("em",{parentName:"p"},"options")," permite compactar s\xf3 os conte\xfados da pasta (ou seja, excluir a pasta parente). Como padr\xe3o, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," compacta a pasta e seus conte\xfados, assim a opera\xe7\xe3o de descompacta\xe7\xe3o vai recriar a pasta. Se quiser que a opera\xe7\xe3o de descompacta\xe7\xe3o restaure apenas os conte\xfados da pasta, passe a cosntante ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," no par\xe2metro ",(0,r.kt)("em",{parentName:"p"},"options"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"zipStructure"),": pode passar um objeto descrevendo o objeto ZIP archive. As propriedades abaixo est\xe3o dispon\xedveis para definir a estrutura:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Propriedade"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"compression"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": Reduz a compacta\xe7\xe3o (padr\xe3o)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": compacta\xe7\xe3o LZMA"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": compacta\xe7\xe3o XZ"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": Sem compacta\xe7\xe3o"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"level"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xedvel de compress\xe3o. Valores poss\xedveis: de 1 a 10. Um valor pequeno produz um arquivo de maior tamanho, enquanto um valor grande produz um arquivo de tamanho menor. O n\xedvel de compacta\xe7\xe3o tem um impacto na performance. Valores padr\xe3o se omitidos: ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"encryption"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A criptografia a usar se uma senha for estabelecida:",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": criptografia AES com uma chave de 128-bits."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": criptografia AES com uma chave de 192-bits."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": criptografia AES com chave de 256-bits (padr\xe3o se uma senha for estabelecida)."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": os dados n\xe3o s\xe3o criptografados (padr\xe3o se n\xe3o estabelecer uma senha)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"senha"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Uma senha a usar se a criptografia for necess\xe1ria.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"files"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("li",null,"a collection of ",(0,r.kt)("inlineCode",{parentName:"td"},"4D. File")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"4D. Folder")," objects or"),(0,r.kt)("li",null,"uma cole\xe7\xe3o de objetos com as propriedades abaixo:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Propriedade"),(0,r.kt)("td",null,"Tipo"),(0,r.kt)("td",null,"Descri\xe7\xe3o")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"source"),(0,r.kt)("td",null,"4D. File or 4D. Folder"),(0,r.kt)("td",null,"File ou Folder")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"destination"),(0,r.kt)("td",null,"Text"),(0,r.kt)("td",null,"(opcional) especifique uma rota de arquivo relativa para mudar a organiza\xe7\xe3o dos conte\xfados do arquivo")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"(opcional) - 'ZIP ignore invisible files' ou 0 para compactar o arquivo inteiro"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D. Function"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Uma f\xf3rmula de callback (retrochamada) que recebe o progresso da compacta\xe7\xe3o (0-100) em $1.")))),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," parameter, pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. File"),' object describing the ZIP archive to create (name, location, etc.). \xc9 recomendado usar a extens\xe3o ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.'),(0,r.kt)("p",null,"Quando um arquivo for criado, pode usar o comando ",(0,r.kt)("a",n({parentName:"p"},{href:"#zip-read-archive"}),"ZIP Read archive")," para acess\xe1-lo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objeto de estado")),(0,r.kt)("p",null,"O estado do objeto retornado cont\xe9m as propriedades abaixo:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Propriedade"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mensagem de erro (se houver):",(0,r.kt)("li",null,"Imposs\xedvel abrir o arquivo ZIP"),(0,r.kt)("li",null,"IMposs\xedvel criar o arquivo ZIP"),(0,r.kt)("li",null,"Uma senha \xe9 necess\xe1ria para criptografia"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"status"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"C\xf3digo de estado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True se o arquivo for criado com sucesso, sen\xe3o false")))),(0,r.kt)("h4",n({},{id:"exemplo-1"}),"Exemplo 1"),(0,r.kt)("p",null,"To compress a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. File"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $file; $destination : 4D. File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n')),(0,r.kt)("h4",n({},{id:"exemplo-2"}),"Exemplo 2"),(0,r.kt)("p",null,"To compress a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. Folder")," without the folder itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $folder : 4D. Folder\n\n var $destination : 4D. File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n')),(0,r.kt)("h4",n({},{id:"exemplo-3"}),"Exemplo 3"),(0,r.kt)("p",null,"Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D. File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //we use the 4D Progress component\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myFormulaCompressingMethod"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"})," var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n")),(0,r.kt)("h4",n({},{id:"exemplo-4"}),"Exemplo 4"),(0,r.kt)("p",null,"Pode passar uma cole\xe7\xe3o de pastas e arquivos para compactar ao objeto ",(0,r.kt)("em",{parentName:"p"},"zipStructure"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D. File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n')),(0,r.kt)("h2",n({},{id:"zip-read-archive"}),"ZIP Read archive"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3rico"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"v18"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Adicionado"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIP Read archive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipFile")," : 4D. File { ; ",(0,r.kt)("em",{parentName:"p"},"password")," : Text }) : 4D. ZipArchive"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"zipFile"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D. File"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Arquivos Zip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"senha"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Senha do arquivo ZIP, se houver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Resultados"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D. ZipArchive"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto arquivo")))),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," property contains a virtual folder providing access to the contents of the ZIP archive."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"O comando n\xe3o descompacta o arquivo ZIP, apenas oferece uma vis\xe3o de seus conte\xfados. Para extrair os conte\xfados do arquivo, precisa usar m\xe9todos como ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/API/Document#copyto"}),"file.copyTo()")," ou ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/API/Directory#copyto"}),"folder.copyTo()"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"fileToZip"),": You simply pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. File")," to compress."),(0,r.kt)("p",null,"Se ",(0,r.kt)("em",{parentName:"p"},"zipFile")," for protegido por uma senha, precisa usar o par\xe2metro opcional ",(0,r.kt)("em",{parentName:"p"},"password")," \xb4para fornecer uma senha. Se uma senha for exigida mas n\xe3o for passada, quando tentar ler os conte\xfados do arquivo um erro ser\xe1 gerado."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objeto arquivo")),(0,r.kt)("p",null,"The returned ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. ZipArchive")," object contains a single ",(0,r.kt)("a",n({parentName:"p"},{href:"#root"}),(0,r.kt)("inlineCode",{parentName:"a"},"root"))," property whose value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D. ZipFolder")," object. Summary --\x3euma pasta virtual que oferece acesso aos conte\xfados do arquivo ZIP."),(0,r.kt)("h4",n({},{id:"exemplo-5"}),"Exemplo"),(0,r.kt)("p",null,"Para recuperar e ver os conte\xfados de um objeto ZIP file:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $archive : 4D. ZipArchive\n var $path : 4D. File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n')),(0,r.kt)("p",null,"Para recuperar a lista dos arquivos e pastas no arquivo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n")),(0,r.kt)("p",null,"Para ler todos os conte\xfados de um arquivo sem extra\xed-lo da pasta root:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n')),(0,r.kt)("p",null,"Para extrair da pasta root:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  //extrair um arquivo\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extrair todos os arquivos\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n')),(0,r.kt)("h2",n({},{id:"root"}),".root"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".root")," : 4D. ZipFolder"),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"A propriedade ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," cont\xe9m uma pasta virtual que permite o acesso ao conte\xfado do arquivo ZIP."),(0,r.kt)("p",null,"A pasta ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," e seus conte\xfados podem ser manipulados com as fun\xe7\xf5es e propriedades ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/API/ZipFileClass"}),"ZipFile")," e ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/API/ZipFolderClass"}),"ZipFolder"),"."),(0,r.kt)("p",null,"Essa propriedade \xe9 ",(0,r.kt)("strong",{parentName:"p"},"apenas leitura"),"."))}u.isMDXComponent=!0}}]);