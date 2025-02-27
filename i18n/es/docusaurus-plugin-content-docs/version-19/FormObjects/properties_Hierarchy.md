---
id: propertiesHierarchy
title: Jerarquía
---

## List box jerárquico

`List box de tipo array`

This property specifies that the list box must be displayed in hierarchical form. En el formulario JSON, esta funcionalidad se activa [cuando el valor de la propiedad *dataSource* es un array](properties_Object.md#hierarchical-list-box), es decir, una colección.

Las opciones adicionales (**Variable 1...10**) están disponibles cuando se selecciona la opción *List box jerárquico*, correspondiente a cada elemento del array *dataSource* a utilizar como columna de ruptura. Cada vez que se introduce un valor en un campo, se añade una nueva línea. Se pueden especificar hasta 10 variables. These variables set the hierarchical levels to be displayed in the first column.

Ver [List box jerárquicos](listbox_overview.md#hierarchical-list-boxes)

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                        |
| ---------- | -------------- | ------------------------------------------------------- |
| datasource | array cadena   | Colección de nombres de arrays que definen la jerarquía |

#### Objetos soportados

[List Box](listbox_overview.md)
