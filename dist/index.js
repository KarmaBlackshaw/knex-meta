"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkEZUCZHGVjs = require('./chunk-EZUCZHGV.js');

// src/index.ts
var _fastglob = require('fast-glob'); var _fastglob2 = _interopRequireDefault(_fastglob);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var src_default = (knex, options) => {
  const paths = _fastglob2.default.sync("./core/**/index.{ts,js}", Object.assign({
    cwd: __dirname
  }, options));
  for (let i = 0; i < paths.length; i++) {
    const fnPath = paths[i];
    const method = fnPath.replace(/^\.\/core\/(.+?)\/.*$/, "$1");
    const methodModule = _chunkEZUCZHGVjs.__require.call(void 0, _path2.default.join(__dirname, fnPath));
    const fn = methodModule[method];
    knex.QueryBuilder.extend(fn.name, fn);
  }
  return knex;
};


exports.default = src_default;
