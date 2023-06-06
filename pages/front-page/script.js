// This function only works correctly when called from the button, not from the console.
async function localAPILogic(){
    timesClicked++;
    // Get the data from the form bodies and turn into JSON
    let formData = {
        "field1": document.querySelector("#field1").value,
        "field2": document.querySelector("#field2").value
    };

    console.log(formData);

    // Post the data 
    const url = "/";
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => response.text())
    .then(text => {
        // Parse the Response Text
        console.log(text);
        let JSONresponse = JSON.parse(text)
        console.log(JSONresponse);
        let { field1 , field2 } = JSONresponse;
        
        // appending to content
        serverResponseText = `The local server responded with ${field1} and ${field2}`;
		addResponseBlob(serverResponseText, "Local API");
    })
    .catch(error => console.error(error));
}

// This is just an example for a second API
async function ageAPILogic(){
    timesClicked++;

    // Post the data 
    const url = `https://api.agify.io/?name=${document.querySelector("#field1").value}`;
    fetch(url)
    .then(response => response.text())
    .then(text => {
        // Parse the Response Text
        console.log("Age API raw data:");
        let JSONresponse = JSON.parse(text)
        console.log(JSONresponse);

        let { age , name } = JSONresponse;
        
        // appending to content
        serverResponseText = `According to Agify, ${name} is ${age} years old.`;
		addResponseBlob(serverResponseText, "Agify API");
    })
    .catch(error => console.error(error));
}

const addResponseBlob = (inputText, apiName) => {
    // Make the blob div first
    let elemInMem = document.createElement("div");
    elemInMem.setAttribute("class", "blob wid-1");

    // Making the API Label
    let apiCountText = document.createElement("span");
    apiCountText.setAttribute("style", "float: right");
    apiCountText.appendChild(document.createTextNode(apiName));

    // Constructing the full blob and pushing it to content
    elemInMem.appendChild(apiCountText);
    elemInMem.appendChild(document.createTextNode(inputText));
    document.querySelector(".content").appendChild(elemInMem);
}

const buttonLogic = () => {
    // Change the API Logic for each time the button is clicked
    switch(timesClicked % 2){
        case 0: localAPILogic(); break;
        case 1: ageAPILogic(); break;
        default: addResponseBlob("No more apis", "Error");
    }
}

// Adding click event listener to the button
document.querySelector("#myButtonClick").addEventListener("click", buttonLogic);

let timesClicked = 0;
