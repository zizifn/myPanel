/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// we only need to use the utility during development so we can check NODE_ENV
// (note: this check is recommended but completely optional)
if (process.env.NODE_ENV === 'development') {
    // we import the utility from the next-dev submodule
    const { setupDevBindings } = require("@cloudflare/next-on-pages/__experimental__next-dev");

    // we call the utility with the bindings we want to have access to
    setupDevBindings({
        kvNamespaces: ['MY_KV_1', 'MY_KV_2'],
        r2Buckets: ['MY_R2'],
        durableObjects: {
            MY_DO: {
                scriptName: 'do-worker',
                className: 'DurableObjectClass',
            },
        },
        d1Databases: ["TEST_D1"]
        // ...
    });
}
