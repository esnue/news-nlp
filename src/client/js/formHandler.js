function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('url').value
  Client.checkForName(formText)

  console.log("::: Form Submitted :::")

  if (formText == "") {
    alert("Please fill out the form");
    return false;
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
