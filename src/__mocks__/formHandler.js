const fetch = require("node-fetch");
import { checkForName } from '../client/js/nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    let formText = "test text"
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    /*.then(function(res) {
        console.log(json.time);
        //return json.time;
    })*/
}

export { handleSubmit }

