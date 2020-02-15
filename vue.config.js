module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'dist/' : './',
    outputDir: '../dist',
    indexPath: '../index.html',
    devServer: {
        public: 'localhost:8080',
        host: 'localhost',
        port: 8080
    }
}