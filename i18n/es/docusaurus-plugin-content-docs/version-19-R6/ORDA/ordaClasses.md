---
id: ordaClasses
title: Clases del modelo de datos
---



ORDA permite crear funciones de clase de alto nivel arriba del modelo de datos. Esto le permite escribir código orientado al negocio y "publicarlo" como una API. Los almacenes de datos, las clases de datos, las selecciones de entidades y las entidades están disponibles como objetos de clase que pueden contener funciones.

Por ejemplo, podría crear una función `getNextWithHigherSalary()` en la clase `EmployeeEntity` para devolver los empleados con un salario superior al seleccionado. Sería tan sencillo como llamar:

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Los desarrolladores no sólo pueden utilizar estas funciones en almacenes de datos locales, sino también en arquitecturas cliente/servidor y remotas:

```4d
 //$cityManager es la referencia de un datastore remoto
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Gracias a esta funcionalidad, toda la lógica de negocio de su aplicación 4D puede ser almacenada como una capa independiente para que pueda ser fácilmente mantenida y reutilizada con un alto nivel de seguridad:

- Puede "ocultar" la complejidad global de la estructura física subyacente y exponer únicamente funciones comprensibles y listas para usar.

- Si la estructura física evoluciona, basta con adaptar el código de las funciones y las aplicaciones cliente seguirán llamándolas de forma transparente.

- By default, all of your data model class functions (including [computed attribute functions](#computed-attributes-1)) and [alias attributes](#alias-attributes-1) are **not exposed** to remote applications and cannot be called from REST requests. Debe declarar explícitamente cada función pública y alias con la palabra clave [`exposed`](#exposed-vs-non-exposed-functions).

![](../assets/en/ORDA/api.png)


Además, 4D [precrea automáticamente](#creating-classes) las clases para cada objeto del modelo de datos disponible.


## Arquitectura

ORDA ofrece **clases genéricas** expuestas a través del [class store](Concepts/classes.md#class-stores) **`4D`**, así como **clases usuario** (que extienden las clases genéricas) expuestas en el [class store](Concepts/classes.md#class-stores) **`cs`**:

![](../assets/en/ORDA/ClassDiagramImage.png)

Todas las clases de modelo de datos ORDA se exponen como propiedades del class store **`cs`**. Las clases ORDA siguientes están disponibles:

| Class                       | Nombre del ejemplo   | Instanciado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs.DataStore                | cs.DataStore         | comando [`ds`](API/DataStoreClass.md#ds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| cs.*DataClassName*          | cs.Employee          | [`dataStore.DataClassName`](API/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| cs.*DataClassName*Entity    | cs.EmployeeEntity    | [`dataClass.get()`](API/DataClassClass.md#get), [`dataClass.new()`](API/DataClassClass.md#new), [`entitySelection.first()`](API/EntitySelectionClass.md#first), [`entitySelection.last()`](API/EntitySelectionClass.md#last), [`entity.previous()`](API/EntityClass.md#previous), [`entity.next()`](API/EntityClass.md#next), [`entity.first()`](API/EntityClass.md#first), [`entity.last()`](API/EntityClass.md#last), [`entity.clone()`](API/EntityClass.md#clone)                                                                                                                                                                                                                                                                                                                                                                                                   |
| cs.*DataClassName*Selection | cs.EmployeeSelection | [`dataClass.query()`](API/DataClassClass.md#query), [`entitySelection.query()`](API/EntitySelectionClass.md#query), [`dataClass.all()`](API/DataClassClass.md#all), [`dataClass.fromCollection()`](API/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](API/DataClassClass.md#newselection), [`entitySelection.drop()`](API/EntitySelectionClass.md#drop), [`entity.getSelection()`](API/EntityClass.md#getselection), [`entitySelection.and()`](API/EntitySelectionClass.md#and), [`entitySelection.minus()`](API/EntitySelectionClass.md#minus), [`entitySelection.or()`](API/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](API/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](API/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](API/EntitySelectionClass.md#slice), `Create entity selection` |

> Las clases usuario ORDA se almacenan como archivos de clase estándar (.4dm) en la subcarpeta Classes del proyecto [(ver más abajo)](#class-files).

Además, las instancias de objeto de clases usuario de los modelos de datos ORDA se benefician de las propiedades y funciones de sus padres:

- un objeto de clase Datastore puede llamar las funciones de la [clase genérica ORDA Datastore](API/DataStoreClass.md).
- un objeto de clase Dataclass puede llamar las funciones de la [clase genérica ORDA Dataclass](API/DataClassClass.md).
- un objeto de clase Entity selection puede llamar las funciones de la [clase genérica ORDA Entity selection](API/EntitySelectionClass.md).
- un objeto de clase Entity puede llamar las funciones de la [clase genérica ORDA Entity](API/EntityClass.md).



## Descripción de la clase

<details><summary>Histórico</summary>

| Versión | Modificaciones                                                                                            |
| ------- | --------------------------------------------------------------------------------------------------------- |
| v19 R4  | Alias attributes in the Entity Class                                                                      |
| v19 R3  | Atributos calculados en la Entity Class                                                                   |
| v18 R5  | Data model class functions are not exposed to REST by default. Nuevas palabras clave `exposed` y `local`. |
</details>


### Clase DataStore


Una base de datos 4D expone su propia clase DataStore en el class store `cs`.

- **Extends**: 4D.DataStoreImplementation
- **Nombre de clase**: cs.DataStore

Puede crear funciones en la clase DataStore que estarán disponibles a través del objeto `ds`.

#### Ejemplo

```4d  
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
```


Esta función puede ser llamada:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```



### Clase DataClass

Cada tabla expuesta con ORDA ofrece una clase DataClass en el class store `cs`.

- **Extends**: 4D.DataClass
- **Nombre de clase**: cs.*DataClassName* (donde *DataClassName* es el nombre de la tabla)
- **Ejemplo**: cs.Employee



#### Ejemplo

```4D
// cs.Company class


Class extends DataClass

// Devuelve las empresas cuyos ingresos están por encima de la media
// Devuelve una selección de entidades relacionadas con la clase de datos Company

Function GetBestOnes()
    $sel:=This.query("ingresos >= :1";This.all().average("ingresos"));
    $0:=$sel
```

A continuación, puede obtener una selección de entidades de las "mejores" empresas ejecutando:






```4d
    var $best : cs.CompanySelection
    $best:=ds.Company.GetBestOnes()
```

> [Los atributos calculados](#computed-attributes) se definen en [la clase Entity](#entity-class).


#### Ejemplo con un datastore remoto

El catálogo *City* siguiente está expuesto en un datastore remoto (vista parcial):

![](../assets/en/ORDA/Orda_example.png)

La clase `City` ofrece una API:

```4d  
// cs.City class

Class extends DataClass

Function getCityName()
    var $1; $zipcode : Integer
    var $zip : 4D.Entity
    var $0 : Text

    $zipcode:=$1
    $zip:=ds.ZipCode.get($zipcode)
    $0:="" 

    If ($zip#Null)
        $0:=$zip.city.name
    End if
```

La aplicación cliente abre una sesión en el datastore remoto:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

A continuación, una aplicación cliente puede utilizar la API para obtener la ciudad correspondiente al código postal (por ejemplo) a partir de un formulario:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```


### Clase EntitySelection

Cada tabla expuesta con ORDA ofrece una clase EntitySelection en el class store `cs`.

- **Extends**: 4D.EntitySelection
- **Nombre de clase**: *DataClassName*Selection (donde *DataClassName* es el nombre de la tabla)
- **Ejemplo**: cs.EmployeeSelection


#### Ejemplo

```4d
// Clase cs.EmployeeSelection 


Clase extends EntitySelection

//Extrae de esta selección de entidades los empleados con un salario superior a la media  

Function withSalaryGreaterThanAverage
    C_OBJECT($0)
    $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

A continuación, puede obtener los empleados con un salario superior a la media en cualquier selección de entidades mediante la ejecución:

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

### Entity Class

Cada tabla expuesta con ORDA ofrece una clase Entity en el class store `cs`.

- **Extends**: 4D.Entity
- **Nombre de clase**: *DataClassName*Entity (donde *DataClassName* es el nombre de la tabla)
- **Ejemplo**: cs.CityEntity

#### Atributos calculados

Las clases Entity permiten definir **atributos calculados** utilizando palabras clave específicas:

- `Función get` *attributeName*
- `Función set` *attributeName*
- `Function query` *attributeName*
- `Función orderBy` *attributeName*

Para más información, consulte la sección [Atributos calculados](#computed-attributes-1).

#### Atributos de tipo alias

Entity classes allow you to define **alias attributes**, usually over related attributes, using the `Alias` keyword:

`Alias` *attributeName* *targetPath*

For information, please refer to the [Alias attributes](#alias-attributes-1) section.


#### Ejemplo

```4d
// cs.CityEntity class

Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")


Function isBigCity(): Boolean
// La función getPopulation() es utilizable e la clase
$0:=This.getPopulation()>50000
```

Luego puede llamar este código:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
    ALERT($city.name + " is a big city")
End if
```

### Reglas específicas

Al crear o editar clases de modelos de datos, debe prestar atención a las siguientes reglas:

- Dado que se utilizan para definir nombres de clase DataClass automáticos en el [class store](Concepts/classes.md#class-stores) **cs**, las tablas 4D deben nombrarse para evitar todo conflicto en el espacio de nombres **cs**. En particular:
    - No dé el mismo nombre a una tabla 4D y a una [clase de usuarios](Concepts/classes.md#class-names). En tal caso, el constructor de la clase usuario queda inutilizado (el compilador devuelve una advertencia).
    - No utilice un nombre reservado para una tabla 4D (por ejemplo, "DataClass").

- Cuando defina una clase, asegúrese de que la instrucción [`Class extends`](Concepts/classes.md#class-extends-classnameclass) corresponda exactamente al nombre de la clase padre (recuerde que es sensible a mayúsculas y minúsculas). Por ejemplo, `Class extends EntitySelection` para una clase de selección de entidades.

- No se puede instanciar un objeto de clase de modelo de datos con la palabra clave `new()` (se devuelve un error). Debe utilizar uno de los métodos estándar listados en la columna [`Instanciado por` de la tabla de las clases ORDA](#architecture).

- No puede sobrescribir una función de clase ORDA nativa del [class store](Concepts/classes.md#class-stores) **`4D`** con una función de clase usuario de modelo de datos.


### Ejecución apropiativa

Cuando se compilan, las funciones de clase del modelo de datos se ejecutan:

- en **procesos apropiativos o cooperativos** (dependiendo del proceso de llamada) en aplicaciones monopuesto,
- en **procesos apropiativos** en las aplicaciones cliente/servidor (excepto si se utiliza la palabra clave [`local`](#local-functions), en cuyo caso depende del proceso llamante como en monopuesto).

Si su proyecto está diseñado para ejecutarse en cliente/servidor, asegúrese de que el código de la función de clase del modelo de datos es hilo seguro. Si se llama un código thread-unsafe, se lanzará un error en tiempo de ejecución (no se lanzará ningún error al momento de la compilación ya que la ejecución cooperativa está soportada en las aplicaciones monopuesto).


## Atributos calculados


### Generalidades

Un atributo calculado es un atributo de clase de datos con un tipo de datos que enmascara un cálculo. [Clases 4D estándar](Concepts/classes.md) implementa el concepto de propiedades calculadas con `get` (*getter*) y `set` (*setter*) [accessor functions](Concepts/classes.md#function-get-and-function-set). Los atributos de las clases de datos ORDA se benefician de esta funcionalidad y la extienden con dos funcionalidades adicionales: `query` y `orderBy`.

Como mínimo, un atributo calculado requiere una función `get` que describa cómo se calculará su valor. Cuando se suministra una función *getter* para un atributo, 4D no crea el espacio de almacenamiento subyacente en el datastore sino que sustituye el código de la función cada vez que se accede al atributo. Si no se accede al atributo, el código nunca se ejecuta.

Un atributo calculado también puede implementar una función `set`, que se ejecuta cada vez que se asigna un valor al atributo. La función *setter* describe qué hacer con el valor asignado, normalmente redirigiéndolo a uno o más atributos de almacenamiento o en algunos casos a otras entidades.

Al igual que los atributos de almacenamiento, los atributos calculados pueden incluirse en **búsquedas**. Por defecto, cuando se utiliza un atributo calculado en una búsqueda ORDA, el atributo se calcula una vez por entidad examinada. En algunos casos esto es suficiente. Sin embargo, para un mejor rendimiento, especialmente en cliente/servidor, los atributos calculados pueden implementar una función `query` que se basa en los atributos reales de la clase de datos y se beneficia de sus índices.

Del mismo modo, los atributos calculados pueden incluirse en **ordenaciones**. Cuando se utiliza un atributo calculado en una ordenación ORDA, el atributo se calcula una vez por entidad examinada. Al igual que en las búsquedas, los atributos calculados pueden implementar una función `orderBy` que sustituya a otros atributos durante la ordenación, aumentando así el rendimiento.


### Cómo definir los atributos calculados

Se crea un atributo calculado definiendo un accesor `get` en la [**clase entity **](#entity-class) de la dataclass. El atributo calculado estará disponible automáticamente en los atributos de la dataclass y en los atributos de la entidad.

También pueden definirse en la clase entity otras funciones de atributos calculados (`set`, `query` y `orderBy`). Son opcionales.

Dentro de las funciones de atributos calculados, [`This`](Concepts/classes.md#this) designa la entidad. Los atributos calculados pueden utilizarse y manejarse como cualquier atributo de dataclass, es decir, serán procesados por las funciones de [clase entity](API/EntityClass.md) o [clase entity selection](API/EntitySelectionClass.md).

> Los atributos calculados de ORDA no son [**expuestos**](#exposed-vs-non-exposed-functions) por defecto. Para exponer un atributo calculado, añada la palabra clave `exposed` a la definición de la función **get **.

> **Las funciones get y set** pueden tener la propiedad [**local**](#local-functions) para optimizar el procesamiento cliente/servidor.


### `Function get <attributeName>`

#### Sintaxis

```4d
{local} {exposed} Function get <attributeName>({$event : Object}) -> $result : type
// code
```
La función *getter* es obligatoria para declarar el atributo calculado *attributeName*. Cada vez que se accede al atributo *attributeName*, 4D evalúa el código `Function get` y devuelve el valor *$result*.

> Un atributo calculado puede utilizar el valor de otro(s) atributo(s) calculado(s). Las llamadas recursivas generan errores.

La función *getter* define el tipo de datos del atributo calculado gracias al parámetro *$result*. Se permiten los siguientes tipos resultantes:

- Scalar (text, boolean, date, time, number)
- Object
- Imagen
- BLOB
- Entity (por ejemplo, cs.EmployeeEntity)
- Entity selection (p.e. cs.EmployeeeSelection)

El parámetro *$event* contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                  |
| ------------- | ------- | -------------------------------------------------------------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado                                                                 |
| dataClassName | Text    | Nombre de la clase de datos                                                                  |
| kind          | Text    | "get"                                                                                        |
| result        | Variant | Opcional. Añada esta propiedad con valor Null si desea que un atributo escalar devuelva Null |


#### Ejemplos

- El campo calculado *fullName*:

```4d
Function get fullName($event : Object)-> $fullName : Text

  Case of   
    : (This.firstName=Null) & (This.lastName=Null)
        $event.result:=Null //use result to return Null
    : (This.firstName=Null)
        $fullName:=This.lastName
    : (This.lastName=Null)
        $fullName:=This.firstName
    Else 
        $fullName:=This.firstName+" "+This.lastName
    End case 
```

- Un atributo calculado puede basarse en un atributo relativo a una entidad:

```4d
Function get bigBoss($event : Object)-> $result: cs.EmployeeEntity
    $result:=This.manager.manager

```

- Un atributo calculado puede basarse en un atributo relacionado con una entity selection:

```4d
Function get coWorkers($event : Object)-> $result: cs.EmployeeSelection
    If (This.manager.manager=Null)
        $result:=ds.Employee.newSelection()
    Else 
        $result:=This.manager.directReports.minus(this)
    End if
```

### `Function set <attributeName>`

#### Sintaxis

```4d

{local} Function set <attributeName>($value : type {; $event : Object})
// code
```

La función *setter* se ejecuta cada vez que se asigna un valor al atributo. Esta función suele procesar los valores de entrada y el resultado se envía entre uno o varios atributos.

El parámetro *$value* recibe el valor asignado al atributo.

El parámetro *$event* contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                              |
| ------------- | ------- | ---------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado             |
| dataClassName | Text    | Nombre de la clase de datos              |
| kind          | Text    | "set"                                    |
| value         | Variant | Valor a tratar por el atributo calculado |

#### Ejemplo

```4d
Function set fullName($value : Text; $event : Object)
    var $p : Integer
    $p:=Position(" "; $value)       
    This.firstname:=Substring($value; 1; $p-1)  // "" if $p<0
    This.lastname:=Substring($value; $p+1)
```



### `Function query <attributeName>`

#### Sintaxis

```4d
Function query <attributeName>($event : Object)
Function query <attributeName>($event : Object) -> $result : Text
Function query <attributeName>($event : Object) -> $result : Object
// code
```

Esta función soporta tres sintaxis:

- Con la primera sintaxis, se maneja toda la consulta a través de la propiedad del objeto `$event.result`.
- Con la segunda y tercera sintaxis, la función devuelve un valor en *$result*:
    - Si *$result* es un texto, debe ser una cadena de consulta válida
    - Si *$result* es un Objeto, debe contener dos propiedades:

    | Propiedad          | Tipo       | Descripción                                                         |
    | ------------------ | ---------- | ------------------------------------------------------------------- |
    | $result.query      | Text       | Cadena de búsqueda válida con marcadores de posición (:1, :2, etc.) |
    | $result.parameters | Collection | valores para marcadores                                             |

La función `query` se ejecuta cada vez que se lanza una consulta que utiliza el atributo calculado. Resulta útil personalizar y optimizar las consultas basándose en los atributos indexados. Cuando la función `query` no está implementada para un atributo calculado, la búsqueda es siempre secuencial (basada en la evaluación de todos los valores utilizando la función `get <AttributeName>`).

> The following features are not supported: - calling a `query` function on computed attributes of type Entity or Entity selection, - using the `order by` keyword in the resulting query string.

El parámetro *$event* contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado                                                                                                                                                                                                                                                                                                                                                |
| dataClassName | Text    | Nombre de la clase de datos                                                                                                                                                                                                                                                                                                                                                 |
| kind          | Text    | "query"                                                                                                                                                                                                                                                                                                                                                                     |
| value         | Variant | Valor a tratar por el atributo calculado                                                                                                                                                                                                                                                                                                                                    |
| operator      | Text    | Operador de consulta (ver también la función de clase [`query`](API/DataClassClass.md#query)). Valores posibles:<li>== (es igual a, @ es comodín)</li><li>=== (igual a, @ no es comodín)</li><li>!= (no es igual a, @ es comodín)</li><li>!== (no es igual a, @ no es comodín)</li><li>< (menor que)</li><li><= (less than or equal to)</li><li>> (mayor que)</li><li>>= (mayor o igual que)</li><li>IN (incluído en)</li><li>% (contiene palabra clave)</li> |
| result        | Variant | Valor a tratar por el atributo calculado. Pase `Null` en esta propiedad si desea que 4D ejecute la consulta por defecto (siempre secuencialmente para los atributos calculados).                                                                                                                                                                                            |

> Si la función devuelve un valor en *$result* y se asigna otro valor a la propiedad `$event.result`, se da prioridad a `$event.result`.

#### Ejemplos

- Búsqueda en el atributo calculado *fullName*.

```4d
Function query fullName($event : Object)->$result : Object

    var $fullname; $firstname; $lastname; $query : Text
    var $operator : Text
    var $p : Integer
    var $parameters : Collection

    $operator:=$event.operator
    $fullname:=$event.value

    $p:=Position(" "; $fullname) 
    If ($p>0)
        $firstname:=Substring($fullname; 1; $p-1)+"@"
        $lastname:=Substring($fullname; $p+1)+"@"
        $parameters:=New collection($firstname; $lastname) //colección de dos elementos
    Else 
        $fullname:=$fullname+"@"
        $parameters:=New collection($fullname) // colección de un solo elemento
    End if 

    Case of 
    : ($operator="==") | ($operator="===")
        If ($p>0)
            $query:="(firstName = :1 and lastName = :2) or (firstName = :2 and lastName = :1)"
        Else 
            $query:="firstName = :1 or lastName = :1"
        End if 
    : ($operator="!=")
        If ($p>0)
            $query:="firstName != :1 and lastName != :2 and firstName != :2 and lastName != :1"
        Else 
            $query:="firstName != :1 and lastName != :1"
        End if 
    End case 

    $result:=New object("query"; $query; "parameters"; $parameters)
```

> Tenga en cuenta que, por motivos de seguridad, se recomienda utilizar marcadores de posición en las consultas basadas en la introducción de texto por parte del usuario (consulte la descripción de [`query()`](API/DataClassClass.md#query)).

Código de llamada, por ejemplo:

```4d
$emps:=ds.Employee.query("fullName = :1"; "Flora Pionsin")
```

- Esta función gestiona las consultas sobre el atributo calculado *age* y devuelve un objeto con parámetros:

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null
End if

```

Código de llamada, por ejemplo:

```4d
// personas de entre 20 y 21 años (-1 día)
$twenty:=people.query("age = 20")  // llama al case "=="

// personas de 20 años hoy
$twentyToday:=people.query("age === 20") // equivalente a people.query("age is 20") 

```


### `Function orderBy <attributeName>`

#### Sintaxis

```4d
Function orderBy <attributeName>($event : Object)
Function orderBy <attributeName>($event : Object)-> $result : Text

// code
```

La función `orderBy` se ejecuta siempre que sea necesario ordenar el atributo calculado. Permite ordenar el atributo calculado. Por ejemplo, puede ordenar *fullName* en función de los nombres y luego de los apellidos, o a la inversa. Cuando la función `orderBy` no está implementada para un atributo calculado, la ordenación es siempre secuencial (basada en la evaluación de todos los valores utilizando la función `get <AttributeName>`).

> **No se soporta** la llamada a una función `orderBy` sobre atributos calculados de tipo Entity class o Entity selection class.

El parámetro *$event* contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                              |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado                                                                             |
| dataClassName | Text    | Nombre de la clase de datos                                                                              |
| kind          | Text    | "orderBy"                                                                                                |
| value         | Variant | Valor a tratar por el atributo calculado                                                                 |
| operator      | Text    | "desc" o "asc" (por defecto)                                                                             |
| descending    | Boolean | `true` para orden descendente, `false` para orden ascendente                                             |
| result        | Variant | Valor a tratar por el atributo calculado. Pase `Null` si desea que 4D ejecute la ordenación por defecto. |

> Puede utilizar el `operator` o la propiedad `descending`. Es esencialmente una cuestión de estilo de programación (ver ejemplos).

Puede devolver la cadena `orderBy` en la propiedad del objeto `$event.result` o en el resultado de la función *$result*. Si la función devuelve un valor en *$result* y se asigna otro valor a la propiedad `$event.result`, se da prioridad a `$event.result`.


#### Ejemplo

Puede escribir código condicional:

```4d
Function orderBy fullName($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="firstName desc, lastName desc" 
    Else 
        $result:="firstName, lastName" 
    End if
```

También puede escribir un código compacto:

```4d
Function orderBy fullName($event : Object)-> $result : Text
    $result:="firstName "+$event.operator+", "lastName "+$event.operator

```

El código condicional es necesario en algunos casos:

```4d
Function orderBy age($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="birthday asc" 
    Else 
        $result:="birthday desc" 
    End if

```


## Atributos de tipo alias

### Generalidades

An **alias** attribute is built above another attribute of the data model, named **target** attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute. Puede definir tantos atributos de alias como desee en una clase de datos.

Los atributos del alias son particularmente útiles para manejar las relaciones N a N. They bring more readability and simplicity in the code and in queries by allowing to rely on business concepts instead of implementation details.

### Cómo definir los atributos alias

You create an alias attribute in a dataclass by using the `Alias` keyword in the [**entity class**](#entity-class) of the dataclass.


### `Alias <attributeName> <targetPath>`


#### Sintaxis

```
{exposed} Alias <attributeName> <targetPath>
```

*attributeName* must comply with [standard rules for property names](Concepts/identifiers.html#object-properties).

*targetPath* is an attribute path containing one or more levels, such as "employee.company.name". If the target attribute belongs to the same dataclass, *targetPath* is the attribute name.

Un alias puede ser utilizado como parte de una ruta de otro alias.

A [computed attribute](#computed-attributes-1) can be used in an alias path, but only as the last level of the path, otherwise, an error is returned. For example, if "fullName" is a computed attribute, an alias with path "employee.fullName" is valid.

> Los atributos alias de ORDA por defecto son **no expuestos**. You must add the [`exposed`](#exposed-vs-non-exposed-functions) keyword before the `Alias` keyword if you want the alias to be available to remote requests.


### Uso de los atributos alias

Alias attributes are read-only (except when based upon a scalar attribute of the same dataclass, see the last example below). They can be used instead of their target attribute path in class functions such as:

| Function                                       |
| ---------------------------------------------- |
| `dataClass.query()`, `entitySelection.query()` |
| `entity.toObject()`                            |
| `entitySelection.toCollection()`               |
| `entitySelection.extract()`                    |
| `entitySelection.orderBy()`                    |
| `entitySelection.orderByFormula()`             |
| `entitySelection.average()`                    |
| `entitySelection.count()`                      |
| `entitySelection.distinct()`                   |
| `entitySelection.sum()`                        |
| `entitySelection.min()`                        |
| `entitySelection.max()`                        |
| `entity.diff()`                                |
| `entity.touchedAttributes()`                   |

> Tenga en cuenta que los atributos alias se calculan en el servidor. In remote configurations, updating alias attributes in entities requires that entities are reloaded from the server.

### Propiedades del alias

Alias attribute [`kind`](../API/DataClassAttributeClass.md#kind) is "alias".

An alias attribute inherits its data [`type`](../API/DataClassAttributeClass.md#type) property from the target attribute:

- if the target attribute [`kind`](../API/DataClassAttributeClass.md#kind) is "storage", the alias data type is of the same type,
- if the target attribute [`kind`](../API/DataClassAttributeClass.md#kind) is "relatedEntity" or "relatedEntities", the alias data type is of the `4D.Entity` or `4D.EntitySelection` type ("*classname*Entity" or "*classname*Selection").

Alias attributes based upon relations have a specific [`path`](../API/DataClassAttributeClass.md#path) property, containing the path of their target attributes. Alias attributes based upon attributes of the same dataclass have the same properties as their target attributes (and no `path` property).


### Ejemplos

Considerando el siguiente modelo:

![](../assets/en/ORDA/alias1.png)

In the Teacher dataclass, an alias attribute returns all students of a teacher:

```4d
// cs.TeacherEntity class

Class extends Entity

Alias students courses.student //relatedEntities 
```

In the Student dataclass, an alias attribute returns all teachers of a student:

```4d
// cs.StudentEntity class

Class extends Entity

Alias teachers courses.teacher //relatedEntities 
```

En la dataclass Course:

- un atributo alias devuelve otra etiqueta para el atributo "name"
- un atributo alias devuelve el nombre del profesor
- un atributo alias devuelve el nombre del estudiante


```4d
// cs.CourseEntity class

Class extends Entity

Exposed Alias courseName name //scalar 
Exposed Alias teacherName teacher.name //scalar value
Exposed Alias studentName student.name //scalar value

```

Luego puede ejecutar las siguientes consultas:

```4d
// Find course named "Archaeology"
ds. Course.query("courseName = :1";"Archaeology")

// Find courses given by the professor Smith
ds. Course.query("teacherName = :1";"Smith")

// Find courses where Student "Martin" assists
ds. Course.query("studentName = :1";"Martin")

// Find students who have M. Smith as teacher 
ds. Student.query("teachers.name = :1";"Smith")

// Find teachers who have M. Martin as Student
ds. Teacher.query("students.name = :1";"Martin")
// Note that this very simple query string processes a complex 
// query including a double join, as you can see in the queryPlan:   
// "Join on Table : Course  :  Teacher. ID = Course.teacherID,    
//  subquery:[ Join on Table : Student  :  Course.studentID = Student. ID,
//  subquery:[ Student.name === Martin]]"
```


También puede editar el valor del alias *courseName*:

```4d
// Rename a course using its alias attribute
$arch:=ds.Course.query("courseName = :1";"Archaeology")
$arch.courseName:="Archaeology II"
$arch.save() //courseName and name are "Archaeology II"
```




## Funciones expuestas y no expuestas

For security reasons, all of your data model class functions and alias attributes are **not exposed** (i.e., private) by default to remote requests.

Las peticiones remotas incluyen:

- Las peticiones enviadas por las aplicaciones 4D remotas conectadas a través de `Open datastore`
- Peticiones REST

> Las peticiones cliente/servidor 4D estándar no se ven afectadas. Las funciones de clase del modelo de datos están siempre disponibles en esta arquitectura.

Una función que no está expuesta no está disponible en aplicaciones remotas y no se puede llamar a ninguna instancia de objeto desde una petición REST. Si una aplicación remota intenta acceder a una función no expuesta, se devuelve el error "-10729 - Método miembro desconocido".

Para permitir que una función de clase de modelo de datos sea llamada por una petición remota, debe declararla explícitamente utilizando la palabra clave `exposed`. La sintaxis formal es:

```4d  
// declarar una función expuesta
exposed Function <functionName>   
```

> La palabra clave `exposed` sólo puede utilizarse con las funciones de clase del modelo de datos. Si se utiliza con una función de [ clase usuario estándar](Concepts/classes.md), se ignora y el compilador devuelve un error.

### Ejemplo

Desea que una función expuesta utilice una función privada de una clase dataclass:

```4d
Class extends DataClass

//Función pública
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//función (privada) no expuesta
Function computeIDNumber()-> $id : Integer
//calcular un nuevo número de ID
$id:=...

```

Cuando se llama al código:

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Error "Unknown member method" 
```


## Funciones locales

Por defecto en la arquitectura cliente/servidor, las funciones de modelo de datos ORDA se ejecutan **en el servidor**. Suele ofrecer el mejor rendimiento, ya que sólo se envían por la red la petición de función y el resultado.

Sin embargo, puede ocurrir que una función sea totalmente ejecutable del lado del cliente (por ejemplo, cuando procesa los datos que ya están en la caché local). En este caso, puede ahorrar peticiones al servidor y, de este modo, mejorar el rendimiento de la aplicación insertando la palabra clave `local`. La sintaxis formal es:

```4d  
// declarar una función a ejecutar localmente en cliente/servidor
local Function <functionName>   
```

Con esta palabra clave, la función se ejecutará siempre del lado del cliente.

> La palabra clave `local` sólo puede utilizarse con las funciones de clase del modelo de datos. Si se utiliza con una función de [ clase usuario estándar](Concepts/classes.md), se ignora y el compilador devuelve un error.

Tenga en cuenta que la función funcionará incluso si eventualmente requiere acceder al servidor (por ejemplo si la caché ORDA está vencida). Sin embargo, es muy recomendable asegurarse de que la función local no accede a los datos del servidor, ya que de lo contrario la ejecución local no podría aportar ninguna ventaja en cuanto al rendimiento. Una función local que genera numerosas peticiones al servidor es menos eficiente que una función ejecutada en el servidor que sólo devolvería los valores resultantes. Por ejemplo, considere la siguiente función en la entidad Schools:

```4d
// Obtener los estudiantes más jóvenes  
// Utilización inapropiada de la palabra clave local
local Function getYoungest
    var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```
- **sin** la palabra clave `local`, el resultado se da utilizando una única petición
- **con** la palabra clave `local`, son necesarias 4 peticiones: una para obtener la entidad Schools, una para la `query()`, una para la `orderBy()`, y una para la `slice()`. En este ejemplo, el uso de la palabra clave `local` es inapropiado.


### Ejemplos

#### Cálculo de la edad

Dada una entidad con un atributo *birthDate*, queremos definir una función `age()` que sería llamada en un list box. Esta función puede ejecutarse en el cliente, lo que evita lanzar una petición al servidor para cada línea del list box.

En la classe *StudentsEntity*:

```4d
Function query age($event : Object)->$result : Object

    var $operator : Text
    var $age : Integer
    var $_ages : Collection

    $operator:=$event.operator

    $age:=Num($event.value)  // integer
    $d1:=Add to date(Current date; -$age-1; 0; 0)
    $d2:=Add to date($d1; 1; 0; 0)
    $parameters:=New collection($d1; $d2)

    Case of 

        : ($operator="==")
            $query:="birthday > :1 and birthday <= :2"  // after d1 and before or egal d2

        : ($operator="===") 

            $query:="birthday = :2"  // d2 = second calculated date (= birthday date)

        : ($operator=">=")
            $query:="birthday <= :2"

            //...
    other operators           


    End case 


    If (Undefined($event.result))
        $result:=New object
        $result.query:=$query
        $result.parameters:=$parameters
    End if
```

#### Verificación de los atributos

Queremos comprobar la consistencia de los atributos de una entidad cargada en el cliente y actualizada por el usuario antes de solicitar al servidor que los guarde.

En la clase *StudentsEntity*, la función local `checkData()` verifica la edad del estudiante:

```4d
Class extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="The birthdate is missing" 

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="The student must be between 15 and 30 - This one is "+String(This.age())
End case
```

Código de llamada:

```4d
var $status : Object

//Form.student es cargado con todos sus atributos y actualizado en un Formulario
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // llamada al servidor
End if
```



## Soporte en IDE 4D


### Archivos de clase (class files)

Una clase usuario ORDA del modelo de datos se define añadiendo, en la [misma ubicación que los archivos de clase usuarles](Concepts/classes.md#class-files) (*es decir* en la carpeta `/Sources/Classes` de la carpeta proyecto), un archivo .4dm con el nombre de la clase. Por ejemplo, una clase de entidad para la dataclass `Utilities` se definirá a través de un archivo `UtilitiesEntity.4dm`.


### Crear las clases

4D crea previa y automáticamente las clases vacías en memoria para cada objeto del modelo de datos disponible.

![](../assets/en/ORDA/ORDA_Classes-3.png)


> Por defecto, las clases ORDA vacías no se muestran en el Explorador. Para mostrarlas debe seleccionar **Mostrar todas las dataclasses** en el menú de opciones del Explorador: ![](../assets/en/ORDA/showClass.png)

Las clases de usuarios ORDA tienen un icono diferente de las otras clases. Las clases vacías se atenúan:

![](../assets/en/ORDA/classORDA2.png)

Para crear un archivo de clase ORDA, basta con hacer doble clic en la clase predefinida correspondiente en el Explorador. 4D crea el archivo de clase y añade el código `extends`. Por ejemplo, para una clase Entity:

```
Class extends Entity
```

Una vez definida una clase, su nombre ya no aparece atenuado en el Explorador.


### Editar las clases

To open a defined ORDA class in the 4D Code Editor, select or double-click on an ORDA class name and use **Edit...** from the contextual menu/options menu of the Explorer window:

![](../assets/en/ORDA/classORDA4.png)

Para las clases ORDA basadas en el datastore local (`ds`), puede acceder directamente al código de la clase desde la ventana de estructura 4D:

![](../assets/en/ORDA/classORDA5.png)


### Editor de código

In the 4D Code Editor, variables typed as an ORDA class automatically benefit from autocompletion features. Ejemplo con una variable de clase Entity:

![](../assets/en/ORDA/AutoCompletionEntity.png)

