---
title: Rozdíl mezi let, const a var v Javascriptu
description: Základ, který by měl každý začátečník znát při psaní proměných.
img: img/blog/javascript.jpg
alt: my first blog post
---

Základ, který by měl každý začátečník znát při psaní proměných.
Pokud vytvoříme proměnnou let nebo const uvnitř bloku, tak následně při zavolání proměnné mimo blok, bude javascript vytvořet chybu. To ale neplatí pro var, která je tzv. globální.

 ```javascript
  
 if(true) {
  var globalni = "Tohle je globální proměnná"
  let tohleNeniGlobalni = "Tohle není globální proměnná"
  const tohleNeniTakeGlobalni = "Tohle není také globální proměnná"
}

console.log(globalni) //'Tohle je globální proměnná'

console.log(tohleNeniGlobalni) //ReferenceError: tohleNeniGlobalni is not defined

console.log(tohleNeniTakeGlobalni) //ReferenceError: tohleNeniTakeGlobalni is not defined

```


Je také rozdíl u přiřazování hodnot. Const nelze nikdy přepsat novou hodnotou.


```javascript

var mohuPrepsat = ""
let mohuTakePrepsat = ""
const nemohuPrepsat = ""

  
mohuPrepsat = "Přepíšu"
mohuTakePrepsat = "Přepíšu také"
nemohuPrepsat = "Nepřepíšu" //TypeError: Assignment to constant variable.
  
console.log(mohuPrepsat, // "Přepíšu"
            mohuTakePrepsat, // "Přepíšu také"
            nemohuPrepsat ) // ""

```
