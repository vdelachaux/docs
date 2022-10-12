"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||s;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},59875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"breakpoints",title:"Points d'arr\xeat et points d'arr\xeat sur commande"},i=void 0,u={unversionedId:"Debugging/breakpoints",id:"version-19-R7/Debugging/breakpoints",title:"Points d'arr\xeat et points d'arr\xeat sur commande",description:"Vue d\u2019ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/Debugging/breakpoints.md",sourceDirName:"Debugging",slug:"/Debugging/breakpoints",permalink:"/docs/fr/Debugging/breakpoints",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"breakpoints",title:"Points d'arr\xeat et points d'arr\xeat sur commande"},sidebar:"docs",previous:{title:"D\xe9bogueur",permalink:"/docs/fr/Debugging/debugger"},next:{title:"D\xe9bogage depuis des machines distantes",permalink:"/docs/fr/Debugging/debugging-remote"}},l={},d=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Points d&#39;arr\xeat",id:"points-darr\xeat",level:2},{value:"Propri\xe9t\xe9s des points d&#39;arr\xeat",id:"propri\xe9t\xe9s-des-points-darr\xeat",level:3},{value:"Points d&#39;arr\xeat dans le d\xe9bogueur distant",id:"points-darr\xeat-dans-le-d\xe9bogueur-distant",level:3},{value:"Liste des points d&#39;arr\xeat",id:"liste-des-points-darr\xeat",level:3},{value:"Points d&#39;arr\xeats sur commandes",id:"points-darr\xeats-sur-commandes",level:2},{value:"D\xe9finir une condition pour un point d&#39;arr\xeat sur commande",id:"d\xe9finir-une-condition-pour-un-point-darr\xeat-sur-commande",level:3}],p={toc:d};function c(e){var{components:t}=e,o=s(e,["components"]);return(0,n.kt)("wrapper",a({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"vue-densemble"}),"Vue d\u2019ensemble"),(0,n.kt)("p",null,"Les points d'arr\xeat et les points d'arr\xeats sur commande sont des techniques de d\xe9bogage tr\xe8s efficaces. Elles ont toutes deux le m\xeame effet : elles interrompent l'ex\xe9cution du code (et affichent la fen\xeatre du d\xe9bogueur si elle n'est pas d\xe9j\xe0 affich\xe9e) \xe0 une \xe9tape souhait\xe9e."),(0,n.kt)("p",null,"D\xe9finissez des points d'arr\xeat sur n'importe quelle ligne de code o\xf9 vous souhaitez interrompre l'ex\xe9cution. Vous pouvez associer une condition au point d'arr\xeat."),(0,n.kt)("p",null,"Les points d'arr\xeat sur commande vous permettent de commencer \xe0 tracer l'ex\xe9cution d'un process d\xe8s qu'une commande est appel\xe9e par ce process."),(0,n.kt)("h2",a({},{id:"points-darr\xeat"}),"Points d'arr\xeat"),(0,n.kt)("p",null,"Pour cr\xe9er un point d'arr\xeat, cliquez dans la marge gauche de la fen\xeatre d'\xe9valuation du code du d\xe9bogueur ou dans l'\xe9diteur de code."),(0,n.kt)("p",null,"Dans l'exemple suivant, un point d'arr\xeat (la puce rouge) a \xe9t\xe9 d\xe9fini dans le d\xe9bogueur, sur la ligne ",(0,n.kt)("inlineCode",{parentName:"p"},"If ($in.dataClass#Null)")," :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"break-point",src:r(65704).Z,width:"672",height:"227"})),(0,n.kt)("p",null,"Dans l'exemple ci-dessus, le fait de cliquer sur le bouton ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/Debugging/debugger/#no-trace"}),(0,n.kt)("strong",{parentName:"a"},"No Trace"))," reprend l'ex\xe9cution normale jusqu'\xe0 la ligne marqu\xe9e par le point d'arr\xeat. Cette ligne n'est pas ex\xe9cut\xe9e - vous retournez en mode trace. Le fait de d\xe9finir un point d'arr\xeat au-del\xe0 du compteur du programme et de cliquer sur le bouton ",(0,n.kt)("strong",{parentName:"p"},"No Trace")," vous permet de sauter des parties de la m\xe9thode trac\xe9e."),(0,n.kt)("p",null,"Pour supprimer un point d'arr\xeat, cliquez sur la puce correspondante."),(0,n.kt)("h3",a({},{id:"propri\xe9t\xe9s-des-points-darr\xeat"}),"Propri\xe9t\xe9s des points d'arr\xeat"),(0,n.kt)("p",null,"Vous pouvez modifier le comportement d'un point d'arr\xeat \xe0 l'aide de la fen\xeatre Propri\xe9t\xe9s du point d'arr\xeat :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"breakpoint-properties",src:r(48231).Z,width:"457",height:"337"})),(0,n.kt)("p",null,"Cette fen\xeatre est disponible depuis l'\xe9diteur de code ou la ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/Debugging/debugger#source-code-pane"}),"fen\xeatre d'\xe9valuation du code"),". Vous pouvez :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"faites un clic droit sur une ligne et s\xe9lectionnez ",(0,n.kt)("strong",{parentName:"li"},"Modifier le point d'arr\xeat")," dans le menu contextuel, ou"),(0,n.kt)("li",{parentName:"ul"},".",(0,n.kt)("inlineCode",{parentName:"li"},"Alt+clic")," (Windows) ou ",(0,n.kt)("inlineCode",{parentName:"li"},"Option+clic")," (macOS) dans la marge de gauche.")),(0,n.kt)("p",null,"Si un point d'arr\xeat existe d\xe9j\xe0, la fen\xeatre s'affiche pour ce point d'arr\xeat. Sinon, un point d'arr\xeat est cr\xe9\xe9 et la fen\xeatre s'affiche pour le point d'arr\xeat nouvellement cr\xe9\xe9."),(0,n.kt)("p",null,"Voici une description des propri\xe9t\xe9s :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Emplacement")," : indique le nom de la m\xe9thode et le num\xe9ro de ligne associ\xe9s au point d'arr\xeat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Arr\xeat lorsque l\u2019expression suivante est vraie")," : Vous pouvez cr\xe9er des ",(0,n.kt)("strong",{parentName:"li"},"points d'arr\xeat conditionnels")," en saisissant une formule 4D qui retourne ",(0,n.kt)("inlineCode",{parentName:"li"},"Vrai")," ou ",(0,n.kt)("inlineCode",{parentName:"li"},"Faux"),". Par exemple, ins\xe9rez ",(0,n.kt)("inlineCode",{parentName:"li"},"Records in selection(\\[aTable])=0")," pour vous assurer que l'arr\xeat se produit uniquement si aucun enregistrement n'est s\xe9lectionn\xe9 pour la table ","[","aTable]. Les conditions d'arr\xeat sont disponibles dans la colonne ",(0,n.kt)("strong",{parentName:"li"},"Condition")," de la ",(0,n.kt)("a",a({parentName:"li"},{href:"#break-list"}),"liste des arr\xeats"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Nombre d\u2019occurrences ex\xe9cut\xe9es avant arr\xeat")," : Vous pouvez associer un point d'arr\xeat \xe0 une ligne situ\xe9e dans une boucle (While, Repeat ou For) ou situ\xe9e dans une sous-routine ou une fonction appel\xe9e depuis une boucle."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Point d\u2019arr\xeat d\xe9sactiv\xe9")," : Si vous n'avez actuellement pas besoin d'un point d'arr\xeat, mais que vous pourriez en avoir besoin plus tard, vous pouvez le d\xe9sactiver temporairement. Un point d'arr\xeat d\xe9sactiv\xe9 appara\xeet sous la forme d'un tiret (-) au lieu d'une puce (\u2022)|")),(0,n.kt)("h3",a({},{id:"points-darr\xeat-dans-le-d\xe9bogueur-distant"}),"Points d'arr\xeat dans le d\xe9bogueur distant"),(0,n.kt)("p",null,"La liste des points d'arr\xeat est stock\xe9e localement. En mode de d\xe9bogage \xe0 distance, si le d\xe9bogueur connect\xe9 est un 4D distant, la liste des points d'arr\xeat distants remplace temporairement la liste des points d'arr\xeat du serveur pendant la session de d\xe9bogage."),(0,n.kt)("p",null,"La liste de points d'arr\xeat du serveur est automatiquement restaur\xe9e s'il redevient le d\xe9bogueur associ\xe9."),(0,n.kt)("h3",a({},{id:"liste-des-points-darr\xeat"}),"Liste des points d'arr\xeat"),(0,n.kt)("p",null,"La liste des points d'arr\xeat est une page de l'Explorateur d'ex\xe9cution qui vous permet de g\xe9rer les points d'arr\xeat cr\xe9\xe9s dans la fen\xeatre du d\xe9bogueur ou dans l'\xe9diteur de code. Pour plus d'informations sur l'Explorateur d'ex\xe9cution, voir sa page d\xe9di\xe9e dans ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html"}),"le manuel de D\xe9veloppement"),"."),(0,n.kt)("p",null,"Pour ouvrir la page de la liste des points d'arr\xeat :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dans le ",(0,n.kt)("strong",{parentName:"p"},"menu Ex\xe9cuter"),", cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Explorateur d'ex\xe9cution..."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cliquez sur l'onglet ",(0,n.kt)("strong",{parentName:"p"},"Break")," pour afficher la liste des points d'arr\xeats :"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"break-list-runtime-explorer",src:r(86769).Z,width:"1928",height:"1160"})),(0,n.kt)("p",null,"\xc0 l'aide de cette fen\xeatre, vous pouvez :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"D\xe9finir des conditions pour les points d'arr\xeat dans la colonne ",(0,n.kt)("strong",{parentName:"li"},"Conditions")),(0,n.kt)("li",{parentName:"ul"},"Activer ou d\xe9sactiver les points d'arr\xeat en cliquant sur les puces dans la marge. Les points d'arr\xeat d\xe9sactiv\xe9s affichent des puces transparentes"),(0,n.kt)("li",{parentName:"ul"},"Supprimer des points d'arr\xeat en appuyant sur la touche ",(0,n.kt)("inlineCode",{parentName:"li"},"Delete")," ou ",(0,n.kt)("inlineCode",{parentName:"li"},"Backspace"),", ou en cliquant sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Delete")," sous la liste."),(0,n.kt)("li",{parentName:"ul"},"Ouvrez les m\xe9thodes o\xf9 se trouvent les points d'arr\xeat en doube-cliquant sur n'importe quelle ligne de la liste")),(0,n.kt)("p",null,"Vous ne pouvez pas ajouter de nouveaux points d'arr\xeat \xe0 partir de cette fen\xeatre. Les points d'arr\xeat ne peuvent \xeatre cr\xe9\xe9s qu'\xe0 partir de la fen\xeatre du d\xe9bogueur ou de l'\xe9diteur de code."),(0,n.kt)("h2",a({},{id:"points-darr\xeats-sur-commandes"}),"Points d'arr\xeats sur commandes"),(0,n.kt)("p",null,"L'onglet ",(0,n.kt)("strong",{parentName:"p"},"Catch")," de l'Explorateur d'ex\xe9cution vous permet d'ajouter des points d'arr\xeat suppl\xe9mentaires \xe0 votre code via des appels aux commandes 4D. Contrairement \xe0 un point d'arr\xeat, qui est situ\xe9 dans une m\xe9thode de projet particuli\xe8re (et qui d\xe9clenche donc une exception de tra\xe7age uniquement lorsqu'il est atteint), la port\xe9e de la capture d'une commande inclut tous les process qui ex\xe9cutent le code 4D et appellent cette commande."),(0,n.kt)("p",null,"Les points d'arr\xeat sur une commande sont un moyen pratique de tracer de grandes portions de code sans avoir \xe0 d\xe9finir des points d'arr\xeat \xe0 des endroits arbitraires. Par exemple, si un enregistrement qui ne devrait pas \xeatre supprim\xe9 l'est malgr\xe9 tout apr\xe8s avoir ex\xe9cut\xe9 un ou plusieurs process, vous pouvez essayer de r\xe9duire le champ de votre investigation via des points d'arr\xeat sur des commandes telles que ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE RECORD")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION"),". Chaque fois que ces commandes sont appel\xe9es, vous pouvez v\xe9rifier si l'enregistrement en question a \xe9t\xe9 supprim\xe9, et ainsi isoler la partie d\xe9fectueuse du code."),(0,n.kt)("p",null,"N'h\xe9sitez pas \xe0 combiner les points d'arr\xeat et les points d'arr\xeat sur commandes."),(0,n.kt)("p",null,"Pour ouvrir la page des points d'arr\xeat sur commandes :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Ex\xe9cuter")," > ",(0,n.kt)("strong",{parentName:"p"},"Explorateur d'ex\xe9cution...")," pour ouvrir l'explorateur d'ex\xe9cution.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Catch")," pour afficher la liste des points d'arr\xeat sur commandes :"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"runtime-explorer-window",src:r(35996).Z,width:"868",height:"479"})),(0,n.kt)("p",null,"Cette page r\xe9pertorie les points d'arr\xeat sur commande pendant l'ex\xe9cution. Elle est compos\xe9e de deux colonnes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La colonne de gauche affiche l'\xe9tat d'activation/d\xe9sactivation du point d'arr\xeat sur commande, suivi du nom de la commande"),(0,n.kt)("li",{parentName:"ul"},"La colonne de droite affiche la condition associ\xe9e au point d'arr\xeat sur commande, le cas \xe9ch\xe9ant")),(0,n.kt)("p",null,"Pour ajouter un point d'arr\xeat sur commande :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Add New Catch")," (en forme de +) situ\xe9 en dessous de la liste. Une nouvelle entr\xe9e est ajout\xe9e \xe0 la liste avec la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"ALERT")," par d\xe9faut"),(0,n.kt)("li",{parentName:"ol"},"Cliquez sur l'\xe9tiquette ",(0,n.kt)("strong",{parentName:"li"},"ALERT"),", tapez le nom de la commande que sur laquelle vous souhaitez mettre un point d'arr\xeat, puis appuyez sur ",(0,n.kt)("strong",{parentName:"li"},"Entr\xe9e"),".")),(0,n.kt)("p",null,"Pour activer ou d\xe9sactiver un point d'arr\xeat sur commande, cliquez sur la puce (\u2022) devant l'\xe9tiquette de la commande. La puce est transparente lorsque la commande est d\xe9sactiv\xe9e."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La d\xe9sactivation d'un point d'arr\xeat sur commande a pratiquement le m\xeame effet que sa suppression. Pendant l'ex\xe9cution, le d\xe9bogueur ne passe presque pas de temps sur l'entr\xe9e. L'avantage de d\xe9sactiver une entr\xe9e est de ne pas avoir \xe0 la recr\xe9er lorsque vous en avez \xe0 nouveau besoin.")),(0,n.kt)("p",null,"Pour supprimer un point d'arr\xeat sur commande :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"S\xe9lectionnez une commande dans la liste."),(0,n.kt)("li",{parentName:"ol"},"Appuyez sur la touche ",(0,n.kt)("strong",{parentName:"li"},"Backspace")," ou ",(0,n.kt)("strong",{parentName:"li"},"Delete")," sur votre clavier ou cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Delete")," sous la liste (",(0,n.kt)("strong",{parentName:"li"},"Delete All")," supprime toutes les commandes de la liste).")),(0,n.kt)("h3",a({},{id:"d\xe9finir-une-condition-pour-un-point-darr\xeat-sur-commande"}),"D\xe9finir une condition pour un point d'arr\xeat sur commande"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cliquez sur l'entr\xe9e dans la colonne de droite"),(0,n.kt)("li",{parentName:"ol"},"Saisissez une formule 4D (expression, appel de commande ou m\xe9thode de projet) qui retourne une valeur bool\xe9enne.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour supprimer une condition, supprimez sa formule.")),(0,n.kt)("p",null,"L'ajout de conditions vous permet d'arr\xeater l'ex\xe9cution lorsque la commande est invoqu\xe9e uniquement si la condition est remplie. Par exemple, si vous associez la condition ",(0,n.kt)("inlineCode",{parentName:"p"},"Records in selection(\\[Emp]>10)")," au point d'arr\xeat de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION"),", le code ne sera pas arr\xeat\xe9 pendant l'ex\xe9cution de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION")," si la s\xe9lection courante de la table ","[","Emp] ne contient que 9 enregistrements (ou moins)."),(0,n.kt)("p",null,"L'ajout de conditions aux points d'arr\xeat sur commandes ralentit l'ex\xe9cution, car la condition doit \xeatre \xe9valu\xe9e chaque fois qu'une exception est rencontr\xe9e. En revanche, l'ajout de conditions acc\xe9l\xe8re le processus de d\xe9bogage, car 4D ignore automatiquement les occurrences qui ne correspondent pas aux conditions."))}c.isMDXComponent=!0},86769:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/break-list-b89efee46224eee9896fd3573d311ece.png"},65704:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/break-dac3aff61c89edd51b1dc219bcce2aaa.png"},48231:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},35996:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/catch-command-fd399840ad542aad76ae489a5e9de658.png"}}]);