"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31909],{3905:(a,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>l});var r=o(67294);function n(a,e,o){return e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function t(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.push.apply(o,r)}return o}function s(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?t(Object(o),!0).forEach((function(e){n(a,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))}))}return a}function d(a,e){if(null==a)return{};var o,r,n=function(a,e){if(null==a)return{};var o,r,n={},t=Object.keys(a);for(r=0;r<t.length;r++)o=t[r],e.indexOf(o)>=0||(n[o]=a[o]);return n}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(r=0;r<t.length;r++)o=t[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(n[o]=a[o])}return n}var i=r.createContext({}),u=function(a){var e=r.useContext(i),o=e;return a&&(o="function"==typeof a?a(e):s(s({},e),a)),o},c=function(a){var e=u(a.components);return r.createElement(i.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(a,e){var o=a.components,n=a.mdxType,t=a.originalType,i=a.parentName,c=d(a,["components","mdxType","originalType","parentName"]),m=u(o),l=n,k=m["".concat(i,".").concat(l)]||m[l]||p[l]||t;return o?r.createElement(k,s(s({ref:e},c),{},{components:o})):r.createElement(k,s({ref:e},c))}));function l(a,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var t=o.length,s=new Array(t);s[0]=m;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=a,d.mdxType="string"==typeof a?a:n,s[1]=d;for(var u=2;u<t;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},73830:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});o(67294);var r=o(3905);function n(){return n=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r])}return a},n.apply(this,arguments)}function t(a,e){if(null==a)return{};var o,r,n=function(a,e){if(null==a)return{};var o,r,n={},t=Object.keys(a);for(r=0;r<t.length;r++)o=t[r],e.indexOf(o)>=0||(n[o]=a[o]);return n}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(r=0;r<t.length;r++)o=t[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(n[o]=a[o])}return n}const s={id:"backup",slug:"backup",title:"Backup"},d=void 0,i={unversionedId:"Backup/backup",id:"version-18/Backup/backup",title:"Backup",description:"Come\xe7ando um backup",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Backup/backup.md",sourceDirName:"Backup",slug:"/Backup/backup",permalink:"/docs/pt/18/Backup/backup",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Backup/backup.md",tags:[],version:"18",frontMatter:{id:"backup",slug:"backup",title:"Backup"},sidebar:"docs",previous:{title:"Vis\xe3o Geral",permalink:"/docs/pt/18/Backup/overview"},next:{title:"Par\xe2metros da c\xf3pia de seguran\xe7a",permalink:"/docs/pt/18/Backup/settings"}},u={},c=[{value:"Come\xe7ando um backup",id:"come\xe7ando-um-backup",level:2},{value:"C\xf3pia de seguran\xe7a manual",id:"c\xf3pia-de-seguran\xe7a-manual",level:3},{value:"Backup autom\xe1tico peri\xf3dico",id:"backup-autom\xe1tico-peri\xf3dico",level:3},{value:"Comando BACKUP",id:"comando-backup",level:3},{value:"Gerenciar o processo de  backup",id:"gerenciar-o-processo-de--backup",level:2},{value:"Acesso do banco de dados durante o backup",id:"acesso-do-banco-de-dados-durante-o-backup",level:3},{value:"Gest\xe3o dos problemas das c\xf3pias de seguran\xe7a",id:"gest\xe3o-dos-problemas-das-c\xf3pias-de-seguran\xe7a",level:3},{value:"Hist\xf3rico de c\xf3pias de seguran\xe7a (Backup Journal)",id:"hist\xf3rico-de-c\xf3pias-de-seguran\xe7a-backup-journal",level:2},{value:"Gerenciamento do tamanho de hist\xf3rico de c\xf3pias de seguran\xe7a.",id:"gerenciamento-do-tamanho-de-hist\xf3rico-de-c\xf3pias-de-seguran\xe7a",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}],p={toc:c};function m(a){var{components:e}=a,s=t(a,["components"]);return(0,r.kt)("wrapper",n({},p,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",n({},{id:"come\xe7ando-um-backup"}),"Come\xe7ando um backup"),(0,r.kt)("p",null,"Uma c\xf3pia de seguran\xe7a pode ser iniciada de tr\xeas maneiras:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manualmente, utilizando o comando ",(0,r.kt)("strong",{parentName:"li"},"C\xf3pia de seguran\xe7a...")," do menu 4D ",(0,r.kt)("strong",{parentName:"li"},"Arquivo")," ou o bot\xe3o ",(0,r.kt)("strong",{parentName:"li"},"C\xf3pia de seguran\xe7a")," de ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/MSC/backup"}),"Centro de manuten\xe7\xe3o e seguran\xe7a"),"."),(0,r.kt)("li",{parentName:"ul"},"Automaticamente, usando o agendamento  que pode ser estabelecido em Configura\xe7\xf5es de Banco de Dados"),(0,r.kt)("li",{parentName:"ul"},"Por programa\xe7\xe3o, utilizando o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"BACKUP"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"4D Server: \xe9 poss\xedvel iniciar uma c\xf3pia de seguran\xe7a manualmente desde uma m\xe1quina remota mediante um m\xe9todo que chama ao comando ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP"),". O comando ser\xe1 executado, em todos os casos, no servidor.")),(0,r.kt)("h3",n({},{id:"c\xf3pia-de-seguran\xe7a-manual"}),"C\xf3pia de seguran\xe7a manual"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Seleccione o comando ",(0,r.kt)("strong",{parentName:"li"},"Backup...")," no menu 4D ",(0,r.kt)("strong",{parentName:"li"},"File")," . The backup window appears: ",(0,r.kt)("img",{src:o(74786).Z,width:"564",height:"192"}),' You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. Tamb\xe9m se registra no banco de dados ',(0,r.kt)("strong",{parentName:"li"},"Backup journal.txt"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tamb\xe9m pode abrir o ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/MSC/overview"}),"Centro de manuten\xe7\xe3o e seguran\xe7a")," de 4D e mostrar a ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/MSC/backup"}),"p\xe1gina de c\xf3pias de seguran\xe7a"),".")),(0,r.kt)("p",null,"O bot\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Propriedades de Banco de Dados...")," faz com que seja exibida a p\xe1gina Backup/Configuration  das Configura\xe7\xf5es do Banco de Dados."),(0,r.kt)("ol",n({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Clique em ",(0,r.kt)("strong",{parentName:"li"},"Backup/C\xf3pia de seguran\xe7a")," para iniciar a c\xf3pia de seguran\xe7a utilizando os par\xe2metros atuais.")),(0,r.kt)("h3",n({},{id:"backup-autom\xe1tico-peri\xf3dico"}),"Backup autom\xe1tico peri\xf3dico"),(0,r.kt)("p",null,"As c\xf3pias de seguran\xe7a programadas s\xe3o iniciadas automaticamente. S\xe3o configurados na p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"Backup/Scheduler")," em ",(0,r.kt)("strong",{parentName:"p"},"Database Settings"),"."),(0,r.kt)("p",null,"As c\xf3pias de seguran\xe7a s\xe3o feitas automaticamente na hora definida nessa p\xe1gina sem nenhum tipo de interven\xe7\xe3o do usu\xe1rio. Para saber mais sobre o uso desta caixa de di\xe1logo, consulte ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/Backup/settings#scheduler"}),"Definir as c\xf3pias de seguran\xe7a peri\xf3dicas"),"."),(0,r.kt)("h3",n({},{id:"comando-backup"}),"Comando BACKUP"),(0,r.kt)("p",null,"Quando o comando de linguagem ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP")," 4D for executado a partir de qualquer m\xe9todo, o backup come\xe7a usando os par\xe2metros atuais como definidos nas configura\xe7\xf5es Banco de Dados. Pode utilizar os m\xe9todos ",(0,r.kt)("inlineCode",{parentName:"p"},"On Backup Startup")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"On Backup Shutdown")," para controlar o processo de c\xf3pia de seguran\xe7a (consulte o manual ",(0,r.kt)("em",{parentName:"p"},"Linguagem, de 4D"),")."),(0,r.kt)("h2",n({},{id:"gerenciar-o-processo-de--backup"}),"Gerenciar o processo de  backup"),(0,r.kt)("p",null,"Quando iniciar o backup, 4D exibe uma caixa de di\xe1logo com um term\xf4metro indicando o progresso da c\xf3pia de seguran\xe7a:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(87802).Z,width:"408",height:"168"})),(0,r.kt)("p",null,"Esse term\xf4metro tamb\xe9m \xe9 mostrado na p\xe1gina ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/MSC/backup"}),"Backup de CSM")," se utilizou esta caixa de di\xe1logo."),(0,r.kt)("p",null,"O bot\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Parar")," permite ao usu\xe1rio interromper a c\xf3pia de seguran\xe7a em qualquer momento (consulte ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/Backup/backup#handling-backup-issues"}),"Manejar os problemas da c\xf3pia de seguran\xe7a")," mais adiante)."),(0,r.kt)("p",null,"O estado da \xfaltima c\xf3pia de seguran\xe7a (correta ou com erro) \xe9 armazenada na \xe1rea de informa\xe7\xe3o da ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/MSC/backup"}),"p\xe1gina de c\xf3pias de seguran\xe7a em CSM")," ou na ",(0,r.kt)("strong",{parentName:"p"},"p\xe1gina de manuten\xe7\xe3o")," de 4D Server. Tamb\xe9m se registra no banco de dados ",(0,r.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,r.kt)("h3",n({},{id:"acesso-do-banco-de-dados-durante-o-backup"}),"Acesso do banco de dados durante o backup"),(0,r.kt)("p",null,"Durante a c\xf3pia de seguran\xe7a, acesso ao banco de dados \xe9 restrito por 4D dependendo do contexto. 4D bloqueia os processos relacionados com os tipos de arquivos inclu\xeddos na c\xf3pia de seguran\xe7a: se s\xf3 fizer uma c\xf3pia de seguran\xe7a dos arquivos do projeto, n\xe3o se poder\xe1 acessar \xe0 estrutura mas sim aos dados."),(0,r.kt)("p",null,"Pelo contr\xe1rio, se s\xf3 fizer uma c\xf3pia de seguran\xe7a do arquivo de dados, o acesso \xe0 estrutura continua sendo permitido. Nesse caso, as possibilidades de acesso ao banco de dados  s\xe3o as seguintes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Com a vers\xe3o 4D monousu\xe1rio, o banco de dados \xe9 trancado tanto para leitura quanto escrita, todos os processos s\xe3o congelados. Nenhuma a\xe7\xe3o \xe9 realizada."),(0,r.kt)("li",{parentName:"ul"},"Com 4D Server, o banco de dados est\xe1 bloqueado s\xf3 para escrita; as m\xe1quinas clientes podem ver os dados. Se uma m\xe1quina cliente enviar uma peti\xe7\xe3o de adi\xe7\xe3o, elimina\xe7\xe3o ou mudan\xe7a ao servidor, uma janela aparece pedindo ao usu\xe1rio que espere at\xe9 o final da c\xf3pia de seguran\xe7a. Quando o banco de dados for salvo, a janela desaparece a a\xe7\xe3o \xe9 ralizada Quando o banco de dados for salvo, a janela desaparece a a\xe7\xe3o \xe9 ralizada Quando o banco de dados for salvo, a janela desaparece a a\xe7\xe3o \xe9 ralizada Para cancelar a peti\xe7\xe3o em processo e n\xe3o esperar a que finalize a c\xf3pia de seguran\xe7a, basta dar um clique no bot\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Cancelar a opera\xe7\xe3o"),". Entretanto, se a a\xe7\xe3o que espera ser executada vem de um m\xe9todo lan\xe7ado antes da c\xf3pia de seguran\xe7a, n\xe3o deve cancelar a a\xe7\xe3o porque s\xf3 s\xe3o canceladas as opera\xe7\xf5es restantes. Al\xe9m disso, um m\xe9todo parcialmente executado pode causar inconsist\xeancias l\xf3gicas no banco de dados.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Quando a a\xe7\xe3o que espera ser executada vir de um m\xe9todo e o usu\xe1rio clicar no bot\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Cancelar opera\xe7\xe3o"),", 4D Server devolve o erro -9976 (Este comando n\xe3o pode ser executardo porque a copia de seguran\xe7a est\xe1 em progresso).")),(0,r.kt)("h3",n({},{id:"gest\xe3o-dos-problemas-das-c\xf3pias-de-seguran\xe7a"}),"Gest\xe3o dos problemas das c\xf3pias de seguran\xe7a"),(0,r.kt)("p",null,"Pode acontecer que uma c\xf3pia de seguran\xe7a n\xe3o seja executada corretamente. Pode haver v\xe1rias causas de falha na c\xf3pia de seguran\xe7a: interrup\xe7\xe3o do usu\xe1rio, arquivo adjunto n\xe3o encontrado, problemas no disco de destino, transa\xe7\xe3o incompleta, etc. 4D processa a incid\xeancia segundo a causa."),(0,r.kt)("p",null,"Em todos os casos,  lembre que o estado da \xfaltima copia de seguran\xe7a (correta ou com falha) se armazena na \xe1rea de informa\xe7\xe3o da ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/MSC/backup"}),"p\xe1gina de c\xf3pias de seguran\xe7a em CSM")," ou na ",(0,r.kt)("strong",{parentName:"p"},"p\xe1gina de manuten\xe7\xe3o")," de 4D Server, assim como no banco de dados ",(0,r.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interrup\xe7\xe3o de Usu\xe1rio"),": The ",(0,r.kt)("strong",{parentName:"li"},"Bot\xe3o Parar")," na caixa de di\xe1logo de progresso permite aos usu\xe1rios interromper o processo de c\xf3pia de seguran\xe7a a qualquer momento. Nesse caso, a c\xf3pia de elementos para e \xe9 gerado o erro 1406. Pode interceptar esse erro no m\xe9todo database ",(0,r.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Arquivo anexo n\xe3o encontrado"),": quando n\xe3o encontrar um arquivo adjunto, 4D realiza uma c\xf3pia de seguran\xe7a parcial (c\xf3pia de seguran\xe7a dos arquivos do banco de dados e dos arquivos adjuntos acess\xedveis) e devolve um erro."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup impossible")," (disk is full or write-protected, missing disk, disk failure, incomplete transaction, database not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. A espera entre duas tentativas \xe9 definida na p\xe1gina ",(0,r.kt)("strong",{parentName:"li"},"Backup/Backup & Restore")," nas Propriedades do banco de dados. Se a segunda tentativa falhar, um di\xe1logo de alerta de sistema \xe9 exibido e um erro \xe9 gerado. Pode interceptar esse erro no m\xe9todo database ",(0,r.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown"),".")),(0,r.kt)("h2",n({},{id:"hist\xf3rico-de-c\xf3pias-de-seguran\xe7a-backup-journal"}),"Hist\xf3rico de c\xf3pias de seguran\xe7a (Backup Journal)"),(0,r.kt)("p",null,"Para facilitar o acompanhamento e a verifica\xe7\xe3o das c\xf3pias de seguran\xe7a ou backups do banco de dados, o m\xf3dulo de backup escreve um resumo em um arquivo especial de cada opera\xe7\xe3o, similar a um di\xe1rio de atividades. Da mesma forma que no manual de bordo, todas as opera\xe7\xf5es (backups, restaura\xe7\xf5es, integra\xe7\xf5es de hist\xf3rico) s\xe3o escritas nesse arquivo, n\xe3o importa se a opera\xe7\xe3o foi programada ou manual. A data e hora em que essas opera\xe7\xf5es acontecem tamb\xe9m \xe9 anotada no hist\xf3rico."),(0,r.kt)("p",null,'O hist\xf3rico de c\xf3pia de seguran\xe7a \xe9 chamado "Backup Journal',"[001]",'.txt" e fica na pasta "Logs" do banco de dados. O hist\xf3rico de c\xf3pias de seguran\xe7a pode ser aberto com o editor de texto.'),(0,r.kt)("h4",n({},{id:"gerenciamento-do-tamanho-de-hist\xf3rico-de-c\xf3pias-de-seguran\xe7a"}),"Gerenciamento do tamanho de hist\xf3rico de c\xf3pias de seguran\xe7a."),(0,r.kt)("p",null,"Em determinadas estrat\xe9gias de copia de seguran\xe7a (por exemplo, no caso de que se realizem copias de seguran\xe7a de numerosos arquivos anexos), o hist\xf3rico de c\xf3pias de seguran\xe7a pode alcan\xe7ar rapidamente um grande tamanho. Dois mecanismos podem ser usados para controlar este tamanho:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copia de seguran\xe7a autom\xe1tica"),": antes de cada copia de seguran\xe7a, a aplica\xe7\xe3o examina o tamanho do arquivo historial de c\xf3pia de seguran\xe7a atual. Se for superior a 10 MB, se arquiva o arquivo atual e \xe9 criado um arquivo com o n\xfamero ","[xxx]",' incrementado, por exemplo "Backup Journal',"[002]",".txt\u201d. Quando o arquivo n\xfamero 999 for alcan\xe7ado, a numera\xe7\xe3o volta para 1 e os arquivos existentes come\xe7am a ser substitu\xeddos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Possibilidade de reduzir a quantidade de informa\xe7\xe3o gravada "),": Para fazer isso, modifique o valor da chave ",(0,r.kt)("inlineCode",{parentName:"li"},"VerboseMode")," no arquivo ",(0,r.kt)("em",{parentName:"li"},"Backup.4DSettings")," do banco de dados. Como padr\xe3o, essa chave \xe9 definida como True. Se mudar o valor desta chave a False, s\xf3 se armazenar\xe1 no di\xe1rio de copias de seguran\xe7a a informa\xe7\xe3o principal: data e hora de inicio da opera\xe7\xe3o  e os erros encontrados. As chaves XML relativas a configura\xe7\xe3o da c\xf3pia de seguran\xe7a s\xe3o descritos no manual ",(0,r.kt)("em",{parentName:"li"},"Backup das chaves XML 4D"),".")),(0,r.kt)("h2",n({},{id:"backuphistoryjson"}),"backupHistory.json"),(0,r.kt)("p",null,"Toda a informa\xe7\xe3o relativa \xe0s \xfaltimas opera\xe7\xf5es de c\xf3pia de seguran\xe7a e restaura\xe7\xe3o se armazena no arquivo ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json"),' do banco de dados. Registra a rota de cada arquivo guardado (inclu\xeddos os anexos), assim como o n\xfamero, a data, a hora, a dura\xe7\xe3o e o estado de cada opera\xe7\xe3o. Para limitar o tamanho do arquivo, o n\xfamero de opera\xe7\xf5es registradas \xe9 o mesmo que o n\xfamero de backups dispon\xedveis ("Keep only the last X backup files") definido nas configura\xe7\xf5es de backup.'),(0,r.kt)("p",null,"O arquivo ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," \xe9 criado na pasta de destino do backup atual. Pode obter a rota para esse arquivo usando a declara\xe7\xe3o abaixo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$backupHistory:=Get 4D file(arquivo hist\xf3rico Backup)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"AVISO"),(0,r.kt)("br",{parentName:"p"}),"\n","Apagar ou mover o arquivo ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," faz com que o pr\xf3ximo n\xfamero de backup seja resetado.\nO arquivo ",(0,r.kt)("strong",{parentName:"p"},"backupHistory.json")," \xe9 formatado para ser usado pela aplica\xe7\xe3o 4D. Se estiver procurando por um relat\xf3rio que possa ser lido por olhos humanos, o di\xe1rio de Backup journal \xe9 mais preciso.")))}m.isMDXComponent=!0},74786:(a,e,o)=>{o.d(e,{Z:()=>r});const r="data:image/png;base64,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"},87802:(a,e,o)=>{o.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAACoCAIAAABSVG8bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAActSURBVHhe7dhfit32GcdhX2UnXYFhduEN+Gp2Mpfehu9NoQsoFCeElFLchLRJCfmD45ASGtKGbqCvpJ+O9HuPhiTW+Ghe+3n4QnU0kmYazvlwkgePAIobQvbDj/8zMyu6JWR/evGlmVm5CZmZlZ+QmVn5dSF7/revzMzKTcjMrPy6kL3/8ddmZuUmZGZWfl3IPvjkGzOzchMyMyu/LmQffvrSzKzcupB99I9XZmblJmRmVn5dyP782XdmZuUmZGZWfl3I/vLP783Myq0L2V+/+JeZWbkJmZmVXxeyF1/+YGZWbkJmZuXXhezjr/9tZlZuXcg++eZHM7NyEzIzK78uZJ++/MnMrNyEzMzKrwvZ37/9j5lZuQmZmZVfF7LPXv1sZlZuXcg+f/WzmVm5CZmZld8vhOy/APdMylRMyIBiUqZiQgYUkzIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylRMyIBiUqZiQgYUkzIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylTskJA9u36wuH7Wzv4KcePVkxftxWt68eRq/0OA46RMxY4K2ZySISu/PmV3ETKguJSp2NEh+21tEjLgHoYsDucvZHHYLF/Rhi9sq3OnG8drh1OrR3U/vXryrN16Vr7+siftt25flh8ynLy+jnPjn7P8dRt/8vjo5Rdt3TXdlF7nHwNJylTsqJCdnH9ax4IMn//hI933ZfrRcH6+7XTx+nh8/m3PSJdNDxoO01+y+ZDh5Py41T39BdPJ4dz2XcvhcBQn1r85vQTOpEzFjv5Gtg7N8HmfjGeGH53H5eqqK9PqUcvx+uTwon/K5mXdLaPNh6xO9n9euyBOdjdNL9JdK3HPeGa5Kb0EzqRMxY4O2akH8/8uMVjOnMSNY8mW0+tHbYVj4ymbl62PJ5sPWZ3sHxw/GF7Mf/t8bnpx610nw+nVd8L0ElhLmYrdm29kp3OnM6ujWbtoOwxxtp1ejtY/n53uXj2mO55sPiTdMj+6u6AdDee2f1H+TZO4fn1+fnm69/wA3lEpU7GjQnZy+kyOH/zhxPX18olerhzrcPoM95VoV1yvP+rjf1wfT0+tWZwecjpIx5PNh/SXzX9yl6a4pJ3q/mP/1l3jc+frl/+LzfQ7T/eeH8A7KmUqdkjI3rQ7+ajvfsgQrLOKArulTMWE7DZ7HxL3++YEb0LKVEzIbvN6D0n/3gjcvZSp2FsZMuBtljIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylRMyIBiUqZiQgYUkzIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylRMyIBiUqZiQgYUkzIVOyBkfwTeSS0Bu6VMxY4J2Xt/+J1dbN/DPSBktmvtfQSHEjLbtfY+gkMJme1aex/BoYTMdq29j+BQQma71t5HcCghs11r7yM4lJDZrrX3ERxKyGzX2vsIDiVktmvtfQSHEjLbtfY+gkMJme1aex/BoYTMdq29j+BQQma71t5HcCghs11r7yM4lJDZrrX3ERxKyGzX2vsIDiVktmvtfQSHEjLbtfY+gkO9hSED3kEtAbulTMUOCBnAHilTMSEDikmZigkZUEzKVEzIgGJSpmJCBhSTMhUTMqCYlKmYkAHFpEzFhAwoJmUqJmRAMSlTMSEDikmZigkZUEzKVEzIgGJSpmJCBhSTMhUTMqCYlKmYkAHFpEzFhAwoJmUqJmRAMSlTMSEDikmZigkZUEzKVEzIgGJSpmJCBhSTMhUTMrhLv+cW7R/QXUiZigkZ3KX4xL7kjJBBJUK2ScigEiHbJGRQiZBtEjKo5KIhe/r4QfP4aTt1TwkZVHK5kD2/eXjq1/Obm+Eowvbw5vl06n4RMqjkciHbqJaQCRnchcuFbPwXy1W3ln/PbF/Uhq9szfzNbSzd03b+ks0TMqjkgiELrVVdp1qdhq6188NV0/kxdtPhcvIShAwquWzIRmPNxmatQjacnPs2/iBfsJy8BCGDSg4I2VKt3xSy/oo3TMigksuF7OnNOkljn9adiuO5U0uyhpPtiot2TMiglAt+Ixuq1MxFaqeml0OqJuu6PXz8uJ2+XMaEDGq5YMhewxCyOWoXJWRQiZBtEjKoRMg2CRlUcr9Ddhghg0qEbJOQQSXxiWVT+wd0F1KmYkIGFJMyFRMyoJiUqZiQAcWkTMWEDCgmZSomZEAxKVMxIQOKSZmKCRlQTMpUTMiAYlKmYkIGFJMyFRMyoJiUqZiQAcWkTMWEDCgmZSomZEAxKVMxIQOKSZmKCRlQTMpUTMiAYlKmYkIGFJMyFRMyoJiUqZiQAcWkTMWEDCgmZSomZEAxKVOxXwiZmdn9n5CZWfkJmZmVn5CZWfkJmZmVn5CZWfl1ITMzK7oWMoDCHj36P+ZK+ltLrhJrAAAAAElFTkSuQmCC"}}]);