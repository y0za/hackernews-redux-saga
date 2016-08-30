# build file size using React

```
$ NODE_ENV=production $(npm bin)/webpack --json --config build/webpack.prod.conf.js | webpack-bundle-size-analyzer
react: 645.42 KB (62.6%)
firebase: 137.95 KB (13.4%)
core-js: 57.77 KB (5.60%)
redux-saga: 55.03 KB (5.34%)
fbjs: 33.59 KB (3.26%)
regenerator-runtime: 22.32 KB (2.17%)
redux: 22.02 KB (2.14%)
react-redux: 19.37 KB (1.88%)
babel-runtime: 5.54 KB (0.538%)
redux-actions: 4.31 KB (0.419%)
lodash: 3.73 KB (0.362%)
process: 3.13 KB (0.304%)
object-assign: 1.95 KB (0.189%)
invariant: 1.48 KB (0.144%)
hoist-non-react-statics: 1.35 KB (0.131%)
symbol-observable: 451 B (0.0427%)
reduce-reducers: 419 B (0.0397%)
react-dom: 63 B (0.00597%)
<self>: 14.83 KB (1.44%)
```

| minify | gzip  |
| --:    | --:   |
| 421KB  | 132KB |
