const express = require("express");


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

app.get("/bgResized.png", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/bgResized.png");
});

//// "API" section here

// Payment Initialization
app.post('/paymentInitiation', (req, res) => {
    console.log(req.body);
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
    // data.PaymentInitiationTransaction.Amount is second user input
    res.send(JSON.stringify(response));
})

//Direct Debit Mandate
app.post('/directDebitMandate', (req, res) => {
    console.log(req.body);
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




