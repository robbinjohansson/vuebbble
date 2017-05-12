## Vuebbble
Simple vue component displaying shots from a user using the dribbble api.

### Getting started
```bash
$ yarn add vuebbble --dev
# or ...
$ npm i vuebbble --save-dev
```

### Usage
##### 1. [Register](https://dribbble.com/account/applications/new) your dribbble application

##### 2. Import vuebbble
```javascript
import Vuebbble from "vuebbble";
```

##### 3. Register component
```javascript
var app = new Vue({
  el: '#app',

  components: { Vuebbble }
});
```

##### 4. Display the component
```html
<vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME"></vuebbble>
```
