"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"dropdownListOverview",title:"Liste d\xe9roulante"},l=void 0,s={unversionedId:"FormObjects/dropdownListOverview",id:"version-19/FormObjects/dropdownListOverview",title:"Liste d\xe9roulante",description:"Drop-down lists are form objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an object, an array, a choice list, or a standard action.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/fr/19/FormObjects/dropdownListOverview",draft:!1,tags:[],version:"19",frontMatter:{id:"dropdownListOverview",title:"Liste d\xe9roulante"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/fr/19/FormObjects/comboBoxOverview"},next:{title:"Zone de groupe",permalink:"/docs/fr/19/FormObjects/groupBox"}},p={},d=[{value:"Drop-down list types",id:"drop-down-list-types",level:2},{value:"Handling drop-down lists",id:"handling-drop-down-lists",level:2},{value:"Utilisation d&#39;un objet",id:"utilisation-dun-objet",level:3},{value:"Utiliser un tableau",id:"utiliser-un-tableau",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Selected item value or Selected item reference",id:"selected-item-value-or-selected-item-reference",level:4},{value:"Using a hierarchical choice list",id:"using-a-hierarchical-choice-list",level:3},{value:"Utiliser une action standard",id:"utiliser-une-action-standard",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}],c={toc:d};function u(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)("wrapper",n({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Drop-down lists are form objects that allow the user to select from a list. You manage the items displayed in the drop-down list using an object, an array, a choice list, or a standard action."),(0,r.kt)("p",null,"Sous macOS, les listes d\xe9roulantes sont aussi parfois appel\xe9es \"pop-up menu\". Les deux noms font r\xe9f\xe9rence aux m\xeames objets. Comme le montre l'exemple suivant, l'apparence de ces objets peut diff\xe9rer l\xe9g\xe8rement selon la plateforme :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90241).Z,width:"458",height:"158"})),(0,r.kt)("h2",n({},{id:"drop-down-list-types"}),"Drop-down list types"),(0,r.kt)("p",null,"You can create different types of drop-down lists with different features. To define a type, select the appropriate ",(0,r.kt)("strong",{parentName:"p"},"Expression Type")," and ",(0,r.kt)("strong",{parentName:"p"},"Data Type")," values in the Property list, or use their JSON equivalent."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Fonctionnalit\xe9s"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Expression Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type de donn\xe9es"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"JSON definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Built upon a collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Numeric, Text, Date, or Time"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: object")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"numberFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"textFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"dateFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"timeFormat: <format>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tableau"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Built upon an array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tableau"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Numeric, Text, Date, or Time"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: arrayNumber")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayText")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayDate")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Choice list saved as value"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Built upon a choice list (standard)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"List"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Selected item value"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: text")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"saveAs: value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Choice list saved as reference"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Built upon a choice list. Item position is saved"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"List"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Selected item reference"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"saveAs: reference"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Hierarchical choice list"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Can display hierarchical contents"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"List"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"List reference"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Action standard"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Automatically built by the action"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"any")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"any except List reference")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"any definition + ",(0,r.kt)("inlineCode",{parentName:"td"},"action: <action>")," (+ ",(0,r.kt)("inlineCode",{parentName:"td"},"focusable: false")," for actions applying to other areas)")))),(0,r.kt)("h2",n({},{id:"handling-drop-down-lists"}),"Handling drop-down lists"),(0,r.kt)("h3",n({},{id:"utilisation-dun-objet"}),"Utilisation d'un objet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cette fonctionnalit\xe9 n'est disponible que dans les projets 4D.")),(0,r.kt)("p",null,"An ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/Concepts/object"}),"object")," encapsulating a ",(0,r.kt)("a",n({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," can be used as the data source of a drop-down list. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Obligatoire - Collection de valeurs scalaires. All values must be of the same type. Supported types:",(0,r.kt)("li",null,"cha\xeenes"),(0,r.kt)("li",null,"nombres"),(0,r.kt)("li",null,"dates"),(0,r.kt)("li",null,"times"),"If empty or not defined, the drop-down list is empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Index of the currently selected item (value between 0 and ",(0,r.kt)("inlineCode",{parentName:"td"},"collection.length-1"),"). If you set -1, ",(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")," is displayed as a placeholder string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"identique \xe0 Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Currently selected item (used as placeholder value if set by code)")))),(0,r.kt)("p",null,"If the object contains other properties, they are ignored."),(0,r.kt)("p",null,"To initialize the object associated to the drop-down list, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;Static List&#062;")," in the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource"}),"Data Source")," theme of the Property List. The default values are loaded into an object automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Execute code that creates the object and its properties. For example, if "myList" is the ',(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated to the drop-down list, you can write in the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/Events/onLoad"}),"On Load")," form event:"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'// Form.myDrop is the datasource of the form object\n\nForm.myDrop:=New object\nForm.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")\nForm.myDrop.index:=-1  //currentValue is a placeholder\nForm.myDrop.currentValue:="Select a fruit" \n')),(0,r.kt)("p",null,"The drop-down list is displayed with the placeholder string:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7818).Z,width:"230",height:"33"})),(0,r.kt)("p",null,"After the user selects a value:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43914).Z,width:"234",height:"116"})),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges"\nForm.myDrop.index //3\n')),(0,r.kt)("h3",n({},{id:"utiliser-un-tableau"}),"Utiliser un tableau"),(0,r.kt)("p",null,"Un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/Concepts/arrays"}),"tableau")," est une liste de valeurs gard\xe9es en m\xe9moire qui sont r\xe9f\xe9renc\xe9es par le nom du tableau. A drop-down list can display an array as a list of values when you click on it."),(0,r.kt)("p",null,"To initialize the array associated to the drop-down list, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;Static List&#062;")," in the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource"}),"Data Source")," theme of the Property List. Les valeurs par d\xe9faut sont automatiquement charg\xe9es dans un tableau. Vous pouvez faire r\xe9f\xe9rence \xe0 ce tableau par l\u2019interm\xe9diaire du nom de la variable associ\xe9e \xe0 l\u2019objet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avant que l\u2019objet ne soit affich\xe9, ex\xe9cutez une m\xe9thode qui affecte des valeurs au tableau. Par exemple :"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  ARRAY TEXT(aCities;6) \n  aCities{1}:="Philadelphia" \n  aCities{2}:="Pittsburg" \n  aCities{3}:="Grand Blanc" \n  aCities{4}:="Bad Axe" \n  aCities{5}:="Frostbite Falls" \n  aCities{6}:="Green Bay" \n')),(0,r.kt)("p",null,"In this case, the name of the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated with the object in the form must be ",(0,r.kt)("inlineCode",{parentName:"p"},"aCities"),". Ce code peut \xeatre plac\xe9 dans la m\xe9thode formulaire et \xeatre ex\xe9cut\xe9 lorsque l\u2019\xe9v\xe9nement formulaire ",(0,r.kt)("inlineCode",{parentName:"p"},"Sur chargement")," se produit."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avant que l\u2019objet ne soit affich\xe9, chargez les valeurs d\u2019une \xe9num\xe9ration dans le tableau \xe0 l\u2019aide de la commande ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY"),". Par exemple :")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'   LIST TO ARRAY("Cities";aCities)\n')),(0,r.kt)("p",null,"In this case also, the name of the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated with the object in the form must be ",(0,r.kt)("inlineCode",{parentName:"p"},"aCities"),". Ce code peut \xeatre ex\xe9cut\xe9 \xe0 la place de celui propos\xe9 plus haut."),(0,r.kt)("p",null,"Si vous voulez stocker dans un champ le choix de l\u2019utilisateur, il est n\xe9cessaire d\u2019\xe9crire du code pour affecter les valeurs et de l\u2019ex\xe9cuter apr\xe8s la validation de l\u2019enregistrement. Ce code pourrait \xeatre le suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) /Nouvel enregistrement\n          aCities:=3 /affiche une valeur par d\xe9faut\n       Else /enregistrement existant, on affiche une valeur stock\xe9e\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) /La s\xe9lection a \xe9t\xe9 modifi\xe9e\n       City:=aCities{aCities} /La nouvelle valeur est assign\xe9e au champ\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n')),(0,r.kt)("p",null,"You must select each event that you test for in your Case statement. Les tableaux contiennent toujours un nombre fini d\u2019\xe9l\xe9ments. La liste des \xe9l\xe9ments est dynamique et peut \xeatre modifi\xe9e par programmation. Les \xe9l\xe9ments d\u2019un tableau peuvent \xeatre modifi\xe9s et tri\xe9s."),(0,r.kt)("h3",n({},{id:"utiliser-une-\xe9num\xe9ration"}),"Utiliser une \xe9num\xe9ration"),(0,r.kt)("p",null,"If you want to use a drop-down list to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the drop-down list's ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"data source"),". Cette possibilit\xe9 facilite la gestion des champs/variables \xe9num\xe9r\xe9(e) s."),(0,r.kt)("p",null,'For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is possible to create a list containing these values and associate it with a drop-down list that references the 4D "Color" field. 4D se charge alors de g\xe9rer automatiquement la saisie et l\u2019affichage de la valeur courante dans le formulaire.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez une \xe9num\xe9ration hi\xe9rarchique, seul le premier niveau sera affich\xe9 et s\xe9lectionnable. If you use a hierarchical list, only the first level is displayed and can be selected.")),(0,r.kt)("p",null,"To associate a drop-down list with a field or variable, enter the name of the field or variable directly as the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," field of the drop-down list in the Property List."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'It is not possible to use this feature with an object or an array drop-down list. If you enter a field name in the "Variable or Expression" area, then you must use a choice list.')),(0,r.kt)("p",null,"When the form is executed, 4D automatically manages the drop-down list during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the drop-down list when the form is displayed:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96325).Z,width:"755",height:"171"})),(0,r.kt)("h4",n({},{id:"selected-item-value-or-selected-item-reference"}),"Selected item value or Selected item reference"),(0,r.kt)("p",null,"When you have associated a drop-down list with a choice list and with a field or a variable, you can set the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#data-type"}),(0,r.kt)("strong",{parentName:"a"},"Data Type"))," property to ",(0,r.kt)("strong",{parentName:"p"},"Selected item value")," or ",(0,r.kt)("strong",{parentName:"p"},"Selected item reference"),". Cette option permet d'optimiser la taille des donn\xe9es stock\xe9es."),(0,r.kt)("h3",n({},{id:"using-a-hierarchical-choice-list"}),"Using a hierarchical choice list"),(0,r.kt)("p",null,"A hierarchical drop-down list has a sublist associated with each item in the list. Here is an example of a hierarchical drop-down list:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(79707).Z,width:"248",height:"177"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In forms, hierarchical drop-down lists are limited to two levels.")),(0,r.kt)("p",null,"You can assign the hierarchical choice list to the drop-down list object using the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," field of the Property List."),(0,r.kt)("p",null,"You manage hierarchical drop-down lists using the ",(0,r.kt)("strong",{parentName:"p"},"Hierarchical Lists")," commands of the 4D Language. All commands that support the ",(0,r.kt)("inlineCode",{parentName:"p"},'(*; "name")')," syntax can be used with hierarchical  drop-down lists, e.g. ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page633.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"List item parent")),"."),(0,r.kt)("h3",n({},{id:"utiliser-une-action-standard"}),"Utiliser une action standard"),(0,r.kt)("p",null,"You can build automatically a drop-down list using a ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesAction#standard-action"}),"standard action"),". This feature is supported in the following contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoPage")," standard action. In this case, 4D will automatically display the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormEditor/forms#form-pages"}),"page of the form")," that corresponds to the number of the item that is selected. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). At runtime, by default the drop-down list displays the page numbers (1, 2...).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use of a standard action that displays a sublist of items, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". This feature requires that:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a styled text area (",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19/FormObjects/writeProAreaOverview"}),"4D Write Pro area")," or ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19/FormObjects/inputOverview"}),"input")," with ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19/FormObjects/propertiesText#multi-style"}),"multistyle")," property) is present in the form as the standard action target."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable"}),"focusable")," property is not set to the drop-down list. At runtime the drop-down list will display an automatic list of values, e.g. background colors. You can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature cannot be used with a hierarchical drop-down list.")),(0,r.kt)("h2",n({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesTextAndPicture#button-style"}),"Button Style")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#data-type-expression-type"}),"Data Type (expression type)")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#data-type-list"}),"Data Type (list)")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#font"}),"Font")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#not-rendered"}),"Not rendered")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#save-value"}),"Save value")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}u.isMDXComponent=!0},7818:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},43914:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},90241:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},96325:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},79707:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);