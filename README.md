[![Latest Version on NPM](https://img.shields.io/npm/v/vuebbble.svg?style=flat-square)](https://npmjs.com/package/vuebbble)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/robbinworks/vuebbble/master.svg?style=flat-square)](https://travis-ci.org/robbinworks/vuebbble)

# Vuebbble
Vue component to easily display dribbble shots from a user using the `v2` API.

## Demo

[Link](https://robbinworks.github.io/vuebbble/)

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

``` vue
<template>
    <vuebbble
        :token="token"
        :count="count"
    >
        <div slot="shot" slot-scope="{ shot }">
            <img :src="shot.images.hidpi" :alt="shot.title">
        </div>

        <!-- Optional: Custom error message markup -->
        <div slot="error" slot-scope="{ error }">
            {{ error }}
        </div>
    </vuebbble>
</template>

<script>
import { Vuebbble } from 'vuebbble';
Vue.component('vuebbble', Vuebbble);

export default {
    data() {
        return {
            token: 'ACCESS_TOKEN',
            count: 9,
        };
    },
};
</script>
```

> :mag: Inspect the component using Vue devtools to see all available data from the response.

## Available properties

Prop           | Data Type  | Default  | Required  | Description
-------------- | ---------- | -------- | -------   | -----------
`token`        | String     |          | `true`    | Application access token
`count`        | Number     | 5        | `false`   | Number of shots to fetch

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

* [Robbin Johansson](https://github.com/robbinworks)
* [spatie/skeleton-vue](https://github.com/spatie/skeleton-vue)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
