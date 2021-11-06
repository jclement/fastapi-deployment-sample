const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,

      // strip off the /api when passing through to the development server
      pathRewrite: {'^/api' : ''}
    })
  );
};