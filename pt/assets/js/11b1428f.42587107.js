"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),h=n,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||r;return a?o.createElement(u,s(s({ref:t},c),{},{components:a})):o.createElement(u,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});a(67294);var o=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"security",title:"Security page"},i=void 0,p={unversionedId:"settings/security",id:"version-19-R7/settings/security",title:"Security page",description:"This page contains options related to data access and protection for your desktop applications.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/settings/security.md",sourceDirName:"settings",slug:"/settings/security",permalink:"/docs/pt/settings/security",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/settings/security.md",tags:[],version:"19-R7",frontMatter:{id:"security",title:"Security page"},sidebar:"docs",previous:{title:"P\xe1gina PHP",permalink:"/docs/pt/settings/php"},next:{title:"Compatibility page",permalink:"/docs/pt/settings/compatibility"}},l={},c=[{value:"Data Access / Remote Users Access",id:"data-access--remote-users-access",level:2},{value:"Options",id:"options",level:2}],d={toc:c};function m(e){var{components:t}=e,a=r(e,["components"]);return(0,o.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page contains options related to data access and protection for your desktop applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": For a general overview of 4D's security features, see the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),"."),(0,o.kt)("h2",n({},{id:"data-access--remote-users-access"}),"Data Access / Remote Users Access"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These settings do not apply to project databases opened in single-user mode.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Design and Runtime Explorer Access"),": Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer."),(0,o.kt)("p",{parentName:"li"},"Note que:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Setting an access group in the Design environment also lets you deactivate the ",(0,o.kt)("strong",{parentName:"p"},"Create table")," option in the data import dialog box. For more information about this dialog box, refer to ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html"}),"Importing data from files"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group. For more information about users and user groups, refer to the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html"}),"Users and groups")," chapter.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default User"),": When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. It is no longer necessary to enter a user name. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly. This option simplifies access to the database while maintaining a complete data control system."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password."),(0,o.kt)("li",{parentName:"ul"},"If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,o.kt)("strong",{parentName:"li"},"Note:"),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the ',(0,o.kt)("strong",{parentName:"li"},"Shift")," key while opening the database or connecting to it."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Display User List in Password Dialog Box"),': If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. If it is not checked, users must enter both their name and password. For more information about the two versions of the password dialog box, see the section "Access system overview" in ',(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"}),"Access system overview"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User List in Alphabetical Order")," (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Users can change their password"),": When this option is checked, a ",(0,o.kt)("strong",{parentName:"p"},"Change"),' button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"}),"Ensuring system maintenance"),"). If desired, you can hide the ",(0,o.kt)("strong",{parentName:"p"},"Change")," button so that users cannot modify their passwords. To do so, just uncheck this option."))),(0,o.kt)("h2",n({},{id:"options"}),"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filtering of commands and project methods in the formula editor and 4D Write Pro documents"),": For security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html"}),"Formula editor")," in Application mode or added to mutlistyle areas or 4D Write Pro documents using the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html"}),"ST INSERT EXPRESSION")," command: only certain 4D functions and project methods that have been explicitly declared using the ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html"}),"SET ALLOWED METHODS")," command can be used. You can completely or partially remove this filtering using the following options."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enabled for all")," (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Disable for the Designer and the Administrator"),": This option grants full access to 4D commands and to methods only for the Designer and Administrator. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the ",(0,o.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html"}),"CHANGE CURRENT USER")," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed. ",(0,o.kt)("strong",{parentName:"li"},"Note:")," If full access has been enabled using the previous option, this option will have no effect."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Disabled for all"),": This option disables control within formulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones). ",(0,o.kt)("strong",{parentName:"li"},"Note:")," This option takes priority over the ",(0,o.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html"}),"SET ALLOWED METHODS")," command. When it is checked, this command does nothing."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enable User Settings"),": You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: ",(0,o.kt)("strong",{parentName:"p"},"Structure Settings"),", ",(0,o.kt)("strong",{parentName:"p"},"User Settings"),", and ",(0,o.kt)("strong",{parentName:"p"},"User Settings for Data File"),". For more information, refer to ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/settings/overview#user-settings"}),"User settings"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'Execute "On Host Database Event" method of the components'),": The ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html"}),"On Host Database Event database method")," facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. To do this, you must check this option. By default, it is not checked."),(0,o.kt)("p",{parentName:"li"},"When this option is checked:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"4D components are loaded,"),(0,o.kt)("li",{parentName:"ul"},"each ",(0,o.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html"}),"On Host Database Event database method")," of the component (if any) is called by the host database,"),(0,o.kt)("li",{parentName:"ul"},"the code of the method is executed.")),(0,o.kt)("p",{parentName:"li"},"When it is not checked:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"4D components are loaded but they have to manage their initialization and backup phases themselves."),(0,o.kt)("li",{parentName:"ul"},"the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)"),(0,o.kt)("li",{parentName:"ul"},"the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation).")))))}m.isMDXComponent=!0}}]);