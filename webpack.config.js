var Encore = require('@symfony/webpack-encore');
const PurgeCssPlugin = require('purgecss-webpack-plugin');

const glob = require('glob-all');
const path = require('path');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build')
    .copyFiles({
        from: './assets/play/images/',
        to: 'play/images/[folder]/[name].[hash:8].[ext]',
        pattern: /\.(png|jpg|jpeg|svg|gif)$/
    })
    .copyFiles({
        from: './assets/butterfly/images/',
        to: 'butterfly/images/[folder]/[name].[hash:8].[ext]',
        pattern: /\.(png|jpg|jpeg|svg|gif)$/
    })
    .copyFiles({
        from: './assets/core-ui/assets/images',
        to: 'core-ui/images/[folder]/[name].[ext]',
        pattern: /\.(png|jpg|jpeg|svg|gif)$/
    })
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('core-ui', './assets/dashboard.jsx')
    .addEntry('play', './assets/play/play.js')
    .addEntry('butterfly', './assets/butterfly/butterfly.js')

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    // .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()
    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            config: path.resolve(__dirname, 'postcss.config.js')
        }
    })
    // .addRule(
    //     {
    //         test: /\.png$/,
    //         loader: 'file-loader',
    //         assert: {
    //             name: '[name].[hash:8].[ext]'
    //         }
    //     }
    // )
    .addRule(
        {
            test: /\.svg$/,
            loader: 'file-loader',
            assert: {
                name: '[name].[hash:8].[ext]'
            }
        }
    )

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    .enableTypeScriptLoader()
    //.enableForkedTypeScriptTypesChecking()

    // uncomment if you use React
    .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()
;
if (Encore.isProduction()) {
    Encore.addPlugin(new PurgeCssPlugin({
        paths: glob.sync([
            path.join(__dirname, 'templates/play/**/*.html.twig'),
        ]),
        content: ["templates/play/**/*.html.twig"],
        defaultExtractor: (content) => {
            return content.match(/[\w-/:]+(?<!:)/g) || [];
        }
    }));
}

module.exports = Encore.getWebpackConfig();
