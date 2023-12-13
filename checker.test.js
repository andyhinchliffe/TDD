const checkPassword = require("./checker");


// 1st test

// expect is from jest (it takes the function we want to test, which is checkPassword)
// toBe returns 
test("return false when given an empty string", () => {
expect(checkPassword("")).toBe(false);
});


// check now to see if it passes when given a password of 8 chars long but no letters

test("return false when given a password length is not 8 or more", () => {
    expect(checkPassword("1234567")).toBe(false);
});

test("return false when a password length is 20 or greater",() => {

    expect(checkPassword("123456789012345678901")).toBe(false);
})

test("return false when no letters", () => {
    expect(checkPassword("123456789")).toBe(false);
});


    test("return false when no numbers", () => {
        expect(checkPassword("aaaaaaaaaaaa")).toBe(false);
    
});



test("return false when no Capital", ()=> {

    expect(checkPassword("12345678ak")).toBe(false);
})

test ("return false when no symbol", ()=>{

    expect (checkPassword("Abcdefefg")).toBe(false);
})


test("return true when given a password of 8 chars long and contains letters, contains number", () => {
    expect(checkPassword("Helloworld123")).toBe(true);
});