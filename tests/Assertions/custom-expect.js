const { expect } = require('@playwright/test');

expect.extend({
    toStartWithAssetPrefix(received) {
        const pass = received.startsWith('asset_');
        return {
            pass,
            message: () =>
                `Expected "${received}" to start with "asset_"`,
        };
    },
});
module.exports = { expect };
