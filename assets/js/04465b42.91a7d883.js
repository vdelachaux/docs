"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),u=i,f=h["".concat(s,".").concat(u)]||h[u]||c[u]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});a(67294);var r=a(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const o={id:"repair",title:"Repair Page",sidebar_label:"Repair Page"},l=void 0,s={unversionedId:"MSC/repair",id:"version-18/MSC/repair",title:"Repair Page",description:"This page is used to repair the data file when it has been damaged. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a verification.",source:"@site/versioned_docs/version-18/MSC/repair.md",sourceDirName:"MSC",slug:"/MSC/repair",permalink:"/docs/18/MSC/repair",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/MSC/repair.md",tags:[],version:"18",frontMatter:{id:"repair",title:"Repair Page",sidebar_label:"Repair Page"},sidebar:"docs",previous:{title:"Restore Page",permalink:"/docs/18/MSC/restore"},next:{title:"Encrypt Page",permalink:"/docs/18/MSC/encrypt"}},d={},p=[{value:"File overview",id:"file-overview",level:2},{value:"Data file to be repaired",id:"data-file-to-be-repaired",level:3},{value:"Original files backup folder",id:"original-files-backup-folder",level:3},{value:"Repaired files",id:"repaired-files",level:3},{value:"Standard repair",id:"standard-repair",level:2},{value:"Recover by record headers",id:"recover-by-record-headers",level:2},{value:"Manual assigning",id:"manual-assigning",level:3},{value:"Open log file",id:"open-log-file",level:2}],c={toc:p};function h(e){var{components:t}=e,o=n(e,["components"]);return(0,r.kt)("wrapper",i({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page is used to repair the data file when it has been damaged. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/18/MSC/verify"}),"verification"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Each repair operation involves the duplication of the original file, which increases the size of the application folder. It is important to take this into account (especially in macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually removing the copies of the original file inside the package can be useful to minimize the package size."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Repairing is only available in maintenance mode. If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the database will be closed and restarted in maintenance mode.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the database is encrypted, repairing data includes decryption and encryption steps and thus, requires the current data encryption key. If no valid encryption key has already been provided, a dialog requesting the passphrase or the encryption key is displayed (see Encrypt page).")),(0,r.kt)("h2",i({},{id:"file-overview"}),"File overview"),(0,r.kt)("h3",i({},{id:"data-file-to-be-repaired"}),"Data file to be repaired"),(0,r.kt)("p",null,"Pathname of the current data file. The ",(0,r.kt)("strong",{parentName:"p"},"[...]")," button can be used to specify another data file. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. If you perform a ",(0,r.kt)("a",i({parentName:"p"},{href:"#standard_repair"}),"standard repair"),", you must select a data file that is compatible with the open project file. If you perform a ",(0,r.kt)("a",i({parentName:"p"},{href:"#recover-by-record-headers"}),"recover by record headers")," repair, you can select any data file. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window."),(0,r.kt)("h3",i({},{id:"original-files-backup-folder"}),"Original files backup folder"),(0,r.kt)("p",null,"By default, the original data file will be duplicated before the repair operation. It will be placed in a subfolder named \u201cReplaced files (repairing)\u201d in the database folder. The second ",(0,r.kt)("strong",{parentName:"p"},"[...]")," button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks."),(0,r.kt)("h3",i({},{id:"repaired-files"}),"Repaired files"),(0,r.kt)("p",null,'4D creates a new blank data file at the location of the original file. The original file is moved into the folder named "\\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (database folder by default). The blank file is filled with the recovered data.'),(0,r.kt)("h2",i({},{id:"standard-repair"}),"Standard repair"),(0,r.kt)("p",null,"Standard repair should be chosen when only a few records or indexes are damaged (address tables are intact). The data is compacted and repaired. This type of repair can only be performed when the data and structure file match."),(0,r.kt)("p",null,'When the repair procedure is finished, the "Repair" page of the MSC is displayed. A message indicates if the repair was successful. If so, you can open the database immediately.\n',(0,r.kt)("img",{src:a(25044).Z,width:"225",height:"45"})),(0,r.kt)("h2",i({},{id:"recover-by-record-headers"}),"Recover by record headers"),(0,r.kt)("p",null,"Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective."),(0,r.kt)("p",null,"4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have deselected the ",(0,r.kt)("strong",{parentName:"p"},"Records definitively deleted")," option in the properties of a table in the database structure, performing a recovery by header markers may cause records that were previously deleted to reappear.\nRecovery by headers does not take integrity constraints into account. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared ",(0,r.kt)("strong",{parentName:"p"},"Never Null"),".")),(0,r.kt)("p",null,"When you click on ",(0,r.kt)("strong",{parentName:"p"},"Scan and repair..."),", 4D performs a complete scan of the data file. When the scan is complete, the results appear in the following window:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37137).Z,width:"906",height:"683"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If all the records and all the tables have been assigned, only the main area is displayed.")),(0,r.kt)("p",null,'The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The first table lists the information from the data file scan. Each row shows a group of recoverable records in the data file:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Order")," column indicates the recovery order for the group of records.  "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Count")," column indicates the number of the records in the table."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Destination table")," column indicates the names of tables that were automatically assigned to the groups of identified records. The names of tables assigned automatically appear in green. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Recover")," column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The second table lists the tables of the project file."))),(0,r.kt)("h3",i({},{id:"manual-assigning"}),"Manual assigning"),(0,r.kt)("p",null,'If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually.\nTo do this, first select an unassigned group of records in the first table. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8263).Z,width:"903",height:"682"})),(0,r.kt)("p",null,'Next select the table you want to assign to the group in the "Unassigned tables" table and click on the ',(0,r.kt)("strong",{parentName:"p"},"Identify table")," button. You can also assign a table using drag and drop.\nThe group of records is then associated with the table and it will be recovered in this table. The names of tables that are assigned manually appear in black.\nUse the ",(0,r.kt)("strong",{parentName:"p"},"Ignore records")," button to remove the association made manually between the table and the group of records."),(0,r.kt)("h2",i({},{id:"open-log-file"}),"Open log file"),(0,r.kt)("p",null,"After repair is completed, 4D generates a log file in the Logs folder of the database. This file allows you to view all the operations carried out. It is created in XML format and named:  ",(0,r.kt)("em",{parentName:"p"},"DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml"),'" where:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DatabaseName"),' is the name of the project file without any extension, for example "Invoices",'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"yyyy-mm-dd hh-mm-ss"),' is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".')),(0,r.kt)("p",null,"When you click on the ",(0,r.kt)("strong",{parentName:"p"},"Open log file")," button, 4D displays the most recent log file in the default browser of the machine."))}h.isMDXComponent=!0},25044:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAtCAIAAADX+5viAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAPcSURBVHhe7ZdBaxNBFMf7qXISD/Ugiih48KAIEYXeRDz3HlD8JLlJta0IIhZpEBLtxZNCL4k2mkZqhXpydt7M7JuZt5vdJGYH/f8ouvvmzZv3Jj9CuzYFIG3gKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOApSB46C1GnY0U5rLaTV6fd1uN01STVZbLdHt21b0k/qfwplD+Us2ETFUxpn3j5rXU8S36PUcT7qX3VUX2uV2l5XcFQEjprXmpTv1rdaw9EwE44ug1rXszRHD4bH5qk+1HHoaKuV/csXKE5EHyBfVGTzR/kkqEFlFBf0qqlMJw23p6QfWgpGEPJZR/wTo1PabW+7QjwxDlLV+AIJnk+nFlQIGyhKU49VagYn+xOXsBxHH/fH554Otz99N+81odbtIN47Peph9H3QWCxqoE8lz/Pnd1cpripYgsM7xCXkmfqJluN+5BEstoh0rEYv8O3FJ0rBaLt3OoXycytVcNkZejWLuIfqNXWQPc5mCY4+6o8v73y52zu98Hw0n6bhLbipFP51eLAR+cx8t727DKof3k6U4PDq+G3M7EcewcU1KuLegqOFLaqUeGJJUJ9Ou736Qai4QtiAe9Zkqy6tQk3WlFdyJos6SoLeH5w9/PB7492v+TQNBvQmsLcQ5viI81Mw22KLBJligsO7R5dgH8r7EUeQj6No/q7hCbaUeKLcBtXUpwsJfqikgglShpUsC7pV91ChJmvKldQLs1jIUS4o/dx4Pb26O/pW81fTcCQ+QXALbq5uh98Aq+Dy8hhb5bXlBAfLZG1U68fbbLZ0i49zRS06QJG8kniiGKTtOhadFYVKKngN5NvyJ9d4hZosJV8O9onM72gs6O23J5e2Rx9Htf94ChuldxqQf3xmNCKci27Vke22IfrjwW6wUZUhJxh4F3kb7sFlGPzd4gjRcTag8LezhQzTRMGJcZC261206FWPQ0UVHGwQRX5dOpI9VKkpVRXai5AdfXM4ufly9Pmo0LYlCgpSxMmXAIKje4eT9WfD66+Or+3Kmqq/4iHoP07KjqpvUCXovd6pMu/W3o9YU3yD/hck6+jBcHJ+a3Rn/6fzL9AUgoLVE36PbvaOrrw4esAsNJqOIShoBuH3UVHT9a0hBAWNIDiqiDXd6J1AUNAIsqOKzX2t6XsjJf+BoGCVFDqqEDWFoGDFlDmqCDSFoGD1zHBUYTQdnEFQ0AizHVUoTS/ufIWgoBEqOap4MhhDUNAIVR0FoCngKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOArSZjr9Az4Tm0/7xRlRAAAAAElFTkSuQmCC"},37137:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mscrepair2-70f7dc0be1529255122f9c117f88d8a0.png"},8263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mscrepair3-fca9ba66ac4c95138c0a5560adae3d30.png"}}]);