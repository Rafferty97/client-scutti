var cmmn = require('cmmn');
var path = require('path');

var argv = require('minimist')(process.argv.slice(2));
var build = argv.watch ? cmmn.buildWatch : cmmn.build;
var entry = argv.static ? 'src/build.js' : 'src/server.js';

console.log('Building...');

build({
  entry: path.join(__dirname, entry),
  router: path.join(__dirname, 'src/router.js'),
  datasource: path.join(__dirname, 'src/datasource.js'),
  buildDir: path.join(__dirname, argv.static ? 'build' : 'tmp'),
  node_modules: path.join(__dirname, 'node_modules'),
  publicPath: argv.static ? '/' : '/',
  clientExterns: ['whatwg-fetch']
})
  .then(function(stats) {
    console.log('Project is built.');
  })
  .catch(function (err) {
    console.error(err);
  });
