@wordpress/scripts regression exemple

Demonstrates fonts dependency fail loading since @wordpress/script version 29.0.0

```shell
npm i
npm build
```

Build fails with errors like : 

```
ERROR in ./blocks/editor.scss (./blocks/editor.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./blocks/editor.scss) 5:36-89
Module not found: Error: Can't resolve 'fonts/flexslider-icon.eot' in '/home/www/user/Tests/wordpress-scripts-test/blocks'
```

Downgrade to @wordpress/scripts v28.6.0, and build

```shell
npm i -D @wordpress/scripts@28.6.0
npm build
```

It builds