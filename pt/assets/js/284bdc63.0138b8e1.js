"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81342],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>u});var r=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=r.createContext({}),c=function(e){var a=r.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},l=function(e){var a=c(e.components);return r.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(o),u=t,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return o?r.createElement(v,n(n({ref:a},l),{},{components:o})):r.createElement(v,n({ref:a},l))}));function u(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,n=new Array(i);n[0]=m;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,n[1]=s;for(var c=2;c<i;c++)n[c]=o[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},43897:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>l});o(67294);var r=o(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t.apply(this,arguments)}function i(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}const n={id:"tls",title:"TLS Protocol (HTTPS)"},s=void 0,d={unversionedId:"Admin/tls",id:"version-19-R6/Admin/tls",title:"TLS Protocol (HTTPS)",description:"Todos os servidores 4D podem se comunicar em modo seguro atrav\xe9s do protocolo TLS (Transport Layer Security):",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Admin/tls.md",sourceDirName:"Admin",slug:"/Admin/tls",permalink:"/docs/pt/19-R6/Admin/tls",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/Admin/tls.md",tags:[],version:"19-R6",frontMatter:{id:"tls",title:"TLS Protocol (HTTPS)"},sidebar:"docs",previous:{title:"Interface de linha de comando",permalink:"/docs/pt/19-R6/Admin/cli"},next:{title:"Gest\xe3o de Licen\xe7as 4D",permalink:"/docs/pt/19-R6/Admin/licenses"}},c={},l=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Vers\xe3o m\xednima",id:"vers\xe3o-m\xednima",level:2},{value:"Como obter o certificado?",id:"como-obter-o-certificado",level:2},{value:"Instala\xe7\xe3o e ativa\xe7\xe3o",id:"instala\xe7\xe3o-e-ativa\xe7\xe3o",level:2},{value:"Instala\xe7\xe3o de arquivos <code>key.pem</code> e <code>cert.pem</code>",id:"instala\xe7\xe3o-de-arquivos-keypem-e-certpem",level:3},{value:"Com o servidor web",id:"com-o-servidor-web",level:4},{value:"Com o servidor de aplica\xe7\xf5es (aplica\xe7\xf5es de desktop cliente-servidor)",id:"com-o-servidor-de-aplica\xe7\xf5es-aplica\xe7\xf5es-de-desktop-cliente-servidor",level:4},{value:"Com o servidor SQL",id:"com-o-servidor-sql",level:4},{value:"Ativar TLS",id:"ativar-tls",level:3},{value:"Perfect Forward Secrecy (PFS)",id:"perfect-forward-secrecy-pfs",level:2}],p={toc:l};function m(e){var{components:a}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",t({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Todos os servidores 4D podem se comunicar em modo seguro atrav\xe9s do protocolo TLS (Transport Layer Security):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"o servidor web"),(0,r.kt)("li",{parentName:"ul"},"o servidor de aplica\xe7\xe3o (aplica\xe7\xf5es desktop cliente-servidor)"),(0,r.kt)("li",{parentName:"ul"},"o servidor SQL")),(0,r.kt)("h2",t({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,r.kt)("p",null,"O protocolo TLS (sucessor de SSL) foi criado para assegurar trocas de dados entre duas aplica\xe7\xf5es - principalmente entre servidor web e um navegador. Esse protocolo \xe9 amplamente usado e \xe9 compat\xedvel com a maioria dos navegadores."),(0,r.kt)("p",null,"No n\xedvel de rede, o protocolo de seguran\xe7a \xe9 inserido entre a capa TCP/IP (baixo n\xedvel) e o protocolo de alto n\xedvel HTTP. Foi criado principalmente para trabalhar com HTTP."),(0,r.kt)("p",null,"Configura\xe7\xe3o de rede usando TSL:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(25282).Z,width:"318",height:"174"})),(0,r.kt)("p",null,"O protocolo TLS foi criado para autenticar o emissor e o recipiente e assim garantir a confidencialidade e integridade da troca de informa\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Autentica\xe7\xe3o"),": As identidades do emissor e do receptor s\xe3o confirmadas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Confidencialidade"),": O dado enviado \xe9 criptografado para que um terceiro n\xe3o possa entender a mensagem."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integridade"),": Os dados recebidos n\xe3o foram modificados, seja por acidente ou com m\xe1 inten\xe7\xe3o.")),(0,r.kt)("p",null,"TLS usa uma t\xe9cnica de criptografia de chave p\xfablica baseado em duas chaves assim\xe9tricas para criptografia e descriptografia: uma chave p\xfablica e outra privada. A chave privada \xe9 usada para criptografar os dados. O emissor (o website) n\xe3o d\xe1 essa chave para ningu\xe9m. A chave p\xfablica \xe9 usada para decriptografar a informa\xe7\xe3o e envi\xe1-la para os recipientes (navegadores web) atrav\xe9s de um certificado. Quando usar TLS com a Internet, o certificado \xe9 entregue atrav\xe9s de uma autoridade de certifica\xe7\xe3o, como Verisign\xae. O website paga a Autoridade de Certifica\xe7\xe3o para entregar um certificado que garante a autentica\xe7\xe3o do servidor e cont\xe9m a chave p\xfablica que permite a troca de dados em um modo seguro."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para saber mais sobre o m\xe9todo de criptografia e chaves privadas e p\xfablicas, veja a descri\xe7\xe3o do comando ",(0,r.kt)("inlineCode",{parentName:"p"},"ENCRYPT BLOB"),".")),(0,r.kt)("h2",t({},{id:"vers\xe3o-m\xednima"}),"Vers\xe3o m\xednima"),(0,r.kt)("p",null,"Como padr\xe3o, a vers\xe3o m\xednima de um protocolo de seguran\xe7a aceito pelo servidor \xe9 TLS 1.2. Pode modificar esse valor usando o seletor ",(0,r.kt)("inlineCode",{parentName:"p"},"Min TLS version")," com o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER"),"."),(0,r.kt)("p",null,"Pode controlar o n\xedvel de seguran\xe7a de seu servidor web definindo a vers\xe3o ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/webServerConfig#minimum-tls-version"}),"TLS m\xednima")," aceita para conex\xf5es."),(0,r.kt)("h2",t({},{id:"como-obter-o-certificado"}),"Como obter o certificado?"),(0,r.kt)("p",null,"Um servidor trabalhando em modo seguro significa que precisa de um certificado digital de uma autoridade de certifica\xe7\xf5es. Esse certificado cont\xe9m v\xe1rias informa\xe7\xf5es tais como a ID do site assim como a chave p\xfablica usada para comunicar com o servidor. Esse certificado \xe9 transmitido aos clientes (por exemplo os navegadores Web) conectando a esse servidor. Quando o certificado tiver sido identificado e aceito, a comunica\xe7\xe3o \xe9 feita em modo seguro."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Navegadores web autorizam apenas os certificados emitidos por autoridades de certifica\xe7\xe3o referenciados em suas propriedades.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(27280).Z,width:"394",height:"227"})),(0,r.kt)("p",null,"A autoridade de certifica\xe7\xe3o \xe9 escolhida de acordo com v\xe1rios crit\xe9rios. Se a autoridade de certifica\xe7\xe3o for bem reconhecida, o certificado ser\xe1 autorizado por v\xe1rios navegadores, mas o pre\xe7o pode ser caro."),(0,r.kt)("p",null,"Para obter um certificado digital:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Crie uma chave privada usando o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE ENCRYPTION KEYPAIR"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Aviso"),": por raz\xf5es de seguran\xe7a, a chave privada deve ser sempre mantida em segredo. Na verdade deve ser mantida sempre na m\xe1quina servidor. Para o servidor web, o arquivo Key.pem deve ser localizado na pasta Project."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE CERTIFICATE REQUEST")," para emitir uma peti\xe7\xe3o de certificado.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Envie a peti\xe7\xe3o de certificado \xe0 autoridade de certifica\xe7\xe3o escolhida."),(0,r.kt)("p",{parentName:"li"},"Para preencher uma peti\xe7\xe3o de certificado, pode ser necess\xe1rio entrar em contato com a autoridade de certifica\xe7\xe3o. A autoridade checa que a informa\xe7\xe3o transmitida seja correta. A peti\xe7\xe3o de certificado \xe9 gerada em um BLOB usando o formato PKCS codificado em base64 (formato PEM). Esse princ\xedpio permite que copie e cole as chaves como texto e as envie via E-mail sem modificar o conte\xfado da chave. Por exemplo pode salvar o BLOB que cont\xe9m a peti\xe7\xe3o de certificado em um documento texto (usando o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"BLOB TO DOCUMENT"),"), e ent\xe3o abrir e copiar e colar seu conte\xfado em um mail ou um formul\xe1rio web a ser enviado para a autoridade de certifica\xe7\xe3o.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Quando tiver o certificado, crie um arquivo texto chamado "cert.pem" e cole seu conte\xfado do certificado dentro dele.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",t({parentName:"pre"},{}),"Pode receber um certificado de v\xe1rias maneiras (geralmente por email ou formul\xe1rio HTML). 4D aceita todos os formatos de texto relacionados \xe0 plataformas para certificados (OS X, PC, Linux, etc). Entretanto o certificado deve ser no formato PEM, *ou seja*, PKCS codificado em base64.\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Caracteres CR final de linha n\xe3o s\xe3o compat\xedveis em si; deve usar ou CRLF ou LF."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Coloque o arquivo \u201ccert.pem\u201d no ",(0,r.kt)("a",t({parentName:"p"},{href:"#installation-and-activation"}),"local apropriado"),"."))),(0,r.kt)("p",null,"O servidor 4D pode trabalhar em modo seguro. Um certificado \xe9 v\xe1lido de 3 meses a um ano."),(0,r.kt)("h2",t({},{id:"instala\xe7\xe3o-e-ativa\xe7\xe3o"}),"Instala\xe7\xe3o e ativa\xe7\xe3o"),(0,r.kt)("h3",t({},{id:"instala\xe7\xe3o-de-arquivos-keypem-e-certpem"}),"Instala\xe7\xe3o de arquivos ",(0,r.kt)("inlineCode",{parentName:"h3"},"key.pem")," e ",(0,r.kt)("inlineCode",{parentName:"h3"},"cert.pem")),(0,r.kt)("p",null,"Para poder utilizar o protocolo TLS com o servidor, deve instalar o ",(0,r.kt)("strong",{parentName:"p"},"key.pem")," (documento contendo a chave privada de encripta\xe7\xe3o) e ",(0,r.kt)("strong",{parentName:"p"},"cert.pem")," (documento contendo o certificado) nos locais apropriados. S\xe3o necess\xe1rios diferentes locais, dependendo do servidor em que se pretende utilizar o TLS."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Arquivos padr\xe3o ",(0,r.kt)("em",{parentName:"p"},"key.pem")," e ",(0,r.kt)("em",{parentName:"p"},"cert.pem")," s\xe3o oferecidos com 4D. Para um maior n\xedvel de seguran\xe7a, recomendamos fortemente que esses arquivos sejam substitu\xeddos por seus pr\xf3prios certificados.")),(0,r.kt)("h4",t({},{id:"com-o-servidor-web"}),"Com o servidor web"),(0,r.kt)("p",null,"Para serem utilizados pelo servidor web 4D, os arquivos ",(0,r.kt)("strong",{parentName:"p"},"key.pem")," e ",(0,r.kt)("strong",{parentName:"p"},"cert.pem")," devem ser colocados:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"com 4D em modo local ou 4D Server, ao lado da pasta de projetos ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/pt/19-R6/Project/architecture#project-folder"}))),(0,r.kt)("li",{parentName:"ul"},"com 4D em modo remoto, esses arquivos devem estar na pasta de banco de dados cliente na m\xe1quina remota (para saber mais sobre a localiza\xe7\xe3o dessa pasta, veja o comando  ",(0,r.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page485.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Get 4D folder"))," ).")),(0,r.kt)("p",null,"Deve copiar esses arquivos manualmente na m\xe1quina remota."),(0,r.kt)("h4",t({},{id:"com-o-servidor-de-aplica\xe7\xf5es-aplica\xe7\xf5es-de-desktop-cliente-servidor"}),"Com o servidor de aplica\xe7\xf5es (aplica\xe7\xf5es de desktop cliente-servidor)"),(0,r.kt)("p",null,"Para serem utilizados pelo servidor de aplica\xe7\xe3o 4D, os arquivos",(0,r.kt)("strong",{parentName:"p"},"key.pem")," e ",(0,r.kt)("strong",{parentName:"p"},"cert.pem")," devem ser colocados:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"na pasta ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/pt/19-R6/Project/architecture#resources"}),(0,r.kt)("strong",{parentName:"a"},"Resources")," pasta")," da aplica\xe7\xe3o Servidor 4D"),(0,r.kt)("li",{parentName:"ul"},"e na pasta ",(0,r.kt)("strong",{parentName:"li"},"Resources")," em cada aplica\xe7\xe3o 4D remota (para mais informa\xe7\xf5es sobre a localiza\xe7\xe3o desta pasta, ver o comando ",(0,r.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page485.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Get 4D folder")),").")),(0,r.kt)("h4",t({},{id:"com-o-servidor-sql"}),"Com o servidor SQL"),(0,r.kt)("p",null,"Para serem utilizados pelo servidor SQL 4D, os ficheiros ",(0,r.kt)("strong",{parentName:"p"},"key.pem")," e ",(0,r.kt)("strong",{parentName:"p"},"cert.pem")," devem ser colocados ao lado da pasta do projecto ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/19-R6/Project/architecture#project-folder"})),"."),(0,r.kt)("h3",t({},{id:"ativar-tls"}),"Ativar TLS"),(0,r.kt)("p",null,"A instala\xe7\xe3o de arquivos ",(0,r.kt)("strong",{parentName:"p"},"key.pem")," e ",(0,r.kt)("strong",{parentName:"p"},"cert.pem")," torna poss\xedvel usar TLS com o servidor 4D. Entretanto para que as conex\xf5es TLS sejam aceitas pelo servidor, precisa ativ\xe1-las:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Com o servidor 4D web, precisa ativar HTTPS ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/pt/19-R6/WebServer/webServerConfig#enable-https"})),". Pode estabelecer a op\xe7\xe3o ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/pt/19-R6/WebServer/webServerConfig#enable-hsts"}),"HSTS ")," para redirigir os navegadores que tentem conectar no modo http."),(0,r.kt)("li",{parentName:"ul"},"Com o servidor de aplica\xe7\xe3o, deve selecionar a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Encrypt Client-Server Communications"),' na p\xe1gina "Client-server/Network options" do di\xe1logo de configura\xe7\xf5es.'),(0,r.kt)("li",{parentName:"ul"},"Com o servidor SQL deve selecionar a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Ativar TLS"),' na p\xe1gina "SQL" do di\xe1logo configura\xe7\xf5es.')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"O servidor web 4D tamb\xe9m suporta ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/webServerConfig#enable-hsts"}),"HSTS op\xe7\xe3o")," para declarar que os navegadores s\xf3 devem interagir com ele atrav\xe9s de liga\xe7\xf5es HTTPS seguras.")),(0,r.kt)("h2",t({},{id:"perfect-forward-secrecy-pfs"}),"Perfect Forward Secrecy (PFS)"),(0,r.kt)("p",null,(0,r.kt)("a",t({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Forward_secrecy"}),"PFS"),' adiciona mais um n\xedvel de seguran\xe7a para suas comunica\xe7\xf5es. Ao inv\xe9s de usar chaves de troca pr\xe9-estabelecidas, PFS cria chaves de sess\xe3o cooperativamente entre as partes que se comunicam usando os algoritmos Difie-Hellman (DH). A maneira conjunta com a qual essas chaves s\xe3o constru\xeddas cria um "segredo compartilhado" que impede partes externas de as comprometerem.'),(0,r.kt)("p",null,"Quando TLS estiver ativado no servidor, PFS \xe9 ativado automaticamente. Se o arquivo ",(0,r.kt)("em",{parentName:"p"},"dhparams.pem")," (documento que cont\xe9m a chave privada DH do servidor) ainda n\xe3o existir, 4D vai gerar o arquivo automaticamente com um tamanho de chave de  2048. A gera\xe7\xe3o inicial deste arquivo pode levar v\xe1rios minutos. O arquivo \xe9 colocado com  os arquivos ",(0,r.kt)("a",t({parentName:"p"},{href:"#key-pem-and-cert-pem-files"}),(0,r.kt)("em",{parentName:"a"},"key.pem")," e ",(0,r.kt)("em",{parentName:"a"},"cert.pem")),"."),(0,r.kt)("p",null,"Se utilizar uma ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/webServerConfig##cipher-list"}),"lista de cifrado personalizada")," e quiser habilitar o PFS, deve comprovar que contenha entradas com algoritmos DH ou ECDH (Elliptic-curve Diffie-Hellman)."))}m.isMDXComponent=!0},25282:(e,a,o)=>{o.d(a,{Z:()=>r});const r="data:image/png;base64,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"},27280:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png"}}]);