const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

const basePath = '/hillshacks2026';

module.exports = withMDX({
    pageExtensions: ['js', 'mdx'],
    basePath: basePath,
    assetPrefix: basePath,
    // static export mode
    output: 'export',
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
})