"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"webAreaOverview",title:"Web Area"},s=void 0,l={unversionedId:"FormObjects/webAreaOverview",id:"version-18/FormObjects/webAreaOverview",title:"Web Area",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/webArea_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/webAreaOverview",permalink:"/docs/18/FormObjects/webAreaOverview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/FormObjects/webArea_overview.md",tags:[],version:"18",frontMatter:{id:"webAreaOverview",title:"Web Area"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/18/FormObjects/text"},next:{title:"4D View Pro area",permalink:"/docs/18/FormObjects/viewProAreaOverview"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Specific properties",id:"specific-properties",level:2},{value:"Associated variables",id:"associated-variables",level:3},{value:"Web rendering engine",id:"web-rendering-engine",level:3},{value:"Access 4D methods",id:"access-4d-methods",level:3},{value:"$4d object",id:"4d-object",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Standard actions",id:"standard-actions",level:2},{value:"Form events",id:"form-events",level:2},{value:"Web area rules",id:"web-area-rules",level:2},{value:"User interface",id:"user-interface",level:3},{value:"Subforms",id:"subforms",level:3},{value:"Web Area and Web server conflict (Windows)",id:"web-area-and-web-server-conflict-windows",level:3},{value:"Web plugins and Java applets",id:"web-plugins-and-java-applets",level:3},{value:"Insertion of protocol (macOS)",id:"insertion-of-protocol-macos",level:3},{value:"Access to Web inspector",id:"access-to-web-inspector",level:2},{value:"Displaying the Web inspector",id:"displaying-the-web-inspector",level:3},{value:"Using the Web inspector",id:"using-the-web-inspector",level:3},{value:"Supported Properties",id:"supported-properties",level:2}],d={toc:c};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc. The rendering engine of the Web area depends on the execution platform of the application and the selected ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"rendering engine option"),"."),(0,a.kt)("p",null,"It is possible to create several Web areas in the same form. Note, however, that the use of Web areas must follow ",(0,a.kt)("a",r({parentName:"p"},{href:"#web-areas-rules"}),"several rules"),"."),(0,a.kt)("p",null,"Several dedicated ",(0,a.kt)("a",r({parentName:"p"},{href:"#standard-actions"}),"standard actions"),", numerous ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html"}),"language commands")," as well as generic and specific ",(0,a.kt)("a",r({parentName:"p"},{href:"#form-events"}),"form events")," allow the developer to control the functioning of Web areas. Specific variables can be used to exchange information between the area and the 4D environment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level.")),(0,a.kt)("h2",r({},{id:"specific-properties"}),"Specific properties"),(0,a.kt)("h3",r({},{id:"associated-variables"}),"Associated variables"),(0,a.kt)("p",null,"Two specific variables can be associated with each Web area:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docs/18/FormObjects/propertiesWebArea#url"}),(0,a.kt)("inlineCode",{parentName:"a"},"URL"))," --to control the URL displayed by the Web area"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docs/18/FormObjects/propertiesWebArea#progression"}),(0,a.kt)("inlineCode",{parentName:"a"},"Progression"))," -- to control the loading percentage of the page displayed in the Web area.")),(0,a.kt)("h3",r({},{id:"web-rendering-engine"}),"Web rendering engine"),(0,a.kt)("p",null,"You can choose between ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"two rendering engines")," for the Web area, depending on the specifics of your application."),(0,a.kt)("p",null,"Selecting the embedded web rendering engine allows you to call 4D methods from the Web area."),(0,a.kt)("h3",r({},{id:"access-4d-methods"}),"Access 4D methods"),(0,a.kt)("p",null,"When the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesWebArea#access-4d-methods"}),"Access 4D methods")," property is selected, you can call 4D methods from a Web area."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This property is only available if the Web area ",(0,a.kt)("a",r({parentName:"p"},{href:"#use-embedded-web-rendering-engine"}),"uses the embedded Web rendering engine"),".")),(0,a.kt)("h3",r({},{id:"4d-object"}),"$4d object"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",r({parentName:"p"},{href:"#use-embedded-web-rendering-engine"}),"4D embedded Web rendering engine"),' supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.'),(0,a.kt)("p",null,"For example, to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorld")," 4D method, you just execute the following statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-codeJS"}),"$4d.HelloWorld();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").')),(0,a.kt)("p",null,"The syntax of calls to 4D methods is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-codeJS"}),"$4d.4DMethodName(param1,paramN,function(result){})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"param1...paramN"),": You can pass as many parameters as you need to the 4D method.\nThese parameters can be of any type supported by JavaScript (string, number, array, object).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"function(result)"),': Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the ',(0,a.kt)("inlineCode",{parentName:"p"},"result")," parameter.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"result"),': Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the ',(0,a.kt)("inlineCode",{parentName:"p"},"C_OBJECT")," command to return the objects."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding:\n",(0,a.kt)("inlineCode",{parentName:"p"},'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'))),(0,a.kt)("h4",r({},{id:"example-1"}),"Example 1"),(0,a.kt)("p",null,"Given a 4D project method named ",(0,a.kt)("inlineCode",{parentName:"p"},"today")," that does not receive parameters and returns the current date as a string."),(0,a.kt)("p",null,"4D code of ",(0,a.kt)("inlineCode",{parentName:"p"},"today")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_TEXT($0)\n $0:=String(Current date;System date long)\n")),(0,a.kt)("p",null,"In the Web area, the 4D method can be called with the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"$4d.today()\n")),(0,a.kt)("p",null,"The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the Web area."),(0,a.kt)("p",null,"Here is the code of the HTML page:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n')),(0,a.kt)("h4",r({},{id:"example-2"}),"Example 2"),(0,a.kt)("p",null,"The 4D project method ",(0,a.kt)("inlineCode",{parentName:"p"},"calcSum")," receives parameters (",(0,a.kt)("inlineCode",{parentName:"p"},"$1...$n"),") and returns their sum in ",(0,a.kt)("inlineCode",{parentName:"p"},"$0"),":"),(0,a.kt)("p",null,"4D code of ",(0,a.kt)("inlineCode",{parentName:"p"},"calcSum")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_REAL(${1}) // receives n REAL type parameters\n C_REAL($0) // returns a Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n")),(0,a.kt)("p",null,"The JavaScript code run in the Web area is:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // result is 262.5\n    });\n")),(0,a.kt)("h2",r({},{id:"standard-actions"}),"Standard actions"),(0,a.kt)("p",null,"Four specific standard actions are available for managing Web areas automatically: ",(0,a.kt)("inlineCode",{parentName:"p"},"Open Back URL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Open Next URL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Refresh Current URL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Stop Loading URL"),". These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. These actions are described in ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html"}),"Standard actions"),"."),(0,a.kt)("h2",r({},{id:"form-events"}),"Form events"),(0,a.kt)("p",null,"Specific form events are intended for programmed management of Web areas, more particularly concerning the activation of links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Begin URL Loading")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On URL Resource Loading")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On End URL Loading")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On URL Loading Error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On URL Filtering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Open External Link")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Window Opening Denied"))),(0,a.kt)("p",null,"In addition, Web areas support the following generic form events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Load")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Unload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Getting Focus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Losing Focus"))),(0,a.kt)("h2",r({},{id:"web-area-rules"}),"Web area rules"),(0,a.kt)("h3",r({},{id:"user-interface"}),"User interface"),(0,a.kt)("p",null,"When the form is executed, standard browser interface functions are available to the user in the Web area, which permit interaction with other form areas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Edit menu commands"),": When the Web area has the focus, the ",(0,a.kt)("strong",{parentName:"li"},"Edit")," menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Context menu"),": It is possible to use the standard ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/18/FormObjects/propertiesEntry#context-menu"}),"context menu")," of the system with the Web area. Display of the context menu can be controlled using the ",(0,a.kt)("inlineCode",{parentName:"li"},"WA SET PREFERENCE")," command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drag and drop"),': The user can drag and drop text, pictures and documents within the Web area or between a Web area and the 4D form objects, according to the 4D object properties.\nFor security reasons, changing the contents of a Web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the mouse cursor displays a "forbidden" icon ',(0,a.kt)("img",{src:n(39218).Z,width:"26",height:"28"}),". You have to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"WA SET PREFERENCE")," command to explicitly allow the dropping of URLs or files in the area.")),(0,a.kt)("h3",r({},{id:"subforms"}),"Subforms"),(0,a.kt)("p",null,"For reasons related to window redrawing mechanisms, the insertion of a Web area into a subform is subject to the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The subform must not be able to scroll"),(0,a.kt)("li",{parentName:"ul"},"The limits of the Web area must not exceed the size of the subform")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Superimposing a Web area on top of or beneath other form objects is not supported.")),(0,a.kt)("h3",r({},{id:"web-area-and-web-server-conflict-windows"}),"Web Area and Web server conflict (Windows)"),(0,a.kt)("p",null,"Under Windows, it is not recommended to access, via a Web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own Web server."),(0,a.kt)("h3",r({},{id:"web-plugins-and-java-applets"}),"Web plugins and Java applets"),(0,a.kt)("p",null,"The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level."),(0,a.kt)("h3",r({},{id:"insertion-of-protocol-macos"}),"Insertion of protocol (macOS)"),(0,a.kt)("p",null,'The URLs handled by programming in Web areas under macOS must begin with the protocol. For example, you need to pass the string "',(0,a.kt)("a",r({parentName:"p"},{href:"http://www.mysite.com%22"}),'http://www.mysite.com"'),' and not just "',(0,a.kt)("a",r({parentName:"p"},{href:"http://www.mysite.com%22"}),'www.mysite.com"'),"."),(0,a.kt)("h2",r({},{id:"access-to-web-inspector"}),"Access to Web inspector"),(0,a.kt)("p",null,"You can view and use a Web inspector within Web areas of your forms. The Web inspector is a debugger which is provided by the embedded Web engine. It allows to parse the code and the flow of information of the Web pages."),(0,a.kt)("h3",r({},{id:"displaying-the-web-inspector"}),"Displaying the Web inspector"),(0,a.kt)("p",null,"The following conditions must be met in order to view the Web inspector in a Web area:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"select the embedded Web rendering engine")," for the area (the Web inspector is only available with this configuration)."),(0,a.kt)("li",{parentName:"ul"},"You must enable the ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/18/FormObjects/propertiesEntry#context-menu"}),"context menu")," for the area (this menu is used to call the inspector)"),(0,a.kt)("li",{parentName:"ul"},"You must expressly enable the use of the inspector in the area by means of the following statement:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)\n')),(0,a.kt)("h3",r({},{id:"using-the-web-inspector"}),"Using the Web inspector"),(0,a.kt)("p",null,"When you have done the settings as described above, you then have new options such as ",(0,a.kt)("strong",{parentName:"p"},"Inspect Element")," in the context menu of the area. When you select this option, the Web inspector window is displayed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Web inspector is included in the embedded Web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine.")),(0,a.kt)("h2",r({},{id:"supported-properties"}),"Supported Properties"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesEntry#context-menu"}),"Context Menu")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesAction#method"}),"Method")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesWebArea#progression"}),"Progression")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesWebArea#url"}),"URL")," -\n",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"Use embedded Web rendering engine")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesDisplay#visibility"}),"Visibilty")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},39218:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="}}]);