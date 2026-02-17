export default {
    base: './',
    server: {
        proxy: {
            '/send-form': {
                target: 'http://api.yuri-kin.ru',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/send-form/, '')
            }
        }
    }
}