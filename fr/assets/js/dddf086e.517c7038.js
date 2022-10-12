"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70056],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"real-time-monitor",title:"Page Moniteur temps r\xe9el"},i=void 0,l={unversionedId:"ServerWindow/real-time-monitor",id:"version-19-R6/ServerWindow/real-time-monitor",title:"Page Moniteur temps r\xe9el",description:'La page Moniteur temps r\xe9el permet de surveiller en temps r\xe9el le d\xe9roulement des op\xe9rations "longues" effectu\xe9es par l\u2019application. Ces op\xe9rations sont par exemple les recherches s\xe9quentielles, l\u2019ex\xe9cution de formules, etc.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/ServerWindow/real-time-monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/real-time-monitor",permalink:"/docs/fr/19-R6/ServerWindow/real-time-monitor",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"real-time-monitor",title:"Page Moniteur temps r\xe9el"},sidebar:"docs",previous:{title:"Page Serveur HTTP",permalink:"/docs/fr/19-R6/ServerWindow/http-server"},next:{title:"WebAdmin",permalink:"/docs/fr/19-R6/Admin/webAdmin"}},p={},u=[{value:"Mode avanc\xe9",id:"mode-avanc\xe9",level:2},{value:"Bouton Instantan\xe9",id:"bouton-instantan\xe9",level:2},{value:"Afficher op\xe9rations au moins 5 secondes",id:"afficher-op\xe9rations-au-moins-5-secondes",level:2}],c={toc:u};function d(e){var{components:n}=e,s=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'La page Moniteur temps r\xe9el permet de surveiller en temps r\xe9el le d\xe9roulement des op\xe9rations "longues" effectu\xe9es par l\u2019application. Ces op\xe9rations sont par exemple les recherches s\xe9quentielles, l\u2019ex\xe9cution de formules, etc.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(30212).Z,width:"700",height:"472"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cette page est disponible dans la fen\xeatre d\u2019administration du poste serveur et \xe9galement depuis un poste 4D distant. Dans le cas d\u2019un poste distant, la page affiche les donn\xe9es des op\xe9rations effectu\xe9es sur le poste serveur.")),(0,r.kt)("p",null,"Chaque op\xe9ration longue sur les donn\xe9es entra\xeene l\u2019ajout d\u2019une ligne. La ligne dispara\xeet automatiquement lorsque l\u2019op\xe9ration est termin\xe9e (l'option ",(0,r.kt)("strong",{parentName:"p"},"Afficher op\xe9rations au moins 5 secondes")," permet de conserver \xe0 l'\xe9cran les op\xe9rations ex\xe9cut\xe9es rapidement, cf. ci-dessous)."),(0,r.kt)("p",null,"Les informations suivantes sont fournies pour chaque ligne :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Heure d\xe9but"),' : heure de d\xe9marrage de l\u2019op\xe9ration au format "jj/mm/aaaa - hh:mm:ss"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dur\xe9e")," (ms) : dur\xe9e en cours de l\u2019op\xe9ration en millisecondes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Informations")," : libell\xe9 de l\u2019op\xe9ration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D\xe9tails")," : cette zone affiche un ensemble d'informations d\xe9taill\xe9es dont le contenu varie en fonction du type d'op\xe9ration s\xe9lectionn\xe9. En particulier :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cr\xe9\xe9e sur")," : indique si l'op\xe9ration r\xe9sulte d'une action d'un client (Cr\xe9\xe9e sur client) ou si elle a \xe9t\xe9 d\xe9marr\xe9e explicitement sur le serveur via une proc\xe9dure stock\xe9e ou l'option \"Ex\xe9cuter sur serveur\" (Cr\xe9\xe9e sur serveur)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D\xe9tails de l'op\xe9ration")," : d\xe9crit le type d'op\xe9ration ainsi que (pour les op\xe9rations de recherche) le plan de recherche."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sous-op\xe9rations")," (le cas \xe9ch\xe9ant) : affiche les op\xe9rations d\xe9pendantes de l'op\xe9ration s\xe9lectionn\xe9e (par exemple, suppression des enregistrements li\xe9s avant suppression de l'enregistrement parent)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D\xe9tails du process")," : fournit des informations suppl\xe9mentaires concernant la table, le champ, le process ou le client, en fonction du type d'op\xe9ration")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La page d\u2019observation en temps r\xe9el utilise en interne la commande ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1277.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"LIRE APERCU ACTIVITE")),". More information can be found in this command description.")),(0,r.kt)("p",null,"La page est active et mise \xe0 jour en permanence d\xe8s qu\u2019elle est affich\xe9e. Il est \xe0 noter que son fonctionnement peut ralentir sensiblement l\u2019ex\xe9cution de l\u2019application. Il est possible de suspendre la mise \xe0 jour de la page d\u2019une des mani\xe8res suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Pause"),","),(0,r.kt)("li",{parentName:"ul"},"en cliquant dans la liste,"),(0,r.kt)("li",{parentName:"ul"},"en appuyant sur la barre d\u2019espace.")),(0,r.kt)("p",null,'Lorsque la page est en pause, le message "SUSPENDU" est affich\xe9 et le libell\xe9 du bouton devient ',(0,r.kt)("strong",{parentName:"p"},"Reprendre"),". Il est possible de reprendre l\u2019observation des op\xe9rations en effectuant la m\xeame action que pour la mise en pause."),(0,r.kt)("h2",o({},{id:"mode-avanc\xe9"}),"Mode avanc\xe9"),(0,r.kt)("p",null,"La page MTR peut afficher des informations suppl\xe9mentaires, si n\xe9cessaire, pour chaque op\xe9ration list\xe9e."),(0,r.kt)("p",null,"Pour acc\xe9der au mode avanc\xe9 pour une op\xe9ration, appuyez sur la touche ",(0,r.kt)("strong",{parentName:"p"},"Maj")," et s\xe9lectionnez l'op\xe9ration. Toutes les informations disponibles sont alors affich\xe9es dans la zone \"D\xe9tails du process\" sans aucun filtre (\xe0 l'instar de ce qui est retourn\xe9 par la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"LIRE APERCU ACTIVITE"),"). Les informations disponibles d\xe9pendent de l'op\xe9ration s\xe9lectionn\xe9e."),(0,r.kt)("p",null,"Voici un exemple d'information affich\xe9e en mode standard :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(45818).Z,width:"998",height:"293"})),(0,r.kt)("p",null,"En mode avanc\xe9 (",(0,r.kt)("strong",{parentName:"p"},"Maj+Clic")," sur la ligne de l'op\xe9ration), des informations suppl\xe9mentaires sont affich\xe9es :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(51801).Z,width:"999",height:"288"})),(0,r.kt)("h2",o({},{id:"bouton-instantan\xe9"}),"Bouton Instantan\xe9"),(0,r.kt)("p",null,"Le bouton ",(0,r.kt)("strong",{parentName:"p"},"Instantan\xe9")," vous permet de copier dans le presse-papiers toutes les op\xe9rations affich\xe9es dans le panneau du MTR, ainsi que les d\xe9tails associ\xe9s (informations sur les process et les sous-op\xe9rations) :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(204).Z,width:"140",height:"40"})),(0,r.kt)("h2",o({},{id:"afficher-op\xe9rations-au-moins-5-secondes"}),"Afficher op\xe9rations au moins 5 secondes"),(0,r.kt)("p",null,"Si vous cochez l'option ",(0,r.kt)("strong",{parentName:"p"},"Afficher op\xe9rations au moins 5 secondes"),", toutes les op\xe9rations list\xe9es seront affich\xe9es dans la page pendant au moins cinq secondes, m\xeame apr\xe8s que l'ex\xe9cution de l'op\xe9ration soit termin\xe9e. Les op\xe9rations termin\xe9es restant affich\xe9es sont gris\xe9es dans la liste. Cette fonction est utile lorsque vous voulez observer des op\xe9rations dont l'ex\xe9cution est tr\xe8s rapide."))}d.isMDXComponent=!0},45818:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},51801:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},30212:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},204:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);