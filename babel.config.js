module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@src": './src',
            "@screens": './src/screens',
            "@navigation": './src/navigation',
            "@icons": './assets/icons',
            "@styles": './src/styles/index.ts',
            "@model": './src/model/index.ts',
            "@component": './src/component/index.ts'
          }
        }
      ]
    ]
  };
};
