// This function only works correctly when called from the button, not from the console.
async function paymentInitiationAPILogic(){
    
    // Get the data from the form bodies and turn into JSON
    let formData = {
        "PaymentInitiationTransaction": {
            "PaymentTransactionType": "string",
            "RecurringPaymentRecord": "string",
            "RecurringPaymentCustomerReference": "string",
            "RecurringPaymentReference": "string",
            "PayerReference": "string",
            "PayerBankReference": "string",
            "PayerProductInstanceReference": "string",
            "PayeeReference": "string",
            "PayeeBankReference": "string",
            "PayeeProductInstanceReference": "string",
            "AccountNumber" : document.querySelector("#field1").value,
            "Amount": document.querySelector("#field2").value,
            "Currency": "string",
            "DateType": "string",
            "PaymentMechanism": "string",
            "PaymentPurpose": "string",
            "DocumentDirectoryEntryInstanceReference": "string",
            "DocumentContent": "string"
        }
    }
    

    console.log(formData);

    // Post the data 
    const url = "/paymentInitiation";
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
        // let { field1 , field2 } = JSONresponse;
        
        let accNum = JSONresponse.PaymentInitiationTransaction.AccountNumber;
        let prevBal = JSONresponse.PaymentInitiationTransaction.CurrentBalance;
        let currBal = JSONresponse.PaymentInitiationTransaction.PreviousBalance;

        // appending to content
        serverResponseText = `Account Number: ${accNum}\tPrevious Balance: ${prevBal}\tCurrent Balance: ${currBal}`;
		addResponseBlob(serverResponseText, "Payment Initiation");
    })
    .catch(error => {
        console.error(error);
        addResponseBlob(error, "Payment Initiation");
    });
}

async function directDebitMandateAPILogic(){
    // Get the data from the form bodies and turn into JSON
    let formData = {
        "PaymentInitiationTransaction": {
            "PaymentTransactionType": "string",
            "RecurringPaymentRecord": "string",
            "RecurringPaymentCustomerReference": "string",
            "RecurringPaymentReference": "string",
            "PayerReference": "string",
            "PayerBankReference": "string",
            "PayerProductInstanceReference": "string",
            "PayeeReference": "string",
            "PayeeBankReference": "string",
            "PayeeProductInstanceReference": "string",
            "AccountNumber" : document.querySelector("#field1").value,
            "Amount": document.querySelector("#field2").value,
            "Currency": "string",
            "DateType": "string",
            "PaymentMechanism": "string",
            "PaymentPurpose": "string",
            "DocumentDirectoryEntryInstanceReference": "string",
            "DocumentContent": "string"
        }
    }
    

    console.log(formData);

    // Post the data 
    const url = "/directDebitMandate";
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
        // let { field1 , field2 } = JSONresponse;
        
        let accNum = JSONresponse.PaymentInitiationTransaction.AccountNumber;
        let prevBal = JSONresponse.PaymentInitiationTransaction.CurrentBalance;
        let currBal = JSONresponse.PaymentInitiationTransaction.PreviousBalance;

        // appending to content
        serverResponseText = `Account Number: ${accNum}\tPrevious Balance: ${prevBal}\tCurrent Balance: ${currBal}`;
		addResponseBlob(serverResponseText, "Direct Debit Mandate");
    })
    .catch(error => {
        console.error(error);
        addResponseBlob(error, "Direct Debit Mandate");
    });
}

async function paymentOrderAPILogic(){
    addResponseBlob("Logic not implemented", "Payment Order");
}

async function paymentExecutionAPILogic(){
    addResponseBlob("Logic not implemented", "Payment Execution");
}

async function positionKeepingAPILogic(){
    addResponseBlob("Logic not implemented", "Position Keeping");
}

async function currentAccountAPILogic(){
    addResponseBlob("Logic not implemented", "Current Account");
}








/* Example of API that uses get requests only.
async function ageAPILogic(){
   

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

*/

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
    switch(timesClicked % 6){
        case 0: paymentInitiationAPILogic(); break;
        case 1: directDebitMandateAPILogic(); break;
        case 2: paymentOrderAPILogic(); break;
        case 3: paymentExecutionAPILogic(); break;
        case 4: positionKeepingAPILogic(); break;
        case 5: currentAccountAPILogic(); break;
        default: addResponseBlob("No more apis", "Error");
    }
    timesClicked++;
}


// Adding click event listener to the button
document.querySelector("#buttonClick").addEventListener("click", buttonLogic);

// Adding event liste
document.querySelector('#buttonClick').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        buttonLogic();
    }
});

let timesClicked = 0;
