const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // 将wyy的地址代理到源地址
  app.use(
    '/wyy',
    createProxyMiddleware({
      target: 'http://123.57.176.198:3000/',
      secure: true, // 是否验证证书
      changeOrigin: true,
      pathRewrite: {
        '/wyy': '',
      },
      cookieDomainRewrite: 'http://123.57.176.198:3000/',
    })
  );
};
