/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

const Environment = require('./scripts/build/environment');
const JsBundleFactory = require('./scripts/webpack/js-bundle-factory');
const Globber = require('./scripts/webpack/globber');
const PluginFactory = require('./scripts/webpack/plugin-factory');
const PathResolver = require('./scripts/build/path-resolver');

const env = new Environment();
env.setBabelEnv();

const pathResolver = new PathResolver();
const globber = new Globber({pathResolver});
const pluginFactory = new PluginFactory({globber});
const jsBundleFactory = new JsBundleFactory({env, pathResolver, globber, pluginFactory});

const OUTPUT = {
  fsDirAbsolutePath: pathResolver.getAbsolutePath('./build'),
};

module.exports = [
  jsBundleFactory.createMainJsCombined({output: OUTPUT}),
  jsBundleFactory.createMainJsALaCarte({output: OUTPUT}),
];
