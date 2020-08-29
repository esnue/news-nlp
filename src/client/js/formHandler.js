function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const postData = async (url='', data={} =>
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(response);
        try {
            const newData = await response.json();
            console.log(newData);
            // appropriately handle the error
        } catch (error) {
            console.log('Unable to POST data', error);
        }
    postData('http://localhost:8081/add', options);
    .then(res => {
     return res.json()
    })
    .then(function(data) {
        document.getElementById('subjectivity').innerHTML = data.subjectivity;
        document.getElementById('agreement').innerHTML = data.agreement;
    })
}

export { handleSubmit }
