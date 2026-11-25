const { test } = require('@playwright/test');

test.beforeAll(async () => {
    console.log('Executing before all tests');
});

test.beforeEach(async () => {
    console.log('before each block');
});

test('test1', async () => {
    console.log('test 1');
});

test('test2', async () => {
    console.log('test 2');
});

test('test3', async () => {
    console.log('test 3');
});

test.afterEach(async () => {
    console.log('After Each block');
});

test.afterAll(async () => {
    console.log('Executing after all tests');
});

test.describe('Login Module', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('Valid login', async () => {
        console.log('Login test');
    });

    test('Invalid login', async () => {
        console.log('Invalid login test');
    });

});

test.describe('Registration Module', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://google.com/');
    });

    test('Registration test', async () => {
        console.log('Registration test');
    });

});

test.beforeEach(async () => {
    console.log('Outer beforeEach');
});

test.describe('Login', () => {

    test.beforeEach(async () => {
        console.log('Inner beforeEach');
    });

    test('Login test', async () => {
        console.log('Test execution');
    });

});