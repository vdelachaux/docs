"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"identifiers",title:"Identificadores"},l=void 0,i={unversionedId:"Concepts/identifiers",id:"version-19/Concepts/identifiers",title:"Identificadores",description:"This section describes the conventions and rules for naming various elements in the 4D language (variables, object properties, tables, forms, etc.).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/pt/19/Concepts/identifiers",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19/Concepts/identifiers.md",tags:[],version:"19",frontMatter:{id:"identifiers",title:"Identificadores"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/pt/19/Concepts/plug-ins"},next:{title:"Pathnames",permalink:"/docs/pt/19/Concepts/paths"}},c={},p=[{value:"Arrays",id:"arrays",level:2},{value:"Classes",id:"classes",level:2},{value:"Fun\xe7\xf5es",id:"fun\xe7\xf5es",level:2},{value:"Propriedades dos objectos",id:"propriedades-dos-objectos",level:2},{value:"Par\xe2metros",id:"par\xe2metros",level:2},{value:"M\xe9todos projeto",id:"m\xe9todos-projeto",level:2},{value:"Tables and Fields",id:"tables-and-fields",level:2},{value:"Vari\xe1veis",id:"vari\xe1veis",level:2},{value:"Outros nomes",id:"outros-nomes",level:2}],m={toc:p};function d(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes the conventions and rules for naming various elements in the 4D language (variables, object properties, tables, forms, etc.)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.")),(0,n.kt)("h2",r({},{id:"arrays"}),"Arrays"),(0,n.kt)("p",null,"Array names follow the same rules as ",(0,n.kt)("a",r({parentName:"p"},{href:"#variables"}),"variables"),"."),(0,n.kt)("h2",r({},{id:"classes"}),"Classes"),(0,n.kt)("p",null,"The name of a class can contain up to 31 characters."),(0,n.kt)("p",null,"A class name must be compliant with standard ",(0,n.kt)("a",r({parentName:"p"},{href:"#object-properties"}),"property naming rules")," for dot notation."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Giving the same name to a class and a ",(0,n.kt)("a",r({parentName:"p"},{href:"#tables"}),"database table")," is not recommended, in order to prevent any conflict.")),(0,n.kt)("h2",r({},{id:"fun\xe7\xf5es"}),"Fun\xe7\xf5es"),(0,n.kt)("p",null,"Function names must be compliant with standard ",(0,n.kt)("a",r({parentName:"p"},{href:"#object-properties"}),"property naming rules")," for dot notation."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Tip:"),' Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.')),(0,n.kt)("h2",r({},{id:"propriedades-dos-objectos"}),"Propriedades dos objectos"),(0,n.kt)("p",null,"The name of an object property (also called object ",(0,n.kt)("em",{parentName:"p"},"attribute"),") can contain up to 255 characters."),(0,n.kt)("p",null,"Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules ",(0,n.kt)("strong",{parentName:"p"},"if you want to use the ",(0,n.kt)("a",r({parentName:"strong"},{href:"/docs/pt/19/Concepts/object#object-properties"}),"dot notation")),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'A property name must begin with a letter, an underscore, or a dollar "$".'),(0,n.kt)("li",{parentName:"ul"},'Thereafter, the name can include any letter, digit, the underscore character ("_"), or the dollar character ("$").'),(0,n.kt)("li",{parentName:"ul"},"Property names are case sensitive.")),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you use ",(0,n.kt)("strong",{parentName:"p"},"string notation")," within square brackets, property names can contain any characters (ex: ",(0,n.kt)("inlineCode",{parentName:"p"},'myObject["1. First property"]'),").")),(0,n.kt)("p",null,"See also ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6"}),"ECMA Script standard"),"."),(0,n.kt)("h2",r({},{id:"par\xe2metros"}),"Par\xe2metros"),(0,n.kt)("p",null,"Parameter names must start with a ",(0,n.kt)("inlineCode",{parentName:"p"},"$")," character and follow the same rules as ",(0,n.kt)("a",r({parentName:"p"},{href:"#variables"}),"variable names"),"."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n")),(0,n.kt)("h2",r({},{id:"m\xe9todos-projeto"}),"M\xe9todos projeto"),(0,n.kt)("p",null,"The name of a project method name contain up to 31 characters."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A project method name must begin with a letter, a digit, or an underscore"),(0,n.kt)("li",{parentName:"ul"},'Thereafter, the name can include any letter or digit, the underscore character ("_"), or the space character.'),(0,n.kt)("li",{parentName:"ul"},"Do not use reserved names, i.e. 4D command names (",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (",(0,n.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"For"),", etc.), or constant names (",(0,n.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Friday"),", etc.)."),(0,n.kt)("li",{parentName:"ul"},"Project method names are case insensitive.")),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If(New client)\nDELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dica:")," \xe9 uma boa t\xe9cnica de programa\xe7\xe3o adotar a mesma conven\xe7\xe3o de nomenclatura que a utilizada por 4D para os m\xe9todos integrados. Use uppercase characters for naming your methods; however if a method returns a value, capitalize the first character of its name. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Quando chamar um m\xe9todo, apenas digite seu nome. However, some 4D built-in commands, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),", as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.")),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //This command expects a method (function) or formula QUERY BY FORMULA([aTable];Special query)\n //This command expects a method (procedure) or statement APPLY TO SELECTION([Employees];INCREASE SALARIES)\n //But this command expects a method name ON EVENT CALL("HANDLE EVENTS")\n')),(0,n.kt)("h2",r({},{id:"tables-and-fields"}),"Tables and Fields"),(0,n.kt)("p",null,"You designate a table by placing its name between brackets: ","[","...]. You designate a field by first specifying the table to which it belongs (the field name immediately follows the table name)."),(0,n.kt)("p",null,"A table name and field name can contain up to 31 characters."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'A table or field name must begin with a letter, an underscore, or a dollar ("$")'),(0,n.kt)("li",{parentName:"ul"},'Depois disso, o nome pode incluir caracteres alfab\xe9ticos, num\xe9ricos, o caractere espa\xe7o e o caractere de sublinhado/tra\xe7o baixo ("_") .'),(0,n.kt)("li",{parentName:"ul"},"Do not use reserved names, i.e. 4D command names (",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (",(0,n.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"For"),", etc.), or constant names (",(0,n.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Friday"),", etc.)."),(0,n.kt)("li",{parentName:"ul"},"Additional rules must be respected when the database must be handled via SQL: only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted, and the name must not include any SQL keywords (command, attribute, etc.).")),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Giving the same name to a table and a ",(0,n.kt)("a",r({parentName:"p"},{href:"#classes"}),"class")," is not recommended, in order to prevent any conflict.")),(0,n.kt)("h2",r({},{id:"vari\xe1veis"}),"Vari\xe1veis"),(0,n.kt)("p",null,"The name of a variable can be up to 31 characters, not including the scope symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),")."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'A variable name must begin with a letter, an underscore, or a dollar ("$") for ',(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/Concepts/parameters"}),"parameters")," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/Concepts/variables#local-variables"}),"local variables"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"<>")," for ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/Concepts/variables#interprocess-variables"}),"interprocess variables"),"."),(0,n.kt)("li",{parentName:"ul"},"A digit as first character is allowed but not recommended, and is not supported by the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/Concepts/variables#using-the-var-keyword"}),(0,n.kt)("inlineCode",{parentName:"a"},"var")," declaration syntax"),"."),(0,n.kt)("li",{parentName:"ul"},'Thereafter, the name can include any letter or digit, and the underscore character ("_").'),(0,n.kt)("li",{parentName:"ul"},"Space character is allowed but not recommended, and is not supported by the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/Concepts/variables#using-the-var-keyword"}),(0,n.kt)("inlineCode",{parentName:"a"},"var")," declaration syntax"),"."),(0,n.kt)("li",{parentName:"ul"},"Do not use reserved names, i.e. 4D command names (",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (",(0,n.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"For"),", etc.), or constant names (",(0,n.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Friday"),", etc.)."),(0,n.kt)("li",{parentName:"ul"},"Variable names are case insensitive.")),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'For($vlRecord;1;100) //local variable\n$vsMyString:="Hello there" //local variable\nvar $vName; $vJob : Text //local variales If(bValidate=1) //process variable\n<>vlProcessID:=Current process() //interprocess variable\n')),(0,n.kt)("h2",r({},{id:"outros-nomes"}),"Outros nomes"),(0,n.kt)("p",null,"In the 4D language, several elements have their names handled as strings: ",(0,n.kt)("strong",{parentName:"p"},"forms"),", ",(0,n.kt)("strong",{parentName:"p"},"form objects"),", ",(0,n.kt)("strong",{parentName:"p"},"named selections"),", ",(0,n.kt)("strong",{parentName:"p"},"processes"),", ",(0,n.kt)("strong",{parentName:"p"},"sets"),", ",(0,n.kt)("strong",{parentName:"p"},"menu bars"),", etc."),(0,n.kt)("p",null,"Such string names can contain up to 255 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," characters (if any)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"String names can contain any characters."),(0,n.kt)("li",{parentName:"ul"},"String names are case insensitive.")),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'DIALOG([Storage];"Note box"+String($vlStage))\nOBJECT SET FONT(*;"Binfo";"Times")\nUSE NAMED SELECTION([Customers];"Closed")//Process Named Selection USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection\n //Starting the global process "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Starting the local process "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\nCREATE SET([Customers];"Customer Orders")//Process set USE SET("<>Deleted Records") //Interprocess set If(Records in set("$Selection"+String($i))>0) //Client set\n\n')))}d.isMDXComponent=!0}}]);