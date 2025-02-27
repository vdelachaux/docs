---
id: control-flow
title: Condições e loops
---

Independentemente da simplicidade ou da complexidade de um método, sempre utilizará um ou vários dos três tipos de estruturas de programação. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the `If... End if` structure, which directs program flow along one of two paths. The other branching structure is the `Case of... End case` structure, which directs program flow to one of many paths.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:
  - `While... End while`
  - `Repeat... Until`
  - `For... End for`
  - `For each...End for each`<br/> The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections.

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.
