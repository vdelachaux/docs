"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25847],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),N=p(n),k=l,s=N["".concat(d,".").concat(k)]||N[k]||u[k]||r;return n?a.createElement(s,o(o({ref:e},m),{},{components:n})):a.createElement(s,o({ref:e},m))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=N;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},139:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>o,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={id:"overview",title:"Overview"},i=void 0,d={unversionedId:"Events/overview",id:"version-19-R7/Events/overview",title:"Overview",description:"Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs.",source:"@site/versioned_docs/version-19-R7/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/Events/overview",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Web Area",permalink:"/docs/FormObjects/propertiesWebArea"},next:{title:"On Activate",permalink:"/docs/Events/onActivate"}},p={},m=[{value:"Event object",id:"event-object",level:2},{value:"Events and Methods",id:"events-and-methods",level:2},{value:"Call Table",id:"call-table",level:2}],u={toc:m};function N(t){var{components:e}=t,n=r(t,["components"]);return(0,a.kt)("wrapper",l({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs. "),(0,a.kt)("p",null,"In your code, you control the events using the ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event")," command, that returns the triggered event. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"//code of a button\nIf(FORM Event.code=On Clicked) \n// do something when the button is clicked\nEnd if\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur. ")),(0,a.kt)("h2",l({},{id:"event-object"}),"Event object"),(0,a.kt)("p",null,"Each event is returned as an object by the ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event")," command. By default, it contains the following properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"objectName"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Name of the object triggering the event - Not included if the event is triggered by the form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"longint"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Numeric value of the form event. Also returned by the ",(0,a.kt)("inlineCode",{parentName:"td"},"Form event code")," command")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),'Name of the form event (e.g. "On After Edit")')))),(0,a.kt)("p",null,"Additional properties are returned when the event occurs on specific objects. In particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"/docs/FormObjects/listboxOverview#supported-form-events"}),"list boxes")," and ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/FormObjects/listboxOverview#supported-form-events-1"}),"list box columns")," return ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/FormObjects/listboxOverview#additional-properties"}),"additional properties")," such as ",(0,a.kt)("inlineCode",{parentName:"li"},"columnName")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"isRowSelected"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"/docs/FormObjects/viewProAreaOverview"}),"4D View Pro areas")," return for example ",(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," properties in the ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/Events/onAfterEdit"}),"On After Edit")," event object.  ")),(0,a.kt)("h2",l({},{id:"events-and-methods"}),"Events and Methods"),(0,a.kt)("p",null,"When a form event occurs, 4D performs the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected."),(0,a.kt)("li",{parentName:"ul"},"Second, it calls the form method if the corresponding form event property has been selected.")),(0,a.kt)("p",null,"Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform\u2019s list form are called, then the form method of the list form is called. 4D then continues to call the object methods of the parent form. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object."),(0,a.kt)("p",null,"Except for the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/Events/onLoad"}),"On Load")," and ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/Events/onUnload"}),"On Unload")," events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties."),(0,a.kt)("p",null,"The number of objects involved in an event depends on the nature of the event. "),(0,a.kt)("h2",l({},{id:"call-table"}),"Call Table"),(0,a.kt)("p",null,"The following table summarizes how object and form methods are called for each event type:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Event"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Object Methods"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Form Method"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Which Objects"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Load"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Unload"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Validate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Clicked"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Double Clicked"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Before Keystroke"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On After Keystroke"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On After Edit"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Getting Focus"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Losing Focus"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Activate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Deactivate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Outside Call"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Page Change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Begin Drag Over"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Drop"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Drag Over"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Enter"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Move"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Leave"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Mouse Up"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Menu Selected"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Bound variable change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Data Change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Plug in Area"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Header"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Printing Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Printing Break"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Printing Footer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Close Box"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Display Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Open Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None except List boxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Close Detail"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None except List boxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Resize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Selection Change"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Load Record"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Timer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Scroll"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Before Data Entry"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Column Moved"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Row Moved"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Column Resize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box and 4D View Pro Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Header Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box and 4D View Pro Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Footer Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On After Sort"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Long Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Button)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Alternative Click"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Button and List box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Expand"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Hier. list and list box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Collapse"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Hier. list and list box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Delete Action"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Hier. list and list box)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On URL Resource Loading"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Begin URL Loading"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On URL Loading Error"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On URL Filtering"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On End URL Loading"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Open External Link"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Window Opening Denied"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (Web Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On VP Range Changed"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (4D View Pro Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On VP Ready"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (4D View Pro Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"On Row Resize"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Yes (4D View Pro Area)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Never"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Involved object only")))),(0,a.kt)("p",null,"Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"WARNING: The ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/Events/onLoad"}),"On Load")," and ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/Events/onUnload"}),"On Unload")," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.")))}N.isMDXComponent=!0}}]);