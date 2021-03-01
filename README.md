# overload.js

![logo](./overloadjs.png)

Overload.js is a micro-library here to make overloading functions incredibly easy.

Contrary to other overloading libraries out there, Overload.js does not use method chaining to give you overloading.

Instead, Overload.js is a wrapper function that takes only one argument: the overloads.

Here is an example using Overload.js:

```js
const OverloadJS = require("@aeroware/overload.js");

const overloadedFunction = OverloadJS({
    ["string number? object"](str, num) {
        console.log("callback 1 executed");
    },
    ["string boolean number?"](str, bool, num) {
        console.log("callback 2 executed");
    },
});

overloadedFunction("hello world", 420, {});  // => "callback 1 executed"
overloadedFunction("hello world", true, 69); // => "callback 2 executed"
overloadedFunction("hello world", {});       // !! No overload matches this call.
```

Overloads follow a simple syntax, and there are currently on 4 supported types, all of which can be nullable:

-   `string`
-   `number`
-   `boolean`
-   `object`

To make a parameter nullable (and undefined-able), simply place a `?` after the parameter:

-   `string?`
-   `number?`
-   `boolean?`
-   `object?`

If you have any trouble, you can join us at [Discord](https://www.discord.gg/Vs4rfsfd4q) and ask!
