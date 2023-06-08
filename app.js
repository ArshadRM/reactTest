const express = require("express");
//const axios = require('axios');
//axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/index.html");
});

app.get("/styles.css", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/styles.css");
});

app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/script.js");
});

app.get("/renderjson.js", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/renderjson.js");
});

app.get("/bgResized.png", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/bgResized.png");
});

//// "API" section here

// Payment Initialization
app.post('/paymentInitiation', (req, res) => {
    //console.log(req.body);

    /*
    axios.post('http://localhost:3000/directDebitMandate', JSON.stringify(data))
        .then((POSTres) => {
            res.send(JSON.stringify(POSTres));
        }).catch((err) => {
            console.error(err);
        });
    */

    /*
    request({
        url: "http://localhost:3000/directDebitMandate",
        method: "POST",
        json: true,  
        body: data
    }, function (error, response, body){
        //console.log(response);
        res.send(JSON.stringify(response));
    });
    */

    /*
    const url = "";
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
        res.send(JSON.stringify(JSONresponse));
    })
    .catch(error => {
        console.error(error);
        addResponseBlob(error, "Direct Debit Mandate");
    });
    */

    let data = req.body;
    console.log(data);
    let response = {
        "PaymentInitiationTransaction": {
          "RecurringPaymentRecord": "string",
          "RecurringPaymentCustomerReference": "string",
          "RecurringPaymentReference": "string",
          "DateType": "string",
          "PaymentFeesCharges": "string",
          "DocumentDirectoryEntryInstanceReference": "string",
          "AccountNumber": data.PaymentInitiationTransaction.AccountNumber,
          "PreviousBalance": "100",
          "CurrentBalance": "100",
        }
    };
    res.send(JSON.stringify(response));


    // data.PaymentInitiationTransaction.Amount is second user input
    
})

//Direct Debit Mandate
app.post('/directDebitMandate', (req, res) => {
    //console.log(req.body);
    let data = req.body;
    console.log(data);
    let response = {
        "PaymentInitiationTransaction": {
          "RecurringPaymentRecord": "string",
          "RecurringPaymentCustomerReference": "string",
          "RecurringPaymentReference": "string",
          "DateType": "string",
          "PaymentFeesCharges": "string",
          "DocumentDirectoryEntryInstanceReference": "string",
          "AccountNumber": data.PaymentInitiationTransaction.AccountNumber,
          "PreviousBalance": "100",
          "CurrentBalance": "100",
        }
    };
    res.send(JSON.stringify(response));
})



app.listen(port, () =>{
    console.log(`App running on http://localhost:${port}`);
});




