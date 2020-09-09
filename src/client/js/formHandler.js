function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('url').value
  Client.checkForName(formText)
  const validator = Client.validURL(formText)

  console.log("::: Form Submitted :::")

  if (validator === false) {s
    alert("Please provide correct URL format");
  }
  else {
    let settings = {
      "url": "http://localhost:8081/APIresponse",
      "method": "POST",
      "timeout": 0,
      "data": {
        url: encodeURI(formText),
        model: "general"
      },
      "dataType": "json"
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      let json = $.parseJSON(response);
      document.getElementById('subjectivity').innerHTML = "Subjectivity: " + json.subjectivity;
      document.getElementById('agreement').innerHTML = "Agreement: " + json.agreement;
      document.getElementById('irony').innerHTML = "Variant: " + json.irony;
    });
  }
}

export { handleSubmit }
