"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"splitters",title:"S\xe9parateur"},i=void 0,l={unversionedId:"FormObjects/splitters",id:"version-18/FormObjects/splitters",title:"S\xe9parateur",description:"Vue d\u2019ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/FormObjects/splitters.md",sourceDirName:"FormObjects",slug:"/FormObjects/splitters",permalink:"/docs/fr/18/FormObjects/splitters",draft:!1,tags:[],version:"18",frontMatter:{id:"splitters",title:"S\xe9parateur"},sidebar:"docs",previous:{title:"Spinner",permalink:"/docs/fr/18/FormObjects/spinner"},next:{title:"Image statique",permalink:"/docs/fr/18/FormObjects/staticPicture"}},p={},u=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Exemple JSON",id:"exemple-json",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:3},{value:"Interaction avec les propri\xe9t\xe9s des objets environnants",id:"interaction-avec-les-propri\xe9t\xe9s-des-objets-environnants",level:2},{value:"Gestion programm\xe9e des s\xe9parateurs",id:"gestion-programm\xe9e-des-s\xe9parateurs",level:2}],c={toc:u};function d(e){var{components:t}=e,o=s(e,["components"]);return(0,n.kt)("wrapper",a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"vue-densemble"}),"Vue d\u2019ensemble"),(0,n.kt)("p",null,"Un s\xe9parateur divise un formulaire en deux zones. Il permet \xe0 l\u2019utilisateur d\u2019agrandir ou de r\xe9duire chaque zone en le d\xe9pla\xe7ant. Un s\xe9parateur peut \xeatre horizontal ou vertical. Il tient compte des propri\xe9t\xe9s de redimensionnement des objets, ce qui permet de personnaliser enti\xe8rement l\u2019interface. Un s\xe9parateur peut \xeatre \u201cpousseur\u201d ou non"),(0,n.kt)("p",null,"L\u2019utilisation type du s\xe9parateur est le formulaire de sortie dans lequel les colonnes peuvent \xeatre redimensionn\xe9es :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7924).Z,width:"260",height:"121"})),(0,n.kt)("p",null,"Les caract\xe9ristiques g\xe9n\xe9rales des s\xe9parateurs sont les suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vous pouvez placer autant de s\xe9parateurs que vous voulez dans tout type de formulaire. De m\xeame, il est possible de m\xealer des s\xe9parateurs horizontaux et verticaux dans un m\xeame formulaire."),(0,n.kt)("li",{parentName:"ul"},"Un s\xe9parateur peut traverser un objet. Celui-ci sera redimensionn\xe9 lors du d\xe9placement du s\xe9parateur."),(0,n.kt)("li",{parentName:"ul"},"Les but\xe9es des s\xe9parateurs sont calcul\xe9es de mani\xe8re \xe0 ce que les objets d\xe9plac\xe9s restent enti\xe8rement visibles dans le formulaire ou ne passent pas sous/\xe0 c\xf4t\xe9 d\u2019un autre s\xe9parateur. Lorsque la propri\xe9t\xe9 ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#pusher"}),"Pousseur")," est associ\xe9e \xe0 un s\xe9parateur, son d\xe9placement vers la droite ou vers le bas ne rencontre pas de but\xe9e."),(0,n.kt)("li",{parentName:"ul"},"Les redimensionnements effectu\xe9s dans les formulaires \xe0 l\u2019aide des s\xe9parateurs ne sont conserv\xe9s que durant l\u2019affichage du formulaire. Une fois le formulaire referm\xe9, les dimensions initiales sont restaur\xe9es.")),(0,n.kt)("p",null,"Une fois ins\xe9r\xe9, un s\xe9parateur se pr\xe9sente sous la forme d\u2019un trait. Vous pouvez modifier son ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder#border-line-style-dotted-line-type"}),"style de bordure")," afin d\u2019obtenir un trait plus ou moins \xe9pais, ou ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder##font-color-line-color"}),"modifier sa couleur"),"."),(0,n.kt)("h4",a({},{id:"exemple-json"}),"Exemple JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'"mySplitter": {\n "type": "splitter",\n "left": 60,  \n "top": 160,   \n "width": 100,  \n "height": 20,  \n "splitterMode": "move"  //pusher\n }\n')),(0,n.kt)("h3",a({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder##border-line-style-dotted-line-type"}),"Style de la bordure")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#bold"}),"Gras")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#font"}),"Police")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#font-color"}),"Couleur de la police")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesHelp#help-tip"}),"Message d'aide")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dim. horizontal")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#italic"}),"Italique")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder##font-color-line-color"}),"Couleur du trait")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#pusher"}),"Pousseur")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#title"}),"Titre")," -",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesText#underline"}),"Soulign\xe9")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dim. vertical")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable ou expression")," -  ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")),(0,n.kt)("h2",a({},{id:"interaction-avec-les-propri\xe9t\xe9s-des-objets-environnants"}),"Interaction avec les propri\xe9t\xe9s des objets environnants"),(0,n.kt)("p",null,"Dans un formulaire, les s\xe9parateurs interagissent sur les objets qui les entourent suivant les options de redimensionnement de ces objets :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Options de redimensionnement du ou des objet(s)"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Objet(s) au-dessus du s\xe9parateur horizontal ou \xe0 gauche du s\xe9parateur vertical (1)"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Objet(s) au-dessous du s\xe9parateur horizontal ",(0,n.kt)("em",{parentName:"th"},"non Pousseur")," ou \xe0 droite d'un s\xe9parateur vertical ",(0,n.kt)("em",{parentName:"th"},"non Pousseur")),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Objet(s) au-dessous du s\xe9parateur horizontal ",(0,n.kt)("em",{parentName:"th"},"Pousseur")," ou \xe0 droite d'un s\xe9parateur vertical ",(0,n.kt)("em",{parentName:"th"},"Pousseur")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Aucun"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Restent tel que"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Sont d\xe9plac\xe9s avec le s\xe9parateur (conservent leur position relative) jusqu\u2019\xe0 la but\xe9e suivante. La but\xe9e du d\xe9placement vers le bas ou vers la droite est soit le bord de la fen\xeatre, soit un autre s\xe9parateur."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Sont d\xe9plac\xe9s sans limites avec le s\xe9parateur (conservent leur position relative). Aucune but\xe9e n\u2019est appliqu\xe9e (cf. paragraphe suivant)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Redimensionnement"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gardent leur position d\u2019origine mais sont redimensionn\xe9s en fonction de la nouvelle position du s\xe9parateur"),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"D\xe9placement"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Se d\xe9placent avec le s\xe9parateur"),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(1) Un objet situ\xe9 \xe0 cet emplacement sert de but\xe9e en cas de d\xe9placement vers le haut (s\xe9parateur horizontal) ou vers la gauche (s\xe9parateur vertical) s\u2019il ne comporte aucune option de redimensionnement.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Un objet enti\xe8rement contenu dans le rectangle d\xe9finissant le s\xe9parateur est d\xe9plac\xe9 en m\xeame temps que le s\xe9parateur lui-m\xeame.")),(0,n.kt)("h2",a({},{id:"gestion-programm\xe9e-des-s\xe9parateurs"}),"Gestion programm\xe9e des s\xe9parateurs"),(0,n.kt)("p",null,"Vous pouvez associer une m\xe9thode objet \xe0 un s\xe9parateur. Cette m\xe9thode sera appel\xe9e avec l\u2019\xe9v\xe9nement ",(0,n.kt)("inlineCode",{parentName:"p"},"On Clicked")," durant tout le d\xe9placement."),(0,n.kt)("p",null,"Une ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/18/FormObjects/propertiesObject#variable-or-expression"}),"variable")," de type ",(0,n.kt)("em",{parentName:"p"},"Entier long")," est associ\xe9e \xe0 chaque objet s\xe9parateur. Cette variable peut \xeatre utilis\xe9e dans vos m\xe9thodes objet et/ou formulaire. Elle prend pour valeur le d\xe9placement courant, en pixels, du s\xe9parateur."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si elle est n\xe9gative : le d\xe9placement a \xe9t\xe9 effectu\xe9 vers le haut ou vers la gauche,"),(0,n.kt)("li",{parentName:"ul"},"Si elle est positive : le d\xe9placement a \xe9t\xe9 effectu\xe9 vers le bas ou vers la droite,"),(0,n.kt)("li",{parentName:"ul"},"Si elle est \xe9gale \xe0 0 : le s\xe9parateur a \xe9t\xe9 rel\xe2ch\xe9 \xe0 son emplacement d\u2019origine.")),(0,n.kt)("p",null,"Vous pouvez \xe9galement d\xe9placer le s\xe9parateur par programmation : il suffit de modifier la valeur de la variable associ\xe9e. Imaginons par exemple qu\u2019un s\xe9parateur vertical soit associ\xe9 \xe0 la variable ",(0,n.kt)("inlineCode",{parentName:"p"},"s\xe9para1"),". Si vous \xe9crivez ",(0,n.kt)("inlineCode",{parentName:"p"},"s\xe9para1:=-10"),", le s\xe9parateur sera d\xe9plac\xe9 de 10 pixels vers la gauche \u2014 comme si l\u2019utilisateur l\u2019avait fait manuellement. Le d\xe9placement s\u2019effectue au terme de l\u2019ex\xe9cution de la m\xe9thode objet ou formulaire contenant l\u2019instruction."))}d.isMDXComponent=!0},7924:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);