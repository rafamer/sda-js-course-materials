# JS dobre praktyki - przykłady

## Dodawaj  `'use strict';` do globalnego scope'a
 ```js
 'use strict';
 x = 3 // Error 'x' in not defined
 ```

## Unikaj globalnych zmiennych jeśli musisz wystawić coś na zewnątrz używaj namespaców i korzystaj z module pattern
```js
var MyApp = MyApp || {};

MyApp.MyModule = (function() {
    // private stuff
    var a, b, c;
    
    function doSomething() {}
    function doSomethingElse() {}
    function doSomethingDifferent() {}
    
    // expose to public
    retuen {
       doSomethingDifferent: doSomethingDifferent; 
    }
})()

MyApp.MyModule.doSomethingDifferent();
```

## Wewnątrz funkcji korzystaj tylko z lokalnych zmiennych zadeklarowanych na początku funkcji
```js
var externalVal = 4;

function doSomething(someArg) {
    var a, b, c;
    
    // some logic
}

doSomething(externalVal);   
```

## Jeśli nie będziesz reużywać danego kodu opakuj go w anonimową funkcję typu IIFE
```js
(function(win, jQ, someArg) {
    var a, b, b;
    
    // some logic
}(window, $, loremIpsum)
```

## Unikaj `new String()`, `new Array()`, `new Boolean()`, `new Object()` itp
```js
'x' !== new String('x');
```

## Pamiętaj o `object.hasOwnProperty()` wewnątrz `for in` 
```js
var obj = {/* some keys inside */}

for (prop in obj) {
    if (obj.hasOwnProperty(prop) {
        // do something
    }
```
