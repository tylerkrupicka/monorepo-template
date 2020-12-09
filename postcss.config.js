const mixins = require('postcss-mixins');
const simpleVars = require('postcss-simple-vars');
const calc = require('postcss-calc');

const themed = require('postcss-themed').default;
const defaultConfig = require('@design-systems/build/postcss.config');

module.exports = (ctx) => {
  const config = defaultConfig(ctx);
  const [nested, ...rest] = config.plugins;
  const plugins = [
    nested,
    // Themed must come after nested so theme classnames are properly generated
    themed({
      config: {
        default: {},
      },
      defaultTheme: 'default',
    }),
    calc(),
    ...rest,
  ];

  return {
    ...config,
    plugins,
  };
};
