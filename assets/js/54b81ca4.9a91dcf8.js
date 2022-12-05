"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});n(67294);var o=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"shared",title:"Shared objects and collections"},l=void 0,i={unversionedId:"Concepts/shared",id:"version-18/Concepts/shared",title:"Shared objects and collections",description:"Overview",source:"@site/versioned_docs/version-18/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/18/Concepts/shared",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/Concepts/shared.md",tags:[],version:"18",frontMatter:{id:"shared",title:"Shared objects and collections"},sidebar:"docs",previous:{title:"Parameters",permalink:"/docs/18/Concepts/parameters"},next:{title:"Control flow overview",permalink:"/docs/18/Concepts/control-flow"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Using shared objects or collections",id:"using-shared-objects-or-collections",level:2},{value:"Modification",id:"modification",level:3},{value:"Read",id:"read",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],p={toc:d};function u(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Shared objects")," and ",(0,o.kt)("strong",{parentName:"p"},"shared collections")," are specific ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/18/Concepts/object"}),"objects")," and ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/18/Concepts/collection"}),"collections")," whose contents are shared between processes. In contrast to ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/18/Concepts/variables#interprocess-variables"}),"interprocess variables"),", shared objects and shared collections have the advantage of being compatible with ",(0,o.kt)("strong",{parentName:"p"},"preemptive 4D processes"),": they can be passed by reference as parameters to commands such as ",(0,o.kt)("inlineCode",{parentName:"p"},"New process")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),"."),(0,o.kt)("p",null,"Shared objects and shared collections can be stored in variables declared with standard ",(0,o.kt)("inlineCode",{parentName:"p"},"C_OBJECT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C_COLLECTION")," commands, but must be instantiated using specific commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to create a shared object, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"New shared object")," command,"),(0,o.kt)("li",{parentName:"ul"},"to create a shared collection, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"New shared collection")," command.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Shared objects and collections can be set as properties of standard (not shared) objects or collections."),(0,o.kt)("p",null,"In order to modify a shared object/collection, the ",(0,o.kt)("strong",{parentName:"p"},"Use...End use")," structure must be called. Reading a shared object/collection value does not require ",(0,o.kt)("strong",{parentName:"p"},"Use...End use"),"."),(0,o.kt)("p",null,"A unique, global catalog returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," command is always available throughout the database and its components, and can be used to store all shared objects and collections."),(0,o.kt)("h2",a({},{id:"using-shared-objects-or-collections"}),"Using shared objects or collections"),(0,o.kt)("p",null,"Once instantiated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"New shared object")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"New shared collection")," commands, shared object/collection properties and elements can be modified or read from any process of the application."),(0,o.kt)("h3",a({},{id:"modification"}),"Modification"),(0,o.kt)("p",null,"Modifications can be applied to shared objects and shared collections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"adding or removing object properties,"),(0,o.kt)("li",{parentName:"ul"},"adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below).")),(0,o.kt)("p",null,"However, all modification instructions in a shared object or collection must be surrounded by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," keywords, otherwise an error is generated."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n')),(0,o.kt)("p",null,"A shared object/collection can only be modified by one process at a time. ",(0,o.kt)("inlineCode",{parentName:"p"},"Use")," locks the shared object/collection from other threads, while the last ",(0,o.kt)("inlineCode",{parentName:"p"},"End use")," unlocks all objects and collections. Trying to modify a shared object/collection without at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," generates an error. When a process calls ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," on a shared object/collection that is already in use by another process, it is simply put on hold until the ",(0,o.kt)("inlineCode",{parentName:"p"},"End use")," unlocks it (no error is generated). Consequently, instructions within ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a dialog box."),(0,o.kt)("p",null,"Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates ",(0,o.kt)("strong",{parentName:"p"},"shared groups"),". A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Calling ",(0,o.kt)("inlineCode",{parentName:"li"},"Use")," on a shared object/collection of a group will lock properties/elements of all shared objects/collections belonging to the same group."),(0,o.kt)("li",{parentName:"ul"},"A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group."),(0,o.kt)("li",{parentName:"ul"},"Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked.")),(0,o.kt)("p",null,"Please refer to example 2 for an illustration of shared group rules."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Shared groups are managed through an internal property named ",(0,o.kt)("em",{parentName:"p"},"locking identifier"),". For detailed information on this value, please refer to the 4D Developer's guide."),(0,o.kt)("h3",a({},{id:"read"}),"Read"),(0,o.kt)("p",null,"Reading properties or elements of a shared object/collection is allowed without having to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," structure, even if the shared object/collection is in use by another process."),(0,o.kt)("p",null,"However, it is necessary to read a shared object/collection within ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," when several values are linked together and must be read at once, for consistency reasons."),(0,o.kt)("h3",a({},{id:"duplication"}),"Duplication"),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"OB Copy")," with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any)."),(0,o.kt)("h3",a({},{id:"storage"}),"Storage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Storage")," is a unique shared object, automatically available on each application and machine. This shared object is returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes."),(0,o.kt)("p",null,"Note that, unlike standard shared objects, the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," object does not create a shared group when shared objects/collections are added as its properties. This exception allows the ",(0,o.kt)("strong",{parentName:"p"},"Storage")," object to be used without locking all connected shared objects or collections."),(0,o.kt)("p",null,"For more information, refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," command description."),(0,o.kt)("h2",a({},{id:"useend-use"}),"Use...End use"),(0,o.kt)("p",null,"The formal syntax of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," Use(Shared_object_or_Shared_collection)\n    statement(s)\n End use\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," structure defines a sequence of statements that will execute tasks on the ",(0,o.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," parameter under the protection of an internal semaphore. ",(0,o.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," can be any valid shared object or shared collection."),(0,o.kt)("p",null,"Shared objects and shared collections are designed to allow communication between processes, in particular, ",(0,o.kt)("strong",{parentName:"p"},"preemptive 4D processes"),". They can be passed by reference as parameters from a process to another one. For detailed information on shared objects or shared collections, refer to the ",(0,o.kt)("strong",{parentName:"p"},"Shared objects and shared collections")," page. Surrounding modifications on shared objects or shared collections by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use...End use")," keywords is mandatory to prevent concurrent access between processes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once the ",(0,o.kt)("strong",{parentName:"li"},"Use")," line is successfully executed, all ",(0,o.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," properties/elements are locked for all other process in write access until the corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"End use")," line is executed."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"statement(s)")," sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access."),(0,o.kt)("li",{parentName:"ul"},"If another shared object or collection is added as a property of the ",(0,o.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," parameter, they become connected within the same shared group (see ",(0,o.kt)("strong",{parentName:"li"},"Using shared objects or collections"),")."),(0,o.kt)("li",{parentName:"ul"},"If another process tries to access one of the ",(0,o.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," properties or connected properties while a ",(0,o.kt)("strong",{parentName:"li"},"Use...End use")," sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"End use")," line unlocks the ",(0,o.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," properties and all objects sharing the same locking identifier."),(0,o.kt)("li",{parentName:"ul"},"Several ",(0,o.kt)("strong",{parentName:"li"},"Use...End use")," structures can be nested in the 4D code. In that case, all locks are stacked and properties/elements will be released only when the last End use call is executed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If a collection method modifies a shared collection, an internal ",(0,o.kt)("strong",{parentName:"p"},"Use")," is automatically called for this shared collection while the function is executed."),(0,o.kt)("h2",a({},{id:"example-1"}),"Example 1"),(0,o.kt)("p",null,"You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($_items;0)\n ... //fill the array with items to count\n $nbItems:=Size of array($_items)\n C_OBJECT($inventory)\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Create processes\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory object sent by reference\n End for\n')),(0,o.kt)("p",null,'In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:'),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," C_TEXT($1)\n C_TEXT($what)\n C_OBJECT($2)\n C_OBJECT($inventory)\n $what:=$1 //for better readability\n $inventory:=$2\n\n $count:=CountMethod($what) //method to count products\n Use($inventory) //use shared object\n    $inventory[$what]:=$count  //save the results for this item\n End use\n")),(0,o.kt)("h2",a({},{id:"example-2"}),"Example 2"),(0,o.kt)("p",null,"The following examples highlight specific rules when handling shared groups:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //group 1 is created\n End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //group 2 is created\n End use\n\n Use($ob1) //use an object from group 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 already belongs to another group\n  //assignment is not allowed\n End use\n\n Use($ob3)\n    $ob3.a:=Null //remove any reference to $ob4 from group 2\n End use\n\n Use($ob1) //use an object from group 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 still belongs to group 2\n  //assignment is not allowed\n End use\n")))}u.isMDXComponent=!0}}]);