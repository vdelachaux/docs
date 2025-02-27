---
id: method-list
title: Lista de los métodos
---

> **Atención**: los comandos de esta página no son hilo seguro.

[A](#a) - [C](#c) - [D](#d) - [E](#e) - [F](#f) - [G](#g) - [I](#i) - [M](#m) - [N](#n) - [O](#o) - [P](#p) - [R](#r) - [S](#s)

## A

### VP ADD FORMULA NAME

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| Parámetros | Tipo   |    | Descripción                                                |
| ---------- | ------ | -- | ---------------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro               |
| vpFormula  | Text   | -> | Fórmula 4D View Pro                                        |
| name       | Text   | -> | Nombre de la fórmula                                       |
| options    | Object | -> | Opciones de la fórmula nombrada|<!-- END REF -->

|

#### Descripción

El comando `VP ADD FORMULA NAME` <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->crea o modifica una fórmula temporal en el documento abierto<!-- END REF -->.
> Las fórmulas nombradas creadas por este comando se guardan en el documento.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase la fórmula 4D View Pro que desea nombrar en *vpFormula*. Para obtener información detallada sobre la sintaxis de las fórmulas, consulte la página [Fórmulas y funciones](formulas.md).

Pase el nuevo nombre para la fórmula en *name*. Si el nombre ya se utiliza en el mismo alcance, la nueva fórmula nombrada sustituye la existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Puede pasar un objeto con las propiedades adicionales para la fórmula nombrada en *options*. Se soportan las siguientes propiedades:

| Propiedad | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Alcance de la fórmula. Puede pasar el índice de la hoja (la numeracièon comienza en 0) o utilizar las siguientes constantes: <li>`vk current sheet`</li><li>`vk workbook`</li>El alcance determina si el nombre de una fórmula es local para una hoja de cálculo determinada (*scope*=sheet index or `vk current sheet`), o si es global a todo el libro de trabajo (*scope*=`vk workbook`). |
| comment   | Text   | Comentario asociado a una fórmula nombrada                                                                                                                                                                                                                                                                                                                                                   |

#### Ejemplo

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Ver también

[Cell references](formulas.md#cell-references)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)

### VP ADD RANGE NAME

<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->

**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

| Parámetros | Tipo   |    | Descripción                                                |
| ---------- | ------ | -- | ---------------------------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                                               |
| name       | Text   | -> | Nombre de la fórmula                                       |
| options    | Object | -> | Opciones de la fórmula nombrada|<!-- END REF -->

|

#### Descripción

El comando `VP ADD RANGE NAME` <!-- REF #_method_.VP ADD RANGE NAME.Summary -->crea o modifica un rango temporal en el documento abierto<!-- END REF -->.
> Los rangos nombrados creados por este comando se guardan con el documento.

En *rangeObj*, pase el rango que quiere nombrar, y pase el nuevo nombre del rango en *name*. Si el nombre ya se utiliza en el mismo alcance, el nuevo rango nombrado sustituye al existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Puede pasar un objeto con las propiedades adicionales para el rango nombrado en *options*. Se soportan las siguientes propiedades:

| Propiedad | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Alcance del rango. Puede pasar el índice de la hoja (la numeracièon comienza en 0) o utilizar las siguientes constantes: <li>`vk current sheet`</li><li>`vk workbook`</li>El alcance determina si el nombre de un rango es local para una hoja de cálculo determinada (*scope*=sheet index or `vk current sheet`), o si es global a todo el libro de trabajo (*scope*=`vk workbook`). |
| comment   | Text   | Comentario asociado al rango nombrado                                                                                                                                                                                                                                                                                                                                                 |
> * Un rango nombrado es en realidad una fórmula nombrada que contiene coordenadas. `VP ADD RANGE NAME` facilita la creación de rangos con nombre, pero también puede utilizar el comando [`VP ADD FORMULA NAME`](#vp-add-formula-name) para crear rangos con nombre.
> * Las fórmulas que definen rangos con nombre pueden recuperarse con el método [`VP Get formula by name`](#vp-get-formula-by-name).

#### Ejemplo

Quiere crear un rango nombrado para un rango de celdas:

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Ver también

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)<br/>[VP Name](#vp-name)

### VP ADD SELECTION

<!-- REF #_method_.VP ADD SELECTION.Syntax -->

**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SELECTION.Params -->

| Parámetros | Tipo |    | Descripción                              |
| ---------- | ---- | -- | ---------------------------------------- |
| rangeObj   | Text | -> | Objeto rango |<!-- END REF -->

|

#### Descripción

El comando `VP ADD SELECTION` <!-- REF #_method_.VP ADD SELECTION.Summary -->añade las celdas especificadas a las celdas actualmente seleccionadas<!-- END REF -->.

En *rangeObj*, pase un objeto rango de varias celdas para añadir a la selección actual.
> La celda activa no se modifica.

#### Ejemplo

Actualmente tienes celdas seleccionadas:

![](../assets/en/ViewPro/cmd_vpAddSelection1.PNG)

El siguiente código añadirá celdas a su selección:

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

Resultado:

![](../assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### Ver también

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP ADD SHEET

<!-- REF #_method_.VP ADD SHEET.Syntax -->
**VP ADD SHEET** ( *vpAreaName* : Text )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *sheet* : Integer ; *name* : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| sheet      | Integer | -> | Indice de la nueva hoja                      |
| name       | Text    | -> | Nombre de la hoja|<!-- END REF -->

|

#### Descripción

El comando `VP ADD SHEET` <!-- REF #_method_.VP ADD SHEET.Summary -->inserta una hoja en el documento cargado en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

If *index* exceeds the number of sheets, the command inserts the new sheet after the existing ones. In *sheet*, you can pass an index for the new sheet. If the passed *index* is inferior to or equal to 0, the command inserts the new sheet at the beginning.
> La indexación comienza en 0.

En *name*, puede pasar un nombre para la nueva hoja. El nuevo nombre no puede contener los siguientes caracteres: `*, :, [, ], ?,\,/`

#### Ejemplo

El documento tiene actualmente 3 hojas:

![vp-document-with-3-sheets](../assets/en/ViewPro/vp-sheet-3.png)

Para insertar una hoja en la tercera posición (índice 2) y nombrarla "March":

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../assets/en/ViewPro/vp-add-sheet.png)

#### Ver también

[VP REMOVE SHEET](#vp-remove-sheet)

### VP ADD SPAN

<!-- REF #_method_.VP ADD SPAN.Syntax -->
**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP ADD SPAN` combina las celdas de *rangeObj* como un único tramo de celdas.

En *rangeObj*, pase un rango de celdas. Las celdas del rango se unen para crear una celda más grande que se extiende por varias columnas y/o líneas. Puede pasar varios rangos de celdas para crear varios espacios al mismo tiempo. Tenga en cuenta que si los rangos de celdas se superponen, sólo se utiliza el primer rango de celdas.

> * Sólo se muestran los datos de la celda superior izquierda. Los datos de las otras celdas combinadas se ocultan hasta que se elimina la fusión.
> * Los datos ocultos en las celdas fusionadas son accesibles mediante fórmulas (empezando por la celda superior izquierda).

#### Ejemplo

Para fusionar las celdas First quarter y Second quarter a través de las dos celdas al lado, y de fusionar la celda del área South a través de las dos líneas debajo de ella:

![initial-document](../assets/en/ViewPro/vp-add-span.png)

```4d
 //  Rango First quarter
 $q1:=VP Cells("ViewProArea";2;3;3;1)

// Rango Second quarter
 $q2:=VP Cells("ViewProArea";5;3;3;1)

  // Rango South area
 $south:=VP Cells("ViewProArea";0;5;1;3)

 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../assets/en/ViewPro/vp-add-span-2.png)

#### Ver también

[4D View Pro Range Object Properties](getting-started.md#using-range-objects)<br/>[VP Get spans](#vp-get-spans)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP ADD STYLESHEET

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->
**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| styleName  | Text    | -> | Nombre del estilo                                                      |
| styleObj   | Object  | -> | Objeto definiendo las propiedades del atributo                         |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET.Summary -->crea o modifica la hoja de estilo *styleName* basándose en la combinación de las propiedades especificadas en *styleObj* en el documento abierto<!-- END REF -->. Si ya existe una hoja de estilo con el mismo nombre e índice en el documento, este comando la sobrescribirá con los nuevos valores.

> Las hojas de estilo creadas por este comando se guardan con el documento.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *styleName* permite asignar un nombre a la hoja de estilo. Si el nombre ya se utiliza dentro del mismo alcance, la nueva hoja de estilo sustituye a la existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Dentro del *styleObj*, designe la configuración de la hoja de estilo (por ejemplo, fuente, decoración del texto, alineación, bordes, etc.). Para ver la lista completa de propiedades de estilo, consulte [Propiedades de los objetos de estilo](configuring.md#style-objects-properties).

Puede designar dónde definir la hoja de estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la indexación comienza en 0) o con las siguientes constantes:

* `vk current sheet`
* `vk workbook`

Si una hoja de estilo *styleName* está definida al nivel del libro de trabajo y de la hoja, el nivel de hoja tiene prioridad sobre el nivel del libro de trabajo cuando se define la hoja de estilo.

Para aplicar la hoja de estilo, utilice los comandos [VP SET DEFAULT STYLE](#vp-set-default-style) o [VP SET CELL STYLE](#vp-set-cell-style).

#### Ejemplo

El código siguiente:

```4d
$styles:=New object
$styles.backColor:="green"

//Line Border Object
$borders:=New object("color";"green";"style";vk line style medium dash dot)

$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders

VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)

//Para aplicar el estiloVP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

creará y aplicará el siguiente objeto estilo llamado *GreenDashDotStyle*:

```
{
 backColor:green,
 borderBottom:{color:green,style:10},
 borderLeft:{color:green,style:10},
 borderRight:{color:green,style:10},
 borderTop:{color:green,style:10}
}
```

#### Ver también

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

### VP All

<!-- REF #_method_.VP All.Syntax -->
**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP All.Params -->

| Parámetros | Tipo    |    | Descripción                                                 |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                 |
| Result     | Object  | <- | Objeto rango de todas las celdas|<!-- END REF -->

|

#### Descripción

El comando `VP ALL` <!-- REF #_method_.VP All.Summary -->devuelve un nuevo objeto de rango que hace referencia a todas las celdas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

Desea definir un objeto rango para todas las celdas de la hoja de cálculo actual:

```4d
$all:=VP All("ViewProArea") // todas las celdas de la hoja actual
```

#### Ver también

[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

## C

### VP Cell

<!-- REF #_method_.VP Cell.Syntax -->
**VP Cell** ( *vpAreaName* ; *column* : Integer ; *row* : Integer ; Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| column     | Longint | -> | Índice de la columna                         |
| row        | Longint | -> | Índice de la línea                           |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)  |
| Result     | Object  | <- | Objeto rango de una sola celda               |
<!-- END REF -->

#### Descripción

El comando `VP Cell` <!-- REF #_method_.VP Cell.Summary -->devuelve un nuevo objeto de rango que hace referencia a una celda específica<!-- END REF -->.

> Este comando se aplica a los rangos de una sola celda. Para crear un objeto rango para múltiples celdas, utilice el comando [VP Cells](#vp-cells).

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *column* define la columna de la posición del rango de celdas. Pase el índice de columna en este parámetro.

El parámetro *row* define la línea del rango de celdas. Pase el índice de la línea en este parámetro.

En el parámetro opcional *sheet*, puede designar el índice de la hoja en donde se definirá el rango. Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual por defecto.

> la indexación comienza en 0.

#### Ejemplo

Desea definir un objeto rango para la celda mostrada abajo (en la hoja actual):

![vp-cell](../assets/en/ViewPro/cmd_vpCell.png)

El código es el siguiente:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### Ver también

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

### VP Cells

<!-- REF #_method_.VP Cells.Syntax -->
**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #_method_.VP Cells.Params -->

| Parámetros  | Tipo    |    | Descripción                                       |
| ----------- | ------- | -- | ------------------------------------------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro      |
| column      | Integer | -> | Índice de la columna                              |
| row         | Integer | -> | Índice de la línea                                |
| columnCount | Integer | -> | Número de columnas                                |
| rowCount    | Integer | -> | Número de líneas                                  |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite)       |
| Result      | Object  | <- | Objeto rango de celdas|<!-- END REF -->

|

#### Descripción

El comando `VP Cells` <!-- REF #_method_.VP Cells.Summary -->devuelve un nuevo objeto de rango que hace referencia a celdas específicas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *column* define la primera columna del rango de celdas. Pase el índice de la columna (la numeración comienza en 0) en este parámetro. Si el rango está dentro de varias columnas, también debe utilizar el parámetro *columnCount*.

En el parámetro *row*, puede definir la(s) línea(s) del rango de celdas. Pase el índice de la línea (el conteo comienza en 0) en este parámetro. Si el rango contiene varias líneas, también debe utilizar el parámetro *rowCount*.

El parámetro *columnCount* permite definir el número total de columnas en las que se encuentra el rango. *columnCount* debe ser mayor que 0.

El parámetro *rowCount* permite definir el número total de líneas en las que se encuentra el rango. *rowCount* debe ser mayor que 0.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual por defecto.

#### Ejemplo

Desea definir un objeto rango para las siguientes celdas (de la hoja actual):

![](../assets/en/ViewPro/vp-cells.png)

El código es el siguiente:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // de C5 a D7
```

#### Ver también

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)

### VP Column

<!-- REF #_method_.VP Column.Syntax -->
**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

| Parámetros  | Tipo    |    | Descripción                                       |
| ----------- | ------- | -- | ------------------------------------------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro      |
| column      | Integer | -> | Índice de la columna                              |
| columnCount | Integer | -> | Número de columnas                                |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite)       |
| Result      | Object  | <- | Objeto rango de celdas|<!-- END REF -->

|

#### Descripción

El comando `VP Column` <!-- REF #_method_.VP Column.Summary -->devuelve un nuevo objeto rango que hace referencia a una o varias columnas específicas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *column* define la primera columna del rango. Pase el índice de la columna (el conteo comienza en 0) en este parámetro. Si el rango contiene varias columnas, también debe utilizar el parámetro opcional *columnCount*.

El parámetro opcional *columnCount* permite definir el número total de columnas en las que se encuentra el rango. *columnCount* debe ser mayor que 0. Si se omite, el valor se establecerá en 1 por defecto y se creará un rango de tipo de columna.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual por defecto.

#### Ejemplo

Desea definir un objeto rango para la columna mostrada abajo (en la hoja actual):

![](../assets/en/ViewPro/cmd_vpColumn.PNG)

El código es el siguiente:

```4d
 $column:=VP Column("ViewProArea";3) // columna D
```

#### Ver también

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP COLUMN AUTOFIT

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->
**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP COLUMN AUTOFIT` <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->dimensiona automáticamente la(s) columna(s) de *rangeObj* en función de su contenido<!-- END REF -->.

En *rangeObj*, pase un objeto rango que contenga un rango de columnas cuyo tamaño se gestionará automáticamente.

#### Ejemplo

Las siguientes columnas tienen el mismo tamaño y no muestran parte del texto:

![](../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

La selección de las columnas y la ejecución de este código:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... redimensiona las columnas para ajustarse al tamaño de los contenidos:

![](../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### Ver también

[VP ROW AUTOFIT](#vp-row-autofit)

### VP Combine ranges

<!-- REF #_method_.VP Combine ranges.Syntax -->
**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

| Parámetros    | Tipo   |    | Descripción                                                       |
| ------------- | ------ | -- | ----------------------------------------------------------------- |
| rangeObj      | Object | -> | Objeto rango                                                      |
| otherRangeObj | Object | -> | Objeto rango                                                      |
| Result        | Object | <- | Objeto que contiene un rango combinado|<!-- END REF -->

|

#### Descripción

El comando `VP Combine Ranges` <!-- REF #_method_.VP Combine ranges.Summary -->devuelve un nuevo objeto de rango que integra dos o más objetos rango existentes<!-- END REF -->. Todos los rangos deben ser de la misma área 4D View Pro.

En *rangeObj*, pase el primer rango.

En *otherRangeObj*, pase otro objeto(s) rango para combinar con *rangeObj*.
> El comando incorpora *rangeObj* y *otherRangeObj* por referencia.

#### Ejemplo

Quiere combinar los rangos de tipo celda, columna y línea en un nuevo rango distinto:

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // columna D
 $row:=VP Row("ViewProArea";9) // línea 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### Ver también

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP Convert from 4D View

<!-- REF #_method_.VP Convert from 4D View.Syntax -->
**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

| Parámetros     | Tipo   |    | Descripción                                  |
| -------------- | ------ | -- | -------------------------------------------- |
| 4DViewDocument | Blob   | -> | Documento 4D View                            |
| Result         | Object | <- | Objeto 4D View Pro<!-- END REF -->

|

#### Descripción

El comando `VP Convert from 4D View` <!-- REF #_method_.VP Convert from 4D View.Summary -->permite convertir un documento heredado 4D View en un objeto 4D View Pro<!-- END REF -->.
> Este comando no requiere que el plug-in 4D View esté instalado en su entorno.

En el parámetro *4DViewDocument*, pase una variable o un campo BLOB que contenga el documento 4D View a convertir. El comando devuelve un objeto 4D View Pro en el que toda la información almacenada originalmente en el documento 4D View se convierte en atributos 4D View Pro.

#### Ejemplo

Quiere obtener un objeto 4D View Pro a partir de un área 4D View almacenada en un BLOB:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```

### VP Convert to picture

<!-- REF #_method_.VP Convert to picture.Syntax -->
**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

| Parámetros | Tipo   |    | Descripción                                         |
| ---------- | ------ | -- | --------------------------------------------------- |
| vpObject   | Object | -> | Objeto 4D View Pro que contiene el área a convertir |
| rangeObj   | Object | -> | Objeto rango                                        |
| Result     | Object | <- | Imagen SVG del área|<!-- END REF -->

|

#### Descripción

El comando `VP Convert to picture` <!-- REF #_method_.VP Convert to picture.Summary -->convierte el objeto *vpObject* de 4D View Pro (o el rango *rangeObj* dentro de *vpObject*) en una imagen SVG<!-- END REF -->.

Este comando es útil, por ejemplo:

* para integrar un documento de 4D View Pro en otro documento, como un documento de 4D Write Pro
* para imprimir un documento 4D View Pro sin tener que cargarlo en un área de 4D View Pro.

En *vpObject*, pase el objeto 4D View Pro a convertir. Este objeto debe haber sido analizado previamente utilizando [VP Export to object](#vp-export-to-object) o guardado utilizando [VP EXPORT DOCUMENT](#vp-export-document).
> El proceso de conversión SVG requiere que las expresiones y los formatos (cf. [Formato de celdas](configuring.md#cell-format)) incluidos en el área 4D View Pro sean evaluados al menos una vez, para que puedan ser exportados correctamente. Si convierte un documento que no ha sido evaluado previamente, las expresiones o los formatos pueden aparecer de forma inesperada.

En *rangeObj*, pase un rango de celdas a convertir. Por defecto, si se omite este parámetro, se convierte todo el contenido del documento.

El contenido del documento se convierte con respecto a sus atributos de visualización, incluidos los formatos (ver la nota anterior), la visibilidad de los encabezados, las columnas y las líneas. La conversión de los siguientes elementos es soportada:

* Texto: estilo / fuente / tamaño / alineación / orientación / rotación / formato
* Fondo de la celda : color / imagen
* Bordes de las celdas : grosor / color / estilo
* Fusión de celdas
* Imágenes
* Altura de líneas
* Ancho de columnas
* Columnas / líneas ocultas.
> La visibilidad de la rejilla depende del atributo del documento definido con [VP SET PRINT INFO](#vp-set-print-info).

#### Resultado

El comando devuelve una imagen en formato SVG.

#### Ejemplo

Quiere convertir un área 4D View Pro en SVG, previsualizar el resultado y enviarlo a una variable imagen:

```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //exportar toda el área
```

#### Ver también

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Copy to object

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R4  | Añadidos       |
</details>

<!-- REF #_method_.VP Copy to object.Syntax -->
**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

| Parámetros | Tipo   |    | Descripción                                                             |
| ---------- | ------ | -- | ----------------------------------------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                                                            |
| options    | Object | -> | Opciones adicionales                                                    |
| Result     | Object | <- | Objeto devuelto. Contiene los datos copiados|<!-- END REF -->


|


#### Descripción

El comando `VP Copy to object` <!-- REF #_method_.VP Copy to object.Summary -->copia el contenido, el estilo y las fórmulas de *rangeObj* a un objeto<!-- END REF -->.

En *rangeObj*, pase el rango de celdas con los valores, el formato y las fórmulas a copiar. Si *rangeObj* es un rango combinado, sólo se utiliza el primero.

Puede pasar un parámetro opcional *options* con las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                                                                                                                       |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy        | Boolean | *True* (por defecto) para mantener los valores, el formato y las fórmulas copiados después de la ejecución del comando. *False* para eliminarlos. |
| copyOptions | Longint | Especifica lo que se copia o mueve. Valores posibles: <p><table><tr><th>Valor</th><th>Descripción</th></tr><tr><td>`vk clipboard options all` (por defecto)</td><td>Copia todos los objetos de datos, incluidos los valores, formatos y fórmulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copia únicamente los formatos.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copia sólo las fórmulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copia las fórmulas y el formato.</td></tr><tr><td>`vk clipboard options values`</td><td>Copia sólo los valores.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copia los valores y el formato.</td></tr></table></p>                                                                    |

Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](#vp-set-workbook-options).

El comando devuelve un objeto que contiene los datos copiados.

#### Ejemplo

Este ejemplo de código primero almacena el contenido, los valores, el formato y las fórmulas de un rango a un objeto, y luego los pega en otro rango:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

#### Ver también




[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP CREATE TABLE

<details><summary>Histórico</summary>

| Versión | Modificaciones                                                                                                  |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| v19 R8  | Soporte de opciones del tema: `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| v19 R7  | Soporte de la opción `allowAutoExpand`                                                                          |
| v19 R6  | Añadidos                                                                                                        |
</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->
**VP CREATE TABLE** ( *rangeObj* : Object ; *tableName* : Text {; *source* : Text} {; *options* : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

| Parámetros | Tipo                                               |    | Descripción                                                        |
| ---------- | -------------------------------------------------- | -- | ------------------------------------------------------------------ |
| rangeObj   | Object                                             | -> | Objeto rango                                                       |
| tableName  | Text                                               | -> | Nombre de la tabla                                                 |
| source     | Text                                               | -> | Nombre de la propiedad del contexto de datos a mostrar en la tabla |
| options    | [cs.ViewPro.TableOptions](classes.md#tableoptions) | -> | Opciones adicionales|<!-- END REF -->

|

#### Descripción

El comando `VP CREATE TABLE` <!-- REF #_method_.VP CREATE TABLE.Summary -->crea una tabla en el rango especificado<!-- END REF -->. Puede crear una tabla en un rango de celdas para facilitar la gestión y el análisis de un grupo de datos relacionados. Una tabla normalmente contiene datos relacionados en líneas y columnas y aprovecha un [contexto de datos](#vp-set-data-context).

![](../assets/en/ViewPro/vp-create-table.png)

En *rangeObj*, pase el rango de celdas donde se creará la tabla.

En *tableName*, pase un nombre para la tabla. El nombre debe:

* ser único en la hoja
* incluir al menos 5 caracteres
* no incluir espacios o empezar con un número

En *source<*, puede pasar un nombre de propiedad de un [contexto de datos](#vp-set-data-context) para mostrar sus datos en la tabla. Esto vincula la tabla al contexto de datos. Cuando se actualiza el contexto de los datos, los datos mostrados en la tabla se actualizan en consecuencia. La propiedad *source* debe contener una colección de objetos y cada elemento representa una línea.

  * Si no especifica una *source*, el comando crea una tabla vacía con el tamaño definido en *rangeObj*.
  * Si la *source* especificada no se puede mostrar completamente en el documento, no se crea ninguna tabla.

En el parámetro *options*, pase un objeto de la clase [`cs.ViewPro.TableOptions`](classes.md#tableoptions) que contenga las propiedades de la tabla a definir.

Dentro del objeto *options*, la colección *tableColumns* determina la estructura de las columnas de la tabla. La longitud de la colección *tableColumns* debe ser igual al número de columnas del rango:

  * Cuando el conteo de columnas en *rangeObj* excede el número de columnas en *tableColumns*, la tabla se llena con columnas vacías adicionales.
  * Cuando la cuenta de columnas en *rangeObj* es inferior al número de *tableColumns*, la tabla muestra un número de columnas que coinciden con el recuento de columnas del rango.

Si pasa una *source* pero no la opción *tableColumn*, el comando genera las columnas automáticamente. En este caso, *rangeObj* debe ser un rango de celdas. De lo contrario, se utilizará la primera celda del rango. Cuando se generan columnas automáticamente, se aplican las siguientes reglas:

* Si los datos pasados al comando son una colección de objetos, los nombres de las propiedades se utilizan como títulos de las columnas. Por ejemplo:

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```
Aquí los títulos de las columnas serían `LastName` y `FirstName`.

* Si los datos pasados al comando son una colección de valores escalares, deben contener una colección de subcolecciones:

  * La colección de primer nivel contiene subcolecciones de valores. Cada subcolección define una línea. Pasa una colección vacía para saltar una línea. El número de valores de la primera subcolección determina cuántas columnas se crean.
  * Los índices de las subcolecciones se utilizan como títulos de las columnas.
  * Cada subcolección define los valores de las celdas para la línea. Los valores pueden ser `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` o `Picture`. Un valor `Time` debe ser un objeto a que contenga un atributo de tiempo, como se describe en [VP SET VALUE](#vp-set-value).

> Esto sólo funciona cuando se generan columnas automáticamente. No puede utilizar una colección de datos escalares con la opción *tableColumns*.


#### Ejemplo

Para crear una tabla utilizando un contexto de datos:

```4d
// Set a data context
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Define the columns for the table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumns.new("name"; "Email"; "dataField"; "email"))

// Create a table from the "people" collection
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Aquí está el resultado:

![](../assets/en/ViewPro/vp-create-table.png)

#### Ver también

[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP Get table column index](#vp-get-table-column-index)<br/>[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE](#vp-remove-table)<br/>[VP RESIZE TABLE](#vp-resize-table)<br/>[VP SET DATA CONTEXT](#vp-set-data-context)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP SET TABLE THEME](#vp-set-table-theme)


## D

### VP DELETE COLUMNS

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->
**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP DELETE COLUMNS` <!-- REF #_method_.VP DELETE COLUMNS.Summary -->elimina las columnas en el *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de columnas a eliminar. Si el rango pasado contiene:

* de las columnas y de las líneas, sólo se eliminan las columnas.
* únicamente las líneas, el comando no hace nada.
> > Columns are deleted from right to left.

#### Ejemplo

Para eliminar las columnas seleccionadas por el usuario (en la imagen de abajo las columnas B, C y D):

![](../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

utilice el siguiente código:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### Ver también

[VP All](#vp-delete-rows)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)

### VP DELETE ROWS

<!-- REF #_method_.VP DELETE ROWS.Syntax -->
**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE ROWS.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP DELETE ROWS` <!-- REF #_method_.VP DELETE ROWS.Summary -->elimina las líneas en el *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de líneas a eliminar. Si el rango pasado contiene:

* tanto las columnas como las líneas, sólo se eliminan las líneas.
* sólo columnas, el comando no hace nada.
> > Rows are deleted from bottom to top.

#### Ejemplo

Para eliminar las líneas seleccionadas por el usuario (en la imagen de abajo las líneas 1, 2 y 3):

![](../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

utilice el siguiente código:

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### Ver también

[VP All](#vp-delete-columns)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)

## E

### VP EXPORT DOCUMENT

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->
**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| Parámetros | Tipo   |    | Descripción                                        |
| ---------- | ------ | -- | -------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro       |
| filePath   | Text   | -> | Ruta de acceso del documento                       |
| paramObj   | Object | -> | Opciones de exportación|<!-- END REF -->

|

#### Descripción

El comando `VP EXPORT DOCUMENT` <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exporta el objeto 4D View Pro adjunto al área 4D View Pro *vpAreaName* a un documento en disco según los parámetros *filePath* y *paramObj*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *filePath*, pase la ruta de destino y el nombre del documento a exportar. Si no especifica una ruta, el documento se guardará en el mismo nivel que la carpeta Project.

Puede especificar el formato del archivo exportado incluyendo una extensión después del nombre del documento:

* 4D View Pro (".4vp")
* Microsoft Excel (".xlsx")
* PDF (".pdf")
* CSV (".txt", o ".csv")

Si no se incluye la extensión, pero se especifica el formato en *paramObj*, el archivo exportado tendrá la extensión que corresponda al formato, excepto para el formato CSV (en este caso no se añade ninguna extensión).

El parámetro opcional *paramObj* le permite definir múltiples propiedades para el objeto 4D View Pro exportado y lanzar un método de retrollamada cuando la exportación haya finalizado.

| Propiedad                  | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| format                     | text    | (opcional) Cuando está presente, designa el formato de archivo exportado: ".4vp" (por defecto), ".csv", ".xlsx" o ".pdf". Puede utilizar las siguientes constantes:<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li>4D añade la extensión adecuada al nombre del archivo si es necesario. Si el formato especificado no corresponde con la extensión en *filePath*, se añadirá al final de *filePath*. Si no se especifica un formato y no se da ninguna extensión en *filePath*, se utiliza el formato de archivo por defecto. |
| contraseña                 | text    | Sólo Microsoft Excel (opcional) - Contraseña utilizada para proteger el documento MS Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| formula                    | object  | Método de retrollamada que se lanzará cuando la exportación haya finalizado. La utilización de un método de retrollamada es necesaria cuando la exportación es asíncrona (que es el caso de los formatos PDF y Excel) si necesita que se ejecute algún código después de la exportación. El método de retrollamada debe utilizarse con el comando [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) (ver abajo para más información).                                                                                                                              |
| valuesOnly                 | boolean | Especifica que sólo los valores de las fórmulas (si las hay) serán exportados.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| includeFormatInfo          | boolean | True para incluir información de formato, false en caso contrario (por defecto es True). La información de formato es útil en algunos casos, por ejemplo, para una exportación a SVG. Por otro lado, poner esta propiedad en **false** permite reducir el tiempo de exportación.                                                                                                                                                                                                                                                                                                     |
| includeBindingSource       | Boolean | Sólo 4DVP y Microsoft Excel. True (por defecto) para exportar los valores del contexto de datos actual como valores de celda en el documento exportado (los contextos de datos en sí no se exportan). False en caso contrario. El enlace de la celda siempre se exporta. Para la gestión de los contextos de datos y de las fusiones de celdas, ver [VP SET DATA CONTEXT](#vp-set-data-context) y [VP SET BINDING PATH](#vp-set-binding-path).                                                                                                                                       |
| sheet                      | number  | PDF únicamente (opcional) - Índice de la hoja a exportar (empezando por 0). -2=todas las hojas visibles (**por defecto**), -1= sólo la hoja actual                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| pdfOptions                 | object  | PDF únicamente (opcional) - Opciones para la exportación en pdf <p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>creator</td><td>text</td><td>nombre de la aplicación que creó el documento original a partir del cual se convirtió.</td></tr><tr><td>title</td><td>text</td><td>título del documento.</td></tr><tr><td>author</td><td>text</td><td>nombre de la persona que creó ese documento.</td></tr><tr><td>keywords</td><td>text</td><td>palabras clave asociadas al documento.</td></tr><tr><td>asunto</td><td>text</td><td>asunto del documento.</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| csvOptions                 | object  | CSV únicamente (opcional) - Opciones para la exportación en csv <p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>range</td><td>object</td><td>Objeto rango de celdas</td></tr><tr><td>rowDelimiter</td><td>text</td><td>Delimitador de línea. Por defecto: "\r\n"</td></tr><tr><td>columnDelimiter</td><td>text</td><td>Delimitador de columna. Por defecto: ","</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `\<customProperty>` | any     | Toda propiedad personalizada que estará disponible a través del parámetro $3 en el método de retrollamada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

**Notas sobre el formato Excel**:

* Al exportar un documento 4D View Pro a un archivo con formato Microsoft Excel, pueden perderse algunos parámetros. Por ejemplo, los métodos y fórmulas 4D no son soportados por Excel. Puede verificar otros parámetros con [esta lista de GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).
* La exportación en este formato se ejecuta de forma asíncrona, utilice la propiedad *formula * del *paramObj* para el código a ejecutar después de la exportación.

**Notas sobre formato PDF**:

* Al exportar un documento 4D View Pro en PDF, las fuentes utilizadas en el documento se integran automáticamente en el archivo PDF. Sólo se pueden integrar las fuentes OpenType (archivos .OTF o .TTF) que tengan un tabla Unicode. Si no se encuentra un archivo de fuentes válido para una fuente, se utiliza una fuente por defecto.
* La exportación en este formato se ejecuta de forma asíncrona, utilice la propiedad *formula * del *paramObj* para el código a ejecutar después de la exportación.

**Notas sobre el formato CSV**:

* Al exportar un documento 4D View Pro al formato CSV, es posible que se pierdan algunos parámetros, ya que sólo se guardan el texto y los valores.
* Todos los valores se guardan como cadenas entre comillas. Para más información sobre los valores separados por delimitadores, consulte [este artículo en Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values).

Una vez finalizada la exportación, `VP EXPORT DOCUMENTO` desencadena automáticamente la ejecución del método definido en la propiedad *formula* de *paramObj*, si se utiliza.

#### Pasar un método retrollamada (fórmula)

Cuando se incluye el parámetro opcional *paramObj*, el comando `VP EXPORT DOCUMENTO` permite utilizar el comando [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) para llamar a un método 4D que se ejecutará una vez finalizada la exportación. El método callback recibirá los siguientes valores en las variables locales:

| Variable |               | Tipo    | Descripción                                               |
| -------- | ------------- | ------- | --------------------------------------------------------- |
| $1       |               | text    | El nombre del objeto 4D View Pro                          |
| $2       |               | text    | Ruta de acceso del objeto 4D View Pro exportado           |
| $3       |               | object  | Referencia al *paramObj* del comando                      |
| $4       |               | object  | Un objeto devuelto por el método con un mensaje de estado |
|          | .success      | boolean | True si exporta con éxito, de lo contrario False.         |
|          | .errorCode    | integer | Código de error. Puede ser devuelto por 4D o JavaScript.  |
|          | .errorMessage | text    | Mensaje de error. Puede ser devuelto por 4D o JavaScript. |

#### Ejemplo 1

Quiere exportar el contenido del área "VPArea" a un documento 4D View Pro en el disco:

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP se guarda en su disco
```

#### Ejemplo 2

Quiere exportar la hoja actual en PDF:

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheet:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### Ejemplo 3

Desea exportar un documento 4D View Pro en formato ".xlsx" y llamar a un método que inicie Microsoft Excel con el documento abierto una vez completada la exportación:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vp MS Excel format //".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

Método ***AfterExport***:

```4d
 C_TEXT($1;$2)
 C_OBJECT($3;$4)
 $areaName:=$1
 $filePath:=$2
 $params:=$3
 $status:=$4

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### Ejemplo 4

Quiere exportar la hoja actual a un archivo `.txt` con valores separados por "|":

![example-export-csv](../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Aquí está el resultado:

![example-export-csv](../assets/en/ViewPro/vp-export-document-csv-result.png)

#### Ver también


[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP Column](#vp-import-document)<br/>[VP Print](#vp-print)

### VP Export to object

<!-- REF #_method_.VP Export to object.Syntax -->
**VP Export to object** ( *vpAreaName* : Text {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

| Parámetros | Tipo   |    | Descripción                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro  |
| options    | Object | -> | Opciones de exportación                       |
| Result     | Object | <- | Objeto 4D View Pro|<!-- END REF -->

|

#### Descripción

El comando `VP Export to object` <!-- REF #_method_.VP Export to object.Summary --> devuelve el objeto 4D View Pro adjunto al área 4D View Pro *vpAreaName*<!-- END REF -->. Puede utilizar este comando, por ejemplo, para almacenar el área 4D View Pro en un campo objeto de la base de datos 4D.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro *options*, puede pasar las siguientes opciones de exportación, si es necesario:

| Propiedad            | Tipo    | Descripción                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| includeFormatInfo    | Boolean | True (por defecto) para incluir la información del formato, en caso contrario false. La información de formato es útil en algunos casos, por ejemplo, para una exportación a SVG. Por otro lado, poner esta propiedad en False permite reducir el tiempo de exportación. |
| includeBindingSource | Boolean | True (por defecto) para exportar los valores del contexto de datos actual como valores de celda en el objeto exportado (los contextos de datos en sí no se exportan). False en caso contrario. El enlace de la celda siempre se exporta.                                 |

Para más información sobre los objetos 4D View Pro, consulte el párrafo [objeto 4D View Pro](configuring.md#4d-view-pro-object).

#### Ejemplo 1

Quiere obtener la propiedad "version" del área 4D View Pro actual:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### Ejemplo 2

Desea exportar el área, excluyendo la información de formato:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### Ver también

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP IMPORT FROM OBJECT](#vp-import-from-object)

## F

### VP Find

<!-- REF #_method_.VP Find.Syntax -->
**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

| Parámetros      | Tipo   |    | Descripción                                         |
| --------------- | ------ | -- | --------------------------------------------------- |
| rangeObj        | Object | -> | Objeto rango                                        |
| searchValue     | Text   | -> | Valor de búsqueda                                   |
| searchCondition | Object | -> | Objeto que contiene la(s) condición(es) de búsqueda |
| replaceValue    | Text   | -> | Valor de reemplazo                                  |
| Result          | Object | <- | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP Find` <!-- REF #_method_.VP Find.Summary -->busca en *rangeObj* la *searchValue*<!-- END REF -->. Se pueden utilizar parámetros opcionales para afinar la búsqueda y/o sustituir los resultados encontrados.

En el parámetro *rangeObj*, pase un objeto que contenga un rango a buscar.

El parámetro *searchValue* permite pasar el texto a buscar dentro del *rangeObj*.

Puede pasar el parámetro opcional *searchCondition* para especificar el funcionamiento de la búsqueda. Se soportan las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                                                                                                                                                                                          |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer | El número de la columna justo antes de la columna inicial de la búsqueda. Si *rangeObj* es un rango combinado, el número de columna indicado debe ser del primer rango. Valor por defecto: -1 (inicio de *rangeObj*) |
| afterRow    | Integer | El número de la línea justo antes de la línea inicial de la búsqueda. Si *rangeObj* es un rango combinado, el número de línea indicado debe ser del primer rango. Valor por defecto: -1 (inicio de *rangeObj*)       |
| all         | Boolean | <li>True - Se devuelven todas las celdas de *rangeObj* correspondientes a *searchValue*</li><li>False - (valor por defecto) Sólo se devuelve la primera celda de *rangeObj* correspondiente a *searchValue*</li>                                                                                                                                                                 |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>Todo el contenido de la celda debe coincidir completamente con el valor de búsqueda</td></tr><tr><td>`vk find flag ignore case`</td><td>Las letras mayúsculas y minúsculas se consideran iguales. Ej.: "a" es considerada como idéntica a "A".</td></tr><tr><td>`vk find flag none`</td><td>no se consideran los indicadores de búsqueda (por defecto)</td></tr><tr><td>`vk find flag use wild cards`</td><td>Los caracteres genéricos (\*,?) se pueden utilizar en la cadena de búsqueda. Los caracteres joker se pueden utilizar en cualquier comparación de cadenas para que coincidan con cualquier número de caracteres:<li>\* para cero o múltiples caracteres (por ejemplo, la búsqueda de "bl*" puede encontrar "bl", "black" o "blob")</li><li>? para un solo caracter (por ejemplo, la búsqueda de "h?t" puede encontrar "hot", o "hit"</li></td></tr></table>Estos marcadores se pueden combinar. Por ejemplo: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code>                                                                                                                |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>La búsqueda se realiza por columnas. Se busca en cada línea de una columna antes de continuar con la siguiente.</td></tr><tr><td>`vk find order by rows`</td><td>La búsqueda se realiza por líneas. Se busca en cada columna de una linea antes de continuar con la siguiente linea (por defecto)</td></tr></table>                                                                                                                                                                                           |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>La búsqueda se realiza en la fórmula de la celda</td></tr><tr><td>`vk find target tag`</td><td>La búsqueda se realiza en la etiqueta de la celda</td></tr><tr><td>`vk find target text`</td><td>La búsqueda se realiza en el texto de la celda (por defecto)</td></tr></table><p>Estos marcadores se pueden combinar. Por ejemplo:<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                 |

En el parámetro opcional *replaceValue*, puede pasar un texto para que ocupe el lugar de toda instancia del texto en el *searchValue* encontrado en *rangeObj*.

#### Objeto devuelto

La función devuelve un objeto de rango que describe cada valor de búsqueda encontrado o reemplazado. Se devuelve un objeto de rango vacío si no se encuentran resultados.

#### Ejemplo 1

Para encontrar la primera celda que contenga la palabra "Total":

```4d
var $range;$result : Object

$range:=VP All("ViewProArea")

$result:=VP Find($range;"Total")
```

#### Ejemplo 2

Para encontrar "Total" y reemplazarlo por "Grand Total":

```4d
var $range;$condition;$result : Object

$range:=VP All("ViewProArea")

$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match

  // Reemplazar las celdas que contienen sólo "Total" en la hoja actual con "Grand Total"
$result:=VP Find($range;"Total";$condition;"Grand Total")

  // Comprobar si el objeto de rango está vacío
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```


### VP Find table

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP Find table.Syntax -->
**VP Find table** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

| Parámetros | Tipo   |    | Descripción                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| rangeObj   | Object | -> | Rango de celdas                               |
| Result     | Text   | <- | Nombre de la tabla|<!-- END REF -->

|

#### Descripción

El comando `VP Find table` <!-- REF #_method_.VP Find table.Summary -->devuelve el nombre de la tabla a la que pertenece la celda de *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto de rango de celdas. Si las celdas designadas no pertenecen a una tabla, el comando devuelve una cadena vacía.

Si *rangeObj* no es un rango de celdas o contiene varios rangos, se utiliza la primera celda del primer rango.

#### Ejemplo

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("La"+$tableName+" tabla ha sido modificada.")
     End if 
End if
```


#### Ver también

[VP Get table range](#vp-get-table-range)




### VP FLUSH COMMANDS

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->
**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Parámetros | Tipo |    | Descripción                                                             |
| ---------- | ---- | -- | ----------------------------------------------------------------------- |
| vpAreaName | Text | -> | Nombre del área 4D View Pro en el formulario|<!-- END REF -->

|

#### Descripción

El comando `VP FLUSH COMMANDS` <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->ejecuta inmediatamente los comandos almacenados y borra el buffer de comandos<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Para aumentar el rendimiento y reducir el número de peticiones enviadas, los comandos 4D View Pro llamados por el desarrollador se almacenan en un buffer de comandos. Cuando se llama, `VP FLUSH COMMANDS` ejecuta los comandos como un lote al salir del método y vacía el contenido del buffer de comandos.

#### Ejemplo

Quiere rastrear la ejecución de los comandos y vaciar el buffer:

```4d

 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```

### VP Font to object

<!-- REF #_method_.VP Font to object.Syntax -->
**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->


<!-- REF #_method_.VP Font to object.Params -->

| Parámetros | Tipo   |    | Descripción                     |
| ---------- | ------ | -- | ------------------------------- |
| font       | Text   | -> | Cadena abreviada para la fuente |
| Result     | Object | <- | Objeto fuente                   |
<!-- END REF -->


#### Descripción

El comando utilitario `VP Font to object` <!-- REF #_method_.VP Font to object.Summary -->devuelve un objeto a partir de una cadena abreviada de fuentes<!-- END REF -->. Este objeto se puede utilizar para establecer u obtener la configuración de las propiedades de la fuente a través de la notación de objetos.

En el parámetro *font*, pase una cadena de fuente abreviada para especificar las diferentes propiedades de una fuente (por ejemplo, "12 pt Arial"). Puede obtener más información sobre las cadenas de fuentes abreviadas [en esta página](https://www.w3schools.com/cssref/pr_font_font.asp), por ejemplo.

El objeto devuelto contiene los atributos de fuente definidos como propiedades. Para obtener más información sobre las propiedades disponibles, consulte el comando [Objeto VP a fuente](#vp-object-to-font).

#### Ejemplo 1

Este código:

```4d
$font:=VP Font to object("16pt arial")
```

devolverá el objeto $font:

```4d
{

family:arial
size:16pt
}
```

#### Ejemplo 2

Ver el ejemplo de [`VP Object to font`](#vp-object-to-font).

#### Ver también

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

## G

### VP Get active cell

<!-- REF #_method_.VP Get active cell.Syntax -->
**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get active cell.Params -->

| Parámetros | Tipo    |    | Descripción                                               |
| ---------- | ------- | -- | --------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro              |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)               |
| Result     | Object  | <- | Objeto rango de una sola celda|<!-- END REF -->

|

#### Descripción

El comando `VP Get active cell` <!-- REF #_method_.VP Get active cell.Summary -->devuelve un nuevo objeto rango que hace referencia a la celda activa y en la que se introducirán nuevos datos<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

![](../assets/en/ViewPro/cmd_vpGetActiveCell.PNG)

El siguiente código recuperará las coordenadas de la celda activa:

```4d
$activeCell:=VP Get active cell("myVPArea")

  //devuelve un objeto rango que contiene: 
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

#### Ver también

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP Get binding path

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |

</details>

<!-- REF #_method_.VP Get binding path.Syntax -->
**VP Get binding path** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get binding path.Params -->

| Parámetros | Tipo   |    | Descripción                                                          |
| ---------- | ------ | -- | -------------------------------------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                                                         |
| Result     | Text   | <- | Nombre del atributo vinculado a la celda |<!-- END REF -->

|

#### Descripción

El comando `VP Get binding path` <!-- REF #_method_.VP Get binding path.Summary -->returns the name of the attribute bound to the cell specified in *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que es un rango de celdas o un rango combinado de celdas. Note que:

* Si *rangeObj* es un rango de varias celdas, el comando devuelve el nombre del atributo asociado a la primera celda del rango.
* Si *rangeObj* contiene varios rangos de celdas, el comando devuelve el nombre del atributo asociado a la primera celda del primer rango.

#### Ejemplo


```4d
var $p; $options : Object
var $myAttribute : Text

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

$myAttribute:=VP Get binding path(VP Cell("ViewProArea"; 1; 0)) // "lastName"
```

#### Ver también

[VP SET BINDING PATH](#vp-set-binding-path)<br/>[VP Get data context](#vp-get-data-context)<br/>[VP SET DATA CONTEXT](#vp-get-data-context)

### VP Get cell style

<!-- REF #_method_.VP Get cell style.Syntax -->
**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get cell style.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                            |
| Result     | Object | <- | Objeto style|<!-- END REF -->

|

#### Descripción

El comando `VP Get cell style` <!-- REF #_method_.VP Get cell style.Summary -->returns a [style object](configuring.md#style-objects) for the first cell in the *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un rango que contenga el estilo a recuperar.

* Si *rangeObj* contiene un rango de celdas, se devuelve el estilo de la celda.
* Si *rangeObj* contiene un rango que no es un rango de celdas, se devuelve el estilo de la primera celda del rango.
* Si *rangeObj* contiene varios rangos, sólo se devuelve el estilo de la primera celda del primer rango.

#### Ejemplo

Para obtener los detalles sobre el estilo en la celda seleccionada (B2):

![](../assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

Este código:

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... devolverá este objeto:

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```

#### Ver también

[VP GET DEFAULT STYLE](#vp-get-default-style)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP Get column attributes

<!-- REF #_method_.VP Get column attributes.Syntax -->
**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| Parámetros | Tipo       |    | Descripción                                                     |
| ---------- | ---------- | -- | --------------------------------------------------------------- |
| rangeObj   | Object     | -> | Objeto rango                                                    |
| Result     | Collection | <- | Colección de propiedades de columnas|<!-- END REF -->

|

#### Descripción

El comando `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->returns a collection of properties for any column in the *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de columnas cuyos atributos serán recuperados.

La colección devuelta contiene todas las propiedades de las columnas, hayan sido o no definidas por el comando [VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes).

#### Ejemplo

El código siguiente:

```4d
C_OBJECT($range)
C_COLLECTION($attr)

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... devolverá una colección de los atributos dentro del rango dado:

![](../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### Ver también

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get column count

<!-- REF #_method_.VP Get column count.Syntax -->
**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get column count.Params -->

| Parámetros | Tipo    |    | Descripción                                          |
| ---------- | ------- | -- | ---------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro en el formulario         |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)          |
| Result     | Integer | <- | Número total de columnas |<!-- END REF -->

|

#### Descripción

El comando `VP Get column count` <!-- REF #_method_.VP Get column count.Summary -->returns the total number of columns from the designated *sheet*<!-- END REF -->.

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener el número de columnas en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

El siguiente código devuelve el número de columnas en el área 4D View Pro:

```4d
C_Integer($colCount)
$colCount:=VP Get column count("ViewProarea")
```

#### Ver también

[VP Get row count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get current sheet

<!-- REF #_method_.VP Get current sheet.Syntax -->
**VP Get current sheet** ( *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

| Parámetros | Tipo    |    | Descripción                                         |
| ---------- | ------- | -- | --------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro        |
| Resultado  | Integer | <- | Indice de la hoja actual|<!-- END REF -->

|

#### Descripción

El comando `VP Get current sheet` <!-- REF #_method_.VP Get current sheet.Summary -->devuelve el índice de la hoja actual en *vpAreaName*. La hoja actual es la hoja seleccionada en el documento.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

> La indexación comienza en 0.

#### Ejemplo

Cuando se selecciona la tercera hoja:

![third-sheet](../assets/en/ViewPro/vp-sheet-3-select.png)

El comando devuelve 2:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### Ver también

[VP SET CURRENT SHEET](#vp-set-current-sheet)

### VP Get data context

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |

</details>

<!-- REF #_method_.VP Get data context.Syntax -->
**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Object<br/>**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

| Parámetros | Tipo                     |    | Descripción                                         |
| ---------- | ------------------------ | -- | --------------------------------------------------- |
| vpAreaName | Object                   | -> | Nombre de objeto formulario área 4D View Pro        |
| sheet      | Integer                  | -> | Índice de la hoja para obtener el contexto de datos |
| Result     | Object &#124; Collection | <- | Contexto de los datos|<!-- END REF -->

|

#### Descripción

El comando `VP Get data context` <!-- REF #_method_.VP Get data context.Summary -->devuelve el contexto de datos actual de una hoja de cálculo<!-- END REF -->. The returned context includes any modifications made to the contents of the data context.

En *sheet*, pase el índice de la hoja de la que obtener el contexto de datos. Si no se pasa ningún índice, el comando devuelve el contexto de datos de la hoja de cálculo actual. Si no hay contexto para la hoja de trabajo, el comando devuelve `Null`.

La función devuelve un objeto o una colección dependiendo del tipo de contexto de datos definido con [VP SET DATA CONTEXT](#vp-set-data-context).

#### Ejemplo

Para obtener el contexto de datos asociado a las siguientes celdas:

![](../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

#### Ver también

[VP SET DATA CONTEXT](#vp-set-data-context)<br/>[VP Get binding path](#vp-get-binding-path)<br/>[VP SET BINDING PATH](#vp-set-binding-path)

### VP Get default style

<!-- REF #_method_.VP Get default style.Syntax -->
**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get default style.Params -->

| Parámetros | Tipo    |    | Descripción                                          |
| ---------- | ------- | -- | ---------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro en el formulario         |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)          |
| Result     | Integer | <- | Número total de columnas |<!-- END REF -->

|

#### Descripción

El comando `VP Get default style` <!-- REF #_method_.VP Get default style.Summary -->devuelve un objeto style por defecto para una hoja<!-- END REF -->. El objeto devuelto contiene las propiedades básicas de renderización del documento, así como la configuración de estilo por defecto (si la hay) definida previamente por el método [VP SET DEFAULT STYLE](#vp-set-default-style). The returned object contains basic document rendering properties as well as the default style settings (if any) previously set by the [VP SET DEFAULT STYLE](#vp-set-default-style) method.

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener el recuento de columnas en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

Para obtener los detalles sobre el estilo predeterminado para este documento:

![](../assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

Este código:

```4d
$defaultStyle:=VP Get default style("myDoc")
```

devolverá esta información en el objeto *$defaultStyle*:

```4d
{
 backColor:#E6E6FA,
 hAlign:0,
 vAlign:0,
 font:12pt papyrus
}
```

#### Ver también

[VP Get cell style](#vp-get-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

### VP Get formula

<!-- REF #_method_.VP Get formula.Syntax -->
**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

| Parámetros | Tipo   |    | Descripción                        |
| ---------- | ------ | -- | ---------------------------------- |
| rangeObj   | Object | -> | Objeto rango                       |
| Result     | Text   | <- | Formula|<!-- END REF -->

|

#### Descripción

El comando `VP Get formula` <!-- REF #_method_.VP Get formula.Summary -->recupera la fórmula de un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango cuya fórmula desea recuperar. Si *rangeObj* designa varias celdas o varios rangos, se devuelve la fórmula de la primera celda. Si *rangeObj* es una celda que no contiene una fórmula, el método devuelve una cadena vacía.

#### Ejemplo

```4d
  //definir una fórmula
 VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")

 $result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

#### Ver también

[VP Get formulas](#vp-get-formulas)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get formula by name

<!-- REF #_method_.VP Get formula by name.Syntax -->
**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

| Parámetros | Tipo   |    | Descripción                                                            |
| ---------- | ------ | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro                           |
| name       | Text   | -> | Nombre del rango nombrado                                              |
| scope      | Number | -> | Alcance objetivo (por defecto=hoja actual)                             |
| Result     | Text   | <- | Definición de la fórmula o rango con nombre|<!-- END REF -->

|

#### Descripción

El comando `VP Get formula by name` <!-- REF #_method_.VP Get formula by name.Summary --> devuelve la fórmula y el comentario correspondientes al rango con nombre o a la fórmula con nombre pasados en el parámetro *name*, o **null** si no existe en el alcance definido<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase el rango con nombre o la fórmula con nombre que desea obtener en *name*. Tenga en cuenta que los rangos con nombre se devuelven como fórmulas que contienen referencias absolutas de celdas.

Puede definir dónde obtener la fórmula en *scope* utilizando el índice de la hoja (la numeración comienza en 0) o una de las siguientes constantes:

* `vk current sheet`
* `vk workbook`

##### Objeto devuelto

El objeto devuelto contiene las siguientes propiedades:

| Propiedad | Tipo | Descripción                                                                                                                                                     |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | Text | Texto de la fórmula correspondiente a la fórmula nombrada o al rango nombrado. Para los rangos nombrados, la fórmula es una secuencia de coordenadas absolutas. |
| comment   | Text | Comentario correspondiente a la fórmula nombrada o al rango nombrado                                                                                            |

#### Ejemplo

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1

$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```

#### Ver también

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get names](#vp-get-names)

### VP Get formulas

<!-- REF #_method_.VP Get formulas.Syntax -->
**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get formulas.Params -->

| Parámetros | Tipo       |    | Descripción                                                    |
| ---------- | ---------- | -- | -------------------------------------------------------------- |
| rangeObj   | Object     | -> | Objeto rango                                                   |
| Result     | Collection | <- | Colección de valores de una fórmula|<!-- END REF -->

|

#### Descripción

El comando `VP Get formulas` <!-- REF #_method_.VP Get formulas.Summary -->recupera las fórmulas de un *rangeObj* designado<!-- END REF -->.

En *rangeObj*, pase un rango cuyas fórmulas desee recuperar. Si *rangeObj* designa varios rangos, se devuelve la fórmula del primer rango. Si *rangeObj* no contiene fórmulas, el comando devuelve una cadena vacía.

La colección devuelta es bidimensional:

* La colección de primer nivel contiene subcolecciones de fórmulas. Cada subcolección representa una línea.
* Cada subcolección define los valores de las celdas para la línea. The first-level collection contains subcollections of formulas.

#### Ejemplo

Quiere recuperar las fórmulas de las columnas Sum y Average de este documento:

![](../assets/en/ViewPro/cmd_vpGetFormulas.PNG)

Puede utilizar este código:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### Ver también

[VP Get formula](#vp-get-formula)<br/>[VP Get values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get frozen panes

<!-- REF #_method_.VP Get frozen panes.Syntax -->
**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get frozen panes.Params -->

| Parámetros | Tipo    |    | Descripción                                                                                       |
| ---------- | ------- | -- | ------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                                                      |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                                                       |
| Result     | Object  | <- | Objeto que contiene la información de las columnas y líneas congeladas|<!-- END REF -->

|

#### Descripción

El comando `VP Get frozen panes` <!-- REF #_method_.VP Get frozen panes.Summary -->devuelve un objeto con información sobre las columnas y líneas congeladas en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

##### Objeto devuelto

El comando devuelve un objeto que describe las columnas y líneas congeladas. Este objeto puede contener las siguientes propiedades:

| Propiedad           | Tipo    | Descripción                                                    |
| ------------------- | ------- | -------------------------------------------------------------- |
| columnCount         | Integer | El número de columnas congeladas a la izquierda de la hoja     |
| trailingColumnCount | Integer | El número de columnas congeladas a la derecha de la hoja       |
| rowCount            | Integer | El número de líneas congeladas en la parte superior de la hoja |
| trailingRowCount    | Integer | El número de líneas congeladas en la parte inferior de la hoja |

#### Ejemplo

Quiere recuperar información sobre el número de columnas y líneas congeladas:

```4d
var $panesObj : Object

$panesObj:=VP Get frozen panes("ViewProArea")
```

El objeto devuelto contiene, por ejemplo:

![](../assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### Ver también

[VP SET FROZEN PANES](#vp-set-frozen-panes)

### VP Get names

<!-- REF #_method_.VP Get names.Syntax -->
**VP Get names** ( vpAreaName : Text { ; scope : Number } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

| Parámetros | Tipo       |    | Descripción                                                          |
| ---------- | ---------- | -- | -------------------------------------------------------------------- |
| vpAreaName | Text       | -> | Nombre de objeto formulario área 4D View Pro                         |
| scope      | Number     | -> | Alcance objetivo (por defecto= hoja actual)                          |
| Result     | Collection | <- | Nombres existentes en el alcance definido|<!-- END REF -->

|

#### Descripción

El comando `VP Get names` <!-- REF #_method_.VP Get names.Summary -->devuelve una colección de todos los "nombres" definidos en la hoja actual o en el alcance designado en el parámetro *scope*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener los nombres en *scope* utilizando el índice de la hoja (la numeración comienza en 0) o una de las siguientes constantes:

* `vk current sheet`
* `vk workbook`

##### Colección devuelta

La colección devuelta contiene un objeto por nombre. Las propiedades de objetos siguientes pueden ser devueltas:

| Propiedad           | Tipo | Descripción                   |
| ------------------- | ---- | ----------------------------- |
| result\[ ].name    | Text | nombre de celda o de rango    |
| result\[ ].formula | Text | formula                       |
| result\[ ].comment | Text | Comentario asociado al nombre |

Las propiedades disponibles dependen del tipo de elemento con nombre (celda con nombre, rango con nombre o fórmula con nombre).

#### Ejemplo

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) //nombres en la 3a hoja
```

#### Ver también

[VP ADD FORMULA NAME](#vp-get-formula)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Name](#vp-name)

### VP Get print info

<!-- REF #_method_.VP Get print info.Syntax -->
**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get print info.Params -->

| Parámetros | Tipo    |    | Descripción                                                                |
| ---------- | ------- | -- | -------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                               |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                                |
| Result     | Object  | <- | Objeto que contiene la información de impresión|<!-- END REF -->

|

#### Descripción

El comando `VP Get print info` <!-- REF #_method_.VP Get print info.Summary -->devuelve un objeto que contiene los atributos de impresión de *vpAreaName*<!-- END REF -->.

Pase el nombre del área 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja de cálculo específica (la numeración comienza en 0) cuyos atributos de impresión desea devolver.  Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

Este código:

```4d
$pinfo:=VP Get print info("ViewProArea")
```

... devuelve los atributos de impresión del área 4D View Pro establecidos en el comando [VP SET PRINT INFO](#vp-set-print-info):

```4d
{
bestFitColumns:false,
bestFitRows:false,
blackAndWhite:false,
centering:0,
columnEnd:8,
columnStart:0,
firstPageNumber:1,
fitPagesTall:1,
fitPagesWide:1,
footerCenter:"&BS.H.I.E.L.D. &A Sales Per Region",
footerCenterImage:,
footerLeft:,
footerLeftImage:,
footerRight:"page &P of &N",
footerRightImage:,
headerCenter:,
headerCenterImage:,
headerLeft:"&G",
headerLeftImage:logo.png,
headerRight:,
headerRightImage:,
margin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},
orientation:2,
pageOrder:0,
pageRange:,
paperSize:{width:850,height:1100,kind:1},
qualityFactor:2,
repeatColumnEnd:-1,
repeatColumnStart:-1,
repeatRowEnd:-1,
repeatRowStart:-1,
rowEnd:24,
rowStart:0,
showBorder:false,
showColumnHeader:0,
showGridLine:false,
showRowHeader:0,
useMax:true,
watermark:[],
zoomFactor:1
}
```

#### Ver también

[4D View Pro Print Attributes](configuring.md#print-attributes)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Get row attributes

<!-- REF #_method_.VP Get row attributes.Syntax -->
**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

| Parámetros | Tipo       |    | Descripción                                                     |
| ---------- | ---------- | -- | --------------------------------------------------------------- |
| rangeObj   | Object     | -> | Objeto rango                                                    |
| Result     | Collection | <- | Colección de propiedades de la línea|<!-- END REF -->

|

#### Descripción

El comando `VP Get row attributes` <!-- REF #_method_.VP Get row attributes.Summary -->devuelve una colección de propiedades para las líneas de *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de líneas cuyos atributos serán recuperados.

La colección devuelta contiene las propiedades de las líneas, hayan sido o no definidas por el método [VP SET ROW ATTRIBUTES](#vp-set-row-attributes).

#### Ejemplo

El siguiente código devuelve una colección de los atributos dentro del rango dado:

```4d
var $range : Object
var $attr : Collection

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

![](../assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### Ver también

[VP Get column attributes](#vp-get-column-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get row count

<!-- REF #_method_.VP Get row count.Syntax -->
**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

| Parámetros | Tipo    |    | Descripción                                       |
| ---------- | ------- | -- | ------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro en el formulario      |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)       |
| Result     | Integer | <- | Número total de líneas|<!-- END REF -->

|

#### Descripción

El comando `VP Get row count` <!-- REF #_method_.VP Get row count.Summary -->devuelve el número total de líneas de la *sheet* designada<!-- END REF -->.

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener el número de líneas en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

El siguiente código devuelve el número de líneas en el área 4D View Pro:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### Ver también

[VP Get column count](#vp-get-column-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get selection

<!-- REF #_method_.VP Get selection.Syntax -->
**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get selection.Params -->

| Parámetros | Tipo    |    | Descripción                                       |
| ---------- | ------- | -- | ------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro en el formulario      |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)       |
| Result     | Object  | <- | Objeto rango de celdas|<!-- END REF -->

|

#### Descripción

El comando `VP Get selection` <!-- REF #_method_.VP Get selection.Summary -->devuelve un nuevo objeto rango que hace referencia a las celdas actuales seleccionadas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

![](../assets/en/ViewPro/cmd_vpGetSelection.PNG)

El siguiente código recuperará las coordenadas de todas las celdas de la selección actual:

```4d
$currentSelection:=VP Get selection("myVPArea")


//devuelve un objeto rango que contiene:
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

#### Ver también

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP Get sheet count

<!-- REF #_method_.VP Get sheet count.Syntax -->
**VP Get sheet count** ( *vpAreaName* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet count.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| Resultado  | Integer | <- | Número de hojas|<!-- END REF -->

|

#### Descripción

El comando `VP Get sheet count` <!-- REF #_method_.VP Get sheet count.Summary -->devuelve el número de hojas en el documento cargado en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

#### Ejemplo

En el siguiente documento:

![](../assets/en/ViewPro/vp-sheet-3.png)

Obtener el número de hojas y define la hoja actual como la última hoja:

```4d
 $count:=VP Get sheet count("ViewProArea")
  //definir la hoja actual como la última hoja (la indexación comienza en 0)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](../assets/en/ViewPro/vp-sheet-3-select.png)

#### Ver también

[VP Get sheet index](#vp-get-sheet-index)<br/>[VP SET SHEET COUNT](#vp-set-sheet-count)

### VP Get sheet index

<!-- REF #_method_.VP Get sheet index.Syntax -->
**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| name       | Text    | -> | Nombre de la hoja                            |
| Resultado  | Integer | <- | Índice de la hoja|<!-- END REF -->

|

#### Descripción

El comando `VP Get sheet index` <!-- REF #_method_.VP Get sheet index.Summary -->devuelve el índice de una hoja en función de su nombre en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *name*, pase el nombre de la hoja cuyo índice se devolverá. Si no se encuentra ninguna hoja llamada *name* en el documento, el método devuelve -1.
> La indexación comienza en 0.

#### Ejemplo

En el siguiente documento:

![](../assets/en/ViewPro/vp-sheet-index-name.png)

Obtiene el índice de la hoja llamada "Total first quarter":

```4d
$index:=VP Get sheet index("ViewProArea";"Total premier trimestre") //devuelve 2
```

#### Ver también

[VP Get sheet count](#vp-get-sheet-count)<br/>[VP Get sheet name](#vp-get-sheet-name)

### VP Get sheet name

<!-- REF #_method_.VP Get sheet name.Syntax -->
**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| sheet      | Integer | -> | Índice de la hoja                            |
| Resultado  | Text    | <- | Nombre de la hoja|<!-- END REF -->

|

#### Descripción

El comando `VP Get sheet name` <!-- REF #_method_.VP Get sheet name.Summary -->devuelve el nombre de una hoja en función de su índice en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pasar el índice de la hoja cuyo nombre se devolverá.

Si el índice de hoja pasado no existe, el método devuelve un nombre vacío.
> La indexación comienza en 0.

#### Ejemplo

Obtener el nombre de la tercera hoja en el documento:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```



#### Ver también

[VP Get sheet index](#vp-get-sheet-index)

### VP Get sheet options

<!-- REF #_method_.VP Get sheet options.Syntax -->
**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

| Parámetros | Tipo    |    | Descripción                                           |
| ---------- | ------- | -- | ----------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro en el formulario          |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)           |
| Result     | Object  | <- | Objeto opciones de la hoja|<!-- END REF -->

|

#### Descripción

El comando `VP Get sheet options` <!-- REF #_method_.VP Get sheet options.Summary -->devuelve un objeto que contiene las opciones relativas a la hoja actual del área *vpAreaName*<!-- END REF -->.

Pase el nombre del área de 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Objeto devuelto

El método devuelve un objeto que contiene los valores actuales de todas las opciones de hoja disponibles. Un valor de una opción puede haber sido modificado por el usuario o por el método [VP SET SHEET OPTIONS](#vp-set-sheet-options).

Para ver la lista completa de las opciones, consulte [Opciones hoja](configuring.md#sheet-options).

#### Ejemplo

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) //los encabezados de las columnas son visibles
    ... //do something
End if
```

#### Ver también

[4D VIEW PRO SHEET OPTIONS](configuring.md#sheet-options)<br/>[VP SET SHEET OPTIONS](#vp-set-sheet-options)

### VP Get show print lines

<!-- REF #_method_.VP Get show print lines.Syntax -->
**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #_method_.VP Get show print lines.Params -->

| Parámetros | Tipo    |    | Descripción                                                                                    |
| ---------- | ------- | -- | ---------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                                                   |
| sheet      | Integer | <- | Índice de la hoja                                                                              |
| Resultado  | Boolean | <- | True si las líneas de impresión son visibles, de lo contrario False|<!-- END REF -->

|

#### Descripción

El comando `VP Get show print lines` <!-- REF #_method_.VP Get show print lines.Summary -->devuelve `True` si las líneas de previsualizacipon de impresión son visibles y `False` si están ocultas.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja objetivo. Si se omite *sheet*, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

#### Ejemplo

El siguiente código comprueba si las líneas de vista previa se muestran u ocultan en el documento:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### Ver también

[VP SET SHOW PRINT LINES](#vp-set-show-print-lines)

### VP Get spans

<!-- REF #_method_.VP Get spans.Syntax -->
**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

| Parámetros | Tipo   |    | Descripción                                                                 |
| ---------- | ------ | -- | --------------------------------------------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                                                                |
| Result     | Object | <- | Objeto de celdas fusionadas en el rango definido|<!-- END REF -->

|

#### Descripción

El comando `VP Get spans` <!-- REF #_method_.VP Get spans.Summary -->recupera las celdas fusionadas (cell spans) de e*rangeObj*<!-- END REF -->.

En *rangeObj*, pase un rango de celdas fusionadas que desee recuperar. Si *rangeObj* no contiene celdas fusionadas, se devuelve un rango vacío.

#### Ejemplo

Para centrar el texto de las celdas fusionadas en este documento:

![](../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Buscar todas las celdas fusionadas 
$range:=VP Get spans(VP All("ViewProArea"))

//centrar el texto
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### Ver también

[VP ADD SPAN](configuring.md#sheet-options)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP Get stylesheet

<!-- REF #_method_.VP Get stylesheet.Syntax -->
**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| styleName  | Text    | -> | Nombre del estilo                            |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)  |

|Result|Object|<-|Style sheet object|<!-- END REF -->

#### Descripción

El comando `VP Get stylesheet` <!-- REF #_method_.VP Get stylesheet.Summary -->devuelve el objeto hoja de estilo *styleName* que contiene los valores de las propiedades que se han definido<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *styleName*, pase el nombre del estilo a leer.

Puede definir de dónde obtener la hoja de estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0) o con las siguientes constantes:

* `vk current sheet`
* `vk workbook`

#### Ejemplo

El código siguiente:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... devolverá el objeto estilo *GreenDashDotStyle* de la hoja actual:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### Ver también

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP ADD STYLESHEET](#vp-set-sheet-options)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)

### VP Get stylesheets

<!-- REF #_method_.VP Get stylesheets.Syntax -->
**VP Get stylesheets** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

| Parámetros | Tipo       |    | Descripción                                                        |
| ---------- | ---------- | -- | ------------------------------------------------------------------ |
| vpAreaName | Text       | -> | Nombre de objeto formulario área 4D View Pro                       |
| sheet      | Integer    | -> | Alcance objetivo (por defecto = hoja actual)                       |
| Result     | Collection | <- | Colección de objetos de hojas de estilo|<!-- END REF -->

|

#### Descripción

El comando `VP Get stylesheets` <!-- REF #_method_.VP Get stylesheets.Summary -->devuelve la colección de objetos hoja de estilo definidos en la *sheet* designada<!-- END REF -->.

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir de dónde obtener las hojas de estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0) o con las siguientes constantes:

* `vk current sheet`
* `vk workbook`

#### Ejemplo

El siguiente código devolverá una colección de todos los objetos estilo de la hoja actual:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

En este caso, la hoja actual utiliza dos objetos estilo:

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```

#### Ver también

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)


### VP Get table column attributes

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP Get table column attributes.Syntax -->
**VP Get table column attributes** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table column attributes.Params -->

| Parámetros | Tipo    |    | Descripción                                          |
| ---------- | ------- | -- | ---------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro         |
| tableName  | Text    | -> | Nombre de la tabla                                   |
| column     | Integer | -> | Índice de la columna en la tabla                     |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)          |
| Result     | Object  | <- | Atributos de la *columna*|<!-- END REF -->


|


#### Descripción

El comando `VP Get table attributes` <!-- REF #_method_.VP Get table column attributes.Summary -->devuelve los atributos actuales de la *column* especificada en *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.
> La indexación comienza en 0.

El comando devuelve un objeto que describe los atributos actuales de la *columna*:

| Propiedad           | Tipo    | Descripción                                                                                                                     |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nombre de la propiedad de la columna de la tabla en el contexto de datos. No se devuelve si la tabla se muestra automáticamente |
| name                | text    | Nombre de la columna de la tabla.                                                                                               |
| footerText          | text    | Column footer value.                                                                                                            |
| footerFormula       | text    | Column footer formula.                                                                                                          |
| filterButtonVisible | boolean | True si se muestra el botón de filtro de la columna de la tabla, False en caso contrario.                                       |

Si no se encuentra *tableName* o si el índice de *column* es mayor que el número de columnas, el comando devuelve **null**.

#### Ejemplo

```4d
var $attributes : Object
$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)
If ($attributes.dataField#"")
     ...
End if
```

#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP RESIZE TABLE](#vp-resize-table)


### VP Get table column index

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP Get table column index.Syntax -->
**VP Get table column index** ( *vpAreaName* : Text ; *tableName* : Text ; *columnName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

| Parámetros | Tipo    |    | Descripción                                       |
| ---------- | ------- | -- | ------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro      |
| tableName  | Text    | -> | Nombre de la tabla                                |
| columnName | Text    | -> | Nombre de la columna de la tabla                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)       |
| Result     | Integer | <- | Índice de *columnName*|<!-- END REF -->


|


#### Descripción

El comando `VP Get table column index` <!-- REF #_method_.VP Get table column index.Summary -->devuelve el índice de la columna *columnName* en la tabla *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *columnName*, pase el nombre de la columna de la tabla para la que desea obtener el índice.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.
> La indexación comienza en 0.

Si no se encuentra *tableName* o *columnName*, el comando devuelve -1.

#### Ejemplo

```4d
    // Buscar el id de la columna según el nombre de la columna
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
    // Eliminar la columna por id
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```



#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)


### VP Get table dirty rows

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R8  | Añadidos       |
</details>

<!-- REF #_method_.VP Get table dirty rows.Syntax -->
**VP Get table dirty rows** ( *vpAreaName* : Text ; *tableName* : Text { ; *reset* : Boolean {; *sheet* : Integer }} ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get table dirty rows.Params -->

| Parámetros | Tipo       |    | Descripción                                                                                         |
| ---------- | ---------- | -- | --------------------------------------------------------------------------------------------------- |
| vpAreaName | Text       | -> | Nombre de objeto formulario área 4D View Pro                                                        |
| tableName  | Text       | -> | Nombre de la tabla                                                                                  |
| reset      | Boolean    | -> | True to clear the dirty status from the current table, False to keep it untouched. Por defecto=True |
| sheet      | Integer    | -> | Índice de la hoja (hoja actual si se omite)                                                         |
| Result     | Collection | <- | Collection of objects with all the items modified since the last reset|<!-- END REF -->


|


#### Descripción

El comando `VP Get table dirty rows` <!-- REF #_method_.VP Get table dirty rows.Summary -->devuelve una colección de objetos *dirty row*, que contiene los elementos que fueron modificados desde el último reinicio en la tabla especificada *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

In *tableName*, pass the name of the table for which you want to get the dirty rows. Only modified columns bound to a [data context](#vp-set-data-context) will be taken into account.

By default, calling the command will clear the *dirty* status from the current table. To keep this status untouched, pass `False` in the *reset* parameter.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

Each *dirty row* object in the returned collection contains the following properties:

| Propiedad    | Tipo    | Descripción                         |
| ------------ | ------- | ----------------------------------- |
| item         | object  | Modified object of the modified row |
| originalItem | object  | Object before modification          |
| row          | integer | Index of the modified row           |

If *tableName* is not found or if it does not contain a modified column, the command returns an empty collection.

#### Ejemplo

You want to count the number of edited rows:

```4d
var $dirty : Collection
$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)
VP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)
```

#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)<br/>[VP RESIZE TABLE](#vp-resize-table)




### VP Get table range

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP Get table range.Syntax -->
**VP Get table range** ( *vpAreaName* : Text ; *tableName* : Text {; *onlyData* : Integer {; *sheet* : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Parámetros | Tipo    |    | Descripción                                                 |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                |
| tableName  | Text    | -> | Nombre de la tabla                                          |
| onlyData   | Integer | -> | `vk table full range` (por defecto) o `vk table data range` |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                 |
| Result     | Object  | <- | Rango que contiene la tabla|<!-- END REF -->

|

#### Descripción

El comando `VP Get table range` <!-- REF #_method_.VP Get table range.Summary -->devuelve el rango de *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En el parámetro *onlyData*, puede pasar una de las siguientes constantes para indicar si desea obtener sólo los datos:

| Constante             | Valor | Descripción                                                                                                  |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------ |
| `vk table full range` | 0     | Obtiene el rango de celdas para el área de la tabla con pie de página y encabezado (por defecto si se omite) |
| `vk table data range` | 1     | Obtener el rango de celdas sólo para el área de datos de la tabla                                            |

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.
> La indexación comienza en 0.

Si no se encuentra *tableName*, el comando devuelve **null**.

#### Ver también

[VP RESIZE TABLE](#vp-resize-table)<br/> [VP Find table](#vp-find-table)


### VP Get table theme

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R8  | Añadidos       |
</details>

<!-- REF #_method_.VP Get table theme.Syntax -->

**VP Get table theme** ( *vpAreaName* : Text ; *tableName* : Text ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| Parámetros | Tipo                                           |    | Descripción                                                    |
| ---------- | ---------------------------------------------- | -- | -------------------------------------------------------------- |
| vpAreaName | Text                                           | -> | Nombre de objeto formulario área 4D View Pro                   |
| tableName  | Text                                           | -> | Nombre de la tabla                                             |
| Result     | [cs.ViewPro.TableTheme](classes.md#tabletheme) | <- | Current table theme property values|<!-- END REF -->


|


#### Descripción

The `VP Get table theme` command <!-- REF #_method_.VP Get table theme.Summary -->returns the current theme propertie values of the *tableName*<!-- END REF -->. A table theme can be set using the [`VP CREATE TABLE`](#vp-create-table) or [`VP SET TABLE THEME`](#vp-set-table-theme) commands, or through the interface.

In *vpAreaName*, pass the name of the 4D View Pro area and in *tableName*, the name of the table.

The command returns an object of the [cs.ViewPro.TableTheme](classes.md#tabletheme) class with properties and values that describe the current table theme.


#### Ejemplo

The command returns a full `theme` object even if a [native SpreadJS theme](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) name was used to define the theme.

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="dark10" //use of a native theme name

VP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)
$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")
$result:=Asserted(Value type($vTheme.theme)=Is object) //true
```


#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP SET TABLE THEME](#vp-set-table-theme)



### VP Get tables

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP Get tables.Syntax -->
**VP Get tables** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get tables.Params -->

| Parámetros | Tipo       |    | Descripción                                                                        |
| ---------- | ---------- | -- | ---------------------------------------------------------------------------------- |
| vpAreaName | Text       | -> | Nombre de objeto formulario área 4D View Pro                                       |
| sheet      | Integer    | -> | Índice de la hoja (hoja actual si se omite)                                        |
| Result     | Collection | <- | Colección de textos con todos los nombres de las tablas|<!-- END REF -->

|

#### Descripción

El comando `VP Get tables` <!-- REF #_method_.VP Get tables.Summary -->devuelve una colección de todos los nombres de tablas definidos en *sheet*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.
> La indexación comienza en 0.



#### Ejemplo

El siguiente código devolverá una colección de todos los nombres de tablas de la hoja actual:


```4d
$tables:=VP Get tables("ViewProArea")
//$tables contiene por ejemplo ["contextTable","emailTable"]

```

#### Ver también

[VP CREATE TABLE](#vp-create-table)





### VP Get value

<!-- REF #_method_.VP Get value.Syntax -->
**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

| Parámetros | Tipo   |    | Descripción                                                      |
| ---------- | ------ | -- | ---------------------------------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                                                     |
| Result     | Object | <- | Objeto que contiene un valor de celda|<!-- END REF -->

|

#### Descripción

El comando `VP Get value` <!-- REF #_method_.VP Get value.Summary -->recupera un valor de celda de un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango cuyo valor desea recuperar.

#### Objeto devuelto

El objeto devuelto contendrá la propiedad `value` y, en caso de un valor fecha js, una propiedad `time`:

| Propiedad | Tipo                               | Descripción                                                  |
| --------- | ---------------------------------- | ------------------------------------------------------------ |
| value     | Integer, Real, Boolean, Text, Date | Valor de *rangeObj* (excepto- time)                          |
| time      | Real                               | Valor hora (en segundos) si el valor es del tipo de fecha js |

Si el objeto devuelto incluye una fecha u hora, se trata como una fecha-hora y se completa de la siguiente manera:

* valor hora - la parte de la fecha se completa como December 30, 1899 en formato dd/MM/yyyy (30/12/1899)
* valor fecha - la parte de la hora se completa como medianoche en formato HH:mm:ss (00:00:00)

Si *rangeObj* contiene varias celdas o varios rangos, se devuelve el valor de la primera celda. El comando devuelve un objeto null si la celda está vacía.

#### Ejemplo

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))
End if
```

#### Ver también

[VP Get values](#vp-get-values)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET VALUES](#vp-set-values)

### VP Get values

<!-- REF #_method_.VP Get values.Syntax -->
**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get values.Params -->

| Parámetros | Tipo       |    | Descripción                                     |
| ---------- | ---------- | -- | ----------------------------------------------- |
| rangeObj   | Object     | -> | Objeto rango                                    |
| Result     | Collection | <- | Colección de valores|<!-- END REF -->

|

#### Descripción

El comando `VP Get values` <!-- REF #_method_.VP Get values.Summary --> recupera los valores del *rangeObj* designado<!-- END REF -->.

En *rangeObj*, pase un rango cuyos valores desea recuperar. Si *rangeObj* incluye varios rangos, sólo se utiliza el primer rango.

La colección devuelta por `VP Get values` contiene una colección bidimensional:

* Cada elemento de la colección de primer nivel representa una línea y contiene una subcolección de valores
* Cada subcolección contiene los valores de las celdas de la línea. Los valores pueden ser Integer, Real, Boolean, Text, Null. Si un valor es de tipo fecha u hora, se devuelve en un objeto con las siguientes propiedades:

 | Propiedad | Tipo  | Descripción                                                  |
 | --------- | ----- | ------------------------------------------------------------ |
 | value     | Fecha | Valor de la celda (excepto - time)                           |
 | time      | Real  | Valor hora (en segundos) si el valor es del tipo de fecha js |

Las fechas o las horas son consideradas como un datetime y se completan de la siguiente manera:

* valor de tipo hora - la parte fecha se completa como 30 de diciembre de 1899
* valor de tipo date - la parte de la hora se completa como medianoche (00:00:00:000)

#### Ejemplo

Quiere obtener los valores de C4 a G6:

![](../assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### Ver también

[VP Get formulas](#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get workbook options

<!-- REF #_method_.VP Get workbook options.Syntax -->

**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get workbook options.Params -->
| Parámetros | Tipo   |    | Descripción                                                                      |
| ---------- | ------ | -- | -------------------------------------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro                                     |
| Result     | Object | <- | Objeto que contiene las opciones del libro de trabajo|<!-- END REF -->

|

#### Descripción

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
devuelve un objeto que contiene las opciones del workbook en *vpAreaName*<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

El objeto devuelto contiene todas las opciones del libro de trabajo (por defecto y modificadas), en el libro de trabajo.

La lista de opciones del libro de trabajo está referenciada en la descripción de [`VP SET WORKBOOK OPTIONS`](#vp-set-workbook-options).

#### Ejemplo

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### Ver también

[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## I

### VP IMPORT DOCUMENT

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->
**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Parámetros | Tipo   |    | Descripción                                        |
| ---------- | ------ | -- | -------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro       |
| filePath   | Text   | -> | Ruta de acceso del documento                       |
| paramObj   | Object | -> | Opciones de importación|<!-- END REF -->

|

#### Descripción

El comando `VP IMPORT DOCUMENT` <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->importa y muestra el documento designado por *filePath* en el área 4D View Pro *vpAreaName*<!-- END REF -->. El documento importado sustituye a los datos ya insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *filePath*, pase la ruta y el nombre del documento a importar. Se soportan los siguientes formatos:

* Les documents 4D View Pro (extensión ".4vp")
* Microsoft Excel (extensión ".xlsx")

* documentos texto (extension ".txt", ".csv", el documento debe estar en utf-8)

Si la extensión del documento no es una extensión reconocida, como `.4vp` o `.xlsx`, el documento se considera un documento texto. Debe pasar una ruta completa, a menos que el documento se encuentre en el mismo nivel que la carpeta Project, en cuyo caso puede pasar sólo su nombre.

> Al importar un archivo con formato Microsoft Excel a un documento 4D View Pro, algunos parámetros pueden perderse. Puede verificar sus parámetros con [esta lista de GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).

Se devuelve un error si el parámetro `filePath` no es válido, o si el archivo falta o está mal formado.

El parámetro opcional *paramObj* permite definir las propiedades del documento importado:

| Parámetros |                 | Tipo   | Descripción                                                                                                                                                                                                                                                                          |
| ---------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula    |                 | object | Un nombre de método de retollamada que se lanzará cuando la importación haya terminado. El método debe utilizar el comando [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html). Ver [Pasar un método de retrollamada (fórmula)](#passing-a-callback-method-formula). |
| contraseña |                 | text   | Sólo Microsoft Excel (opcional) - La contraseña utilizada para proteger un documento MS Excel.                                                                                                                                                                                       |
| csvOptions |                 | object | opciones de importación csv                                                                                                                                                                                                                                                          |
|            | range           | object | Rango de celdas que contiene la primera celda donde se escribirán los datos. Si el rango especificado no es un rango de celdas, sólo se utiliza la primera celda del rango.                                                                                                          |
|            | rowDelimiter    | text   | Delimitador de línea. Si no está presente, el delimitador es determinado automáticamente por 4D.                                                                                                                                                                                     |
|            | columnDelimiter | text   | Delimitador de columna. Por defecto: ","                                                                                                                                                                                                                                             |

> Para más información sobre los valores separados por delimitadores, consulte [este artículo en Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)

#### Ejemplo 1

Desea importar un documento 4D View Pro por defecto almacenado en el disco, al abrir el formulario:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //Área 4D View Pro cargada y lista
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Ejemplo 2

Desea importar un documento Microsoft Excel protegido por contraseña a un área 4D View Pro:

```4d
$o:=New object
$o.password:="excel123"

VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

#### Ejemplo 3

Quiere importar un archivo `.txt` que utiliza una coma (",") como delimitador:

![example-import-csv](../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

|![example-import-csv](../assets/en/ViewPro/vp-import-document-csv-result.png)

#### Ver también


[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP NEW DOCUMENT](#vp-new-document)

### VP IMPORT FROM OBJECT

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->
**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| Parámetros | Tipo   |    | Descripción                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro  |
| viewPro    | Object | -> | Objeto 4D View Pro|<!-- END REF -->

|

#### Descripción

El comando `VP IMPORT FROM OBJECT` <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->importa y muestra el objeto 4D View Pro *viewPro* en el área 4D View Pro *vpAreaName*<!-- END REF -->. El contenido del objeto importado sustituye todos los datos insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *viewPro*, pase un objeto 4D View Pro válido. Este objeto puede haber sido creado utilizando [VP Export to object](#vp-export-to-object) o manualmente. Para más información sobre los objetos 4D View Pro, consulte la sección [Objecto 4D View Pro](languageOverview.html#4d-view-pro-object).

Se devuelve un error si el objeto *viewPro* no es válido.

#### Ejemplo

Desea importar una hoja de cálculo que se ha guardado previamente en un campo objeto:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### Ver también

[VP Export to object](#vp-export-to-object)

### VP INSERT COLUMNS

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->
**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP INSERT COLUMNS` <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserta columnas en el *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de la columna inicial (la columna que designa dónde se insertará la nueva columna) y el número de columnas a insertar. Si se omite el número de columna a insertar (no se define), se inserta una sola columna.

Las nuevas columnas se insertan a la izquierda, directamente antes de la columna inicial en el rango *Obj*.

#### Ejemplo

Para insertar tres columnas antes de la segunda columna:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

El resultado es:

![](../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### Ver también

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT ROWS](#vp-insert-rows)

### VP INSERT ROWS

<!-- REF #_method_.VP INSERT ROWS.Syntax -->
**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT ROWS.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP INSERT ROWS` <!-- REF #_method_.VP INSERT ROWS.Summary -->inserta las líneas definidas por el *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de la línea inicial (la línea que designa dónde se insertará la nueva línea) y el número de línea a insertar. Si se omite el número de línea a insertar (no se define), se inserta una sola línea.

Las nuevas líneas se insertan directamente antes de la primera línea de *rangeObj*.

#### Ejemplo

Para insertar 3 líneas antes de la primera línea:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

El resultado es:

![](../assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### Ver también

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT COLUMNS](#vp-insert-columns)

### VP INSERT TABLE COLUMNS

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->
**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Parámetros  | Tipo    |    | Descripción                                                            |
| ----------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| tableName   | Text    | -> | Nombre de la tabla                                                     |
| column      | Integer | -> | Índice en la tabla de la columna inicial a insertar                    |
| count       | Text    | -> | Número de columnas a añadir (debe ser >0)                              |
| insertAfter | Integer | -> | `vk table insert before` o `vk table insert after` *column*            |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP INSERT TABLE COLUMNS` <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserta una o *count* columna(s) vacía(s) en la tabla especificada *tableName* en el índice *column* especificado<!-- END REF -->.

Cuando se ha insertado una columna con este comando, normalmente se modifica su contenido utilizando el comando [VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes).

En el parámetro *insertAfter*, puede pasar una de las siguientes constantes para indicar si la(s) columna(s) debe(n) insertarse antes o después del índice *column*:

| Constante                | Valor | Descripción                                                     |
| ------------------------ | ----- | --------------------------------------------------------------- |
| `vk table insert before` | 0     | Insertar columna(s) antes de *column* (por defecto si se omite) |
| `vk table insert after`  | 1     | Insertar columna(s) después de la *columna*                     |

Este comando inserta algunas columnas en *tableName*, NO en la hoja. El número total de columnas de la hoja no se ve afectado por el comando. Los datos presentes a la derecha de la tabla (si los hay) se desplazan automáticamente hacia la derecha según el número de columnas añadidas.

Si *tableName* no existe o si no hay suficiente espacio en la hoja, no ocurre nada.


#### Ejemplo

Ver ejemplos para [VP INSERT TABLE ROWS](#vp-insert-table-rows) y [VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes).


#### Ver también

[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE COLUMNS](#vp-remove-table-columns)<br/>[VP SET TABLE COLUMN ATTRIBUTES](#vp-set-table-column-attributes)



### VP INSERT TABLE ROWS

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->
**VP INSERT TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

| Parámetros  | Tipo    |    | Descripción                                                            |
| ----------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| tableName   | Text    | -> | Nombre de la tabla                                                     |
| row         | Integer | -> | Índice en la tabla de la línea inicial a insertar                      |
| count       | Text    | -> | Número de líneas a añadir (debe ser >0)                                |
| insertAfter | Integer | -> | `vk table insert before` o `vk table insert after` *row*               |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP INSERT TABLE ROWS` <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->elimina una o *count* línea(s) vacías en la tabla *tableName* especificada en el índice *row* especificado<!-- END REF -->.

En el parámetro *insertAfter*, puede pasar una de las siguientes constantes para indicar si la(s) línea(s) debe(n) ser insertada(s) antes o después del índice *row*:

| Constante                | Valor | Descripción                                                      |
| ------------------------ | ----- | ---------------------------------------------------------------- |
| `vk table insert before` | 0     | Insertar línea(s) antes de la línea ** (por defecto si se omite) |
| `vk table insert after`  | 1     | Insertar línea(s) después de la *línea*                          |

Este comando inserta algunas líneas en la tabla *tableName*, NO en la hoja. El número total de líneas de la hoja no se ve afectado por el comando. Los datos presentes debajo de la tabla (si los hay) se desplazan automáticamente hacia abajo según el número de líneas añadidas.

Si la tabla *tableName* está vinculada a un [contexto de datos](#vp-set-data-context), el comando inserta nuevos elementos vacíos en la colección.

Si *tableName* no existe o si no hay suficiente espacio en la hoja, no ocurre nada.


#### Ejemplo

Usted crea una tabla con un contexto de datos:

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../assets/en/ViewPro/table-base.png)

Si quiere insertar dos líneas y dos columnas en la tabla, puede escribir:

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../assets/en/ViewPro/table-insert.png)




#### Ver también

[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP REMOVE TABLE ROWS](#vp-remove-table-rows)




## M

### VP MOVE CELLS

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R4  | Añadidos       |
</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->
**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

| Parámetros  | Tipo   |    | Descripción                                                  |
| ----------- | ------ | -- | ------------------------------------------------------------ |
| originRange | Object | -> | Rango de celdas desde donde copiar                           |
| targetRange | Object | -> | Rango de destino para los valores, el formato y las fórmulas |
| options     | Object | -> | Opciones adicionales|<!-- END REF -->

|

#### Descripción

El comando `VP MOVE CELLS` <!-- REF #_method_.VP MOVE CELLS.Summary -->mueve o copia los valores, el estilo y las fórmulas de *originRange* a *targetRange*<!-- END REF -->.

*originRange* y *targetRange* pueden referirse a diferentes áreas View Pro.

En *originRange*, pase un objeto rango que contenga los valores, el estilo y las celdas de la fórmula a copiar o mover. Si *originRange* es un rango combinado, sólo se utiliza el primero.

En *targetRange*, pase el rango de celdas donde se copiarán o moverán los valores de las celdas, el estilo y las fórmulas.

El parámetro *options* tiene varias propiedades:

| Propiedad    | Tipo    | Descripción                                                                                                                                                   |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | Determina si los valores, el formato y las fórmulas de las celdas de *originRange* se eliminan después de la ejecución del comando:<ul><li>*False* (por defecto) para eliminarlos</li><li>*True* para conservarlos</li></ul> |
| pasteOptions | Longint | Especifica lo que se pega. Valores posibles: <p><table><tr><th>Valor</th><th>Descripción</th></tr><tr><td>`vk clipboard options all` (por defecto)</td><td>Pega todos los objetos de datos, incluyendo valores, formato y fórmulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pega sólo el formato.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pegar sólo las fórmulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pega las fórmulas y el formato.</td></tr><tr><td>`vk clipboard options values`</td><td>Pega sólo los valores.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pega los valores y el formato.</td></tr></table></p>                                                                                        |


Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](#vp-set-workbook-options).

#### Ejemplo

Para copiar el contenido, los valores, el formato y las fórmulas de un rango origen:

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```

#### Ver también

[VP Copy to object](#vp-copy-to-object)<br/>[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## N

### VP Name

<!-- REF #_method_.VP Name.Syntax -->
**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *sheet* : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

| Parámetros | Tipo    |    | Descripción                                   |
| ---------- | ------- | -- | --------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro  |
| rangeName  | Text    | -> | Nombre del rango existente                    |
| sheet      | Integer | -> | Ubicación del rango (hoja actual si se omite) |
| Result     | Object  | <- | Rango de nombre|<!-- END REF -->

|

#### Descripción

El comando `VP Name` <!-- REF #_method_.VP Name.Summary -->devuelve un nuevo objeto rango que hace referencia a un rango con nombre<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *rangeName* indica un rango de celdas con nombre existente.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango *rangeName*. Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual o todo el libro de trabajo con las siguientes constantes:

* `vk current sheet`
* `vk workbook`

#### Ejemplo

Quiere asignar un valor al rango llamado "Total".

```4d
// llama la celda B5 Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### Ver también

[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP ALL](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Get names](#vp-get-names)<br/>[VP REMOVE NAME](#vp-remove-name)<br/>[VP Row](#vp-row)

### VP NEW DOCUMENT

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->
**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

| Parámetros | Tipo |    | Descripción                                                             |
| ---------- | ---- | -- | ----------------------------------------------------------------------- |
| vpAreaName | Text | -> | Nombre del área 4D View Pro en el formulario|<!-- END REF -->

|

#### Descripción

El comando `VP NEW DOCUMENT` <!-- REF #_method_.VP NEW DOCUMENT.Summary -->carga y muestra un nuevo documento por defecto en el objeto de área de formulario de 4D View Pro *vpAreaName*<!-- END REF -->. El nuevo documento vacío sustituye a los datos ya insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

#### Ejemplo

Quiere mostrar un documento vacío en el objeto formulario "myVPArea":

```4d
VP NEW DOCUMENT("myVPArea")
```

#### Ver también

[VP IMPORT DOCUMENT](#vp-import-document)

---

## O

### VP Object to font

<!-- REF #_method_.VP Object to font.Syntax -->
**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

| Parámetros  | Tipo   |    | Descripción                                                   |
| ----------- | ------ | -- | ------------------------------------------------------------- |
| font object | Object | -> | Objeto fuente                                                 |
| Result      | Text   | <- | Cadena de texto corto de la fuente|<!-- END REF -->

|

#### Descripción

El comando `VP Object to font` <!-- REF #_method_.VP Object to font.Summary -->devuelve una cadena de caracteres de *fontObj*<!-- END REF -->.

En *fontObj*, pase un objeto que contenga las propiedades de fuente. Se soportan las siguientes propiedades:

| Propiedad | Tipo | Descripción                                                                                                         | Valores posibles                                                                                                                                                                                                                                                                                                         | Obligatorio |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| family    | text | Define la fuente.                                                                                                   | todo tipo de familia de fuentes estándar o genérica. Ej. "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                               | Sí          |
| size      | text | Defines the size of the font. The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt" | un número con una de las siguientes unidades: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li>o uno de los siguientes:<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li>          | Sí          |
| style     | text | Estilo de fuente.                                                                                                   | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                     | No          |
| variant   | text | Especifica el tipo de letra en minúsculas.                                                                          | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                               | No          |
| weight    | text | Define el grosor de la fuente.                                                                                      | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li> | No          |

Este objeto se puede crear con el comando [VP Font to object](#vp-font-to-object).

La cadena abreviada devuelta puede asignarse a la propiedad "font" de una celda con el comando [VP SET CELL STYLE](#vp-set-cell-style), por ejemplo.

#### Ejemplo

```4d
$cellStyle:=VP Get cell style($range)

$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder

$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contiene "bolder oblique small-caps 16pt arial"
```

#### Ver también

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

## P

### VP PASTE FROM OBJECT

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R4  | Añadidos       |
</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->
**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| Parámetros | Tipo    |    | Descripción                                          |
| ---------- | ------- | -- | ---------------------------------------------------- |
| rangeObj   | Object  | -> | Objeto de rango de celda                             |
| dataObject | Object  | -> | Objeto que contiene los datos a pegar                |
| options    | Longint | -> | Especifica lo que se pega|<!-- END REF -->

|

#### Descripción

El comando `VP PASTE FROM OBJECT` <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pega el contenido, el estilo y las fórmulas almacenadas en *dataObject* al objeto *rangeObj*<!-- END REF -->.

En *rangeObj*>, pase el objeto rango de celdas donde se pegarán los valores, el formato y/o las celdas de la fórmula. Si *rangeObj* se refiere a más de una celda, sólo se utiliza la primera.

En *dataObject*, pase el objeto que contiene los datos de la celda, el formato y las fórmulas a pegar.

En el parámetro opcional *options*, puede especificar qué pegar en el rango de celdas. Valores posibles:

| Constante                                      | Descripción                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| `vk clipboard options all`                     | Pega todos los objetos de datos, incluyendo valores, formato y fórmulas. |
| `vk clipboard options formatting`              | Pega sólo el formato.                                                    |
| `vk clipboard options formulas`                | Pegar sólo las fórmulas.                                                 |
| `vk clipboard options formulas and formatting` | Pega fórmulas y formato.                                                 |
| `vk clipboard options values`                  | Pega sólo valores.                                                       |
| `vk clipboard options value and formatting`    | Pega valores y formato.                                                  |

Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](#vp-set-workbook-options).

Si *options* se refiere a una opción de pegado que no está presente en el objeto copiado (por ejemplo, fórmulas), el comando no hace nada.

#### Ejemplo

Ver el ejemplo de [VP Copy to object](#vp-copy-to-object)

#### Ver también

[VP Copy to object](#vp-copy-to-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP PRINT

<!-- REF #_method_.VP PRINT.Syntax -->
**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP PRINT` <!-- REF #_method_.VP PRINT.Summary -->abre una ventana de diálogo de impresión para imprimir *vpAreaName*<!-- END REF -->.

Pase el área 4D View Pro a imprimir en *vpAreaName*. El comando abrirá la ventana de diálogo de impresión del sistema donde se puede definir la impresora y las propiedades de la página.
> Las propiedades definidas en la ventana de diálogo de impresión son para el papel de la impresora, no son las propiedades de impresión para el área 4D View Pro. Las propiedades de impresión de las áreas 4D View Pro se definen utilizando el comando [VP SET PRINT INFO](#vp-set-print-info). Se recomienda encarecidamente que las propiedades de la impresora y del área 4D View Pro coincidan, de lo contrario el documento impreso podría no corresponder a sus expectativas.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). Si se omite, la hoja actual se utiliza por defecto. You can explicitly select the current spreadsheet or entire workbook with the following constants:

* `vk current sheet`
* `vk workbook`

> * 4D View Pro areas can only be printed with the `VP PRINT` command.
> * Commands from the 4D **Printing** language theme are not supported by `VP PRINT`.
> * Este comando está destinado a la impresión individual por parte del usuario final. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](#vp-export-document) method.

#### Ejemplo

El código siguiente:

```4d
 VP PRINT("myVPArea")
```

... abrirá una ventana de diálogo de impresión:

![](../assets/en/ViewPro/cmd_vpPrint.PNG)

#### Ver también

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP SET PRINT INFO](#vp-set-print-info)

## R

### VP RECOMPUTE FORMULAS

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->
**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| Parámetros | Tipo |    | Descripción                                                             |
| ---------- | ---- | -- | ----------------------------------------------------------------------- |
| vpAreaName | Text | -> | Nombre del área 4D View Pro en el formulario|<!-- END REF -->

|

#### Descripción

El comando `VP RECOMPUTE FORMULAS` <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->evalúa inmediatamente todas las fórmulas en *vpAreaName*<!-- END REF -->. Por defecto, 4D calcula automáticamente las fórmulas cuando se insertan, importan o exportan. `VP RECOMPUTE FORMULAS` allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the [VP FLUSH COMMANDS](#vp-flush-commands) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.
> Asegúrese de que el comando [VP SUSPEND COMPUTING](#vp-suspend-computing) no ha sido ejecutado previamente utilizando `VP RECOMPUTE FORMULAS`, de lo contrario el comando no hace nada.


#### Ejemplo

Para refrescar todas las fórmulas del libro de trabajo:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### Ver también

[VP RESUME COMPUTING](#vp-resume-computing)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP REMOVE NAME

<!-- REF #_method_.VP REMOVE NAME.Syntax -->
**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

| Parámetros | Tipo    |    | Descripción                                                           |
| ---------- | ------- | -- | --------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                          |
| name       | Text    | -> | Nombre del rango nombrado o fórmula nombrada a eliminar               |
| scope      | Integer | -> | Alcance objetivo (por defecto=hoja actual)|<!-- END REF -->

|

#### Descripción

El comando `VP REMOVE NAME` <!-- REF #_method_.VP REMOVE NAME.Summary -->elimina el rango con nombre o la fórmula con nombre pasada en el parámetro *name* en el *scope* definido<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase el rango con nombre o la fórmula con nombre que desea eliminar en *name*.

Puede definir dónde eliminar el nombre en *scope* utilizando el índice de la hoja (la numeración comienza en 0) o una de las siguientes constantes:

* `vk current sheet`
* `vk workbook`

#### Ejemplo

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```


#### Ver también

[VP Name](#vp-name)

### VP REMOVE SHEET

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->
**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                             |
| ---------- | ------- | -- | ------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro            |
| index      | Integer | -> | Índice de la hoja a eliminar|<!-- END REF -->

|

#### Ver también

[VP ADD SHEET](#vp-add-sheet)

#### Descripción

El comando `VP REMOVE SHEET` <!-- REF #_method_.VP REMOVE SHEET.Summary -->elimina la hoja con el *index* especificado del documento cargado en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *index*, pase el índice de la hoja a eliminar. Si el *index* pasado no existe, el comando no hace nada.
> La indexación comienza en 0.

#### Ejemplo

El documento tiene actualmente tres hojas:

![](../assets/en/ViewPro/vp-sheet-3.png)

Eliminar la tercera hoja:

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../assets/en/ViewPro/vp-sheet-2.png)

### VP REMOVE SPAN

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->
**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->
|
#### Descripción

El comando `VP REMOVE SPAN` <!-- REF #_method_.VP REMOVE SPAN.Summary -->elimina el span de las celdas en *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto rango de la fusión. Las celdas fusionadas en el rango se dividen en celdas individuales.

#### Ejemplo

Para eliminar todas las fusiones de celdas de este documento:

![](../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //identifica todas las celdas fusionadas
 $span:=VP Get spans(VP All("ViewProArea"))


  //eliminar las fusiones
 VP REMOVE SPAN($span)
```

Resultado:

![](../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### Ver también

[VP ADD SPAN](#vp-add-span)<br/>[VP Get spans](#vp-get-spans)

### VP REMOVE STYLESHEET

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->
**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| styleName  | Text    | -> | Nombre del estilo a eliminar                                           |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP REMOVE STYLESHEET` <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->elimina la hoja de estilo pasada en *styleName* del *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase la hoja de estilo a eliminar en el parámetro *styleName*.

Puede definir dónde eliminar el estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0) o con las siguientes constantes:

* `vk current sheet`
* `vk workbook`

#### Ejemplo

Para eliminar el objeto estilo *GreenDashDotStyle* de la hoja actual:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

#### Ver también

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)

### VP REMOVE TABLE

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R6  | Añadidos       |
</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->
**VP REMOVE TABLE** ( *vpAreaName* : Object; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área View Pro                                               |
| tableName  | Text    | -> | Nombre de la tabla a eliminar                                          |
| options    | Integer | -> | Opciones adicionales                                                   |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP REMOVE TABLE` <!-- REF #_method_.VP REMOVE TABLE.Summary -->elimina una tabla<!-- END REF --> que creó con [VP CREATE TABLE](#vp-create-table).

En *vpAreaName*, pasa el nombre del área donde se encuentra la tabla a eliminar.

En *tableName*, pase el nombre de la tabla a eliminar.

En *opciones*, puede especificar un comportamiento adicional. Los valores posibles son:

| Constante               | Valor | Descripción                                  |
| ----------------------- | ----- | -------------------------------------------- |
| vk table remove all     | 0     | Eliminar todos los estilos y datos incluidos |
| vk table remove style   | 1     | Eliminar estilo pero mantener datos          |
| vk tabla eliminar datos | 2     | Eliminar datos pero mantener el estilo       |

Los nombres de tablas se definen a nivel de la hoja. Puede especificar dónde se encuentra la tabla utilizando el parámetro opcional *hoja* (la indexación comienza en 0).

#### Ejemplo

Para eliminar la tabla "people" en la segunda hoja y mantener los datos en las celdas:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### Ver también

[VP CREATE TABLE](#vp-create-table)


### VP REMOVE TABLE COLUMNS

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->
**VP REMOVE TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| tableName  | Text    | -> | Nombre de la tabla                                                     |
| column     | Integer | -> | Índice en la tabla de la columna inicial a eliminar                    |
| count      | Text    | -> | Número de columnas a eliminar (debe ser >0)                            |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP REMOVE TABLE COLUMNS` <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->elimina una o *count* columna(s) en *tableName* especificada en el índice *column* especificado<!-- END REF -->. El comando elimina valores y estilos.

El comando elimina las columnas de la tabla *tableName*, NO de la hoja. El número total de columnas de la hoja no se ve afectado por el comando. Los datos a la derecha de la tabla (si los hay) se desplazan automáticamente a la izquierda según el número de columnas eliminadas.

Si *tableName* no existe, no pasa nada.



#### Ejemplo

Para eliminar dos columnas de la tercera columna de la tabla "dataTable":

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

#### Ver también

[VP INSERT TABLE COLUMNS](#vp-insert-table-columns)<br/>[VP REMOVE TABLE ROWS](#vp-remove-table-rows)



### VP REMOVE TABLE ROWS

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->
**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| tableName  | Text    | -> | Nombre de la tabla                                                     |
| row        | Integer | -> | Índice en la tabla de la línea inicial a eliminar                      |
| count      | Text    | -> | Número de líneas a eliminar (debe ser >0)                              |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP REMOVE TABLE ROWS` <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->elimina una o *count* línea(s) de *tableName* especificada en el índice *row* especificado<!-- END REF -->. El comando elimina valores y estilos.

Este comando elimina las líneas de la tabla *tableName*, NO de la hoja. El número total de líneas de la hoja no se ve afectado por el comando. The total number of rows of the sheet is not impacted by the command.

Si la tabla *tableName* está vinculada a un [contexto de datos](#vp-set-data-context), el comando elimina el/los elemento/s de la colección.

Si *tableName* no existe, no pasa nada.


#### Ejemplo

Para eliminar dos líneas de la tercera línea de la tabla "dataTable":

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### Ver también

[VP INSERT TABLE ROWS](#vp-insert-table-rows)<br/>[VP REMOVE TABLE COLUMNS](#vp-remove-table-columns)




### VP RESET SELECTION

<!-- REF #_method_.VP RESET SELECTION.Syntax -->
**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP RESET SELECTION.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP RESET SELECTION` <!-- REF #_method_.VP RESET SELECTION.Summary -->anula la selección de todas las celdas, con lo que no hay selección actual ni celda activa visible<!-- END REF -->.

> Una celda activa por defecto (celda A1) permanece definida para los comandos 4D View Pro.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

Desea deseleccionar todas las celdas (la celda activa y cualquier otra celda seleccionada):

```4d
VP RESET SELECTION("myVPArea")
```

#### Ver también

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)


### VP RESIZE TABLE

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP RESIZE TABLE.Syntax -->
**VP RESIZE TABLE** ( *rangeObj* : Object; *tableName* : Text )<!-- END REF -->

<!-- REF #_method_.VP RESIZE TABLE.Params -->

| Parámetros | Tipo   |    | Descripción                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| rangeObj   | Object | -> | Nuevo rango para la tabla                     |
| tableName  | Text   | -> | Nombre de la tabla|<!-- END REF -->

|

#### Descripción

El comando `VP RESIZE TABLE` <!-- REF #_method_.VP RESIZE TABLE.Summary -->cambia el tamaño de *tableName* con respecto a *rangeObj*<!-- END REF -->.

Se aplican las siguientes reglas:

- Los encabezados deben permanecer en la misma línea y el rango de la tabla resultante debe superponerse al rango de la tabla original.
- Si el conteo de líneas de la tabla redimensionada es inferior al conteo de líneas inicial, los valores dentro de las líneas o columnas recortadas se mantienen si no estaban vinculados a un [contexto de datos](#vp-set-data-context), de lo contrario se eliminan.
- Si la tabla se expande en las celdas que contienen datos:
    - si se añaden líneas, se eliminan datos,
    - si se añaden columnas, los datos se mantienen y se muestran en nuevas columnas.

Si *tableName* no existe, no pasa nada.


#### Ejemplo

Usted crea una tabla con un contexto de datos:

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../assets/en/ViewPro/table-base.png)


Quiere añadir una columna antes y después de la tabla, así como dos líneas vacías. Puede escribir:

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../assets/en/ViewPro/table-resize.png)


#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP Get table range](#vp-get-table-range)



### VP RESUME COMPUTING

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->
**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| Parámetros | Tipo |    | Descripción                                                             |
| ---------- | ---- | -- | ----------------------------------------------------------------------- |
| vpAreaName | Text | -> | Nombre del área 4D View Pro en el formulario|<!-- END REF -->

|

#### Descripción

El comando `VP RESUME COMPUTING` <!-- REF #_method_.VP RESUME COMPUTING.Summary --> reinicia el cálculo de las fórmulas en *vpAreaName*<!-- END REF -->.

El comando reactiva el servicio de cálculo de 4D View Pro. Se actualizan las fórmulas impactadas por los cambios realizados mientras los cálculos eran suspendidos, y se calculan las fórmulas añadidas después de ejecutar `VP RESUME COMPUTING`.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

> El servicio de cálculo de 4D View Pro mantiene un contador de acciones de suspensión/reanudación. Por lo tanto, cada ejecución de `VP RESUME COMPUTING` debe equilibrarse con una ejecución correspondiente del comando [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### Ejemplo

Ver el ejemplo en [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### Ver también

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP Row

<!-- REF #_method_.VP Row.Syntax -->
**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| row        | Integer | -> | Índice de la línea                           |
| rowCount   | Integer | -> | Número de líneas                             |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)  |
| Result     | Object  | <- | Rango de línea(s)|<!-- END REF -->

|

#### Descripción

El comando `VP Row` <!-- REF #_method_.VP Row.Summary -->devuelve un nuevo objeto rango que hace referencia a una o varias líneas específicas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

The *column* parameter defines the first column of the column range. Pase el índice de la línea (el conteo comienza en 0) en este parámetro. Pass the row index (counting begins at 0) in this parameter.

In the *row* parameter, you can define the row(s) of the cell range's position. *rowCount* debe ser mayor que 0. Pass the row index (counting begins at 0) in this parameter.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si no se especifica, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

Desea definir un objeto rango para la línea que se muestra a continuación (en la hoja de cálculo actual):

![](../assets/en/ViewPro/cmd_vpRow.PNG)

Puede escribir:

```4d
$row:=VP Row("ViewProArea";9) // línea 10
```

#### Ver también

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

### VP ROW AUTOFIT

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->
**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP ROW AUTOFIT` <!-- REF #_method_.VP ROW AUTOFIT.Summary -->dimensiona automáticamente la(s) línea(s) en *rangeObj* en función de su contenido<!-- END REF -->.

En *rangeObj*, pase un objeto rango que contenga un rango de líneas cuyo tamaño se gestionará automáticamente.

#### Ejemplo

Las siguientes líneas no muestran correctamente el texto:

![](../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

Resultado:

![](../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### Ver también

[VP Column autofit](#vp-column-autofit)

### VP Run offscreen area

<!-- REF #_method_.VP Run offscreen area.Syntax -->
**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

| Parámetros | Tipo   |    | Descripción                                                  |
| ---------- | ------ | -- | ------------------------------------------------------------ |
| parameters | Object | -> | Objeto que contiene los atributos del área fuera de pantalla |

|Result   |Mixed|<-|`.result` property of the `.onEvent` object, or Null if does not return a value|<!-- END REF -->

#### Descripción

El comando `VP Run offscreen area` <!-- REF #_method_.VP Run offscreen area.Summary -->crea un área fuera de la pantalla en la memoria que puede utilizarse para procesar los comandos y funciones del área 4D View Pro<!-- END REF -->.

En el objeto *parameters*, pase una de las siguientes propiedades opcionales. Estas propiedades estarán disponibles a través del comando `This` dentro del método `onEvent` y harán referencia a la instancia:

| Propiedad | Tipo | Descripción                                                                                                                   |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| area      | text | El nombre del área fuera de la pantalla. Si se omite o es null, se asigna un nombre genérico (por ejemplo, "OffscreenArea1"). |

|onEvent | object (formula)| A callback method that will be launched when the offscreen area is ready. Puede ser:<li>una función `onEvent` de una clase, o</li><li>un objeto `Formula`</li>Por defecto, el método de retrollamada en los eventos [`On VP Ready`](Events/onVpReady.md), [`On Load`](Events/onLoad.md), [`On Unload`](Events/onUnload.md), [`On End URL Loading`](Events/onEndUrlLoading.md), [`On URL Loading Error`](Events/onUrlLoadingError.md), [`On VP Range Changed`](Events/onVpRangeChanged.md), o [`On Timer`](Events/onTimer.md). The callback method can be used to access the [4D View Pro form object variable](configuring.md#4d-view-pro-form-object-variable).| |autoQuit | boolean | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](Events/onEndUrlLoading.md) or [`On URL Loading Error`](Events/onUrlLoadingError.md) events occur.If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method. | |timeout | number | Maximum time (expressed in seconds) before the area automatically closes if no event is generated. Si se fija en 0, no se aplica ninguna limitación. Default value: 60 | |result| mixed| Result of the processing (if any)| |`\&#060;customProperty&#062;` | mixed|  Any custom attribute to be available in the *onEvent* callback method. |


La siguiente propiedad es añadida automáticamente por el comando si es necesario:

| Propiedad      | Tipo    | Descripción                                                     |
| -------------- | ------- | --------------------------------------------------------------- |
| timeoutReached | boolean | Añadido con el valor true si se ha excedido el tiempo de espera |

> El área fuera de pantalla sólo está disponible durante la ejecución del comando `VP Run offscreen area`. Se destruirá automáticamente una vez finalizada la ejecución.

Los siguientes comandos se pueden utilizar en el método de retrollamada:

* `ACCEPT`
* `CANCEL`
* `SET TIMER`
* `WA Evaluate JavaScript`
* `WA EXECUTE JAVASCRIPT FUNCTION`

#### Ejemplo 1

Quiere crear un área 4D View Pro fuera de la pantalla y obtener el valor de una celda:

```4d
// Declaración de la clase cs.OffscreenArea 
Class constructor ($path : Text)
 This.filePath:=$path

// Esta función será llamada en cada evento del área offscreen 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))

       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

El método de retrollamada *OffscreenArea*:

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Ejemplo 2

Quiere cargar un documento grande fuera de la pantalla, esperar a que todos los cálculos se completen y exportarlo como PDF:


```4d
//Declaración de clase cs.OffscreenArea 
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False

Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Importación de documentos
   VP IMPORT DOCUMENTO(This.area;$largeDocument4VP)
         This.isWaiting:=True

 // Inicia un temporizador para verificar si todos los cálculos han terminado.
 // Si durante este periodo se lanza "On VP Range Changed", el temporizador se reiniciará
 // El tiempo debe ser definido de acuerdo a la configuración del ordenador.
   SET TIMER(60)

  :(FORM Event.code=On VP Range Changed)
 // Detectado el final del cálculo. Reinicia el temporizador
         If(This.isWaiting)
           SET TIMER(60)
         End if

  :(FORM Event.code=On Timer)
 // Para asegurarse de no reiniciar el temporizador si llama a otros comandos de 4D View después de este punto
         This.isWaiting:=False

 // Detener el temporizador
   SET TIMER(0)

 // Iniciar la exportación del PDF
        VP EXPORT DOCUMENTO(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))

     :(FORM Event.code=On URL Loading Error)
         CANCEL 
 End case
```

El método de retrollamada *OffscreenArea*:

```4d
$o:=cs.OffscreenArea.new()

$result:=VP Run offscreen area($o)
```

#### Ver también

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)

## S

### VP SET ACTIVE CELL

<!-- REF #_method_.VP SET ACTIVE CELL.Syntax -->
**VP SET ACTIVE CELL** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ACTIVE CELL.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango|<!-- END REF -->

|

#### Descripción

El comando `VP SET ACTIVE CELL` <!-- REF #_method_.VP SET ACTIVE CELL.Summary -->define una celda especificada como activa<!-- END REF -->.

En *rangeObj*, pase un rango que contenga una sola celda como objeto (ver [VP Cell](#vp-cell)). Si *rangeObj* no es un rango de celdas o contiene varios rangos, se utiliza la primera celda del primer rango.

#### Ejemplo

Para definir la celda de la columna D, línea 5 como celda activa:

```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

![](../assets/en/ViewPro/cmd_vpSetActiveCell.PNG)

#### Ver también

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET ALLOWED METHODS

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->
**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->


| Parámetros | Tipo   |    | Descripción                                                            |
| ---------- | ------ | -- | ---------------------------------------------------------------------- |
| methodObj  | Object | -> | Métodos permitidos en las áreas 4D View Pro|<!-- END REF -->

|
> **Compatibilidad**
> 
> Para una mayor flexibilidad, se recomienda utilizar el comando [`VP SET CUSTOM FUNCTIONS`](#vp-set-custom-functions) que permite designar fórmulas 4D que pueden ser llamadas desde las áreas 4D View Pro. En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, se ignoran las llamadas a `VP SET ALLOWED METHODS`. 4D View Pro también soporta el comando genérico de 4D `SET ALLOWED METHODS` si no se llama a `VP SET CUSTOM FUNCTIONS` ni a `VP SET ALLOWED METHODS`, sin embargo no se recomienda usar el comando genérico.


#### Descripción

El comando `VP SET ALLOWED METHODS` <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->designa los métodos proyecto que pueden ser llamados en las fórmulas 4D View Pro<!-- END REF -->. Este comando se aplica a todas las áreas 4D View Pro inicializadas después de su llamada durante la sesión. Se puede llamar varias veces en la misma sesión para inicializar diferentes configuraciones.

Por defecto, por razones de seguridad, si no se ejecuta el comando `VP SET ALLOWED METHODS`, no se permite ninguna llamada a métodos en las áreas 4D View Pro -- excepto si se ha utilizado el comando genérico `SET ALLOWED METHODS` (ver nota de compatibilidad). El uso de un método no autorizado en una fórmula muestra un error #NAME? error en el área 4D View Pro.

En el parámetro *methodObj*, pase un objeto en el que cada propiedad es el nombre de una función a definir en las áreas 4D View Pro:

| Propiedad              |            |            | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ---------- | ---------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |            | Object               | Definición de la función personalizada. El nombre de la propiedad `<functionName>` define el nombre de la función personalizada que se mostrará en las fórmulas 4D View Pro (no se permiten espacios)                                                                                                                                                                                                                                                                                                                                              |
|                        | method     |            | Text                 | (obligatorio) Nombre del método proyecto 4D existente a autorizar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                        | parameters |            | Colección de objetos | Colección de parámetros (en el orden en que están definidos en el método).                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                        |            | \[ ].name | Text                 | Nombre de un parámetro a mostrar para el `<functionName>`. **Nota**: los nombres de los parámetros no deben contener caracteres de espacio.                                                                                                                                                                                                                                                                                                                                                                                                        |
|                        |            | \[ ].type | Number               | Tipo de parámetro. Tipos soportados:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>Si se omite, por defecto el valor se envía automáticamente con su tipo, excepto los valores de fecha u hora que se envían como un objeto (ver la sección [Parámetros](formulas.md#parameters)). Si el tipo es `Is object`, el objeto tiene la misma estructura que el objeto devuelto por [`VP Obtener valor`](#vp-get-value). |
|                        | summary    |            | Text                 | Descripción de la función a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                        | minParams  |            | Number               | Número mínimo de parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                        | maxParams  |            | Number               | Número máximo de parámetros. Pasar un número superior a la longitud de los parámetros permite declarar parámetros "opcionales" con tipo por defecto                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Ejemplo

Usted quiere autorizar dos métodos en sus áreas 4D View Pro:

```4d
C_OBJECT($allowed)
$allowed:=New object //parámetro para el comando

$allowed.Hello:=New object //crea una primera función simple llamada "Hello"
$allowed.Hello.method:="My_Hello_Method" //define el método 4D
$allowed.Hello.summary:="Hello prints hello world"

$allowed.Byebye:=New object //crea una segunda función con parámetros llamada "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3

VP SET ALLOWED METHODS($allowed)
```

Una vez ejecutado este código, las funciones definidas pueden utilizarse en las fórmulas 4D View Pro:

![](../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> En las fórmulas 4D View Pro, los nombres de las funciones se muestran automáticamente en mayúsculas.

#### Ver también

[4D functions](formulas.md#4d-functions)<br/>[VP SET CUSTOM FUNCTIONS](#vp-set-custom-functions)

### VP SET BINDING PATH

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |

</details>

<!-- REF #_method_.VP SET BINDING PATH.Syntax -->
**VP SET BINDING PATH** ( *rangeObj* : Object  ; *dataContextAttribute*  : Text) <!-- END REF -->

<!-- REF #_method_.VP SET BINDING PATH.Params -->

| Parámetros           | Tipo   |    | Descripción                                                             |
| -------------------- | ------ | -- | ----------------------------------------------------------------------- |
| rangeObj             | Object | -> | Objeto rango                                                            |
| dataContextAttribute | Text   | -> | Nombre del atributo a vincular a *rangeObj* |<!-- END REF -->

|

#### Descripción

El comando `VP SET BINDING PATH` <!-- REF #_method_.VP SET BINDING PATH.Summary -->vincula un atributo del contexto de datos de una hoja a *rangeObj*<!-- END REF -->. Después de definir un contexto de datos utilizando el método [SET DATA CONTEXT](#vp-set-data-context). Cuando se carga, si el contexto de datos contiene el atributo, el valor de *dataContextAttribute* se muestra automáticamente en las celdas en *rangeObj*.

En *rangeObj*, pase un objeto que es un rango de celdas o un rango combinado de celdas.

* Si *rangeObj* es un rango con varias celdas, el comando vincula el atributo a la primera celda del rango.
* Si *rangeObj* contiene varios rangos de celdas, el comando vincula el atributo a la primera celda de cada rango.

En *dataContextAttribute*, pasE el nombre del atributo a vincular a *rangeObj*. Si *dataContextAttribute* es una cadena vacía, la función elimina el enlace actual.

> Los atributos de tipo colección no están soportados. Cuando se pasa el nombre de un atributo de la colección, el comando no hace nada.

#### Ejemplo

Define un contexto de datos y vincula el atributo `firstName` y `lastName` a las celdas:

```4d
var $p : Object

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")
```

![](../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Ver también

[VP Get binding path](#vp-get-binding-path)<br/>[VP Get data context](#vp-get-data-context)<br/>[VP SET DATA CONTEXT](#vp-get-data-context)

### VP SET BOOLEAN VALUE

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->
**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Parámetros | Tipo    |    | Descripción                                             |
| ---------- | ------- | -- | ------------------------------------------------------- |
| rangeObj   | Object  | -> | Objeto rango                                            |
| boolValue  | Boolean | -> | Valor del booleano a definir|<!-- END REF -->

|

#### Descripción

El comando `VP SET BOOLEAN VALUE` <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->asigna un valor booleano especificado a un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.


El parámetro *boolValue* permite pasar el valor booleano (**True** o **False**) que se asignará al *rangeObj*.

#### Ejemplo

```4d
//Establecer el valor de la celda como False
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Ver también

[VP SET VALUE](#vp-set-value)

### VP SET BORDER

<!-- REF #_method_.VP SET BORDER.Syntax -->
**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET BORDER.Params -->

| Parámetros     | Tipo   |    | Descripción                                                   |
| -------------- | ------ | -- | ------------------------------------------------------------- |
| rangeObj       | Object | -> | Objeto rango                                                  |
| borderStyleObj | Object | -> | Objeto que contiene el estilo de línea de borde               |
| borderPosObj   | Object | -> | Object containing border placement|<!-- END REF -->

|

#### Descripción

El comando `VP SET BORDER` <!-- REF #_method_.VP SET BORDER.Summary -->applies the border style(s) defined in *borderStyleObj* and *borderPosObj* to the range defined in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells where the border style will be applied. If the *rangeObj* contains multiple cells, borders applied with `VP SET BORDER` will be applied to the *rangeObj* as a whole (as opposed to the [`VP SET CELL STYLE`](#vp-set-cell-style) command which applies borders to each cell of the *rangeObj*). If a style sheet has already been applied, `VP SET BORDER` will override the previously applied border settings for the *rangeObj*.

The *borderStyleObj* parameter allows you to define the style for the lines of the border. El *borderStyleObj* soporta las siguientes propiedades:

| Propiedad | Tipo    | Descripción                                      | Valores posibles                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | text    | Define el color del borde. Por defecto = black.  | CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)                                                                                                                                                                                                                                           |
| style     | Integer | Define el estilo del borde. Por defecto = empty. | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |

You can define the position of the *borderStyleObj* (i.e., where the line is applied) with the *borderPosObj*:

| Propiedad       | Tipo    | Descripción                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- |
| all             | boolean | Estilo de la línea de borde aplicado a todos los bordes.                              |
| left            | boolean | Estilo de la línea de borde aplicado al borde izquierdo.                              |
| top             | boolean | Estilo de la línea de borde aplicado al borde superior.                               |
| right           | boolean | Estilo de la línea de borde aplicado al borde derecho.                                |
| bottom          | boolean | Estilo de la línea de borde aplicado al borde inferior.                               |
| outline         | boolean | Estilo de línea de borde aplicado únicamente a los bordes exteriores.                 |
| inside          | boolean | Estilo de la línea de borde aplicado únicamente a los bordes interiores.              |
| innerHorizontal | boolean | Estilo de la línea de borde aplicado únicamente a los bordes horizontales interiores. |
| innerVertical   | boolean | Estilo de la línea de borde aplicado sólo a los bordes verticales interiores.         |

#### Ejemplo 1

Este código produce un borde alrededor de todo el rango:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

![](../assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### Ejemplo 2

This code demonstrates the difference between `VP SET BORDER` and setting borders with the [`VP SET CELL STYLE`](#vp-set-cell-style) command:

```4d
// Definir los bordes con VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

// // Definir los bordes con VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

![](../assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

#### Ver también

[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET CELL STYLE

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->

**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| Parámetros | Tipo   |    | Descripción                             |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                            |
| styleObj   | Object | -> | Objeto style|<!-- END REF -->

|

#### Descripción

El comando `VP SET CELL STYLE` <!-- REF #_method_.VP SET CELL STYLE.Summary -->applies the style(s) defined in the *styleObj* to the cells defined in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells where the style will be applied. If the *rangeObj* contains multiple cells, the style is applied to each cell.
> Borders applied with `VP SET CELL STYLE` will be applied to each cell of the *rangeObj*, as opposed to the [VP SET BORDER](#vp-set-border) command which applies borders to the *rangeObj* as a whole.

The *styleObj* parameter lets you pass an object containing style settings. Puede utilizar una hoja de estilo existente o crear una nueva. If the *styleObj* contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings.

Para eliminar un estilo y volver a la configuración de estilo por defecto (si la hay), pase un valor NULL:

* atribuir el valor NULL al parámetro *styleObj*, eliminará todas las propiedades de estilo de *rangeObj*,
* si se le da a un atributo un valor NULL, se eliminará este atributo específico de *rangeObj*.

Para más información sobre los objetos estilo y las hojas de estilo, consulte el párrafo [Objetos style](configuring.md#style-objects).

#### Ejemplo

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
$style.backgroundImage:=Null //eliminar un atributo específico

VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

![](../assets/en/ViewPro/cmd_vpSetCellStyle.PNG)

#### Ver también

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get cell style](#vp-get-cell-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)

### VP SET COLUMN ATTRIBUTES

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->
**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| Parámetros  | Tipo   |    | Descripción                                                               |
| ----------- | ------ | -- | ------------------------------------------------------------------------- |
| rangeObj    | Object | -> | Objeto rango                                                              |
| propertyObj | Object | -> | Objeto que contiene las propiedades de columna|<!-- END REF -->

|

#### Descripción

El comando `VP SET COLUMN ATTRIBUTES` <!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango. Si el rango contiene tanto columnas como líneas, los atributos se aplican sólo a las columnas.

El parámetro *propertyObj* permite especificar los atributos que se aplicarán a las columnas del rango *Obj*. Estos atributos son:

| Propiedad       | Tipo    | Descripción                                                                               |
| --------------- | ------- | ----------------------------------------------------------------------------------------- |
| ancho           | number  | Ancho de columna expresado en píxeles                                                     |
| pageBreak       | boolean | True para insertar un salto de página antes de la primera columna del rango, si no, false |
| visible         | boolean | True si la columna es visible, si no, false                                               |
| redimensionable | boolean | True si la columna puede redimensionarse, si no, false                                    |
| header          | text    | Texto del encabezado de la columna                                                        |

#### Ejemplo

Para cambiar el tamaño de la segunda columna y definir el encabezado, se escribe:

```4d
C_OBJECT($column;$properties)

$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")

VP SET COLUMN ATTRIBUTES($column;$properties)
```


![](../assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### Ver también

[VP Column](#vp-column)<br/>[VP Get column attributes](#vp-get-column-attributes)<br/>[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET COLUMN COUNT

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->
**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| Parámetros  | Tipo    |    | Descripción                                                            |
| ----------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| columnCount | Integer | -> | Número de columnas                                                     |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP SET COLUMN COUNT` <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->defines the total number of columns in *vpAreaName*<!-- END REF -->.


En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase el número total de columnas en el parámetro *columnCount*. *columnCount* debe ser mayor que 0.

En el parámetro opcional *sheet*, puede designar una hoja de cálculo específica en la que se aplicará *columnCount* (el conteo comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

El siguiente código define cinco columnas en el área de 4D View Pro:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](../assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### Ver también

[VP Get column count](#vp-get-column-count)<br/>[VP Get row count](#vp-get-row-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP SET CURRENT SHEET

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->
**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                               |
| ---------- | ------- | -- | --------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro              |
| sheet      | Integer | <- | Índice de la nueva hoja actual|<!-- END REF -->

|

#### Descripción

El comando `VP SET CURRENT SHEET` <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->establece la hoja actual en *vpAreaName*<!-- END REF --> . La hoja actual es la hoja seleccionada en el documento.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja que se va a definir como hoja actual. Si el índice pasado es inferior a 0 o supera el número de hojas, el comando no hace nada.

> La indexación comienza en 0.

#### Ejemplo

La hoja actual del documento es la primera hoja:

![first-sheet-selected](../assets/en/ViewPro/vp-sheet-3-select.png)

Define la hoja actual en la tercera hoja:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../assets/en/ViewPro/vp-sheet-3-select.png)

#### Ver también

[VP Get current sheet](#vp-get-current-sheet)

### VP SET CUSTOM FUNCTIONS

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->
**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Parámetros | Tipo   |    | Descripción                                  |
| ---------- | ------ | -- | -------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |
| formulaObj | Object | -> | Objeto formula|<!-- END REF -->

|

#### Descripción

El comando `VP SET CUSTOM FUNCTIONS` <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designa las fórmulas 4D que pueden ser llamadas directamente desde las fórmulas 4D View Pro<!-- END REF -->. .

Las fórmulas especificadas por `VP SET CUSTOM FUNCTIONS` aparecen en un menú emergente cuando se introduce la primera letra de su nombre. Ver la página de [Fórmulas y Funciones](formulas.md).

> Si se llama varias veces a `VP SET CUSTOM FUNCTIONS` para la misma área, en la misma sesión, sólo se tiene en cuenta la última llamada.

Pase el nombre del área de 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro *formulaObj*, pase un objeto que contenga las fórmulas 4D que pueden ser llamadas desde las fórmulas 4D View Pro así como las propiedades adicionales. Cada propiedad `customFunction` pasada en *formulaObj* se convierte en el nombre de una función en el área 4D View Pro.

| Propiedad                |            |            | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ---------- | ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |            | Object               | Definición de la función personalizada. `<customFunction>` define el nombre de la función personalizada que se mostrará en las fórmulas 4D View Pro (no se permiten espacios)                                                                                                                                                                                                                                                                                                                                                                                   |
|                          | formula    |            | Object               | Objeto fórmula 4D (obligatorio). Ver el comando `Formula`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                          | parameters |            | Colección de objetos | Colección de parámetros (en el orden en que están definidos en la fórmula)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                          |            | \[ ].name | Text                 | Nombre del parámetro a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                          |            | \[ ].type | Number               | Tipo de parámetro. Tipos soportados:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If *type* is omitted or if the default value (-1) is passed, the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section). If *type* is `Is object`, the object has the same structure as the object returned by [VP Get value](#vp-get-value). |
|                          | summary    |            | Text                 | Descripción de la Fórmula a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                          | minParams  |            | Number               | Número mínimo de parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                          | maxParams  |            | Number               | Número máximo de parámetros. Pasar un número superior a la longitud de los *parámetros* permite declarar los parámetros "opcionales" con un tipo por defecto                                                                                                                                                                                                                                                                                                                                                                                                          |
> **ATENCIÓN**
> * En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, los métodos permitidos por el comando [VP SET ALLOWED METHODS](#vp-set-allowed-methods) (si los hay) se ignoran en el área 4D View Pro.
> * En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, las funciones basadas en los comandos `SET TABLE TITLES` y `SET FIELD TITLES` se ignoran en el área 4D View Pro.

#### Ejemplo

Desea utilizar los objetos fórmula en un área 4D View Pro para añadir números, recuperar el apellido y el género de un cliente:

```4d
Case of
    :(FORM Event.code=On Load)

       var $o : Object
       $o:=New object

// Define "addnum" function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))

// Define "ClientLastName" function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"

// Define "label" function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))

// Define "Title" function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)

       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)

End case
```

#### Ver también

[VP SET ALLOWED METHODS](#vp-set-allowed-methods)

### VP SET DATA CONTEXT

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |

</details>

<!-- REF #_method_.VP SET DATA CONTEXT.Syntax -->
**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataObj* : Object {; *options* : Object } {; *sheet* : Integer} )<br/>**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataColl* : Collection ; {*options* : Object } {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET DATA CONTEXT.Params -->

| Parámetros | Tipo    |    | Descripción                                      |
| ---------- | ------- | -- | ------------------------------------------------ |
| vpAreaName | Object  | -> | Nombre de objeto formulario área 4D View Pro     |
| dataObj    | Object  | -> | Objeto datos a cargar en el contexto de datos    |
| dataColl   | Object  | -> | Colección datos a cargar en el contexto de datos |
| options    | Object  | -> | Opciones adicionales                             |
| sheet      | Integer | -> | Índice de la hoja|<!-- END REF -->

|

#### Descripción

El comando `VP SET DATA CONTEXT` <!-- REF #_method_.VP SET DATA CONTEXT.Summary -->define el contexto de datos de una hoja<!-- END REF -->. A data context is an object or a collection bound to a worksheet, and whose contents can be used to automatically fill the sheet cells, either by using an autogenerate option or the [VP SET BINDING PATH](#vp-set-binding-path) method. On the other hand, the [VP Get data context](#vp-get-data-context) command can return a context containing user modifications.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *dataObj* o *dataColl*, pase un objeto o una colección que contenga los datos a cargar en el contexto de datos. Las imágenes se convierten en esquemas URI de datos.

To pass a time value in *dataObj* or *dataColl*, encapsulate it in an object with the following properties (see [example 4](#example-4---date-and-time-syntax)):

| Propiedad | Tipo                                     | Descripción                                             |
| --------- | ---------------------------------------- | ------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valor a poner en el contexto                            |
| time      | Real                                     | Valor de tiempo (en segundos) para poner en el contexto |

En *options*, puede pasar un objeto que especifique las opciones adicionales. Las propiedades posibles son:

| Propiedad           | Tipo   | Descripción                                                                                                                                                                                                                          |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| reset               | Object | True to reset the sheet's contents before loading the new context, False (default) otherwise.                                                                                                                                        |
| autoGenerateColumns | Object | Sólo se utiliza cuando los datos son una colección. True (default) to specify that columns must be generated automatically when the data context is bound. En este caso, se aplican las siguientes reglas: <ul><li>If *dataColl* is a collection of objects, attribute names are used as column titles (see example 2).</li><li>If *dataColl* contains subcollections of scalar values, each subcollection defines the values in a row (see example 3). La primera subcolección determina cuántas columnas se crean.</li></ul> |

In *sheet*, pass the index of the sheet that will receive the data context. Si no se pasa ningún índice, el contexto se aplica a la hoja actual.

If you export your document to an object using [VP Export to object](#vp-export-to-object), or to a 4DVP document using [VP EXPORT DOCUMENT](#vp-export-document), the `includeBindingSource` option lets you copy the contents of the current contexts as cell values in the exported object or document. Para más detalles, consulte la descripción de esos métodos.

#### Ejemplo

Pasa un objeto y vincula los datos del contexto a las celdas en la primera línea:

```4d
var $data : Object

$data:=New object

$data.firstName:="Freehafer"
$data.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $data)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

```

![](../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Ejemplo 2

Pasa una colección de objetos y genera columnas automáticamente:


```4d
var $options : Object
var $data : Collection

$data:=New collection()
$data.push(New object("firstname"; "John"; "lastname"; "Smith"))
$data.push(New object("firstname"; "Mary"; "lastname"; "Poppins"))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../assets/en/ViewPro/vp-set-data-context-2.png)

#### Ejemplo 3

The *data* passed as a parameter is a collection that contains subcollections. Cada subcolección define el contenido de una línea:

```4d
var $data : Collection
var $options : Object

$data:=New collection
$data.push(New collection(1; 2; 3; False; ""))  // 5 columns are created
$data.push(New collection)  // Second row is empty
$data.push(New collection(4; 5; Null; "hello"; "world"))  // Third row has 5 values
$data.push(New collection(6; 7; 8; 9))  // Fourth row has 4 values

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../assets/en/ViewPro/vp-set-data-context-3.png)

#### Ejemplo 4 - Sintaxis de fecha y hora

```4d
var $data : Collection
var $options : Object

$data:= New collection()

// Dates can be passed as scalar values
$data.push(New collection("Date"; Current date)) 

// Time values must be passed as object attributes
$data.push(New collection("Time"; New object("time"; 5140)))

// Date + time example
$data.push(New collection("Date + Time"; New object("value"; Current date; "time"; 5140))) 

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

Este es el resultado una vez que se generan las columnas:

![](../assets/en/ViewPro/vp-set-data-context-date-time.png)

#### Ver también

[VP SET BINDING PATH](#vp-set-binding-path)<br/>[VP Get binding path](#vp-get-binding-path)<br/>[VP Get data context](#vp-get-data-context)

### VP SET DATE TIME VALUE

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->
**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción                                  |
| ------------- | ------ | -- | -------------------------------------------- |
| rangeObj      | Object | -> | Objeto rango                                 |
| dateValue     | Fecha  | -> | Valor date a definir                         |
| timeValue     | Hora   | -> | Valor hora a definir                         |
| formatPattern | Text   | -> | Formato del valor|<!-- END REF -->

|

#### Descripción

El comando `VP SET DATE TIME VALUE` <!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->assigns a specified date and time value to a designated cell range<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *dateValue* indica un valor de fecha que se asignará a *rangeObj*.

The *timeValue* parameter specifies a time value (expressed in seconds) to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* and *timeValue* parameters. For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.

#### Ejemplo

```4d
//Definir el valor de la celda como la fecha y hora actuales
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)

//Definir el valor de la celda como 18 de diciembre
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

#### Ver también

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE VALUE](#vp-set-date-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET DATE VALUE

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->
**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

|Parámetro|Tipo||Descripción|

|---|---|---|---| |rangeObj |Object|->|Range object| |dateValue |Date|->|Date value to set| |formatPattern |Text|->|Format of value|<!-- END REF -->

#### Descripción

El comando `VP SET DATE VALUE` <!-- REF #_method_.VP SET DATE VALUE.Summary -->assigns a specified date value to a designated cell range<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) cuyo valor desea indicar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *dateValue* indica un valor de fecha que se asignará a *rangeObj*.

El parámetro opcional *formatPattern* define un modelo para el parámetro *dateValue*. Pase un formato personalizado o puede utilizar una de las siguientes constantes:

| Constante               | Descripción                             | Configuración por defecto de US |
| ----------------------- | --------------------------------------- | ------------------------------- |
| `vk pattern long date`  | Formato ISO 8601 para la fecha completa | "dddd, dd MMMM yyyy"            |
| `vk pattern month day`  | Formato ISO 8601 para el mes y el día   | "MMMM dd"                       |
| `vk pattern short date` | Formato ISO 8601 corto para la fecha    | "MM/dd/yyyy"                    |
| `vk pattern year month` | Formato ISO 8601 para el mes y el año   | "yyyy MMMM"                     |

For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.

#### Ejemplo

```4d
//Definir el valor de la celda para la fecha actual
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))

//Definir el valor de la celda para una fecha específica con un formato designado
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### Ver también

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET DEFAULT STYLE

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->
**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| Parámetros | Tipo    |    | Descripción                                                              |
| ---------- | ------- | -- | ------------------------------------------------------------------------ |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                             |
| styleObj   | Object  | -> | Objeto style                                                             |
| sheet      | Integer | -> | Índice de la hoja (por defecto = hoja actual)|<!-- END REF -->

|

#### Descripción

El comando `VP SET DEFAULT STYLE` <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the *styleObj* as the default style for a *sheet*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *styleObj* le permite pasar un objeto que contiene los parámetros de estilo. Puede utilizar una hoja de estilo existente o puede crear un nuevo estilo. Para más información, consulte el párrafo [Objetos estilo](configuring.md#style-objects).

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el estilo. Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //coleor mordado claro

VP SET DEFAULT STYLE("myDoc";$style)
```

![](../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### Ver también

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get default style](#vp-get-default-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET FIELD

<!-- REF #_method_.VP SET FIELD.Syntax -->
**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Parámetros    | Tipo    |    | Descripción                                  |
| ------------- | ------- | -- | -------------------------------------------- |
| rangeObj      | Object  | -> | Objeto rango                                 |
| campo         | Puntero | -> | Referencia al campo en la estructura virtual |
| formatPattern | Text    | -> | Formato del campo|<!-- END REF -->

|

#### Descripción

El comando `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->assigns a 4D database virtual field to a designated cell range<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) cuyo valor desea indicar. In *rangeObj*, pass a range of the cell(s) whose value you want to specify.

El parámetro *field* indica un [campo virtual](formulas.md#referencing-fields-using-the-virtual-structure) de la base 4D que se asignará al *rangeObj*. El nombre de la estructura virtual para el *field* se puede ver en la barra de fórmulas. Si alguna de las celdas de *rangeObj* tiene contenido, se sustituirá por *field*.

El parámetro opcional *formatPattern* define un modelo para el parámetro *field*. Puede pasar todo [formato personalizado](configuring.md#cell-format) válido.

#### Ejemplo

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### Ver también

[VP SET VALUE](#vp-set-value)

### VP SET FORMULA

<!-- REF #_method_.VP SET FORMULA.Syntax -->
**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

| Parámetros    | Tipo   |    | Descripción                                  |
| ------------- | ------ | -- | -------------------------------------------- |
| rangeObj      | Object | -> | Objeto rango                                 |
| formula       | Text   | -> | Fórmula o método 4D                          |
| formatPattern | Text   | -> | Formato del campo|<!-- END REF -->

|

#### Descripción

El comando `VP SET FORMULA` <!-- REF #_method_.VP SET FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify.

The *formula* parameter specifies a formula or 4D method name to be assigned to the *rangeObj*.

> If the *formula* is a string, use the period `.` as numerical separator and the comma `,` as parameter separator. If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-method) command.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *formula*.

You remove the formula in *rangeObj* by replacing it with an empty string ("").

#### Ejemplo 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Ejemplo 2

Para eliminar la fórmula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### Ejemplo 3

```4d
VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," para separar los parámetros
```

#### Ver también

[Cell format](configuring.md#cell-format)<br/>[VP Get Formula](#vp-get-formula)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET FORMULAS

<!-- REF #_method_.VP SET FORMULAS.Syntax -->
**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Parámetros  | Tipo       |    | Descripción                                      |
| ----------- | ---------- | -- | ------------------------------------------------ |
| rangeObj    | Object     | -> | Objeto de rango de celda                         |
| formulasCol | Collection | -> | Colección de fórmulas|<!-- END REF -->

|

#### Descripción

El comando `VP SET FORMULAS` <!-- REF #_method_.VP SET FORMULAS.Summary -->asigna una colección de fórmulas que comienzan en el rango de celdas especificado<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](#vp-cell)) whose formula you want to specify. Si *rangeObj* incluye varios rangos, sólo se utiliza el primer rango.

El parámetro *formulasCol* es una colección bidimensional:

* La colección de primer nivel contiene subcolecciones de fórmulas. Cada subcolección define una línea.
* Cada subcolección define los valores de las celdas para la línea. Los valores deben ser elementos textuales que contengan las fórmulas a asignar a las celdas.

> If the formula is a string, use the period `.` as numerical separator and the comma `,` as parameter separator. If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-method) command.

You remove the formulas in *rangeObj* by replacing them with an empty string ("").

#### Ejemplo 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row

VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### Ejemplo 2

Para eliminar las fórmulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection

VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```

#### Ver también

[VP Get Formulas](#vp-get-formulas)<br/>[VP GET VALUES](#vp-get-values)[VP SET FORMULA](#vp-set-formula)<br/>[VP SET VALUES](#vp-set-values)

### VP SET FROZEN PANES

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->
**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| paneObj    | Object  | -> | Objeto que contiene la información de las columnas y líneas congeladas |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                            |
<!-- END REF -->

#### Descripción

El comando `VP SET FROZEN PANES` <!-- REF #_method_.VP SET FROZEN PANES.Summary -->sets the frozen status of the columns and rows in the *paneObj* so they are always displayed in the *vpAreaName*<!-- END REF -->. . Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen.

* **Columns on the left or right**: For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. For columns on the right side of the sheet, the line is displayed on the left side of the first frozen column.
* **Rows on the top or bottom**: For rows at the top of the sheet, the line is displayed below the last frozen row. For rows at the bottom of the sheet, the line is displayed above the first frozen row.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

You can pass an object defining the columns and rows to freeze in the *paneObj* parameter. Setting the value of any of the column or row properties equal to zero resets (unfreezes) the property. Si una propiedad está definida como menor que cero, el comando no hace nada. Puede pasar:

| Propiedad | Tipo | Descripción |
| --------- | ---- | ----------- |
|           |      |             |

|columnCount | Integer | The number of frozen columns on the left of the sheet| |trailingColumnCount |Integer | The number of frozen columns on the right of the sheet |rowCount | Integer |  The number of frozen rows on the top of the sheet | |trailingRowCount | Integer |  The number of frozen rows on the bottom of the sheet|

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

You want to freeze the first three columns on the left, two columns on the right, and the first row:

```4d
C_OBJECT($panes)

$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1

VP SET FROZEN PANES("ViewProArea";$panes)
```

![](../assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### Ver también

[VP Get frozen panes](#vp-get-frozen-panes)

### VP SET NUM VALUE

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->
**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción                                  |
| ------------- | ------ | -- | -------------------------------------------- |
| rangeObj      | Object | -> | Objeto rango                                 |
| numberValue   | Number | -> | Valor del número a definir                   |
| formatPattern | Text   | -> | Formato del valor|<!-- END REF -->

|

#### Descripción

El comando `VP SET NUM VALUE` <!-- REF #_method_.VP SET NUM VALUE.Summary -->asigna un valor numérico especificado a un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

The *numberValue* parameter specifies a numeric value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *numberValue* parameter.

#### Ejemplo

```4d
//Set the cell value to 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)

//Set the cell value and format it in dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### Ver también

[Cell format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET PRINT INFO

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->
**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre del área 4D View Pro                                            |
| printInfo  | Object  | -> | Objeto que contiene los atributos de impresión                         |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP SET PRINT INFO` <!-- REF #_method_.VP SET PRINT INFO.Summary -->define los atributos a utilizar cuando se imprime el *vpAreaName*<!-- END REF -->.

Pass the name of the 4D View Pro area to print in *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

You can pass an object containing definitions for various printing attributes in the *printInfo* parameter. To view the full list of the available attributes, see [Print Attributes](configuring.md#print-attributes).

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

El siguiente código imprimirá un área 4D View Pro en un documento PDF:


```4d
var $printInfo : Object

//declare print attributes object
$printInfo:=New object

//define print attributes
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

//Añadir logo corporativo
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//imprimir documento PDF 
VP SET PRINT INFO ("ViewProArea";$printInfo)

//exportar el PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

El PDF:

![](../assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### Ver también

[4D View Pro print attributes](configuring.md#print-attributes)<br/>[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Get print info](#vp-get-print-info)<br/>[VP PRINT](#vp-print)

### VP SET ROW ATTRIBUTES

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->
**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

| Parámetros  | Tipo   |    | Descripción                                                                  |
| ----------- | ------ | -- | ---------------------------------------------------------------------------- |
| rangeObj    | Object | -> | Rango de líneas                                                              |
| propertyObj | Object | -> | Objeto que contiene las propiedades de las líneas|<!-- END REF -->

|

#### Descripción

El comando `VP SET ROW ATTRIBUTES` <!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->applies the attributes defined in the *propertyObj* to the rows in the *rangeObj*<!-- END REF -->.

In the *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the rows.

The *propertyObj* parameter lets you specify the attributes to apply to the rows in the *rangeObj*. Estos atributos son:

| Propiedad       | Tipo    | Descripción                                                                             |
| --------------- | ------- | --------------------------------------------------------------------------------------- |
| height          | number  | Altura de la línea expresada en píxeles                                                 |
| pageBreak       | boolean | True para insertar un salto de página antes de la primera línea del rango, si no, false |
| visible         | boolean | True si la fila es visible, si no, false                                                |
| redimensionable | boolean | True si la línea puede redimensionarse, si no, false                                    |
| header          | text    | Texto del encabezado de la línea                                                        |

#### Ejemplo

Quiere cambiar el tamaño de la segunda línea y definir el encabezado:

```4d
var $row; $properties : Object

$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")

VP SET ROW ATTRIBUTES($row;$properties)
```

![](../assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

#### Ver también

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP get column attributes](#vp-get-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET ROW COUNT

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->
**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Integer { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW COUNT.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| rowCount   | Integer | -> | Número de líneas                                                       |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP SET ROW COUNT` <!-- REF #_method_.VP SET ROW COUNT.Summary -->defines the total number of rows in *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pass the total number of rows in the *rowCount* parameter. *rowCount* debe ser mayor que 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *rowCount* will be applied (counting begins at 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo

El siguiente código define cinco líneas en el área 4D View Pro:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](../assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### Ver también

[VP Get column count](#vp-get-column-count)<br/>[VP get row-count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)

### VP SET SELECTION

<!-- REF #_method_.VP SET SELECTION.Syntax -->
**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET SELECTION.Params -->

| Parámetros | Tipo |  | Descripción |
| ---------- | ---- |  | ----------- |
|            |      |  |             |

|rangeObj |Object|->|Range object of cells|<!-- END REF -->

#### Descripción

El comando `VP SET SELECTION` <!-- REF #_method_.VP SET SELECTION.Summary -->defines the specified cells as the selection and the first cell as the active cell<!-- END REF -->.

En *rangeObj*, pase un objeto rango de celdas a designar como selección actual.

#### Ejemplo

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](../assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### Ver también

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP ADD SELECTION](#vp-add-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET SHEET COUNT

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->
**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- | -- | -------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |
| number     | Integer | -> | Número de hojas|<!-- END REF -->

|

#### Descripción

El comando `VP SET SHEET COUNT` <!-- REF #_method_.VP SET SHEET COUNT.Summary -->sets the number of sheets in *vpAreaName*<!-- END REF -->.

En `number`, pase un número correspondiente a cuántas hojas contendrá el documento tras la ejecución del comando.
> **Warning**: The command will delete sheets if the previous amount of sheets in your document is superior to the number passed. For example, if there are 5 sheets in your document and you set the sheet count to 3, the command will delete sheets number 4 and 5.

#### Ejemplo

El documento tiene actualmente una hoja:

![](../assets/en/ViewPro/vp-sheet-1.png)

Para definir el número de hojas en 3:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../assets/en/ViewPro/vp-sheet-3.png)

#### Ver también

[VP Get sheet count](#vp-get-sheet-count)

### VP SET SHEET NAME

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->
**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; *sheet*: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Parámetros | Tipo    |    | Descripción                                             |
| ---------- | ------- | -- | ------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro            |
| name       | Text    | -> | Nuevo nombre para la hoja                               |
| sheet      | Integer | -> | Índice de la hoja a renombrar<!-- END REF -->

|

#### Descripción

El comando `VP SET SHEET NAME` <!-- REF #_method_.VP SET SHEET NAME.Summary -->cambia el nombre de una hoja del documento cargado en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *name*, pase un nuevo nombre para la hoja.

En *sheet*, pase el índice de la hoja a renombrar.

> La indexación comienza en 0.

If no *index* is passed, the command renames the current sheet.

El nuevo nombre no puede contener los siguientes caracteres: `*, :, [, ], ?,\,/`

El comando no hace nada si:

* el nuevo nombre contiene caracteres prohibidos
* el nuevo valor del nombre está en blanco
* el nuevo nombre ya existe
* el *índice* pasado no existe

#### Ejemplo

Establezca el nombre de la tercera hoja como "Total first quarter":

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../assets/en/ViewPro/vp-sheet-index-name.png)

### VP SET SHEET OPTIONS

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->
**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

| Parámetros   | Tipo   |    | Descripción                                                            |
| ------------ | ------ | -- | ---------------------------------------------------------------------- |
| vpAreaName   | Object | -> | Nombre del área 4D View Pro                                            |
| sheetOptions | Object | -> | Opciones de la hoja a definir                                          |
| sheet        | Object | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP SET SHEET OPTIONS` <!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->allows defining various sheet options of the *vpAreaName* area<!-- END REF -->.

Pase el nombre del área de 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

Pass an object containing definitions for the options to set in the *sheetOptions* parameter. To view the full list of the available options, see the [Sheet Options](configuring.md#sheet-options) paragraph.

En el parámetro opcional *sheet*, puede designar una hoja específica (la numeración comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

* `vk current sheet`

#### Ejemplo 1

Quiere proteger todas las celdas excepto el rango C5:D10:

```4d
// Activate protection on the current sheet
var $options : Object

$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)

// mark cells C5:D10 as 'unlocked'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```

#### Ejemplo 2

You need to protect your document while your users can resize rows and columns:

```4d
var $options : Object

$options:=New object
// Activate protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Allow user to resize rows
$options.protectionOptions.allowResizeRows=True;
// Allow user to resize columns
$options.protectionOptions.allowResizeColumns=True;

// Apply protection on the current sheet
VP SET SHEET OPTIONS("ViewProArea";$options)
```

#### Ejemplo 3

You want to customize the colors of your sheet tabs, frozen lines, grid lines, selection background and selection border:

```4d
var $options : Object

$options:=New object
// Customize color of Sheet 1 tab
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"

VP SET SHEET OPTIONS("ViewProArea";$options;0)

// Customize color of Sheet 2 tab
$options.sheetTabColor:="red"

VP SET SHEET OPTIONS("ViewProArea";$options;1)

// Customize color of Sheet 3 tab
$options.sheetTabColor:="blue"

VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

Resultado:

![](../assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### Ejemplo 4

Quiere ocultar las líneas de la cuadrícula, así como los encabezados de las líneas y columnas.

```4d
var $options : Object

$options:=New object
$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False

VP SET SHEET OPTIONS("ViewProArea";$options)
```

Resultado:

![](../assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### Ver también

[4D View Pro sheet options](configuring.md#sheet-options)<br/>[VP Get sheet options](#vp-get-sheet-options)

### VP SET SHOW PRINT LINES

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->
**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Parámetros | Tipo    |    | Descripción                                                              |
| ---------- | ------- | -- | ------------------------------------------------------------------------ |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                             |
| visible    | Boolean | -> | Líneas de impresión mostradas si True (por defecto), ocultas si es False |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP SET SHOW PRINT LINES` <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

In *visible*, pass `True` to display the print lines, and `False` to hide them. `True` se pasa por defecto.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.


> La indexación comienza en 0.

La posición de las líneas de impresión de una hoja de cálculo varía según los saltos de página de dicha hoja.

#### Ejemplo

El siguiente código muestra las líneas de impresión en la segunda hoja de un documento:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../assets/en/ViewPro/vp-set-show-print-lines.png)

Con un salto de página:

![set-show-print-lines-with-page-break](../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### Ver también

[4D Get show print lines](#vp-get-show-print-lines)


### VP SET TABLE COLUMN ATTRIBUTES

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |
</details>

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Syntax -->
**VP SET TABLE COLUMN ATTRIBUTES** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer ; *attributes* : Object {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| tableName  | Text    | -> | Nombre de la tabla                                                     |
| column     | Integer | -> | Índice de la columna en la tabla                                       |
| attributes | Object  | -> | Atributo(s) a aplicar a la *column*                                    |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)|<!-- END REF -->

|

#### Descripción

El comando `VP SET TABLE ATTRIBUTES` <!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Summary -->applies the defined *attributes* to the *column* in the *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

In the *attributes* parameter, pass an object that contains the properties to set:

| Propiedad           | Tipo    | Descripción                                                                                                                                                                   |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nombre de la propiedad de la columna de la tabla en el contexto de datos.                                                                                                     |
| name                | text    | Nombre de la columna de la tabla. Debe ser único en la tabla. If this name already used by another column, it is not applied and a default name is automaticaly used.         |
| formula             | text    | Sets the formula for each column cell. See [Structured Reference Formulas in the SpreadJS documentation](https://www.grapecity.com/spreadjs/docs/features/tablegen/structref) |
| footerText          | text    | Column footer value.                                                                                                                                                          |
| footerFormula       | text    | Column footer formula.                                                                                                                                                        |
| filterButtonVisible | boolean | Sets whether the table column's filter button is displayed (default is `True` when the table is created).                                                                     |

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.
> La indexación comienza en 0.

If *tableName* is not found or if *column* is higher than the number of columns, the command does nothing.


#### Ejemplo

Usted crea una tabla con un contexto de datos:

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

    //Define the columns for the table
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../assets/en/ViewPro/table-inserta.png)

Then you want to insert a column with data from the data context and hide some filter buttons:

```4d
    //insert a column
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
    // Bind the column to the firstname field from the datacontext
$param.dataField:="firstname"
    // Change the default name of the column to "First name"
    // and hide the filter button
$param.name:="First Name"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

    // Hide the filter button of the first column
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
    New object("filterButtonVisible"; False))

```

![](../assets/en/ViewPro/table-insertb.png)


#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP Find table](#vp-find-table)<br/>[VP Get table column attributes](#vp-get-table-column-attributes)<br/>[VP RESIZE TABLE](#vp-resize-table)



### VP SET TABLE THEME

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R8  | Añadidos       |
</details>

<!-- REF #_method_.VP SET TABLE THEME.Syntax -->
**VP SET TABLE THEME** ( *vpAreaName* : Text ; *tableName* : Text ; *options* : cs.ViewPro.TableTheme )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE THEME.Params -->

| Parámetros | Tipo                                           |    | Descripción                                                 |
| ---------- | ---------------------------------------------- | -- | ----------------------------------------------------------- |
| vpAreaName | Text                                           | -> | Nombre de objeto formulario área 4D View Pro                |
| tableName  | Text                                           | -> | Nombre de la tabla                                          |
| options    | [cs.ViewPro.TableTheme](classes.md#tabletheme) | -> | Table theme properties to modify|<!-- END REF -->


|


#### Descripción

El comando `VP SET TABLE THEME` <!-- REF #_method_.VP SET TABLE THEME.Summary -->modifies the current theme of the *tableName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area and in *tableName*, the name of the table to modify.

In the *options* parameter, pass an object of the [`cs.ViewPro.TableTheme` class](classes.md#tabletheme) that contains the theme properties to modify.


#### Ejemplo 1

You want to set a predefined theme to a table:

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="medium2"
VP SET TABLE THEME("ViewProArea"; "myTable"; $param)
```

#### Ejemplo 2

You want to have this alternate column rendering:

![](../assets/en/ViewPro/col-bandering.png)

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()

// Enable the band column rendering
$param.bandColumns:=True
$param.bandRows:=False

// Create the theme object with header and column styles
$param.theme:=cs.ViewPro.TableThemeOptions.new()

var $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle

$styleHeader:=cs.ViewPro.TableStyle.new()
$styleHeader.backColor:="Gold"
$styleHeader.foreColor:="#03045E"
$param.theme.headerRowStyle:=$styleHeader

$styleColumn1:=cs.ViewPro.TableStyle.new()
$styleColumn1.backColor:="SkyBlue"
$styleColumn1.foreColor:="#03045E"
$param.theme.firstColumnStripStyle:=$styleColumn1

$styleColumn2:=cs.ViewPro.TableStyle.new()
$styleColumn2.backColor:="LightCyan"
$styleColumn2.foreColor:="#03045E"
$param.theme.secondColumnStripStyle:=$styleColumn2

VP SET TABLE THEME("ViewProArea"; "myTable"; $param)

```


#### Ver también

[VP CREATE TABLE](#vp-create-table)<br/>[VP Get table theme](#vp-get-table-theme)




### VP SET TEXT VALUE

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->
**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción                                  |
| ------------- | ------ | -- | -------------------------------------------- |
| rangeObj      | Object | -> | Objeto rango                                 |
| textValue     | Text   | -> | Valor texto a definir                        |
| formatPattern | Text   | -> | Formato del valor|<!-- END REF -->

|

#### Descripción

El comando `VP SET TEXT VALUE` <!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigns a specified text value to a designated cell range<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

The *textValue* parameter specifies a text value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *textValue* parameter.

#### Ejemplo

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### Ver también

[Cell Format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET TIME VALUE

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->
**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción                                  |
| ------------- | ------ | -- | -------------------------------------------- |
| rangeObj      | Object | -> | Objeto rango                                 |
| timeValue     | Text   | -> | Valor hora a definir                         |
| formatPattern | Text   | -> | Formato del valor|<!-- END REF -->

|

#### Descripción

El comando `VP SET TIME VALUE` <!-- REF #_method_.VP SET TIME VALUE.Summary -->assigns a specified time value to a designated cell range<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

The *timeValue* parameter specifies a time expressed in seconds to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *timeValue* parameter.

#### Ejemplo

```4d
//Definir el valor para la hora actual
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

//Definir el valor para una hora específica con un formato designado
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### Ver también

[Cell Format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET VALUE

<!-- REF #_method_.VP SET VALUE.Syntax -->
**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

| Parámetros | Tipo   |    | Descripción                                                          |
| ---------- | ------ | -- | -------------------------------------------------------------------- |
| rangeObj   | Object | -> | Objeto rango                                                         |
| valueObj   | Object | -> | Valores de la celda y opciones de formato|<!-- END REF -->

|

#### Descripción

El comando `VP SET VALUE` <!-- REF #_method_.VP SET VALUE.Summary -->asigna un valor especificado a un rango de celdas designado<!-- END REF -->.

The command allows you to use a generic code to set and format the types of values in *rangeObj*, whereas other commands, such as [`VP SET TEXT VALUE`](#vp-set-text-value) and [`VP SET NUM VALUE`](#vp-set-num-value), reduce the values to specific types.

En *rangeObj*, pase un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](#vp-cell) o [`VP Column`](#vp-column)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

The parameter *valueObj* is an object that includes properties for the value and the [format](configuring.md#cell-format) to assign to *rangeObj*. Puede contener las siguientes propiedades:

| Propiedad | Tipo                                     | Descripción                                                                                                                                                       |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valor a asignar a *rangeObj* (excepto- hora). Pase null para borrar el contenido de la celda.                                                                     |
| time      | Real                                     | Valor hora (en segundos) a asignar a *rangeObj*                                                                                                                   |
| format    | Text                                     | Patrón de propiedad valor/tiempo. For information on patterns and formatting characters, please refer to the [Cell Format](configuring.md#cell-format) paragraph. |

#### Ejemplo

```4d
//Set the cell value as False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))

//Set the cell value as 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))

//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))

//Set the cell value as Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))

VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))

//Set the cell value as current date
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))

//Set the cell value as current hour
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))

//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))

//Erase cell content
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

#### Ver también

[Cell Format](configuring.md#cell-format)<br/>[VP Get values](#vp-get-value)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET BOOLEAN VALUE](#vp-set-boolean-value)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET FIELD](#vp-set-field)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET NUM VALUE](#vp-set-num-value)<br/>[VP SET TEXT VALUE](#vp-set-text-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)

### VP SET VALUES

<!-- REF #_method_.VP SET VALUES.Syntax -->
**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

| Parámetros | Tipo       |    | Descripción                                     |
| ---------- | ---------- | -- | ----------------------------------------------- |
| rangeObj   | Object     | -> | Objeto rango                                    |
| valuesCol  | Collection | -> | Colección de valores|<!-- END REF -->

|

#### Descripción

El comando `VP SET VALUES` <!-- REF #_method_.VP SET VALUES.Summary -->assigns a collection of values starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range for the cell (created with [`VP Cell`](#vp-cell)) whose value you want to specify. The cell defined in the *rangeObj* is used to determine the starting point.
> * If *rangeObj* is not a cell range, only the first cell of the range is used.
> * If *rangeObj* includes multiple ranges, only the first cell of the first range is used.

El parámetro *valuesCol* es bidimensional:


* La colección de primer nivel contiene subcolecciones de valores. Cada subcolección define una línea. Pasa una colección vacía para saltar una línea.
* Cada subcolección define los valores de las celdas para la línea. Los valores pueden ser enteros, reales, booleanos, texto, fecha, null u objeto. Si el valor es un objeto, puede tener las siguientes propiedades:

 | Propiedad | Tipo                                     | Descripción                        |
 | --------- | ---------------------------------------- | ---------------------------------- |
 | value     | Integer, Real, Boolean, Text, Date, Null | Valor de la celda (excepto - time) |
 | time      | Real                                     | Valor hora (en segundos)           |

#### Ejemplo

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //first row, 4 values
$param.push(New collection) //second row, untouched
$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values
$param.push(New collection(6;7;8;9)) // fourth row, 4 values
$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value

VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../assets/en/ViewPro/cmd_vpSetValues.PNG)

#### Ver también

[VP Get formulas](configuring.md#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP Get Values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET WORKBOOK OPTIONS

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->
**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF -->

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->
| Parámetros | Tipo   |    | Descripción                                                                                |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------ |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro                                               |
| optionObj  | Object | -> | Objeto que contiene las opciones del libro de trabajo a definir|<!-- END REF -->

|

#### Descripción

`VP SET WORKBOOK OPTIONS` <!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->
sets the workbook options in *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

In *optionObj*, pass the workbook options to apply to *vpAreaName*.

Si *optionObj* está vacío, el comando no hace nada.

Las opciones modificadas del libro de trabajo se guardan con el documento.

En la siguiente tabla se listan las opciones de libros de trabajo disponibles:

| Propiedad                             | Tipo                    | Descripción                                                                                                                                                                                                                                            |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowUserDragMerge                    | boolean                 | The drag merge operation is allowed (select cells and drag the selection to merge cells)                                                                                                                                                               |
| allowAutoCreateHyperlink              | boolean                 | Permite la creación automática de hipervínculos en la hoja de cálculo.                                                                                                                                                                                 |
| allowContextMenu                      | boolean                 | Se puede abrir el menú contextual integrado.                                                                                                                                                                                                           |
| allowCopyPasteExcelStyle              | boolean                 | Los estilos de una hoja de cálculo pueden copiarse y pegarse en Excel, y viceversa.                                                                                                                                                                    |
| allowDynamicArray                     | boolean                 | Permite arrays dinámicos en hojas de cálculo                                                                                                                                                                                                           |
| allowExtendPasteRange                 | boolean                 | Extends the pasted range if the pasted range is not enough for the pasted data                                                                                                                                                                         |
| allowSheetReorder                     | boolean                 | Se permite reordenar la hoja                                                                                                                                                                                                                           |
| allowUndo                             | boolean                 | Deshacer ediciones está permitido.                                                                                                                                                                                                                     |
| allowUserDeselect                     | boolean                 | Se permite desmarcar celdas específicas de una selección.                                                                                                                                                                                              |
| allowUserDragDrop                     | boolean                 | Se permite arrastrar y soltar los datos del rango                                                                                                                                                                                                      |
| allowUserDragFill                     | boolean                 | Se permite el relleno por arrastre                                                                                                                                                                                                                     |
| allowUserEditFormula                  | boolean                 | Las fórmulas pueden introducirse en las celdas                                                                                                                                                                                                         |
| allowUserResize                       | boolean                 | Columnas y filas redimensionables                                                                                                                                                                                                                      |
| allowUserZoom                         | boolean                 | Se permite hacer zoom (ctrl + rueda del ratón)                                                                                                                                                                                                         |
| autoFitType                           | number                  | El contenido se formatea para que se ajuste en las celdas, o en las celdas y los encabezados. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk auto fit type cell </td><td>0</td><td> El contenido se ajusta automáticamente a las celdas</td></tr><tr><td> vk auto fit type cell with header </td><td>1</td><td> El contenido se autoajusta a las celdas y encabezados</td></tr></table>                                                                                                           |
| backColor                             | string                  | A color string used to represent the background color of the area, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5". The initial backgroundcolor is hidden when a backgroundImage is set.                                                          |
| backgroundImage                       | string / picture / file | Imagen de fondo para el área.                                                                                                                                                                                                                          |
| backgroundImageLayout                 | number                  | Cómo se muestra la imagen de fondo. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk image layout center </td><td>1</td><td> En el centro del área.</td></tr><tr><td> vk image layout none </td><td>3</td><td> En la esquina superior izquierda del área con su tamaño original.</td></tr><tr><td> vk image layout stretch </td><td>0</td><td> Llena el área.</td></tr><tr><td> vk image layout zoom </td><td>2</td><td> Se muestra con su relación de aspecto original.</td></tr></table>                                                                                                                                                                    |
| calcOnDemand                          | boolean                 | Las fórmulas se calculan sólo cuando se piden.                                                                                                                                                                                                         |
| columnResizeMode                      | number                  | Resize mode for columns. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk resize mode normal </td><td>0</td><td> Utilizar el modo de redimensionamiento normal (es decir, las columnas restantes se ven afectadas)</td></tr><tr><td> vk resize mode split </td><td>1</td><td> Usar modo dividido (es decir, las columnas restantes no se ven afectadas)</td></tr></table>                                                                                                                                                                               |
| copyPasteHeaderOptions                | number                  | Encabezados para incluir cuando se copian o pegan datos. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk copy paste header options all headers</td><td>3</td><td> Includes selected headers when data is copied; overwrites selected headers when data is pasted.</td></tr><tr><td> vk copy paste header options column headers </td><td>2</td><td> Includes selected column headers when data is copied; overwrites selected column headers when data is pasted.</td></tr><tr><td> vk copy paste header options no headers</td><td>0</td><td> Column and row headers are not included when data is copied; does not overwrite selected column or row headers when data is pasted.</td></tr><tr><td> vk copy paste header options row headers</td><td>1</td><td>  Includes selected row headers when data is copied; overwrites selected row headers when data is pasted.</td></tr></table>                                                                                                                                               |
| customList                            | collection              | The list for users to customize drag fill, prioritize matching this list in each fill. Cada elemento de colección es una colección de cadenas. See on [GrapeCity's website](https://www.grapecity.com/spreadjs/docs/v13/online/AutoFillLists.html#b).  |
| cutCopyIndicatorBorderColor           | string                  | Border color for the indicator displayed when the user cuts or copies the selection.                                                                                                                                                                   |
| cutCopyIndicatorVisible               | boolean                 | Muestra un indicador al copiar o cortar el elemento seleccionado.                                                                                                                                                                                      |
| defaultDragFillType                   | number                  | The default drag fill type. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk auto fill type auto </td><td>5</td><td> Llena automáticamente las celdas. </td></tr><tr><td> vk auto fill type clear values </td><td>4</td><td> Borra los valores de las celdas.</td></tr><tr><td> vk auto fill type copycells </td><td>0</td><td> Fills cells with all data objects, including values, formatting, and formulas.</td></tr><tr><td> vk auto fill type fill formatting only </td><td>2</td><td> Rellena las celdas sólo con formato.</td></tr><tr><td> vk auto fill type fill series </td><td>1</td><td> Llena las celdas con series. </td></tr><tr><td> vk auto fill type fill without formatting </td><td>3</td><td> Llena las celdas con valores y no con formato. </td></tr></table>                                                                                                                                                                            |
| enableAccessibility                   | boolean                 | El soporte de accesibilidad está activado en la hoja de cálculo.                                                                                                                                                                                       |
| enableFormulaTextbox                  | boolean                 | The formula text box is enabled.                                                                                                                                                                                                                       |
| grayAreaBackColor                     | string                  | A color string used to represent the background color of the gray area , such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.                                                                                                              |
| highlightInvalidData                  | boolean                 | Los datos inválidos son resaltados.                                                                                                                                                                                                                    |
| iterativeCalculation                  | boolean                 | Activa el cálculo iterativo. See on [Grapecity's website](https://www.grapecity.com/spreadjs/docs/v14/online/calculating-iterative.html).                                                                                                              |
| iterativeCalculationMaximumChange     | numeric                 | Maximum amount of change between two calculation values.                                                                                                                                                                                               |
| iterativeCalculationMaximumIterations | numeric                 | Número de veces que la fórmula debe recalcular.                                                                                                                                                                                                        |
| newTabVisible                         | boolean                 | Mostrar una pestaña especial para permitir a los usuarios insertar nuevas hojas.                                                                                                                                                                       |
| numbersFitMode                        | number                  | Changes display mode when date/number data width is longer than column width. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk numbers fit mode mask</td><td>0</td><td> Reemplaza el contenido de datos con "###" y muestra el consejo</td></tr><tr><td> vk numbers fit mode overflow </td><td>1</td><td> Mostrar contenido de datos como una cadena. Si la siguiente celda está vacía, se desborda el contenido.</td></tr></table>                                                                                                                          |
| pasteSkipInvisibleRange               | boolean                 | Pegar u omitir pegar datos en rangos invisibles: <ul><li>False (por defecto): pegar datos</li><li>True: omitir el pegado en rangos invisibles</li></ul>See [Grapecity's docs](https://www.grapecity.com/spreadjs/docs/v14/online/paste-skip-data-invisible-range.html) for more information on invisible ranges.                   |
| referenceStyle                        | number                  | Style for cell and range references in cell formulas. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk reference style A1 </td><td>0</td><td> Utilizar el estilo A1.</td></tr><tr><td> vk reference style R1C1 </td><td>1</td><td> Utilizar el estilo R1C1</td></tr></table>                                                                                                                                                  |
| resizeZeroIndicator                   | number                  | Política de dibujo cuando las líneas o columnas se redimensionan a 0. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk resize zero indicator default </td><td>0</td><td> Uses the current drawing policy when the row or column is resized to zero.</td></tr><tr><td> vk resize zero indicator enhanced </td><td>1</td><td> Dibuja dos líneas cortas cuando la línea o la columna se redimensiona a cero.</td></tr></table>                                                                                                                                  |
| rowResizeMode                         | number                  | La forma en que se redimensionan las líneas. Los valores disponibles son los mismos qe columnResizeMode                                                                                                                                                |
| scrollbarAppearance                   | number                  | Apariencia de la barra de desplazamiento. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk scrollbar appearance mobile</td><td>1</td><td> Apariencia de la barra de desplazamiento móvil.</td></tr><tr><td> vk scrollbar appearance skin (por defecto)</td><td>0</td><td> Aspecto de la barra de desplazamiento clásica similar a la de Excel.</td></tr></table>                                                                                                                                                              |
| scrollbarMaxAlign                     | boolean                 | La barra de desplazamiento se alinea con la última línea y columna de la hoja activa.                                                                                                                                                                  |
| scrollbarShowMax                      | boolean                 | The displayed scroll bars are based on the entire number of columns and rows in the sheet.                                                                                                                                                             |
| scrollByPixel                         | boolean                 | Activar desplazamiento de precisión por píxel.                                                                                                                                                                                                         |
| scrollIgnoreHidden                    | boolean                 | La barra de desplazamiento ignora líneas o columnas ocultas.                                                                                                                                                                                           |
| scrollPixel                           | integer                 | Decides scrolling by that number of pixels at a time when scrollByPixel is true. The final scrolling pixels are the result of `scrolling delta * scrollPixel`. For example: scrolling delta is 3, scrollPixel is 5, the final scrolling pixels are 15. |
| showDragDropTip                       | boolean                 | Display the drag-drop tip.                                                                                                                                                                                                                             |
| showDragFillSmartTag                  | boolean                 | Display the drag fill dialog.                                                                                                                                                                                                                          |
| showDragFillTip                       | boolean                 | Display the drag-fill tip.                                                                                                                                                                                                                             |
| showHorizontalScrollbar               | boolean                 | Mostrar la barra de desplazamiento horizontal.                                                                                                                                                                                                         |
| showResizeTip                         | number                  | Cómo mostrar el tip de redimensionamiento. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk show resize tip both </td><td>3</td><td> Se muestran consejos de redimensionamiento horizontal y vertical.</td></tr><tr><td> vk show resize tip column </td><td>1</td><td> Only the horizontal resize tip is displayed.</td></tr><tr><td> vk show resize tip none </td><td>0</td><td> No resize tip is displayed.</td></tr><tr><td> vk show resize tip row </td><td>2</td><td> Only the vertical resize tip is displayed.</td></tr></table>                                                                                                                                                             |
| showScrollTip                         | number                  | How to display the scroll tip. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk show scroll tip both </td><td>3</td><td> Se muestran las extremidades horizontales y verticales.</td></tr><tr><td> vk show scroll tip horizontal </td><td>1</td><td> Only the horizontal scroll tip is displayed.</td></tr><tr><td> vk show scroll tip none </td><td> No scroll tip is displayed.</td></tr><tr><td> vk show scroll tip vertical </td><td>2</td><td> Only the vertical scroll tip is displayed.</td></tr></table>                                                                                                                                                                         |
| showVerticalScrollbar                 | boolean                 | Mostrar la barra de desplazamiento vertical.                                                                                                                                                                                                           |
| tabEditable                           | boolean                 | The sheet tab strip can be edited.                                                                                                                                                                                                                     |
| tabNavigationVisible                  | boolean                 | Mostrar la navegación por pestañas.                                                                                                                                                                                                                    |
| tabStripPosition                      | number                  | Position of the tab strip. Valores disponibles: <table><tr><th>Constante</th><th>Valor</th><th>Descripción</th></tr><tr><td> vk tab strip position bottom </td><td>0</td><td> Tab strip position is relative to the bottom of the workbook.</td></tr><tr><td> vk tab strip position left </td><td>2</td><td> La posición de la tabulación es relativa a la izquierda del libro de trabajo.</td></tr><tr><td> vk tab strip position right </td><td>3</td><td> Tab strip position is relative to the right of the workbook.</td></tr><tr><td> vk tab strip position top </td><td>1</td><td> Tab strip position is relative to the top of the workbook.</td></tr></table>                                                                                                                                                                             |
| tabStripRatio                         | number                  | Percentage value (0.x) that specifies how much of the horizontal space will be allocated to the tab strip. The rest of the horizontal area (1 - 0.x) will allocated to the horizontal scrollbar.                                                       |
| tabStripVisible                       | boolean                 | Display the sheet tab strip.                                                                                                                                                                                                                           |
| tabStripWidth                         | number                  | Width of the tab strip when position is left or right. Por defecto y el mínimo es 80.                                                                                                                                                                  |
| useTouchLayout                        | boolean                 | Si se va a utilizar el diseño táctil para presentar el componente Spread.                                                                                                                                                                              |

#### Ejemplo

Para definir la opción allowExtendpasteRange en "ViewProArea":

```4d
var $workbookOptions : Object

$workbookOptions:= New Object
$workbookOptions.allowExtendPasteRange:=True

VP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)
```

#### Ver también

[VP Get workbook options](#vp-get-workbook-options)

### VP SHOW CELL

<!-- REF #_method_.VP SHOW CELL.Syntax -->
**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SHOW CELL.Params -->

| Parámetros | Tipo   |    | Descripción  |
| ---------- | ------ | -- | ------------ |
| rangeObj   | Object | -> | Objeto rango |

|vPos  |Integer|->|Vertical view position of cell or row| |hPos  |Integer|->|Horizontal view position of cell or row|<!-- END REF -->

#### Descripción

El comando `VP SHOW CELL` <!-- REF #_method_.VP SHOW CELL.Summary -->vertically and horizontally repositions the view of the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells as an object to designate the cells to be viewed. The view of the *rangeObj* will be positioned vertically or horizontally (i.e., where *rangeObj* appears) based on the *vPos* and *hPos* parameters. The *vPos* parameter defines the desired vertical position to display the *rangeObj*, and the *hPos* parameter defines the desired horizontal position to display the *rangeObj*.

Los siguientes selectores están disponibles:

| Selector              | Descripción                                                                                                                                                                                                                                  | Disponible con *vPos* | Disponible con *hPos* |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------- |
| `vk position bottom`  | Alineación vertical a la parte inferior de la celda o de la línea.                                                                                                                                                                           | X                     |                       |
| `vk position center`  | Alineación al centro. La alineación se aplicará al límite de la celda, línea o columna según la posición de la vista indicada:<li>Posición vertical de la vista - celda o línea</li><li>Posición horizontal de la vista - celda o columna</li>                                                         | X                     | X                     |
| `vk position left`    | Alineación horizontal a la izquierda de la celda o columna                                                                                                                                                                                   |                       | X                     |
| `vk position nearest` | Alineación al límite más cercano (arriba, abajo, izquierda, derecha, centro). La alineación se aplicará al límite de la celda, línea o columna según la posición de la vista indicada:<li>Posición vertical de la vista (arriba, centro, abajo) - celda o línea </li><li>Posición horizontal de la vista (izquierda, centro, derecha) - celda o columna</li> | X                     | X                     |
| `vk position right`   | Alineación horizontal a la derecha de la celda o de la columna                                                                                                                                                                               |                       | X                     |
| `vk position top`     | Alineación vertical a la parte superior de la celda o de la línea                                                                                                                                                                            | X                     |                       |
> Este comando sólo es eficaz si es posible reposicionar la vista. For example, if the *rangeObj* is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if *rangeObj* is in cell C3 and the view is repositioned to the center or the bottom right. La vista permanece inalterada.

#### Ejemplo

You want to view the cell in column AY, row 51 in the center of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
 // Mover la vista para mostrar la celda
VP SHOW CELL($displayCell;vk position center;vk position center)
```

Resultado:

![](../assets/en/ViewPro/cmd_vpShowCell1.PNG)

The same code with the vertical and horizontal selectors changed to show the same cell positioned at the top right of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // Mover la vista para mostrar la celda
VP SHOW CELL($displayCell;vk position top;vk position right)
```

Resultado:

![](../assets/en/ViewPro/cmd_vpShowCell2.PNG)

#### Ver también

[VP ADD CELL](#vp-add-cell)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)

### VP SUSPEND COMPUTING

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->
**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| Parámetros | Tipo |    | Descripción                                                             |
| ---------- | ---- | -- | ----------------------------------------------------------------------- |
| vpAreaName | Text | -> | Nombre del área 4D View Pro en el formulario|<!-- END REF -->

|

#### Descripción

El comando `VP SUSPEND COMPUTING` <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->detiene el cálculo de todas las fórmulas en *vpAreaName*<!-- END REF -->. This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes.

El comando pausa los cálculos en 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after `VP SUSPEND COMPUTING` command  is executed are not calculated.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.
> El servicio de cálculo de 4D View Pro mantiene un contador de acciones de suspensión/reanudación. Therefore, each execution of `VP SUSPEND COMPUTING` command  must be balanced by a corresponding execution of the `VP RESUME COMPUTING` command. Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed.

#### Ejemplo

You've added two buttons to the form so that the user can suspend/resume calculations:

![](../assets/en/ViewPro/cmd_vpStopCalculations.PNG)

El código del botón Suspend Computing:

```4d
 //pause calculations while users enter information
 If(FORM Event.code=On Clicked)

    VP SUSPEND COMPUTING("ViewProArea")

 End if
```

```4d
If(FORM Event.code=On Clicked)

    VP RESUME COMPUTING("ViewProArea")

End if
```

#### Ver también

[VP RECOMUTE FORMULAS](#vp-recompute-formulas)<br/>[VP RESUME COMPUTING](#vp-resume-computing)


