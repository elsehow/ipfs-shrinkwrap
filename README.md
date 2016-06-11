# ipfs-shrinkwrap

[![ipfs-shrinkwrap](https://ipfs.pics/ipfs/QmXV8a5eSGeKBCQjFzsMGyYmoYvshyX8SYBb9JCTEsr7gE)](https://github.com/elsehow/ipfs-shrinkwrap)

Shrinkwrap your npm dependencies by backing them up to IPFS.

## install

    npm install -g ipfs-shrinkwrap

## use

First, run an [IPFS daemon](https://ipfs.io/).

### Shrinkwrapping your dependencies

Make sure you have a `node_modules/` directory with all the deps you want to shinkwrap. Then,

    ipfs-shrinkwrap

This will add a field "ipfs-shrinkwrap" to your `package.json`.
Re-run this command whenever your dependencies change, and the the IPFS hash in `package.json` will be updated to point at the new dependencies.

### Installing dependeices from IPFS

To install your dependencies from ipfs (rather than npm), just

    ipfs-shrinkwrap install

This will install all this package's dependencies into `node_modules/`

## license

BSD
