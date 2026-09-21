/** @type {import('next').NextConfig} */
const path = require('path');
const appConfig = require('./nextjs-app/next.config.js');

module.exports = {
  ...appConfig,
  outputFileTracingRoot: path.join(__dirname),
};
