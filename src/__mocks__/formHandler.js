export default function mockRequest(event) {
    event.preventDefault()

    let formText = "test text"
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    return res;
    /*.then(function(res) {
        console.log(res.time);
        return res.time;
    })*/
}

