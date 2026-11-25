const { test } = require('@playwright/test');

test('test1 @demoTag', async () => {
    console.log("hey from @demotag ");

})
test('test2', { tag: '@demo2Tag' }, async () => {
    console.log("hey from @demo2tag ");
})
test('Verify login @smoke', async () => {

    console.log("i am smoke test1!!");

});

test('Verify cart functionality @regression', async () => {

    console.log("i am regression test!!");

});

test('Verify checkout @smoke @regression', async () => {

    console.log("i am smoke + regression");

});