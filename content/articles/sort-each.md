---
title: dasdasd
description: asdsadi psaní proměných.
img: img/blog/javascript.jpg
alt: my first blog post
---

Základ, který by měl každý začátečník znát při psaní proměných.
Pokud vytvoříme proměnnou let nebo const uvnitř bloku, tak následně při zavolání proměnné mimo blok, bude javascript vytvářet chybu. To ale neplatí pro var, která je tzv. globální.

 ```javascript
  
 if(true) {
 
}

console.log(globalni) //'Tohle je globální proměnná'

console.log(tohleNeniGlobalni) //ReferenceError: tohleNeniGlobalni is not defined

console.log(tohleNeniTakeGlobalni) //ReferenceError: tohleNeniTakeGlobalni is not defined

```

