"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77594],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},53559:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={id:"date",title:"Date"},o=void 0,p={unversionedId:"Concepts/date",id:"version-19-R6/Concepts/date",title:"Date",description:"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.",source:"@site/versioned_docs/version-19-R6/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/19-R6/Concepts/date",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/19-R6/Concepts/collection"},next:{title:"Null and Undefined",permalink:"/docs/19-R6/Concepts/null-undefined"}},u={},d=[{value:"Date literals",id:"date-literals",level:2},{value:"Date operators",id:"date-operators",level:2}],m={toc:d};function s(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767."),(0,n.kt)("p",null,"Although the representation mode for dates by can work with dates up to the year 32 767, certain operations passing through the system impose a lower limit.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.  "),(0,n.kt)("h2",r({},{id:"date-literals"}),"Date literals"),(0,n.kt)("p",null,"A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n")),(0,n.kt)("p",null,"A null date is specified by ",(0,n.kt)("em",{parentName:"p"},"!00-00-00!"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tip:")," The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For compatibility reasons, 4D accepts two-digit years to be entered. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ",(0,n.kt)("inlineCode",{parentName:"li"},"SET DEFAULT CENTURY")," command."),(0,n.kt)("li",{parentName:"ul"},'If you have checked the "Use regional system settings" option (see Methods Page), you must use the date format defined in your system. Generally, in a US environment, dates are entered in the form month/day/year, with a slash "/" separating the values.\n')),(0,n.kt)("h2",r({},{id:"date-operators"}),"Date operators"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operation"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Syntax"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Returns"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date difference"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date \u2013 Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Day addition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date + Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! + 9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-29!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Day subtraction"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date \u2013 Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! - 9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-11!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Equality"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date = Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01! =!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! = !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inequality"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date # Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! # !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! # !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Greater than"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date > Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! > !2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! > !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Less than"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date < Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01! < !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! < !2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Greater than or equal to"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date >= Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20! >=!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01!>=!2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Less than or equal to"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date \\<= Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-01!\\<=!2017-01-20!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"!2017-01-20!\\<=!2017-01-01!"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))))}s.isMDXComponent=!0}}]);