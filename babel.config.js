module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
          '@assets': './assets',
        },
        cwd: 'packagejson',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
