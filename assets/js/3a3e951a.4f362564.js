"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={id:"collection",title:"Collection"},i=void 0,c={unversionedId:"Concepts/collection",id:"version-18/Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null).",source:"@site/versioned_docs/version-18/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/18/Concepts/collection",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Concepts/dt_collection.md",tags:[],version:"18",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/18/Concepts/boolean"},next:{title:"Date",permalink:"/docs/18/Concepts/date"}},s={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Regular or shared collection",id:"regular-or-shared-collection",level:3},{value:"Collection methods",id:"collection-methods",level:2},{value:"propertyPath parameter",id:"propertypath-parameter",level:3}],u={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null)."),(0,o.kt)("p",null,"To manage Collection type variables you must use object notation (see ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/18/Concepts/object#syntax-basics"}),"Syntax basics"),")."),(0,o.kt)("p",null,"To access a collection element, you need to pass the element number inside square brackets:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,o.kt)("p",null,"You can pass any valid 4D expression which returns a positive integer in expression. Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //access to 6th element of the collection\n myCollection[$var]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Collection elements are numbered from 0."),(0,o.kt)("p",null,"You can assign a value to a collection element or get a collection element value using object notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,o.kt)("p",null,"If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,o.kt)("h2",r({},{id:"initialization"}),"Initialization"),(0,o.kt)("p",null,"Collections must have been initialized, for example using the ",(0,o.kt)("inlineCode",{parentName:"p"},"New collection")," command, otherwise trying to read or modify their elements will generate a syntax error."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_COLLECTION($colVar) //creation of collection type 4D variable\n $colVar:=New collection //initialization of the collection and assignment to the 4D variable\n")),(0,o.kt)("h3",r({},{id:"regular-or-shared-collection"}),"Regular or shared collection"),(0,o.kt)("p",null,"You can create two types of collections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"regular (non-shared) collections, using the ",(0,o.kt)("inlineCode",{parentName:"li"},"New collection")," command. These collections can be edited without any specific access control but cannot be shared between processes."),(0,o.kt)("li",{parentName:"ul"},"shared collections, using the ",(0,o.kt)("inlineCode",{parentName:"li"},"New shared collection")," command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"Use...End use")," structures.\nFor more information, refer to the ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/18/Concepts/shared"}),"Shared objects and collections")," section.")),(0,o.kt)("h2",r({},{id:"collection-methods"}),"Collection methods"),(0,o.kt)("p",null,"4D collection references benefit from special methods (sometimes named ",(0,o.kt)("em",{parentName:"p"},"member functions"),"). Thanks to object notation, these methods can be applied to collection references using the following syntax:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"{$result:=}myCollection.memberFunction( {params} )")),(0,o.kt)("p",null,"Note that, even if it does not have parameters, a member function must be called with () parenthesis, otherwise a syntax error is generated."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //deep copy of $col to $newCol\n$col.push(10;100) //add 10 and 100 to the collection\n")),(0,o.kt)("p",null,"Some methods return the original collection after modification, so that you can run the calls in a sequence:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,o.kt)("h3",r({},{id:"propertypath-parameter"}),"propertyPath parameter"),(0,o.kt)("p",null,"Several methods accept a ",(0,o.kt)("em",{parentName:"p"},"propertyPath")," as parameter. This parameter stands for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'either an object property name, for example "lastName"'),(0,o.kt)("li",{parentName:"ul"},'or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:"),' When using methods and propertyPath parameters, you cannot use ".", "',"[ ]",'", or spaces in property names since it will prevent 4D from correctly parsing the path:'),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //error\n')))}m.isMDXComponent=!0}}]);