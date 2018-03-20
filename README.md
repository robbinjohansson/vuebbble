[![Latest Version on NPM](https://img.shields.io/npm/v/vuebbble.svg?style=flat-square)](https://npmjs.com/package/vuebbble)
[![Total Downloads on NPM](https://img.shields.io/npm/dt/vuebbble.svg)](https://www.npmjs.com/package/vuebbble)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/robbinfellow/vuebbble/master.svg?style=flat-square)](https://travis-ci.org/robbinfellow/vuebbble)

# Vuebbble
Vue component to easily display dribbble shots from a user.

## Demo

[Link](https://robbinfellow.github.io/vuebbble)

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

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

* [Robbin Johansson](https://github.com/robbinfellow)
* [spatie/skeleton-vue](https://github.com/spatie/skeleton-vue)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
