"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,h=u["".concat(d,".").concat(p)]||u[p]||c[p]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"creating-using-macros",title:"Cr\xe9er et utiliser des macros"},l=void 0,d={unversionedId:"code-editor/creating-using-macros",id:"version-19-R7/code-editor/creating-using-macros",title:"Cr\xe9er et utiliser des macros",description:"Vous pouvez utiliser des macro-commandes dans vos m\xe9thodes. Les macro-commandes permettent de gagner beaucoup de temps lors de la saisie de code.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/docs/fr/code-editor/creating-using-macros",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/code-editor/creating-using-macros.md",tags:[],version:"19-R7",frontMatter:{id:"creating-using-macros",title:"Cr\xe9er et utiliser des macros"},sidebar:"docs",previous:{title:"Chercher et remplacer",permalink:"/docs/fr/code-editor/find-replace"},next:{title:"Balises de transformation",permalink:"/docs/fr/Tags/tags"}},s={},m=[{value:"Qu\u2019est-ce qu\u2019une macro ?",id:"quest-ce-quune-macro-",level:2},{value:"Emplacement des macros",id:"emplacement-des-macros",level:2},{value:"Macros par d\xe9faut",id:"macros-par-d\xe9faut",level:2},{value:"Adding customized macros",id:"adding-customized-macros",level:2},{value:"Checking the syntax of customized macros",id:"checking-the-syntax-of-customized-macros",level:3},{value:"Syntax of 4D macros",id:"syntax-of-4d-macros",level:2},{value:"About the <code>&lt;method&gt;</code> tag",id:"about-the-method-tag",level:2},{value:"Calling macros",id:"calling-macros",level:2},{value:"Context menu and toolbar",id:"context-menu-and-toolbar",level:3},{value:"Autocomplete",id:"autocomplete",level:3},{value:"Code Editor list",id:"code-editor-list",level:3},{value:"Compatibility notes",id:"compatibility-notes",level:2},{value:"Text selection variables for methods",id:"text-selection-variables-for-methods",level:3},{value:"Incompatibilities related to the XML standard",id:"incompatibilities-related-to-the-xml-standard",level:3}],c={toc:m};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vous pouvez utiliser des macro-commandes dans vos m\xe9thodes. Les macro-commandes permettent de gagner beaucoup de temps lors de la saisie de code."),(0,n.kt)("h2",r({},{id:"quest-ce-quune-macro-"}),"Qu\u2019est-ce qu\u2019une macro ?"),(0,n.kt)("p",null,"Une macro-commande est une partie de code 4D accessible en permanence et pouvant \xeatre ins\xe9r\xe9e \xe0 tout endroit de vos m\xe9thodes, quelle que soit la base ouverte. Les macro-commandes peuvent contenir tout type de texte, des commandes et des constantes 4D, ainsi que des balises sp\xe9ciales, remplac\xe9es au moment de l\u2019insertion de la macro par des valeurs issues du contexte de la m\xe9thode. Par exemple, une macro-commande peut contenir la balise ",(0,n.kt)("inlineCode",{parentName:"p"},"<method_name/>;")," au moment de son insertion, cette balise sera remplac\xe9e par le nom de la m\xe9thode projet courante."),(0,n.kt)("p",null,"Les macro-commandes sont stock\xe9es dans un ou plusieurs fichier(s) au format XML (texte). Elles peuvent \xeatre affich\xe9es dans une liste de l\u2019\xe9diteur de code; elle peuvent \xe9galement \xeatre appel\xe9es \xe0 l\u2019aide du menu contextuel de l\u2019\xe9diteur ou \xe0 l\u2019aide de la fonction de saisie pr\xe9dictive."),(0,n.kt)("p",null,"Les macro-commandes de 4D sont \xe9crites au format XML. Vous pouvez utiliser \u201ctel quel\u201d le fichier de macro-commandes par d\xe9faut de 4D ou le modifier."),(0,n.kt)("h2",r({},{id:"emplacement-des-macros"}),"Emplacement des macros"),(0,n.kt)("p",null,"4D charge les macros \xe0 partir d\u2019un dossier nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Macros v2"),". Les macros doivent \xeatre pr\xe9sentes sous forme d\u2019un ou plusieurs fichiers XML plac\xe9s dans ce dossier."),(0,n.kt)("p",null,"Le dossier \u201cMacros v2\u201d peut \xeatre situ\xe9 :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dans le dossier 4D actif de la machine. Les macros sont alors partag\xe9es pour toutes les bases. ",(0,n.kt)("strong",{parentName:"li"},"Note :")," L\u2019emplacement du dossier 4D actif varie en fonction du syst\xe8me d\u2019exploitation. Pour plus d\u2019informations, reportez-vous \xe0 la description de la commande ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html"}),"Get 4D folder")," dans le ",(0,n.kt)("em",{parentName:"li"},"manuel Langage de 4D"),"."),(0,n.kt)("li",{parentName:"ul"},"A c\xf4t\xe9 du fichier de structure de la base. Les macros ne sont charg\xe9es que pour cette structure."),(0,n.kt)("li",{parentName:"ul"},"Pour les composants : dans le dossier ",(0,n.kt)("strong",{parentName:"li"},"Components")," de la base. Les macros ne sont alors charg\xe9es que si le composant est install\xe9.")),(0,n.kt)("p",null,"Ces trois emplacements peuvent \xeatre utilis\xe9s simultan\xe9ment : il est possible d\u2019installer un dossier \u201cMacros v2\u201d \xe0 chaque emplacement. Les macros seront charg\xe9es dans l\u2019ordre suivant : dossier 4D, fichier de structure, composant 1... composant N."),(0,n.kt)("h2",r({},{id:"macros-par-d\xe9faut"}),"Macros par d\xe9faut"),(0,n.kt)("p",null,'4D offers a set of default macros corresponding, in particular, to the list of keywords in previous versions of 4D. These macros are included in the default "',(0,n.kt)("em",{parentName:"p"},"Macros.xml"),'" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.'),(0,n.kt)("p",null,"You can modify this file or the contents of the folder subsequently as desired (see the following paragraph). In the event of problems with this folder, it can be deleted and 4D will re-create it on the next startup."),(0,n.kt)("h2",r({},{id:"adding-customized-macros"}),"Adding customized macros"),(0,n.kt)("p",null,'You can add customized macros in the "Macros.xml" file using a standard text editor or by programming. You can also add XML files of customized macros in this folder.'),(0,n.kt)("p",null,"In local mode, the macros file can be open while using 4D. The list of available macros is updated on each event activating 4D. For instance, it is possible to bring the text editor to the foreground, modify the macro file, then return to the method: the new macro is then available in the Code Editor."),(0,n.kt)("p",null,"Empty or erroneous macros are not displayed."),(0,n.kt)("h3",r({},{id:"checking-the-syntax-of-customized-macros"}),"Checking the syntax of customized macros"),(0,n.kt)("p",null,"The macro-command files of 4D must be in conformity with the XML standard. This means more particularly that XML declaration ",(0,n.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" ...?>')," and document declaration ",(0,n.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">')," statements are mandatory at the beginning of a macro file in order for it to be loaded. The different types of XML encoding are supported. However, it is recommended to use encoding that is Mac/PC (UTF-8) compatible. 4D provides a DTD that can be used to validate the macro files. This file is found in the following location:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows: \\Resources\\DTD\\macros.dtd"),(0,n.kt)("li",{parentName:"ul"},"Mac OS: :Contents:Resources:DTD:macros.dtd")),(0,n.kt)("p",null,"If a macros file does not contain the declaration statements or cannot be validated, it is not loaded."),(0,n.kt)("h2",r({},{id:"syntax-of-4d-macros"}),"Syntax of 4D macros"),(0,n.kt)("p",null,'4D macros are built using customized XML tags called "elements."'),(0,n.kt)("p",null,"Some tags indicate the start and end of the definition (double tags of the type ",(0,n.kt)("inlineCode",{parentName:"p"},"<tag> </tag>"),"), others are replaced by insertion context values (",(0,n.kt)("inlineCode",{parentName:"p"},"<tag/>"),")."),(0,n.kt)("p",null,"In conformity with XML specifications, some element tags can include attributes. Unless otherwise indicated, these attributes are optional and a default value is used when they are omitted. The syntax of elements with attributes is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Double tags: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"> </macro>')),(0,n.kt)("li",{parentName:"ul"},"Single tags: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"/>'))),(0,n.kt)("p",null,"If the element accepts several attributes, you can group them in the same line of command, separated by a space: ",(0,n.kt)("inlineCode",{parentName:"p"},'\\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;')),(0,n.kt)("p",null,"Here is the list of tags and their mode of use:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Element tags")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros> </macros>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Start and end of macro file (mandatory tag).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macro> </macro>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Start and end of the definition of a macro and its attributes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Attributes"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- name: Name**of macro as it appears in menus and Code Editor lists (mandatory attribute).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- type_ahead_text: Character string*",(0,n.kt)("em",{parentName:"td"}," to be entered to call the macro using the type-ahead (aka autocomplete) function"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- in_menu: Boolean indicating whether the macro can be called using the context menu*. Values = "true" (default) or "false."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- type_ahead: Boolean indicating whether the macro can be called using the type-ahead (aka autocomplete) function*. Values = "true" (default) or "false."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- method_event: Used to trigger the automatic calling of the macro depending on the current handling phase of each method (creation, closing, and so on). Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"on_save" and "on_close" can be used jointly --- in other words, both of these events are generated when a modified method is closed. On the other hand, "on_create" and "on_load" are never generated in a consecutive manner. This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- version: Used to activate the new mode of supporting text selections for the macro (see the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below). To activate this new mode, pass the value "2". If you omit this attribute or pass version="1", the former mode is kept.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Values= "true" (default) or "false".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<selection/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the selected text when the macro is inserted. The selection may be empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text> </text>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Start and end of code that must be inserted in the method. A carriage return will be added before and after the code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method> </method>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Start and end of the name of the project method and its (optional) parameter. The method is executed when the macro is called. You can pass a parameter in the form ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<caret/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Location of the insertion point in the code after the macro has been inserted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_4D/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the name of the current 4D user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_os/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the current system user name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_name/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the current project method name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_path/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by full pathname of the current project method.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<date/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the current date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Attribute"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- format: 4D format used to display the date. If no format is set, the default format is used. Values = number of 4D format (0 to 8).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<time/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the current time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Attribute"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- format: 4D format used to display the time. If no format is set, the default format is used. Values = number of 4D format (0 to 6).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<clipboard/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tag replaced by the contents of the clipboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Attribute"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- index: Clipboard to be pasted. Values = number of the clipboard (0 to 9).")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).\\\n** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.)."),(0,n.kt)("li",{parentName:"ul"},"If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).")),(0,n.kt)("p",null,"Here is an example of a macro definition:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Content of macro")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Commentaires")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<?xml version="1.0"...?>')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML declaration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<!DOCTYPE macros SYSTEM>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Document declaration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Start of macros XML file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<macro name="RecordLoop">')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Start of macro definition and name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Start of macro code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"For($i;1;Records in selection(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),"))"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>")," tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SAVE RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"NEXT RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"End for"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</text>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"End of macro code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macro>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"End of macro definition")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macros>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"End of macros XML file")))),(0,n.kt)("h2",r({},{id:"about-the-method-tag"}),"About the ",(0,n.kt)("inlineCode",{parentName:"h2"},"<method>")," tag"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<method>")," tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the\xa0",(0,n.kt)("em",{parentName:"p"},"MyMethod"),"\xa0method to be executed with the name of the current method as parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<method>MyMethod("<method_name/>")</method>')),(0,n.kt)("p",null,"The code of a called method is executed in a new process. This process is killed once the method is executed."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\xa0The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the\xa0",(0,n.kt)("strong",{parentName:"p"},"Ctrl+F8"),"\xa0(Windows) or\xa0",(0,n.kt)("strong",{parentName:"p"},"Command+F8"),'\xa0(Mac OS) command to "kill" the process.')),(0,n.kt)("h2",r({},{id:"calling-macros"}),"Calling macros"),(0,n.kt)("p",null,"By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window."),(0,n.kt)("p",null,"Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function."),(0,n.kt)("h3",r({},{id:"context-menu-and-toolbar"}),"Context menu and toolbar"),(0,n.kt)("p",null,"By default, all macros can be called via the context menu of the Code Editor (using the\xa0",(0,n.kt)("strong",{parentName:"p"},"Insert macro"),"\xa0hierarchical command) or the ",(0,n.kt)("strong",{parentName:"p"},"Macros")," button of the toolbar."),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("em",{parentName:"p"},"in_menu"),"\xa0attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag is used to set whether or not the macro appears in this menu."),(0,n.kt)("p",null,'In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. It is thus possible to change the order by modifying these files.'),(0,n.kt)("h3",r({},{id:"autocomplete"}),"Autocomplete"),(0,n.kt)("p",null,"By default, all macros are accessible using the autocomplete (aka type-ahead) function (see\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/code-editor/write-class-method"}),"Writing a method"),"). The\xa0",(0,n.kt)("em",{parentName:"p"},"type_ahead"),"\xa0attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag can be used to exclude a macro from this type of operation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),"\xa0If the macro contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"<selection/>")," tag, it will not appear in the autocomplete pop-up window."),(0,n.kt)("h3",r({},{id:"code-editor-list"}),"Code Editor list"),(0,n.kt)("p",null,"You can display your macros in a list of the Code Editor (see\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/fr/code-editor/write-class-method"}),"Writing a method"),"). Simply double-click on the name of a macro in the list in order to call it. It is not possible to exclude a specific macro from this list."),(0,n.kt)("h2",r({},{id:"compatibility-notes"}),"Compatibility notes"),(0,n.kt)("p",null,"Macro support can change from one version of 4D to another. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly."),(0,n.kt)("h3",r({},{id:"text-selection-variables-for-methods"}),"Text selection variables for methods"),(0,n.kt)("p",null,"It is recommended to manage text selections using the\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html"}),"GET MACRO PARAMETER"),"and\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html"}),"SET MACRO PARAMETER"),"\xa0commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html"}),"GET MACRO PARAMETER"),"and\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html"}),"SET MACRO PARAMETER"),"\xa0are used. This attribute must be declared as follows:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<macro name="MyMacro" version="2">'),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"--- Text of the macro ---"),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"</macro>")),(0,n.kt)("p",null,"If you do not pass this attribute, the previous mode is kept."),(0,n.kt)("h3",r({},{id:"incompatibilities-related-to-the-xml-standard"}),"Incompatibilities related to the XML standard"),(0,n.kt)("p",null,"Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. The following are the main sources of malfunctioning:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Comments of the "// my comment" type, allowed inside ',(0,n.kt)("inlineCode",{parentName:"li"},"<macro>")," elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard ",(0,n.kt)("inlineCode",{parentName:"li"},'"\x3c!-- my comment --\x3e"')," form."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"<>")," symbols used more particularly for interprocess object names must be encoded. For example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"<>params")," variable must be written ",(0,n.kt)("inlineCode",{parentName:"li"},"&lt;>params"),"."),(0,n.kt)("li",{parentName:"ul"},"The initial ",(0,n.kt)("inlineCode",{parentName:"li"},"<macros>")," declaration tag could be omitted in previous versions of 4D. It is now mandatory; otherwise, the file will not be loaded.")))}u.isMDXComponent=!0}}]);