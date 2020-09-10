function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('url').value
  Client.checkForName(formText)
  const expression = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  const regex = new RegExp(expression);

  console.log("::: Form Submitted :::")

  if (regex.test(formText)) {
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
  else {
      alert("Please provide correct URL format")
  }
}

export { handleSubmit }
