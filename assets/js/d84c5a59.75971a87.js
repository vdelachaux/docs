"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"stepper",title:"Stepper"},p=void 0,s={unversionedId:"FormObjects/stepper",id:"version-18/FormObjects/stepper",title:"Stepper",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/stepper.md",sourceDirName:"FormObjects",slug:"/FormObjects/stepper",permalink:"/docs/18/FormObjects/stepper",draft:!1,tags:[],version:"18",frontMatter:{id:"stepper",title:"Stepper"},sidebar:"docs",previous:{title:"Static picture",permalink:"/docs/18/FormObjects/staticPicture"},next:{title:"Subform",permalink:"/docs/18/FormObjects/subformOverview"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Using steppers",id:"using-steppers",level:2},{value:"Supported Properties",id:"supported-properties",level:2},{value:"See also",id:"see-also",level:2}],m={toc:l};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",n({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",n({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"A stepper lets the user scroll through numeric values, durations (times) or dates by predefined steps by clicking on the arrow buttons."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(16144).Z,width:"285",height:"61"})),(0,o.kt)("h2",n({},{id:"using-steppers"}),"Using steppers"),(0,o.kt)("p",null,"You can assign the variable associated with the object to an enterable area (field or variable) to store or modify the current value of the object."),(0,o.kt)("p",null,"A stepper can be associated directly with a number, time or date variable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For values of the time type, the Minimum, Maximum and Step properties represent seconds. For example, to set a stepper from 8:00 to 18:00 with 10-minute steps:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/18/FormObjects/propertiesScale#minium"}),"minimum")," = 28 800 (8",(0,o.kt)("em",{parentName:"li"},"60"),"60)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/18/FormObjects/propertiesScale#maximum"}),"maximum")," = 64 800 (18",(0,o.kt)("em",{parentName:"li"},"60"),"60)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/18/FormObjects/propertiesScale#step"}),"step")," = 600 (10*60)"))),(0,o.kt)("li",{parentName:"ul"},"For values of the date type, the value entered in the ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/18/FormObjects/propertiesScale#step"}),"step")," property represents days. The Minimum and Maximum properties are ignored.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html"}),"C_TIME")," or ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html"}),"C_DATE")," command.")),(0,o.kt)("p",null,"For more information, please refer to ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/progressIndicator#using-indicatire"}),"Using indicators"),' in the "Progress Indicator" page.'),(0,o.kt)("h2",n({},{id:"supported-properties"}),"Supported Properties"),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCrop#columns"}),"Columns")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesAction#execute-object-method"}),"Execute object method")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#expression-type"}),"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesScale#maximum"}),"Maximum")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesScale#minimum"}),"Minimum")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesPicture#pathname"}),"Pathname")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCrop#rows"}),"Rows")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesScale#step"}),"Step")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width"),"  "),(0,o.kt)("h2",n({},{id:"see-also"}),"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/18/FormObjects/progressIndicator"}),"progress indicators"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/18/FormObjects/ruler"}),"rulers"))))}d.isMDXComponent=!0},16144:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);