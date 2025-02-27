---
id: entities
title: Trabajar con los datos
---

En ORDA, se accede a los datos a través de [entidades](dsMapping.md#entity) y [selecciones de entidades](dsMapping.md#entity-selection). Estos objetos permiten crear, actualizar, buscar u ordenar los datos del datastore.

## Crear una entidad

Hay dos maneras de crear una nueva entidad en una dataclass:

* Como las entidades son referencias a registros de base de datos, puede crear entidades creando registros utilizando el lenguaje 4D "clásico" y luego referenciarlos con métodos ORDA tales como `entity.next( )` o `entitySelection.first( )`.
* También puede crear una entidad utilizando el método `dataClass.new( )`.

Tenga en cuenta que la entidad sólo se crea en la memoria. Si desea añadirla al almacén de datos, debe llamar al método `entity.save( )`.

Los atributos de la entidad están disponibles directamente como propiedades del objeto entidad. Para más información, consulte [Uso de los atributos de entidad](#using-entity-attributes).

Por ejemplo, queremos crear una nueva entidad en la dataclass "Employee" en el datastore actual con "John" y "Dupont" asignados a los atributos firstname y name:

```4d
var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Crear un nuevo objeto de tipo entidad
$myEntity.name:="Dupont" //asignar 'Dupont' al atributo 'name'
$myEntity.firstname:="John" //asignar 'John' al atributo 'firstname'
$myEntity.save() //guardar la entidad
```
> Una entidad se define sólo en el proceso en el que fue creada. No se puede, por ejemplo, almacenar una referencia a una entidad en una variable interproceso y utilizarla en otro proceso.

## Entidades y referencias

Una entidad contiene una referencia a un registro 4D. Diferentes entidades pueden referenciar el mismo registro 4D. Además, como una entidad puede almacenarse en una variable objeto 4D, diferentes variables pueden contener una referencia a la misma entidad.

Si ejecuta el siguiente código:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //accede al empleado con ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //ambas variables $e1 y $e2 comparten la referencia a la misma entidad
  //$e2.name contiene "Hammer"
```

Esto es ilustrado por el siguiente gráfico:

![](../assets/en/ORDA/entityRef1.png)

Ahora, si se ejecuta:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //variable $e1 contiene una referencia a una entidad
  //variable $e2 contiene otra referencia a otra entidad
  //$e2.name contiene "smith"
```

Esto es ilustrado por el siguiente gráfico:

![](../assets/en/ORDA/entityRef2.png)

Sin embargo, hay que tener en cuenta que las entidades se refieren al mismo registro. En todos los casos, si se llama al método `entity.save( )`, el registro se actualizará (excepto en caso de conflicto, ver [Entity locking](#entity-locking)).

De hecho, `$e1` y `$e2` no son la entidad misma, sino referencias a la entidad. Significa que puede pasarlos directamente a cualquier función o método, y actuará como un puntero, y más rápido que un puntero 4D. Por ejemplo:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

Y el método es:

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

Puede manejar las entidades como cualquier otro objeto en 4D y pasar sus referencias directamente como [parámetros](Concepts/parameters.md).
> Con las entidades, no existe el concepto de "registro actual" como en el lenguaje clásico de 4D. Puede utilizar tantas entidades como necesite al mismo tiempo. Tampoco existe un bloqueo automático de una entidad (ver [Bloqueo de una entidad](#entity-locking)). Cuando se carga una entidad, se utiliza el mecanismo de [lazy loading](glossary.md#lazy-loading), lo que significa que sólo se carga la información necesaria. No obstante, en cliente/servidor, la entidad puede cargarse directamente de forma automática si es necesario.

## Uso de los atributos de entidades

Los atributos de entidad almacenan los datos y mapean los campos correspondientes en la tabla correspondiente. Los atributos de entidad del tipo de almacenamiento pueden definirse u obtenerse en forma de propiedades simples del objeto entidad, mientras que las entidades de tipo **relatedEntity** o **relatedEntities** devolverán una entidad o una selección de entidades.
> Para más información sobre el tipo de atributo, consulte el párrafo [Atributos de almacenamiento y de relación](dsMapping.md#storage-and-relation-attributes).

Por ejemplo, para definir un atributo de almacenamiento:

```4d
 $entity:=ds.Employee.get(1) //get employee attribute with ID 1
 $name:=$entity.lastname //get the employee name, e.g. "Smith"
 $entity.lastname:="Jones" //set the employee name
```
> Pictures attributes cannot be assigned directly with a given path in an entity.

El acceso a un atributo relacionado depende del tipo de atributo. Por ejemplo, con la siguiente estructura:

![](../assets/en/ORDA/entityAttributes.png)

Puede acceder a los datos a través del objeto(s) relacionado(s):

```4d
 $entity:=ds.Project.all().first().theClient //obtener la entidad Company asociada al proyecto
 $EntitySel:=ds.Company.all().first().companyProjects //obtener la selección de proyectos de la empresa
```

Observe que tanto *theClient* como *companyProjects* en el ejemplo anterior son atributos de relación primaria y representan una relación directa entre las dos dataclasses. Sin embargo, los atributos de relación también pueden crearse a partir de rutas vía las relaciones de varios niveles, incluidas las referencias circulares. Por ejemplo, consideremos la siguiente estructura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada empleado puede ser gerente y puede tener un gerente. Para obtener el gerente del gerente de un empleado, puede simplemente escribir:

```4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

## Asignar los valores a los atributos de relación

En la arquitectura ORDA, los atributos de relación contienen directamente los datos relacionados con las entidades:

* Un atributo de relación de tipo N->1 (**relatedEntity** kind) contiene una entidad
* Un atributo de relación de tipo 1->N (**relatedEntities** kind) contiene una selección de entidades

Veamos la siguiente estructura (simplificada):

![](../assets/en/ORDA/entityAttributes3.png)

En este ejemplo, una entidad de la dataclass "Employee" contiene un objeto de tipo Entity en el atributo "employer" (o un valor nulo). Una entidad de la dataclass "Company" contiene un objeto de tipo EntitySelection en el atributo "staff" (o un valor nulo).
> En ORDA, la propiedad Automática o Manual de las relaciones no tiene ningún efecto.

Para asignar un valor directamente al atributo "employer", debe pasar una entidad existente de la dataclass "Company". Por ejemplo:

```4d
 $emp:=ds.Employee.new() //crear un empleado
 $emp.lastname:="Smith" //asignar un valor a un atributo
 $emp.employer:=ds.Company.query("name =:1"; "4D")[0]  //asignar una entidad de empresa
 $emp.save()
```

4D ofrece una facilidad adicional para introducir un atributo de relación para una entidad N relacionada con una entidad "1": se pasa directamente la llave primaria de la entidad "1" al asignar un valor al atributo de relación. Para que esto funcione, hay que pasar datos de tipo Número o Texto (el valor de la llave primaria) al atributo de relación. 4D se encarga automáticamente de buscar la entidad correspondiente en la dataclass. Por ejemplo:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=2 // asigna una llave primaria al atributo relación
  //4D busca la empresa cuya llave primaria (en este caso, su ID) es 2
  //y se la asigna al empleado
 $emp.save()
```

Esto resulta especialmente útil cuando se importan grandes cantidades de datos de una base de datos relacional. Este tipo de importación suele contener una columna "ID", que hace referencia a una llave primaria que puede asignarse directamente a un atributo de relación.

Esto también significa que puede asignar llaves primarias en las N entidades sin que las entidades correspondientes ya se hayan creado en la primera clase del datastore. Si asigna una llave primaria que no existe en la clase del datastore relacionado, 4D la almacenará y asignará en cuanto se cree esta entidad "1".

Puede asignar o modificar el valor de un atributo de entidad asociado "1" a partir de la dataclass "N" directamente vía el atributo relacionado. Por ejemplo, si desea modificar el atributo de nombre de una entidad Company asociada de una entidad Employee, puede escribir:

```code4d
 $emp:=ds.Empleado.get(2) // carga la entidad Employee con la llave primaria 2
 $emp.employer.name:="4D, Inc." //modificar el atributo de nombre de la empresa asociada
 $emp.employer.save() //guardar el atributo asociado
  //la entidad asociada se actualiza
```

## Crear una entity selection

Puede crear un objeto de tipo [entity selection](dsMapping.md#entity-selection) de la siguiente manera:

* Lance una búsqueda en las entidades [en una dataclass](API/DataClassClass.md#query) o en una [selección de entidades existente](API/EntitySelectionClass.md#query);
* Utilice la función de dataclass [`.all()`](API/DataClassClass.md#all) para seleccionar todas las entidades de una dataclass;
* Utilice el comando `Create entity selection` o la función de dataclass [`.newSelection()`](API/DataClassClass.md#newselection) para crear una selección de entidades vacía;
* Utilice la función [`.copy()`](API/EntitySelectionClass.md#copy) para duplicar una selección de entidades existente;
* Utilice una de las diversas funciones de [Entity selection class](API/EntitySelectionClass.md) que devuelve una nueva selección de entidades, como [`.or()`](API/EntitySelectionClass.md#or);
* Utilizando un atributo de relación de tipo "related entities" (ver abajo).

Puede crear y utilizar simultáneamente tantas selecciones de entidades diferentes como desee para una dataclass. Tenga en cuenta que una selección de entidades sólo contiene referencias a entidades. Diferentes selecciones de entidades pueden contener las referencias a las mismas entidades.

### Entity selections compartibles o modificables

Una entity selection puede ser **compartible** (legible por múltiples procesos, pero no alterable después de la creación) o **modificable** (soporta la función [`.add()`](API/EntitySelectionClass.md#add), pero sólo utilizable por el proceso actual).

#### Propiedades

Una entity selection **compartible** tiene las siguientes características:

* puede almacenarse en un objeto compartido o en una colección compartida, y puede pasarse como parámetro entre varios procesos o trabajadores;
* puede almacenarse en varios objetos o colecciones compartidos, o en un objeto o colección compartido que ya pertenezca a un grupo (no tiene un * identificador de bloqueo*);
* no permite la adición de nuevas entidades. Al intentar añadir una entidad a una entity selection compartibles se producirá un error (1637 - Esta entity selection no puede modificarse). Para añadir una entidad a una entity selection compartible, primero debe transformarla en una entity selection no compartible mediante la función [`.copy()`](API/EntitySelectionClass.md#copy), antes de llamar a [`.add()`](API/EntitySelectionClass.md#add).

> La mayoría de las funciones entity selection (como [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) soportan selecciones de entidades compartibles, ya que no necesitan alterar la selección de entidades original (devuelven una nueva).

Una entity selection **modificable** tiene las siguientes características:

* no puede compartirse entre los procesos, ni almacenarse en un objeto o colección compartido. Si se intenta almacenar una entity selection no compartible en un objeto o colección compartido, se producirá un error (-10721 - Tipo de valor no soportado en un objeto o colección compartido);
* acepta la adición de nuevas entidades, es decir, soporta la función [`.add()`](API/EntitySelectionClass.md#add).

#### ¿Cómo se definen?

La naturaleza **compartible** o **modificable** de una entity selection se define cuando se crea (no puede modificarse posteriormente). Puede conocer la naturaleza de una entity selection utilizando la función [.isAlterable()](API/EntitySelectionClass.md#isalterable) o el comando `OB Is shared`.

Una nueva entity selection es **compartible** en los siguientes casos:

* la nueva entity selection resulta de una función de clase ORDA aplicada a una dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
* la nueva entity selection se basa en una relación [entidad.*attributeName*](API/EntityClass.md#attributename) (por ejemplo, "company.employees") cuando *attributeName* es un atributo relacionado uno a muchos pero la entidad no pertenece a una entity selection.
* la nueva entity selection se copia explícitamente como compartible con [entitySelection.copy()](API/EntitySelectionClass.md#copy) o `OB Copy` (es decir, con la opción `ck shared`).

Ejemplo:

```4d
$myComp:=ds.Empresa.get(2) //$myComp no pertenece a una entity selection
$employees:=$myComp.empleados //$employees es compartible
```

Una nueva entity selection es **compartible** en los siguientes casos:

* la nueva entity selection creada en un espacio vacío utilizando la función [dataClass.newSelection()](API/DataClassClass.md#newselection) o el comando `Create entity selection`,
* la nueva entity selection se copia explícitamente como modificable con [entitySelection.copy()](API/EntitySelectionClass.md#copy) o `OB Copy` (es decir, sin la opción `ck shared`).

Ejemplo:

```4d
$toModify:=ds.Company.all().copy() //$toModify es modificable
```

Una nueva entity selection **hereda** de la naturaleza de la entity selection original en los siguientes casos:

* la nueva entity selection resulta de una de las varias funciones de clase ORDA aplicadas a una entity selection existente ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
* la nueva entity selection se basa en una relación:
  * [entity.*attributeName*](API/EntityClass.md#attributename) (por ejemplo, "company.employees") cuando *attributeName* es un atributo relacionado de uno a muchos y la entidad pertenece a una entity selection (de la misma naturaleza que [.getSelection()](API/EntityClass.md#getselection)),
  * [entitySelection.*attributeName*](API/EntitySelectionClass.md#attributename) (por ejemplo, "employees.employer") cuando *attributeName* es un atributo relacionado (de la misma naturaleza que la entity selection),
  * [.extract()](API/EntitySelectionClass.md#extract) cuando la colección resultante contiene selecciones de entidades (de la misma naturaleza que la entity selection).

Ejemplos:

```4d
$highSal:=ds.Employee.query("salary >= :1"; 1000000)   
 //$highSal is shareable because of the query on dataClass
$comp:=$highSal.employer //$comp is shareable because $highSal is shareable

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy() 
 //$lowSal is alterable because of the copy()
$comp2:=$lowSal.employer //$comp2 is alterable because $lowSal is alterable
```

#### Compartir una selección de entidades entre procesos (ejemplo)

Se trabaja con dos selecciones de entidades que se quieren pasar a un proceso worker para que envíe correos a las personas adecuadas:

```4d

var $paid; $unpaid : cs.InvoicesSelection
//Obtenemos selecciones de entidades para facturas pagadas y no pagadas
$paid:=ds.Invoices.query("status=:1"; "Paid")
$unpaid:=ds.Invoices.query("status=:1"; "Unpaid")

//Pasamos referencias de selección de entidades como parámetros al worker
CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)

```

El método `sendMails`:

```4d

 #DECLARE ($paid : cs.InvoicesSelection; $unpaid : cs.InvoicesSelection)
 var $invoice : cs.InvoicesEntity

 var $server; $transporter; $email; $status : Object

  //Prepare emails
 $server:=New object()
 $server.host:="exchange.company.com"
 $server.user:="myName@company.com"
 $server.password:="my!!password"
 $transporter:=SMTP New transporter($server)
 $email:=New object()
 $email.from:="myName@company.com"

  //Loops on entity selections
 For each($invoice;$paid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Payment OK for invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each

 For each($invoice;$unpaid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Please pay invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each
```

### Selecciones de entidades y atributos de almacenamiento

Todos los atributos de almacenamiento (texto, número, booleano, fecha) están disponibles como propiedades de las selecciones de entidades, así como de las entidades. Cuando se utiliza junto con una selección de entidad, un atributo escalar devuelve una colección de valores escalares. Por ejemplo:

```4d
 $locals:=ds.Person.query("ciudad = :1"; "San José") //entity selection de personas
 $localEmails:=$locals.emailAddress //colección de direcciones de correo electrónico (cadenas)
```

Este código devuelve en *$localEmails* una colección de direcciones de correo electrónico como cadenas.

### Selecciones de entidades y atributos de relación

Además de la variedad de formas en que puede consultar, también puede utilizar los atributos de relación como propiedades de selecciones de entidades para devolver nuevas selecciones de entidades. Por ejemplo, consideremos la siguiente estructura:

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
 $myParts:=ds.Part.query("ID < 100") //Devuelve las piezas con ID inferior a 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //Todas las facturas con al menos un elemento relacionado con una pieza en $myParts
```

La última línea devolverá en $myInvoices una selección de entidades de todas las facturas que tengan al menos un elemento de factura relacionado con una pieza en la selección de entidades myParts. Cuando se utiliza un atributo de relación como propiedad de una selección de entidades, el resultado es siempre otra selección de entidades, aunque sólo se devuelva una entidad. Cuando se utiliza un atributo de relación como propiedad de una selección de entidades y no se devuelve ninguna entidad, el resultado es una selección de entidades vacía, no nula.

## Bloqueo de una entidad

A menudo es necesario gestionar los posibles conflictos que pueden surgir cuando varios usuarios o procesos cargan e intentan modificar las mismas entidades al mismo tiempo. El bloqueo de registros es una metodología utilizada en las bases de datos relacionales para evitar actualizaciones incoherentes de los datos. El concepto consiste en bloquear un registro al leerlo para que ningún otro proceso pueda actualizarlo o, alternativamente, comprobar al guardar un registro que ningún otro proceso lo ha modificado desde que se leyó. El primero se denomina **bloqueo de registro pesimista** y garantiza que un registro modificado pueda escribirse a expensas de bloquear los registros a otros usuarios. Este último se conoce como **bloqueo de registro optimista** y cambia la garantía de los privilegios de escritura en el registro por la flexibilidad de decidir privilegios de escritura sólo si el registro necesita ser actualizado. En el bloqueo de registros pesimista, el registro se bloquea aunque no haya necesidad de actualizarlo. En el bloqueo optimista de registros, la validez de la modificación de un registro se decide en el momento de la actualización.

ORDA le ofrece dos modos de bloqueo de entidad:

* un modo automático "optimista", adecuado para la mayoría de las aplicaciones,
* un modo "pesimista" que permite bloquear las entidades antes de su acceso.

### Bloqueo optimista automático

Este mecanismo automático se basa en el concepto de "bloqueo optimista", especialmente adaptado a los problemas de las aplicaciones web. Este concepto se caracteriza por los siguientes principios de funcionamiento:

* Todas las entidades pueden cargarse siempre en lectura-escritura; no existe el "bloqueo" *a priori* de las entidades.
* Cada entidad tiene un sello de bloqueo interno que se incrementa cada vez que se guarda.
* Cuando un usuario o proceso intenta guardar una entidad utilizando el método `entity.save( )`, 4D compara el valor del marcador de la entidad a guardar con el de la entidad encontrada en los datos (en el caso de modificación):
  * Cuando los valores coinciden, se guarda la entidad y se incrementa el valor del marcador interno.
  * Cuando los valores no coinciden, significa que otro usuario ha modificado esta entidad mientras tanto. No se guarda y se devuelve un error.

El siguiente diagrama ilustra el bloqueo optimista:

1. Dos procesos cargan la misma entidad.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. El primer proceso modifica la entidad y valida el cambio. Se llama al método `entity.save( )`. El motor 4D compara automáticamente el valor del marcador interno de la entidad modificada con el de la entidad almacenada en los datos. Como corresponden, la entidad se guarda y el valor de su marcador se incrementa.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. El segundo proceso también modifica la entidad cargada y valida sus cambios. Se llama al método `entity.save( )`. Dado que el valor del marcador de la entidad modificada no coincide con el de la entidad almacenada en los datos, no se realiza el guardado y se devuelve un error.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)

Esto también puede ilustrarse con el siguiente código:

```4d
 $person1:=ds.Person.get(1) //Referencia a la entidad
 $person2:=ds.Person.get(1) //Otra referencia a la misma entidad
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, cambio guardado
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, cambio no guardado
```

En este ejemplo, asignamos a $person1 una referencia a la entidad person con una llave de 1. A continuación, asignamos otra referencia de la misma entidad a la variable $person2. Con $person1, cambiamos el nombre de la persona y guardamos la entidad. Cuando intentamos hacer lo mismo con $person2, 4D verifica que la entidad en el disco es la misma que cuando se asignó por primera vez la referencia en $person1. Como no es lo mismo, devuelve false en la propiedad success y no guarda la segunda modificación.

Cuando se produce esta situación, puede, por ejemplo, volver a cargar la entidad desde el disco utilizando el método `entity.reload()` para poder intentar realizar de nuevo la modificación. El método `entity.save()` también propone una opción "automerge" para guardar la entidad en caso de que los procesos modificaran atributos que no fueran los mismos.

> Los mardadores de registro no se utilizan en las de **transacciones** porque en este contexto sólo existe una única copia de un registro. Sea cual sea el número de entidades que hacen referencia a un registro, se modifica la misma copia, por lo que las operaciones `entity.save()` nunca generarán errores de marcador.

### Bloqueo pesimista

Puede bloquear y desbloquear las entidades bajo pedido cuando acceda a los datos. Cuando una entidad es bloqueada por un proceso, es cargada en lectura/escritura en este proceso pero es bloqueada para todos los otros procesos. La entidad sólo puede cargarse en modo de sólo lectura en estos procesos; sus valores no pueden editarse ni guardarse.

Esta funcionalidad se basa en dos métodos de la clase `Entity`:

* `entity.lock()`
* `entity.unlock()`

Para más información, consulte las descripciones de estas funciones.

> Los bloqueos pesimistas también pueden gestionarse a través de la [REST API](../REST/$lock.md).

### Utilización simultánea de los bloqueos clásicos 4D y de los bloqueos pesimistas ORDA

El uso de comandos clásicos y ORDA para bloquear registros se basa en los siguientes principios:

* Un bloqueo definido con un comando 4D clásico en un registro impide a ORDA bloquear la entidad correspondiente al registro.
* Un bloqueo definido con ORDA en una entidad impide que los comandos 4D clásicos bloqueen el registro que coincide a la entidad.

Estos principios se muestran en el siguiente diagrama:

![](../assets/en/ORDA/concurrent1.png)

Los **bloqueos de transacciones** también se aplican tanto a los comandos clásicos como a los comandos ORDA. En una aplicación multiproceso o multiusuario, un bloqueo definido en una transacción en un registro por un comando clásico tendrá como resultado impedir que cualquier otro proceso bloquee las entidades relacionadas con este registro (o a la inversa), hasta que la transacción sea validada o cancelada.

* Ejemplo con un bloqueo definido por un comando clásico:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
* Ejemplo con un bloqueo definido por un método ORDA:<br/><br/>![](../assets/en/ORDA/concurrent3.png)

## Optimización cliente/servidor

4D provides an automatic optimization for ORDA requests that use entity selections or load entities in client/server configurations. This optimization speeds up the execution of your 4D application by reducing drastically the volume of information transmitted over the network.

Se aplican los siguientes mecanismos de optimización:

* When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. Se actualizará dinámicamente si se utilizan posteriormente otros atributos.

* Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example in an entity selection-based list box, the learning phase takes place during the display of the first rows, next rows display is very optimized.

* An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#using-the-context-property) below).

The following methods automatically associate the optimization context of the source entity selection to the returned entity selection:

* `entitySelection.and()`
* `entitySelection.minus()`
* `entitySelection.or()`
* `entitySelection.orderBy()`
* `entitySelection.slice()`
* `entitySelection.drop()`

**Ejemplo**

Dado el siguiente código:

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in *$sel* after a learning phase.

### Uso de la propiedad context

You can increase the benefits of the optimization by using the **context** property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA methods that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.

A same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA methods that handle entity selections support the **context** property (for example `dataClass.query( )` or `dataClass.all( )` method). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency.
> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the `dataClass.get( )` method).

**Ejemplo con el método `dataClass.query( )`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")

 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered and associated to context "shortList"

 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated to context "shortList" is applied

 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization is triggered and associated to context "longList"

 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization associated to context "longList" is applied
```

### List box basado en una selección de entidades

Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Subsequent requests to server sent by entity browsing methods will also support this optimization. The following methods automatically associate the optimization context of the source entity to the returned entity:

* `entity.next( )`
* `entity.first( )`
* `entity.last( )`
* `entity.previous( )`

For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:

```4d
 $myEntity:=Form.currentElement //expresión del elemento actual
  //... hacer algo
 $myEntity:=$myEntity.next() //carga la siguiente entidad utilizando el mismo contexto
```
