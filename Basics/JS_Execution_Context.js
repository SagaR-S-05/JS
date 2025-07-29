/*
    In JavaScript, an execution context is the environment in which JavaScript code is evaluated and executed. 
    It defines what data is accessible (variables, functions, objects) and how the code should behave during execution.
    ### 🔹 Types of Execution Contexts

    #### ✅ Global Execution Context (GEC)

    * Created when your JS code first runs.
    * It creates the global `this` and sets up the **global object** (`window` in browsers, `global` in Node).
    * Only one global context exists per program.

    #### ✅ Function Execution Context (FEC)

    * Created each time a function is invoked.
    * Each has its own **variable environment**, **scope chain**, and value of `this`.

    #### ✅ Eval Execution Context *(rare)*

    * Created when code is executed inside `eval()` function.

    ---

    ### 🔹 Phases of Execution Context

    Each execution context goes through **two phases**:

    #### 1. **Creation Phase (a.k.a. Memory Allocation Phase)**

    * Sets up the **scope**, `this` keyword, and hoists variables and functions.
    * Memory is allocated for variables/functions, but values are not assigned yet (variables get `undefined`).

    #### 2. **Execution Phase**

    * The code is executed line by line.
    * Variable values are assigned and functions are invoked.

    ---

    ### 🔹 What's Inside an Execution Context?

    Each execution context contains:

    * **Variable Environment**: Memory space for variables and functions.
    * **Lexical Environment**: Scope structure (what variables are accessible).
    * **`this` Binding**: Value of `this` based on how the function is called.
    * **Scope Chain**: For resolving variables in outer contexts.

    ---

    ### 🔹 Execution Context Stack (Call Stack)

    JavaScript uses a **call stack** to keep track of execution contexts:

    ```
    | Function C Context |
    | Function B Context |
    | Function A Context |
    | Global Context     |
    ```

    * When a function is called, a new execution context is **pushed** onto the stack.
    * When it returns, that context is **popped** off.

    ---

    ### 🔸 Example:

    ```js
    var x = 10;

    function foo() {
    var y = 20;
    console.log(x + y);
    }

    foo();
    ```

    * **Global Execution Context** is created:

    * Allocates memory for `x`, `foo`.
    * `x = 10`, `foo = function`.

    * `foo()` is invoked:

    * A **Function Execution Context** is created.
    * `y = 20`, then logs `10 + 20`.

/*
