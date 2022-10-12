"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},23679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={id:"configuration",title:"Server Configuration"},i=void 0,l={unversionedId:"REST/configuration",id:"version-18/REST/configuration",title:"Server Configuration",description:"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, i.e. to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.",source:"@site/versioned_docs/version-18/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/18/REST/configuration",draft:!1,tags:[],version:"18",frontMatter:{id:"configuration",title:"Server Configuration"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/18/REST/gettingStarted"},next:{title:"Users and sessions",permalink:"/docs/18/REST/authUsers"}},u={},c=[{value:"Starting the REST Server",id:"starting-the-rest-server",level:2},{value:"Configuring REST access",id:"configuring-rest-access",level:2},{value:"Using the Database settings",id:"using-the-database-settings",level:3},{value:"Using the On REST Authentication database method",id:"using-the-on-rest-authentication-database-method",level:3},{value:"Exposing tables and fields",id:"exposing-tables-and-fields",level:2},{value:"Exposing tables",id:"exposing-tables",level:3},{value:"Exposing fields",id:"exposing-fields",level:3}],d={toc:c};function p(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",o({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, ",(0,n.kt)("em",{parentName:"p"},"i.e.")," to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more."),(0,n.kt)("p",null,"To start using the REST features, you need to start and configure the 4D REST server."),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"On 4D Server, opening a REST session requires that a free 4D client licence is available.",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},"On 4D single-user, you can open up to three REST sessions for testing purposes.\nYou need to manage the ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/18/REST/authUsers#session-cookie"}),"session cookie")," to use the same session for your requesting application.  "))),(0,n.kt)("h2",o({},{id:"starting-the-rest-server"}),"Starting the REST Server"),(0,n.kt)("p",null,"For security reasons, by default, 4D does not respond to REST requests. If you want to start the REST Server, you must check the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST server"),' option in the "Web/REST resource" page of the database settings in order for REST requests to be processed.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(9338).Z,width:"862",height:"377"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.")),(0,n.kt)("p",null,'The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.'),(0,n.kt)("h2",o({},{id:"configuring-rest-access"}),"Configuring REST access"),(0,n.kt)("p",null,"By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage.  "),(0,n.kt)("p",null,"You can configuring REST accesses with one of the following means:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"assigning a ",(0,n.kt)("strong",{parentName:"li"},"Read/Write"),' user group to REST services in the "Web/REST resource" page of the Database Settings;'),(0,n.kt)("li",{parentName:"ul"},"writing an ",(0,n.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," database method to intercept and handle every initial REST request.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You cannot use both features simultaneously. Once an ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),' database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Database Settings is ignored.')),(0,n.kt)("h3",o({},{id:"using-the-database-settings"}),"Using the Database settings"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Read/Write"),' menu in the "Web/REST resource" page of the database settings specifies a group of 4D users that is authorized to establish the link to the 4D database using REST queries.'),(0,n.kt)("p",null,"By default, the menu displays ",(0,n.kt)("inlineCode",{parentName:"p"},"<Anyone>"),", which means that REST accesses are open to all users. Once you have specified a group, only a 4D user account that belongs to this group may be used to ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/18/REST/authUsers"}),"access 4D by means of a REST request"),". If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In order for this setting to take effect, the ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method must not be defined. If it exists, 4D ignores access settings defined in the Database Settings.")),(0,n.kt)("h3",o({},{id:"using-the-on-rest-authentication-database-method"}),"Using the On REST Authentication database method"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method provides you with a custom way of controlling the opening of REST sessions on 4D. This database method is automatically called when a new session is opened through a REST request. When a ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/18/REST/authUsers"}),"request to open a REST session")," is received, the connection identifiers are provided in the header of the request. The ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called so that you can evaluate these identifiers. You can use the list of users for the 4D database or you can use your own table of identifiers.\nFor more information, refer to the ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html"}),"documentation"),"."),(0,n.kt)("h2",o({},{id:"exposing-tables-and-fields"}),"Exposing tables and fields"),(0,n.kt)("p",null,"Once REST services are enabled in the 4D database, by default a REST session can access all tables and fields of the datastore, and thus use their data. For example, if your database contains an ","[Employee]"," table, it is possible to write:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n')),(0,n.kt)("p",null,"This request will return all employees whose salary field is higher than 10000."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default.')),(0,n.kt)("p",null,"If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error."),(0,n.kt)("h3",o({},{id:"exposing-tables"}),"Exposing tables"),(0,n.kt)("p",null,"By default, all tables are exposed in REST."),(0,n.kt)("p",null,"For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a ","[Users]"," table storing user names and passwords, it would be better not to expose it."),(0,n.kt)("p",null,"To remove the REST exposure for a table:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Display the Table Inspector in the Structure editor and select the table you want to modify.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uncheck the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," option:\n",(0,n.kt)("img",{alt:"alt-text",src:a(47981).Z,width:"279",height:"330"}),"\nDo this for each table whose exposure needs to be modified."))),(0,n.kt)("h3",o({},{id:"exposing-fields"}),"Exposing fields"),(0,n.kt)("p",null,"By default, all 4D database fields are exposed in REST."),(0,n.kt)("p",null,"You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the ","[Employees]","Salary field."),(0,n.kt)("p",null,"To remove the REST exposure for a field:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Display the Field Inspector in the Structure editor and select the field you want to modify.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uncheck the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," for the field.\n",(0,n.kt)("img",{alt:"alt-text",src:a(26696).Z,width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.")))}p.isMDXComponent=!0},9338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},26696:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},47981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"}}]);