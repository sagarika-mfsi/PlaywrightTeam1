const { test } = require('@playwright/test');

test.describe('Login Functionality', () => {

    test('Valid login', async () => {
        console.log('test 1');
    });

    test('Invalid login', async () => {
        console.log('test 2');
    });

    test('Empty login', async () => {
        console.log('test 3');
    });

});

test.describe('Nested block', () => {

    test.describe('block1', () => {
        test('test1', async () => {
            console.log("test1 from block1");
        });
        test('test2', async () => {
            console.log("test2 from block1");
        });
    });

    test.describe('block2', () => {
        test('test3', async () => {
            console.log("test3 from block2");
        });
        test('test4', async () => {
            console.log("test4 from block2");
        });
    });

});