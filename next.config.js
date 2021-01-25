const withSASS = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");
const withProgressBar = require('next-progressbar');


module.exports = withProgressBar(

withCSS(withSASS({
productionBrowserSourceMaps: true,
webpack: (config, { isServer }) => {
if (!isServer) {
config = commonsChunkConfig(config, /\.(sass|scss|css)$/)
}

return config
},
sassLoaderOptions: {
indentedSyntax: true,
indentWidth: 4,
outputStyle: "expanded"
}
})

)
)




;