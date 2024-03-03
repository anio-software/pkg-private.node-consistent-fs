#!/bin/bash -euf

node generateMethodsIndexFile.mjs

./node_modules/.bin/npm-package-bundler .
