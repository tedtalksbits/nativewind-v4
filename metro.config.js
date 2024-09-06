const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.resolver.sourceExts.push('mjs');
config.resolver.sourceExts.push('db');
const { withNativeWind } = require('nativewind/metro');
module.exports = withNativeWind(config, {
  input: './global.css',
});
