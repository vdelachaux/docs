"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});a(67294);var o=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},s=void 0,c={unversionedId:"MSC/compact",id:"version-18/MSC/compact",title:"P\xe1gina compactado",description:"You use this page to access the data file compacting functions.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/MSC/compact.md",sourceDirName:"MSC",slug:"/MSC/compact",permalink:"/docs/pt/18/MSC/compact",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-18/MSC/compact.md",tags:[],version:"18",frontMatter:{id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},sidebar:"docs",previous:{title:"P\xe1gina de Backup",permalink:"/docs/pt/18/MSC/backup"},next:{title:"P\xe1gina Retrocesso",permalink:"/docs/pt/18/MSC/rollback"}},l={},d=[{value:"Why compact your files?",id:"why-compact-your-files",level:2},{value:"Standard compacting",id:"standard-compacting",level:2},{value:"Open log file",id:"open-log-file",level:2},{value:"Modo avan\xe7ado",id:"modo-avan\xe7ado",level:2},{value:"Compact records and indexes",id:"compact-records-and-indexes",level:3},{value:"Force updating of the records",id:"force-updating-of-the-records",level:3},{value:"Compact address table",id:"compact-address-table",level:3}],p={toc:d};function u(e){var{components:t}=e,i=r(e,["components"]);return(0,o.kt)("wrapper",n({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You use this page to access the data file compacting functions."),(0,o.kt)("h2",n({},{id:"why-compact-your-files"}),"Why compact your files?"),(0,o.kt)("p",null,"Compacting files meets two types of needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Redu\xe7\xe3o do tamanho e otimiza\xe7\xe3o dos arquivos"),': os arquivos podem conter espa\xe7os n\xe3o utilizados ("ocos"). In fact, when you delete records, the space that they occupied previously in the file becomes empty. 4D reuses these empty spaces whenever possible, but since data size is variable, successive deletions or modifications will inevitably generate unusable space for the program. The same goes when a large quantity of data has just been deleted: the empty spaces remain unassigned in the file. The ratio between the size of the data file and the space actually used for the data is the occupation rate of the data. A rate that is too low can lead, in addition to a waste of space, to the deterioration of database performance. Compacting can be used to reorganize and optimize storage of the data in order to remove the \u201choles\u201d. The \u201cInformation\u201d area summarizes the data concerning the fragmentation of the file and suggests operations to be carried out. The ',(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/18/MSC/information#data"}),"Data")," tab on the \u201cInformation\u201d page of the MSC indicates the fragmentation of the current data file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Complete updating of data")," by applying the current formatting set in the structure file. This is useful when data from the same table were stored in different formats, for example after a change in the database structure."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Compacting is only available in maintenance mode. Se tentar realizar essa opera\xe7\xe3o em modo padr\xe3o, uma caixa de di\xe1logo de aviso informar\xe1 que o banco de dados ser\xe1 fechado e reiniciado em modo manuten\xe7\xe3o. Pode compactar um arquivo de dados que n\xe3o esteja aberto pelo banco de dados (ver ",(0,o.kt)("a",n({parentName:"p"},{href:"#compact-records-and-indexes"}),"Compactar os registros e os \xedndices")," abaixo).")))),(0,o.kt)("h2",n({},{id:"standard-compacting"}),"Standard compacting"),(0,o.kt)("p",null,"To directly begin the compacting of the data file, click on the compacting button in the MSC window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(82321).Z,width:"158",height:"88"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since compacting involves the duplication of the original file, the button is disabled when there is not adequate space available on the disk containing the file.")),(0,o.kt)("p",null,"This operation compacts the main file as well as any index files. 4D copies the original files and puts them in a folder named ",(0,o.kt)("strong",{parentName:"p"},"Replaced Files (Compacting)"),", which is created next to the original file. If you have carried out several compacting operations, a new folder is created each time. It will be named \u201cReplaced Files (Compacting)_1\u201d, \u201cReplaced Files (Compacting)_2\u201d, and so on. You can modify the folder where the original files are saved using the advanced mode."),(0,o.kt)("p",null,"When the operation is completed, the compacted files automatically replace the original files. O banco de dados fica operacional imediatamente sem outras manipula\xe7\xf5es."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the database is encrypted, compacting includes decryption and encryption steps and thus, requires the current data encryption key. If no valid data key has already been provided, a dialog box requesting the passphrase or the data key is displayed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning:")," Each compacting operation involves the duplication of the original file which increases the size of the application folder. It is important to take this into account (especially under macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually removing the copies of the original file inside the package can be useful in order to keep the package size down."),(0,o.kt)("h2",n({},{id:"open-log-file"}),"Open log file"),(0,o.kt)("p",null,"Depois que a compacta\xe7\xe3o termina, 4D gera um arquivo de hist\xf3rico na pasta Logs do banco de dados. This file allows you to view all the operations carried out. \xc9 criada no formato XML e se chama  ",(0,o.kt)("em",{parentName:"p"},"DatabaseName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"),'" onde:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"NomBase"),' \xe9 o nome do arquivo de estrutura sem extens\xe3o, por exemplo "Faturas",'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"yyyy-mm-dd hh-mm-ss"),' is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".')),(0,o.kt)("p",null,"When you click on the ",(0,o.kt)("strong",{parentName:"p"},"Open log file")," button, 4D displays the most recent log file in the default browser of the machine."),(0,o.kt)("h2",n({},{id:"modo-avan\xe7ado"}),"Modo avan\xe7ado"),(0,o.kt)("p",null,"The Compact page contains an ",(0,o.kt)("strong",{parentName:"p"},"Advanced>")," button, which can be used to access an options page for compacting data file."),(0,o.kt)("h3",n({},{id:"compact-records-and-indexes"}),"Compact records and indexes"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Compact records and indexes")," area displays the pathname of the current data file as well as a ",(0,o.kt)("strong",{parentName:"p"},"[...]")," button that can be used to specify another data file. When you click on this button, a standard Open document dialog box is displayed so that you can designate the data file to be compacted. You must select a data file that is compatible with the open structure file. Once this dialog box has been validated, the pathname of the file to be compacted is indicated in the window."),(0,o.kt)("p",null,"The second ",(0,o.kt)("strong",{parentName:"p"},"[...]")," button can be used to specify another location for the original files to be saved before the compacting operation. This option can be used more particularly when compacting voluminous files while using different disks."),(0,o.kt)("h3",n({},{id:"force-updating-of-the-records"}),"Force updating of the records"),(0,o.kt)("p",null,"When this option is checked, 4D rewrites every record for each table during the compacting operation, according to its description in the structure. If this option is not checked, 4D just reorganizes the data storage on disk. This option is useful in the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When field types are changed in the application structure after data were entered. For example, you may have changed a Longint field to a Real type. 4D even allows changes between two very different types (with risks of data loss), for instance a Real field can be changed to Text and vice versa. In this case, 4D does not convert data already entered retroactively; data is converted only when records are loaded and then saved. This option forces all data to be converted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When an external storage option for Text, Picture or BLOB data has been changed after data were entered. This can happen when databases are converted from a version prior to v13. As is the case with the retyping described above, 4D does not convert data already entered retroactively. To do this, you can force records to be updated in order to apply the new storage mode to records that have already been entered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When tables or fields were deleted. In this case, compacting with updating of records recovers the space of these removed data and thus reduces file size."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"All the indexes are updated when this option is selected.")))),(0,o.kt)("h3",n({},{id:"compact-address-table"}),"Compact address table"),(0,o.kt)("p",null,"(option only active when preceding option is checked)"),(0,o.kt)("p",null,"This option completely rebuilds the address table for the records during compacting. This optimizes the size of the address table and is mainly used for databases where large volumes of data were created and then deleted. In other cases, optimization is not a decisive factor."),(0,o.kt)("p",null,"Note that this option substantially slows compacting and invalidates any sets saved using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE SET")," command. Moreover, we strongly recommend deleting saved sets in this case because their use can lead to selections of incorrect data."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Compacting takes records of tables that have been put into the Trash into account. If there are a large number of records in the Trash, this can be an additional factor that may slow down the operation."),(0,o.kt)("li",{parentName:"ul"},"Using this option makes the address table, and thus the database, incompatible with the current journal file (if there is one). Ser\xe1 salvado automaticamente e um novo arquivo de hist\xf3rico ser\xe1 criado na pr\xf3xima vez que o banco for lan\xe7ado."),(0,o.kt)("li",{parentName:"ul"},"You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/MSC/information"}),"Information")," page of the MSC."))))}u.isMDXComponent=!0},82321:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="}}]);