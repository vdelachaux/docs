"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71083],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"pointer",title:"Ponteiro"},i=void 0,s={unversionedId:"Concepts/pointer",id:"version-19-R6/Concepts/pointer",title:"Ponteiro",description:"Uma vari\xe1vel ou express\xe3o ponteiro \xe9 uma refer\xeancia a outra vari\xe1vel (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. N\xe3o h\xe1 campo do tipo Pointer.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Concepts/dt_pointer.md",sourceDirName:"Concepts",slug:"/Concepts/pointer",permalink:"/docs/pt/19-R6/Concepts/pointer",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R6/Concepts/dt_pointer.md",tags:[],version:"19-R6",frontMatter:{id:"pointer",title:"Ponteiro"},sidebar:"docs",previous:{title:"Imagem",permalink:"/docs/pt/19-R6/Concepts/picture"},next:{title:"String",permalink:"/docs/pt/19-R6/Concepts/string"}},p={},u=[{value:"Usando um ponteiro: Exemplo b\xe1sico",id:"usando-um-ponteiro-exemplo-b\xe1sico",level:2},{value:"Pointer operators",id:"pointer-operators",level:2},{value:"Principais usos",id:"principais-usos",level:2},{value:"Pointers to tables",id:"pointers-to-tables",level:3},{value:"Pointers to fields",id:"pointers-to-fields",level:3},{value:"Pointers to local variables",id:"pointers-to-local-variables",level:3},{value:"Pointers to array elements",id:"pointers-to-array-elements",level:3},{value:"Pointers to arrays",id:"pointers-to-arrays",level:3},{value:"Indicadores como par\xe2metros para os m\xe9todos",id:"indicadores-como-par\xe2metros-para-os-m\xe9todos",level:3},{value:"Pointers to pointers",id:"pointers-to-pointers",level:3}],d={toc:u};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Uma vari\xe1vel ou express\xe3o ponteiro \xe9 uma refer\xeancia a outra vari\xe1vel (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. N\xe3o h\xe1 campo do tipo Pointer."),(0,r.kt)("p",null,"Os apontadores fornecem uma forma avan\xe7ada (na programa\xe7\xe3o) para se referir aos dados. Quando voc\xea usar a linguagem, voc\xea acessa v\xe1rios objetos - em particular, tabelas, campos, vari\xe1veis, objetos e matrizes - simplesmente usando seus nomes. No entanto, muitas vezes \xe9 \xfatil fazer refer\xeancia a estes elementos e aceder aos mesmos sem conhecer os seus nomes. Isto \xe9 o que os indicadores lhe permitem fazer."),(0,r.kt)("p",null,'O conceito subjacente aos ponteiros n\xe3o \xe9 assim t\xe3o incomum na vida cotidiana. Muitas vezes voc\xea se refere a algo sem saber sua identidade exata. Por exemplo, poderia dizer a um amigo: "Vamos dar uma volta no seu carro" em vez de "Vamos dar uma volta no carro com a placa 123ABD". Neste caso, est\xe1 a referenciar o carro com a matr\xedcula 123ABD, utilizando a frase "o seu carro". A frase "carro com matr\xedcula 123ABD" \xe9 como o nome de um objecto, e utilizar a frase "o seu carro" \xe9 como utilizar um ponteiro para fazer refer\xeancia ao objecto.'),(0,r.kt)("p",null,'Ser capaz de se referir a algo sem conhecer a sua identidade exata \xe9 muito \xfatil. De facto, o seu amigo poderia obter um carro novo, e a frase "o seu carro" continuaria a ser exata - continuaria a ser um carro e ainda poderia dar uma volta nele. Os ponteiros funcionam da mesma maneira. Por exemplo, um ponteiro poderia, de uma vez, referir-se a um campo num\xe9rico chamado Age, e mais tarde referir-se a uma vari\xe1vel num\xe9rica chamada Old Age. Em ambos os casos, o ponteiro faz refer\xeancia a dados num\xe9ricos que poderiam ser utilizados num c\xe1lculo.'),(0,r.kt)("p",null,"Pode usar apontadores para referenciar tabelas, campos, vari\xe1veis, matrizes, elementos de array, e objetos. A tabela a seguir d\xe1 um exemplo de cada tipo de dado:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Referencia\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Para usar"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Atribui\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tabela"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vpTable:=->","[Table]"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"DEFAULT TABLE(vpTable->)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vpField:=->","[Table]","Field"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"ALERT(vpField->)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'vpField->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Vari\xe1vel"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vpVar:=->Variable"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"ALERT(vpVar->)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'vpVar->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vpArr:=->Array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SORT ARRAY(vpArr->;>)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"COPY ARRAY (Arr;vpArr->)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Elemento Array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vpElem:=->Array{1}"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"ALERT (vpElem->)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'vpElem->:="John"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vpObj:=->myObject"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"ALERT (vpObj->myProp)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'vpObj->myProp:="John"')))),(0,r.kt)("h2",n({},{id:"usando-um-ponteiro-exemplo-b\xe1sico"}),"Usando um ponteiro: Exemplo b\xe1sico"),(0,r.kt)("p",null,"\xc9 mais f\xe1cil explicar o uso de ponteiros atrav\xe9s de um exemplo. Este exemplo mostra como acessar uma vari\xe1vel atrav\xe9s de um ponteiro. Come\xe7amos por criar uma vari\xe1vel:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$MyVar:="Hello"\n')),(0,r.kt)("p",null,'$MyVar \xe9 agora uma vari\xe1vel que cont\xe9m a string "Ol\xe1". Agora podemos criar um ponteiro para $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"C_POINTER($MyPointer)  \n$MyPointer:=->$MyVar\n")),(0,r.kt)("p",null,'O s\xedmbolo -> significa "fazer um ponteiro para". Este s\xedmbolo \xe9 formado por um tra\xe7o seguido por um sinal "maior que". Neste caso, ele recebe o ponteiro que faz refer\xeancia ou "aponta para" $MyVar. Este ponteiro \xe9 atribu\xeddo ao MyPointer com o operador de atribui\xe7\xe3o.'),(0,r.kt)("p",null,'$MyPointer \xe9 agora uma vari\xe1vel que cont\xe9m um ponteiro para $MyVar. $MyPointer n\xe3o cont\xe9m "Ol\xe1", que \xe9 o valor em $MyVar, mas pode usar $MyPointer para obter este valor. A seguinte express\xe3o devolve o valor em $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$MyPointer->\n")),(0,r.kt)("p",null,'Nesse caso, ela retorna a seq\xfc\xeancia de caracteres "Ol\xe1". O s\xedmbolo -> , quando segue um ponteiro, faz refer\xeancia ao objecto apontado. This is called dereferencing.'),(0,r.kt)("p",null,"It is important to understand that you can use a pointer followed by the -> symbol anywhere that you could have used the object that the pointer points to. This means that you could use the expression $MyPointer-> anywhere that you could use the original $MyVar variable. For example, the following line displays an alert box with the word Hello in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\n")),(0,r.kt)("p",null,'You can also use $MyPointer to change the data in $MyVar. For example, the following statement stores the string "Goodbye" in the variable $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n')),(0,r.kt)("p",null,"If you examine the two uses of the expression $MyPointer->, you will see that it acts just as if you had used $MyVar instead. In summary, the following two lines perform the same action\u2014both display an alert box containing the current value in the variable $MyVar:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"ALERT($MyPointer->)\nALERT($MyVar)\n")),(0,r.kt)("p",null,'The following two lines perform the same action\u2014 both assign the string "Goodbye" to $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n')),(0,r.kt)("h2",n({},{id:"pointer-operators"}),"Pointer operators"),(0,r.kt)("p",null,"Con:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"  vPtrA e vPtrB apontam para o mesmo objecto\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC aponta para outro objecto\n vPtrC:=->outroObject\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Sintaxe"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Retorna"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Igual"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Pointer = Pointer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vPtrA = vPtrB"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vPtrA = vPtrB"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Desigualdade"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Pointer # Pointer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vPtrA # vPtrC"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"vPtrA # vPtrB"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h2",n({},{id:"principais-usos"}),"Principais usos"),(0,r.kt)("h3",n({},{id:"pointers-to-tables"}),"Pointers to tables"),(0,r.kt)("p",null,"Anywhere that the language expects to see a table, you can use a dereferenced pointer to the table. You create a pointer to a table by using a line like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=->[anyTable]\n")),(0,r.kt)("p",null,"You can also get a pointer to a table by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$TablePtr:=Table(20)\n")),(0,r.kt)("p",null,"You can use the dereferenced pointer in commands, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"DEFAULT TABLE($TablePtr->)\n")),(0,r.kt)("h3",n({},{id:"pointers-to-fields"}),"Pointers to fields"),(0,r.kt)("p",null,"Anywhere that the language expects to see a field, you can use a dereferenced pointer to reference the field. You create a pointer to a field by using a line like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=->[aTable]ThisField\n")),(0,r.kt)("p",null,"You can also get a pointer to a field by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Field")," command, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$FieldPtr:=Field(1;2)\n")),(0,r.kt)("p",null,"You can use the dereferenced pointer in commands, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'OBJECT SET FONT($FieldPtr->;"Arial")\n')),(0,r.kt)("h3",n({},{id:"pointers-to-local-variables"}),"Pointers to local variables"),(0,r.kt)("p",null,"When you use pointers to process or local variables, you must be sure that the variable pointed to is already set when the pointer is used. Keep in mind that local variables are deleted when the method that created them has completed its execution and process variables are deleted at the end of the process that created them. When a pointer calls a variable that no longer exists, this causes a syntax error in interpreted mode (variable not defined) but it can generate a more serious error in compiled mode."),(0,r.kt)("p",null,"Pointers to local variables allow you to save process variables in many cases. Pointers to local variables can only be used within the same process. In the debugger, when you display a pointer to a local variable that has been declared in another method, the original method name is indicated in parentheses, after the pointer. For example, if you write in Method1:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello world"\n Method2(->$MyVar)\n')),(0,r.kt)("p",null,"In Method2, the debugger will display $1 as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"$1"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"->$MyVar (Method1)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"The value of $1 will be:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"$MyVar (Method1)"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),'"Hello world"'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("h3",n({},{id:"pointers-to-array-elements"}),"Pointers to array elements"),(0,r.kt)("p",null,"You can create a pointer to an array element. For example, the following lines create an array and assign a pointer to the first array element to a variable called $ElemPtr:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($anArray;10) //Create an array\n$ElemPtr:=->$anArray{1} //Create a pointer to the array element\n")),(0,r.kt)("p",null,"You could use the dereferenced pointer to assign a value to the element, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$ElemPtr->:=8\n")),(0,r.kt)("h3",n({},{id:"pointers-to-arrays"}),"Pointers to arrays"),(0,r.kt)("p",null,"You can create a pointer to an array. For example, the following lines create an array and assign a pointer to the array to a variable called $ArrPtr:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"ARRAY REAL($anArray;10) //Create an array\n$ArrPtr:=->$anArray //Create a pointer to the array\n")),(0,r.kt)("p",null,"It is important to understand that the pointer points to the array; it does not point to an element of the array. Por exemplo, pode utilizar o ponteiro desreferenciado das linhas anteriores como este:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"ORDENAR ARRAY($ArrPtr->;>) //Ordenar o array\n")),(0,r.kt)("p",null,"Se precisar de se referir ao quarto elemento do array usando o ponteiro, fa\xe7a desta maneira:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"})," ArrPtr->{4}:=84\n")),(0,r.kt)("h3",n({},{id:"indicadores-como-par\xe2metros-para-os-m\xe9todos"}),"Indicadores como par\xe2metros para os m\xe9todos"),(0,r.kt)("p",null,"Pode passar um ponteiro como par\xe2metro para um m\xe9todo. Dentro do m\xe9todo, voc\xea pode modificar o objeto referenciado pelo ponteiro. Por exemplo, o seguinte m\xe9todo, ",(0,r.kt)("inlineCode",{parentName:"p"},"takeTwo"),", toma dois par\xe2metros que s\xe3o indicadores. It changes the object referenced by the first parameter to uppercase characters, and the object referenced by the second parameter to lowercase characters. Here is the project method:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"  //takeTwo project method\n  //$1 \u2013 Pointer to a string field or variable. Change this to uppercase.\n  //$2 \u2013 Pointer to a string field or variable. Change this to lowercase.\n $1->:=Uppercase($1->)\n $2->:=Lowercase($2->)\n")),(0,r.kt)("p",null,"The following line uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"takeTwo")," method to change a field to uppercase characters and to change a variable to lowercase characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"takeTwo(->[myTable]myField;->$MyVar)\n")),(0,r.kt)("p",null,"If the field ","[myTable]",'myField contained the string "jones", it would be changed to the string "JONES". If the variable $MyVar contained the string "HELLO", it would be changed to the string "hello".'),(0,r.kt)("p",null,"In the takeTwo method, and in fact, whenever you use pointers, it is important that the data type of the object being referenced is correct. In the previous example, the pointers must point to something that contains a string or text."),(0,r.kt)("h3",n({},{id:"pointers-to-pointers"}),"Pointers to pointers"),(0,r.kt)("p",null,"If you really like to complicate things, you can use pointers to reference other pointers. Consider this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n')),(0,r.kt)("p",null,"It displays an alert box with the word \u201cGoodbye\u201d in it."),(0,r.kt)("p",null,"Here is an explanation of each line of the example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'$MyVar:="Hello" --\x3e This line puts the string "Hello" into the variable $MyVar.'),(0,r.kt)("li",{parentName:"ul"},"$PointerOne:=->$MyVar --\x3e $PointerOne now contains a pointer to $MyVar."),(0,r.kt)("li",{parentName:"ul"},"$PointerTwo:=->$PointerOne --\x3e $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar."),(0,r.kt)("li",{parentName:"ul"},'($PointerTwo->)->:="Goodbye" --\x3e $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, $MyVar is assigned "Goodbye".'),(0,r.kt)("li",{parentName:"ul"},"ALERT (($PointerTwo->)->) --\x3e Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.")),(0,r.kt)("p",null,'The following line puts "Hello" into $MyVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'($PointerTwo->)->:="Hello"\n')),(0,r.kt)("p",null,'The following line gets "Hello" from $MyVar and puts it into $NewVar:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"$NewVar:=($PointerTwo->)->\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," Multiple dereferencing requires parentheses."))}m.isMDXComponent=!0}}]);