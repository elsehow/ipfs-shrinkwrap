#!/usr/local/bin/node

// This takes an argument -p to a package.json
// Requires that ipfs daemon is running.
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))
var routine = argv._[0]
var packjson = JSON.parse(fs.readFileSync(argv.p).toString())
if (!packjson)
  errorOut('ERR! No package.json found.')


function relative (p) {
  return require('path').join(__dirname, p)
}
function errorOut (msg) {
  throw new Error(msg)
  process.exit(1)
}
function printHelp () {
  fs.createReadStream(relative('help.txt')).pipe(process.stdout)
}
function shrinkwrap () {
  var execSync = require('child_process').execSync
  var shrinkHash = execSync('ipfs add -rHq node_modules | tail -n 1').toString().trim()
  packjson['ipfs-shrinkwrap'] = shrinkHash
  fs.writeFileSync(argv.p, JSON.stringify(packjson, null, '  '))
  console.log('Shrinkwrapped node_modules/ ', shrinkHash)
}

function install () {
  var hash = packjson['ipfs-shrinkwrap']
  if (!hash)
    errorOut('ERR! No ipfs-shrinkwrap field found in package.json.')
  var spawn = require('child_process').spawn
  spawn('ipfs', ['get', hash, '-o=node_modules/'], {
    stdio: 'inherit'
  })
}

if (!routine) {
  shrinkwrap()
} else if (routine === 'install') {
  install()
} else {
  printHelp()
}
