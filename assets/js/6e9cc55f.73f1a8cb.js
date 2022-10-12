"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"overview",title:"Overview",sidebar_label:"Overview"},l=void 0,s={unversionedId:"MSC/overview",id:"version-19-R6/MSC/overview",title:"Overview",description:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.",source:"@site/versioned_docs/version-19-R6/MSC/overview.md",sourceDirName:"MSC",slug:"/MSC/overview",permalink:"/docs/19-R6/MSC/overview",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Managing 4D users and groups",permalink:"/docs/19-R6/Users/editing"},next:{title:"Information Page",permalink:"/docs/19-R6/MSC/information"}},c={},d=[{value:"Display in maintenance mode",id:"display-in-maintenance-mode",level:2},{value:"Display in standard mode",id:"display-in-standard-mode",level:2},{value:"Feature availability",id:"feature-availability",level:2}],p={toc:d};function m(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The MSC window is not available from a 4D remote connection. "),(0,a.kt)("p",null,"There are several ways to open the MSC window. The way it is accessed also determines the way the application project is opened: in \u201cmaintenance\u201d mode or \u201cstandard\u201d mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. In standard mode, the project is opened by 4D."),(0,a.kt)("h2",r({},{id:"display-in-maintenance-mode"}),"Display in maintenance mode"),(0,a.kt)("p",null,"In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see ",(0,a.kt)("a",r({parentName:"p"},{href:"#feature-availability"}),"Feature availability"),"). "),(0,a.kt)("p",null,"You can open the MSC in maintenance mode from two locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"From the standard project opening dialog box"),"\nThe standard Open dialog includes the ",(0,a.kt)("strong",{parentName:"li"},"Maintenance Security Center")," option from the menu associated with the ",(0,a.kt)("strong",{parentName:"li"},"Open")," button:\n",(0,a.kt)("img",{src:n(98422).Z,width:"748",height:"505"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Help/Maintenance Security Center")," menu or ",(0,a.kt)("strong",{parentName:"li"},"MSC")," button in the tool bar (project not open)",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{src:n(6917).Z,width:"54",height:"53"}),(0,a.kt)("br",{parentName:"li"}),"When you call this function, a standard Open file dialog appears so that you can select the ",(0,a.kt)("em",{parentName:"li"},".4DProject")," or ",(0,a.kt)("em",{parentName:"li"},".4dz")," file of the to be examined. The project will not be opened by 4D.")),(0,a.kt)("h2",r({},{id:"display-in-standard-mode"}),"Display in standard mode"),(0,a.kt)("p",null,"In standard mode, a project is open. In this mode, certain maintenance functions are not available. You have several possibilities for accessing the MSC window: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("strong",{parentName:"li"},"Help/Maintenance Security Center")," menu or the ",(0,a.kt)("strong",{parentName:"li"},"MSC")," button in the 4D toolbar:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{src:n(6917).Z,width:"54",height:"53"}),"   "),(0,a.kt)("li",{parentName:"ul"},"Use the \u201cmsc\u201d standard action that it is possible to associate with a menu command or a form object. "),(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"OPEN SECURITY CENTER")," language command.")),(0,a.kt)("h2",r({},{id:"feature-availability"}),"Feature availability"),(0,a.kt)("p",null,"Certain MSC functions are not available depending on the MSC opening mode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Backup function is only available when the project is open (the MSC must have been opened in standard mode)."),(0,a.kt)("li",{parentName:"ul"},"Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode."),(0,a.kt)("li",{parentName:"ul"},"In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/19-R6/MSC/encrypt"}),"Encrypt page"),"). Otherwise, encrypted data is not visible.")))}m.isMDXComponent=!0},98422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MSC_standardOpen-ef15ff019a0992eb692c97fb75fb9800.png"},6917:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAYAAAAK0RhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAR5SURBVGhD7ZgPSBtXHMe/0c6V4R901TkdrVmymKHVrnMt1lFrlDgdadfCZgsiw9HObgyHA1e6qQhSpSDoECsrbCKDMiky6MQ/aLoK6hhLR+mSxkZNY0cnyvxTRTD1z+6dv8ZYtULvnTQhHzh4v997HPe59+53907x2+DMMrwQUSzyJe9yG51TwI/aXodPzNPwiXkaXisma7l3zs/DMWjFoPW2cFjgdM7j5V27EL37dSQefBcRkdE0ki+s3HMVW15exr/37+Ge7Q5sd/7GP/cdUKvVSExMRHx8PGZmZjAwMACrVZAdHERISIggGgGVNh77k1PxQkAAnUkaXMX6r7ejp6sNYWFhokRCQgJiY2MR4Haxk5OTojxjcXERdrtdlGSyo6OjUGu0yPnkC7FfClzFyr/6FDU1NQgNDaXMetzFnmR2dhalpaX49mI9/PykPfpcvzwWFhaeKsVQKBTUWk9gYCCWlpaw8OgRZaThK/eexraKPW0p8mbbxGw2G4aHhymSH9nFWBWcmJhAa2srjEYjpqamNq2MPJFdrK+vDyUlJa4Zq66uhslkol75kF0sJSUFaWlpFAHJyclISkqiSD64ifn7+4vvoY1wOp1QqVSIiYkR25vBigs7Dw+4iUVFRWNkZISiteh0OhQVFaGgoECcwY0YHx9HUFAQ/HfsoIw0uIlp9+5Dd3c3RWuJjIykFhAeHk6ttfT39yPildVxUuEmdjA1E6abN8UisRmbvcfYbPX29iLd8BFlpMNN7MWdO/HByY9RV1eH6elpym4Ne+YaGxuRsP8dvPrabspKh5sYQ/3mXiQdSkVlZaX4tb4V7MOZSbF92Psf5lGWD1zFGCnp2dDEJaKiogJjY2OUXcF9Kc4Lu+uGhgY8FDafeZ9/TVl+cBdjHMk6jn0HUlBWVgaLxULZVdhOura2FotLy8gv/Eby/msjZP3ncdd8C79c+REGgwHZ2dmYm5sTvzqam5uhVGtwPPcMjeQL938eGzE18R9+/bkRiwtOsdSbzWboso7h7UNHaAR/tkXsMbdNv8NmuQX9sZMIDA6hrDxsq9h2wvWfx/OGT8zT8Il5Gj4xT0OiWCfKooKhLe6keBXH5QxoozLQZKeEsVCIhbHi4ZZnrOkLxqnLQ9Tx7PCZsZ9a0UPNFYZw49of1Baw1+NUrhnnex/C+oAdXchTUh+TygW+F/Mrx5XTKup8djiIHUCOcNGX3O+y8Tu0GaqQQ+EKcYh5LONiCE01TLgWhynDCy4zpjpbDM21Djgo7mk3IytDTZGA8jNUlZtxRlhmZUbKMewdaMMJpK4Tlg6n4qFHuvYcfmAXLSy7SyheXWrEntNdwjK7CuQKz9HRetdNkAtOYsDhs1W4294JR1cLNO/pKfskepQ/+AvnQTdBqYbmzxbccC8knOAmBmUmsqwXcc52Avk6ym2JHvnlwIVC9xnsRNNzUxVFVMj7Mg54IxN7KOOCVUVXOX8LF7RXUU7ybIl2GFqQ6epvRQyHqujbj3kaPjFPw2vFxOJBbS8C+B/aCLjWUUEFJgAAAABJRU5ErkJggg=="}}]);