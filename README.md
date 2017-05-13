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

##### 2. Require vuebbble
```javascript
var Vuebbble = require('vuebbble');
Vue.use(Vuebbble);
```

##### 3. Display the component
```html
<vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME"></vuebbble>
```

### Available properties

Prop           | Data Type  | Required  | Default   | Description
-------------- | ---------- | --------- | -------   | -----------
`token`        | String     | `true`    |           | Application client access token
`user`         | String     | `true`    |           | User to display shots from