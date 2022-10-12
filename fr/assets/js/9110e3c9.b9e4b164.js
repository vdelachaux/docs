"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"tabControl",title:"Onglets"},i=void 0,s={unversionedId:"FormObjects/tabControl",id:"version-19-R6/FormObjects/tabControl",title:"Onglets",description:"Un onglet cr\xe9e un objet qui permet \xe0 l\u2019utilisateur de choisir entre plusieurs \xe9crans virtuels affich\xe9s dans les limites de l\u2019onglet. L\u2019utilisateur acc\xe8de \xe0 chaque \xe9cran en cliquant sur l\u2019onglet correspondant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/fr/19-R6/FormObjects/tabControl",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"tabControl",title:"Onglets"},sidebar:"docs",previous:{title:"Sous-formulaire",permalink:"/docs/fr/19-R6/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/fr/19-R6/FormObjects/text"}},u={},p=[{value:"Exemple JSON :",id:"exemple-json-",level:3},{value:"Ajouter les intitul\xe9s dans un onglet",id:"ajouter-les-intitul\xe9s-dans-un-onglet",level:2},{value:"Utilisation d&#39;un objet",id:"utilisation-dun-objet",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Utiliser un tableau texte",id:"utiliser-un-tableau-texte",level:3},{value:"Fonctionnalit\xe9s de Goto page",id:"fonctionnalit\xe9s-de-goto-page",level:2},{value:"Commande FORM GOTO PAGE",id:"commande-form-goto-page",level:3},{value:"Action Goto Page",id:"action-goto-page",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}],c={toc:p};function d(e){var{components:t}=e,o=l(e,["components"]);return(0,a.kt)("wrapper",r({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un onglet cr\xe9e un objet qui permet \xe0 l\u2019utilisateur de choisir entre plusieurs \xe9crans virtuels affich\xe9s dans les limites de l\u2019onglet. L\u2019utilisateur acc\xe8de \xe0 chaque \xe9cran en cliquant sur l\u2019onglet correspondant."),(0,a.kt)("p",null,"Le formulaire multi-pages suivant utilise un onglet :"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97202).Z,width:"600",height:"534"})),(0,a.kt)("p",null,"Pour passer d\u2019un \xe9cran \xe0 l\u2019autre, l\u2019utilisateur clique simplement sur l\u2019onglet correspondant."),(0,a.kt)("p",null,"Un onglet peut \xeatre utilis\xe9, entre autres, pour g\xe9rer la navigation entre les pages d\u2019un formulaire multi-pages. Dans ce cas, la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"FORM GOTO PAGE"))," ou l\u2019action standard ",(0,a.kt)("inlineCode",{parentName:"p"},"gotoPage")," devra \xeatre appel\xe9e lorsque l\u2019utilisateur cliquera sur l\u2019onglet."),(0,a.kt)("p",null,"Un onglet peut aussi \xeatre utilis\xe9 pour contr\xf4ler les donn\xe9es qui sont affich\xe9es dans un sous-formulaire. On peut, par exemple, impl\xe9menter un rolodex \xe0 l\u2019aide d\u2019un onglet. Chaque onglet afficherait alors une des lettres de l\u2019alphabet et l\u2019action de l\u2019onglet serait de charger les informations correspondantes \xe0 la lettre sur lequel l\u2019utilisateur a cliqu\xe9."),(0,a.kt)("p",null,"Chaque onglet peut afficher des intitul\xe9s ou des intitul\xe9s et des petites ic\xf4nes. Si vous placez des ic\xf4nes, elles apparaissent \xe0 gauche de chaque intitul\xe9. Voici un exemple d\u2019onglet qui utilise des ic\xf4nes :"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62272).Z,width:"599",height:"510"})),(0,a.kt)("p",null,"Lorsque vous cr\xe9ez un onglet, 4D g\xe8re l\u2019espacement et le placement des onglets. Vous n\u2019avez \xe0 fournir \xe0 4D que les intitul\xe9s sous la forme d\u2019un tableau ou les ic\xf4nes et intitul\xe9s sous la forme d\u2019une \xe9num\xe9ration hi\xe9rarchique."),(0,a.kt)("p",null,"Si l\u2019onglet est assez large, il affiche les intitul\xe9s et les ic\xf4nes. S\u2019il ne peut pas afficher toutes les ic\xf4nes \xe0 la fois, il place des fl\xe8ches de d\xe9filement \xe0 droite du dernier onglet visible.   Les fl\xe8ches de d\xe9filement permettent \xe0 l\u2019utilisateur de faire d\xe9filer des onglets vers la droite ou vers la gauche."),(0,a.kt)("p",null,"Sous macOS, les onglets peuvent \xeatre orient\xe9s, en plus de la position standard (en haut), \xe0 droite, \xe0 gauche ou en bas."),(0,a.kt)("h3",r({},{id:"exemple-json-"}),"Exemple JSON :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'    "myTab": {\n        "type": "tab",\n        "left": 60, \n        "top": 160,  \n        "width": 100,   \n        "height": 20,   \n        "labelsPlacement": "bottom" //d\xe9finit l\'orientation\n    }\n')),(0,a.kt)("h2",r({},{id:"ajouter-les-intitul\xe9s-dans-un-onglet"}),"Ajouter les intitul\xe9s dans un onglet"),(0,a.kt)("p",null,"Pour fournir les \xe9tiquettes d'un onglet, vous pouvez utiliser :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"un objet"),(0,a.kt)("li",{parentName:"ul"},"une liste d\xe9roulante"),(0,a.kt)("li",{parentName:"ul"},"un tableau")),(0,a.kt)("h3",r({},{id:"utilisation-dun-objet"}),"Utilisation d'un objet"),(0,a.kt)("p",null,"Vous pouvez affecter un ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/Concepts/object"}),"objet")," encapsulant une ",(0,a.kt)("a",r({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," comme ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/propertiesObject#variable-or-expression"}),"source de donn\xe9es")," de l'onglet. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"values")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Obligatoire - Collection de valeurs scalaires. Seules les valeurs de type cha\xeene sont prises en charge. Si elle est invalide, vide ou non d\xe9finie, l'onglet est vide")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Indice de la page de l'onglet en cours (valeur comprise entre 0 et ",(0,a.kt)("inlineCode",{parentName:"td"},"collection.length-1"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Valeur courante s\xe9lectionn\xe9e")))),(0,a.kt)("p",null,"Le code d'initialisation doit \xeatre ex\xe9cut\xe9 avant que le formulaire ne soit pr\xe9sent\xe9 \xe0 l'utilisateur."),(0,a.kt)("p",null,"Dans l'exemple suivant, ",(0,a.kt)("inlineCode",{parentName:"p"},"Form.tabControl")," a \xe9t\xe9 d\xe9fini comme ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/propertiesObject#variable-or-expression"}),"expression")," de l'onglet. Vous pouvez associer l'",(0,a.kt)("a",r({parentName:"p"},{href:"#goto-page-action"}),"action standard ",(0,a.kt)("inlineCode",{parentName:"a"},"gotoPage"))," \xe0 l'objet form :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'Form.tabControl:=New object\nForm.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //d\xe9marrage \xe0 la page 3\n')),(0,a.kt)("h3",r({},{id:"utiliser-une-\xe9num\xe9ration"}),"Utiliser une \xe9num\xe9ration"),(0,a.kt)("p",null,"Vous pouvez associer \xe0 l\u2019onglet ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/propertiesDataSource#choice-list-static-list"}),"une liste de valeurs"),", accessible via une collection (liste statique) ou un pointeur JSON vers une liste json (\"$ref\"). Les ic\xf4nes associ\xe9es \xe0 des \xe9l\xe9ments de liste dans l'\xe9diteur de listes seront affich\xe9es dans l'onglet."),(0,a.kt)("h3",r({},{id:"utiliser-un-tableau-texte"}),"Utiliser un tableau texte"),(0,a.kt)("p",null,"Vous pouvez cr\xe9er un tableau Texte qui contient les noms de chaque page du formulaire. Le code doit \xeatre ex\xe9cut\xe9 avant que le formulaire soit pr\xe9sent\xe9 \xe0 l\u2019utilisateur. Par exemple, vous pouvez placer ce code dans l\u2019\xe9v\xe9nement formulaire ",(0,a.kt)("inlineCode",{parentName:"p"},"Sur chargement"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement stocker les noms des pages dans une liste hi\xe9rarchique et utiliser la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY")," pour charger les valeurs dans le tableau.")),(0,a.kt)("h2",r({},{id:"fonctionnalit\xe9s-de-goto-page"}),"Fonctionnalit\xe9s de Goto page"),(0,a.kt)("h3",r({},{id:"commande-form-goto-page"}),"Commande FORM GOTO PAGE"),(0,a.kt)("p",null,"Vous pouvez utiliser la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"FORM GOTO PAGE"))," dans la m\xe9thode de l\u2019onglet pour naviguer parmi les pages du formulaire :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"FORM GOTO PAGE(arrPages)\n")),(0,a.kt)("p",null,"Cette commande est ex\xe9cut\xe9e dans l\u2019\xe9v\xe9nement formulaire ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/Events/onClicked"}),(0,a.kt)("inlineCode",{parentName:"a"},"Sur clic")),". Il est pr\xe9f\xe9rable d\u2019effacer le tableau dans l\u2019\xe9v\xe9nement formulaire ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/Events/onUnload"}),(0,a.kt)("inlineCode",{parentName:"a"},"Sur lib\xe9ration")),"."),(0,a.kt)("p",null,"Vous pouvez, par exemple, \xe9crire le code suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n')),(0,a.kt)("h3",r({},{id:"action-goto-page"}),"Action Goto Page"),(0,a.kt)("p",null,"Lorsque vous associez l\u2019",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/propertiesAction#standard-action"}),"action standard")," ",(0,a.kt)("inlineCode",{parentName:"p"},"gotoPage")," \xe0 un objet de type Onglet, 4D affiche automatiquement la page du formulaire correspondant au num\xe9ro de l\u2019onglet s\xe9lectionn\xe9."),(0,a.kt)("p",null,"Par exemple, si l\u2019utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe)."),(0,a.kt)("h2",r({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,a.kt)("p",null,"Par exemple, si l\u2019utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe)."))}d.isMDXComponent=!0},97202:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},62272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"}}]);