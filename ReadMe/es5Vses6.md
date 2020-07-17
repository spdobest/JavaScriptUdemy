# ES5 Vs ES6
- add images below
- var_let_const.png
- es5VsEs6.png

## Understanding Hoisting
- Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. 
- However, only the actual declarations are hoisted. ... After hoisting, bar and baz are actually declared before the alert statement, albeit with undefined values.
- here is the example
- ```
    console.log(myName);
    printMyName('Sibaprasad');

    var myName = 'Sibaprasad'
    function printMyName(name){
        sonsole.log(name);
    }
    ```
## Strct mode 
The "use strict" directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.    
## How code is parsed and compiled
NOTE : Hence **Just in Time** compilation: The compiler starts compiling + executing the compiled code 
whilst the code is being read/executed.
- Add image javascript_compiler_interpreter.png