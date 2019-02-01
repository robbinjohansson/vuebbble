# Changelog

All notable changes to `vuebbble` will be documented in this file.

## [2.7.2] - 2019-02-01

### Fixed
- Upgrade `webpack-dev-server` to `^3.1.14` due to security vulnerability in `<3.1.11` (https://nvd.nist.gov/vuln/detail/CVE-2018-14732). As a result the following packages had to be updated: `vue-loader@^14.2.2`, `webpack@^4.29.0`. Also added `webpack-cli` as a dev dependency.

## [2.7.1] - 2019-01-31

### Added
- Added custom error message example to readme.

### Changed
- Moved repo to [robbinworks/vuebbble](https://github.com/robbinworks/vuebbble).
- Moved demo to [robbinworks.github.io/vuebbble/](https://robbinworks.github.io/vuebbble/).

## [2.7.0] - 2018-05-25

### Changed
- Take advantage of javascript object destructuring feature on slot scopes. (Props to [Adam Wathan](https://youtu.be/GWdOucfAzTo?t=8m) :heart:)
- Changed shot slot name from `shots` to `shot`

## [2.6.0] - 2018-04-04

### Changed
- Updated to dribbble `v2` API (v1 deprecated).

### Removed
- Removed prop: `user`, no longer used in `v2` API.

## [2.5.0] - 2018-03-20

### Changed
- Refactor code/plugin using [spatie/skeleton-vue](https://github.com/spatie/skeleton-vue).
