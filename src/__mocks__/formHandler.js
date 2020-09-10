const fetch = require("node-fetch");

function handleSubmit(event) {
    event.preventDefault()

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        //console.log(json.time);
        return res;
    })
}

export { handleSubmit }

