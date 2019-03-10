// require 加载 browser-sync 模块
const bs = require('browser-sync').create('bs');

// .init 启动服务器
bs.init({
    server: './html'
});

// 现在请BS，而不是方法
// 主Browsersync模块出口
bs.reload('*.html');

bs.watch('html/*.html').on('change', bs.reload);

// bs.watch('css/*.css', function (event, file) {
//     if (event === 'change') {
//         bs.reload('*.css');
//     }
// });

setInterval(() => {
    bs.notify('This message will only last a second', 1000);
    // bs.reload();
}, 3000)