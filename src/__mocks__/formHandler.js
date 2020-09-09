export default function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = "test text"
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    return res.time;
    /*.then(function(res) {
        console.log(res.time);
        return res.time;
    })*/
}

