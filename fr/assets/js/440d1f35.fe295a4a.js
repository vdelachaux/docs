"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"compact",title:"Page compactage",sidebar_label:"Page compactage"},i=void 0,l={unversionedId:"MSC/compact",id:"version-19-R7/MSC/compact",title:"Page compactage",description:"Cette page permet d\u2019acc\xe9der aux fonctions de compactage du fichier de donn\xe9es et de structure.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/MSC/compact.md",sourceDirName:"MSC",slug:"/MSC/compact",permalink:"/docs/fr/MSC/compact",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"compact",title:"Page compactage",sidebar_label:"Page compactage"},sidebar:"docs",previous:{title:"Page Sauvegarde",permalink:"/docs/fr/MSC/backup"},next:{title:"Page Retour en arri\xe8re",permalink:"/docs/fr/MSC/rollback"}},c={},u=[{value:"Pourquoi compacter ?",id:"pourquoi-compacter-",level:2},{value:"Le compactage standard",id:"le-compactage-standard",level:2},{value:"Voir le compte rendu",id:"voir-le-compte-rendu",level:2},{value:"Mode avanc\xe9",id:"mode-avanc\xe9",level:2},{value:"Compacter les enregistrements et les index",id:"compacter-les-enregistrements-et-les-index",level:3},{value:"Forcer la mise \xe0 jour des enregistrements",id:"forcer-la-mise-\xe0-jour-des-enregistrements",level:3},{value:"Compacter la table d\u2019adresses",id:"compacter-la-table-dadresses",level:3}],d={toc:u};function p(e){var{components:t}=e,o=s(e,["components"]);return(0,a.kt)("wrapper",r({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cette page permet d\u2019acc\xe9der aux fonctions de compactage du fichier de donn\xe9es et de structure."),(0,a.kt)("h2",r({},{id:"pourquoi-compacter-"}),"Pourquoi compacter ?"),(0,a.kt)("p",null,"Le compactage d'un fichier r\xe9pond \xe0 deux types de besoins :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"R\xe9duction de taille et optimisation des fichiers")," : les fichiers peuvent comporter des emplacements inutilis\xe9s (des \u201ctrous\u201d). En effet, lorsque vous supprimez des enregistrements, des formulaires, etc., l\u2019emplacement qu\u2019ils occupaient pr\xe9c\xe9demment dans le fichier devient vacant. 4D r\xe9utilise ces emplacements vides lorsque c\u2019est possible, mais la taille des donn\xe9es \xe9tant variable, les suppressions ou modifications successives g\xe9n\xe8rent in\xe9vitablement des espaces inutilisables pour le programme. Il en va de m\xeame lorsqu\u2019une grande quantit\xe9 de donn\xe9es vient d\u2019\xeatre supprim\xe9e : les emplacements vides restent inaffect\xe9s dans le fichier. Le rapport entre la taille du fichier de donn\xe9es et l\u2019espace r\xe9ellement utilis\xe9 pour les donn\xe9es est le taux d\u2019occupation des donn\xe9es. Un taux trop faible peut entra\xeener, outre un gaspillage de place, une d\xe9gradation des performances de la base. La fonction de compactage permet de r\xe9organiser et d\u2019optimiser le stockage des donn\xe9es afin de faire dispara\xeetre les \u201ctrous\u201d. Les zones \u201cInformations\u201d r\xe9sument les donn\xe9es relatives \xe0 la fragmentation des fichiers et sugg\xe8rent les op\xe9rations \xe0 effectuer. Les onglets de la page ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/MSC/information#data"}),"Informations")," du CSM indiquent la fragmentation courante des fichiers de la base.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"R\xe9enregistrement int\xe9gral des donn\xe9es")," en appliquant le formatage courant d\xe9fini dans le fichier de structure. Ce principe est utile lorsque les donn\xe9es d'une m\xeame table ont \xe9t\xe9 stock\xe9es dans diff\xe9rents formats, par exemple apr\xe8s un changement dans la structure de la base."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Le compactage n\u2019est disponible qu\u2019en mode maintenance. Si vous tentez d\u2019effectuer cette op\xe9ration en mode standard, une bo\xeete de dialogue d\u2019alerte vous pr\xe9vient que l'application va \xeatre ferm\xe9e puis relanc\xe9e en mode maintenance. Il est possible de compacter un fichier de donn\xe9es non ouvert par l'application (cf. paragraphe ",(0,a.kt)("a",r({parentName:"p"},{href:"#compact-records-and-indexes"}),"Compacter les enregistrements et les index")," ci-dessous).")))),(0,a.kt)("h2",r({},{id:"le-compactage-standard"}),"Le compactage standard"),(0,a.kt)("p",null,"Pour d\xe9marrer directement le compactage du fichier de donn\xe9es ou de structure, cliquez sur le bouton correspondant dans la fen\xeatre du CSM."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29121).Z,width:"158",height:"88"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Le compactage entra\xeenant la duplication du fichier d\u2019origine, le bouton est d\xe9sactiv\xe9 si la place sur le disque contenant le fichier est insuffisante.")),(0,a.kt)("p",null,"Cette op\xe9ration d\xe9fragmente le fichier principal ainsi que les \xe9ventuels fichiers d\u2019index. 4D effectue une copie des fichiers d\u2019origine et les place dans un dossier nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Replaced Files (Compacting)"),", cr\xe9\xe9 \xe0 c\xf4t\xe9 du fichier d\u2019origine. Si vous effectuez plusieurs compactages, un nouveau dossier est cr\xe9\xe9 \xe0 chaque fois. Il est nomm\xe9 \u201cReplaced Files (Compacting)_1\u201d, \u201cReplaced Files (Compacting)_2\u201d, etc. Vous pouvez modifier le dossier dans lequel les fichiers d\u2019origine sont sauvegard\xe9s via le mode avanc\xe9."),(0,a.kt)("p",null,"A l\u2019issue de l\u2019op\xe9ration, les fichiers d\xe9fragment\xe9s remplacent automatiquement les fichiers d\u2019origine. L'application est imm\xe9diatement op\xe9rationnelle sans aucune autre manipulation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lorsque la base est chiffr\xe9e, le compactage comprend le chiffrement et le d\xe9chiffrement et requiert ainsi la cl\xe9 de chiffrement des donn\xe9es courante. Si aucune cl\xe9 de chiffrement valide n'a encore \xe9t\xe9 fournie, une bo\xeete de dialogue s'affiche pour vous demander de saisir la phrase secr\xe8te ou la cl\xe9 des donn\xe9es.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attention :")," Chaque compactage entra\xeene la duplication du fichier d\u2019origine et donc l\u2019augmentation de la taille du dossier de l\u2019application. Il est important de tenir compte de ce m\xe9canisme (notamment sous macOS o\xf9 les applications 4D apparaissent sous forme de packages) pour que l\u2019application ne grossisse pas de fa\xe7on excessive. Une intervention manuelle \xe0 l\u2019int\xe9rieur du package peut \xeatre utile afin de supprimer les copies des fichiers d\u2019origine."),(0,a.kt)("h2",r({},{id:"voir-le-compte-rendu"}),"Voir le compte rendu"),(0,a.kt)("p",null,"Une fois le compactage termin\xe9, 4D g\xe9n\xe8re un fichier de compte-rendu dans le dossier Logs du projet. Ce fichier liste l\u2019ensemble des op\xe9rations qui ont \xe9t\xe9 men\xe9es. Il est cr\xe9\xe9 au format xml et est nomm\xe9 ",(0,a.kt)("em",{parentName:"p"},"ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"),'" o\xf9 :'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ApplicationName"),' est le nom du fichier de structure sans extension, par exemple "Factures",'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"aaaa-mm-jj hh-mm-ss")," est l'horodatage du fichier, bas\xe9 sur la date et l'heure syst\xe8me locales au moment du lancement de l'op\xe9ration de v\xe9rification, par exemple \"2019-02-11 15-20-45\".")),(0,a.kt)("p",null,"Lorsque vous cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Voir le compte rendu"),", 4D affiche le fichier de compte-rendu le plus r\xe9cent dans le navigateur par d\xe9faut de l\u2019ordinateur."),(0,a.kt)("h2",r({},{id:"mode-avanc\xe9"}),"Mode avanc\xe9"),(0,a.kt)("p",null,"La page Compactage comporte un bouton ",(0,a.kt)("strong",{parentName:"p"},"Avanc\xe9"),", permettant d\u2019acc\xe9der \xe0 une page d\u2019options pour le compactage des fichiers de donn\xe9es et de structure."),(0,a.kt)("h3",r({},{id:"compacter-les-enregistrements-et-les-index"}),"Compacter les enregistrements et les index"),(0,a.kt)("p",null,"La zone ",(0,a.kt)("strong",{parentName:"p"},"Compacter les enregistrements et les index")," affiche le chemin d\u2019acc\xe8s du fichier de donn\xe9es courant ainsi qu\u2019un bouton ",(0,a.kt)("strong",{parentName:"p"},"[...]")," permettant de d\xe9signer un autre fichier de donn\xe9es. Lorsque vous cliquez sur ce bouton, une bo\xeete de dialogue standard d\u2019ouverture de documents s\u2019affiche, vous permettant de d\xe9signer le fichier de donn\xe9es \xe0 compacter. Vous devez s\xe9lectionner un fichier de donn\xe9es compatible avec le fichier de structure ouvert. Une fois la bo\xeete de dialogue valid\xe9e, le chemin d\u2019acc\xe8s du fichier \xe0 compacter est indiqu\xe9 dans la fen\xeatre."),(0,a.kt)("p",null,"Le second bouton ",(0,a.kt)("strong",{parentName:"p"},"[...]")," permet de d\xe9signer un autre emplacement pour les sauvegardes des fichiers originaux effectu\xe9es avant compactage. Cette option permet notamment de compacter des fichiers volumineux en utilisant diff\xe9rents disques."),(0,a.kt)("h3",r({},{id:"forcer-la-mise-\xe0-jour-des-enregistrements"}),"Forcer la mise \xe0 jour des enregistrements"),(0,a.kt)("p",null,"Lorsque cette option est coch\xe9e, 4D r\xe9\xe9crit chaque enregistrement de chaque table lors de l\u2019op\xe9ration de compactage, en fonction de sa description en structure. Lorsque l\u2019option n\u2019est pas coch\xe9e, 4D r\xe9organise uniquement le stockage des donn\xe9es sur le disque. Cette option est utile dans les cas suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorsque des modifications de types de champs ont \xe9t\xe9 apport\xe9es \xe0 la structure d\u2019une application apr\xe8s que des donn\xe9es ont \xe9t\xe9 saisies. Par exemple, vous pouvez avoir chang\xe9 le type d\u2019un champ Entier long en R\xe9el. 4D autorise m\xeame des modifications entre des types tr\xe8s diff\xe9rents (avec risques de pertes de donn\xe9es), par exemple un champ R\xe9el peut \xeatre chang\xe9 en Texte et inversement. Dans ce cas, 4D ne convertit pas r\xe9troactivement les donn\xe9es d\xe9j\xe0 saisies, elles ne sont converties que si les enregistrements sont charg\xe9s puis sauvegard\xe9s. L\u2019option permet de forcer la conversion de toutes les donn\xe9es.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorsqu\u2019une option de stockage externe des donn\xe9es de type Texte, Image ou BLOB a \xe9t\xe9 modifi\xe9e apr\xe8s que des donn\xe9es aient \xe9t\xe9 saisies. Ce cas peut notamment se produire apr\xe8s conversion d\u2019une base en version 4D ant\xe9rieure \xe0 la v13. Comme pour le cas du retypage ci-dessus, 4D ne modifie pas r\xe9troactivement les donn\xe9es d\xe9j\xe0 saisies. Pour cela, vous pouvez forcer la mise \xe0 jour des enregistrements afin d\u2019appliquer le nouveau mode de stockage aux enregistrements d\xe9j\xe0 saisis.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorsque des champs ou des tables ont \xe9t\xe9 supprim\xe9(e)s. Dans ce cas, le compactage avec mise \xe0 jour des enregistrements permet de r\xe9cup\xe9rer la place de ces donn\xe9es supprim\xe9es et donc de r\xe9duire la taille du fichier."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"La s\xe9lection de cette option entra\xeene la mise \xe0 jour de tous les index.")))),(0,a.kt)("h3",r({},{id:"compacter-la-table-dadresses"}),"Compacter la table d\u2019adresses"),(0,a.kt)("p",null,"(option accessible uniquement lorsque la pr\xe9c\xe9dente est coch\xe9e)"),(0,a.kt)("p",null,"Cette option provoque la reconstruction compl\xe8te de la table d\u2019adresses des enregistrements au moment du compactage. Cette op\xe9ration permet d\u2019optimiser la taille de la table d\u2019adresses. Elle est principalement utile dans les bases de donn\xe9es o\xf9 de tr\xe8s nombreux enregistrements ont \xe9t\xe9 cr\xe9\xe9s puis supprim\xe9s. Dans les autres cas, l\u2019optimisation ne sera pas d\xe9terminante."),(0,a.kt)("p",null,"A noter que cette option ralentit le compactage de fa\xe7on cons\xe9quente et qu\u2019elle rend invalides les ensembles sauvegard\xe9s via la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"SAVE SET"),". Il est d\u2019ailleurs fortement recommand\xe9 dans ce cas de supprimer les ensembles sauvegard\xe9s car leur utilisation peut conduire \xe0 des s\xe9lections de donn\xe9es erron\xe9es."),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Le compactage tient compte des enregistrements des tables plac\xe9es dans la corbeille. La pr\xe9sence d\u2019un grand nombre d\u2019enregistrements dans la corbeille peut constituer un facteur de ralentissement suppl\xe9mentaire pour l\u2019op\xe9ration."),(0,a.kt)("li",{parentName:"ul"},"L'utilisation de cette option rend la table d'adresses, et donc la base de donn\xe9es, incompatibles avec le fichier d'historique courant (s'il en existe un). Il sera automatiquement sauvegard\xe9 et un nouveau fichier d'historique devra \xeatre cr\xe9\xe9 au prochain lancement de l'application."),(0,a.kt)("li",{parentName:"ul"},"Vous pouvez d\xe9terminer si la table d'adresses a besoin d'\xeatre compact\xe9e en comparant sa taille avec le nombre total d'enregistrements dans la Page ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/MSC/information"}),"Informations")," du CSM."))))}p.isMDXComponent=!0},29121:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="}}]);