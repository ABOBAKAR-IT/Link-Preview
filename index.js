const { parser } = require('html-metadata-parser');
(async () => {
    var result = await parser('https://shivamethical.medium.com/creating-web-page-preview-while-sharing-url-via-social-applications-like-whats-app-fb-cd2e19b11bf2');
    console.log(JSON.stringify(result, null, 3));
})();