const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

let pagesToRender = ['/', '/projects', '/quotes', '/poems', '/gallery', '/hire-Hasil']

for (let index = 1; index <= 19; index++) {
  pagesToRender.push(`/project/${index}/a`)
}

for (let index = 1; index <= 10; index++) {
  pagesToRender.push(`/poem/${index}/a`)
}

for (let index = 1; index <= 11; index++) {
  pagesToRender.push(`/quote/${index}/a`)
}

console.log('Pages to render', JSON.stringify(pagesToRender))

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: pagesToRender,
        renderer: new Renderer({
          maxConcurrentRoutes: 5
        })
      })
    ]
  }
}
