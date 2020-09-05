function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const application_key = "3462d12a9d6216638bfb02939d33b267";
    var settings = {
        "url": `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&lang=en&txt=${formText}&model=general`,
        "method": "POST",
        "timeout": 0,
      };
    
      $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById('subjectivity').innerHTML = response.subjectivity;
        document.getElementById('agreement').innerHTML = response.agreement;
      });
}

export { handleSubmit }
