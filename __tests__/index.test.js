
let { myValue, myArr, myName, add, obj, checkErrors } = require('../app/index');

// BeforeEach
beforeEach(() => {
    myValue++;
});

// AfterEach
afterEach(() => {
    myValue--;
});

describe('App Home Page', () => {

    it('add something', () => {
        expect(2 + 2).toBe(4);
    });
    
    it('subtract something', () => {
        expect(2 - 2).toBe(0);
    });
    
    it('get current myValue', () => {
        expect(myValue).toBe(2);
    });
    
    // test.skip('for skipping', () => {
    //     expect(2).toBe(2);
    // });
    
    // test.only('run only this', () => {
    //     expect(2).toBe(2);
    // });

    test('testing timeout fns', () => {
        expect(2).toBe(2);
    }, 6000);

    test.each(myArr)('with loops add 1 to %i', (num) => {
        expect(add(1, num)).toBe(1 + num);
    });

    test('testing matchers', () => {
        expect(myValue).toEqual(2);
        expect(myArr.length).toBeGreaterThanOrEqual(3);
        expect(myArr.length).toBeLessThanOrEqual(4);
        expect(myName).toMatch(/kash/i);
        expect(myArr).toContain(2);
    });
    
    test('testing truthy values', () => {
        expect(obj).toBeNull();
        expect(obj).not.toBeUndefined();
        expect(obj).toBeFalsy();
        expect(obj).not.toBeTruthy();
    });

    test('testing errors', () => {
        expect(checkErrors).toThrow();
        expect(checkErrors).toThrow(Error);
        expect(checkErrors).toThrow('Fatal Mistake');
        expect(checkErrors).toThrow(/fatal/i);
    });

});
