"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33068],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>u});var t=o(67294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},l=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(o),u=r,v=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return o?t.createElement(v,i(i({ref:a},l),{},{components:o})):t.createElement(v,i({ref:a},l))}));function u(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<n;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},98196:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});o(67294);var t=o(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r.apply(this,arguments)}function n(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const i={id:"webAdmin",title:"WebAdmin"},d=void 0,s={unversionedId:"Admin/webAdmin",id:"version-19-R6/Admin/webAdmin",title:"WebAdmin",description:"Um componente de servidor web integrado, chamado WebAdmin, \xe9 utilizado por 4D e 4D Server para dar um acesso web seguro a fun\xe7\xf5es de gest\xe3o espec\xedficas como Explorador de dados. Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplica\xe7\xe3o web e acessar a aplica\xe7\xe3o 4D associada.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/pt/19-R6/Admin/webAdmin",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/Admin/webAdmin.md",tags:[],version:"19-R6",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Real Time Monitor Page",permalink:"/docs/pt/19-R6/ServerWindow/real-time-monitor"},next:{title:"Web Data Explorer",permalink:"/docs/pt/19-R6/Admin/dataExplorer"}},p={},l=[{value:"Iniciar o web server WebAdmin",id:"iniciar-o-web-server-webadmin",level:2},{value:"Lan\xe7ar ao in\xedcio",id:"lan\xe7ar-ao-in\xedcio",level:3},{value:"Iniciar e parar",id:"iniciar-e-parar",level:3},{value:"Propriedades WebAdmin",id:"propriedades-webadmin",level:2},{value:"Caixa de di\xe1logos de configura\xe7\xf5es",id:"caixa-de-di\xe1logos-de-configura\xe7\xf5es",level:3},{value:"Inicio autom\xe1tico da administra\xe7\xe3o de servidor web",id:"inicio-autom\xe1tico-da-administra\xe7\xe3o-de-servidor-web",level:4},{value:"Conex\xf5es HTTP em localhost aceitas",id:"conex\xf5es-http-em-localhost-aceitas",level:4},{value:"HTTP Port",id:"http-port",level:4},{value:"Aceitar HTTPS",id:"aceitar-https",level:4},{value:"Porta HTTPS",id:"porta-https",level:4},{value:"Rota da pasta de certificados",id:"rota-da-pasta-de-certificados",level:4},{value:"Modo de registro de depura\xe7\xe3o/debug",id:"modo-de-registro-de-depura\xe7\xe3odebug",level:4},{value:"Chave de acesso",id:"chave-de-acesso",level:4},{value:"Configura\xe7\xe3o de WebAdmin sem interface",id:"configura\xe7\xe3o-de-webadmin-sem-interface",level:2},{value:"Autentica\xe7\xe3o e sess\xe3o",id:"autentica\xe7\xe3o-e-sess\xe3o",level:2}],c={toc:l};function m(e){var{components:a}=e,i=n(e,["components"]);return(0,t.kt)("wrapper",r({},c,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Um componente de servidor web integrado, chamado ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", \xe9 utilizado por 4D e 4D Server para dar um acesso web seguro a fun\xe7\xf5es de gest\xe3o espec\xedficas como ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Admin/dataExplorer"}),"Explorador de dados"),". Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplica\xe7\xe3o web e acessar a aplica\xe7\xe3o 4D associada."),(0,t.kt)("p",null,'O webAdmin maneja a autentica\xe7\xe3o de usu\xe1rios com privil\xe9gios "WebAdmin" de forma que possa abrir sess\xf5es administrativas e acessar interfaces dedicadas.'),(0,t.kt)("p",null,"Essa funcionalidade pode ser usada em aplica\xe7\xf5es 4D rodando headless (sem monitor e perif\xe9ricos) assim como aplica\xe7\xf5es 4D rodando sem interfaces."),(0,t.kt)("h2",r({},{id:"iniciar-o-web-server-webadmin"}),"Iniciar o web server WebAdmin"),(0,t.kt)("p",null,"Como padr\xe3o, o servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," n\xe3o \xe9 lan\xe7ado. Precisa configurar o lan\xe7amento ao in\xedcio ou (em vers\xf5es com interface) lan\xe7ar manualmente usando um item de menu."),(0,t.kt)("h3",r({},{id:"lan\xe7ar-ao-in\xedcio"}),"Lan\xe7ar ao in\xedcio"),(0,t.kt)("p",null,"Pode configurar o servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," para que se lance ao in\xedcio da aplica\xe7\xe3o 4D ou 4D Server (antes de que se carregue qualquer projeto)."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Se utilizar uma aplica\xe7\xe3o 4D con interface, selecione a op\xe7\xe3o de menu ",(0,t.kt)("strong",{parentName:"li"},"Arquivo > Administra\xe7\xe3o web > Propriedades..."),".")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(28952).Z,width:"470",height:"294"})),(0,t.kt)("p",null,"Selecione a op\xe7\xe3o ",(0,t.kt)("strong",{parentName:"p"},"Inicio autom\xe1tico da administra\xe7\xe3o do servidor web")," na caixa de di\xe1logo de configura\xe7\xe3o:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(31386).Z,width:"702",height:"205"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Se usar uma aplica\xe7\xe3o 4D que tenha ou n\xe3o interface, pode habilitar o modo de inicio autom\xe1tico utilizando o argumento abaixo ",(0,t.kt)("em",{parentName:"li"},"Interface de linha de comandos"),":")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Se a porta TCP usada pelo  ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," servidor web (",(0,t.kt)("a",r({parentName:"p"},{href:"#https-port"}),"HTTPS")," ou ",(0,t.kt)("a",r({parentName:"p"},{href:"#http-port"}),"HTTP"),", dependendo das configura\xe7\xf5es) n\xe3o estiver dispon\xedvel ao in\xedcio, 4D vai tentar repetidademente os 20 portos a seguintes, e usar o primeiro que estiver dispon\xedvel. Se nenhum porto estiver dispon\xedvel, o servidor web n\xe3o \xe9 lan\xe7ado e um erro \xe9 exibido (ou em aplica\xe7\xe3o headless, aparece no console)")),(0,t.kt)("h3",r({},{id:"iniciar-e-parar"}),"Iniciar e parar"),(0,t.kt)("p",null,"Se utilizar uma aplica\xe7\xe3o 4D com interface, pode iniciar ou parar o servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," de seu projeto a qualquer momento:"),(0,t.kt)("p",null,"Selecione a op\xe7\xe3o de menu ",(0,t.kt)("strong",{parentName:"p"},"Arquivo > Administra\xe7\xe3o web > Iniciar o servidor"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(30723).Z,width:"473",height:"354"})),(0,t.kt)("p",null,"O item de menu vira ",(0,t.kt)("strong",{parentName:"p"},"Stop Server")," quando o servidor for lan\xe7ado; selecione ",(0,t.kt)("strong",{parentName:"p"},"Parar o servidor")," para parar o ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," servidor web."),(0,t.kt)("h2",r({},{id:"propriedades-webadmin"}),"Propriedades WebAdmin"),(0,t.kt)("p",null,"A configura\xe7\xe3o do componente ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," \xe9 obrigat\xf3ria, em particular para definir a",(0,t.kt)("a",r({parentName:"p"},{href:"#access-key"}),(0,t.kt)("strong",{parentName:"a"}," chave de acesso")),". Como padr\xe3o, quando a chave de acesso n\xe3o for estabelecida, o acesso via uma url n\xe3o \xe9 permitido."),(0,t.kt)("p",null,"Pode configurar o componente ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," usando ",(0,t.kt)("a",r({parentName:"p"},{href:"#settings-dialog-box"}),"Web Administration a caixa de di\xe1logo de configura\xe7\xf5es")," (ver abaixo)."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Se usar uma aplica\xe7\xe3o 4D headless pode usar os argumentos da",(0,t.kt)("a",r({parentName:"p"},{href:"#webadmin-headless-configuration"}),(0,t.kt)("em",{parentName:"a"},"Interface de Linha de comando")," ")," para definir as configura\xe7\xf5es b\xe1sicas. Se quiser personalizar o arquivo de configura\xe7\xf5es para definir os par\xe2metros avan\xe7ados.")),(0,t.kt)("h3",r({},{id:"caixa-de-di\xe1logos-de-configura\xe7\xf5es"}),"Caixa de di\xe1logos de configura\xe7\xf5es"),(0,t.kt)("p",null,"Para abrir a caixa de di\xe1logo de configura\xe7\xf5es de administra\xe7\xe3o web, selecione o item de menu ",(0,t.kt)("strong",{parentName:"p"},"File > Web Administration > Configura\xe7\xf5es..."),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(28952).Z,width:"470",height:"294"})),(0,t.kt)("p",null,"A caixa de di\xe1logo abaixo \xe9 mostrada:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(14586).Z,width:"702",height:"462"})),(0,t.kt)("h4",r({},{id:"inicio-autom\xe1tico-da-administra\xe7\xe3o-de-servidor-web"}),"Inicio autom\xe1tico da administra\xe7\xe3o de servidor web"),(0,t.kt)("p",null,"Marque esta op\xe7\xe3o para lan\xe7ar o servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," automaticamente quando iniciar a aplica\xe7\xe3o 4D ou 4D Server (ver (",(0,t.kt)("a",r({parentName:"p"},{href:"#launching-at-startup"}),"acima"),"). Como padr\xe3o essa op\xe7\xe3o n\xe3o \xe9 marcada."),(0,t.kt)("h4",r({},{id:"conex\xf5es-http-em-localhost-aceitas"}),"Conex\xf5es HTTP em localhost aceitas"),(0,t.kt)("p",null,"Quando esta op\xe7\xe3o for marcada, pode conectar ao servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," atrav\xe9s de HTTP na mesma m\xe1quina que a aplica\xe7\xe3o 4D. Como padr\xe3o, essa op\xe7\xe3o \xe9 marcada."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Notas:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Conex\xf5es com HTTP outras que localhost nunca s\xe3o aceitas."),(0,t.kt)("li",{parentName:"ul"},"Mesmo se esta op\xe7\xe3o for marcada, quando ",(0,t.kt)("a",r({parentName:"li"},{href:"#accept-https"}),"Accept HTTPS")," for marcado e a configura\xe7\xe3o  TLS for v\xe1lida, as conex\xf5es localhost v\xe3o usar HTTPS.")),(0,t.kt)("h4",r({},{id:"http-port"}),"HTTP Port"),(0,t.kt)("p",null,"N\xfamero de porta a usar para conex\xf5es com HTTP para o servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server quando a op\xe7\xe3o ",(0,t.kt)("strong",{parentName:"p"},"Accept HTTP connections on localhost")," estiver marcada. Valor normal padr\xe3o \xe9 7080"),(0,t.kt)("h4",r({},{id:"aceitar-https"}),"Aceitar HTTPS"),(0,t.kt)("p",null,"Quando esta op\xe7\xe3o for marcada, pode se conectar ao servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," atrav\xe9s de HTTPS. Como padr\xe3o, essa op\xe7\xe3o \xe9 marcada."),(0,t.kt)("h4",r({},{id:"porta-https"}),"Porta HTTPS"),(0,t.kt)("p",null,"N\xfamero de porta a utilizar para as conex\xf4es ao servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," atrav\xe9s de HTTPS quando a op\xe7\xe3o ",(0,t.kt)("strong",{parentName:"p"},"HTTPS aceita")," estiver marcada. Valor normal padr\xe3o \xe9 7443"),(0,t.kt)("h4",r({},{id:"rota-da-pasta-de-certificados"}),"Rota da pasta de certificados"),(0,t.kt)("p",null,"Rota da pasta onde o certificado TLS est\xe1 localizado. Como padr\xe3o, a rota da pasta de certificados est\xe1 vazia e 4D ou Servidor 4D usa os arquivos de certificados contidos na apica\xe7\xe3o 4D (certificados personalizados devem ser armazenados do lado da pasta projeto)."),(0,t.kt)("h4",r({},{id:"modo-de-registro-de-depura\xe7\xe3odebug"}),"Modo de registro de depura\xe7\xe3o/debug"),(0,t.kt)("p",null,"O estado ou formato do arquivo de registro da peti\xe7\xe3o HTTP (HTTPDebugLog_",(0,t.kt)("em",{parentName:"p"},"nn"),'.txt, armazenada na pasta "Logs" da aplica\xe7\xe3o -- ',(0,t.kt)("em",{parentName:"p"},"nn")," \xe9 o n\xfamero do arquivo). As op\xe7\xf5es abaixo est\xe3o dispon\xedveis:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Desativado")," (padr\xe3o)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Com todas as partes do corpo")," - habilitado com partes do cuerpo das peti\xe7\xf5es e respostas"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Sem as partes do corpo")," - ativado sem partes do corpo (se indica o tamanho do corpo)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Com os corpos das peti\xe7\xf5es")," - ativado com as partes do corpo unicamente nas peti\xe7\xf5es"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Com a resposta corpos")," - ativado com as partes do corpo unicamente nas respostas")),(0,t.kt)("h4",r({},{id:"chave-de-acesso"}),"Chave de acesso"),(0,t.kt)("p",null,"A configura\xe7\xe3o de uma chave de acesso \xe9 obrigat\xf3ria para desbloquear o acesso ao servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," atrav\xe9s de uma URL (o acesso atrav\xe9s de um comando do menu 4D n\xe3o exige uma chave de acesso). Quando nenhuma chave de acesso for definida, n\xe3o \xe9 permitido que nenhum cliente web se conecte atrav\xe9s de uma URL a uma interfaz de administra\xe7\xe3o web como a p\xe1gina ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Admin/dataExplorer"}),"Explorador de dados"),". Uma p\xe1gina de erro \xe9 retornada no caso uma solicita\xe7\xe3o de conex\xe3o:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:o(49509).Z,width:"193",height:"126"})),(0,t.kt)("p",null,"Uma chave de acesso \xe9 parecida a uma senha, mas n\xe3o est\xe1 associada com um login."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para definir uma nova chave de acesso: clique no bot\xe3o ",(0,t.kt)("strong",{parentName:"li"},"Definir"),", introduza a string da chave de acesso na caixa de di\xe1logo e clique em ",(0,t.kt)("strong",{parentName:"li"},"OK"),". A etiqueta bot\xe3o vira ",(0,t.kt)("strong",{parentName:"li"},"Modificar"),"."),(0,t.kt)("li",{parentName:"ul"},"Para modificar a chave de acesso: clique no bot\xe3o ",(0,t.kt)("strong",{parentName:"li"},"Modificar"),", introduza a nova string da chave de acesso na caixa de di\xe1logo e clique em ",(0,t.kt)("strong",{parentName:"li"},"OK"),"."),(0,t.kt)("li",{parentName:"ul"},"Para eliminar a chave de acesso: clique no bot\xe3o",(0,t.kt)("strong",{parentName:"li"},"Modificar"),", deixe vazia a \xe1rea daa chave de acesso e clique em ",(0,t.kt)("strong",{parentName:"li"},"OK"),".")),(0,t.kt)("h2",r({},{id:"configura\xe7\xe3o-de-webadmin-sem-interface"}),"Configura\xe7\xe3o de WebAdmin sem interface"),(0,t.kt)("p",null,"Todos ",(0,t.kt)("a",r({parentName:"p"},{href:"#webadmin-settings"}),"os par\xe2metros de WebAdmin")," s\xe3o armazenados no arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings"),". Ha un arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," por padr\xe3o para cada aplica\xe7\xe3o 4D e 4D Server, pelo qual \xe9 poss\xedvel lan\xe7ar v\xe1rias aplica\xe7\xf5es na mesma m\xe1quina local."),(0,t.kt)("p",null,"Quando rodar uma aplica\xe7\xe3o sem interface 4D ou 4D Servidor, pode estabelecer e usar o arquivo padr\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," , ou determinar um arquivo personalizado ",(0,t.kt)("inlineCode",{parentName:"p"},".4DSettings"),"."),(0,t.kt)("p",null,"Para estabelecer o conte\xfado do arquivo, pode utilizar a ",(0,t.kt)("a",r({parentName:"p"},{href:"#settings-dialog-box"}),"janela de par\xe2metros WebAdmin")," da aplica\xe7\xe3o 4D com uma interface e ejecut\xe1-la depois sem interface. Se utiliza ent\xe3o o arquivo padr\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings"),"."),(0,t.kt)("p",null,"Ou, pode estabelecer um arquivo personalizado ",(0,t.kt)("inlineCode",{parentName:"p"},".4DSettings")," (formato xml) e usar ao inv\xe9s do arquivo padr\xe3o. Na ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Admin/cli"}),"Interfaz de linha de comandos")," h\xe1 v\xe1rios argumentos dedicados para compatibilidade com esta funcionalidade."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"A chave de acesso n\xe3o \xe9 armazenada de forma transparente no arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4DSettings"),".")),(0,t.kt)("p",null,"Exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n "my Fabulous AccessKey" --webadmin-auto-start true   \n --webadmin-store-settings\n\n')),(0,t.kt)("h2",r({},{id:"autentica\xe7\xe3o-e-sess\xe3o"}),"Autentica\xe7\xe3o e sess\xe3o"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Quando acessar uma p\xe1gina de gest\xe3o entrando uma URL e sem identifica\xe7\xe3o pr\xe9via, uma autentica\xe7\xe3o \xe9 exigida. O usu\xe1rio deve introduzir a ",(0,t.kt)("a",r({parentName:"p"},{href:"#access-key"}),"chave-de-acesso")," em uma janela de autentica\xe7\xe3o. Se a chave de acesso n\xe2o foi definida na configura\xe7\xe3o de ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", n\xe3o \xe9 poss\xedvel o acesso via URL.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Quando uma p\xe1gina de gerenciamento \xe9 acessada diretamentee de um item menu 4D ou 4D Servidor (tal como ",(0,t.kt)("strong",{parentName:"p"},"Records > Data Explorer")," ou ",(0,t.kt)("strong",{parentName:"p"},"Window > Data Explorer")," (4D Server)), o acesso \xe9 garantido sem autentica\xe7\xe3o, e o usu\xe1rio \xe9 autenticado automaticamente."))),(0,t.kt)("p",null,"Quando o acesso \xe9 concedido, uma  ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/sessions"}),"sess\xe3o web"),' com o privil\xe9gio "WebAdmin" \xe9 criado na aplica\xe7\xe3o 4D. Enquanto a sess\xe3o atual tiver o privil\xe9gio "WebAdmin", o componente ',(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," entrega p\xe1ginas  solicitadas."))}m.isMDXComponent=!0},49509:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},28952:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},30723:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},31386:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},14586:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"}}]);