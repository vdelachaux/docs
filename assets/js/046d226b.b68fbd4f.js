"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32193],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>m});var r=t(67294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function i(e,A){if(null==e)return{};var t,r,n=function(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),g=function(e){var A=r.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},c=function(e){var A=g(e.components);return r.createElement(l.Provider,{value:A},e.children)},s={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},b=r.forwardRef((function(e,A){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=g(t),m=n,u=b["".concat(l,".").concat(m)]||b[m]||s[m]||a;return t?r.createElement(u,o(o({ref:A},c),{},{components:t})):r.createElement(u,o({ref:A},c))}));function m(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var i={};for(var l in A)hasOwnProperty.call(A,l)&&(i[l]=A[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var g=2;g<a;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},62226:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>g,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>c});t(67294);var r=t(3905);function n(){return n=Object.assign||function(e){for(var A=1;A<arguments.length;A++){var t=arguments[A];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function a(e,A){if(null==e)return{};var t,r,n=function(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const o={id:"objectLibrary",title:"Object libraries"},i=void 0,l={unversionedId:"FormEditor/objectLibrary",id:"version-19-R7/FormEditor/objectLibrary",title:"Object libraries",description:"You can use object librairies in your forms. An object library offers a collection of preconfigured objects that can be used in your forms by simple or copy-paste or drag-and-drop.",source:"@site/versioned_docs/version-19-R7/FormEditor/objectLibrary.md",sourceDirName:"FormEditor",slug:"/FormEditor/objectLibrary",permalink:"/docs/FormEditor/objectLibrary",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/FormEditor/objectLibrary.md",tags:[],version:"19-R7",frontMatter:{id:"objectLibrary",title:"Object libraries"},sidebar:"docs",previous:{title:"Form Editor Macros",permalink:"/docs/FormEditor/macros"},next:{title:"JSON property list",permalink:"/docs/FormEditor/jsonReference"}},g={},c=[{value:"Using the standard object library",id:"using-the-standard-object-library",level:2},{value:"Creating and using custom object libraries",id:"creating-and-using-custom-object-libraries",level:2},{value:"Creating an object library",id:"creating-an-object-library",level:3},{value:"Opening an object library",id:"opening-an-object-library",level:3},{value:"Building an object library",id:"building-an-object-library",level:3},{value:"Dependent objects",id:"dependent-objects",level:4}],s={toc:c};function b(e){var{components:A}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",n({},s,o,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use object librairies in your forms. An object library offers a collection of preconfigured objects that can be used in your forms by simple or copy-paste or drag-and-drop."),(0,r.kt)("p",null,"4D proposes two kinds of object libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a standard, preconfigured object library, available in all your projects. "),(0,r.kt)("li",{parentName:"ul"},"custom object librairies, that you can use to store your favorite form objects or full project forms.")),(0,r.kt)("h2",n({},{id:"using-the-standard-object-library"}),"Using the standard object library"),(0,r.kt)("p",null,"The standard object library is available from the Form editor: click on the last button of the toolbar:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:t(69960).Z,width:"32",height:"31"})),(0,r.kt)("p",null,"The library is displayed in a separate window:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(71079).Z,width:"516",height:"530"})),(0,r.kt)("p",null,"The window has the following main features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preview area with tips: The central area displays a preview of each object. You can hover on an object to obtain information about the object in a tip."),(0,r.kt)("li",{parentName:"ul"},"You can filter the window contents by using the ",(0,r.kt)("strong",{parentName:"li"},"Categories")," menu:\n",(0,r.kt)("img",{src:t(15110).Z,width:"384",height:"201"})),(0,r.kt)("li",{parentName:"ul"},"To use an object from the library to your form, you can either:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",n({parentName:"pre"},{}),"- right-click on an object and select **Copy** in the contextual menu\n- or drag and drop the object from the library\n")),"The object is then added to the form. ")),(0,r.kt)("p",null,"This library is read-only. If you want to edit default objects or create your own library of preconfigured objects or project forms, you need to create a custom object library (see below). "),(0,r.kt)("p",null,"All objects proposed in the standard object library are described on ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Library-objects.200-4354586.en.html"}),"this section on doc.4d.com"),"."),(0,r.kt)("h2",n({},{id:"creating-and-using-custom-object-libraries"}),"Creating and using custom object libraries"),(0,r.kt)("p",null,"You can create and use custom object libraries in 4D. A custom object library is a 4D project where you can store your favorite objects (buttons, texts, pictures, etc.) You can then reuse these objects in different forms and different projects. "),(0,r.kt)("p",null,"Objects are stored with all their properties, including their object methods. Libraries are put together and used by simple drag-and-drop or copy-paste operations. "),(0,r.kt)("p",null,"Using libraries, you can build form object backgrounds grouped by graphic families, by behavior, etc. "),(0,r.kt)("h3",n({},{id:"creating-an-object-library"}),"Creating an object library"),(0,r.kt)("p",null,"To create an object library, select ",(0,r.kt)("strong",{parentName:"p"},"New>Object Library...")," from the 4D ",(0,r.kt)("strong",{parentName:"p"},"File")," menu or tool bar. A standard save file dialog box appears, which allows you to choose the name and the location of the object library."),(0,r.kt)("p",null,"Once you validate the dialog box, 4D creates a new object library on your disk and displays its window (empty by default)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(20401).Z,width:"515",height:"365"})),(0,r.kt)("p",null,"You can create as many libraries as desired per project. A library created and built under macOS can be used under Windows and vice-versa."),(0,r.kt)("h3",n({},{id:"opening-an-object-library"}),"Opening an object library"),(0,r.kt)("p",null,"A given object library can only be opened by one project at a time. However, several different libraries can be opened in the same project. "),(0,r.kt)("p",null,"To open a custom object library, select ",(0,r.kt)("strong",{parentName:"p"},"Open>Object Library...")," command in the 4D ",(0,r.kt)("strong",{parentName:"p"},"File")," menu or tool bar. A standard open file dialog box appears, which allows you to select the object library to open. You can select the following file types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},".4dproject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},".4dz"))),(0,r.kt)("p",null,"In fact, custom object libraries are regular 4D projects. Only the following parts of a project are exposed when it is opened as library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"project forms"),(0,r.kt)("li",{parentName:"ul"},"form pages 1")),(0,r.kt)("h3",n({},{id:"building-an-object-library"}),"Building an object library"),(0,r.kt)("p",null,"Objects are placed in an object library using drag-and-drop or a cut-copy-paste operation. They can come from either a form or another object library (including the ",(0,r.kt)("a",n({parentName:"p"},{href:"#using-the-standard-object-library"}),"standard library"),"). No link is kept with the original object: if the original is modified, the copied object is not affected."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to be able to drag and drop objects from forms to object libraries, you must make sure the ",(0,r.kt)("strong",{parentName:"p"},"Start drag and drop")," option in the 4D Preferences is selected.")),(0,r.kt)("p",null,"Basic operations are available in the context menu or the options menu of the window:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(68595).Z,width:"137",height:"127"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cut")," or ",(0,r.kt)("strong",{parentName:"li"},"Copy")," to the pasteboard"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Paste")," an object from the pasteboard"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clear")," - deletes the object from the library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rename")," - a dialog box appears allowing you to rename the item. Note that object names must be unique in a library. ")),(0,r.kt)("p",null,"You can place individual objects (including subforms) or sets of objects in an object library. Each object or set is grouped into a single item:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(45821).Z,width:"473",height:"370"})),(0,r.kt)("p",null,"An object library can contain up to 32,000 items."),(0,r.kt)("p",null,"Objects are copied with all their properties, both graphic and functional, including their methods. These properties are kept in full when the item is copied into a form or another library."),(0,r.kt)("h4",n({},{id:"dependent-objects"}),"Dependent objects"),(0,r.kt)("p",null,"Using copy-paste or drag-and-drop with certain library objects also causes their dependent objects to be copied. For example, copying a button will cause the object method that may be attached to be copied as well. These dependent objects cannot be copied or dragged and dropped directly."),(0,r.kt)("p",null,"The following is a list of dependent objects that will be pasted into the library at the same time as the main object that uses them (when applicable):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lists"),(0,r.kt)("li",{parentName:"ul"},"Formats/Filters"),(0,r.kt)("li",{parentName:"ul"},"Pictures"),(0,r.kt)("li",{parentName:"ul"},"Help Tips (linked to a field)"),(0,r.kt)("li",{parentName:"ul"},"Object methods")))}b.isMDXComponent=!0},69960:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAIAAAAJNFjbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAJISURBVEhLvVb/S1pRHN1/6w97gU9z1WxbtWKULShYrKVB9dr68ksuf4jmD7ofgugJA59E4Rg5dcEMrBQSdO50z+3hE7HkPjscHveeyzvnXX2f+3nPzItmX3kXULjpF5824MXQcDqdbjoBBbp9Q690BHg8HunqBHSsJo8tJGFMYAyFN3ZhDwFt+3vkzjoE3D1eC6jYq62gTuav/539ucbVVsgedtAx4Mj6ufhpZXxiUhsY0H2+kZfBzPlfupE9B+BKcAzTRCKRy+VqtRqU3Wg0vPqZbqTqDkKz7+VEIJvNTr2bphupGhAMjsqJQKVS8eo63UjVgOeaVq/XOa1Wq41Gwz84eFq8oiGoGvB6bLxQKBiGEQgEvF5vPp+fCc0e/jilIagasLC4ZJpmsVgsl8sU1w3j60GShqBqwMZONBaLyblAPB6PrG/SEFQN2E8eLS+H5Vwgk8mE5uZpCKoGmCfnE28n5VygVCq1HiGqAb8ub1HDcn4PKNDdCYA+NDyCp5aSAPaEndHThQD84pZlSUkgHI7gv6GnCwErxhbeHCkJ4L0ytnfp6ULA3rfvePepoBpQE6lUav7DR3q6EIC6RfWihlHJqGdUNWr71ZsxenYIwLUVtpE9Jmwdfcbn9+MUwlkEEcDppGkaPV3YAYgTFOeoVAVwynLJnQD0AHQCqQqgT3DJEdDW1gm7uXdp+pG1L+hlENHX0N3Q43TdxyVHQNuHCQGFnyddPlvQh9GN0T5Rw+jP6NLo1VxyBKjw91Xj4a+KflAG9JEXzf/D4vv5aDTSKgAAAABJRU5ErkJggg=="},71079:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/library2-fbd84eae4c8994b3533189f51b40226b.png"},15110:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADJCAIAAAClhXL4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABQESURBVHhe7Z3Pq1zXfcDfX9FNoaiQmpJq0drOsyXkyA5kU1KSBya2MQaNutAihArahRcyCaW1J0oXLwIv7NKFtQkq48albZpUxW2JW2RQq9a4r6t04wcSFn0JXcTbfM/vc8+935n3RnPujzefD9/I537vOd97J3POR+eOPe/t/BwAYCAQEAAMRhLQzvNv9Rb+kgCw3TQEdPfwsx4CAQGAAwEBwGAgIAAYDAQEAIOBgABgMBAQAAzGOgL63G98TqJIHj8QEAA4TiCgr3zl93Z3d69du/Y7FmnIoSSLbisDAQGA4wQCunjx4rlzTz/55JNPWaQhh5Isuq0MBAQAjhMI6K23337mmS8+99yXvmORhhxKsui2MhAQADiOK6DHH3/8woULX3ruufl87jLSkENJyqnY7dKlS78WeOmll2I+DwQEAI7jCujcuXPPPvusGOfVV191GWnIoSTlVOz2g7/9+1deeeWxxx57/vnn//qH/xDzeSAgAHAcV0Af/Pt/v/X2n1+48IzENyyuLUk5lff8mx/948svv9xhHwCAu3e9cSwn+AxIdjrnzj391FNPPWGRhhzm258YP/7nfy0yJu7e/X8YN7xHUJv1BfTCCy9evHjxzTff/G2LNORQkkU3NZjco4f3CGqzvoB+9P5P/uXD//z+Xy4+/1ufl5CGHEqy6KZGmNz7d36x8fjeh58Rjx4bfI/8rMpwlWHLWV9AMT74jwOJIrk6ENDoAwFBbTYgoDUDAY0+EBDURubY4eHhgwcPHj58eHR0hICIFAgIaiNzTDg4OPjkk0/EQQiISLHB98jPqgxXGbYcmWO3bt26ffu2OOj+/fsIiEiBgKA2Msdu3LghDpKGPIudYgF9vHd2x3P2+mvl2WqxuH5mZ3dv0cpPIdZ7j761+KjISPhZleEqFyxmOzuzhT8wSGJ3fi9vDM29+e5I7uRUIHNsPp/fvHnzzp078hTWEFDV6FVAxgI75/fT4V5sN+K985OVxRrx7Xc/+vJXX/zuP31a5GOs8R59/RvXnnjiiT/5u58WeT+rMlzlBrK2d2ez3Xx5P6KARqMtUJA59vrrr7/zzjulgGrTo4DM3ifZZ1lsl4AkxBdLHHTS98jZ55v7iyIv4d/1DFc5x/hnfs/96VMI6LSzBQIy25/LV/JMiCt7/plsZ+89a5+AOfT7JksYHjJnrl5PqkrdouaMyM7v7dqBmdTKgump8Hh+rBJLHLTkPZLnrOJRa4l9JPy7nuEqZwTzNAy0XEDS1f8f6J7bpJPHHKcjf7rsnjK783mqn7rFfubqsjeziexOyoLtC8AKtkNAKz70iY7Id0BZe//ymasfO0M5U7x2VSZaHBL0YfySknaIa7eKu4L7l73pho7fffH3vza7WiQllrxHX5v9wdMXvhgdtNw+Ev5dz3CVE7J4/bpOraUCMqu9SAU6R2Xtxcy2JJObIw4J+khXMMk0OCVTzrQkgXhOyHYISNkBGQV4Wo7I9jUGMUVDZKFns7hsqayMsjqNnhmuYPLUYPHN/XfPXbj47Xc/KvISS96j6+9/+uWvvuActNI+Ev5dz3CVI7l1zML3K7lrtTuyTgnp5WmNso5JyND8krFns6xk7UF+9bxnhiuYPAXHYgsEpH0GlNwhHToF1NSWZB5VQB0etJuprtvrJZbYR2L5e+QcJOpZaR8J/65nuMoBWdUFzgJx5ecKsDRNYUgZabVGdfZPJXOtpG6StQf51bt7Rkw67qFgFdsgIL/TSYvc/VswSTqhGDW0BGTaxfbEZFwR/RHMKaaok3p27nek2iD7IPHOEvtIrHyPnINW2kfCv+sZrrInX+CGuLjjibKH69NIxS7pTD5K2kUJk3GmsNaIQ4I+4l2UdVLPZkGPjOvMQ5vtEJCEsUPAb2TCZ8BnL5/3O6DwsXT5IXTIhEc25UPotnSa7aJgegDs2Bn1E3/6w/8tMnls8D3y73qGq+zI17cjrP18tbcXtVGAw3rCakTI/l2+75FpxhPFYlE+hI5XzK+etYuCxe3AMdgaAW020mbnNEdvAhqeIDzomVJAP/6vT/uJSQvIbJRW/Ju10xDbIyCzd4lbHOgRmWNX/uiPr/3ZX7z9Vz/5wb/9FAEtifSf7Qz40NRnnHYBtR/JoG8QEKHGaRcQDA8CItRAQFAbBESogYCgNgiIUAMBQW1KAf3mvcN+Ik5uGC3xPfLO2CiuMmw5Msd+5Q+/9avffevXF+8/9sH/+H8l0AMIaPwgIKiNzDFvBIefHfWRC8P4cbPEv2cbxVWGLUfm2DD/JXTB4aF5KLt169aNGzfm87ncEwwOAoLajEVADx48ODg4uH37tjjo5s2bckMwOAgIajMWAT18+FAuLw6SG5JbgTGAgKA2YxHQ0dGROOj+/fvyLCb3AWOgRwGlL5ILfC1iexiLgH5mEQ0J/wfjoF8B5T/jYomCsp6NNkySsQgIRsgwAlqhFQR0qkBAoDKMgKTpN0Bt18ifgdksa9v+2Zfbww7Kjpr7jqFW6sez3uAgIFDpV0CRqIW2gLSka4eRxjCxc8jG89JAPKMBAYHKMDughj7arulMlp8cyYkgm1ZnuwGKWRgWBAQqwwgouaRLH93JkwjIYi2UDYCBQECgMvQOKJOKnPdJzSmmh++cxmmdDdKrcQxDgIBApV8BRTItxLT5yNnnfS7scGLb72oMndIJ7Vgz+AoGBAGBSo8Cgi0FAYEKAoLaICBQQUBQGwQEKggIaoOAQAUBQW0QEKggIKgNAgIVBAS1QUCggoCgNggIVBAQ1AYBgQoCgtogIFBBQFAbBAQqCAhqg4BABQFBbRAQqPQooPQVdYFvqW8PCAhU+hVQ9lM4VI7ZDSYDAgIVBAS1QUCgMqiAbKbxCy0kEzAPaabDbGZ+vvNu8dNYm5XSMN8pDrTH6ceYpdMen2j1gM2BgEClXwFF3DK3mdSMrWgXk/UH0gxuyJoFcWw2MCVNM5a2hFN6RXh0EBCoDL8D8pnY7ky6djBUUUaQk55WkbS5sUTLeWw326ddFTYCAgKV6QjIWEIO3J8+5TD6cF6JJ7OB6Wygo78/ECE1u8IGQECgMiEBWV3MZu3fcxF7GYV0FsmrdPb3NIQEGwIBgUq/AkrYdV5owrd9P7MVyTsYzKmOLYrbu0jRqKfmwHDeYIa3+vtLCmyANg8CApUeBbQBRBQYYnIgIFCZkoB4QJomCAhUJiIg99CEfiYJAgKVKe2AYJogIFBBQFAbBAQqCAhqg4BABQFBbRAQqCAgqA0CAhUEBLVBQKCCgKA2CAhUEBDUBgGBCgKC2iAgUEFAUBsEBCo9CmhxyX3h3PCFN/yXKiQZ28fj3htfOOmQNTn5vRmUUe7V93PjIwMBgUq/AvLrL3PIeou8HzYoIKOfS9v6PX4EBCqDCChrr7fI+2G9e+scNeaXWR0EBCqjEVDnWbdZcs8ub3QPkbTv0BzQ2nFIb48/0Tm884qRonh2n8VdLWIRSaUr+96pTLxJM+rSJUlLolFBjmP3cDH1NY4TBAQqgwjILCDfjMl0tpn0a8yuuaKnOetPx47SWLEolw7PWtkVA2XxWCpvmwq+mV5n0TOUaXSIPbIKWTONk0bjNsYOAgKVfgUUiQtIknGphQUY27I+Y66jpzKk1EZAuniWDk+D8w6WsnhXheYoOQjOCElTJPmjo8PK9pLXOEoQEKgMsgPKiEllpaUR7Z5dQyx2hTZ3CWnZx6Jdw7uv2CAr3nkDeTJeNUumOzHICb3UknZ+G2MHAYHKaASUrUvJ+aRpuaRdbzFZNIq2Qfo3juN5U2jJcGm0r1gSipsunffsh6XzxbXCKLXDyrYh3MbYQUCgMhoB2abj0qV2Uv0Q2hcM7VgkrPGAWesG81GvPtw1Xcf2h9Dt4jGT7tmUsh8n23Tql5UK9xJN1eywqi3/9BSvcaQgIFDpUUCPRtoswMRAQKAyFQGZv/XjVgAmBQIClXELKD2rTOVxA9ogIFCZyg4IpgsCAhUEBLVBQKCCgKA2CAhUEBDUBgGBShTQ/p1fbDy+9+FnxDaHm1oICFQQEFEv3NRCQKCCgIh64aYWAgIVBETUCze1EBCoICCiXriphYBABQER9cJNLQQEKj0K6L3z/ksVwu7eIj81RCyunznubcid254nGEKYcFMLAYFKvwLyq/e1q7s7Z6+/1jg75kh3fpJYb9SpCje1EBCoDCKgqS1OBLRmuKmFgEBlaAGZxvm93Z2dy1ckb55xPOf3Xc+UPHP1+qpR9vDDj/fO+mNbpDiM0biHvauXXZ8zVz9eft3wEsqyV/b84c7ee7ZnwBx2vrT8VWg3Oe1wUwsBgcogAsoewcxCDWvetP3yM8s1rnmfNKOyZDYqSGH/sknuX/Zr3kVxmCIONNV8H+nsLaZd1zWML5KqGpGXDTeWVStemi+i3uS0w00tBAQq/Qoo4ha5S4ZValZmzJsNhVmxkkyfFsXOxagMWcY2k+xQHKboqhbby69raqZb9WHk5WiVbfb3L63soBltwuGmFgIClUF2QN3JzlW6XAStUTHstiVsOlqHNrqqxfby67YvmjKyOWqVbfbvEJCNrpucdriphYBAZUQCMu2w/NKKTcmuRyHfoXPvIP3zfHGYFSmqxeSS67YewWT744Rl7ryzbOdLix18tG5y2uGmFgIClTEJyC1OR5YMjzbKh8H5KPsIlh6F7DovDlPEInm1rL3iutL2WLOET5HPXj7vd0DhY2n34U7HS+u4Vusmpx1uaiEgUOlRQI8cae9ATCPc1EJAoDIhAZkNRfpchphAuKmFgEBl9AJK/4HMKXs82YZwUwsBgcqEdkDE5MJNLQQEKgiIqBduaiEgUEFARL1wUwsBgQoCIuqFm1oICFSigPzxRnGVYctBQKCCgKA2CAhUEBDUBgGBCgKC2iAgUEFAUBsEBCoICGqDgEClVwEtZv47FTuzhU8dj3vz3Z3d+T1/dBLkkq2B61eDdUBAoNKfgMyyD965N5+bVpcdEsvPHpNHL7KR29hqEBCo9CegjoWMgLYCBAQq/QnIrOR8KZtDj90YpWNzWJzNLWC2UulMTjoTT9mBC58PJbJqHcXyVHEb+qVBBwGBSo8CEvwCbtih3FzEZH42tk2F9hiLkYWvnHqZZGto1yUWM9tq12/0QTxrgIBApV8BWayF7ELO1rYgRx6XzM+GthmrOKB5KriicYkyae8kIec66mcVbP9UDo4HAgKVAQSUXFGsbbfypeWSuTtyZRSCCDRPyQB7kBeJPfRqHfXzCgbThUewk4CAQKU/AS3muQjsms7WdmzGk42V33G6hfQJXkgeMUnfv5GMlyiqtevHzgnpVKZABwGBSo87ILPaPWH/4FPm0Kx8w+5sFlZ3dja3QKoTygRCjcwqZqBUdNnssqFDGhJPl/X9sRzoV4YlICBQ6VFA40FEgkH6AwGByjYKKNsAQQ8gIFDZLgH5By700ysICFS2cQcE/YKAQAUBQW0QEKggIKgNAgIVBAS1QUCggoCgNggIVBAQ1AYBgQoCgtogIFBBQFAbBAQqCAhqg4BABQFBbRAQqPQmoPRN8kDXFyJqf01rvfphlPkmB1/jODEICFR63wEtV8C4BZTIM7XvefIgIFBBQMegPSrP1L7nyYOAQGVYAcmBJ/0wsPYvsUg/NKz4KT7dw+c+my4TCthzhSyK4p03YJOm6RrpsjuzWda291DerBlifyKaHKov5HSDgEBlHDugfIWHdW9Wq21JbsV6bQ6PC7/VsgJoXr0sbisUN2CSWkNv+1+zIZmQkuaKF3I6QUCgMrCAzPJ0uGTjrF+wHdoILBse2jK8UbJZqSze6CAH1hgx2W4027Zawgwuz8Zh2wMCApUhBWQWpNsSREnkCzud9gfFk8uK4aEdT+bJJlnxzhuIyXaj2U63FMl7GrJrbQsICFSGFFBsmkXpWpIKp1uLWRKNpdw9PHaJbVPTFbKLv1EjEop33kBeqmi02+nAkp/1lC/ktIOAQGVIATkhCOk3YZiz5S+xMIvaUewbuoeH4lk7VOj4ELosbkbpv0Uj1fTjbI+8HW/KYDJpSOgnhMLbAQICld4FNHIyX8CGQECggoCaIKDNg4BABQE1QUCbBwGBCgKC2iAgUEFAUBsEBCoICGqDgEAFAUFtEBCoICCoDQICFQQEtUFAoIKAoDYICFQQENQGAYEKAoLaICBQQUBQGwQEKr0JaNH4cYDNbzy4c+Z75O2vQfDdiMmDgEClvx1QbiD7MyuiV+RId8xJBYSwRgcCApX+BJRpRpqzufzP+WipfxDQ9EFAoNKfgJJoXCPuiPJGcId0sT+5q/EjxJYm7U/5kgoBU7JxDoYCAYFKjwKKpom/L8L/I+ghCsh4xOWsQpYnXcM0Q7mUQTxjAAGBSp8C8kYIXhCPiCrcn+G0bWap1Um/xbGYsuGUYM+mQTAQCAhUehWQlcgi//DHfBQUFbGegIpNTiYgi+nCI9igICBQ6VVA3gZRECKLXA7RHSbvsnbAimTDN6lIQvqXKegRBAQq/QrIuiOTQZKKIXOHOWFofN7cmXROc9hSvpe0Q//8GtA/CAhUehbQZjDSwSmTAQGByhQFZHY2PFNNBwQEKtMRUOtZCyYCAgKVKe6AYFogIFCpKiDYctzUQkCggoCgHm5qISBQQUBQDze1EBCoRAEBVAIBgQoCgtogIFCRyQFQGwQEx+Lw8FCmy61bt27cuDGfz2XeADw6Mp1kUsnUkgmGgEDlwYMHBwcHt2/fluly8+ZN+VsL4NGR6SSTSqbW/fv3ERCoPHz4UDbJMlHkLyvZMANsBJlOMqlkaskEQ0CgcnR0JFNE/pqSrbJMF4CNINNJNtcytY6Ojn4JsdxH/W41jUsAAAAASUVORK5CYII="},20401:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,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"},68595:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAB/CAIAAABUjXaaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS1SURBVHhe7Z1NbtswEEZ7qtxHlwm09g3inQHfwBfIokB37gFiwAYMCEVP0Bly+COZqtXCED/T31sk1HDExbwMY4hK++07QeJXhrr5TTCgG1xm3VjgofiVyULoBhe6wUVcnE6ny+VyvV6HYaAbIMSFcDwev76+RA/dACEudrvd4XAQPefzmW6AEBebzUb0yEA2t/Xd/Ojfvhlv/Q8LEkVc9H2/3W4/Pz9lW1vXjfPS7e1KLvs4nrLvXk+duHh/f//4+FjfjZpJYu5AN2u6mVWTa/Bj+RpYLLMBqropd8Ktm0nwVXiKvpkEX4V6bmbl0I1R0Y0reOFzWuZME+imihtBRQTybvF0XVRiMX4WEKycD8WvTBZCN7jQDS50gwvd4EI3uNANLnSDC93gQje40A0udIML3eBS3U32IPrlDgHuUNWN83JzfkOMim7mzj2JUc/NX9Rk+1zIcOeee4u7zW98f4vnolXdlKupJ5xWdK2/T3LHnn4YgxLL1M14fmLw+uamH9yFfE8ms6DP3Hdlzc9NPTdzcu67SRkykqj/6qaaoqIbV/DC5zSNWjBZ0KAJyOWplq5rU01dN4IWOjBqjElI+0Yk+GjSOTLZGrXdLEXdFJtDJhpV8+xudE9rcj9TnteN3/jaNfM8bl4RusGFbnChG1zoBhe6wYVucKEbXOgGF7rBpaIbfYIcaPnRy39T140p0UdjS+3MPPRsEQg3/1JxuqnnRkaGHcukg7ZunyZtNp902S0B4aa0p4VZ+T4qe7prNG7xbY66biJZ+VPYVdt1Rlb3zEdqGkdznQPRNwktd9yt0qy34CYmbpoTkgHmJsa07qPZ4Cq/S8a3S7QDmBvrECl5eLNJ6++xFrFA7C53pTTXQhXdkDvQDS50gwvd4EI3uNANLnSDC93gQje40A0udIML3eBCN7hUd5M9Sban0sXn069IVTfOS3q0n/5Omm6Uim7UTOnMhW6Mem7m1ORu0oZnmXawJqSA/9v24lLPTVU35faIbjJJ09do8pxmuwy4b1LTOHyuuvBEN62qQf59czufIjKim4fiV064Jkjln35O0+lR4eOMSqKbh+JXHqFVDliRs3Lns+owXKd/X4huHoRfmSyEbnChG1zoBhe6wYVucKEbXOgGF7rBhW5wWdXNT7IMr4B9gwvd4EI3uNANLnSDC93gQje40A0udINLRTf6Gk2k9DLUq1PXTXhFRjXRzhQMN02/yvTfwPRNVJPeSfOd5OZ62/9ymYb1m0sL/zmrxOIyyfl0ZXTqugmkWmWW7P10lxY1Tcsa813azTC7JWbqMIygAegb/XEOFU8/2g4NZzUd19dyLDKTFseFldEBcOPqlkaznZGNU1q8tZSWjwsrowPhJhvLIEUdpbQY04rHG2/SRmMZpOhTAOImK7KOArN7Wkgqv7Q+M56ujE5FN+QOdIML3eBCN7is6oYsxCugG0S8ArpBxCuYdUOqQze4FNwQHEZubMMLnE4nydjtdpvNpu97SSVrImWX4osCETF1c7lcjsfj4XCQjO12Kw7JmkjZpfii4Hw+T91cr1fpJpkTddJZZGWk7FJ8USAipm6GYZCoSJOekgyyMlJ22bpEwTAMfwBdq66nDYuxQQAAAABJRU5ErkJggg=="},45821:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/library6-2c4764eb7a369e0d318da40c9baf194e.png"}}]);