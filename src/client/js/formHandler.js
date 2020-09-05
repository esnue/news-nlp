function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    let settings = {
        "url": "http://localhost:8080/APIresponse",
        "method": "POST",
        "timeout": 0,
        "data": {
            txt: encodeURI(formText),
            model: "general"
        },
        "dataType": "json"
      };
    
      $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + response.subjectivity;
        document.getElementById('agreement').innerHTML = "Agreement: " + response.agreement;
        document.getElementById('irony').innerHTML = "Variant: " + response.irony;
      });
}

export { handleSubmit }
