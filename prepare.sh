#!/bin/bash -euf

node generateMethodsIndexFile.mjs

./node_modules/.bin/bundle-package .
