"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||s;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},27846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"pictures",title:"Images"},o=void 0,l={unversionedId:"FormEditor/pictures",id:"version-19-R6/FormEditor/pictures",title:"Images",description:"4D inclut une prise en charge sp\xe9cifique des images utilis\xe9es dans vos formulaires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/fr/19-R6/FormEditor/pictures",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"pictures",title:"Images"},sidebar:"docs",previous:{title:"Feuilles de style (style sheets)",permalink:"/docs/fr/19-R6/FormEditor/stylesheets"},next:{title:"\xc9diteur de formulaire",permalink:"/docs/fr/19-R6/FormEditor/overview"}},u={},m=[{value:"Formats natifs pris en charge",id:"formats-natifs-pris-en-charge",level:2},{value:"Format d&#39;image non disponible",id:"format-dimage-non-disponible",level:3},{value:"Images de haute r\xe9solution",id:"images-de-haute-r\xe9solution",level:2},{value:"Facteur d&#39;\xe9chelle",id:"facteur-d\xe9chelle",level:3},{value:"DPI",id:"dpi",level:3},{value:"Images en mode sombre (macOS uniquement)",id:"images-en-mode-sombre-macos-uniquement",level:2},{value:"Coordonn\xe9es de la souris dans une image",id:"coordonn\xe9es-de-la-souris-dans-une-image",level:2}],c={toc:m};function p(e){var{components:t}=e,i=s(e,["components"]);return(0,r.kt)("wrapper",n({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D inclut une prise en charge sp\xe9cifique des images utilis\xe9es dans vos formulaires."),(0,r.kt)("h2",n({},{id:"formats-natifs-pris-en-charge"}),"Formats natifs pris en charge"),(0,r.kt)("p",null,"4D int\xe8gre une gestion native des images. Cela signifie que les images sont affich\xe9es et stock\xe9es dans leur format d\u2019origine, sans interpr\xe9tation dans 4D. Les sp\xe9cificit\xe9s des diff\xe9rents formats (ombrages, zones transparentes...) sont conserv\xe9es en cas de copier-coller et affich\xe9es sans alt\xe9ration. Ce support natif est valable pour toutes les images stock\xe9es dans les formulaires 4D : ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/staticPicture"}),"images statiques")," coll\xe9es en mode D\xe9veloppement, images coll\xe9es dans des ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/inputOverview"}),"objets de saisie")," \xe0 l'ex\xe9cution, etc."),(0,r.kt)("p",null,"Les formats d'image les plus courants sont pris en charge par les deux plates-formes : jpeg, gif, png, tiff, bmp, etc. Sous macOS, le format pdf est \xe9galement disponible pour l'encodage et le d\xe9codage."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La liste compl\xe8te des formats pris en charge varie en fonction du syst\xe8me d\u2019exploitation et des codecs personnalis\xe9s install\xe9s sur les postes. Pour savoir quels sont codecs disponibles, vous devez utiliser la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"PICTURE CODEC LIST")," (voir aussi la description du ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/Concepts/picture"}),"type de donn\xe9es image"),").")),(0,r.kt)("h3",n({},{id:"format-dimage-non-disponible"}),"Format d'image non disponible"),(0,r.kt)("p",null,"Une ic\xf4ne sp\xe9cifique est affich\xe9e pour les images stock\xe9es dans un format non disponible sur le poste. L'extension du format manquant est inscrite en bas de l'ic\xf4ne :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4354).Z,width:"136",height:"67"})),(0,r.kt)("p",null,"L'ic\xf4ne est automatiquement utilis\xe9e partout o\xf9 l'image doit \xeatre affich\xe9e :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49749).Z,width:"392",height:"221"})),(0,r.kt)("p",null,"Cette ic\xf4ne indique que l'image ne peut \xeatre ni affich\xe9e ni manipul\xe9e localement -- mais elle peut \xeatre stock\xe9e sans alt\xe9ration pour \xeatre affich\xe9e sur une autre machine. C'est le cas, par exemple, pour les images PDF sous Windows ou les images au format PICT."),(0,r.kt)("h2",n({},{id:"images-de-haute-r\xe9solution"}),"Images de haute r\xe9solution"),(0,r.kt)("p",null,"4D prend en charge des images haute r\xe9solution sur les plateformes macOS et Windows. Les images haute r\xe9solution peuvent \xeatre d\xe9finies par le facteur d'\xe9chelle ou le dpi."),(0,r.kt)("h3",n({},{id:"facteur-d\xe9chelle"}),"Facteur d'\xe9chelle"),(0,r.kt)("p",null,"Les \xe9crans haute r\xe9solution ont une densit\xe9 de pixels plus \xe9lev\xe9e que les \xe9crans standard traditionnels. Pour que les images s'affichent correctement sur des \xe9crans haute r\xe9solution, le nombre de pixels de l'image doit \xeatre multipli\xe9 par le ",(0,r.kt)("em",{parentName:"p"},"facteur d'\xe9chelle")," (c'est-\xe0-dire deux fois plus grand, trois fois plus grand, etc.)."),(0,r.kt)("p",null,"Lorsque vous utilisez des images haute r\xe9solution, vous pouvez sp\xe9cifier le facteur d'\xe9chelle en ajoutant \"@nx\" dans le nom de l'image (o\xf9 ",(0,r.kt)("em",{parentName:"p"},"n")," d\xe9signe le facteur d'\xe9chelle). Dans le tableau ci-dessous, vous constaterez que le facteur d'\xe9chelle est indiqu\xe9 dans les noms des images haute r\xe9solution, ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",n({parentName:"em"},{href:"mailto:circle@2x.png"}),"circle@2x.png"))," et ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",n({parentName:"em"},{href:"mailto:circle@3x.png"}),"circle@3x.png")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type d'affichage"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Facteur d'\xe9chelle"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Exemple"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"R\xe9solution standard"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"densit\xe9 de pixel 1:1."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"1x"),(0,r.kt)("br",null),(0,r.kt)("img",{src:a(20725).Z,width:"152",height:"155"})," ",(0,r.kt)("em",{parentName:"td"},"circle.png"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Haute r\xe9solution"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Densit\xe9 de pixel augment\xe9e d'un facteur de 2 ou 3."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("table",null,(0,r.kt)("th",null,"2x"),(0,r.kt)("th",null,"3x"),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{src:a(69977).Z,width:"156",height:"152"}),(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"mailto:circle@2x.png"}),"circle@2x.png"))),(0,r.kt)("td",null,(0,r.kt)("img",{src:a(43995).Z,width:"156",height:"152"}),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"mailto:circle@3x.png"}),"circle@3x.png"))))))))),(0,r.kt)("p",null,"Les images haute r\xe9solution avec la convention @nx peuvent \xeatre utilis\xe9es dans les objets suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/staticPicture"}),"Images statiques")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/buttonOverview"}),"Boutons"),"/",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/radiobuttonOverview"}),"radio"),"/",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/checkboxOverview"}),"cases \xe0 cocher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/pictureButtonOverview"}),"Boutons image"),"/",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/picturePopupMenuOverview"}),"Pop-up image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/tabControl"}),"Onglets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/FormObjects/listboxOverview#list-box-headers"}),"En-t\xeates de list box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19-R6/Menus/properties#item-icon"}),"Ic\xf4nes de menu"))),(0,r.kt)("p",null,"4D priorise automatiquement les images avec la r\xe9solution la plus \xe9lev\xe9e. 4D priorise automatiquement les images avec la r\xe9solution la plus \xe9lev\xe9e. M\xeame si une commande ou une propri\xe9t\xe9 sp\xe9cifie ",(0,r.kt)("em",{parentName:"p"},"circle.png"),", ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",n({parentName:"em"},{href:"mailto:circle@3x.png"}),"circle@3x.png"))," sera utilis\xe9 (le cas \xe9ch\xe9ant)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A noter que cette r\xe9solution se produit uniquement pour l'affichage des images \xe0 l'\xe9cran, aucune hi\xe9rarchisation automatique n'est effectu\xe9e lors de l'impression.")),(0,r.kt)("h3",n({},{id:"dpi"}),"DPI"),(0,r.kt)("p",null,"Si 4D donne automatiquement la priorit\xe9 \xe0 la r\xe9solution la plus \xe9lev\xe9e, il existe cependant des diff\xe9rences de comportement en fonction de la r\xe9solution de l'\xe9cran et de l'image ",(0,r.kt)("em",{parentName:"p"},"(","*",")")," et du format de l'image :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Comportement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"D\xe9poser ou Coller"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Si l'image est de :",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"72dpi ou 96dpi")," - L'image est \"",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/FormObjects/propertiesPicture#center--truncated-non-centered"}),"Center"),"\" format\xe9e et l'objet contenant l'image contient le m\xeame nombre de pixels."),(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"Autre dpi")," - L'image est format\xe9e \"",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/FormObjects/propertiesPicture#scaled-to-fit"}),"Mise \xe0 l'\xe9chelle"),"\" et l'objet contenant l'image est \xe9gal \xe0 (nombre de pixels de l'image * dpi de l'\xe9cran) / (depi de l'image)")," ",(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"Pas de dpi")," - L'image est format\xe9e \"",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/fr/19-R6/FormObjects/propertiesPicture#scaled-to-fit"}),"Mise \xe0 l'\xe9chelle"),'".')))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057"}),"Taille automatique")," (menu contextuel de l'\xe9diteur de formulaires)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Si le format d'affichage de l'image est :",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",n({parentName:"strong"},{href:"/docs/fr/19-R6/FormObjects/propertiesPicture#scaled-to-fit"}),"Scaled"))," - L'objet contenant l'image est redimensionn\xe9 en fonction de (nombre de pixels de l'image * dpi \xe9cran) / (dpi de l'image) ")," ",(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"Non mis \xe0 l'\xe9chelle")," - L'objet contenant l'image a le m\xeame nombre de pixels que l'image.")))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(","*",") G\xe9n\xe9ralement, macOS = 72 dpi, Windows = 96 dpi")),(0,r.kt)("h2",n({},{id:"images-en-mode-sombre-macos-uniquement"}),"Images en mode sombre (macOS uniquement)"),(0,r.kt)("p",null,"Vous pouvez d\xe9finir des images et des ic\xf4nes sp\xe9cifiques qui seront utilis\xe9es \xe0 la place des images standard lorsque ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/FormEditor/propertiesForm#color-scheme"}),"les formulaires utilisent le mode sombre"),"."),(0,r.kt)("p",null,"Une image en mode sombre est d\xe9finie comme suit :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"l'image du mode sombre porte le m\xeame nom que la version standard (mode clair) avec le suffixe \"",(0,r.kt)("inlineCode",{parentName:"li"},"_sombre"),'"'),(0,r.kt)("li",{parentName:"ul"},"l'image en mode sombre est stock\xe9e \xe0 c\xf4t\xe9 de la version standard.")),(0,r.kt)("p",null,"Au moment de l'ex\xe9cution, 4D charge automatiquement l'image en mode clair ou sombre, en fonction du ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/1761.html"}),"mode de couleurs du formulaire courant"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(87178).Z,width:"758",height:"246"})),(0,r.kt)("h2",n({},{id:"coordonn\xe9es-de-la-souris-dans-une-image"}),"Coordonn\xe9es de la souris dans une image"),(0,r.kt)("p",null,"4D vous permet de r\xe9cup\xe9rer les coordonn\xe9es locales de la souris dans un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/inputOverview"}),"objet de saisie")," associ\xe9 \xe0 une ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/FormObjects/propertiesObject#expression-type"}),"expression d'image"),", en cas de clic ou de survol, m\xeame si un d\xe9filement ou un zoom a \xe9t\xe9 appliqu\xe9 \xe0 l'image. Ce m\xe9canisme, proche de celui d'une image map, peut \xeatre utilis\xe9 par exemple pour g\xe9rer les barres de bouton d\xe9filables ou bien l'interface de logiciels de cartographie."),(0,r.kt)("p",null,"Les coordonn\xe9es sont retourn\xe9es dans les ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html"}),"Variables syst\xe8me")," ",(0,r.kt)("em",{parentName:"p"},"MouseX")," et ",(0,r.kt)("em",{parentName:"p"},"MouseY"),". Les coordonn\xe9es sont exprim\xe9es en pixels par rapport \xe0 l'angle sup\xe9rieur gauche de l'image (0,0). Lorsque la souris se trouve en dehors du syst\xe8me de coordonn\xe9es de l'image, la valeur -1 est retourn\xe9e dans ",(0,r.kt)("em",{parentName:"p"},"MouseX")," et ",(0,r.kt)("em",{parentName:"p"},"MouseY"),"."),(0,r.kt)("p",null,"Vous pouvez lire la valeur des variables des \xe9v\xe9nements formulaire ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/Events/onClicked"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Clicked")),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/Events/onDoubleClicked"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Double Clicked")),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/Events/onMouseUp"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mouse up")),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/Events/onMouseEnter"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mouse Enter")),", ou ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19-R6/Events/onMouseMove"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mouse Move")),"."))}p.isMDXComponent=!0},87178:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},4354:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},49749:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/picNoFormat2-ad015882b591ae364c3361325b40b6fe.png"},20725:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},69977:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},43995:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"}}]);