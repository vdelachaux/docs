---
id: object
title: Objeto
---

Variáveis, campos ou expressões do tipo Objecto podem conter vários tipos de dados. A estrutura dos objectos 4D "nativos" baseia-se no princípio clássico dos pares "propriedade/valor". A sintaxe desses objetos é baseada na notação JSON:

- Um nome de uma propriedade é sempre um texto, por exemplo "nome". Deve seguir [regras específicas](identifiers.md#object-properties).

- Um valor de propriedade pode ser do seguinte tipo:
    - number (Real, Integer, etc.)
    - text
    - null
    - boolean
    - ponteiro (armazenado como tal, avaliado usando o comando `JSON Stringify` ou quando copiando),
    - data (tipo de data ou cadeia de formato de data ISO)
    - objecto(1) (os objectos podem ser aninhados em vários níveis)
    - imagem(2)
    - collection

(1)Os objectos ORDA, tais como [entidades](ORDA/dsMapping.md#entity) ou [seleções de entidades](ORDA/dsMapping.md#entity-selection) não podem ser armazenados em **campos de objectos**; no entanto, são totalmente suportados em **variáveis de objectos** em memória.

(2)Quando exposto como texto no depurador ou exportado para o JSON, as propriedades do objeto da imagem imprimem "[Imagem do objecto]".

**Atenção:** lembre que os nomes de atributos diferenciam entre maiúsculas e minúsculas.

Gerencia variáveis do tipo Objecto, campos ou expressões usando a notação de objecto [](dt_object.md#syntax-basics) ou os comandos clássicos disponíveis no tema **Objects (Language)** . Note-se que comandos específicos do tema **Consultas** tais como `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, ou `ORDER BY ATTRIBUTE` podem ser utilizados para realizar o processamento em campos de objectos.

Cada valor de propriedade acessado através da notação de objeto é considerado uma expressão. Pode utilizar tais valores sempre que se esperem expressões 4D:

- in 4D code, either written in the methods (Method editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- nas áreas de expressão do depurador e do explorador de Runtime,
- na lista de propriedades do editor de formulários para objectos de formulários: Variável ou Campo de expressão, bem como várias caixas de selecção e expressões de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte).

## Inicialização

Os objetos devem ter sido inicializados, por exemplo utilizando o comando `New object`, do contrário ao tentar ler ou modificar suas propriedades se gerará um error de sintaxe.

Exemplo:
```4d
 C_OBJECT($obVar) //criação de um objeto de tipo 4D variável
 $obVar:=Novo objeto //initialization do objeto e atribuição à variável 4D
```

### Objeto regular ou compartilhado

Pode criar dois tipos de objetos:

- objetos regulares (não compartilhados), usando o comando `Novo objeto`. Estes objetos podem ser editados sem qualquer controle de acesso específico, mas não podem ser compartilhados entre processos.
- objectos partilhados, utilizando o comando `New shared object` . Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by `Use... End use` structures. Para saber mais, consulte a seção [Objetos e coleções compartidos](Concepts/shared.md).


## Noções básicas de sintaxe

A notação de objetos pode ser utilizada para acessar aos valores das propriedades de objetos através de uma string de tokens.

### Propriedades dos objectos

Com a notação de objetos, pode acessar às propriedades dos objetos de duas maneiras:

- using a "dot" symbol: > object.propertyName

Exemplo:
```4d
     employee.name:="Smith"
```

- using a string within square brackets: > object["propertyName"]

Exemplos:
```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
     $vName:=employee[$property]

```

Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma coleção, a notação de objeto aceita uma sequência de símbolos para acessar subpropriedades, por exemplo:
```4d
 $vAge:=employee.children[2].age
```
A notação de objetos está disponível em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:

- com os **Objetos** mesmos (armazenados em variáveis, campos, propriedades de objetos, arrays de objetos ou elementos de coleções). Exemplos:

```4d
     $age:=$myObjVar.employee.age //variável
     $addr:=[Emp]data_obj.address //campo
     $city:=$addr.city //propriedade de um objeto
     $pop:=$aObjCountries{2}.population //array objeto
     $val:=$myCollection[3].subvalue //elemento coleção
```
- **Comandos 4D** que devolvem objectos. Exemplo:


```4d
     $measures:=Get database measures.DB.tables
```

- **Métodos de Projeto** que retornam objetos. Exemplo:

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //tamanho da coleção
```

### Ponteiro

**Nota preliminar:** dado que os objetos são passados sempre por referência, geralmente não é preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de memória e permitindo modificar o parâmetro e devolver as modificações. Como resultado, não é necessário usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros.

Usar notação de objeto com ponteiros é parecido com usar notação de objeto diretamente com os objetos, exceto que o símbolo "ponto" deve ser omitido.

- Acesso direto
> pointerOnObject->propertyName

- Acesso pelo nome:
> pointerOnObject->["propertyName"]

Exemplo:

```4d
 C_OBJECT(vObj)
 C_POINTER(vPtr)
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

### Valor Null

Quando se usar a notação de objeto, o valore **null** se torna compatível com o comando **Null** . Este comando pode ser usado para atribuir ou comparar o valor nulo com as propriedades de objeto ou elementos de coleção, por exemplo

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Para saber mais, veja a descrição do comando `Null`

### Valor não definido

A avaliação de uma propriedade de um objeto pode produzir às vezes um valor indefinido. Normalmente ao tentar ler ou atribuir expressões indefinidas, 4D gera erros. Isso não acontece nos casos abaixo:

- Ler uma propriedade de um objeto ou valor indefinido retorna indefinido; atribuir um valor indefinido a variáveis (exceto arrays) tem o mesmo efeito que chamar `CLEAR VARIABLE` com eles:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o. //$o.a é indefinido (sem erro), e atribuir este valor limpa a variável
      //$val=0
```

- Lendo a propriedade de **comprimento** de uma coleção indefinida produz 0:

```4d
     C_COLLECTION($c) //variable criada, mas nenhuma coleção é definida
     $size:=$c.length //$size = 0
```

- Um valor indefinido passado como parâmetro para um método de projecto é automaticamente convertido em 0 ou "" de acordo com o tipo de parâmetro declarado.

```4d
     C_OBJECT($o)
     meumétodo($o. ) //passa um parâmetro indefinido

      //In mymethod
     C_TEXT($1) //parameter type é texto
      // $1 contém ""
```

- Uma expressão de condição é automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

- A atribuição de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:
 - Objecto, colecção, ponteiro: Null
 - Imagem: Imagem vazia
 - Booleano: Falso
 - String: ""
 - Número: 0
 - Data: !00-00-00-00! se a configuração "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contrário ""
 - Hora: 0 (número de ms)
 - Indefinido, Null: sem mudança

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Atribuir um valor indefinido a uma propriedade objecto não existente não faz nada.

Quando expressões de um certo tipo são esperadas em seu código 4D, pode garantir que tenha o tipo correto mesmo quando são avaliadas como indefinidas, cercando-as com o comando de transformação 4D apropriado: `String`, `Num`, `Date`, `Time`, `Bool`. Estes comandos devolvem um valor vazio de tipo especificado quando a expressão é avaliada como indefinida. Por exemplo:

```4d
 $myString:=Caixa minúscula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que não esteja definido
  // para evitar erros no código
```


## Exemplos

Usar notação de objeto simplifica o código 4D no manejo dos mesmos. Entretanto note que a notação baseada em comandos continua sendo totalmente compatível.

- Escrita e leitura das propriedades de objetos (este exemplo compara a notação de objetos e anotação de comandos):

```4d
  // Usando a notação de objecto
 C_OBJECT($myObj) //declara um objecto variável 4D
 $myObj:=Novo objecto //cria um objecto e atribui à variável
 $myObj.age:=56
 $age:=$myObj.age //56

  // Usando a notação de comando
 C_OBJECT($myObj2) //declara um objecto variável 4D
 OB SET($myObj2; "age";42) //cria um objecto e acrescenta a propriedade age
 $age:=OB Get($myObj2; "age") //42

  // Claro, ambas as notações podem ser misturadas
 C_OBJECT($myObj3)
 OB SET($myObj3; "age";10)
 $age:=$myObj3.idade //10
```

- Criar uma propriedade e atribuir valores, incluindo objetos:

```4d
 C_OBJECT($Emp)
 $Emp:=Novo objecto
 $Emp.city:="London" //cria a propriedade da cidade e define o seu valor para "London"
 $Emp.city:="Paris" //modifica a propriedade da cidade
 $Emp.phone:=Novo objecto("office"; "123456789"; "home"; "0011223344")
  //cria a propriedade do telefone e define o seu valor para um objecto
```

- Obter um valor em um subobjeto é bem simples usando a notação de objeto:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```
- É possível acessar as propriedades como strings usando o operador []

```4d
 $Emp["city"]:="Berlim" //modifica a propriedade da cidade
  //isto pode ser útil para criar propriedades através de variáveis
 C_TEXT($addr)
 $addr:="endereço"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""".
 Fim para
  // cria 4 propriedades vazias "address1...address4" no objecto $Emp
```
