import validURL from '..\client\js\validURL.js'

describe("URL validity testing", () => {
    let testURL = "https://www.nytimes.com/";
    let falseInput = "2223494988fjklkljsfdjk";
    //let testURL = document.getElementById('url');
    test("TRUE", () => {
        const result = validURL(testURL);
        expect(result).toBeDefined();
        expect(result).toBe(true);
        const result2 = validURL(falseInput);
        expect(result2).toBeDefined();
        expect(result2).toBe(false);
    });
});