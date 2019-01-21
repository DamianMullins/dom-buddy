# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v2.4.0
------------------------------
*January 17, 2018*

### Changed
- Add basic cookie functionality

v2.3.0
------------------------------
*March 13, 2018*

### Changed
- Updated to use `babel-preset-env`.


v2.2.0
------------------------------
*March 13, 2018*

### Added
- Added prettier.
- Added `precommit` hook to automatically format changed files using prettier.

### Changed
- All source files have been formatted using prettier.


v2.1.0
------------------------------
*October 12, 2017*

### Added
- Added `getBodyHtml` function.
- Added unit tests for `getBodyHtml` function.
- Added unit test for `getHtml`.
- Module now exports the `getBodyHtml` and `setBodyHtml` functions.

### Changed
- `getHtml` element no longer defaults to `document.body`.
- Minor refactoring of the `html` module.


v2.0.0
------------------------------
*October 11, 2017*

### Added
- Added `setBodyHtml` function to `html` module.
- Added unit tests.
- Added unit test npm scripts.
- JS unit test coverage reported to coveralls.
- Added coveralls badge to readme.

### Changed
- Prepare script uses `concurrently` in order to run tasks concurrently..!


v1.0.2
------------------------------
*September 18, 2017*

### Changed
- Updated npm script hooks.


v1.0.1
------------------------------
*September 18, 2017*

### Changed
- Updated npm script hooks.
- Moved build packages in `devDependencies`.


v0.0.1
------------------------------
*September 18, 2017*

### Added
- Added initial project files.
