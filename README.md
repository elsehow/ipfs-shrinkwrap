# ipfs-shrinkwrap

shrinkwrap your npm dependencies by backing them up to IPFS.

## install

    npm install ipfs-shrinkwrap
    
## use

First, run an [IPFS daemon](https://ipfs.io/).

### Shrinkwrapping your dependencies

Make sure you have a `node_modules/` directory with all the deps you want to shinkwrap. Then,

    ipfs-shrinkwrap

This will add a field "ipfs-shrinkwrap" to your package.json.
Just re-run this command whenever your dependencies change, and you will re-shrinkwrap it.

### Installing dependeices from IPFS

To install your dependencies from ipfs (rather than npm), just

    ipfs-shrinkwrap install

This will install all this package's dependencies into node_modules/

## license

BSD
