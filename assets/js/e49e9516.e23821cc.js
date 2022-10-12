"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98294],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,c=d["".concat(i,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"operators",title:"Operators"},p=void 0,i={unversionedId:"Concepts/operators",id:"version-19-R7/Concepts/operators",title:"Operators",description:"An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.",source:"@site/versioned_docs/version-19-R7/Concepts/operators.md",sourceDirName:"Concepts",slug:"/Concepts/operators",permalink:"/docs/Concepts/operators",draft:!1,tags:[],version:"19-R7",frontMatter:{id:"operators",title:"Operators"},sidebar:"docs",previous:{title:"A Quick Tour",permalink:"/docs/Concepts/quick-tour"},next:{title:"Data types overview",permalink:"/docs/Concepts/data-types"}},s={},m=[{value:"Terminology",id:"terminology",level:2},{value:"Assignment operator",id:"assignment-operator",level:2},{value:"Basic operators",id:"basic-operators",level:2},{value:"Compound assignment operators",id:"compound-assignment-operators",level:2},{value:"Short-circuit operators",id:"short-circuit-operators",level:2},{value:"Short-circuit AND operator (&amp;&amp;)",id:"short-circuit-and-operator-",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Short-circuit OR operator (||)",id:"short-circuit-or-operator-",level:3},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:"Precedence",id:"precedence",level:3},{value:"Ternary operator",id:"ternary-operator",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples-1",level:3},{value:"A simple example",id:"a-simple-example",level:4},{value:"Handling data from a table",id:"handling-data-from-a-table",level:4},{value:"Truthy and falsy",id:"truthy-and-falsy",level:2}],u={toc:m};function d(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"1 + 2")," uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values. "),(0,n.kt)("p",null,"The 4D language supports the operators you may already know from other languages like C or JavaScript. However, the assignment operator is ",(0,n.kt)("inlineCode",{parentName:"p"},":=")," to prevent it from being mistakenly used when the equal to operator (",(0,n.kt)("inlineCode",{parentName:"p"},"="),") is intended. ",(0,n.kt)("a",r({parentName:"p"},{href:"#basic-operators"}),"Basic operators")," such as arithmetic operators (+, -, *, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Like JavaScript, the 4D language supports the concept of ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy and falsy values"),", which in use in ",(0,n.kt)("a",r({parentName:"p"},{href:"#short-circuit-operators"}),"short-cicrcuit operators"),". "),(0,n.kt)("h2",r({},{id:"terminology"}),"Terminology"),(0,n.kt)("p",null,"The 4D language supports ",(0,n.kt)("strong",{parentName:"p"},"binary")," and ",(0,n.kt)("strong",{parentName:"p"},"ternary")," operators:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"binary operators operate on two targets (such as ",(0,n.kt)("inlineCode",{parentName:"li"},"2 + 3"),") and appear in between their two targets."),(0,n.kt)("li",{parentName:"ul"},"ternary operators operate on three targets. Like C, 4D has only one ternary operator, the ",(0,n.kt)("a",r({parentName:"li"},{href:"#ternary-operator"}),"ternary conditional operator")," (",(0,n.kt)("inlineCode",{parentName:"li"},"a ? b : c"),").")),(0,n.kt)("p",null,"The values that operators affect are operands. In the expression ",(0,n.kt)("inlineCode",{parentName:"p"},"1 + 2"),", the + symbol is a binary operator and its two operands are the values 1 and 2."),(0,n.kt)("h2",r({},{id:"assignment-operator"}),"Assignment operator"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"assignment operator")," (",(0,n.kt)("inlineCode",{parentName:"p"},"a:=b"),") initializes or updates the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," with the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$myNumber:=3 //assigns 3 to MyNumber variable  \n$myDate:=!2018/01/21! //assigns a date literal\n$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength\n$col:=New collection //$col is initialized with an empty collection\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Do NOT confuse the assignment operator ",(0,n.kt)("inlineCode",{parentName:"p"},":=")," with the equality comparison operator ",(0,n.kt)("inlineCode",{parentName:"p"},"="),". A different assignment operator (and not ",(0,n.kt)("inlineCode",{parentName:"p"},"="),") was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Such errors are often difficult to recognize by the compiler and lead to time-consuming troubleshooting.")),(0,n.kt)("h2",r({},{id:"basic-operators"}),"Basic operators"),(0,n.kt)("p",null,"Operator results depend on the ",(0,n.kt)("strong",{parentName:"p"},"data types")," they are applied to. 4D supports different operators on scalar data types. They are described with the data types, in the following sections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/boolean#logical-operators"}),(0,n.kt)("strong",{parentName:"a"},"Logical operators"))," (on ",(0,n.kt)("strong",{parentName:"li"},"boolean")," expressions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/date#date-operators"}),(0,n.kt)("strong",{parentName:"a"},"Date operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/time#time-operators"}),(0,n.kt)("strong",{parentName:"a"},"Time operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/number#number-operators"}),(0,n.kt)("strong",{parentName:"a"},"Number operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/number#bitwise-operators"}),(0,n.kt)("strong",{parentName:"a"},"Bitwise operators"))," (on ",(0,n.kt)("strong",{parentName:"li"},"long integer")," expressions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/picture#picture-operators"}),(0,n.kt)("strong",{parentName:"a"},"Picture operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/pointer#pointer-operators"}),(0,n.kt)("strong",{parentName:"a"},"Pointer operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/Concepts/string#string-operators"}),(0,n.kt)("strong",{parentName:"a"},"String operators")))),(0,n.kt)("h2",r({},{id:"compound-assignment-operators"}),"Compound assignment operators"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,"4D provides ",(0,n.kt)("strong",{parentName:"p"},"compound assignment operators")," that combine assignment with another operation. One example is the addition assignment operator (",(0,n.kt)("inlineCode",{parentName:"p"},"+="),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$a:=1 \n$a+=2 // $a=3\n")),(0,n.kt)("p",null,"The following compound assignment operators are supported:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operator"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Syntax"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Assigns"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Addition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text += Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'$t+=" World"  //$t:=$t+" World"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n+=5 //$n:=$n+5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$d+=5 //$d:=$d+5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time += Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1+=$t2 //$t1:=$t1+$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1+=5 //$t1:=$t1+5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture += Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Subtraction"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n-=5 //$n:=$n-5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$d-=5 //$d:=$d-5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time -= Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1-=$t2 //$t1:=$t1-$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1-=5 //$t1:=$t1-5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1-=5 //$p1:=$p1-5 (move $p1 horizontally 5 pixels to the left)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Division"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number /= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n/=5 //$n:=$n/5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time /= Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1/=$t2 //$t1:=$t1/$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time /= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1/=5 //$t1:=$t1/5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture /= Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1/=$p2 //$p1:=$p1/$p2 (add $p2 to the bottom of $p1)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture /= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1/=5 //$p1:=$p1/5 (move $p1 vertically 5 pixels)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Multiplication"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text *= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'$t*="abc"  //$t:=$t*"abc"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number *= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n*=5 //$n:=$n*5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time *= Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1*=$t2 //$t1:=$t1*$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time *= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1*=5 //$t1:=$t1*5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture *= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1*=5 //$p1:=$p1*5 (resize $p1 by 5)"))))),(0,n.kt)("p",null,"These operators apply on any ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"assignable expressions")," (except pictures as object properties or collection elements)."),(0,n.kt)("p",null,'The operation "source ',(0,n.kt)("inlineCode",{parentName:"p"},"operator"),' value" is not strictly equivalent to "source := source ',(0,n.kt)("inlineCode",{parentName:"p"},"operator"),' value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as ',(0,n.kt)("inlineCode",{parentName:"p"},"getPointer()->+=1")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"getPointer")," method is called only once."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/string#character-reference-symbols"}),"Character indexing in text")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/blob#accessing-a-scalar-blobs-bytes"}),"byte indexing in blob")," do not support these operators."),(0,n.kt)("h4",r({parentName:"blockquote"},{id:"examples"}),"Examples")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// Addition\n$x:=2\n$x+=5 //$x=7\n\n$t:="Hello" \n$t+=" World" //$t="Hello World" \n\n$d:=!2000-11-10!\n$d+=10 //$d=!2000-11-20!\n\n// Subtraction\n$x1:=10\n$x1-=5 //$x1=5\n\n$d1:=!2000-11-10!\n$d1-=10 // $d1=!2000-10-31!\n\n// Division\n$x3:=10\n$x3/=2 // $x3=5\n\n\n// Multiplication\n$x2:=10\n$x2*=5 // $x2=10\n\n$t2:="Hello" \n$t2*=2 // $t2="HelloHello"\n\n')),(0,n.kt)("h2",r({},{id:"short-circuit-operators"}),"Short-circuit operators"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"&&")," and ",(0,n.kt)("strong",{parentName:"p"},"||")," operators are ",(0,n.kt)("strong",{parentName:"p"},"short circuit operators"),". A short circuit operator is one that doesn't necessarily evaluate all of its operands. "),(0,n.kt)("p",null,"The difference with the single ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/boolean#logical-operators"}),(0,n.kt)("strong",{parentName:"a"},"&")," and ",(0,n.kt)("strong",{parentName:"a"},"|")," boolean operators")," is that the short-circuit operators ",(0,n.kt)("strong",{parentName:"p"},"&&")," and ",(0,n.kt)("strong",{parentName:"p"},"||")," don't return a boolean value. They evaluate expressions as ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy or falsy"),", then return one of the expressions."),(0,n.kt)("h3",r({},{id:"short-circuit-and-operator-"}),"Short-circuit AND operator (&&)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,"The rule is as follows: "),(0,n.kt)("p",null,"Given ",(0,n.kt)("inlineCode",{parentName:"p"},"Expr1 && Expr2"),":"),(0,n.kt)("p",null,"The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy"),", the value of the last operand is returned."),(0,n.kt)("p",null,"The following table summarizes the different cases for the ",(0,n.kt)("strong",{parentName:"p"},"&&")," operator:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value returned"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")))),(0,n.kt)("h4",r({},{id:"example-1"}),"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $v : Variant\n\n$v:= "Hello" && "World" //"World"\n$v:=False && 0 // False\n$v:=0 && False // False\n$v:=5 && !00-00-00! // 00/00/00\n$v := 5 && 10 && "hello" //"hello"\n')),(0,n.kt)("h4",r({},{id:"example-2"}),"Example 2"),(0,n.kt)("p",null,"Say you have an online store, and some products have a tax rate applied, and others don't. "),(0,n.kt)("p",null,"To calculate the tax, you multiply the price by the tax rate, which may not have been specified."),(0,n.kt)("p",null,"So you can write this: "),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $tax : Variant\n\n$tax:=$item.taxRate && ($item.price*$item.taxRate)\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$tax")," will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation."),(0,n.kt)("h4",r({},{id:"example-3"}),"Example 3"),(0,n.kt)("p",null,"Short-circuit operators are useful in tests such as:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If(($myObject#Null) && ($myObject.value>10))\n    //code\nEnd if\n")),(0,n.kt)("p",null,"If $myObject is Null, the second argument is not executed, thus no error is thrown."),(0,n.kt)("h3",r({},{id:"short-circuit-or-operator-"}),"Short-circuit OR operator (||)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,'The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:'),(0,n.kt)("p",null,"Given ",(0,n.kt)("inlineCode",{parentName:"p"},"Expr1 || Expr2"),":"),(0,n.kt)("p",null,"If Expr1 is ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy"),", Expr2 is not evaluated and the calculation returns Expr1."),(0,n.kt)("p",null,"If Expr1 is ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"falsy"),", the calculation returns Expr2."),(0,n.kt)("p",null,"The following table summarizes the different cases and the value returned for the ",(0,n.kt)("strong",{parentName:"p"},"||")," operator:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value returned"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")))),(0,n.kt)("h4",r({},{id:"example-1-1"}),"Example 1"),(0,n.kt)("p",null,"Say you have a table called Employee. Some employees have entered a phone number, and others haven't. This means that ",(0,n.kt)("inlineCode",{parentName:"p"},"$emp.phone")," could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $phone : Text\n\n$phone:=$emp.phone || "n/a"\n')),(0,n.kt)("p",null,"In which case ",(0,n.kt)("inlineCode",{parentName:"p"},"$phone"),' will store either a phone number or the "n/a" string. '),(0,n.kt)("h4",r({},{id:"example-2-1"}),"Example 2"),(0,n.kt)("p",null,"Given a table called Person with a ",(0,n.kt)("em",{parentName:"p"},"name")," field, as well as a ",(0,n.kt)("em",{parentName:"p"},"maiden name")," field for married women."),(0,n.kt)("p",null,"The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $name: Text\n\n$name:=$person.maidenName || $person.name\n")),(0,n.kt)("h3",r({},{id:"precedence"}),"Precedence"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"||")," operators have the same precedence as the logical operators ",(0,n.kt)("inlineCode",{parentName:"p"},"&")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"|"),", and are evaluated left to right."),(0,n.kt)("p",null,"This means that ",(0,n.kt)("inlineCode",{parentName:"p"},"a || b && c")," is evaluated as ",(0,n.kt)("inlineCode",{parentName:"p"},"(a || b) && c"),"."),(0,n.kt)("h2",r({},{id:"ternary-operator"}),"Ternary operator"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,"The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/branching#ifelseend-if"}),"If\u2026Else")," statements."),(0,n.kt)("p",null,"It takes three operands in the following order: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a condition followed by a question mark (?)"),(0,n.kt)("li",{parentName:"ul"},"an expression to execute if the condition is ",(0,n.kt)("a",r({parentName:"li"},{href:"#truthy-and-falsy"}),"truthy"),", followed by a colon (:) "),(0,n.kt)("li",{parentName:"ul"},"an expression to execute if the condition is ",(0,n.kt)("a",r({parentName:"li"},{href:"#truthy-and-falsy"}),"falsy"))),(0,n.kt)("h3",r({},{id:"syntax"}),"Syntax"),(0,n.kt)("p",null,"The syntax is as follows:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"condition ? exprIfTruthy : exprIfFalsy")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Since the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html"}),"token syntax")," uses colons, we recommend inserting a space after the colon ",(0,n.kt)("inlineCode",{parentName:"p"},":")," or enclosing tokens using parentheses to avoid any conflicts.")),(0,n.kt)("h3",r({},{id:"examples-1"}),"Examples"),(0,n.kt)("h4",r({},{id:"a-simple-example"}),"A simple example"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $age : Integer\nvar $beverage : Text\n\n$age:=26\n$beverage:=($age>=21) ? "Beer" : "Juice"\n\nALERT($beverage) // "Beer"\n')),(0,n.kt)("h4",r({},{id:"handling-data-from-a-table"}),"Handling data from a table"),(0,n.kt)("p",null,"This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $fullname : Text\n\n// If one of the names is missing, store the one that exists, otherwise store an empty string\n$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""\n')),(0,n.kt)("h2",r({},{id:"truthy-and-falsy"}),"Truthy and falsy"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,"As well as a type, each value also has an inherent Boolean value, generally known as either ",(0,n.kt)("strong",{parentName:"p"},"truthy")," or ",(0,n.kt)("strong",{parentName:"p"},"falsy"),". "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"truthy")," and ",(0,n.kt)("strong",{parentName:"p"},"falsy")," values are only evaluated by ",(0,n.kt)("a",r({parentName:"p"},{href:"#short-circuit-operators"}),"short-circuit")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"#ternary-operator"}),"ternary")," operators.")),(0,n.kt)("p",null,"The following values are ",(0,n.kt)("strong",{parentName:"p"},"falsy"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"false"),(0,n.kt)("li",{parentName:"ul"},"Null"),(0,n.kt)("li",{parentName:"ul"},"undefined"),(0,n.kt)("li",{parentName:"ul"},"Null object"),(0,n.kt)("li",{parentName:"ul"},"Null collection"),(0,n.kt)("li",{parentName:"ul"},"Null pointer"),(0,n.kt)("li",{parentName:"ul"},"Null picture"),(0,n.kt)("li",{parentName:"ul"},"Null date !00-00-00!"),(0,n.kt)("li",{parentName:"ul"},'"" - Empty strings'),(0,n.kt)("li",{parentName:"ul"},"[] - Empty collections"),(0,n.kt)("li",{parentName:"ul"},"{} - Empty objects")),(0,n.kt)("p",null,"All other values are considered ",(0,n.kt)("strong",{parentName:"p"},"truthy"),", including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0 - numeric zero (Integer or otherwise)")),(0,n.kt)("p",null,"In 4D, ",(0,n.kt)("strong",{parentName:"p"},"truthy")," and ",(0,n.kt)("strong",{parentName:"p"},"falsy")," evaluation reflects the ",(0,n.kt)("strong",{parentName:"p"},"usability")," of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle ",(0,n.kt)("em",{parentName:"p"},"undefined")," and ",(0,n.kt)("em",{parentName:"p"},"null")," values in objects and collections, so that a reduced number of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Concepts/branching#ifelseend-if"}),"If\u2026Else")," statements are necessary to avoid runtime errors."),(0,n.kt)("p",null,"For example, when you use a ",(0,n.kt)("a",r({parentName:"p"},{href:"#short-circuit-or-operator-"}),"short-circuit OR operator"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$value:=$object.value || $defaultValue\n")),(0,n.kt)("p",null,"... you get the default value whenever ",(0,n.kt)("em",{parentName:"p"},"$object")," does not contain the ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," property OR when it is ",(0,n.kt)("em",{parentName:"p"},"null"),". So this operator checks the existence or usability of the value instead of a specific value. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is ",(0,n.kt)("strong",{parentName:"p"},"truthy"),"."),(0,n.kt)("p",null,'Regarding values representing collections, objects, or strings, "empty" values are considered ',(0,n.kt)("strong",{parentName:"p"},"falsy"),". It is handy when you want to assign a default value whenever an empty one is encountered."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$phone:=$emp.phone || "n/a"\n')))}d.isMDXComponent=!0}}]);