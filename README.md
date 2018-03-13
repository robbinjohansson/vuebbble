[![npm](https://img.shields.io/npm/v/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)
[![npm](https://img.shields.io/npm/dt/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)
[![npm](https://img.shields.io/npm/l/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)

# Vuebbble
Vue component to easily display dribbble shots from a user.

## Installation
```shell
$ yarn add vuebbble --dev
# or ...
$ npm i vuebbble --save-dev
```

Register the component:

```javascript
import Vue from 'vue';
import { Vuebbble } from 'vuebbble';

Vue.component('vuebbble', Vuebbble);
```

Alternatively using `Vue.use()` to register the component:

```javascript
import Vuebbble from 'vuebbble';

Vue.use(Vuebbble);
```

## Usage

Display the component using [scoped slots.](https://vuejs.org/v2/guide/components.html#Scoped-Slots)

```html
<template>
    <vuebbble token="CLIENT_ACCESS_TOKEN" user="USERNAME" :count="10">
        <template slot="shots" slot-scope="props">
            <img :src="props.shot.images.hidpi" :alt="props.shot.title">
        </template>
    </vuebbble>
</template>
```

## Available properties

Prop           | Data Type  | Required  | Default   | Description
-------------- | ---------- | --------- | -------   | -----------
`token`        | String     | `true`    |           | Application client access token
`user`         | String     | `true`    |           | User to display shots from
`count`        | Number     | `false`   | 5         | Number of shots to fetch

## Credits

* [Robbin Johansson](https://github.com/robbinfellow)

## License

Vuebbble is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
