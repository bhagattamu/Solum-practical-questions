# CargoCraft Fleet

In the futuristic world of Aerion, the CargoCraft company operates a fleet of transport
vehicles designed to carry supplies between colonies.
There are two types of crafts in the fleet:
• Type A crafts have 4 propulsion units,
• Type B crafts have 6 propulsion units.
You receive a report that the fleet’s crafts together have n propulsion units in total.
However, the report doesn’t specify how many crafts of each type there are.

## Logic
- For maximum number of crafts -> n/4
- For minimum number of crafts -> n/6. But using 6 still allow remainder to be made 4. So if remainder is divisible by 4 then add 1 to the minimum crafts, Else reduce minimum number of craft and add 6 to the remainder and again check if it is divisible by 4, repeat until divisible by 4. Add remainder/4 to minimum craft.
Example scenario: 14
n/6 => 2
remainder = 2
// not divisible by 4
so n = 1, remainder = 6 + 2 = 8
Now, remainder is divisible by 4 so, n = n + remainder / 4 i.e. n = 1 + 8/4 = 1 + 2 = 3

## To run file
- Java should be installed in the system
- use javac to compile file
- use java to run class file

```
// Compile .java file to .class file
javac TaskB.java
// run .class file
java TaskB
```