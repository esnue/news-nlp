import { validURL } from '..\client\js\validURL.js'

describe("URL validity testing", () => {
    let testURL = "https://www.nytimes.com/2020/09/07/us/politics/trump-election-campaign-fundraising.html";
    //let testURL = document.getElementById('url');
    test("TRUE", () => {
        const result = validURL(testURL);
        expect(result).toBeDefined();
        expect(result).toBe(true);
    });
});