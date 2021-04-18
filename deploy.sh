#!/usr/bin/env bash

rm -f ./dist/bundle-* \
    && rm -f ./dist/index.html \
    && yarn run build \
    && cd dist/ \
    && git add -A \
    && git commit -a -m 'build' \
    && git push \
    && cd ..
