//get output from validURL
import { validURL } from '\src\client\js\validURL.js';
//const validateURL = require('..\src\client\js\validURL');

//perform test with test URL 
describe("URL validity testing", () => {
    test("This URL should be valid", () => {
        //provide a Test URL 
        let testURL = "https://www.nytimes.com/2020/09/07/us/politics/trump-election-campaign-fundraising.html";
        //let testURL = document.getElementById('url');
        test("TRUE", () => {
            const result = validURL(testURL);
            expect(result).toBeDefinded();
            expect(result).toBe(true); 
        });
    });
});
