# Vuebbble
Simple vue component displaying shots from a user using the dribbble api.

[![npm](https://img.shields.io/npm/v/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)
[![npm](https://img.shields.io/npm/dt/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)
[![npm](https://img.shields.io/npm/l/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)

## Getting started
``` bash
$ yarn add vuebbble --dev
# or ...
$ npm i vuebbble --save-dev
```

## Usage
#### 1. [Register](https://dribbble.com/account/applications/new) your dribbble application

#### 2. Install Vuebbble

##### Global:

This will make **\<vuebbble>** available globally within your Vue app:

``` javascript
window.Vue = require('vue');
var Vuebbble = require('vuebbble');
window.Vue.use(Vuebbble);
```

##### Local:

Include **\<vuebbble>** directly into your component using import:

``` vue
<template>
    <vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME"></vuebbble>
</template>

<script>
    import Vuebbble from 'vuebbble';

    export default {
        // ...
    }
</script>
```

#### 3. Display the component

``` html
<vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME"></vuebbble>
```

## Available properties

Prop           | Data Type  | Required  | Default   | Description
-------------- | ---------- | --------- | -------   | -----------
`token`        | String     | `true`    |           | Application client access token
`user`         | String     | `true`    |           | User to display shots from
